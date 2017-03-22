import {
  UPDATES_AVAILABLE,
  UPDATES_USER_NOTIFIED,
  CONNECTIVITY_CHECK_START,
  CONNECTIVITY_CHANGE,
  CACHE_STATUS_CHANGE
} from '../actions';

const defaultApp = {
  connectivity: {
    status: 1, // 1 == online, 0 == offline
    lastCheck: 0, // seconds ago
    lastCheckType: 'event' // ('click','timer','event')
  },
  cache: {
    isReady: false // ready for offlining
  },
  updates: {
    available: false,
    userNotified: false
  }
};

export const app = (state = defaultApp, action) => {
  switch (action.type) {
    case UPDATES_USER_NOTIFIED:
      return {...state, updates: {...state.updates, userNotified: action.notified}};
    case CACHE_STATUS_CHANGE:
      return {...state, cache: {...state.cache, isReady: action.isReady}};
    case UPDATES_AVAILABLE:
      return {...state, updates: {...state.updates, available: action.available}};
  }
  return state;
};

export default app;
