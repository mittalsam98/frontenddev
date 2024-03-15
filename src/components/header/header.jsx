import { Switch, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

const MyHeader = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

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
        onLabel={<FaSun color={theme.colors.dark[6]} size='1.25rem' stroke={1.5} />}
        offLabel={<RiMoonClearFill color={theme.colors.gray[6]} size='1.25rem' stroke={1.5} />}
      />
    </header>
  );
};

export default MyHeader;
