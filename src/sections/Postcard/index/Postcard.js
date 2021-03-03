import React from 'react';
import Header from '../../../main/Header';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardDetails from './PostcardDetails';
import PostcardScene from './PostcardScene';
import Footer from '../../../main/Footer';

const Postcard = () => (
  <React.Fragment>
    <ColorContext>
      <LanguageContext>
        <div className='side-container'>
          <Header />
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
