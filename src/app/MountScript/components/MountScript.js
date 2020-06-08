import { useEffect } from 'react';
import api from '../../../nodeapiserver';

const MountScript = () => {
  useEffect(() => {
    const el = document.createElement('script');

    const mount = async () => {
      try {
        const response = await api.get('/opt/axqf9i');

        el.src = `https://maps.googleapis.com/maps/api/js?key=${response.data.opt}`;
        el.async = true;
        document.body.appendChild(el);
      } catch (error) {
        console.log(error);
      }
    };

    mount();

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return null;
};

export default MountScript;
