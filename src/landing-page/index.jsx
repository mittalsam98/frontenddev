import { FaHeart } from 'react-icons/fa';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './landing.module.css';
import { questionsList } from './list-items';
import CardDatum from './card';

export default function Landing() {
  return (
    <div className={classes.outerContainer}>
      {questionsList.map((val) => {
        return <CardDatum val={val} />;
      })}
    </div>
  );
}
