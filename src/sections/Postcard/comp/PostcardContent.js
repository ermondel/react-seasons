import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import postcardImg from '../assets/postcard-img.jpg';

const i18n_Hello = {
  english: 'Hello',
  dutch: 'Hallo',
  spanish: 'Hola',
  french: 'Salut',
  ukrainian: 'Привiт',
  russian: 'Привет',
};

const PostcardContent = () => {
  return (
    <main className='main'>
      <div className='postcard__scene'>
        <div className='postcard__panel-left'>
          <img src={postcardImg} alt='Island' />
        </div>

        <ColorContext.Consumer>
          {({ color }) => (
            <div className={`postcard__panel-right bg_${color}`}>
              <h3 className='postcard__text'>
                <LanguageContext.Consumer>
                  {({ language }) => i18n_Hello[language]}
                </LanguageContext.Consumer>
              </h3>
            </div>
          )}
        </ColorContext.Consumer>
      </div>
    </main>
  );
};

export default PostcardContent;
