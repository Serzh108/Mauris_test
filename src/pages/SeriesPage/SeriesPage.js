import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import styles from './SeriesPage.module.css';
import FilmItem from '../../components/FilmItem/FilmItem';
import Button from '../../components/Button/Button';

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

  console.log('items = ', items);

  const btnHandler = () => {
    setShowMore(!showMore);
  };

  // useEffect(() => {
  //   getSeries();
  // }, []);

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
      <NavLink to="/">
        <NavigateBeforeIcon
          style={{
            // opacity: 0.9,
            fontSize: 24,
            marginRight: '4px',
            cursor: 'pointer',
            color: 'red',
          }}
        ></NavigateBeforeIcon>
      </NavLink>

      <p>{queryDate}</p>
      <ul>
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
      {/* <ul>{items && items.map(item => <FilmItem item={item} />)}</ul> */}
      <Button
        quontity={items.length - MAIN_FILM}
        showMore={showMore}
        btnHandler={btnHandler}
      />
    </div>
  );
}
