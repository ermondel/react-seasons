import React from 'react';

const Fragment = (props) => {
  const title = 'React Platform';

  document.title = props.documentTitle ? `${title} | ${props.documentTitle}` : title;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Fragment;
