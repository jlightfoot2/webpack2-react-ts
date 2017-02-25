import {Hello as Intro} from '../Components/Hello';

export default {
  path: '/',
  name: 'default',

  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
