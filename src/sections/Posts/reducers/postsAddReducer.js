import {
  POSTS_CREATE_REQUEST,
  POSTS_CREATE_SUCCESS,
  POSTS_CREATE_FAILURE,
  POSTS_CREATE_INFO_CLOSE,
} from '../../../types';

export default (state = null, action) => {
  switch (action.type) {
    case POSTS_CREATE_SUCCESS:
      return action.payload.id;

    case POSTS_CREATE_REQUEST:
    case POSTS_CREATE_FAILURE:
    case POSTS_CREATE_INFO_CLOSE:
      return null;

    default:
      return state;
  }
};
