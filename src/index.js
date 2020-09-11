import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { counterApp } from "./reducers";
import { createStore } from 'redux'
import CounterContainer from "./containers/counter";

import { Provider } from "react-redux";

const store = createStore(counterApp)

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);
