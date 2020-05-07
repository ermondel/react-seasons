import React from 'react';
import ColorContext from '../../contexts/ColorContext';
import colorsSource from './colorsSource';

const ColorSelector = () => (
  <div className='control_btns'>
    <ColorContext.Consumer>
      {(context) =>
        colorsSource.map((el) => (
          <button
            className={
              el.color === context.color
                ? `btn-color_active bg_${el.color}`
                : `btn-color bg_${el.color}`
            }
            onClick={() => context.onColorChange(el.color)}
            disabled={el.color === context.color}
            key={el.id}
          >
            {el.color}
          </button>
        ))
      }
    </ColorContext.Consumer>
  </div>
);

export default ColorSelector;
