import axios from 'axios';
import { seriesSlice } from './seriesReduser';

const pathSWAPI = 'https://api.tvmaze.com/schedule?country=US&date=';

const getSeries = () => async (dispatch, getState) => {
  dispatch(seriesSlice.actions.setIsLoading());
  const { queryDate } = getState().series;

  const formatedData = queryDate.toISOString().slice(0, 10);
  const url = pathSWAPI + formatedData;
  try {
    const seriesArray = await axios.get(url);
    const result = [...seriesArray.data];
    dispatch(seriesSlice.actions.getSeries({ result }));
  } catch (err) {
    console.log('getSeries error', err);
  }
  dispatch(seriesSlice.actions.resetIsLoading());
};

const setQueryDate = selectedDate => async (dispatch, getState) => {
  dispatch(seriesSlice.actions.setQueryDate({ selectedDate }));
};

export { getSeries, setQueryDate };
