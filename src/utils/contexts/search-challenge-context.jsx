import { createContext, useContext, useReducer } from 'react';
import { questionsList } from '../constants';
import { searchChallengeReducer } from '../reducers/search-challenge-reducer';

export const SearchChallenges = createContext();
export const SearchChallengesDispatch = createContext();

export function useSearchChallenges() {
  const context = useContext(SearchChallenges);

  if (context === undefined) {
    throw new Error('Scope is outside of the useSearchChallenges hook');
  }

  return context;
}
export function useSearchChallengesDispatch() {
  const context = useContext(SearchChallengesDispatch);

  if (context === undefined) {
    throw new Error('Scope is outside of the useSearchChallengesDispatch hook');
  }

  return context;
}

export function SearchChallengesContextProvider({ children }) {
  const [state, dispatch] = useReducer(searchChallengeReducer, questionsList);

  return (
    <SearchChallenges.Provider value={state}>
      <SearchChallengesDispatch.Provider value={dispatch}>
        {children}
      </SearchChallengesDispatch.Provider>
    </SearchChallenges.Provider>
  );
}
