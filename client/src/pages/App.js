import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import '../assets/styles/App.scss';
import SurgeriesList from '../components/SurgeriesList';
function App() {

  return (
      <div className="appContainer">
        <Header />
        <SurgeriesList /> 

      </div>
  );
}

export default App;
