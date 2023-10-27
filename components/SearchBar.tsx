"use client";
import { useState } from 'react';

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
    const [manufacturer, SetManufacturer] = useState('')

    const handleSearch = () =>{}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer = {manufacturer}
                SetManufacturer = {SetManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar