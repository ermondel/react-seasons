import React from 'react';
import postcardImg from '../../style/img/postcard-img.jpg';

const Postcard = () => (
  <main className='main'>
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <div className='control'>
          <div className='control_btns'>
            <button className={'control__btn'}>English</button>
            <button className={'control__btn'}>Dutch</button>
            <button className={'control__btn'}>Spanish</button>
            <button className={'control__btn'}>French</button>
            <button className={'control__btn'}>Ukrainian</button>
            <button className={'control__btn'}>Russian</button>
          </div>
          <div className='control_btns'>
            <button className={'control__btn bg_blue'}>Blue</button>
            <button className={'control__btn bg_red'}>Red</button>
            <button className={'control__btn bg_green'}>Green</button>
            <button className={'control__btn bg_orange'}>Orange</button>
            <button className={'control__btn bg_violet'}>Violet</button>
            <button className={'control__btn bg_purple'}>Purple</button>
            <button className={'control__btn bg_brown'}>Brown</button>
            <button className={'control__btn bg_yellow'}>Brown</button>
          </div>
        </div>
      </div>
    </div>
    <div className='content'>
      <div className='content-wrap'>
        <div className='postcard__scene'>
          <div className='postcard__panel-left'>
            <img src={postcardImg} alt='Island' />
          </div>
          <div className='postcard__panel-right'>
            <h3 className='postcard__text'>Hello</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Postcard;
