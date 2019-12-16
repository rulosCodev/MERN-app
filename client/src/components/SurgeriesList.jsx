import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';

import { getItems } from '../../actions/itemActions';
import PropTypes from "prop-types";

class SurgeriesList extends React.Component {
  
  

  componentDidMount() {
    this.props.getItems() 
    
  }
 
  render() {
    const { items } = this.props.item
    return(
      <div>
      
      <p>hola</p>
      { items.map(({_id,name})=>{
        return(

        <Target 
        key={_id}
        diagnosis={name}
        />
        )
      })}
      </div>
    )

  }
}


SurgeriesList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    item: state.item
    
  };
};
const mapDispatchToProps = {
  getItems,
};

export default connect(mapStateToProps, mapDispatchToProps) (SurgeriesList);
