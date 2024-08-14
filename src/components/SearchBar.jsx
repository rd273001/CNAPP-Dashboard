import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ( { searchTerm, setSearchTerm } ) => {
  return (
    <div className='relative group'>
      <input
        type='text'
        placeholder='Search anything...'
        value={ searchTerm }
        onChange={ ( e ) => setSearchTerm( e.target.value ) }
        className='w-full md:w-96 sm:w-80 pl-10 pr-4 py-1 rounded-lg outline-none ring-2 ring-blue-300 focus:ring-blue-500'
      />
      <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 group-hover:text-blue-500 group-focus-within:text-blue-500' />
    </div>
  );
};

export default SearchBar;