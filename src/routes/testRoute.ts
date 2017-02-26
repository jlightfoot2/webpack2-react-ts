import Test from '../Components/Test';

export default {
  path: 'test',
  getComponent (nextState, cb) {
    cb(null, Test);
  }
};
