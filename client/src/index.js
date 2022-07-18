import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers,{}, applyMiddleware(reduxThunk));
// const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
