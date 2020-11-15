import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getSeries } from '../../redux/seriesOperations';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePage.module.css';

export default function DatePage() {
  const [startDate, setStartDate] = useState(new Date());
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const clickHandler = () => {
      console.log('startDate = ', startDate.toLocaleString());
      const formatedData = startDate.toISOString().slice(0, 10);
      console.log('formatedData = ', formatedData);
      dispatch(getSeries(formatedData));
      history.push(`/series`);
    };
    !isFirstTime && clickHandler();
  }, [startDate, dispatch, history, isFirstTime]);

  // const clickHandler = () => {
  //   console.log('startDate = ', startDate.toLocaleString());
  //   const formatedData = startDate.toISOString().slice(0, 10);
  //   console.log('formatedData = ', formatedData);
  //   dispatch(getSeries(formatedData));
  //   // history.push(`/series`);
  // };

  return (
    <div className={styles.container}>
      DatePage
      <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          setIsFirstTime(false);
        }}
        // onClick={clickHandler()}
        inline
      />
    </div>
  );
}
