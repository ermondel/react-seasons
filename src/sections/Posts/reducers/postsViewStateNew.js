export default (state = 'default', action) => {
  switch (action.type) {
    case 'POSTS_VIEW_AUTH_REQUEST':
      return 'auth';

    case 'POSTS_VIEW_AUTH_SUCCESS':
      return 'allow';

    case 'POSTS_VIEW_AUTH_FAILURE':
      return 'deny';

    case 'POSTS_VIEW_DATA_REQUEST':
      return 'loading';

    case 'POSTS_VIEW_DATA_SUCCESS':
      return 'success';

    case 'POSTS_VIEW_DATA_FAILURE':
      return 'failure';

    case 'POSTS_VIEW_POST_DELETED':
      return 'deleted';

    case 'POSTS_VIEW_STATE_RESET':
      return 'default';

    default:
      return state;
  }
};
