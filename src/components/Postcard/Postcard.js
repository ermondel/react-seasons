import React from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ColorContext } from '../../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import PostcardScene from './PostcardScene';
import AppAboutTech from '../AppAboutTech';

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
            <AppAboutTech list={['React', 'React Context']} />
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
