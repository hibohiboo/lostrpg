import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Route } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux'

import CreateApp from './components/CreateApp';
import ListApp from './components/ListApp';
import User from './models/User';
import store from './store';
import {history} from './store';
import { authCheck } from './modules/auth';

// ログイン状況確認
store.dispatch(authCheck());

render(
  // providerにstoreは必須
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ListApp}/>
        <Route path="/create" component={CreateApp}/>
      </div>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('app'),
  null,
);
