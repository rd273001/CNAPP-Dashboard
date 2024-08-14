import React, { useState } from 'react';
import { FaBell, FaClock, FaPlus, FaSearch, FaUserCircle } from 'react-icons/fa';
import { TbBellRinging } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState( false );
  const [dateRange, setDateRange] = useState( 'Last 2 days' );

  const handleAddWidget = ( categoryId ) => {
    setSelectedCategoryId( categoryId );
    setIsModalOpen( true );
  };

  return (
    <div className='text-black'>
      {/* Header */ }
      <header className='bg-white shadow-md'>
        <Header />
      </header>

      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-2'>
        <div className='flex justify-between items-center'>
          <h1 className='sm:text-2xl text-xl font-semibold'>
            CNAPP Dashboard
          </h1>
          <div className='flex items-center gap-x-4'>
            <button
              onClick={ () => setIsSidebarOpen( true ) }
              className='flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors'
            >
              Add Widget<FaPlus className='ml-2' />
            </button>
            <div className='relative'>
              <select
                value={ dateRange }
                onChange={ ( e ) => setDateRange( e.target.value ) }
                className='bg-white border rounded-lg pl-10 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option>Last 2 days</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
              <FaClock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'></div>
    </div>
  );
};

export default Dashboard;