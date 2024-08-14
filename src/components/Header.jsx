import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { TbBellRinging } from 'react-icons/tb';
import { FaSearch, FaSearchMinus, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState( '' );
  const [isSearchVisible, setIsSearchVisible] = useState( false );

  const toggleSearchVisibility = () => {
    setIsSearchVisible( prev => !prev );
    setSearchTerm( '' );
  };

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='flex items-center justify-between gap-x-10 text-gray-500'>
        <a href='#' className='text-black font-bold md:text-2xl text-xl hover:bg-opacity-75'>
          Dashboard V2
        </a>
        <div className='flex items-center md:gap-x-6 gap-x-4'>
          <div className='sm:block hidden'>
            <SearchBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
          </div>
          { !isSearchVisible
            ? <FaSearch size={ 22 } onClick={ toggleSearchVisibility } className='sm:hidden' />
            : <FaSearchMinus size={ 24 } onClick={ toggleSearchVisibility } className='text-blue-500 sm:hidden text-xl' />
          }
          <button>
            <TbBellRinging size={ 24 } className='hover:text-gray-700 active:scale-110' />
          </button>
          <button>
            <FaUserCircle size={ 24 } className='hover:text-gray-800 active:scale-110' />
          </button>
        </div>
      </div>
      { isSearchVisible && <div className='sm:hidden block mt-2'>
        <SearchBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
      </div> }
    </div>
  );
};

export default Header;