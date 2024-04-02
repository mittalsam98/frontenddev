import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Text,
  ThemeIcon,
  rem,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './landing.module.css';
import { levelColorMapping } from '../../utils/constants';

export default function CardDatum(props) {
  const { description, name, path, github, difficulty } = props.val;
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <>
      <Card withBorder radius='md' p={0}>
        <Flex
          mih={50}
          gap='md'
          px={15}
          py={10}
          justify='space-between'
          align='center'
          direction='row'
          wrap='wrap'
        >
          <Text size='xl' fw={600}>
            {name}
          </Text>
          {console.log(levelColorMapping[difficulty], difficulty)}
          <Badge size='sm' color={levelColorMapping[difficulty]}>
            {difficulty}
          </Badge>
        </Flex>
        <Divider />
        <Flex px={15} py={10} direction='column'>
          <Text size='sm' mt='sm' mb='lg' lineClamp={2}>
            {description}
          </Text>
          <Group mt='xs'>
            <Button variant='link' component={Link} to={path} radius='md' style={{ flex: 1 }}>
              Check demo
            </Button>
            <ActionIcon variant='default' radius='md' size={36}>
              {' '}
              <Link to={github} target='_blank'>
                <BsGithub
                  style={{
                    color: colorScheme === 'light' ? '#000' : '#fff'
                  }}
                />{' '}
              </Link>
            </ActionIcon>
          </Group>
        </Flex>
      </Card>
    </>
  );
}
