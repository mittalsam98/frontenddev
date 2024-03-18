import { Button, Card, Group, Text, ThemeIcon, rem, useMantineTheme } from '@mantine/core';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CardDatum(props) {
  const { description, name, path, github } = props.val;
  const theme = useMantineTheme();

  return (
    <>
      <Card withBorder radius='md'>
        <ThemeIcon
          size='xl'
          radius='md'
          variant='gradient'
          gradient={{ deg: 180, from: theme.colors.primaryRed[1], to: theme.colors.primaryRed[0] }}
        >
          <Link to={github} target='_blank'>
            <BsGithub style={{ width: rem(28), height: rem(28), color: '#fff' }} stroke={1.5} />
          </Link>
        </ThemeIcon>
        <Text size='xl' fw={600} mt='md'>
          {name}
        </Text>
        <Text size='sm' mt='sm' mb='lg'>
          {description}
        </Text>
        <Group mt='xs'>
          <Button variant='link' component={Link} to={path} radius='md' style={{ flex: 1 }}>
            Check demo
          </Button>
          {/* <ActionIcon variant='default' radius='md' size={36}>
            <FaHeart className={classes.like} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Card>
    </>
  );
}
