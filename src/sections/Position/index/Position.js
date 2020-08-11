import React from 'react';
import Header from '../../../main/Header';
import useLocation from '../resources/useLocation';
import PositionDetails from './PositionDetails';
import PositionAccept from './PositionAccept';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <div className='app-main'>
      <Header />

      <main className='main'>
        <PositionDetails geo={coords} />
        <PositionAccept wait={!errorMessage && !coords} error={errorMessage} />
      </main>
    </div>
  );
};

export default Position;
