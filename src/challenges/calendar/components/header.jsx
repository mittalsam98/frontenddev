import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import classes from './header.module.css';

export default function Header({ month, triggerMonth }) {
  return (
    <div>
      <div className={classes.headerSection1}>
        <div
          className={classes.iconWrapper}
          onClick={() => {
            triggerMonth('dec');
          }}
        >
          <MdKeyboardArrowLeft />
        </div>
        <span className={classes.monthNameWrapper}>{month}</span>
        <div
          className={classes.iconWrapper}
          onClick={() => {
            triggerMonth('inc');
          }}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className={classes.headerSection2}>
        <span className={classes.day}>Sun</span>
        <span className={classes.day}>Mon</span>
        <span className={classes.day}>Tue</span>
        <span className={classes.day}>Wed</span>
        <span className={classes.day}>Thu</span>
        <span className={classes.day}>Fri</span>
        <span className={classes.day}>Sat</span>
      </div>
    </div>
  );
}
