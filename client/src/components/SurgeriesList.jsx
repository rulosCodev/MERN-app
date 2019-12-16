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
  
  
  const handleItems = (item, type) => {
    setState({
      ...state,
      [type]: [...state.items, { id: uuid(), name: item}]
    })
  }
  const handleDelete = (id)=> {
    setState({
      ...state,
      items: [...state.items.filter(item => item.id !== id).splice(0, 1)]
    });
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
