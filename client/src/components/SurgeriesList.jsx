import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';

import { getSurgeries, deleteSurgery } from '../../actions/surgeryActions';
import PropTypes from "prop-types";
import DeleteSurgeryModal from './DeleteSurgeryModal';

import '../assets/styles/components/SurgeriesList.scss';

class SurgeriesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      deleteTargetId: ''
    }
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlleDeleteSurgery = this.handlleDeleteSurgery.bind(this);

  }
 

  componentDidMount() {
    this.props.getSurgeries() 
   
  }

  handleCloseModal(e) {
    this.setState({ modalIsOpen: false})
  }
  handleToggleModal(id){
    this.setState({ modalIsOpen: !this.state.modalIsOpen})
    if(this.state.deleteTargetId.length === 0) {
      this.setState({
        deleteTargetId: id
      })
    } else {
      this.setState({
        deleteTargetId: ''
      })
    }

  }

  handlleDeleteSurgery(id) {
    this.handleToggleModal(id)
    this.props.deleteSurgery(id)
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
          onDelete={this.handleToggleModal}
        />
        )
      })}
      <DeleteSurgeryModal  
        surgeryId={this.state.deleteTargetId} 
        onClose={this.handleToggleModal}
        onDelete={this.handlleDeleteSurgery} 
        onToggle={this.handleToggleModal} 
        isOpen={this.state.modalIsOpen}
      />
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
  deleteSurgery,
};

export default connect(mapStateToProps, mapDispatchToProps) (SurgeriesList);
