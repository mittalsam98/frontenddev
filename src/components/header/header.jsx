import { Autocomplete, Switch, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { CiSearch } from 'react-icons/ci';
import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { questionsList } from '../../utils/constants';
import { useSearchChallengesDispatch } from '../../utils/contexts/search-challenge-context';
import classes from './header.module.css';
import FD from '../../assets/frontend_dev_logo.svg';

const MyHeader = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const searchChallengesDispatch = useSearchChallengesDispatch();

  const theme = useMantineTheme();

  return (
    <header className={classes.header}>
      <Link className={classes.link} to={'/'}>
        <img src={FD} height={25} />
        <Title className={classes.linkFrontend} order={3}>
          Frontend
        </Title>
        <Title className={classes.linkDev} order={3}>
          Dev
        </Title>
      </Link>
      <div className={classes.searchContainer}>
        <Autocomplete
          onChange={(e) => {
            if (e) {
              searchChallengesDispatch({
                type: 'FILTERED_CHALLENGE',
                name: e
              });
            } else {
              searchChallengesDispatch({
                type: 'CLEARED_CHALLENGE',
                name: e
              });
            }
          }}
          placeholder='Search challenges'
          rightSection={<CiSearch />}
          data={questionsList.map((val) => val.name)}
          comboboxProps={{ shadow: 'md', transitionProps: { transition: 'pop', duration: 200 } }}
        />
        <Switch
          checked={colorScheme === 'dark'}
          onChange={toggleColorScheme}
          size='lg'
          onLabel={<FaSun color={theme.colors.dark[6]} size='1.25rem' stroke={1.5} />}
          offLabel={<RiMoonClearFill color={theme.colors.gray[6]} size='1.25rem' stroke={1.5} />}
        />
      </div>
    </header>
  );
};

export default MyHeader;
