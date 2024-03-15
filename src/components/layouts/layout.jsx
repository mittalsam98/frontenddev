import React from 'react';
import { Outlet } from 'react-router-dom';
import MyHeader from '../header/header';

export default function Layout() {
  return (
    <div>
      <MyHeader />
      <Outlet />
    </div>
  );
}
