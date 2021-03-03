import React from 'react';
import NavItemLi from '../special/NavItem/NavItemLi';
import { isChrome } from '../lib/browser';

const Header = () => (
  <nav className='main-nav'>
    <ul className='main-nav__list'>
      <NavItemLi to='/' block='main-nav'>
        Home
      </NavItemLi>

      <NavItemLi to='/blog' block='main-nav'>
        Blog
      </NavItemLi>

      <NavItemLi to='/postcard' block='main-nav'>
        Postcard
      </NavItemLi>

      <NavItemLi to='/podcasts' block='main-nav'>
        Podcasts
      </NavItemLi>

      <NavItemLi to='/books' block='main-nav'>
        Books
      </NavItemLi>

      <NavItemLi to='/board' block='main-nav'>
        Board
      </NavItemLi>

      {isChrome && (
        <NavItemLi to='/position' block='main-nav'>
          Position
        </NavItemLi>
      )}

      <NavItemLi to='/weather' block='main-nav'>
        Weather
      </NavItemLi>

      <NavItemLi to='/posts' block='main-nav'>
        Posts
      </NavItemLi>

      <NavItemLi to='/widgets' block='main-nav'>
        Widgets
      </NavItemLi>
    </ul>
  </nav>
);

export default Header;
