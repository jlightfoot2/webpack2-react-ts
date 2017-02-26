import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


const defaultUser = {
  status: 0
}

const user = (state: any = defaultUser, action: any) => {
  return state;
}


const appHub = combineReducers({
  routing: routerReducer,
});

export default appHub;