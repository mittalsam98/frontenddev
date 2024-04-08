import React from 'react';
import classes from './tabs.module.css';
import Tab from './tab';

const tabsArray = [
  {
    id: 'first',
    header: 'First',
    content: <First />
  },
  {
    id: 'second',
    header: 'Second',
    content: <Second />
  },
  {
    id: 'third',
    header: 'Third',
    content: <Third />
  }
];

export default function Tabs() {
  return (
    <div className={classes.outerContainer}>
      Tabs in React Js
      <Tab tabs={tabsArray} />
    </div>
  );
}

function First() {
  return (
    <div>
      <p>This is first item.</p>
    </div>
  );
}

function Second() {
  return (
    <div>
      <p>This is Second item.</p>
    </div>
  );
}

function Third() {
  return (
    <div>
      <p>This is Third item.</p>
    </div>
  );
}
