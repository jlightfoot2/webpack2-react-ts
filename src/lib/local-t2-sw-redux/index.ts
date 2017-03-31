//require('babel-polyfill');
import appReducer from './reducers';
import appActions from './actions';
import UpdateDialog from './containers/UpdateDialog'
import UpdateSnackBar from './containers/UpdateSnackBar';
import AppStatus from './containers/AppStatus';

import {registerPromise} from './lib/serviceWorker';
const appMiddleware = store => next => {
  return action => {
    let result = next(action);
    //does nothing for now
    return result;
  };
};

export {
  appReducer,
  appActions,
  appMiddleware,
  registerPromise,
  UpdateSnackBar
};

export default registerPromise;
