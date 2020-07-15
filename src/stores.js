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
import postsMessage from './sections/Posts/reducers/postsMessage';
import postsSearch from './sections/Posts/reducers/postsSearch';
import postsAuth from './sections/Posts/reducers/postsAuth';
import postsSort from './sections/Posts/reducers/postsSort';
import postsStatus from './sections/Posts/reducers/postsStatus';
import postsAdding from './sections/Posts/reducers/postsAdding';
import postsView from './sections/Posts/reducers/postsView';

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
  postsMessage: postsMessage,
  postsSearch: postsSearch,
  postsAuth: postsAuth,
  postsSort: postsSort,
  postsStatus: postsStatus,
  postsAdding: postsAdding,
  postsView: postsView,
  form: formReducer,
});
