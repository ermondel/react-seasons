import React, { Component } from 'react';
import ColorContext from '../../contexts/ColorContext';
import Button from '../Button';

class ColorSelector extends Component {
  static contextType = ColorContext;

  render() {
    return (
      <div className='control_btns'>
        <Button
          value='blue'
          classNameCommon='btn-color bg_blue'
          classNameActive='btn-color_active bg_blue'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('blue')}
        />
        <Button
          value='red'
          classNameCommon='btn-color bg_red'
          classNameActive='btn-color_active bg_red'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('red')}
        />
        <Button
          value='green'
          classNameCommon='btn-color bg_green'
          classNameActive='btn-color_active bg_green'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('green')}
        />
        <Button
          value='orange'
          classNameCommon='btn-color bg_orange'
          classNameActive='btn-color_active bg_orange'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('orange')}
        />
        <Button
          value='violet'
          classNameCommon='btn-color bg_violet'
          classNameActive='btn-color_active bg_violet'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('violet')}
        />
        <Button
          value='purple'
          classNameCommon='btn-color bg_purple'
          classNameActive='btn-color_active bg_purple'
          valueActive={this.context.color}
          onClick={() => this.context.onColorChange('purple')}
        />
      </div>
    );
  }
}

export default ColorSelector;
