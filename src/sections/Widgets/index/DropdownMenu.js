import React, { useState, useEffect, useRef } from 'react';
import { includes } from '../../../lib/str';

const SearchForm = ({ query, onQueryChange }) => (
  <div className='dropdown-menu__search'>
    <input
      type='text'
      className='dropdown-menu__search-input'
      placeholder='search...'
      onChange={onQueryChange}
      value={query}
      tabIndex={0}
    />
  </div>
);

const MenuItem = ({ item, query, active, onItemClick }) => {
  if (query && !includes(item.label, query)) return null;

  const isActive = active.value === item.value;

  return (
    <li
      className={'dropdown-menu__option' + (isActive ? '--active' : '')}
      onClick={onItemClick}
      onKeyPress={onItemClick}
      tabIndex={0}
    >
      {item.label}
    </li>
  );
};

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef();

  // closing the menu by clicking outside its boundaries
  useEffect(() => {
    const onBodyClick = (e) => !ref.current.contains(e.target) && setOpen(false);
    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  const { options, selected, onSelect, withSearch, defaultValue } = props;

  let activeOption;

  if (options && options.length) {
    if (selected) {
      activeOption = selected;
    } else {
      if (defaultValue) {
        activeOption = options.find((el) => el.value === defaultValue) || options[0];
      } else {
        activeOption = options[0];
      }
    }
  }

  return (
    <div className='dropdown-menu' ref={ref}>
      <div className='dropdown-menu__label'>Select option</div>
      <div className='dropdown-menu__element'>
        {activeOption ? (
          <button className='dropdown-menu__btn' onClick={() => setOpen(!open)}>
            {activeOption.label}
          </button>
        ) : (
          <button className='dropdown-menu__btn'>[EMPTY]</button>
        )}

        {open && (
          <div className='dropdown-menu__container'>
            {withSearch && (
              <SearchForm
                query={search}
                onQueryChange={(e) => setSearch(e.target.value)}
              />
            )}
            <ul className='dropdown-menu__options'>
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  item={option}
                  query={search}
                  active={activeOption}
                  onItemClick={() => {
                    setOpen(false);
                    setSearch('');
                    onSelect(option);
                  }}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
