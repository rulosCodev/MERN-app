import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import reduxThunk from 'redux-thunk';


import App from './pages/App';



const store = createStore(reducer, {}, applyMiddleware(reduxThunk));


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , app,
);
