import C from '../actions/constants';

export default function (state = [], action) {
  switch (action.type) {
    case C.FETCHING_RECIPES:
      return action.payload.data || action.payload

    case C.EDIT_RECIPE:
      return action.payload;

    case C.ADD_RECIPE:
      return action.payload;

    case C.FETCH_NEW_RECIPE:
      return action.payload;
      
    default:
      return state;
  }
}
