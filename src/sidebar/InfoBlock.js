import React from 'react';

const InfoBlock = (props) => {
  let content = [];
  let buttons = null;

  // content
  for (let prop in props) {
    if (prop !== 'title' && prop !== 'btns') {
      content.push(
        <p className='infoblock__item' key={prop}>
          <span className='l'>{prop}</span> <span className='r'>{props[prop]}</span>
        </p>
      );
    }
  }

  // buttons
  buttons = props.btns && (
    <p className='infoblock__btns'>
      <button className='infoblock__btn-main' title='disabled!'>
        Play
      </button>
      <a href='/' className='infoblock__btn-link' title='disabled!'>
        download
      </a>
    </p>
  );

  return (
    <div className='infoblock'>
      <h3 className='infoblock__title'>{props.title}</h3>
      {content}
      {buttons}
    </div>
  );
};

export default InfoBlock;
