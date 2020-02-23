import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reducer from './reducers';
import reduxThunk from 'redux-thunk';


import App from './pages/App';
import LoadingView from './components/Loadning'
import { persistor, store } from './store';




const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>
  , app,
);
