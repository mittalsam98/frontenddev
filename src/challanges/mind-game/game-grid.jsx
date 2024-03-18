import React, { useEffect, useState } from 'react';
import classes from './mind-game.module.css';
import ConfettiExplosion from 'react-confetti-explosion';

export default function GameGrid(props) {
  const [arrValues, setArrValues] = useState([]);
  const [exposedList, setExposedList] = useState([]);
  const [solvedList, setSolvedList] = useState([]);

  //   Array format
  useEffect(() => {
    const arrFillWithValues = Array(props.num)
      .fill()
      .map((_, i) => i + 1);
    const duplicatedValues = [...arrFillWithValues, ...arrFillWithValues];

    const shuffledArray = duplicatedValues.sort(() => Math.random() - 0.5);

    setArrValues(shuffledArray);
  }, [props.num]);

  useEffect(() => {
    let timer;
    if (exposedList.length === 2) {
      timer = setTimeout(() => {
        if (arrValues[exposedList[0]] === arrValues[exposedList[1]])
          setSolvedList((prev) => [...prev, arrValues[exposedList[0]]]);
        setExposedList([]);
      }, 700);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [exposedList]);

  const itemClickHandler = (event) => {
    const action = event.currentTarget.getAttribute('data-item');

    if (exposedList.length < 2) {
      setExposedList((prev) => [...prev, +action]);
      return;
    }
  };
  {
    console.log(solvedList, exposedList);
  }

  return (
    <>
      <div
        className={`${classes.gridContainer} ${
          exposedList.length == 2 ? classes.pointerClass : ''
        }`}
        style={{
          gridTemplateColumns: `repeat(${Math.floor(arrValues.length) / 4}, 1fr)`
        }}
      >
        {arrValues.length
          ? arrValues.map((val, i) => {
              return (
                <div
                  key={i}
                  data-item={i}
                  onClick={itemClickHandler}
                  className={`${classes.gridItem} ${solvedList.includes(val) ? classes.hide : ''} ${
                    solvedList.includes(val) ? classes.hide : ''
                  }`}
                >
                  {exposedList.includes(i) && val}
                </div>
              );
            })
          : ''}
      </div>
      {solvedList.length == arrValues.length / 2 ? <ConfettiExplosion /> : null}
      {solvedList.length == arrValues.length / 2 ? <ConfettiExplosion /> : null}
    </>
  );
}
