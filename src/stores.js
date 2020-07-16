import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalWindow from './util/ModalWindow/reducers/modalWindow';
import podcast from './sections/Podcasts/reducers/podcast';
import blogPosts from './sections/Blog/reducers/blogPosts';
import blogUser from './sections/Blog/reducers/blogUser';
import blogError from './sections/Blog/reducers/blogError';
import blogSpinner from './sections/Blog/reducers/blogSpinner';
import bookActive from './sections/Books/reducers/bookActive';
import booksView from './sections/Books/reducers/booksView';
import bookSearch from './sections/Books/reducers/bookSearch';
import forecastList from './sections/Weather/reducers/forecastList';
import forecastSpinner from './sections/Weather/reducers/forecastSpinner';
import forecastError from './sections/Weather/reducers/forecastError';
import forecastView from './sections/Weather/reducers/forecastView';
import forecastCity from './sections/Weather/reducers/forecastCity';
import forecastMountMap from './sections/Weather/reducers/forecastMountMap';
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
  modalWindow,
  podcast,
  blogPosts,
  blogUser,
  blogError,
  blogSpinner,
  bookActive,
  booksView,
  bookSearch,
  forecastList,
  forecastSpinner,
  forecastError,
  forecastView,
  forecastCity,
  forecastMountMap,
  postsList,
  postsView,
  postsAdding,
  postsRemoving,
  postsStatus,
  postsAuth,
  postsMessage,
  postsSearch,
  postsSort,
  form: formReducer,
});
