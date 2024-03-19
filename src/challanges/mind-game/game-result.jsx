import { Text } from '@mantine/core';
import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import classes from './mind-game.module.css';

export default function GameResult(props) {
  return (
    <div className={classes.resultContainer}>
      <Text size='xl' fw={700} mb='lg'>
        Hooray, you match all the pairs
      </Text>
      <button
        className={classes.btn}
        onClick={() => {
          props.stageHandler('start');
        }}
      >
        Start new game
      </button>
      <div>
        <ConfettiExplosion />
      </div>
    </div>
  );
}
