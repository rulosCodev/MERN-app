import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';

function App({ user }) {

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
