import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {assessmentResults,assessmentResultIds} from './assessment';
import {device} from './device';


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
  device
});

export default appHub;