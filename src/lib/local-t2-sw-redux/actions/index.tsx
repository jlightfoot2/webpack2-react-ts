import {
  LogEntryInterface,
} from '../reducers';

export const UPDATES_AVAILABLE = 'T2.UPDATES_AVAILABLE';
export const UPDATES_USER_NOTIFIED = 'T2.UPDATES_USER_NOTIFIED';
export const CACHE_STATUS_CHANGE = 'T2.T2CACHE_STATUS_CHANGE';
export const SW_LOG_EVENT = 'T2.SW_LOG_EVENT';


export const cacheStatusChange = (isReady) => {
  return {
    type: CACHE_STATUS_CHANGE,
    isReady
  };
};

export const updatesAvailable = (available, meta = '') => {
  return {
    type: UPDATES_AVAILABLE,
    available,
    meta
  };
};

export const updateUserNotified = (notified) => {
  return {
    type: UPDATES_USER_NOTIFIED,
    notified
  };
};

export const swLogEvent = (name,info=undefined) => {
  let curTime = new Date();

  const log: LogEntryInterface = {
    name,
    timestamp: curTime.getTime()/1000, //time in seconds epoch
    info
  }
  
  return {
    type: SW_LOG_EVENT,
    log
  };
};

export default {
  cacheStatusChange,
  updatesAvailable,
  updateUserNotified,
  swLogEvent
};
