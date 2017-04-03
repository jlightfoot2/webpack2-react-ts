import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {assessmentResults,assessmentResultIds} from './assessment';
import {device} from './device';
import {appReducer} from 'local-t2-sw-redux';
import {navigationReducer} from '../lib/local-t2-navigation';


const defaultUser = {
  status: 0
}

const user = (state: any = defaultUser, action: any) => {
  return state;
}


const appHub = combineReducers({
  routing: routerReducer,
  user,
  assessmentResults,
  assessmentResultIds,
  device,
  app: appReducer,
  navigation: navigationReducer
});

export default appHub;