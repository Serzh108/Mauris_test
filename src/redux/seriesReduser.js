import { createSlice } from '@reduxjs/toolkit';

const state = {
  queryDate: new Date(),
  items: [],
  isLoading: false,
};

export const seriesSlice = createSlice({
  name: 'series',
  initialState: state,
  reducers: {
    getSeries: (state, { payload }) => ({
      ...state,
      items: [...payload.result],
    }),
    setQueryDate: (state, { payload }) => ({
      ...state,
      queryDate: payload.selectedDate,
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    resetIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: false,
    }),
  },
});
