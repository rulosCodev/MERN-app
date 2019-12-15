import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const app = document.getElementById('app');

ReactDOM.render(
  <App />, app,
);
