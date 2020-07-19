import React from 'react';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import SidebarInfo from '../../../util/SidebarInfo/SidebarInfo';

const PostcardDetails = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <div className='control'>
        <LanguageSelector />
        <ColorSelector />
      </div>
      <SidebarInfo list='React, React Context' />
    </div>
  </div>
);

export default PostcardDetails;
