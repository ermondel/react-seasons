import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardDetails from './PostcardDetails';
import PostcardScene from './PostcardScene';

const Postcard = () => (
  <React.Fragment>
    <ColorContext>
      <LanguageContext>
        <div className='side-container'>
          <MainNavigation />
          <PostcardDetails />
        </div>

        <div className='content-container'>
          <PostcardScene />
          <Footer />
        </div>
      </LanguageContext>
    </ColorContext>
  </React.Fragment>
);

export default Postcard;
