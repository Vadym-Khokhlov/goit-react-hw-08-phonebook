import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setInputFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setInputFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
