import { useState, useEffect } from 'react';
import api from '../../apis/jsonplaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState({ data: [], status: '1xx' });

  const fetchResource = async (resource) => {
    try {
      const response = await api.get(`/${resource}`);

      setResources({ data: response.data, status: '2xx' });
    } catch (error) {
      setResources({ data: error, status: '5xx' });
    }
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
