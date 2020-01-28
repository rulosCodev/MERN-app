import React from 'react'

import { connect } from 'react-redux';
import * as surgeryActions from '../actions/surgeryActions';
import '../assets/styles/components/Surgery.scss';

class Uploads extends React.Component {
  constructor(props) {
    super(props);
    

    this.writeMonth = this.writeMonth.bind(this);

  };
  
  componentDidMount() {
    this.props.getSurgery(this.props.match.params.id)
  }
  writeMonth(month) {
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
  
  render() {
    const year = this.props.surgery.date.slice(0,4)
    const month = this.props.surgery.date.slice(5,7)
    const day = this.props.surgery.date.slice(8,10)
    const {sex, age, diagnosis, surgeryprocess} = this.props.surgery
    return(
      <div className="surgery">

        

        <div className='surgery__info'>

          <div className="primaryinfo__container">
            <div className='info date'>
              <h2>{this.writeMonth(month)}</h2>
              <h1>{day}</h1>
              <h2>{year}</h2>
            </div>
            
            <div className='info patient'>
              <div className="info sex">
                <p className='label'>Sexo: </p>
                <p className="data--info">
                  {sex}
                </p>
              </div>
              
              <div className="info age">
                <p className='label'>Edad: </p>
                <p className="data--info">
                {age}
                </p>
              </div>
            </div>
          </div>

          <div className="secondinfo__container">

            <div className="info diagnosis">
              <p className='label'>Diagnostigo: </p>
              <p>
              {diagnosis}
              </p>
            </div>
            
            <div className="info surgeryprocess">
              <p className='label'>Procedimiento: </p>
              <p>
              {surgeryprocess}
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
const mapStateToProps = ({surgeryReducers}) => surgeryReducers
export default connect(mapStateToProps, surgeryActions) (Uploads);

