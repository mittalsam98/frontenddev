import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useSearchChallenges } from '../../utils/contexts/search-challenge-context';
import CardDatum from './card';
import classes from './landing.module.css';

export default function Landing() {
  const state = useSearchChallenges();

  return (
    <div className={state.length ? classes.outerContainer : classes.notFound}>
      {state.length ? (
        state.map((val) => {
          return <CardDatum key={val.name} val={val} />;
        })
      ) : (
        <>
          <Text size='xl' fw={500}>
            No Challenges found.{'     '}
          </Text>
          <Link
            to='https://github.com/mittalsam98/React-JS-Machine-Coding-Interview-Question'
            target='_blank'
          >
            <Text size='xl' fw={500}>
              Add it here
            </Text>{' '}
          </Link>
        </>
      )}
    </div>
  );
}
