import { FETCH_BLOG_POSTS, ERROR_FETCHING_BLOG_POSTS } from '../actions/types';

const defaultState = { data: [], status: '1xx' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return { data: action.payload, status: '2xx' };

    case ERROR_FETCHING_BLOG_POSTS:
      return { data: action.payload, status: '5xx' };

    default:
      return state;
  }
};
