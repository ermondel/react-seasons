const defaultState = {
  mode: 'default',
  id: null,
  title: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS_ADDING_REQUEST':
      return {
        mode: 'loading',
        id: action.id,
        title: action.title,
      };

    case 'POSTS_ADDING_SUCCESS':
      return {
        mode: 'success',
        id: action.id,
        title: action.title,
        payload: action.payload,
      };

    case 'POSTS_ADDING_FAILURE':
      return {
        mode: 'failure',
        id: action.id,
        title: action.title,
        status: action.status,
      };

    case 'POSTS_ADDING_RESET':
      return defaultState;

    default:
      return state;
  }
};
