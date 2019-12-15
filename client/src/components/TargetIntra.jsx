import React, { useState } from 'react';
import '../assets/styles/components/TargetIntra.scss';
import { Link } from '@reach/router';
import Rx1 from '../assets/static/Rx1.png';
import Rx2 from '../assets/static/Rx2.jpg';
import Rx3 from '../assets/static/Rx3.jpg';

const TargetIntra = ({ view, onClick }) => {

  return (
    <div className='targetIntra'>
      <div className='targetIntra__date'>
        <h4>Fecha operación</h4>
        <h2>12</h2>
        <h4>noviembre 2019</h4>
      </div>
      <div className='targetIntra__diagnosis'>

        <div>
          <p className='label'>Procedimiento: </p>
          <p>
           resección de tumor lóbulo temporal izquierdo por lobectomia temporal con amigdalohipocampectomía

          </p>
        </div>
        <div>
          <p className='label'>Observación: </p>
          <p>
          El paciente presenta epilepsia intratable con crisis convulsivas diarias.
          </p>
        </div>
      </div>

      <div className={view ? 'targetIntra__details' : 'targetIntra__details none'}>
        <div className='Attacheds'>
          <h3 className='label'>Imagenes intraoperatorio: </h3>
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
      <Link className='go next' to='/post'>

        <div>
          <i className='fas fa-chevron-right' />
        </div>
      </Link>

      <Link className='go back' to='/'>

        <div>
          <i className='fas fa-chevron-right' />
        </div>
      </Link>

    </div>
  );
};
export default TargetIntra;

