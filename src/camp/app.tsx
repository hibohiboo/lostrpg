import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { twitterLogin } from './firebase';
import User from './models/User';
import { fetchStart as addFetch } from './modules/addFacility';
import { fetchStart } from './modules/load';
import { loginSuccess } from './modules/user';
import store from './store';

twitterLogin(viewEdit);

function viewEdit(user: User) {
  store.dispatch(fetchStart('blankCamp.json'));
  store.dispatch(addFetch('additionalFacilities.json'));
  store.dispatch(loginSuccess(user));
  render(
    // providerにstoreは必須
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
    null,
  );
}
