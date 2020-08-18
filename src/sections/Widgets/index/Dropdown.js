import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import list from '../sources/dropdownSource';

const Dropdown = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <DropdownMenu
        options={list}
        selected={selected}
        onSelect={setSelected}
        withSearch={true}
        defaultValue={'ex5'}
      />
    </div>
  );
};

export default Dropdown;
