import React, { useState } from 'react';
import classes from './age-calculator.module.css';
import AgeResult from './age-result';

export default function AgeCalculator() {
  const [errors, setErrors] = useState({
    day: null,
    month: null,
    year: null
  });
  const [elapsedAge, setElapsedAge] = useState({
    day: '',
    month: '',
    year: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, month, day } = Object.fromEntries(new FormData(e.target));
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDate = currentDate.getDate() - birthDate.getDate();

    if (ageDate < 0) {
      ageMonths--;
      const previousMonth = currentDate.getMonth() - 1 < 0 ? 11 : currentDate.getMonth() - 1;
      const daysInPreviousMonth = new Date(
        currentDate.getFullYear(),
        previousMonth + 1,
        0
      ).getDate();
      ageDate += daysInPreviousMonth;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
    setElapsedAge({
      day: ageDate,
      month: ageMonths,
      year: ageYears
    });
  };

  const setErrorsHandler = (key, value) => {
    setErrors((prev) => {
      return {
        ...prev,
        [key]: value
      };
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'day':
        setErrorsHandler(name, +value >= 1 && +value <= 31 ? false : true);
        return;
      case 'month':
        setErrorsHandler(name, +value >= 1 && +value <= 12 ? false : true);
        return;
      case 'year':
        setErrorsHandler(name, +value.length < 9999 ? false : true);
        return;
    }
  };
  return (
    <div className={classes.outerContainer}>
      <div className={classes.title}>Enter your DOB</div>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.formInnerContainer}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Day</label>
            <input
              name='day'
              type='number'
              min={1}
              maxLength={2}
              max={31}
              required
              className={errors.day ? classes.inputError : classes.input}
              placeholder='DD'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Month</label>
            <input
              name='month'
              min={1}
              max={12}
              required
              maxLength={2}
              className={errors.month ? classes.inputError : classes.input}
              type='number'
              placeholder='MM'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Year</label>
            <input
              name='year'
              type='number'
              min={1000}
              required
              max={new Date().getFullYear()}
              className={errors.year ? classes.yearInputError : classes.yearInput}
              placeholder='YYYY'
              onChange={changeHandler}
            />
          </div>
        </div>
        <button className={classes.btn} type='submit'>
          Calculate my age
        </button>
      </form>
      {elapsedAge && <AgeResult elapsedAge={elapsedAge} />}
    </div>
  );
}
