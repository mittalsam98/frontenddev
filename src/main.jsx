import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
import ThemeProvider from './utils/theme-provider';
import { SearchChallengesContextProvider } from './utils/contexts/search-challenge-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchChallengesContextProvider>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </SearchChallengesContextProvider>
);
