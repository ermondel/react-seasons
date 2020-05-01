import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className='control_btns'>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('english')}
        >
          English
        </button>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('dutch')}
        >
          Dutch
        </button>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('spanish')}
        >
          Spanish
        </button>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('french')}
        >
          French
        </button>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('ukrainian')}
        >
          Ukrainian
        </button>
        <button
          className={'control__btn'}
          onClick={() => this.context.onLanguageChange('russian')}
        >
          Russian
        </button>
      </div>
    );
  }
}

export default LanguageSelector;
