import React, { useState } from 'react';
import '../assets/styles/components/Target.scss';
import { connect } from 'react-redux';
import { deleteSurgery } from '../../actions/surgeryActions';
import ReactDOM from 'react-dom';
import Modal from './Modal';

import { Link } from '@reach/router';
import Rx1 from '../assets/static/Rx1.png';
import Rx2 from '../assets/static/Rx2.jpg';
import Rx3 from '../assets/static/Rx3.jpg';

const Target = ({
   id,
   sex,
   age,
   diagnosis,
   surgery,
   date,
   onDelete,
   deleteItem
  }) => {

  const handleDelete = (id) => {
    deleteSurgery(id)
  }
  return (
    <div className='target'>

      <div className='target__date'>
        <h4>{date}</h4>
        
      </div>

      <div className='target__info'>

        

        <div className="primary--info">
          <div className="flex sex">
            <p className='label'>Sexo: </p>
            <p className="data--info">
            {sex}
            </p>
          </div>
          
          <div className="flex">
            <p className='label'>Edad: </p>
            <p className="data--info">
            {`${age} años`}
            </p>
          </div>
        </div>

        <div className="secondary--info">
          <p className='label'>Diagnostigo: </p>
          <p>
          {diagnosis}
          </p>
          
          <p className='label'>Procedimiento: </p>
          <p>
          {surgery}
          </p>
        </div>
        
      </div>
      <button
      className="btn_delete"
        type="button" 
        onClick={onDelete(id)}
      >
      <i class="fas fa-trash-alt"></i>
      
      </button>
      
    </div>
  );
};

const mapDispatchToProps = {
  deleteSurgery,
};
export default connect(null, mapDispatchToProps) (Target);
