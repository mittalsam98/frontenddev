import React from 'react';
import classes from './tile.module.css';

export default function Tile({ value, handleClick, rowId, colId, won }) {
  return (
    <div
      onClick={() => {
        if (!value && !won) {
          handleClick(rowId, colId);
        }
      }}
      id={`${rowId}_${colId}`}
      className={`${classes.tileContainer} ${value || won ? classes.disallowed : ''}`}
    >
      {value}
    </div>
  );
}
