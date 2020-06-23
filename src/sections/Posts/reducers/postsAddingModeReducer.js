export default (state = 'default', action) => {
  switch (action.type) {
    case 'POSTS_ADDING_SUCCESS':
      return 'success';

    case 'POSTS_ADDING_FAILURE':
      return 'failure';

    case 'POSTS_ADDING_REQUEST':
      return 'loading';

    case 'POSTS_ADDING_DEFAULT':
      return 'default';

    default:
      return state;
  }
};
