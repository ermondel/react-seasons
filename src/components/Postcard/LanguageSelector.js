import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import Button from '../Button';
import languagesSource from './languagesSource';

const LanguageSelector = () => (
  <div className='control_btns'>
    <LanguageContext.Consumer>
      {(context) =>
        languagesSource.map((el) => (
          <Button
            value={el.language}
            classNameCommon='btn-common'
            classNameActive='btn-common_active'
            valueActive={context.language}
            onClick={() => context.onLanguageChange(el.language)}
            key={el.id}
          />
        ))
      }
    </LanguageContext.Consumer>
  </div>
);

export default LanguageSelector;
