import React from 'react'

import { connect } from 'react-redux';
import * as uploadsActions from '../actions/uploadsActions';
import '../assets/styles/components/Surgery.scss';

class Uploads extends React.Component {
  
  componentDidMount() {
    // this.props.getTarget(this.props.id)
  }
  render() {
    return(
      <div className="surgery">

        

        <div className='surgery__info'>

          <div className="primaryinfo__container">
            <div className='info date'>
              <h2>mes</h2>
              <h1>dady</h1>
              <h2>years</h2>
            </div>
            
            <div className='info patient'>
              <div className="info sex">
                <p className='label'>Sexo: </p>
                <p className="data--info">
                  femenino
                </p>
              </div>
              
              <div className="info age">
                <p className='label'>Edad: </p>
                <p className="data--info">
                años
                </p>
              </div>
            </div>
          </div>

          <div className="secondinfo__container">

            <div className="info diagnosis">
              <p className='label'>Diagnostigo: </p>
              <p>
              Diagnostico
              </p>
            </div>
            
            <div className="info surgeryprocess">
              <p className='label'>Procedimiento: </p>
              <p>
              proceso
              </p>
            </div>
          </div>

          
        
        </div>
        <div className="surgery--stage pre">

            <div className="info ">
              <p className='label'>Preoperatorios: </p>
            </div>

            <div className="pre--images">
              <div className="images--container"></div>
            </div>

            <div className="fileupload">
              <input type="file" />
              <input type="submit" />
            </div>

          </div>
        <div className="surgery--stage">
          <div className="info ">
            <p className='label'>Intraoperatorio: </p>
          </div>

          <div className="pre--images">
            <div className="images--container"></div>
          </div>

          <div className="fileupload">
            <input type="file" />
            <input type="submit" />
          </div>
        </div>

        <div className="surgery--stage">
          <div className="info ">
            <p className='label'>Postoperatorio: </p>
          </div>

          <div className="pre--images">
            <div className="images--container"></div>
          </div>

          <div className="fileupload">
            <input type="file" />
            <input type="submit" />
          </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = ({uploadsReducers}) => uploadsReducers
export default connect(mapStateToProps, uploadsActions) (Uploads);

