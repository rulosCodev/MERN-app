import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../actions/itemActions';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const ItemModal = (props) => {
  const[state, setState] = useState({
    modal: false,
    name:''
  });

const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newItem = {
    name: state.name
  }

  //add item via addItem action
  props.addItem(newItem);
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
      <ModalHeader toggle={toggle}>Add to Items</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="item">Item</Label>
            <Input 
              type="text" 
              name="name"
              id="item"
              placeholder="add item"
              onChange={handleChange}
            />
            <Button
              color="dark"
              style={{marginTop: '2rem'}}
              block
            >
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
  addItem,
};
export default connect(null, mapDispatchToProps) (ItemModal);

