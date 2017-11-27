// import * as React from 'react';
// import { Component, Props } from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// import { Route } from 'react-router';
// import { ConnectedRouter, push } from 'react-router-redux';
// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './store'
//import { getAllProducts } from './containers/CartContainer/logic'

const store = configureStore()
//store.dispatch(getAllProducts())

const rootEl = document.getElementById('app')

if (rootEl) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
}

// const App = props => (<div>test</div>);

// render(
//   <App />
//   ,
//   document.getElementById('app'),
//   null,
// );
