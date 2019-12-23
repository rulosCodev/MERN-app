import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';


function Modal (props) {
  const {onClose} = props;
  if(!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button
         className="Modal__close"
         onClick={onClose}
        >
          <i class="fas fa-times"></i>
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}
  


export default Modal;
