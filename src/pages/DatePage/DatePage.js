import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePage.module.css';

export default function DatePage() {
  const [startDate, setStartDate] = useState(new Date());

  const clickHandler = () => {
    console.log('startDate = ', startDate.toLocaleString());
    const formatedData = startDate.toISOString().slice(0, 10);
    console.log('formatedData = ', formatedData);
  };

  return (
    <div className={styles.container}>
      DatePage
      <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        onClick={clickHandler()}
        inline
      />
    </div>
  );
}
