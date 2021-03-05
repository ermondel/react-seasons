import React from 'react';
import LanguageSelector from '../subcomp/LanguageSelector';
import ColorSelector from '../subcomp/ColorSelector';
import TechBlock from '@sidebar/TechBlock';

const PostcardSidebar = () => (
  <div className='sidebar'>
    <div className='control'>
      <LanguageSelector />
      <ColorSelector />
    </div>
    <TechBlock list='React, React Context' />
  </div>
);

export default PostcardSidebar;
