import { useState, useEffect } from 'react';
import api from '../../../jsonplaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState({ data: [], status: '1xx' });

  useEffect(() => {
    let resourceMounted = true;

    const fetchResource = async (resource) => {
      try {
        const response = await api.get(`/${resource}`);

        if (resourceMounted) {
          setResources({ data: response.data, status: '2xx' });
        }
      } catch (error) {
        if (resourceMounted) {
          setResources({ data: error, status: '5xx' });
        }
      }
    };

    fetchResource(resource);

    return () => (resourceMounted = false);
  }, [resource]);

  return resources;
};

export default useResources;
