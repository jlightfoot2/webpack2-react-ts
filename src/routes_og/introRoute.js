import Intro from '../Intro.tsx';

export default {
  path: 'intro',
  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
