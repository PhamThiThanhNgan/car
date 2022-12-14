import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ddung de khoi tao tao1 redux store
import { createStore , applyMiddleware,compose} from "redux"
//thunk la mot redux middleware de xu ly cac action bat dong bo
import thunk from 'redux-thunk';
import {Provider} from "react-redux"
import rootReducer from "./reducer"
//setup used middleware chung voi redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,composeEnhancers(middleware));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />   
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
