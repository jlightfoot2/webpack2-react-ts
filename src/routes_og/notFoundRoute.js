import NotFound from '../NotFound.tsx';
export default {
  path: '*',
  name: 'home',
  getComponent (nextState, cb) {
    cb(null, NotFound);
  }
};
