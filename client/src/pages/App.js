import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import '../assets/styles/App.scss';
import SurgeriesList from '../components/SurgeriesList';
import Uploads from '../components/Uploads';

function App() {

  return (
      <BrowserRouter>
        <div className="appContainer">
          <Header />
          <Route exact path='/' component={SurgeriesList} />
          <Route exact path='/cirugias/:id' component={Uploads} />

        </div>

      </BrowserRouter>
  );
}

export default App;
