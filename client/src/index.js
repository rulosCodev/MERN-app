import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';


import App from './pages/App';




const app = document.getElementById('app');

ReactDOM.render(
  <App />, app,
);
