import { PODCAST_SELECTED } from '../../../types';

export default (state = null, action) => {
  if (action.type === PODCAST_SELECTED) {
    return action.payload;
  }

  return state;
};
