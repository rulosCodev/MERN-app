import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';

import { getSurgeries } from '../../actions/surgeryActions';
import PropTypes from "prop-types";
import DeleteSurgeryModal from './DeleteSurgeryModal';

import '../assets/styles/components/SurgeriesList.scss';

class SurgeriesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
 

  componentDidMount() {
    this.props.getSurgeries() 
   
  }

  handleCloseModal(e) {
    this.setState({ modalIsOpen: false})
  }
  handleOpenModal(e){
    this.setState({ modalIsOpen: true})
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
          onDelete={this.handleOpenModal}
        />
        )
      })}
      <DeleteSurgeryModal onClose={this.handleCloseModal} isOpen={this.state.modalIsOpen} />
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
