import React from 'react';

import { connect } from 'react-redux';
import Target from './Target';

import * as surgeryActions from '../actions/surgeryActions';
import DeleteSurgeryModal from './DeleteSurgeryModal';

import '../assets/styles/components/SurgeriesList.scss';
import AddSurgeryModal from './AddSurgeryModal';
// import reducer from '../reducers/surgeryReducers';

class SurgeriesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deleteModalIsOpen: false,
      addModalIsOpen: false,
      deleteTargetId: ''
    }
  this.handleToggleModal = this.handleToggleModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
  this.handlleDeleteSurgery = this.handlleDeleteSurgery.bind(this);
  this.handleToggleAddModal = this.handleToggleAddModal.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getSurgeries();

  }


  handleCloseModal(e) {
    this.setState({ deleteModalIsOpen: false})
  }
  handleToggleModal(id){
    this.setState({ deleteModalIsOpen: !this.state.deleteModalIsOpen})
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
  handleToggleAddModal() {
    this.setState({
      addModalIsOpen: !this.state.addModalIsOpen,
    })
  }

  handlleDeleteSurgery(id) {
    this.props.deleteSurgery(id)
    this.handleToggleModal(id)
  }

  render() {
    console.log(this.props)
    const { surgeries } = this.props;
    // console.log(this.props.surgeries)
    return (
      <div className='surgeriesList'>
        <button type='button' onClick={this.handleToggleAddModal}>Nueva cirugía</button>
        { surgeries.map(({_id,sex,age,diagnosis,surgery,date})=>{
          return(
            <Target key={_id}
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
        <AddSurgeryModal
        onClose={this.handleToggleAddModal}
        isOpen={this.state.addModalIsOpen}
      />
      <DeleteSurgeryModal
        surgeryId={this.state.deleteTargetId}
        onClose={this.handleToggleModal}
        onDelete={this.handlleDeleteSurgery}
        onToggle={this.handleToggleModal}
        isOpen={this.state.deleteModalIsOpen}
      />
      </div>
    );

  }
}

// SurgeriesList.propTypes = {
//   getSurgeries: PropTypes.func.isRequired,
//   // surgeries: PropTypes.object.isRequired,
// };

const mapStateToProps = (reducers) => {
  return reducers.surgeryReducers;
};
// const mapDispatchToProps = {
//   getSurgeries,
//   // deleteSurgery,
// };

export default connect(mapStateToProps, surgeryActions)(SurgeriesList);
