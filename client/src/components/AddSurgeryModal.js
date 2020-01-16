import React, {useState} from 'react'
import '../assets/styles/components/AddSurgeryModal.scss';
import { connect } from 'react-redux';
import { addSurgery } from '../actions/surgeryActions';

import Modal from './Modal';



function AddSurgeryModal (props) {
const[state, setState]= useState({
  sex: '',
  age:'',
  diagnosis: '',
  surgery: ''
});

const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  })
}
const resetForm = () => {
  setState({
    ...state,
    sex: '',
    age: '',
    diagnosis: '',
    surgery: ''
  })
}
const handleSubmit = (event) => {
  event.preventDefault();

  const newSurgery = {
    sex: state.sex,
    age: state.age,
    diagnosis: state.diagnosis,
    surgery: state.surgery
  }

  //add item via addItem action
  props.addSurgery(newSurgery);
  // Close modal
  resetForm()
  props.onClose();
}


 const { onDelete, onClose, surgeryId, onToggle, isOpen} = props;
 return(
   <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="addModal">
      <form onSubmit={handleSubmit}>
        <h2>Crear nueva cirugía</h2>
        <input 
          className="formInput"
          type="text"
          name="sex"
          id="sex"
          placeholder="Sexo" 
          onChange={handleChange}
        />
        <input 
          className="formInput"

          type="number"
          name="age"
          id="age"
          placeholder="Edad en numeros" 
          onChange={handleChange}
        />
        <textarea 
          className="formInput"

          name="diagnosis"
          id="diagnosis" 
          cols="30" 
          rows="5" 
          placeholder="Diagnostico"
          onChange={handleChange}>

          </textarea>
        {/* <input 
          type="text"
          name="diagnosis"
          id="diagnosis"
          placeholder="Diagnostico" 
          onChange={handleChange}
        /> */}
        <textarea 
          className="formInput"

          name="surgery"
          id="surgery" 
          cols="30" 
          rows="5" 
          placeholder="Procedimiento" 

          onChange={handleChange}>

          </textarea>
        
        <button id="btnSubmit" type="submit">Crear</button>
      </form>
    </div>
   </Modal>
 )
}
  
const mapDispatchToProps = {
  addSurgery,
};
export default connect(null, mapDispatchToProps) (AddSurgeryModal);

