import React, { useState } from 'react';
import '../assets/styles/components/Target.scss';
import { Link } from '@reach/router';
import Rx1 from '../assets/static/Rx1.png';
import Rx2 from '../assets/static/Rx2.jpg';
import Rx3 from '../assets/static/Rx3.jpg';

const Target = ({ view, onClick }) => {

  return (
    <div className='target'>
      <div className='target__date'>
        <h4>Fecha consulta</h4>
        <h2>11</h2>
        <h4>noviembre 2019</h4>
      </div>
      <div className='target__user--info'>
        <div className='user-info name'>
          <p className='label'>Sexo: </p>
          <p>Femenino</p>
        </div>
        <div className='user-info age '>
          <p className='label'>Edad: </p>
          <p>12 años</p>
        </div>

      </div>

      <div className='target__diagnosis'>
        <div>
          <p className='label'>Diagnostigo: </p>
          <p>
          El paciente presenta epilepsia intratable con crisis convulsivas diarias.
          </p>
        </div>
        <div>
          <p className='label'>Procedimiento: </p>
          <p>
           resección de tumor lóbulo temporal izquierdo por lobectomia temporal con amigdalohipocampectomía

          </p>
        </div>
      </div>

      <div className={view ? 'target__details' : 'target__details none'}>
        <div className='Attacheds'>
          <h3 className='label'>Imagenes preoperatorio: </h3>
          <div className='attacheds__gallery'>
            <img src={Rx1} alt='rx' />
            <img src={Rx2} alt='rx' />
            <img src={Rx3} alt='rx' />

          </div>
        </div>
      </div>

      <button
        type='button'
        className={view ? 'viewMore hide' : 'viewMore'}
        onClick={onClick}

      >
        <i className=' fas fa-angle-down btnIcon' />
      </button>

      <Link className='go next link ' to='/intra'>
        <div>
          <i className='fas fa-chevron-right' />
        </div>
      </Link>
    </div>
  );
};
export default Target;

