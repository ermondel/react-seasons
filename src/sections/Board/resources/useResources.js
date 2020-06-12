import { useState, useEffect } from 'react';
import api from '../../../jsonplaceholder';

const useResources = (resource) => {
  const [state, setState] = useState({ data: [], spinner: true, error: false });

  useEffect(() => {
    let resourceMounted = true;

    const fetchResource = async (resource) => {
      try {
        const response = await api.get(`/${resource}`);

        if (resourceMounted) {
          setState({ data: response.data, spinner: false, error: false });
        }
      } catch (error) {
        if (resourceMounted) {
          setState({ data: [], spinner: false, error: true });
        }
      }
    };

    fetchResource(resource);

    return () => {
      resourceMounted = false;

      setState({ data: [], spinner: true, error: false });
    };
  }, [resource]);

  return state;
};

export default useResources;
