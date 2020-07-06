import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_ADDING_SUCCESS,
  POSTS_REMOVING_SUCCESS,
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
} from '../../../types';

const defaultState = {
  mode: 'default',
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return {
        mode: 'loading',
        list: [],
      };

    case POSTS_LIST_SUCCESS:
      return {
        mode: 'success',
        list: action.payload,
      };

    case POSTS_LIST_FAILURE:
      return {
        mode: 'failure',
        list: [],
        status: action.status,
      };

    case POSTS_ADDING_SUCCESS:
      return {
        mode: 'default',
        list: [action.payload, ...state.list],
      };

    case POSTS_REMOVING_SUCCESS: {
      return {
        mode: 'default',
        list: state.list.filter((post) => post.id !== action.id),
      };
    }

    case POSTS_AUTH_REQUEST: {
      return {
        mode: 'auth',
        list: [],
      };
    }

    case POSTS_AUTH_SUCCESS: {
      return {
        mode: 'allow',
        list: [],
      };
    }

    case POSTS_AUTH_FAILURE: {
      return {
        mode: 'deny',
        list: [],
      };
    }

    default:
      return state;
  }
};
