import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { TbBellRinging } from 'react-icons/tb';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState( '' );

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='flex items-center justify-between gap-x-10'>
        <a href='#' className='font-bold text-xl hover:bg-opacity-75'>
          Dashboard V2
        </a>
        <div className='flex items-center gap-x-4'>
          <SearchBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
          <button className='text-gray-600 hover:text-gray-900'>
            <TbBellRinging size={ 20 } />
          </button>
          <button className='text-gray-600 hover:text-gray-900'>
            <FaUserCircle size={ 24 } />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;