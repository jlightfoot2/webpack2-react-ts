import {WINDOW_RESIZE} from '../actions/device';
const defaultDevice = {
  width: 0,
  height: 0
}

export const device = (state: any = defaultDevice, action: any) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,width: action.width, height: action.height}
      break;
    default:
      // code...
      break;
  }
  return state;
}