export default (state = 'default', action) => {
  switch (action.type) {
    case 'POSTS_LIST_AUTH_REQUEST':
      return 'auth';

    case 'POSTS_LIST_AUTH_SUCCESS':
      return 'allow';

    case 'POSTS_LIST_AUTH_FAILURE':
      return 'deny';

    case 'POSTS_LIST_DATA_REQUEST':
      return 'loading';

    case 'POSTS_LIST_DATA_SUCCESS':
      return 'success';

    case 'POSTS_LIST_DATA_FAILURE':
      return 'failure';

    case 'POSTS_LIST_STATE_RESET':
      return 'default';

    default:
      return state;
  }
};
