import React from 'react';
import useLocation from './useLocation';
import PositionDetails from './PositionDetails';
import PositionAccept from './PositionAccept';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <main className='main'>
      <PositionDetails geo={coords} />
      <PositionAccept wait={!errorMessage && !coords} error={errorMessage} />
    </main>
  );
};

export default Position;
