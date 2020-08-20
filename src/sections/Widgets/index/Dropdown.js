import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { osList, resolutionList, brandList } from '../sources/dropdownSource';
import Smartphone from './Smartphone';

const Dropdown = () => {
  const [os, setOS] = useState(null);
  const [resolution, setResolution] = useState(null);
  const [brand, setBrand] = useState(null);

  return (
    <div>
      <div className='dropdown-menus'>
        <DropdownMenu
          options={osList}
          selected={os}
          onSelect={setOS}
          label='Select OS'
        />

        <DropdownMenu
          options={resolutionList}
          selected={resolution}
          onSelect={setResolution}
          defaultValue={'1280x720'}
          label='Select resolution'
        />

        <DropdownMenu
          options={brandList}
          selected={brand}
          onSelect={setBrand}
          withSearch={true}
          label='Select brand'
        />
      </div>

      <Smartphone
        os={os && os.label}
        brand={brand && brand.label}
        resolution={resolution && resolution.label}
      />
    </div>
  );
};

export default Dropdown;
