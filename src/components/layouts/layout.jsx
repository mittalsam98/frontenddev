import React from 'react';
import { Outlet } from 'react-router-dom';
import MyHeader from '../header/header';
import classes from './layout.module.css';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isHomePath = location.pathname === '/';

  return (
    <div className={classes.layoutContainer}>
      <MyHeader />
      <div className={isHomePath ? '' : classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
