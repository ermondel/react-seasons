import api from '../apis/jsonplaceholder';
import fixture from '../fixtures/blog';

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    /* **
    const posts = await api.get('/posts');
    const users = await api.get('/users');

    const payload = posts.data.map((post) => {
      post.user = users.data.find((user) => user.id === post.userId);
      return post;
    });
    ** */

    dispatch({ type: 'FETCH_BLOG_POSTS', payload: fixture });
  } catch (error) {
    console.log(error);
  }
};
