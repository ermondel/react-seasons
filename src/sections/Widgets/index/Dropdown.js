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
          innerLabel={true}
          outerLabel={false}
          // defaultValue='windows-phone'
        />

        <DropdownMenu
          options={resolutionList}
          selected={resolution}
          onSelect={setResolution}
          label='Select resolution'
          innerLabel={true}
          outerLabel={false}
          // defaultValue='1280x720'
        />

        <DropdownMenu
          options={brandList}
          selected={brand}
          onSelect={setBrand}
          withSearch={true}
          label='Select brand'
          innerLabel={true}
          outerLabel={false}
          // defaultValue='meizu'
        />
      </div>

      <Smartphone
        os={os && os.value ? os.label : null}
        brand={brand && brand.value ? brand.label : null}
        resolution={resolution && resolution.value ? resolution.label : null}
      />
    </div>
  );
};

export default Dropdown;
