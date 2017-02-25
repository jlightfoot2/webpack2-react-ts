import {Hello as NotFound} from '../Components/Hello';
export default {
  path: '*',
  getComponent (nextState, cb) {
    cb(null, NotFound);
  }
};
