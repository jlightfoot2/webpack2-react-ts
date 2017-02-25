import {AppStatusContainer} from 'local-t2-app-redux/lib/components';
export default {
  path: 'debug',
  name: 'debug',
  getComponent (nextState, cb) {
    cb(null, AppStatusContainer);
  }
};
