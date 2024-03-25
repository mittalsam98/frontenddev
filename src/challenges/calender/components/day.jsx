import React from 'react';
import classes from './day.module.css';

export default function Day({ date, isCurrentMonth, isSelectedDate, select }) {
  return (
    <span
      onClick={() => {
        select(date);
      }}
      className={`${classes.dayContainer} ${!isCurrentMonth ? classes.greyOut : ''}  ${
        isSelectedDate ? classes.selected : ''
      }`}
    >
      {date.format('D')}
    </span>
  );
}
