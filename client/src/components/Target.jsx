import React, { useState } from 'react';
import '../assets/styles/components/Target.scss';


const Target = ({
   id,
   sex,
   age,
   diagnosis,
   surgery,
   date,
   onDelete,
  }) => {

  const year = date.slice(0,4)
  const month = date.slice(5,7)
  const day = date.slice(8,10)

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
  const newDate = `${writeMonth(month)} ${year}`
  console.log(day)
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


export default Target;
