import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => !ref.current.contains(e.target) && setOpen(false);

    document.body.addEventListener('click', onBodyClick);

    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  if (!selected) selected = options[0];

  const renderOption = (option) => {
    const isActive = selected.value === option.value;

    const onOptionClick = () => {
      setOpen(false);
      if (!isActive) onSelectedChange(option);
    };

    return (
      <li
        key={option.value}
        className={'dropdown-menu__option' + (isActive ? '--active' : '')}
        onClick={onOptionClick}
        onKeyPress={onOptionClick}
        tabIndex={0}
      >
        {option.label}
      </li>
    );
  };

  return (
    <div className='dropdown-menu' ref={ref}>
      <div className='dropdown-menu__label'>Select option</div>
      <div className='dropdown-menu__element'>
        <button className='dropdown-menu__btn' onClick={() => setOpen(!open)}>
          {selected.label}
        </button>
        {open ? (
          <ul className='dropdown-menu__options'>{options.map(renderOption)}</ul>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMenu;
