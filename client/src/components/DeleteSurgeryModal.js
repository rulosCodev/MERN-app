import React from 'react'
import '../assets/styles/components/DeleteSurgeryModal.scss';
import Modal from './Modal';


function DeleteSurgeryModal (props) {
 const { onDelete, onClose, surgeryId, onToggle, isOpen} = props;
 console.log(surgeryId)
 return(
   <Modal isOpen={isOpen} onClose={onClose}>
    <div>
      <h1>Estas seguro ?</h1>
      <p>Estas apunto de eliminar esta cirugía</p>

      <div className="btnContainer">
        <button className="btnDelete" onClick={()=> {
          onDelete(surgeryId)
          }}
         >Delete
         </button>
        <button 
          className="btnCancel"
          onClick={()=>{onToggle(surgeryId)}} 
        >Cancel
        </button>
      </div>
    </div>
   </Modal>
 )
}
  


export default DeleteSurgeryModal;
