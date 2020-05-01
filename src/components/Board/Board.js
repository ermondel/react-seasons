import React, { useState } from 'react';
import AppAboutTech from '../AppAboutTech';
import BoardUserList from './BoardUserList';
import BoardResourceList from './BoardResourceList';
import Button from '../Button';

const Board = () => {
  const [resource, setResource] = useState('comments');

  return (
    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>
          <div className='control'>
            <div className='control_btns'>
              <Button
                value={'comments'}
                classNameCommon='btn-common'
                classNameActive='btn-common_active'
                valueActive={resource}
                onClick={() => setResource('comments')}
              />
              <Button
                value={'todos'}
                classNameCommon='btn-common'
                classNameActive='btn-common_active'
                valueActive={resource}
                onClick={() => setResource('todos')}
              />
            </div>
            <BoardUserList />
          </div>
          <AppAboutTech list={['React', 'React Hooks', 'JSONPlaceholder']} />
        </div>
      </div>
      <div className='content'>
        <div className='content-wrap'>
          <h2>{resource}</h2>
          <BoardResourceList resource={resource} />
        </div>
      </div>
    </main>
  );
};

export default Board;
