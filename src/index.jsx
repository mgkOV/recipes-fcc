import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'appStyles';

import routes from './routes';

// Load foundation
$(document).foundation();

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);