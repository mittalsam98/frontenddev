import dayjs from 'dayjs';
import React, { useState } from 'react';
import classes from './calendar.module.css';
import Header from './components/header';
import Week from './components/week';

export default function Calendar() {
  const [month, setMonth] = useState(dayjs().format('MMMM YYYY'));
  const [selectedDay, setSelectedDay] = useState(dayjs().startOf('day'));

  const triggerMonth = (action) => {
    if (action === 'inc') {
      setMonth(dayjs(month).add(1, 'M').format('MMMM YYYY'));
    } else {
      setMonth(dayjs(month).add(-1, 'M').format('MMMM YYYY'));
    }
  };

  const selectedDayHandler = (day) => {
    setSelectedDay(day);
    setMonth(dayjs(day).format('MMMM YYYY'));
  };

  const generateWeeks = (month, selected) => {
    let weeks = [];
    let done = false;
    let date = dayjs(month).startOf('month').startOf('week');
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push({
        date: date.clone(),
        month: month,
        selected
      });

      date = date.add(1, 'week');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  return (
    <div className={classes.outerContainer}>
      <Header month={month} triggerMonth={triggerMonth} />
      {generateWeeks(dayjs(month), selectedDay).map((week, i) => {
        return <Week {...week} select={selectedDayHandler} key={i} />;
      })}
    </div>
  );
}
