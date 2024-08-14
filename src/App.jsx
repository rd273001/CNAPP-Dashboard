import React from 'react';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={ store }>
      <div className='min-h-screen bg-gray-100'>
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;