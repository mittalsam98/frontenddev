import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

const theme = {
  primaryColor: 'blue',
  colors: {
    'light-border': ['#e6e6e6', '#f2f2f2'],
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
