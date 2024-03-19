import { Card, Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './infinte-scroll.module.css';
import MemeCard from './meme-card';

export default function InfiniteScroll() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    fetchMemes();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    if (window.scrollY + window.innerHeight + 2 >= document.body.scrollHeight) {
      if (!loading) fetchMemes();
    }
  };

  const fetchMemes = () => {
    setLoading(true);
    fetch(`https://meme-api.com/gimme/20`)
      .then((res) => res.json())
      .then((json) => {
        if (json.memes.length > 0) {
          setMemes((prev) => [...prev, ...json.memes]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer}>
      {memes.length > 0 &&
        memes.map((meme, i) => {
          return <MemeCard key={i} datum={meme} />;
        })}
      {loading && (
        <Card className={classes.loadingCard} shadow='sm' padding='lg' radius='md' withBorder>
          <Loader color='blue' />
        </Card>
      )}
    </div>
  );
}
