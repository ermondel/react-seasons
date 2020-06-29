import { POSTS_REMOVING_SUCCESS, POSTS_READING_RESET } from '../../../types';

const defaultState = {
  mode: 'default',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_REMOVING_SUCCESS:
      return { mode: 'deleted' };

    case POSTS_READING_RESET:
      return defaultState;

    default:
      return state;
  }
};
