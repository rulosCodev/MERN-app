import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';
import Modal from './Modal';


function DeleteSurgeryModal (props) {
 return(
   <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div>
      <h1>Estas seguro ?</h1>
      <p>Estas apunto de eliminar esta cirugía</p>

      <div>
        <button onClick={props.onDelete} className="btn btn-danger">Delete</button>
        <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
      </div>
    </div>
   </Modal>
 )
}
  


export default DeleteSurgeryModal;
