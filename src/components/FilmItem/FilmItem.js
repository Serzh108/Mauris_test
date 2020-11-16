import React from 'react';
import styles from './FilmItem.module.css';

export default function FilmItem({ item }) {
  const liClickHandler = e => {
    console.log(
      'liClickHandler e.currentTarget = ',
      e.currentTarget.dataset.originalImg,
    );
  };

  return (
    <li className={styles.item}>
      <img
        src={item.show.image?.medium}
        alt="No images"
        onClick={liClickHandler}
        data-original-img={item.show.image?.original}
      />
      <div className={styles.itemInfo}>
        <p>{item.show.name}</p>
        <p>{item.show.premiered.slice(0, 4)}</p>
        <p>
          <span>Сезон: {item.season}</span>
          <span>Эпизод: {item.number}</span>
        </p>
      </div>
    </li>
  );
}
