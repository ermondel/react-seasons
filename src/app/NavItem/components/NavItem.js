import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ val, from, to }) => {
  if (from === to) {
    return <span className='main-nav__item_active'>{val}</span>;
  } else {
    return (
      <Link to={to} className='main-nav__item'>
        {val}
      </Link>
    );
  }
};

export default NavItem;
