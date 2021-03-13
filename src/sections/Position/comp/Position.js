import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import useLocation from '../resources/useLocation';
import PositionSidebar from './PositionSidebar';
import PositionContent from './PositionContent';

const Position = () => {
  const [coords, errorMessage] = useLocation();

  return (
    <Fragment documentTitle='Position'>
      <div className='side-container'>
        <MainNavigation />
        <PositionSidebar geo={coords} />
      </div>

      <div className='content-container'>
        <PositionContent wait={!errorMessage && !coords} error={errorMessage} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Position;
