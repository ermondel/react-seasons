import { BOOK_SELECTED } from '../types';

export default (state = null, action) => {
  if (action.type === BOOK_SELECTED) {
    return action.payload;
  }

  return state;
};
