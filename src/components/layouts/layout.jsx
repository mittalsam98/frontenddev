import React from 'react';
import { Outlet } from 'react-router-dom';
import MyHeader from '../header/header';
import classes from './layout.module.css';
export default function Layout() {
  return (
    <div className={classes.layoutContainer}>
      <MyHeader />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
