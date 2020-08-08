import React, { useState } from 'react';
import data from '../sources/accordionSource';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <dl className='widgets-accordion'>
      {data.map((item) => {
        const isActive = item.id === activeIndex;

        const dtClass = isActive
          ? 'widgets-accordion__term--active'
          : 'widgets-accordion__term';
        const ddClass = isActive
          ? 'widgets-accordion__definition--active'
          : 'widgets-accordion__definition';
        const activate = () => setActiveIndex(isActive ? null : item.id);

        return (
          <React.Fragment key={item.id}>
            <dt
              onClick={activate}
              onKeyPress={activate}
              className={dtClass}
              tabIndex={0}
            >
              <div className='widgets-accordion__title'>{item.title}</div>
            </dt>
            <dd className={ddClass}>{item.content}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
};

export default Accordion;
