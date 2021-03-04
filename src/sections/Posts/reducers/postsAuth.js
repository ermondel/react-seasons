import {
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_FAILURE,
} from '@redux/types';

const defaultState = { publicKey: '' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_AUTH_SUCCESS:
      return { publicKey: action.payload };

    case POSTS_AUTH_REQUEST:
    case POSTS_AUTH_FAILURE:
      return defaultState;

    default:
      return state;
  }
};
