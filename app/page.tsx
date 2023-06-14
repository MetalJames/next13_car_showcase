'use client'

//code with commends will be clint side rendering

import { fetchCars } from '@/utils';
import { SearchBar, CustomFilter, Hero, CarCard, ShowMore } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
//server side only line below
import { HomeProps } from '@/types';
import { useEffect, useState } from 'react';
//only if client side
import Image from 'next/image';

//
// export default async function Home({ searchParams }: HomeProps) {
export default function Home() {

  // const allCars = await fetchCars({ 
  //   manufacturer: searchParams.manufacturer || '',
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || '',
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || '',
  // });

  //client side
  const [allCars, setAllCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  //search states
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  //filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  //pagination states
  const [limit, setLimit] = useState(10);

  //getcars function
  const getCars = async() => {
    setLoading(true);
    try {
      const allCars = await fetchCars({ 
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });
  
      setAllCars(allCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  },[fuel, year, limit, manufacturer, model])
  //

  //only if server side works well line below
  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          {/* in server side only place search  */}
          {/* <SearchBar /> */}
          {/* client side */}
          <SearchBar 
            setManufacturer={setManufacturer}
            setModel={setModel}
          />
          <div className="home__filter-container">
            {/* in server side only place search  */}
            {/* <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} /> */}
            {/* client side */}
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>
        {/* in server side only place search  */}
        {/* {!isDataEmpty ? ( */}
        {/* client side */}
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* only use this if client side rendering */}
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image 
                  src='./tire.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore
              //server side
              // pageNumber={(searchParams.limit || 10) / 10}
              // isNext={(searchParams.limit || 10) > allCars.length}
              //client side
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            {/* not sure for the next line below - does not do anything??? */}
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
