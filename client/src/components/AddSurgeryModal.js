import React, {useState} from 'react'
import '../assets/styles/components/Modal.scss';
import { connect } from 'react-redux';
import { addSurgery } from '../../actions/surgeryActions';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="sex"
          id="sex"
          placeholder="Sexo" 
          onChange={handleChange}
        />
        <input 
          type="number"
          name="age"
          id="age"
          placeholder="Edad en numeros" 
          onChange={handleChange}
        />
        <input 
          type="text"
          name="diagnosis"
          id="diagnosis"
          placeholder="Diagnostico" 
          onChange={handleChange}
        />
        <input 
          type="text"
          name="surgery"
          id="surgery"
          placeholder="Procedimiento" 
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
   </Modal>
 )
}
  
const mapDispatchToProps = {
  addSurgery,
};
export default connect(null, mapDispatchToProps) (AddSurgeryModal);

