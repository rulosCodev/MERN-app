import React, { useState } from 'react';
import { Router } from '@reach/router';
import '../assets/styles/components/Main.scss';

import Target from './Target';
import TargetIntra from './TargetIntra';
import TargetPost from './TargetPost';
import { Container } from 'reactstrap';
import ItemModal from './ItemModal';
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
      <Container>
        <ItemModal />
        <SurgeriesList /> 

      </Container>
      
    </div>
  );
};
export default Main;
