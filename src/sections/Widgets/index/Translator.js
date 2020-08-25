import React, { useState, useEffect } from 'react';
import { nodeapiserver } from '../../../lib/api';

const LoadingData = () => <p>loading data...</p>;
const ErrorMessage = () => <p>server error!</p>;
const TranslationResult = (props) => (props.value ? <p>{props.value}</p> : null);

const Translator = ({ word, language, source }) => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('default');

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await nodeapiserver.get('/request/googletranslate', {
          params: {
            q: word,
            source: source,
            target: language,
            format: 'text',
          },
        });

        setResult(response.data.data.translations[0].translatedText);
        setStatus('default');
      } catch (error) {
        setStatus('error');
      }
    };

    const timeoutID = setTimeout(() => {
      if (word && language) {
        getResult();
        setStatus('loading');
      }
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [word, language, source]);

  return (
    <div>
      {status === 'loading' && <LoadingData />}
      {status === 'error' && <ErrorMessage />}
      {status === 'default' && <TranslationResult value={result} />}
    </div>
  );
};

export default Translator;
