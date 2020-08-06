import React from 'react';
import Header from '../../../main/Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Widgets = (props) => {
  const pathParts = props.location ? props.location.pathname.split('/') : [];
  const pathName = pathParts ? '/' + pathParts[1] : '';

  return (
    <div className='app-main'>
      <Header path={pathName} />

      <main className='main'>
        <Sidebar />
        <Content />
      </main>
    </div>
  );
};

export default Widgets;
