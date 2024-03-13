import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './infinte-scroll.module.css';

export default function MemeCard(props) {
  const { url, title, author, postLink, subreddit } = props.datum;
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image src={url} height={160} alt='Norway' />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Badge color='pink'>Subreddit :{subreddit}</Badge>
      </Group>

      <Text w={500}>{title}</Text>
      <Link to={postLink} target='_blank' className={classes.postLink}>
        <Button color='blue' fullWidth mt='md' radius='md'>
          Post Link
        </Button>
      </Link>
    </Card>
  );
}
