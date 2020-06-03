import { BLOG_POSTS_FETCH, BLOG_POSTS_FETCH_FAILURE } from '../../../types';

const defaultState = { data: [], status: '1xx' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case BLOG_POSTS_FETCH:
      return { data: action.payload, status: '2xx' };

    case BLOG_POSTS_FETCH_FAILURE:
      return { data: action.payload, status: '5xx' };

    default:
      return state;
  }
};
