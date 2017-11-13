import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Route } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux'

import EditApp from './components/EditApp';
import ListApp from './components/ListApp';
import { twitterLogin } from './firebase';
import User from './models/User';
import { fetchStart as addFetch } from './modules/addFacility';
import { fetchStart } from './modules/load';
import { loginSuccess } from './modules/user';
import store from './store';
import {history} from './store';

twitterLogin(viewEdit);

function viewEdit(user: User) {
  store.dispatch(fetchStart('blankCamp.json'));
  store.dispatch(addFetch('additionalFacilities.json'));
  store.dispatch(loginSuccess(user));
  render(
    // providerにstoreは必須
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={ListApp}/>
          <Route path="/edit" component={EditApp}/>
        </div>
      </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('app'),
    null,
  );
}
