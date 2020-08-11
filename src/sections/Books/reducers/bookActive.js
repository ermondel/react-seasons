import { BOOKS_ITEM_SELECTED } from '../../../lib/types';

export default (state = null, action) => {
  if (action.type === BOOKS_ITEM_SELECTED) {
    return action.payload;
  }

  return state;
};
