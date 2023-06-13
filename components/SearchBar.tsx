'use client'

import { useState } from 'react'
import { SearchManufacturer } from './';

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();

        // if (manufacturer.trim() === "" && model.trim() === "") {
        //     return alert("Please provide some input");
        // }

        // updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                {/* <SearchButton otherClasses='sm:hidden' /> */}
            </div>
        </form>
    )
}

export default SearchBar