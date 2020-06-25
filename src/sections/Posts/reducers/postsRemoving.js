const defaultState = {
  mode: 'default',
  id: null,
  title: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS_REMOVING_ASK':
      return {
        mode: 'ask',
        id: action.id,
        title: action.title,
      };

    case 'POSTS_REMOVING_REQUEST':
      return {
        mode: 'loading',
        id: action.id,
        title: action.title,
      };

    case 'POSTS_REMOVING_SUCCESS':
      return {
        mode: 'success',
        id: action.id,
        title: action.title,
      };

    case 'POSTS_REMOVING_FAILURE':
      return {
        mode: 'failure',
        id: action.id,
        title: action.title,
      };

    case 'POSTS_REMOVING_RESET':
      return defaultState;

    default:
      return state;
  }
};
