import api from '../../../jsonplaceholder';
import {
  BLOG_POSTS_FETCH,
  BLOG_POSTS_FETCH_FAILURE,
  BLOG_USER_SELECTED,
} from '../../../types';

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const posts = await api.get('/posts');
    const users = await api.get('/users');

    const payload = posts.data.map((post) => {
      post.user = users.data.find((user) => user.id === post.userId);
      return post;
    });

    payload.sort(() => Math.random() - 0.5);

    dispatch({ type: BLOG_POSTS_FETCH, payload });
  } catch (error) {
    dispatch({ type: BLOG_POSTS_FETCH_FAILURE, payload: error });
  }
};

export const selectBlogUser = (user) => ({
  type: BLOG_USER_SELECTED,
  payload: user,
});
