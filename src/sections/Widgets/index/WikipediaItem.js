import React from 'react';

const WikipediaItem = ({ page }) => (
  <div>
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
);

export default WikipediaItem;
