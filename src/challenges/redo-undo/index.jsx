import React, { useEffect, useState } from 'react';
import classes from './redo-undo.module.css';
import { FaUndoAlt } from 'react-icons/fa';
import { FaRedoAlt } from 'react-icons/fa';

export default function RedoUndo() {
  const [dots, setDots] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    console.log(event.ctrlKey && event.shiftKey && event.key === 'Z');
    if (event.ctrlKey && event.key === 'z') {
      undoHandler();
    }
  };

  const dotClickHandler = (e) => {
    setHistory([]);
    setDots((prev) => {
      return [...prev, { x: e.clientX, y: e.clientY }];
    });
  };
  const redoHandler = (e) => {
    if (!history.length) {
      return;
    }
    const redoCopy = [...history];
    const poppedValueRedo = redoCopy.pop();

    setHistory(redoCopy);
    setDots((prev) => {
      return [...prev, poppedValueRedo];
    });
  };
  const undoHandler = (e) => {
    setDots((prevDots) => {
      const dotsCopy = [...prevDots];
      const poppedValueDots = dotsCopy.pop();
      setHistory((prevHistory) => [...prevHistory, poppedValueDots]);
      return dotsCopy;
    });
  };

  console.log({ dots, history });

  return (
    <div className={classes.outerContainer}>
      <div className={classes.iconsContainer}>
        <FaUndoAlt onClick={undoHandler} className={classes.icons} />
        <FaRedoAlt
          onClick={redoHandler}
          className={`${classes.icons} ${history.length === 0 ? classes.disabled : ''}`}
        />
      </div>
      <div onClick={dotClickHandler} className={classes.canvasContainer}>
        {dots.map((val, i) => {
          return (
            <div
              key={i}
              className={classes.dot}
              style={{ position: 'absolute', top: val?.y, left: val?.x }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
