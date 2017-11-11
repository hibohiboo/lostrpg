import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { fetchStart as addFetch } from './modules/addFacility';
import { fetchStart } from './modules/load';
import store from './store';

store.dispatch(fetchStart('blankCamp.json'));
store.dispatch(addFetch('additionalFacilities.json'));

render(
  // providerにstoreは必須
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  null,
);
