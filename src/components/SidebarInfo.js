import React from 'react';

const SidebarInfo = ({ list }) => {
  return list ? (
    <div className='info-tech'>
      <h4 className='info-tech__title'>Technologies</h4>
      <ul>
        {list.split(',').map((el, index) => (
          <li className='info-tech__item' key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SidebarInfo;
