import C from '../actions/constants';

export default function (state = false, action) {
  switch (action.type) {
    case C.BAD_REQUEST_SHOW:
      return action.payload;
    case C.BAD_REQUEST_HIDE:
      return action.payload;
    default:
      return state;
  }
}
