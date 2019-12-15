import React, { useState } from 'react';
import '../assets/styles/components/TargetPost.scss';
import { Link } from '@reach/router';
import Rx1 from '../assets/static/Rx1.png';
import Rx2 from '../assets/static/Rx2.jpg';
import Rx3 from '../assets/static/Rx3.jpg';

const TargetPost = ({ view, onClick }) => {

  return (
    <div className='targetPost'>
      <div className='targetPost__date'>
        <h4>Fecha control</h4>
        <h2>12</h2>
        <h4>noviembre 2019</h4>
      </div>
      <div className='targetPost__diagnosis'>

        <div>
          <p className='label'>Observación: </p>
          <p>
          El paciente presenta epilepsia intratable con crisis convulsivas diarias.
          </p>
        </div>
      </div>

      <div className={view ? 'targetPost__details' : 'targetPost__details none'}>
        <div className='Attacheds'>
          <h3 className='label'>Imagenes postoperatorio: </h3>
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
      <Link className='go next' to='/'>

        <div>
          <i className='fas fa-chevron-right' />
        </div>
      </Link>

      <Link className='go back' to='/intra'>

        <div>
          <i className='fas fa-chevron-right' />
        </div>
      </Link>

    </div>
  );
};
export default TargetPost;

