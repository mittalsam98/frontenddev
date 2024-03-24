import React, { useEffect, useState } from 'react';
import classes from './pagination.module.css';
import { Card, Loader } from '@mantine/core';
import ProductCard from './product-card.jsx';
import Paginate from './paginate.jsx';

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setLoading(true);
    apiCall();
  }, [skip]);

  const apiCall = (limit = 10) => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        // setTotalPage(Math.ceil(res.total / limit));
        setTotalPage(15);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const skipHandler = (type, value) => {
    if (type === 'inc') {
      setSkip((prev) => prev + 1);
    } else if (type === 'dec') {
      setSkip((prev) => (prev - 1 > 0 ? prev - 1 : 0));
    } else {
      setSkip(value - 1);
    }
  };

  return (
    <div className={classes.outerContainer}>
      {!loading ? (
        <div className={classes.productsContainer}>
          {products &&
            products.length > 0 &&
            products.map((meme, i) => {
              return <ProductCard key={i} datum={meme} />;
            })}
        </div>
      ) : (
        <div className={classes.loadingCard} shadow='sm' padding='lg' radius='md'>
          <Loader color='blue' />
        </div>
      )}
      <div className={classes.paginateContainer}></div>
      <Paginate
        key={'totalCount'}
        skipHandler={skipHandler}
        currentPage={skip + 1}
        totalPage={totalPage}
        limit={limit}
        pageNeighbours={3}
      />
    </div>
  );
}
