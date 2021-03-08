import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import leftPanelImg from '../assets/postcard-left-panel-img.jpg';

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
          <img src={leftPanelImg} alt='Island' />
        </div>

        <div className='postcard__panel-right'>
          <ColorContext.Consumer>
            {({ color }) => (
              <h3 className={`postcard__title color--${color}`}>
                <LanguageContext.Consumer>
                  {({ language }) => i18n_Hello[language]}
                </LanguageContext.Consumer>
              </h3>
            )}
          </ColorContext.Consumer>

          <p className='postcard__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='postcard__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PostcardContent;
