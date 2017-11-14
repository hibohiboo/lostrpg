import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'; // tslint:disable-line
import reducers from '../reducers';
import sagas from '../sagas';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware();

// Store にマウントする
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, createLogger(), rMiddleware),
);

// Saga を起動する
sagaMiddleware.run(sagas);

export default store;
