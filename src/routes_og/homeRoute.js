import HomePage from '../HomePage';

export default {
  path: 'home',
  name: 'home',
  getComponent (nextState, cb) {
    cb(null, HomePage);
  }
};
