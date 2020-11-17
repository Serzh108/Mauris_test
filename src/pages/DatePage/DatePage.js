import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { setQueryDate } from '../../redux/seriesOperations';
import Header from '../../components/Header/Header';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePage.module.css';
import tvImage from '../../assets/images/tv.png';

registerLocale('ru', ru);

export default function DatePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const clickHandler = () => {
      dispatch(setQueryDate(selectedDate));
      history.push('/series');
    };
    !isFirstTime && clickHandler();
  }, [selectedDate, dispatch, history, isFirstTime]);

  return (
    <div className={styles.container}>
      <Header />
      <img src={tvImage} className={styles.tvImage} alt="TV" />
      <p className={styles.discription}>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
      <DatePicker
        locale="ru"
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setIsFirstTime(false);
        }}
        inline
      />
    </div>
  );
}
