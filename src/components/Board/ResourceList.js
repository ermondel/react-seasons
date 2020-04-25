import React from 'react';
import useResources from './useResources';
import LoadingBar from '../LoadingBar';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (!resources) {
    return <LoadingBar />;
  }

  return (
    <ul>
      {resources.map((el) => (
        <li key={el.id}>{el.name || el.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
