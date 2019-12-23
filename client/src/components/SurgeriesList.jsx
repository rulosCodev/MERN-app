import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';

import { getSurgeries } from '../../actions/surgeryActions';
import PropTypes from "prop-types";

import '../assets/styles/components/SurgeriesList.scss';

class SurgeriesList extends React.Component {

  componentDidMount() {
    this.props.getSurgeries() 
    
  }

  
 
  render() {
    const surgeries = this.props.surgeries
    // console.log(this.props.surgeries)
    return(
      <div className="surgeriesList">
      { surgeries.map(({_id, sex, age, diagnosis, surgery, date})=>{
        return(

        <Target 
          key={_id}
          id={_id}
          sex={sex}
          age={age}
          diagnosis={diagnosis}
          surgery={surgery}
          date={date}
        />
        )
      })}
      </div>
    )

  }
}


SurgeriesList.propTypes = {
  getSurgeries: PropTypes.func.isRequired,
  // surgeries: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    surgeries: state.surgery.surgeries
    
  };
};
const mapDispatchToProps = {
  getSurgeries,
};

export default connect(mapStateToProps, mapDispatchToProps) (SurgeriesList);
