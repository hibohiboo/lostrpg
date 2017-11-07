import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

import store from './store';

render(
  // providerにstoreは必須
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  null
);
