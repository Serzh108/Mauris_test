import React, { useState } from 'react';
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
  // const [showMore, setShowMore] = useState(false);
  // const btnHandler = () => {
  //   setShowMore(!showMore);
  // };

  const btnText = digit => `Еще ${digit} ${suffics[digit % 10]} `;

  // console.log('showMore = ', showMore);

  return (
    <button type="button" className={styles.btn} onClick={btnHandler}>
      {showMore ? `${btnText(quontity)}` : 'Показать основные '}
      {showMore ? (
        <ExpandMoreIcon></ExpandMoreIcon>
      ) : (
        <ExpandLessIcon></ExpandLessIcon>
      )}
    </button>
  );
}
