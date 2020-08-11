import React, { useState, useEffect } from 'react';
import { wikipedia } from '../../../lib/api';
import { SpinnerBig, ErrorRemote } from '../../../special/UtilImg/UtilImg';
import WikipediaItem from './WikipediaItem';

const Wiki = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('default');

  useEffect(() => {
    const search = async () => {
      try {
        const response = await wikipedia.get('/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          },
        });

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
          <div className='wiki-spinner'>
            <SpinnerBig />
          </div>
        );

      case 'error':
        return (
          <div className='wiki-error'>
            <ErrorRemote />
            <div>
              <p>The remote server is not responding</p>
              <p>Perhaps it is overloaded with requests</p>
              <p>Please come back later</p>
            </div>
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
      <form
        className='wiki-search'
        onSubmit={(event) => {
          event.preventDefault();
          setTerm(event.target.elements.search.value);
        }}
      >
        <input
          type='text'
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className='wiki-search__input'
          placeholder='Search Wikipedia'
          name='search'
        />
      </form>

      <div className='wiki-articles'>{renderContent()}</div>
    </div>
  );
};

export default Wiki;
