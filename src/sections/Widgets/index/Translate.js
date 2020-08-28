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
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Greek',
    value: 'el',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Polish',
    value: 'pl',
  },
];

const WordInput = ({ word, maxLength, setWord }) => {
  const options = {
    type: 'text',
    value: word,
    placeholder: 'Word in English',
    className: 'translate-word__input',
  };

  const onWordChange = (event) => {
    if (event.target.value.length <= maxLength) setWord(event.target.value);
  };

  return (
    <div className='translate-word'>
      <div className='translate-word__input-wrapper'>
        <input {...options} onChange={onWordChange} />
      </div>

      <div className='translate-word__counter-wrapper'>
        <div className='translate-word__counter'>
          {word.length} / {maxLength}
        </div>
      </div>
    </div>
  );
};

const Translate = () => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState(null);

  return (
    <div className='translation-widget'>
      <WordInput word={word} maxLength={30} setWord={setWord} />

      <DropdownMenu
        options={languageList}
        selected={language}
        onSelect={setLanguage}
        label='Select language'
        innerLabel={true}
        outerLabel={false}
        withSearch={true}
      />

      <Translator
        word={word}
        language={language ? language.value : ''}
        source='en'
      />
    </div>
  );
};

export default Translate;
