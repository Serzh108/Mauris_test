import React from 'react';
import styles from './DatePage.module.css';

export default function DatePage() {
  return (
    <div className={styles.container}>
      DatePage
      <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
    </div>
  );
}
