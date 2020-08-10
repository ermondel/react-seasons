import React, { useState, useEffect } from 'react';
import { wikipedia } from '../../../api';
import { SpinnerBig, ErrorRemote } from '../../../util/UtilImg/UtilImg';
import WikipediaItem from './WikipediaItem';

const Wiki = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('default');

  useEffect(() => {
    const search = async () => {
      try {
        const response = await wikipedia.get('data.json');

        setResults(response.data.query.search);
        setStatus('default');
      } catch (error) {
        setStatus('error');
      }
    };

    const timeoutID = setTimeout(() => {
      if (term) {
        search();
        setStatus('loading');
      }
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [term]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div>
            <SpinnerBig />
          </div>
        );

      case 'error':
        return (
          <div>
            <ErrorRemote />
          </div>
        );

      default:
        return results.map((page) => {
          return <WikipediaItem page={page} key={page.pageid} />;
        });
    }
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Wiki;
