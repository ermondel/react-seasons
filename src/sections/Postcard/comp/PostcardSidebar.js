import React from 'react';
import LanguageSelector from '../subcomp/LanguageSelector';
import ColorSelector from '../subcomp/ColorSelector';
import TechBlock from '@sidebar/TechBlock';

const PostcardSidebar = () => (
  <div className='sidebar'>
    <LanguageSelector />
    <ColorSelector />
    <TechBlock list='React, React Context' />
  </div>
);

export default PostcardSidebar;
