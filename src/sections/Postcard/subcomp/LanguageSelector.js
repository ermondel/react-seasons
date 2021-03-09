import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import languagesSource from '../sources/languagesSource';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';

const LanguageSelector = () => (
  <BtnsBlock>
    <LanguageContext.Consumer>
      {(context) =>
        languagesSource.map((btn) => (
          <BtnsBlockItem
            value={btn.language}
            disabled={btn.language === context.language}
            onClick={() => context.onLanguageChange(btn.language)}
            key={btn.id}
          />
        ))
      }
    </LanguageContext.Consumer>
  </BtnsBlock>
);

export default LanguageSelector;
