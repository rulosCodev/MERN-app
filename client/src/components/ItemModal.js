import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSurgery} from '../../actions/surgeryActions';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const ItemModal = (props) => {
  const[state, setState] = useState({
    modal: false,
    sex:'',
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
  toggle();
}

const toggle = () => {
  setState({
    ...state,
    modal: !state.modal
  })
}

  return(
    <div>
    <Button 
    color="dark"
    style={{marginBottom: '2rem'}}
    onClick={toggle}
    >Add item</Button>

    <Modal
      isOpen={state.modal}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>Agregar cirugía</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="sex">Sexo</Label>
            <Input 
              type="text" 
              name="sex"
              id="sex"
              placeholder="sexo del paciente"
              onChange={handleChange}
            />
            <Label for="age">Edad</Label>
            <Input 
              type="number" 
              name="age"
              id="age"
              placeholder="numero de años"
              onChange={handleChange}
            />
            <Label for="diagnosis">Diagnostico</Label>
            <Input 
              type="text" 
              name="diagnosis"
              id="diagnosis"
              placeholder="diagnostico del paciente"
              onChange={handleChange}
            />
            <Label for="surgery">Procedimiento</Label>
            <Input 
              type="text" 
              name="surgery"
              id="surgery"
              placeholder="procedimiento a realizar"
              onChange={handleChange}
            />
            <Button
              color="dark"
              style={{marginTop: '2rem'}}
              block
            >
            {ReactDOM.createPortal(<h1>realmente no estoy aquí</h1>,document.getElementById('modal'))}
              Add Item
            </Button>
          </FormGroup>
        </Form>
        
      </ModalBody>
    </Modal>
    </div>
  )
}


const mapDispatchToProps = {
  addSurgery,
};
export default connect(null, mapDispatchToProps) (ItemModal);

