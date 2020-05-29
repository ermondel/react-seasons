import React from 'react';
import useResources from './useResources';
import PostList from './PostList';
import TodoList from './TodoList';
import Loading from '../../system/Loading/Loading';
import ErrorMessage from '../../system/ErrorMessage/ErrorMessage';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  let content = null;

  if (resources.status === '1xx') {
    content = <Loading type='main' />;
  }

  if (resources.status === '5xx') {
    content = <ErrorMessage type='remote' tip={true} />;
  }

  if (resources.status === '2xx' && resource === 'comments') {
    content = <PostList list={resources.data} />;
  }

  if (resources.status === '2xx' && resource === 'todos') {
    content = <TodoList list={resources.data} />;
  }

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2>{resource}</h2>

        {content}
      </div>
    </div>
  );
};

export default ResourceList;
