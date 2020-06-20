import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import podcastReducer from './sections/Podcasts/reducers/podcastReducer';
import blogPostsReducer from './sections/Blog/reducers/blogPostsReducer';
import blogUserReducer from './sections/Blog/reducers/blogUserReducer';
import blogErrorReducer from './sections/Blog/reducers/blogErrorReducer';
import blogSpinnerReducer from './sections/Blog/reducers/blogSpinnerReducer';
import bookActiveReducer from './sections/Books/reducers/bookActiveReducer';
import booksViewReducer from './sections/Books/reducers/booksViewReducer';
import bookSearchReducer from './sections/Books/reducers/bookSearchReducer';
import forecastListReducer from './sections/Weather/reducers/forecastListReducer';
import forecastSpinnerReducer from './sections/Weather/reducers/forecastSpinnerReducer';
import forecastErrorReducer from './sections/Weather/reducers/forecastErrorReducer';
import forecastViewReducer from './sections/Weather/reducers/forecastViewReducer';
import forecastCityReducer from './sections/Weather/reducers/forecastCityReducer';
import forecastMountMapReducer from './sections/Weather/reducers/forecastMountMapReducer';
import ModalWindowReducer from './app/ModalWindow/reducers/ModalWindowReducer';
import postsListReducer from './sections/Posts/reducers/postsListReducer';
import postsSpinnerReducer from './sections/Posts/reducers/postsSpinnerReducer';
import postsErrorReducer from './sections/Posts/reducers/postsErrorReducer';

export default combineReducers({
  podcast: podcastReducer,
  blogPosts: blogPostsReducer,
  blogUser: blogUserReducer,
  blogError: blogErrorReducer,
  blogSpinner: blogSpinnerReducer,
  bookActive: bookActiveReducer,
  booksView: booksViewReducer,
  bookSearch: bookSearchReducer,
  forecastList: forecastListReducer,
  forecastSpinner: forecastSpinnerReducer,
  forecastError: forecastErrorReducer,
  forecastView: forecastViewReducer,
  forecastCity: forecastCityReducer,
  forecastMountMap: forecastMountMapReducer,
  modalWindow: ModalWindowReducer,
  postsList: postsListReducer,
  postsSpinner: postsSpinnerReducer,
  postsError: postsErrorReducer,
  form: formReducer,
});
