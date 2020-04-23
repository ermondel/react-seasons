export default (state = [], action) => {
  if (action.type === 'FETCH_BLOG_POSTS') {
    return action.payload;
  }

  return state;
};
