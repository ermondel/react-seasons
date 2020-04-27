import api from '../apis/jsonplaceholder';
// import fixture from '../fixtures/blog';

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const posts = await api.get('/posts');
    const users = await api.get('/users');

    const payload = posts.data.map((post) => {
      post.user = users.data.find((user) => user.id === post.userId);
      return post;
    });

    payload.sort(() => Math.random() - 0.5);

    dispatch({ type: 'FETCH_BLOG_POSTS', payload });
  } catch (error) {
    dispatch({ type: 'ERROR_FETCHING_BLOG_POSTS', payload: error });
  }
};

export const selectBlogUser = (user) => ({
  type: 'BLOG_USER_SELECTED',
  payload: user,
});
