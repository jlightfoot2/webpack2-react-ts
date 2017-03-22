export const UPDATES_AVAILABLE = 'T2.UPDATES_AVAILABLE';
export const UPDATES_USER_NOTIFIED = 'T2.UPDATES_USER_NOTIFIED';
export const CACHE_STATUS_CHANGE = 'T2.T2CACHE_STATUS_CHANGE';


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



export default {
  cacheStatusChange,
  updatesAvailable,
  updateUserNotified
};
