import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SeriesPage.module.css';

const initialState = {
  mediumImg: '',
  originalImg: '',
};

export default function SeriesPage() {
  const [state, setState] = useState(initialState);

  const getSeries = async () => {
    const url = 'http://api.tvmaze.com/schedule?country=US&date=2020-11-12';
    try {
      const planetsArray = await axios.get(url);
      console.log('planetsArray = ', planetsArray.data);
      console.log('planetsArray = ', planetsArray.data[0].show.image.medium);
      setState({
        mediumImg: planetsArray.data[0].show.image.medium,
        originalImg: planetsArray.data[0].show.image.original,
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div className={styles.container}>
      SeriesPage
      <p>mediumImg:</p>
      <img src={state.mediumImg} alt="images" />
      <p>originalImg:</p>
      <img src={state.originalImg} alt="images" />
    </div>
  );
}
