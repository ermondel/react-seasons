import React from 'react';
import useResources from './useResources';
import CommentList from './CommentList';
import TodosList from './TodosList';
import LoadingBarMain from '../LoadingBarMain';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (!resources) {
    return <LoadingBarMain />;
  }

  if (resource === 'comments') {
    return <CommentList list={resources} />;
  }

  if (resource === 'todos') {
    return <TodosList list={resources} />;
  }

  return null;
};

export default ResourceList;
