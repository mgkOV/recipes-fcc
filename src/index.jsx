import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import 'appStyles';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise, reduxThunk
)(createStore);

export const store = createStoreWithMiddleware(reducers);

// Load foundation
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
