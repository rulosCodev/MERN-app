import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ user }) {

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
