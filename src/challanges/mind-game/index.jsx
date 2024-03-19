import { Slider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { lengthItems } from './contants';
import GameGrid from './game-grid';
import classes from './mind-game.module.css';
import GameResult from './game-result';
const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' }
];
export default function MindGame() {
  const [num, setNum] = useState(8);
  const [stage, setStage] = useState('start');
  const stageHandler = (val = 'start') => {
    setStage(val);
  };
  console.log(stage);
  return (
    <div className={classes.outerContainer}>
      {stage === 'start' ? (
        <>
          <label>Difficulty level</label>
          <Slider
            className={classes.slider}
            min={6}
            size='lg'
            max={18}
            defaultValue={8}
            marks={lengthItems}
            onChange={setNum}
          />
          <GameGrid num={num} stageHandler={stageHandler} />
        </>
      ) : null}
      {stage === 'result' ? <GameResult stageHandler={stageHandler} /> : null}
    </div>
  );
}
