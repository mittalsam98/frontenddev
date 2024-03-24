import React, { useEffect, useRef, useState } from 'react';
import { FaCaretSquareLeft } from 'react-icons/fa';
import { FaCaretSquareRight } from 'react-icons/fa';
import classes from './pagination.module.css';

export default function Paginate({ totalPage, currentPage, limit, skipHandler, pageNeighbours }) {
  const rangeArr = (from, to) => {
    const temp = [];
    while (from <= to) {
      temp.push(from);
      from++;
    }
    return temp;
  };

  const renderPageNumbers = () => {
    let totalNumber = pageNeighbours * 2 + 3;
    console.log({ totalPage, totalNumber, currentPage, pageNeighbours });

    if (totalPage > totalNumber) {
      const start = Math.max(2, currentPage - pageNeighbours);
      const end = Math.max(Math.min(totalPage - 1, currentPage + pageNeighbours), totalNumber - 1);

      console.log({ start, end });

      let pages = rangeArr(start, end);

      if (start >= pageNeighbours) {
        pages = ['...', ...pages];
      }

      if (end < totalPage - 1) {
        pages = [...pages, '...'];
      }
      return [1, ...pages, totalPage];
    }
    return rangeArr(1, totalPage);
  };

  return (
    <div className={classes.paginateContainer}>
      <FaCaretSquareLeft className={classes.iconColor} onClick={() => skipHandler('dec')} />{' '}
      <div className={classes.pageNumberContainer}>
        {renderPageNumbers().map((page, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                skipHandler(null, page);
              }}
              className={`${classes.pageNumber} ${currentPage === page ? classes.activeBg : ''}`}
            >
              {page}
            </p>
          );
        })}
      </div>
      <FaCaretSquareRight className={classes.iconColor} onClick={() => skipHandler('inc')} />
    </div>
  );
}
