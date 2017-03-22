import {updatesAvailable, updateUserNotified, cacheStatusChange} from '../actions'

export const registerPromise = function(registrationPromise, appStore){  // eg registerService(navigator.serviceWorker.register('./ad-service-worker.js'))
  return registrationPromise.then(function(reg){
        reg.onupdatefound = function () {
          // The updatefound event implies that reg.installing is set; see
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = reg.installing;

          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and the fresh content will
                  // have been added to the cache.
                  // It's the perfect time to display a 'New content is available; please refresh.'
                  // message in the page's interface.
                  if (__DEVTOOLS__) {
                    console.log('New or updated content is available.');
                  }

                  appStore.dispatch(updatesAvailable(true,'new content'));
                  appStore.dispatch(updateUserNotified(false));
                  appStore.dispatch(cacheStatusChange(true));
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a 'Content is cached for offline use.' message.
                  appStore.dispatch(cacheStatusChange(true));
                  appStore.dispatch(updatesAvailable(false,'avail offline'));
                  appStore.dispatch(updateUserNotified(true));
                  if (__DEVTOOLS__) {
                    console.log('Content is now available offline!');
                  }
                }
                break;

              case 'redundant':
                if (__DEVTOOLS__) {
                  console.error('The installing service worker became redundant.');
                }
                appStore.dispatch(updateUserNotified(true));
                appStore.dispatch(updatesAvailable(false,'redundant'));
                break;
            }
          };
        };
        return reg;
  }).catch(function (e) {
          appStore.dispatch(updateUserNotified(true));
          appStore.dispatch(updatesAvailable(false,' catch'));
          if (__DEVTOOLS__) {
            console.error('Error during service worker registration:', e);
          }
          throw e;
  });
};

export default {
  registerPromise
};

