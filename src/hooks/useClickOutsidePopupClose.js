import { useEffect } from 'react';

const useClickOutsidePopupClose = ( ref, onClose ) => {

  useEffect( () => {
    const handleClickOutside = ( event ) => {
      if ( ref.current && !ref.current.contains( event.target ) ) {
        onClose(); // trigger the onClose function when clicked outside
      }
    };

    // event listener for mouse press and touches
    document.addEventListener( 'mousedown', handleClickOutside );
    document.addEventListener( 'touchstart', handleClickOutside );

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener( 'mousedown', handleClickOutside );
      document.removeEventListener( 'touchstart', handleClickOutside );
    };
  }, [ref, onClose] );  // Run this effect whenever ref or onClose changes
};

export default useClickOutsidePopupClose;