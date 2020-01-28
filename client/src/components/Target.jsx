import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as uploadsActions from '../actions/uploadsActions';
import axios from 'axios';
import '../assets/styles/components/Target.scss';
import { array } from 'prop-types';

import Myform from './Myform';
import Uploads from './Uploads';
const Target = (props) => {

  const{  id,
    sex,
    age,
    diagnosis,
    surgery,
    date,
    onDelete,
    addFile,
    target,
    addTargetUploads,
    uploadTarget,
    uploadsfiles,
    files,
    getFiles,
  changeFile} = props;
  const year = date.slice(0,4)
  const month = date.slice(5,7)
  const day = date.slice(8,10)
  
  const handleChange = (event)=>{
    const file = event.target.files[0];

    const newFiles = {
      name: file.name,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      webkitRelativePath: file.webkitRelativePath,
      size: file.size,
      type: file.type
    }
    changeFile(newFiles)
  }
  const writeMonth=(month)=>{
    switch(month){
      case '01' :
        return 'Enero'
      case '02' :
        return 'Febrero'
      case '03' :
        return 'Marzo'
      case '04' :
        return 'Abril'
      case '05' :
        return 'Mayo'
      case '06' :
        return 'Junio'
      case '07' :
        return 'Julio'
      case '08' :
        return 'Agosto'
      case '09' :
        return 'Septiembre'
      case '10' :
        return 'Octubre'
      case '11' :
        return 'Noviembre'
      case '12' :
        return 'Diciembre'
      default: return month
    }
  }
  const convertProps = () => {
    const uploadstopatch = Object.values(uploadsfiles)
      return uploadstopatch
  }
  const handleSave = async (event) => {
    event.preventDefault();

    const fileValues = Object.values(files)
    const form = new FormData(event.currentTarget)
    try {
      const response = await addFile(form)
      

      
    } catch(error) {
      console.log(error);
      
    }
    

    } 

  return (
    <div className='target'>

      <div className='target__date'>
        <h2>{writeMonth(month)}</h2>
        <h1>{day}</h1>
        <h2>{year}</h2>
        
      </div>

      <div className='target__info'>

        <div className="info sex">
          <p className='label'>Sexo: </p>
          <p className="data--info">
          {sex}
          </p>
        </div>
        
        <div className="info age">
          <p className='label'>Edad: </p>
          <p className="data--info">
          {`${age} años`}
          </p>
        </div>

        <div className="info diagnosis">
          <p className='label'>Diagnostigo: </p>
          <p>
          {diagnosis}
          </p>
        </div>
        
        <div className="info surgery">
          <p className='label'>Procedimiento: </p>
          <p>
          {surgery}
          </p>
        </div>
        <form 
        onSubmit={handleSave}
        // action="http://localhost:4000/upload"
        // method="POST"
        // enctype="multipart/form-data"
        >
          <input  onChange={handleChange} type="file" name="file" id="file" />
          <input
          type='submit'
          value='Upload'
          className='submit'
        />
        </form>
        <Uploads id={id} />
        {/* <MyImagenes /> */}
      </div>
      <button
        className="btn_delete"
        type="button" 
        onClick={()=>{
          onDelete(id)
          }
        }
      >
      <i className="fas fa-trash-alt"></i>
      
      </button>
      
    </div>
  );
};
const mapStateToProps = ({uploadsReducers}) => uploadsReducers;

export default connect(mapStateToProps, uploadsActions) (Target);
