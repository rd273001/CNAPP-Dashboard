import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardData } from '../../../dashboardData';

const widgetsSlice = createSlice( {
  name: 'categories',
  initialState: {
    categories: initialDashboardData.categroies,
  },
  reducers: {
    // reducers for adding and removing Widget
  },
} );

export const {  } = widgetsSlice.actions;
export default widgetsSlice.reducer;