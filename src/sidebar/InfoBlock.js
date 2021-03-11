import React from 'react';

const InfoBlock = ({ title, data, buttons = null, showControlBtns = false, onClose }) => {
  let itemList = [];
  for (let key in data) {
    itemList.push(
      <p className='infoblock__item' key={key}>
        <span className='l'>{key}</span> <span className='r'>{data[key]}</span>
      </p>
    );
  }

  const controlBtns = showControlBtns ? (
    <div className='infoblock__control'>
      <button onClick={onClose} className='infoblock__btn-close' title='Close block'>
        Close
      </button>
    </div>
  ) : null;

  return (
    <div className='infoblock'>
      <h3 className='infoblock__title'>{title}</h3>
      {itemList && <div className='infoblock__items'>{itemList}</div>}
      {buttons}
      {controlBtns}
    </div>
  );
};

export default InfoBlock;
