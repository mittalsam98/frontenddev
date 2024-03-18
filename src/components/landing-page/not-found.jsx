import React from 'react';
import classes from './landing.module.css';
import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <Text size='xl' fw={500}>
        No Challenges found.{'     '}
      </Text>
      <Link
        to='https://github.com/mittalsam98/React-JS-Machine-Coding-Interview-Question'
        target='_blank'
      >
        <Text size='xl' fw={500}>
          Add it here
        </Text>{' '}
      </Link>
    </div>
  );
}
