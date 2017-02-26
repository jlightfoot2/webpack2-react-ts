import HomePage from '../Components/Hello';

export default {
  path: 'home',
  getComponent (nextState, cb) {
    cb(null, HomePage);
  }
};
