import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { includesPath } from '../../lib/path';

const NavItemLi = ({ children, to, block }) => {
  if (includesPath(to, useLocation().pathname)) {
    return (
      <li className={block + '__item'}>
        <span className={block + '__link--active'}>{children}</span>
      </li>
    );
  }

  return (
    <li className={block + '__item'}>
      <Link to={to} className={block + '__link'}>
        {children}
      </Link>
    </li>
  );
};

export default NavItemLi;
