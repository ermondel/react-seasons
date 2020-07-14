export default (state = [], action) => {
  switch (action.type) {
    case 'POSTS_LIST_DATA_SUCCESS':
    case 'POSTS_VIEW_DATA_SUCCESS':
      return action.payload;

    default:
      return state;
  }
};
