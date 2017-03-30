import {
  UPDATES_AVAILABLE,
  UPDATES_USER_NOTIFIED,
  CACHE_STATUS_CHANGE,
  SW_LOG_EVENT
} from '../actions';

const logMax = 30;

export interface LogEntryInterface{
  name: string;
  timestamp: number;
  info?: any;
}

let loadDate = new Date();
const firstLog: LogEntryInterface = {
  name: 'log init',
  timestamp: loadDate.getTime()/1000
}

const defaultApp = {
  cache: {
    isReady: false // ready for offlining
  },
  updates: {
    available: false,
    userNotified: false
  },
  log: [firstLog]
};

export const app = (state = defaultApp, action) => {
  switch (action.type) {
    case UPDATES_USER_NOTIFIED:
      return {...state, updates: {...state.updates, userNotified: action.notified}};
    case CACHE_STATUS_CHANGE:
      return {...state, cache: {...state.cache, isReady: action.isReady}};
    case UPDATES_AVAILABLE:
      return {...state, updates: {...state.updates, available: action.available}};
    case SW_LOG_EVENT:
      const logLength = state.log.unshift(action.log);
      if(logLength > logMax){
        state.log = state.log.slice(0,logMax);
      }
      return {...state, log: state.log};
  }
  return state;
};

export default app;
