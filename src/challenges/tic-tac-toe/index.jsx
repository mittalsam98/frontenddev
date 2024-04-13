import { Alert, Button, Group } from '@mantine/core';
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import { MdCelebration } from 'react-icons/md';
import Tile from './components/tile';
import classes from './tic-tac-toe.module.css';

const PLAYER_X = 'X';
const PLAYER_0 = '0';

export default function TicTacToe() {
  const [array, setArray] = useState([]);
  const [player, setPlayer] = useState(PLAYER_X);
  const [win, setWin] = useState(null);
  const [game, setGame] = useState(3);

  const checkWin = (rowId, colId, updatedArray) => {
    // check row
    const isWinByRow = checkArray(updatedArray[rowId]);

    // check col
    const colArray = updatedArray.map((val) => val && val[colId]);
    const isWinByCol = checkArray(colArray);

    // checkDiagonal
    const diagonalArray = updatedArray.map((val, i) => {
      return updatedArray[i] && updatedArray[i][i];
    });
    const isWinByDiagonal = checkArray(diagonalArray);

    // checkReverseDiagonal
    const reverseDiagonalArray = updatedArray.map((val, i) => {
      return updatedArray[i] && updatedArray[i][game - 1 - i];
    });
    const isWinByReverseDiagonalArray = checkArray(reverseDiagonalArray);

    if (isWinByCol || isWinByRow || isWinByDiagonal || isWinByReverseDiagonalArray) {
      setWin(player);
    }
  };

  const checkArray = (lineArray) => {
    return (
      lineArray.length == game &&
      !lineArray.includes() &&
      lineArray.every((cur, i) => {
        return lineArray[0] === cur;
      })
    );
  };

  const tileClickHandler = (rowId, colId) => {
    const tempArray = [...array];

    if (!tempArray[rowId]) {
      tempArray[rowId] = [];
    }

    if (!tempArray[rowId][colId]) {
      tempArray[rowId][colId] = '';
    }
    tempArray[rowId][colId] = player;
    checkWin(rowId, colId, tempArray);

    setArray(tempArray);
    setPlayer((prev) => (prev === PLAYER_X ? PLAYER_0 : PLAYER_X));
  };

  const gridViewHandler = (id) => {
    setGame(id);
    resetHandler();
  };
  const resetHandler = () => {
    setArray([]);
    setWin(null);
    setPlayer(PLAYER_X);
  };

  return (
    <div className={classes.outerContainer}>
      <Group justify='center' mb={'12'}>
        <Button
          variant={game == 3 ? '' : 'light'}
          leftSection={<BsFillGrid3X3GapFill size={14} />}
          onClick={() => gridViewHandler(3)}
        >
          3 * 3
        </Button>
        <Button variant={game == 4 ? '' : 'light'} onClick={() => gridViewHandler(4)}>
          4 * 4
        </Button>
        <Button
          variant={game == 5 ? '' : 'light'}
          rightSection={<BsFillGrid3X3GapFill size={14} />}
          onClick={() => gridViewHandler(5)}
        >
          5 * 5
        </Button>
      </Group>
      <Group justify='center' mb={'10'}>
        {win && (
          <Alert
            variant='filled'
            color='green'
            title={`Player ${win} won`}
            icon={<MdCelebration />}
          />
        )}
      </Group>
      <Group justify='center' mb={'10'}>
        {win && <ConfettiExplosion />}
      </Group>
      <div
        className={classes.tileContainer}
        style={{
          gridTemplateRows: `repeat(${game}, 100px)`,
          gridTemplateColumns: `repeat(${game}, 100px)`
        }}
      >
        {Array(game)
          .fill('')
          .map((val, i) => {
            return Array(game)
              .fill('')
              .map((val2, j) => {
                return (
                  <Tile
                    key={`${i}_${j}`}
                    handleClick={tileClickHandler}
                    value={array[i] && array[i][j]}
                    rowId={i}
                    colId={j}
                    won={win}
                  />
                );
              });
          })}
      </div>
      <Group justify='center' my={'10'}>
        <Button
          variant={3 == 3 ? '' : 'light'}
          onClick={resetHandler}
          leftSection={<GrPowerReset size={14} />}
        >
          Reset
        </Button>
      </Group>
    </div>
  );
}
