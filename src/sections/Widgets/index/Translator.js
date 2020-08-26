import React, { useState, useEffect } from 'react';
import { nodeapiserver } from '../../../lib/api';
import { SpinnerBig, ErrorRemote } from '../../../special/UtilImg/UtilImg';

const LoadingData = () => (
  <div className='translate-spinner'>
    <SpinnerBig />
  </div>
);

const ErrorMessage = () => (
  <div className='translate-error'>
    <ErrorRemote />
    <div>
      The remote server is not responding
      <br />
      Perhaps it is overloaded with requests
      <br />
      Please come back later
    </div>
  </div>
);

const TranslationResult = (props) => {
  return props.value ? <div className='translate-result'>{props.value}</div> : null;
};

const Translator = ({ word, language, source }) => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('default');
  const [query, setQuery] = useState(word);

  useEffect(() => {
    let timeoutID = null;

    if (word) {
      timeoutID = setTimeout(() => setQuery(word), 1000);
    } else {
      setResult('');
      setQuery('');
    }

    return () => clearTimeout(timeoutID);
  }, [word]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await nodeapiserver.get('/request/googletranslate', {
          params: {
            q: query,
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

    if (query && language && source) {
      getResult();
      setStatus('loading');
    }
  }, [query, language, source]);

  return (
    <div>
      {status === 'loading' && <LoadingData />}
      {status === 'error' && <ErrorMessage />}
      {status === 'default' && <TranslationResult value={result} />}
    </div>
  );
};

export default Translator;
