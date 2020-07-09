import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalWindow from './util/ModalWindow/reducers/modalWindow';
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
import postsRemoving from './sections/Posts/reducers/postsRemoving';
import postsList from './sections/Posts/reducers/postsList';
import postsAdding from './sections/Posts/reducers/postsAdding';
import postsMessage from './sections/Posts/reducers/postsMessage';
import postsReading from './sections/Posts/reducers/postsReading';
import postsSearch from './sections/Posts/reducers/postsSearch';
import postsAuth from './sections/Posts/reducers/postsAuth';

export default combineReducers({
  modalWindow: modalWindow,
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
  postsRemoving: postsRemoving,
  postsList: postsList,
  postsAdding: postsAdding,
  postsMessage: postsMessage,
  postsReading: postsReading,
  postsSearch: postsSearch,
  postsAuth: postsAuth,
  form: formReducer,
});
