import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
import ThemeProvider from './utils/theme-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);
