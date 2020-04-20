import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="main-nav">
      <Link to="/" className="main-nav__item">
        Home
      </Link>{' '}
      <Link to="/position" className="main-nav__item">
        Position
      </Link>{' '}
      <Link to="/blog" className="main-nav__item">
        Blog
      </Link>{' '}
      <Link to="/term" className="main-nav__item">
        Term
      </Link>{' '}
      <Link to="/podcasts" className="main-nav__item">
        Podcasts
      </Link>{' '}
      <Link to="/books" className="main-nav__item">
        Books
      </Link>
    </nav>
  </header>
);

export default Header;
