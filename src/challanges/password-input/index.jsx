import { Divider, Select, Slider } from '@mantine/core';
import React, { useState } from 'react';
import { lengthItems, sizeItems } from './constants';
import PasswordInput from './password-input';
import classes from './password-input.module.css';

export default function PasswordInputCall() {
  const [length, setLength] = useState(4);
  const [size, setSize] = useState(50);
  const [type, setType] = useState('number');

  return (
    <div className={classes.outerContainer}>
      <PasswordInput length={length} type={type} size={size} />
      <div className={classes.rightContainer}>
        <p className={classes.title}>Length of input</p>
        <Slider min={2} size='lg' max={6} marks={lengthItems} onChange={setLength} />
        <Divider my='md' />
        <p className={classes.title}>Size</p>
        <Slider min={20} size='lg' max={60} marks={sizeItems} onChange={setSize} />{' '}
        <Divider my='md' />
        <p className={classes.title}>Type</p>
        <Select
          size='xs'
          placeholder='Pick value'
          onChange={setType}
          value={type}
          allowDeselect={false}
          data={[
            { value: 'text', label: 'Alphanumeric' },
            { value: 'number', label: 'Number' }
          ]}
        />
      </div>
    </div>
  );
}
