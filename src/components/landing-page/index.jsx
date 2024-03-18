import { useSearchChallenges } from '../../utils/contexts/search-challenge-context';
import CardDatum from './card';
import HeroSection from './hero';
import classes from './landing.module.css';
import NotFound from './not-found';

export default function Landing() {
  const state = useSearchChallenges();

  return (
    <>
      <div className={classes.outerContainer}>
        <div className={classes.backgroundEffect}></div>
        <HeroSection />
      </div>
      <div className={state.length ? classes.cardContainer : classes.notFound}>
        {state.length ? (
          state.map((val) => {
            return <CardDatum key={val.name} val={val} />;
          })
        ) : (
          <>
            <NotFound />
          </>
        )}
      </div>
    </>
  );
}
