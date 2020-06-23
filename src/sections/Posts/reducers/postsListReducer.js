export default (state = [], action) => {
  switch (action.type) {
    case 'POSTS_LIST_SUCCESS':
      return action.payload;

    case 'POSTS_ADDING_SUCCESS':
      return [action.payload, ...state];

    default:
      return state;
  }
};
