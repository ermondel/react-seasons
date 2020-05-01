import React from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ColorContext } from '../../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import PostcardScene from './PostcardScene';

const Postcard = () => (
  <ColorContext>
    <LanguageContext>
      <main className='main'>
        <div className='sidebar'>
          <div className='sidebar-wrap'>
            <div className='control'>
              <LanguageSelector />
              <ColorSelector />
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='content-wrap'>
            <PostcardScene />
          </div>
        </div>
      </main>
    </LanguageContext>
  </ColorContext>
);

export default Postcard;
