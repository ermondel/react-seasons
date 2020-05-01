import React, { Component } from 'react';
import ColorContext from '../../contexts/ColorContext';

class ColorSelector extends Component {
  static contextType = ColorContext;

  render() {
    return (
      <div className='control_btns'>
        <button
          className={'control__btn bg_blue'}
          onClick={() => this.context.onColorChange('blue')}
        >
          Blue
        </button>
        <button
          className={'control__btn bg_red'}
          onClick={() => this.context.onColorChange('red')}
        >
          Red
        </button>
        <button
          className={'control__btn bg_green'}
          onClick={() => this.context.onColorChange('green')}
        >
          Green
        </button>
        <button
          className={'control__btn bg_orange'}
          onClick={() => this.context.onColorChange('orange')}
        >
          Orange
        </button>
        <button
          className={'control__btn bg_violet'}
          onClick={() => this.context.onColorChange('violet')}
        >
          Violet
        </button>
        <button
          className={'control__btn bg_purple'}
          onClick={() => this.context.onColorChange('purple')}
        >
          Purple
        </button>
      </div>
    );
  }
}

export default ColorSelector;
