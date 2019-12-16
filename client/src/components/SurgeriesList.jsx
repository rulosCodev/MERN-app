import React, {useState} from 'react'

import Target from './Target';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import ProTypes from 'prop-types';
import uuid from 'uuid';

const SurgeriesList = ({items})=>{
  
  
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
      <button 
      type="button" 
      onClick={()=>{
        const name = prompt('Enter item');
        if(name){
          handleItems(name,'items')
        }
      }}
      >Add Item
      </button>

      <div className="list-items">
        {items.map(({id, name})=>{
          return(
          <Target 
          key={id} 
          diagnosis={name}
          onDelete={handleDelete} 
          />
          )
        })}
      </div>
    </div>
  )

};

const mapStateToProps = (state) => {
  return {
    items: state.item.items,
    
  };
};

export default connect(mapStateToProps, null) (SurgeriesList);
