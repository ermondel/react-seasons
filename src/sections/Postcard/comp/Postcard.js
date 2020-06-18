import React from 'react';
import Header from '../../../app/App/comp/Header';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardDetails from './PostcardDetails';
import PostcardScene from './PostcardScene';

const Postcard = () => (
  <div className='app-main'>
    <Header path='/postcard' />
    <main className='main'>
      <ColorContext>
        <LanguageContext>
          <PostcardDetails />
          <PostcardScene />
        </LanguageContext>
      </ColorContext>
    </main>
  </div>
);

export default Postcard;
