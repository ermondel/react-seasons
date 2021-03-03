import React from 'react';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';

const PostcardDetails = () => (
  <div className='sidebar'>
    <div className='control'>
      <LanguageSelector />
      <ColorSelector />
    </div>
    <SidebarInfo list='React, React Context' />
  </div>
);

export default PostcardDetails;
