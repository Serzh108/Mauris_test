import { createSlice } from '@reduxjs/toolkit';

const state = {
  // current: 1,
  // previous: '',
  // next: '',
  queryDate: new Date(),
  items: [],
  isLoading: false,
  // residentsName: [],
};

export const seriesSlice = createSlice({
  name: 'series',
  initialState: state,
  reducers: {
    getSeries: (state, { payload }) => ({
      ...state,
      items: [...payload.result],
      // queryDate: payload.queryDate,
    }),
    setQueryDate: (state, { payload }) => ({
      ...state,
      queryDate: payload.selectedDate,
    }),
    // getSeries: (state, { payload }) => ({
    //   ...state,
    //   items: [...payload.result],
    //   current: payload.current,
    //   previous: payload.previous,
    //   next: payload.next,
    // }),
    // getResidents: (state, { payload }) => ({
    //   ...state,
    //   residentsName: [...state.residentsName, ...payload],
    // }),
    // resetResidents: (state, { payload }) => ({
    //   ...state,
    //   residentsName: [],
    // }),
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
