import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  if (!selected) selected = options[0];

  const renderOption = (option) => {
    return selected.value === option.value ? (
      <li key={option.value} className='dropdown-menu__option--active'>
        {option.label}
      </li>
    ) : (
      <li
        key={option.value}
        className='dropdown-menu__option'
        onClick={() => {
          setOpen(false);
          onSelectedChange(option);
        }}
      >
        {option.label}
      </li>
    );
  };

  return (
    <div className='dropdown-menu' ref={ref}>
      <div className='dropdown-menu__label'>Select option</div>
      <div className='dropdown-menu__selected' onClick={() => setOpen(!open)}>
        {selected.label}
      </div>
      {open ? (
        <ul className='dropdown-menu__options'>{options.map(renderOption)}</ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
