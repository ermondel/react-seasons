import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import languagesSource from '../sources/languagesSource';

const LanguageSelector = () => (
  <div className='control_btns'>
    <LanguageContext.Consumer>
      {(context) =>
        languagesSource.map((btn) => (
          <button
            className={
              btn.language === context.language
                ? 'sidebar__btn-common--active'
                : 'sidebar__btn-common'
            }
            onClick={() => context.onLanguageChange(btn.language)}
            disabled={btn.language === context.language}
            key={btn.id}
          >
            {btn.language}
          </button>
        ))
      }
    </LanguageContext.Consumer>
  </div>
);

export default LanguageSelector;
