export default (state = 'default', action) => {
  switch (action.type) {
    case 'POSTS_ADD_AUTH_REQUEST':
      return 'auth';

    case 'POSTS_ADD_AUTH_SUCCESS':
      return 'allow';

    case 'POSTS_ADD_AUTH_FAILURE':
      return 'deny';

    case 'POSTS_ADD_SAVING_REQUEST':
      return 'saving';

    case 'POSTS_ADD_SAVING_SUCCESS':
      return 'success';

    case 'POSTS_ADD_SAVING_FAILURE':
      return 'failure';

    case 'POSTS_ADD_STATE_RESET':
      return 'default';

    default:
      return state;
  }
};
