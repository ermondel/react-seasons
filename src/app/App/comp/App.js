import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../../../sections/Home/comp/Home';
import Position from '../../../sections/Position/comp/Position';
import Blog from '../../../sections/Blog/comp/Blog';
import Postcard from '../../../sections/Postcard/comp/Postcard';
import Podcasts from '../../../sections/Podcasts/comp/Podcasts';
import Books from '../../../sections/Books/comp/Books';
import Board from '../../../sections/Board/comp/Board';
import Weather from '../../../sections/Weather/comp/Weather';
import Posts from '../../../sections/Posts/comp/Posts';
import ReadPost from '../../../sections/Posts/comp/ReadPost';
import AddPost from '../../../sections/Posts/comp/AddPost';
import DeletePost from '../../../sections/Posts/comp/DeletePost';
import NoMatch from '../../../sections/NoMatch/comp/NoMatch';

const App = (props) => (
  <div className='app'>
    <HashRouter>
      <div className='app-wrap'>
        <Switch>
          <Route path='/' exact>
            <Header path='/' />
            <Home />
          </Route>

          <Route path='/position' exact>
            <Header path='/position' />
            <Position />
          </Route>

          <Route path='/blog' exact>
            <Header path='/blog' />
            <Blog />
          </Route>

          <Route path='/postcard' exact>
            <Header path='/postcard' />
            <Postcard />
          </Route>

          <Route path='/podcasts' exact>
            <Header path='/podcasts' />
            <Podcasts />
          </Route>

          <Route path='/books' exact>
            <Header path='/books' />
            <Books />
          </Route>

          <Route path='/board' exact>
            <Header path='/board' />
            <Board />
          </Route>

          <Route path='/weather' exact>
            <Header path='/weather' />
            <Weather />
          </Route>

          <Route path='/posts' exact>
            <Header path='/posts' />
            <Posts />
          </Route>

          <Route path='/posts/add' exact>
            <Header path='/posts' />
            <AddPost />
          </Route>

          <Route path='/posts/:id' exact>
            <Header path='/posts' />
            <ReadPost />
          </Route>

          <Route path='/posts/delete/:id' exact>
            <Header path='/posts' />
            <DeletePost />
          </Route>

          <Route path='*'>
            <Header />
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </HashRouter>
  </div>
);

export default App;
