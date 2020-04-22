import { combineReducers } from 'redux';
import podcastReducer from './reducers/podcastReducer';

export default combineReducers({
  podcast: podcastReducer,
});
