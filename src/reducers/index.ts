import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {assessmentResults,assessmentResultIds} from './assessment';


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
  assessmentResultIds
});

export default appHub;