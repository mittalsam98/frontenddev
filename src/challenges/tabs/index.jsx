import React from 'react';
import classes from './tabs.module.css';
import Tab from './tab';

export default function Tabs() {
  return (
    <div className={classes.outerContainer}>
      Tabs in React Js
      <Tab />
    </div>
  );
}
