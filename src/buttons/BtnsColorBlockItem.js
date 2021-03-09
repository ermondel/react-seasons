import React from 'react';

const BtnsColorBlockItem = ({ value, disabled = false, onClick, color = '' }) => {
  let className = disabled
    ? 'btnscolorblock__item-active'
    : 'btnscolorblock__item-common';

  if (color) {
    className += ' bg_' + color;
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {value}
    </button>
  );
};

export default BtnsColorBlockItem;
