import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App';
import IndexPage from 'IndexPage';
import RecipeView from 'RecipeView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="recipes/:id" component={RecipeView} />
  </Route>
)
