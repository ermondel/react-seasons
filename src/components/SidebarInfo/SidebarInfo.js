import React from 'react';

const SidebarInfo = ({ list }) => {
  return list ? (
    <div className='sidebar-info'>
      <h4 className='sidebar-info__title'>Technologies</h4>
      <ul>
        {list.split(',').map((el, index) => (
          <li className='sidebar-info__item' key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SidebarInfo;
