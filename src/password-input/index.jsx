import React, { useState } from 'react';
import PasswordInput from './password-input';
import classes from './password-input.module.css';
import { Select, Tabs, rem } from '@mantine/core';
import { Slider, Text } from '@mantine/core';

const lengthItems = [{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }];

export default function PasswordInputCall() {
  const [length, setLength] = useState(2);
  const [type, setType] = useState('text');

  return (
    <div className={classes.outerContainer}>
      <PasswordInput length={length} type={type} />
      <div className={classes.rightContainer}>
        <p className={classes.title}>Length of input</p>
        <Slider min={2} size='xs' max={6} marks={lengthItems} onChange={setLength} />
        <p className={classes.title}>Type</p>
        <Select
          size='xs'
          placeholder='Pick value'
          onChange={setType}
          data={[
            { value: 'text', label: 'Alphanumeric' },
            { value: 'number', label: 'Number' }
          ]}
        />
      </div>
    </div>
  );
}
