import { combineReducers } from 'redux';
import podcastReducer from './reducers/podcastReducer';
import blogPostsReducer from './reducers/blogPostsReducer';
import blogUserReducer from './reducers/blogUserReducer';

export default combineReducers({
  podcast: podcastReducer,
  blogposts: blogPostsReducer,
  bloguser: blogUserReducer,
});
