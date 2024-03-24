import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './pagination.module.css';

export default function ProductCard(props) {
  const { price, brand, images, postLink, category } = props.datum;
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image src={images[0]} height={160} alt='Norway' />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Badge color='pink'>{category}</Badge>
      </Group>

      <Text w={500}>{brand}</Text>
      <Link to={postLink} target='_blank' className={classes.postLink}>
        <Button fullWidth mt='md' radius='md'>
          $ {price}
        </Button>
      </Link>
    </Card>
  );
}
