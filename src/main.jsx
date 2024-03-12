import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import AppRouter from './routes';
import '@mantine/core/styles.css';
const theme = {
  colorScheme: 'light',
  colors: {
    brand: [
      '#e8efff',
      '#cedaff',
      '#9bb1ff',
      '#6486ff',
      '#3661fe',
      '#194afe',
      '#2755fe',
      '#0030e4',
      '#002bcd',
      '#2755fe'
    ]
  },
  primaryColor: 'brand',
  defaultRadius: 'sm',
  loader: 'oval',
  fontFamily: 'Poppins, sans-serif'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
    <AppRouter />
  </MantineProvider>
);
