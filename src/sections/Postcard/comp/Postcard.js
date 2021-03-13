import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardSidebar from './PostcardSidebar';
import PostcardContent from './PostcardContent';

const Postcard = () => (
  <Fragment documentTitle='Postcard'>
    <ColorContext>
      <LanguageContext>
        <div className='side-container'>
          <MainNavigation />
          <PostcardSidebar />
        </div>

        <div className='content-container'>
          <PostcardContent />
          <Footer />
        </div>
      </LanguageContext>
    </ColorContext>
  </Fragment>
);

export default Postcard;
