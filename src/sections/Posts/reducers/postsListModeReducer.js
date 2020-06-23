export default (state = 'default', action) => {
  switch (action.type) {
    case 'POSTS_LIST_SUCCESS':
      return 'success';

    case 'POSTS_LIST_FAILURE':
      return 'failure';

    case 'POSTS_LIST_REQUEST':
      return 'loading';

    case 'POSTS_LIST_DEFAULT':
      return 'default';

    default:
      return state;
  }
};
