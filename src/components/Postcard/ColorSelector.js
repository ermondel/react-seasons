import React from 'react';
import ColorContext from '../../contexts/ColorContext';
import Button from '../Button';
import colorsSource from './colorsSource';

const ColorSelector = () => (
  <div className='control_btns'>
    <ColorContext.Consumer>
      {(context) =>
        colorsSource.map((el) => (
          <Button
            value={el.color}
            classNameCommon={`btn-color bg_${el.color}`}
            classNameActive={`btn-color_active bg_${el.color}`}
            valueActive={context.color}
            onClick={() => context.onColorChange(el.color)}
            key={el.id}
          />
        ))
      }
    </ColorContext.Consumer>
  </div>
);

export default ColorSelector;
