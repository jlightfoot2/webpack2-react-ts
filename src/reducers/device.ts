import {WINDOW_RESIZE} from '../actions/device';
const defaultDevice = {
  width: window.innerWidth || 500,
  height: window.innerHeight || 500
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