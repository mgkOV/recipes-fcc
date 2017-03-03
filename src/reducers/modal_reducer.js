import C from '../actions/constants';

export default function (state = false, action) {
  switch (action.type) {
    case C.SHOW_MODAL:
      return action.payload;
    case C.HIDE_MODAL:
      return action.payload;
    default:
      return state;
  }
}
