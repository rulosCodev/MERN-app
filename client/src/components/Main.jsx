import React, { useState } from 'react';
import { Router } from '@reach/router';
import '../assets/styles/components/Main.scss';

import Target from './Target';
import TargetIntra from './TargetIntra';
import TargetPost from './TargetPost';

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
      <SurgeriesList />
      <Router>
        <Target
          path='/'
          view={view}
          onClick={handleClick}
        />
        <TargetIntra
          path='/intra'
          view={view}
          onClick={handleClick}
        />
        <TargetPost
          path='/post'
          view={view}
          onClick={handleClick}
        />
      </Router>
    </div>
  );
};
export default Main;
