import axios from 'axios';
import { seriesSlice } from './seriesReduser';
import getLocalDate from '../utils/getLocalDate';

const pathSWAPI = 'http://api.tvmaze.com/schedule?country=US&date=';

const getSeries = () => async (dispatch, getState) => {
  dispatch(seriesSlice.actions.setIsLoading());
  const { queryDate } = getState().series;

  const formatedData = queryDate.toISOString().slice(0, 10);
  const url = pathSWAPI + formatedData;
  try {
    const seriesArray = await axios.get(url);
    console.log('Operations seriesArray.data = ', seriesArray.data);
    const result = [...seriesArray.data];
    dispatch(seriesSlice.actions.getSeries({ result }));
  } catch (err) {
    console.log('getSeries error', err);
  }
  dispatch(seriesSlice.actions.resetIsLoading());
};

const setQueryDate = selectedDate => async (dispatch, getState) => {
  // const queryDate = getLocalDate(selectedDate);
  // dispatch(seriesSlice.actions.setQueryDate({ queryDate }));
  dispatch(seriesSlice.actions.setQueryDate({ selectedDate }));
};

// const getSeries = selectedDate => async (dispatch, getState) => {
//   dispatch(seriesSlice.actions.setIsLoading());
//   const formatedData = selectedDate.toISOString().slice(0, 10);
//   const queryDate = getLocalDate(selectedDate);
//   const url = pathSWAPI + formatedData;
//   try {
//     const seriesArray = await axios.get(url);
//     console.log('Operations seriesArray.data = ', seriesArray.data);
//     const result = [...seriesArray.data];
//     dispatch(seriesSlice.actions.getSeries({ result, queryDate }));
//   } catch (err) {
//     console.log('getSeries error', err);
//   }
//   dispatch(seriesSlice.actions.resetIsLoading());
// };

// const previousPage = () => async (dispatch, getState) => {
//   dispatch(seriesSlice.actions.setIsLoading());
//   const { previous, current } = getState().planets;
//   try {
//     const planetsArray = await axios.get(correctHttp(previous));
//     const result = { ...planetsArray.data, current: current - 1 };
//     dispatch(seriesSlice.actions.getPlanets(result));
//   } catch (err) {
//     console.log('error', err);
//   }
//   dispatch(seriesSlice.actions.resetIsLoading());
// };

export {
  getSeries,
  setQueryDate,
  // getResidents, resetResidents, previousPage, nextPage
};
