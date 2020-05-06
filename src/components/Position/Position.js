import React from 'react';
import useLocation from './useLocation';
import PositionDetail from './PositionDetail';
import PositionAccept from './PositionAccept';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <main className='main'>
      <PositionDetail geo={coords} />
      <PositionAccept wait={!errorMessage && !coords} error={errorMessage} />
    </main>
  );
};

export default Position;
