import React, { useState, useEffect, useRef } from 'react';
import { includes } from '../../../lib/str';

const SearchForm = ({ enabled, query, onQueryChange }) => {
  return enabled ? (
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
  ) : null;
};

const MenuItem = ({ item, query, activeValue, onItemClick }) => {
  if (query && !includes(item.label, query)) return null;

  const isActive = activeValue === item.value;

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

const MenuHeader = ({ value, onHeaderClick }) => {
  return value ? (
    <button className='dropdown-menu__btn' onClick={onHeaderClick}>
      {value}
    </button>
  ) : (
    <button className='dropdown-menu__btn'>[EMPTY]</button>
  );
};

const OuterMenuLabel = ({ label, enabled }) => {
  return enabled ? (
    <div className='dropdown-menu__outer-label'>{label || 'Select option'}</div>
  ) : null;
};

const InnerMenuLabel = ({ label, enabled, activeValue, onLabelClick }) => {
  const isActive = activeValue === null;

  return enabled ? (
    <div
      className={'dropdown-menu__inner-label' + (isActive ? '--active' : '')}
      onClick={onLabelClick}
    >
      {label || 'Select option'}
    </div>
  ) : null;
};

const MenuDescription = ({ value }) => {
  return value ? <div className='dropdown-menu__description'>{value}</div> : null;
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

  const defaultOption = {
    label: props.label ? props.label : 'Select option',
    value: null,
  };

  const getActiveOption = () => {
    if (!props.options || !props.options.length) return { label: null, value: null };
    if (props.selected) return props.selected;
    if (props.defaultValue) {
      return (
        props.options.find((el) => el.value === props.defaultValue) ||
        props.options[0]
      );
    }
    if (props.innerLabel) return defaultOption;
    return props.options[0];
  };

  const activeOption = getActiveOption();

  return (
    <div className='dropdown-menu' ref={ref}>
      <OuterMenuLabel label={props.label} enabled={props.outerLabel} />

      <div className='dropdown-menu__element'>
        <MenuHeader value={activeOption.label} onHeaderClick={() => setOpen(true)} />

        {open && (
          <div className='dropdown-menu__container'>
            <InnerMenuLabel
              label={props.label}
              enabled={props.innerLabel}
              activeValue={activeOption.value}
              onLabelClick={() => {
                setOpen(false);
                setSearch('');
                props.onSelect(defaultOption);
              }}
            />

            <SearchForm
              enabled={props.withSearch}
              query={search}
              onQueryChange={(e) => setSearch(e.target.value)}
            />

            <ul className='dropdown-menu__options'>
              {props.options.map((option) => (
                <MenuItem
                  key={option.value}
                  item={option}
                  query={search}
                  activeValue={activeOption.value}
                  onItemClick={() => {
                    setOpen(false);
                    setSearch('');
                    props.onSelect(option);
                  }}
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <MenuDescription value={props.description} />
    </div>
  );
};

export default DropdownMenu;
