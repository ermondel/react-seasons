import React from 'react';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import AppAboutTech from '../AppAboutTech';

const PostcardDetails = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <div className='control'>
        <LanguageSelector />
        <ColorSelector />
      </div>
      <AppAboutTech list={['React', 'React Context']} />
    </div>
  </div>
);

export default PostcardDetails;
