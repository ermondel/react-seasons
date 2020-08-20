import React from 'react';

const Smartphone = ({ os, brand, resolution }) => (
  <div className='smartphone'>
    <div className='smartphone__body'>
      <div className='smartphone__brand'>{brand || 'brand'}</div>
      <div className='smartphone__screen'>
        <div className='smartphone__os'>{os || 'os'}</div>
        <div className='smartphone__resolution'>{resolution || 'resolution'}</div>
      </div>
      <div className='smartphone__button'></div>
    </div>
  </div>
);

export default Smartphone;
