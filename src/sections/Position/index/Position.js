import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import useLocation from '../resources/useLocation';
import PositionDetails from './PositionDetails';
import PositionAccept from './PositionAccept';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <React.Fragment>
      <div className='side-container'>
        <MainNavigation />
        <PositionDetails geo={coords} />
      </div>

      <div className='content-container'>
        <PositionAccept wait={!errorMessage && !coords} error={errorMessage} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Position;
