import React, { useState } from 'react';
import '../assets/styles/components/Main.scss';

import SurgeriesList from './SurgeriesList';

const Main = () => {
  const [view, setView] = useState(false);
  const handleClick = () => {
    if (view === true) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <div className='main'>
        {/* <ItemModal /> */}
        <SurgeriesList /> 

      
    </div>
  );
};
export default Main;
