const defaultState = { list: [], display: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS_ADDING_SUCCESS':
      const item = {
        message: 'The post has been added.',
        id: action.payload.id,
      };

      return { list: [...state.list, item], display: true };

    case 'POSTS_LOG_HIDE':
      return { ...state, display: false };

    default:
      return state;
  }
};
