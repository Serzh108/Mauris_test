import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Button.module.css';

const suffics = [
  'сериалов',
  'сериал',
  'сериала',
  'сериала',
  'сериала',
  'сериалов',
  'сериалов',
  'сериалов',
  'сериалов',
  'сериалов',
];

export default function Button({ quontity, btnHandler, showMore }) {
  const btnText = digit => `Еще ${digit} ${suffics[digit % 10]} `;

  const btnTitle = () =>
    showMore ? (
      <>
        <span className={styles.btnTitle}>{btnText(quontity)} </span>
        <ExpandMoreIcon fontSize="large"></ExpandMoreIcon>
      </>
    ) : (
      <>
        <span className={styles.btnTitle}>Показать основные </span>
        <ExpandLessIcon fontSize="large"></ExpandLessIcon>
      </>
    );

  return (
    <button type="button" className={styles.btn} onClick={btnHandler}>
      {btnTitle()}
    </button>
  );
}
