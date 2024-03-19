import React from 'react';
import classes from './age-calculator.module.css';

export default function AgeResult(props) {
  const { day, month, year } = props?.elapsedAge;
  if (!day && !month && !year) {
    return;
  }
  console.log(year);
  if (year < 0) {
    return <span className={classes.error}> DOB should be less than today date </span>;
  }
  return (
    <div>
      <span className={classes.resultTitle}> Your age as of today is: </span>
      {year ? (
        <>
          <span className={classes.value}>{year}</span>
          <span className={classes.valueText}>{year === 1 ? ' year' : ' years'}</span>
        </>
      ) : null}
      {month ? (
        <>
          <span className={classes.value}>{month}</span>
          <span className={classes.valueText}>{month === 1 ? ' month' : ' months'}</span>
        </>
      ) : null}
      {day ? (
        <>
          <span className={classes.value}>{day}</span>
          <span className={classes.valueText}>{day === 1 ? ' day' : ' days'}</span>
        </>
      ) : null}
    </div>
  );
}
