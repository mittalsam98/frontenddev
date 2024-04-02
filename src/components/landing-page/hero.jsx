import { Chip, Text } from '@mantine/core';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import classes from './landing.module.css';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className={classes.heroContainer}>
      <Chip
        color='rgba(36, 5, 5, 1)'
        checked={true}
        icon={<FaXTwitter style={{ width: '16px', height: '16px' }} />}
      >
        <Text
          variant='link'
          component={Link}
          to='https://twitter.com/intent/post?via=Sachin_Mittal98&name=Sachin_Mittal98&text=Check%20out%20this%20awesome%20Github%20repo%20&url=https://github.com/mittalsam98/frontenddev'
          className={classes.linkTwitter}
          target='_blank'
          fw={100}
        >
          Share on Twitter
        </Text>
      </Chip>
      <div className={classes.exploreChip}></div>
      <h1 className={classes.heading}>Explore the Most Asked Frequent Questions</h1>
    </div>
  );
}
