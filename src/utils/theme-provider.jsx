import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

const theme = {
  colors: {
    'light-border': ['#e6e6e6'],
    primaryRed: ['#c34326', '#f58167'],
    primaryGrey: ['#244a55']
  }
};

export default function ThemeProvider({ children }) {
  return (
    <MantineProvider defaultColorScheme='dark' withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
