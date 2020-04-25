import { useState, useEffect } from 'react';
import api from '../../apis/jsonplaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    try {
      const response = await api.get(`/${resource}`);
      setResources(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
