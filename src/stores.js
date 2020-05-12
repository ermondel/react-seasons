import { combineReducers } from 'redux';
import podcastReducer from './reducers/podcastReducer';
import blogPostsReducer from './reducers/blogPostsReducer';
import blogUserReducer from './reducers/blogUserReducer';
import bookActiveReducer from './reducers/bookActiveReducer';
import booksViewReducer from './reducers/booksViewReducer';
import bookSearchReducer from './reducers/bookSearchReducer';

export default combineReducers({
  podcast: podcastReducer,
  blogposts: blogPostsReducer,
  bloguser: blogUserReducer,
  bookActive: bookActiveReducer,
  booksView: booksViewReducer,
  bookSearch: bookSearchReducer,
});
