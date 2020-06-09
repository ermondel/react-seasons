import React from 'react';
import ReactDOM from 'react-dom';

const ModalWindow = ({ visible, onWindowClose, children }) => {
  let content = (
    <div className={`modal ${!visible ? 'modal--hide' : ''}`}>
      <div className='modal__background'></div>
      <div className='modal__container' onClick={onWindowClose}>
        <div
          className='modal__content'
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className='modal__btns'>
            <div className='modal__close'>
              <button
                className='modal__btn-close'
                onClick={onWindowClose}
                title='Close window'
              >
                <span>Close window</span>
              </button>
            </div>
          </div>
          <div className='modal__body'>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

export default ModalWindow;
