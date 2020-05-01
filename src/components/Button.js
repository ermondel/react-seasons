import React from 'react';

const Button = ({
  value,
  classNameCommon,
  classNameActive,
  valueActive,
  onClick,
}) => (
  <button
    className={value === valueActive ? classNameActive : classNameCommon}
    onClick={onClick}
    disabled={value === valueActive}
  >
    {value}
  </button>
);

export default Button;
