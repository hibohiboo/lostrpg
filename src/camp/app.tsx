import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

import CreateApp from './components/CreateApp';
import ListApp from './components/ListApp';
import ViewApp from './components/ViewApp';
import User from './models/User';
import { authCheck } from './modules/auth';
import store from './store';
import { history } from './store';

// ログイン状況確認
store.dispatch(authCheck());

render(
  // providerにstoreは必須
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ListApp}/>
        <Route path="/create" component={CreateApp}/>
        <Route path="/view/:id" component={ViewApp} />
      </div>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('app'),
  null,
);
