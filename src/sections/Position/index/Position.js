import React from 'react';
import Header from '../../../main/Header';
import useLocation from '../resources/useLocation';
import PositionDetails from './PositionDetails';
import PositionAccept from './PositionAccept';
import Footer from '../../../main/Footer';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <React.Fragment>
      <div className='side-container'>
        <Header />
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
