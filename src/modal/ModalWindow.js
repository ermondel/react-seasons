import React from 'react';
import ReactDOM from 'react-dom';
import { MODAL_CLOSE, MODAL_OPEN } from '../lib/types';

export const modalOpen = () => ({ type: MODAL_OPEN });

export const modalClose = () => ({ type: MODAL_CLOSE });

export const ModalWindow = ({ visible, onWindowClose, children, styleType }) => {
  const stopPropagation = (event) => event.stopPropagation();

  const button = (
    <button
      className='modal__btn-close'
      onClick={onWindowClose}
      title='Close window'
    >
      <span>Close window</span>
    </button>
  );

  let modalClassName = 'modal';
  if (styleType) modalClassName += ` modal--${styleType}`;
  if (!visible) modalClassName += ` modal--hide`;

  const content = (
    <div className={modalClassName}>
      <div className='modal__background'></div>
      <div className='modal__container' onClick={onWindowClose}>
        <div className='modal__content' onClick={stopPropagation}>
          <div className='modal__btns'>
            <div className='modal__close'>{button}</div>
          </div>
          <div className='modal__body'>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal'));
};
