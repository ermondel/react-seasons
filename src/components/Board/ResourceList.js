import React from 'react';
import useResources from './useResources';
import CommentList from './CommentList';
import TodosList from './TodosList';
import LoadingBar from '../LoadingBar';
// import fixtureComments from '../../fixtures/comments';
// import fixtureTodos from '../../fixtures/todos';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (!resources) {
    return <LoadingBar />;
  }

  if (resource === 'comments') {
    // const resources = [...fixtureComments];
    return <CommentList list={resources} />;
  }

  if (resource === 'todos') {
    // const resources = [...fixtureTodos];
    return <TodosList list={resources} />;
  }

  return null;
};

export default ResourceList;
