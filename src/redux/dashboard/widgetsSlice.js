import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardData } from '../../../dashboardData';

const widgetsSlice = createSlice( {
  name: 'categories',
  initialState: {
    categories: initialDashboardData.categroies,
  },
  reducers: {
    // reducers for adding and removing Widget
    addWidget: ( state, action ) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find( cat => cat.id === categoryId );
      if ( category ) {
        const widgetToAdd = category.availableWidgets.find( w => w.id === widgetId );
        if ( widgetToAdd && !category.widgets.some( w => w.id === widgetId ) ) {
          category.widgets.push( widgetToAdd );
        }
      }
    },
    addCustomWidget: ( state, action ) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find( cat => cat.id === categoryId );
      if ( category ) {
        category.widgets.push( widget );
      }
    },
    removeWidget: ( state, action ) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find( cat => cat.id === categoryId );
      if ( category ) {
        category.widgets = category.widgets.filter( widget => widget.id !== widgetId );
      }
    },
  },
} );

export const { addWidget, addCustomWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;