import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import modal from './modal_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes,
  form: formReducer,
  modal
});

export default rootReducer;
