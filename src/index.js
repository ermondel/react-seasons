import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import stores from '@redux/stores';
import HomeSection from '@sections/Home/index/Home';
import PositionSection from '@sections/Position/index/Position';
import BlogSection from '@sections/Blog/index/Blog';
import PostcardSection from '@sections/Postcard/index/Postcard';
import PodcastsSection from '@sections/Podcasts/index/Podcasts';
import BooksSection from '@sections/Books/index/Books';
import BoardSection from '@sections/Board/index/Board';
import WeatherSection from '@sections/Weather/index/Weather';
import PostsSection from '@sections/Posts/index/Posts';
import WidgetsSection from '@sections/Widgets/index/Widgets';
import NoMatchSection from '@sections/NoMatch/index/NoMatch';
import './style/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(stores, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <div className='app'>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={HomeSection} />
          <Route path='/position' exact component={PositionSection} />
          <Route path='/blog' exact component={BlogSection} />
          <Route path='/postcard' exact component={PostcardSection} />
          <Route path='/podcasts' exact component={PodcastsSection} />
          <Route path='/books' exact component={BooksSection} />
          <Route path='/board' exact component={BoardSection} />
          <Route path='/weather' exact component={WeatherSection} />
          <Route path='/posts' component={PostsSection} />
          <Route path='/widgets' component={WidgetsSection} />
          <Route path='*' component={NoMatchSection} />
        </Switch>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
