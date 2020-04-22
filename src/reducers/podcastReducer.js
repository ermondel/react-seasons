export default (state = [], action) => {
  if (action.type === 'PODCAST_SELECTED') {
    return action.payload;
  }

  return state;
};
