import { FaHeart } from 'react-icons/fa';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './landing.module.css';
import { Link } from 'react-router-dom';

export default function CardDatum(props) {
  const { description, name, path } = props.val;
  return (
    <Card withBorder radius='md' p='md' className={classes.card}>
      {/* <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section> */}

      <Card.Section className={classes.section} mt='md'>
        <Group justify='center'>
          <Text fz='lg' fw={500}>
            {name}
          </Text>
        </Group>
        <Text fz='sm' ml='xs' mt='xs'>
          {description}
        </Text>
      </Card.Section>

      {/* <Card.Section className={classes.section}>
        <Text mt='md' className={classes.label} c='dimmed'>
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section> */}

      <Group justify='center' mt='xs'>
        <Link to={path}>Check demo</Link>
        {/* <ActionIcon variant='default' radius='md' size={36}>
          <FaHeart className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}

// https://ui.mantine.dev/category/app-cards/
