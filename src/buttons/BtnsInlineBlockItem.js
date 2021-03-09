import React from 'react';

const BtnsBlockItemInline = ({ value, disabled = false, onClick }) => (
  <button
    className={disabled ? 'btnsinlineblock__item-active' : 'btnsinlineblock__item-common'}
    disabled={disabled}
    onClick={onClick}
  >
    {value}
  </button>
);

export default BtnsBlockItemInline;
