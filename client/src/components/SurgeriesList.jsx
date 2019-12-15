import React, {useState} from 'react'

import Target from './Target';


import uuid from 'uuid';

const SurgeriesList = ()=>{
  const[state, setState] = useState({
     items: [
      {id:uuid(), name:'Eggs'},
      
    ]}
  );
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

  const items = state.items;

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

export default SurgeriesList;
