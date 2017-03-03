import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import 'appStyles';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

export const store = createStoreWithMiddleware(reducers);

// Load foundation
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
