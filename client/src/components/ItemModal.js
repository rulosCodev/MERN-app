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

const ItemModal = () => {
  const[state, setState] = useState({
    modal: false,
    name:''
  });

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
        <FormGroup>
          <Input 
            type="text" 
            name="name"
            placeholder="add item"
          />
        </FormGroup>
      </ModalBody>
    </Modal>
    </div>
  )
}

export default ItemModal;


