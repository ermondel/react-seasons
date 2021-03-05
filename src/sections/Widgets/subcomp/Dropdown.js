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
          label='Select OS'
          options={osList}
          selected={os}
          onSelect={setOS}
          outerLabel={false}
          hasTitle={true}
          clickableTitle={false}
          // defaultValue='windows-phone'
        />

        <DropdownMenu
          label='Select resolution'
          options={resolutionList}
          selected={resolution}
          onSelect={setResolution}
          outerLabel={false}
          hasTitle={true}
          clickableTitle={false}
          // defaultValue='1280x720'
        />

        <DropdownMenu
          label='Select brand'
          options={brandList}
          selected={brand}
          onSelect={setBrand}
          withSearch={true}
          outerLabel={false}
          hasTitle={true}
          clickableTitle={false}
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
