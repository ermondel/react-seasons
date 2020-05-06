import React from 'react';

const PositionDetail = ({ geo }) => {
  const content = geo ? (
    <div className='detail'>
      <h3 className='detail__title'>Your coordinates</h3>
      <p className='detail__item'>
        <span className='l'>Latitude</span>{' '}
        <span className='r'>{geo.latitude.toFixed(6)}</span>
      </p>
      <p className='detail__item'>
        <span className='l'>Longitude</span>{' '}
        <span className='r'>{geo.longitude.toFixed(6)}</span>
      </p>
      <p className='detail__item'>
        <span className='l'>Accuracy</span>{' '}
        <span className='r'>{geo.accuracy}</span>
      </p>
    </div>
  ) : null;

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>{content}</div>
    </div>
  );
};

export default PositionDetail;
