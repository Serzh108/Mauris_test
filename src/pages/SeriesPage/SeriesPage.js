import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import styles from './SeriesPage.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

// const initialState = {
//   mediumImg: '',
//   originalImg: '',
// };

export default function SeriesPage() {
  // const [state, setState] = useState(initialState);
  const isLoading = useSelector(state => state.series.isLoading);
  const items = useSelector(state => state.series.items);

  console.log('items = ', items);

  // useEffect(() => {
  //   getSeries();
  // }, []);

  const liClickHandler = e => {
    console.log('liClickHandler e.currentTarget = ', e.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '35%',
            zIndex: '990',
          }}
        >
          <CircleLoader
            size={360}
            color={'#006cff'}
            css={override}
            loading={isLoading}
          />
        </div>
      )}
      <NavLink to="/"> back to calendar</NavLink>
      <p>Date</p>
      <ul>
        {items &&
          items.map(item => (
            <li key={item.id} onClick={liClickHandler} id={item.show.name}>
              <img src={item.show.image?.medium} alt="No images" />
              <p>{item.show.name}</p>
              <p>{item.show.premiered.slice(0, 4)}</p>
              <p>Сезон: {item.season}</p>
              <p>Эпизод: {item.number}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
