import React from 'react';
import useResources from './useResources';
import PostList from './PostList';
import TodoList from './TodoList';
import Loading from '../Loading';
import Error5xx from '../Error5xx';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  let content = null;

  if (resources.status === '1xx') {
    content = <Loading type='main' />;
  }

  if (resources.status === '5xx') {
    content = <Error5xx />;
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
