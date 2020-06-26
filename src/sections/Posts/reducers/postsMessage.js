import { POSTS_MESSAGE_ADD, POSTS_MESSAGE_REMOVE } from '../../../types';

export default (state = '', action) => {
  switch (action.type) {
    case POSTS_MESSAGE_ADD:
      return action.message;

    case POSTS_MESSAGE_REMOVE:
      return '';

    default:
      return state;
  }
};
