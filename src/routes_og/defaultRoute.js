import Intro from '../Intro.tsx';

export default {
  path: '/',
  name: 'default',

  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
