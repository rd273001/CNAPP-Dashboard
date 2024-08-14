import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Widget from './Widget';

const Category = ( { category } ) => {
  return (
    <div className='bg-white shadow rounded-lg p-4'>
      <h2 className='text-lg font-semibold mb-4'>{ category?.name }</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          category.widget?.map( widget => (
            <Widget />
          ) )
        }
        <div
          className='bg-gray-100 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200'
        // onClick={}
        >
          <button
            className='flex items-center bg-white sm:px-4 px-2 py-1.5 rounded-lg ring-inset ring-2 ring-gray-300 hover:ring-blue-500 active:bg-blue-100'
          // onClick={}
          >
            <FaPlus className='sm:mr-2 mr-1 text-gray-500' />Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;