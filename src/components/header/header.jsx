import { Center, Flex, Group, Switch, Title, useMantineTheme } from '@mantine/core';
import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const MyHeader = ({ colorScheme, toggleColorScheme, open }) => {
  const theme = useMantineTheme();
  return (
    <header className={classes.header}>
      <Link className={classes.link} to={'/'}>
        <Title order={3}>Frontend React Challenges</Title>
      </Link>

      <Switch
        checked={colorScheme === 'dark'}
        onChange={toggleColorScheme}
        size='lg'
        onLabel={<FaSun color={theme.white} size='1.25rem' stroke={1.5} />}
        offLabel={<RiMoonClearFill color={theme.colors.gray[6]} size='1.25rem' stroke={1.5} />}
      />
    </header>
  );
};

export default MyHeader;
