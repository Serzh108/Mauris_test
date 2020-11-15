import axios from 'axios';
import { seriesSlice } from './seriesReduser';

const pathSWAPI = 'http://api.tvmaze.com/schedule?country=US&date=';

const getSeries = formatedData => async (dispatch, getState) => {
  dispatch(seriesSlice.actions.setIsLoading());
  // const { current } = getState().planets;
  const url = pathSWAPI + formatedData;
  try {
    const seriesArray = await axios.get(url);
    console.log('Operations seriesArray.data = ', seriesArray.data);
    const result = [...seriesArray.data];
    // console.log('typeof result = ', typeof result, result.length);
    // const result = { ...seriesArray.data, current: url };
    dispatch(seriesSlice.actions.getSeries({ result }));
  } catch (err) {
    console.log('getSeries error', err);
  }
  dispatch(seriesSlice.actions.resetIsLoading());
};

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

// const nextPage = () => async (dispatch, getState) => {
//   dispatch(seriesSlice.actions.setIsLoading());
//   const { next, current } = getState().planets;
//   try {
//     const planetsArray = await axios.get(correctHttp(next));
//     const result = { ...planetsArray.data, current: current + 1 };
//     dispatch(seriesSlice.actions.getPlanets(result));
//   } catch (err) {
//     console.log('error', err);
//   }
//   dispatch(seriesSlice.actions.resetIsLoading());
// };

// const getResidents = data => async (dispatch, getState) => {
//   dispatch(seriesSlice.actions.setIsLoading());
//   try {
//     const result = await data.map(async item => {
//       const resident = await axios.get(correctHttp(item));
//       return resident.data.name;
//     });
//     const res = await Promise.all(result);
//     dispatch(seriesSlice.actions.getResidents(res));
//   } catch (error) {
//     console.log('residents error', error);
//   }
//   dispatch(seriesSlice.actions.resetIsLoading());
// };

// const resetResidents = () => (dispatch, getState) => {
//   dispatch(seriesSlice.actions.resetResidents());
// };

export {
  getSeries,
  // getResidents, resetResidents, previousPage, nextPage
};