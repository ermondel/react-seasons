import React from 'react';

const BtnsBlockItem = ({ value, disabled = false, onClick }) => (
  <button
    className={disabled ? 'btnsblock__item-active' : 'btnsblock__item-common'}
    disabled={disabled}
    onClick={onClick}
  >
    {value}
  </button>
);

export default BtnsBlockItem;
