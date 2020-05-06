import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import ColorContext from '../../contexts/ColorContext';
import postcardImg from '../../style/img/postcard-img.jpg';

class PostcardScene extends Component {
  i18n_Hello = {
    english: 'Hello',
    dutch: 'Hallo',
    spanish: 'Hola',
    french: 'Salut',
    ukrainian: 'Привiт',
    russian: 'Привет',
  };

  renderScene(color) {
    return (
      <div className='postcard__scene'>
        <div className='postcard__panel-left'>
          <img src={postcardImg} alt='Island' />
        </div>
        <div className={`postcard__panel-right bg_${color}`}>
          <h3 className='postcard__text'>
            <LanguageContext.Consumer>
              {({ language }) => this.i18n_Hello[language]}
            </LanguageContext.Consumer>
          </h3>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          <ColorContext.Consumer>
            {({ color }) => this.renderScene(color)}
          </ColorContext.Consumer>
        </div>
      </div>
    );
  }
}

export default PostcardScene;
