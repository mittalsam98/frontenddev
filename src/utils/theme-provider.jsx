import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useLocalStorage } from '@mantine/hooks';

export default function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark'
  });
  const toggleColorScheme = () =>
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: colorScheme
      }}
    >
      {children}
    </MantineProvider>
  );
}
