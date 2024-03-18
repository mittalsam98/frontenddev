import { Chip } from '@mantine/core';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import classes from './landing.module.css';

export default function HeroSection() {
  return (
    <div className={classes.heroContainer}>
      <Chip
        color='rgba(36, 5, 5, 1)'
        checked={true}
        icon={<FaXTwitter style={{ width: '16px', height: '16px' }} />}
      >
        Share with Friend
      </Chip>
      <div className={classes.exploreChip}></div>
      <h1 classNAme={classes.heading}>Explore the Most Asked Frequent Questions</h1>
    </div>
  );
}
