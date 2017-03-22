//require('babel-polyfill');
import appReducer from './reducers';
import appActions from './actions';
import appComponents from './components';

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
  appComponents,
  registerPromise
};

export default registerPromise;
