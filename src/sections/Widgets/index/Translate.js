import React, { useState } from 'react';
import Translator from './Translator';

const Translate = () => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('nl');

  const MAX_WORD_LENGTH = 30;

  const onWordChange = (event) => {
    if (event.target.value.length <= MAX_WORD_LENGTH) setWord(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={word}
          onChange={onWordChange}
          placeholder='word in english'
        />
        <span>
          {word.length} / {MAX_WORD_LENGTH}
        </span>
      </div>

      <div>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='nl'>Dutch</option>
          <option value='es'>Spanish</option>
          <option value='fr'>French</option>
          <option value='uk'>Ukrainian</option>
          <option value='ru'>Russian</option>
        </select>
      </div>

      <div>
        <Translator word={word} language={language} source='en' />
      </div>
    </div>
  );
};

export default Translate;
