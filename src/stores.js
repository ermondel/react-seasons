import { combineReducers } from 'redux';
import podcastReducer from './reducers/podcastReducer';
import blogPostsReducer from './reducers/blogPostsReducer';
import blogUserReducer from './reducers/blogUserReducer';
import bookReducer from './reducers/bookReducer';
import booksViewReducer from './reducers/booksViewReducer';

export default combineReducers({
  podcast: podcastReducer,
  blogposts: blogPostsReducer,
  bloguser: blogUserReducer,
  book: bookReducer,
  books_view: booksViewReducer,
});
