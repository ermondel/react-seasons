import { SET_ACTIVE_BOOK } from '../../../types';

export default (state = null, action) => {
  if (action.type === SET_ACTIVE_BOOK) {
    return action.payload;
  }

  return state;
};
