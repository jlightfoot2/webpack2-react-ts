import Intro from '../Intro';

export default {
  path: 'message',
  name: 'message',
  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
