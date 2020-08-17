import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({
  options,
  selected,
  onSelectedChange,
  withSearch = false,
  defaultValue = null,
}) => {
  // states
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef();

  // closing the menu by clicking outside its boundaries
  useEffect(() => {
    const onBodyClick = (e) => !ref.current.contains(e.target) && setOpen(false);
    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  // default item
  if (!selected) {
    if (defaultValue) {
      selected = options.find((el) => el.value === defaultValue) || options[0];
    } else {
      selected = options[0];
    }
  }

  // render search
  const renderSearch = () => (
    <input
      type='text'
      className='dropdown-menu__search-input'
      placeholder='search...'
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      tabIndex={0}
    />
  );

  // render item
  const renderOption = (option) => {
    if (search && option.label.toLowerCase().indexOf(search.toLowerCase()) < 0) {
      return null;
    }

    const isActive = selected.value === option.value;

    const onOptionClick = () => {
      setOpen(false);
      setSearch('');
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

  // template
  return (
    <div className='dropdown-menu' ref={ref}>
      <div className='dropdown-menu__label'>Select option</div>
      <div className='dropdown-menu__element'>
        <button className='dropdown-menu__btn' onClick={() => setOpen(!open)}>
          {selected.label}
        </button>
        {open ? (
          <div className='dropdown-menu__container'>
            {withSearch && (
              <div className='dropdown-menu__search'>{renderSearch()}</div>
            )}
            <ul className='dropdown-menu__options'>{options.map(renderOption)}</ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMenu;
