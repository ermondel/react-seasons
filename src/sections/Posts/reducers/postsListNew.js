export default (state = [], action) => {
  if (action.type === 'POSTS_LIST_DATA_SUCCESS') {
    return action.payload;
  }

  return state;
};
