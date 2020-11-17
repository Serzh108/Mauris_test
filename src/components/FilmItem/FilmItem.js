import React, { useState, useRef } from 'react';
import SimpleModal from '../Modal/Modal';
import styles from './FilmItem.module.css';

export default function FilmItem({ item }) {
  const [open, setOpen] = useState(false);
  const srcRef = useRef(null);

  const liClickHandler = e => {
    // console.log(
    //   'liClickHandler e.currentTarget = ',
    //   e.currentTarget.dataset.originalImg,
    // );
    srcRef.current = e.currentTarget.dataset.originalImg;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SimpleModal
        open={open}
        handleClose={handleClose}
        imgSrc={srcRef.current}
      />
      <li className={styles.item}>
        <img
          src={item.show.image?.medium}
          alt="No images"
          onClick={liClickHandler}
          data-original-img={item.show.image?.original}
        />
        <div className={styles.itemInfo}>
          <div>
            <p className={styles.itemName}>{item.show.name}</p>
            <p className={styles.itemYear}>{item.show.premiered.slice(0, 4)}</p>
          </div>
          <p className={styles.itemSeason}>
            <span>{`Сезон: ${item.season}`}</span>
            <span>{`Эпизод: ${item.number}`}</span>
          </p>
        </div>
      </li>
    </>
  );
}
