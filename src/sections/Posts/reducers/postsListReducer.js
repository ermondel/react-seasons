import { POSTS_FETCH_SUCCESS, POSTS_CREATE_SUCCESS } from '../../../types';

export default (state = [], action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return action.payload;

    case POSTS_CREATE_SUCCESS:
      return [action.payload, ...state];

    default:
      return state;
  }
};
