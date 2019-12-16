import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';

import { addItem, deleteItem } from '../../actions/itemActions';
import PropTypes from "prop-types";

import uuid from 'uuid';

const SurgeriesList = (props)=>{

  const { items } = props;
  const { name } = props;

  const handleAddItem = () => {
    const name = prompt('what is your name?');
    props.addItem({
      name,
    })
  }
  
  const handleDeleteItem = itemId => {
    props.deleteItem(itemId);
  }

  return(
    <div className="container">
    {console.log(items)}
     

      <div className="list-items">
        {items.map(({id, name})=>{
          return(
          <Target 
          key={id} 
          diagnosis={name}
          onDelete={() => handleDeleteItem(id)}
          />
          )
        })}
      </div>
    </div>
  )

};

SurgeriesList.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    items: state.item.items,
    
  };
};
const mapDispatchToProps = {
  addItem,
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps) (SurgeriesList);
