import { combineReducers } from 'redux';
import podcastReducer from './sections/Podcasts/reducers/podcastReducer';
import blogPostsReducer from './sections/Blog/reducers/blogPostsReducer';
import blogUserReducer from './sections/Blog/reducers/blogUserReducer';
import bookActiveReducer from './sections/Books/reducers/bookActiveReducer';
import booksViewReducer from './sections/Books/reducers/booksViewReducer';
import bookSearchReducer from './sections/Books/reducers/bookSearchReducer';
import forecastListReducer from './sections/Weather/reducers/forecastListReducer';
import forecastSpinnerReducer from './sections/Weather/reducers/forecastSpinnerReducer';
import forecastErrorReducer from './sections/Weather/reducers/forecastErrorReducer';
import forecastViewReducer from './sections/Weather/reducers/forecastViewReducer';

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
  forecastView: forecastViewReducer,
});
