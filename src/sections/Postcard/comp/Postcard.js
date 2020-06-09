import React from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardDetails from './PostcardDetails';
import PostcardScene from './PostcardScene';

const Postcard = () => (
  <main className='main'>
    <ColorContext>
      <LanguageContext>
        <PostcardDetails />
        <PostcardScene />
      </LanguageContext>
    </ColorContext>
  </main>
);

export default Postcard;
