import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Modal from './Modal';
import { addCustomWidget } from '../redux/dashboard/widgetsSlice';

const AddWidgetModal = ( { onClose, categoryId } ) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState( '' );
  const [widgetType, setWidgetType] = useState( 'text' );
  const [widgetContent, setWidgetContent] = useState( '' );

  const uniqueId = uuid();

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if ( !widgetName ) {
      alert( 'Please add Widget name!' );
      return;
    }
    if ( widgetName && widgetType ) {
      const newWidget = {
        id: uniqueId,
        name: widgetName,
        type: widgetType,
        content: widgetContent,
      };
      if ( widgetType !== 'text' ) {
        alert( 'Only Text Widget can be added for now!' );
        return;
      }
      dispatch( addCustomWidget( { categoryId, widget: newWidget } ) );
      onClose();
    }
  };

  return (
    <Modal onClose={ onClose }>
      <h2 className='text-xl font-bold mb-4'>Add New Widget</h2>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          placeholder='Widget Name'
          value={ widgetName }
          onChange={ ( e ) => setWidgetName( e.target.value ) }
          className='w-full p-2 mb-2 border rounded'
        />
        <select
          value={ widgetType }
          onChange={ ( e ) => setWidgetType( e.target.value ) }
          className='w-full p-2 mb-2 border rounded'
        >
          <option value='text'>Text</option>
          <option value='doughnut'>Doughnut Chart</option>
          <option value='horizontalBar'>Horizontal Bar Chart</option>
        </select>
        { widgetType === 'text' && (
          <textarea
            placeholder='Widget Content'
            value={ widgetContent }
            onChange={ ( e ) => setWidgetContent( e.target.value ) }
            className='w-full p-2 mb-2 border rounded'
          />
        ) }

        <div className='flex justify-end'>
          <button
            type='button'
            onClick={ onClose }
            className='ring-2 ring-blue-500 bg-gray-300 text-black px-5 py-1.5 rounded mr-5 active:scale-110 hover:opacity-75'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ring-2 ring-gray-400 bg-blue-600 text-white px-5 py-1.5 rounded active:scale-110 hover:opacity-75'
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddWidgetModal;