import { questionsList } from '../constants';

export const searchChallengeReducer = (state, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'FILTERED_CHALLENGE':
      const splittedSearch = action?.name?.toLowerCase()?.trim()?.split(' ');
      const filteredSearch = questionsList.filter((option) => {
        const words = option.name.toLowerCase().trim().split(' ');
        return splittedSearch.every((searchWord) =>
          words.some((word) => word.includes(searchWord))
        );
      });

      return [...filteredSearch];

    case 'CLEARED_CHALLENGE':
      return [...questionsList];
    default:
      return [...questionsList];
  }
};
