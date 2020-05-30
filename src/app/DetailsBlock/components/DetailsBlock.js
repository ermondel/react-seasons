import React from 'react';

const DetailsBlock = (props) => {
  let content = [];

  for (let prop in props) {
    if (prop !== 'title' && prop !== 'btns') {
      content.push(
        <p className='details__item' key={prop}>
          <span className='l'>{prop}</span>{' '}
          <span className='r'>{props[prop]}</span>
        </p>
      );
    }
  }

  let buttons = props.btns ? (
    <p className='details__btns'>
      <button className='details__btn_main' title='disabled!'>
        Play
      </button>
      <a href='/' className='details__btn_link' title='disabled!'>
        download
      </a>
    </p>
  ) : null;

  return (
    <div className='details'>
      <h3 className='details__title'>{props.title}</h3>
      {content}
      {buttons}
    </div>
  );
};

export default DetailsBlock;
