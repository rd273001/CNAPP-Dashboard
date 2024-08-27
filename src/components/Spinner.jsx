import React from 'react';

const Spinner = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <hr className='border-t-[5px] size-12 animate-spin border-blue-400 rounded-full' />
    </div>
  );
};

export default Spinner;