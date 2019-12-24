import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';
import Modal from './Modal';


function DeleteSurgeryModal (props) {
 const { onDelete, onClose, surgeryId, onToggle, isOpen} = props;
 return(
   <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div>
      <h1>Estas seguro ?</h1>
      <p>Estas apunto de eliminar esta cirugía</p>

      <div>
        <button onClick={()=> {
          onDelete(surgeryId)
          }}
          className="btn btn-danger"
         >Delete
         </button>
        <button 
          onClick={()=>{onToggle(surgeryId)}} 
          className="btn btn-primary"
        >Cancel
        </button>
      </div>
    </div>
   </Modal>
 )
}
  


export default DeleteSurgeryModal;
