import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from '../redux/dashboard/widgetsSlice';
import { CgClose } from 'react-icons/cg';

const AddWidgetSidebar = ( { isOpen, onClose } ) => {
  const dispatch = useDispatch();
  const categories = useSelector( state => state.categories.categories );
  const [activeTab, setActiveTab] = useState( 'CSPM' );
  const [selectedWidgets, setSelectedWidgets] = useState( {} );

  const handleCheckboxChange = ( categoryId, widgetId ) => {
    setSelectedWidgets( prev => ( {
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [widgetId]: !prev[categoryId]?.[widgetId]
      }
    } ) );

    // Immediately add or remove the widget
    if ( selectedWidgets[categoryId]?.[widgetId] ) {
      dispatch( removeWidget( { categoryId, widgetId } ) );
    } else {
      dispatch( addWidget( { categoryId, widgetId } ) );
    }
  };

  return (
    <div className={ `fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform ${ isOpen ? 'translate-x-0' : 'translate-x-full' } transition-transform duration-300 ease-in-out` }>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Add Widget</h2>
          <button onClick={ onClose } className='text-red-500 hover:text-red-700'>
            <CgClose size={ 25 } className='active:scale-125' />
          </button>
        </div>
        <p className='mb-4'>Personalise your dashboard by adding the following widget</p>
        <div className='flex mb-4'>
          { categories.map( category => (
            <button
              key={ category.id }
              onClick={ () => setActiveTab( String(category.name).split(' ')[0] ) }
              className={ `mr-2 px-3 py-1 rounded ${ activeTab === String(category.name).split(' ')[0] ? 'bg-blue-500 text-white' : 'bg-gray-200' }` }
            >
              { String(category.name).split(' ')[0] }
            </button>
          ) ) }
        </div>
        { categories.map( category => (
          <div key={ category.id } className={ activeTab === String(category.name).split(' ')[0] ? '' : 'hidden' }>
            { category.widgets.map( widget => (
              <div key={ widget.id } className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id={ `widget-${ category.id }-${ widget.id }` }
                  checked={ selectedWidgets[category.id]?.[widget.id] || false }
                  onChange={ () => handleCheckboxChange( category.id, widget.id ) }
                  className='mr-2'
                />
                <label htmlFor={ `widget-${ category.id }-${ widget.id }` }>{ widget.name }</label>
              </div>
            ) ) }
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default AddWidgetSidebar;