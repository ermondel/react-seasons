import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wiki = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get('http://localhost:5000/data.json');
      setResults(response.data.query.search);
    };

    const timeoutID = setTimeout(() => {
      if (term) search();
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>

      <div>
        {results.map((page) => (
          <div key={page.pageid}>
            <h4>
              <a
                href={`https://en.wikipedia.org?curid=${page.pageid}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {page.title}
              </a>
            </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: page.snippet.replace(/(<([^>]+)>)/gi, ''),
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wiki;
