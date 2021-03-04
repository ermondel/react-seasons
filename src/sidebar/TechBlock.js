import React from 'react';

const TechBlock = ({ list, top = false }) => {
  return list ? (
    <div className={`techblock ${top ? 'techblock--top' : 'techblock--bottom'}`}>
      <h4 className='techblock__title'>Technologies</h4>
      <ul>
        {list.split(',').map((el, index) => (
          <li className='techblock__item' key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default TechBlock;
