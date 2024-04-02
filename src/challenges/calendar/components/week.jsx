import React from 'react';
import Day from './day';
import classes from './week.module.css';
export default function Week({ date, month, select, selected }) {
  const generateDays = (date, month) => {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = {
        date: date.clone(),
        isCurrentMonth: month.month() == date.month(),
        isSelectedDate: date.format('D') == selected.format('D') && selected.month() == date.month()
      };

      days.push(day);
      date = date.add(1, 'd');
    }

    return days;
  };

  return (
    <div className={classes.weekRowContainer}>
      {generateDays(date, month).map((day, index) => {
        return <Day {...day} select={select} key={index} />;
      })}
    </div>
  );
}
