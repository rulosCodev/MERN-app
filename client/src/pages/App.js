import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import '../assets/styles/App.scss';

function App() {

  return (
      <div className="appContainer">
        <Header />
        <Main />
      </div>
  );
}

export default App;
