import React from 'react';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import TechBlock from '@sidebar/TechBlock';

const PostcardDetails = () => (
  <div className='sidebar'>
    <div className='control'>
      <LanguageSelector />
      <ColorSelector />
    </div>
    <TechBlock list='React, React Context' />
  </div>
);

export default PostcardDetails;
