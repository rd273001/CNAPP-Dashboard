import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/categoriesSlice';

const store = configureStore( {
  reducer: {
    dashboard: dashboardReducer,
  },
} );

export default store;