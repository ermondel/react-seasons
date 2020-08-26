import React, { useState } from 'react';
import Translator from './Translator';
import DropdownMenu from './DropdownMenu';

const languageList = [
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Ukrainian',
    value: 'uk',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
];

const Translate = () => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState(null);

  const MAX_WORD_LENGTH = 30;

  const onWordChange = (event) => {
    if (event.target.value.length <= MAX_WORD_LENGTH) setWord(event.target.value);
  };

  return (
    <div>
      <div className='translate-query'>
        <div className='translate-query__input-wrapper'>
          <input
            type='text'
            value={word}
            onChange={onWordChange}
            placeholder='word in english'
            className='translate-query__input'
          />
        </div>
        <div className='translate-query__counter-wrapper'>
          <div className='translate-query__counter'>
            {word.length} / {MAX_WORD_LENGTH}
          </div>
        </div>
      </div>

      <div className='translate-languages'>
        <DropdownMenu
          options={languageList}
          selected={language}
          onSelect={setLanguage}
          label='Select language'
          innerLabel={true}
          outerLabel={false}
        />
      </div>

      <div className='translate-translator'>
        <Translator
          word={word}
          language={language ? language.value : ''}
          source='en'
        />
      </div>
    </div>
  );
};

export default Translate;
