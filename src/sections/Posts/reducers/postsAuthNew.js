const defaultState = { publicKey: '' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS_LIST_AUTH_SUCCESS':
      return { publicKey: action.payload };

    default:
      return state;
  }
};
