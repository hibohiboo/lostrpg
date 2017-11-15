import * as React from 'react';
import { Component, Props } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

const app = props => (<div>test</div>);

render(
  <app />
  ,
  document.getElementById('app'),
  null,
);
