import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import { getSeries } from '../../redux/seriesOperations';
import styles from './SeriesPage.module.css';
import Header from '../../components/Header/Header';
import FilmItem from '../../components/FilmItem/FilmItem';
import Button from '../../components/Button/Button';
import getLocalDate from '../../utils/getLocalDate';

const override = css`
  display: block;
  margin: 0 auto;
`;

const MAIN_FILM = 2;

export default function SeriesPage() {
  const [showMore, setShowMore] = useState(true);
  const isLoading = useSelector(state => state.series.isLoading);
  const items = useSelector(state => state.series.items);
  const queryDate = useSelector(state => state.series.queryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  const btnHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.container}>
      <Header />
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            zIndex: '990',
          }}
        >
          <CircleLoader
            size={300}
            color={'#006cff'}
            css={override}
            loading={isLoading}
          />
        </div>
      )}

      <p className={styles.seriesDate}>{getLocalDate(queryDate)}</p>
      <ul className={styles.seriesList}>
        {items &&
          items.map((item, idx) => {
            if (showMore) {
              return idx < MAIN_FILM ? (
                <FilmItem item={item} key={item.id} />
              ) : null;
            } else {
              return <FilmItem item={item} key={item.id} />;
            }
          })}
      </ul>
      <Button
        quontity={items.length - MAIN_FILM}
        showMore={showMore}
        btnHandler={btnHandler}
      />
    </div>
  );
}
