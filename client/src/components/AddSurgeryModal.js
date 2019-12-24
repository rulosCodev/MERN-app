import React from 'react'
import '../assets/styles/components/Modal.scss';
import Modal from './Modal';


function AddSurgeryModal (props) {
 const { onDelete, onClose, surgeryId, onToggle, isOpen} = props;
 return(
   <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div>
      <form>
        <input type="text" placeholder="Sexo" />
        <button>submit</button>
      </form>
    </div>
   </Modal>
 )
}
  


export default AddSurgeryModal;
