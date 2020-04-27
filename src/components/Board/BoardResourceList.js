import React from 'react';
import useResources from './useResources';
import BoardCommentList from './BoardCommentList';
import BoardTodosList from './BoardTodosList';
import LoadingBarMain from '../LoadingBarMain';
import Error5xx from '../Error5xx';

const BoardResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (resources.status === '1xx') {
    return <LoadingBarMain />;
  }

  if (resources.status === '5xx') {
    return <Error5xx />;
  }

  if (resources.status === '2xx' && resource === 'comments') {
    return <BoardCommentList list={resources.data} />;
  }

  if (resources.status === '2xx' && resource === 'todos') {
    return <BoardTodosList list={resources.data} />;
  }

  return null;
};

export default BoardResourceList;
