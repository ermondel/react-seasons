import React from 'react';
import PositionDetail from './PositionDetail';
import useLocation from './useLocation';
import AcceptCard from './AcceptCard';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>
          <PositionDetail geo={coords} />
        </div>
      </div>
      <div className='content'>
        <div className='content-wrap'>
          <AcceptCard wait={!errorMessage && !coords} error={errorMessage} />
        </div>
      </div>
    </main>
  );
};

export default Position;
