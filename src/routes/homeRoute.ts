import {Hello as HomePage} from '../Components/Hello';

export default {
  path: 'home',
  name: 'home',
  getComponent (nextState, cb) {
    cb(null, HomePage);
  }
};
