import React from 'react';
import Header from '../../../app/App/comp/Header';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardDetails from './PostcardDetails';
import PostcardScene from './PostcardScene';

const Postcard = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

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
