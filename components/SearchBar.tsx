'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { SearchManufacturer } from './';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={'/magnifying-glass.svg'}
            alt={'magnifying glass'}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

//server side
// const SearchBar = () => {
//client side
const SearchBar = ({ setManufacturer, setModel }: any) => {

    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer.trim() === '' && searchModel.trim() === '') {
            return alert('Please provide some input');
        }

        //server side
        // updateSearchParams(searchModel.toLowerCase(), searchManufacturer.toLowerCase());
        //client side
        setModel(searchModel);
        setManufacturer(searchManufacturer);
    };

    //need function below only if server side
    const updateSearchParams = (model: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
            searchParams.set('model', model);
        } else {
            searchParams.delete('model');
        }

        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer');
        }

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };
    // need function above only if server side

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    //server side
                    // manufacturer={searchManufacturer}
                    // setManufacturer={setManufacturer}
                    //client side
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    //server side
                    // onChange={(e) => setModel(e.target.value)}
                    //client side
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar