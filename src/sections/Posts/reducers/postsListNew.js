export default (state = [], action) => {
  switch (action.type) {
    case 'POSTS_LIST_DATA_SUCCESS':
    case 'POSTS_VIEW_DATA_SUCCESS':
      return action.payload;

    case 'POSTS_ADD_SAVING_SUCCESS':
      return [action.payload, ...state];

    default:
      return state;
  }
};
