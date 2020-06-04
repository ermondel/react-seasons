import React from 'react';
import ReactDOM from 'react-dom';

const ModalWindow = ({ visible, body, onWindowClose }) => {
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
            <button onClick={onWindowClose}>Close window</button>
          </div>
          <div className='modal__body'>{body}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

export default ModalWindow;
