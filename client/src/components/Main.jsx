import React, { useState } from 'react';
import '../assets/styles/components/Main.scss';

import SurgeriesList from './SurgeriesList';

const Main = () => {
  return (
    <div className='main'>
        <SurgeriesList /> 
    </div>
  );
};
export default Main;
