import React from 'react';

const InfoBlock = ({ title, data, buttons = null }) => {
  let content = [];
  for (let key in data) {
    content.push(
      <p className='infoblock__item' key={key}>
        <span className='l'>{key}</span> <span className='r'>{data[key]}</span>
      </p>
    );
  }

  return (
    <div className='infoblock'>
      <h3 className='infoblock__title'>{title}</h3>
      {content}
      {buttons}
    </div>
  );
};

export default InfoBlock;
