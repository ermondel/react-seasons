import { combineReducers } from 'redux';
import podcastReducer from './reducers/podcastReducer';
import blogPostsReducer from './reducers/blogPostsReducer';
import blogUserReducer from './reducers/blogUserReducer';
import bookActiveReducer from './reducers/bookActiveReducer';
import booksViewReducer from './reducers/booksViewReducer';
import bookSearchReducer from './reducers/bookSearchReducer';
import forecastListReducer from './reducers/forecastListReducer';
import forecastSpinnerReducer from './reducers/forecastSpinnerReducer';
import forecastErrorReducer from './reducers/forecastErrorReducer';

export default combineReducers({
  podcast: podcastReducer,
  blogPosts: blogPostsReducer,
  blogUser: blogUserReducer,
  bookActive: bookActiveReducer,
  booksView: booksViewReducer,
  bookSearch: bookSearchReducer,
  forecastList: forecastListReducer,
  forecastSpinner: forecastSpinnerReducer,
  forecastError: forecastErrorReducer,
});
