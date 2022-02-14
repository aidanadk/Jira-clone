import React from 'react';
import './style.scss';

const Modal = ({ children, close }) => {
  return (
    <div onClick={() => close(false)} className='modal'>
      <div onClick={(e) => e.stopPropagation()} className='modal__wrapper'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
