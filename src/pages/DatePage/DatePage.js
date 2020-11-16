import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getSeries } from '../../redux/seriesOperations';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePage.module.css';
import tvImage from '../../assets/images/tv.png';

export default function DatePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const clickHandler = () => {
      dispatch(getSeries(selectedDate));
      history.push('/series');
    };
    !isFirstTime && clickHandler();
  }, [selectedDate, dispatch, history, isFirstTime]);

  // const clickHandler = () => {
  //   console.log('selectedDate = ', selectedDate.toLocaleString());
  //   const formatedData = selectedDate.toISOString().slice(0, 10);
  //   console.log('formatedData = ', formatedData);
  //   dispatch(getSeries(formatedData));
  //   // history.push(`/series`);
  // };

  return (
    <div className={styles.container}>
      <img src={tvImage} alt="TV" />
      <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setIsFirstTime(false);
        }}
        // onClick={clickHandler()}
        inline
      />
    </div>
  );
}
