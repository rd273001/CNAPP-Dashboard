import { createSlice } from '@reduxjs/toolkit';
import { dashboardData } from './../../../dashboardData';

const widgetsSlice = createSlice( {
  name: 'widgets',
  initialState: {
    categories: dashboardData.categroies,
  },
  reducers: {
    // reducers for adding and removing Widget
  },
} );

export const {  } = widgetsSlice.actions;
export default widgetsSlice.reducer;