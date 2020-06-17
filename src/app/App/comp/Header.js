import React from 'react';
import NavItem from '../../NavItem/comp/NavItem';

const Header = (props) => (
  <header className='header'>
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li>
          <NavItem val={'Home'} from={props.path} to={'/'} />
        </li>
        <li>
          <NavItem val={'Blog'} from={props.path} to={'/blog'} />
        </li>
        <li>
          <NavItem val={'Postcard'} from={props.path} to={'/postcard'} />
        </li>
        <li>
          <NavItem val={'Podcasts'} from={props.path} to={'/podcasts'} />
        </li>
        <li>
          <NavItem val={'Books'} from={props.path} to={'/books'} />
        </li>
        <li>
          <NavItem val={'Board'} from={props.path} to={'/board'} />
        </li>
        <li>
          <NavItem val={'Position'} from={props.path} to={'/position'} />
        </li>
        <li>
          <NavItem val={'Weather'} from={props.path} to={'/weather'} />
        </li>
        <li>
          <NavItem val={'Posts'} from={props.path} to={'/posts'} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
