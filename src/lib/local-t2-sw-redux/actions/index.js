export const UPDATES_AVAILABLE = 'T2/UPDATES_AVAILABLE';
export const UPDATES_USER_NOTIFIED = 'T2/UPDATES_USER_NOTIFIED';
export const CACHE_STATUS_CHANGE = 'T2/T2CACHE_STATUS_CHANGE';
export const CONNECTIVITY_CHANGE = 'T2/CONNECTIVITY_CHANGE';
export const CONNECTIVITY_CHECK_START = 'T2/CONNECTIVITY_CHECK_START';
export const CONNECTIVITY_CHECK_END = 'T2/CONNECTIVITY_CHECK_END';
import isOnline from 'is-online';

export const cacheStatusChange = (isReady) => {
  return {
    type: CACHE_STATUS_CHANGE,
    isReady
  };
};
export const connectivityChange = (status) => {
  return {
    type: CONNECTIVITY_CHANGE,
    status
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

export const connectivityCheckStart = () => {
  return {
    type: CONNECTIVITY_CHECK_START
  };
};

export const connectivityCheckEnd = () => {
  return {
    type: CONNECTIVITY_CHECK_END
  };
};

export const checkIsOnline = (checkSource) => {
  var onlineId = 1;

  return function (dispatch, getState) {
    dispatch(connectivityCheckStart());
    var makeRequest = true;
    if ('onLine' in navigator) {
      if (onlineId && !navigator.onLine) { //if navigator says offline we "over-rule" the is-online module
        onlineId = 0;
        makeRequest = false;
        if (getState().app.connectivity.status !== onlineId) { //see if status has changed
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      }
    }
    if (makeRequest) {
      isOnline(function (online) {
        onlineId = online ? 1 : 0;
        if (getState().app.connectivity.status !== onlineId) {
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      });
    }
  };
};

export default {
  cacheStatusChange,
  connectivityChange,
  updatesAvailable,
  updateUserNotified,
  connectivityCheckStart,
  connectivityCheckEnd,
  checkIsOnline
};
