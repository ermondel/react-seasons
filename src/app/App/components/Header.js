import React from 'react';
import { Link } from 'react-router-dom';

const getLinkClass = (to, props) => {
  return props.path === to ? 'main-nav__item_active' : 'main-nav__item';
};

const Header = (props) => (
  <header className='header'>
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li>
          <Link to={'/'} className={getLinkClass('/', props)}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/blog'} className={getLinkClass('/blog', props)}>
            Blog
          </Link>
        </li>
        <li>
          <Link to={'/postcard'} className={getLinkClass('/postcard', props)}>
            Postcard
          </Link>
        </li>
        <li>
          <Link to={'/podcasts'} className={getLinkClass('/podcasts', props)}>
            Podcasts
          </Link>
        </li>
        <li>
          <Link to={'/books'} className={getLinkClass('/books', props)}>
            Books
          </Link>
        </li>
        <li>
          <Link to={'/board'} className={getLinkClass('/board', props)}>
            Board
          </Link>
        </li>
        <li>
          <Link to={'/position'} className={getLinkClass('/position', props)}>
            Position
          </Link>
        </li>
        <li>
          <Link to={'/weather'} className={getLinkClass('/weather', props)}>
            Weather
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
