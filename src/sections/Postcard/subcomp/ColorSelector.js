import React from 'react';
import ColorContext from '../contexts/ColorContext';
import colorsSource from '../sources/colorsSource';
import BtnsColorBlock from '@sidebar/BtnsColorBlock';
import BtnsColorBlockItem from '@buttons/BtnsColorBlockItem';

const ColorSelector = () => (
  <BtnsColorBlock>
    <ColorContext.Consumer>
      {(context) =>
        colorsSource.map((el) => (
          <BtnsColorBlockItem
            value={el.color}
            disabled={el.color === context.color}
            onClick={() => context.onColorChange(el.color)}
            color={el.color}
            key={el.id}
          />
        ))
      }
    </ColorContext.Consumer>
  </BtnsColorBlock>
);

export default ColorSelector;
