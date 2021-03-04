import { POSTS_ADD_MESSAGE, POSTS_REMOVE_MESSAGE } from '@redux/types';

export default (state = '', action) => {
  switch (action.type) {
    case POSTS_ADD_MESSAGE:
      return action.message;

    case POSTS_REMOVE_MESSAGE:
      return '';

    default:
      return state;
  }
};
