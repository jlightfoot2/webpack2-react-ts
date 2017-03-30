import * as Redux from 'redux';

declare namespace T2AppReduxActions {

  interface actionObject {
    type: string;
  }


  function cacheStatusChange(): actionObject;
  function connectivityChange(): actionObject;
  function updatesAvailable(): actionObject;
  function updateUserNotified(): actionObject;
  function connectivityCheckStart(): actionObject;
  function connectivityCheckEnd(): actionObject;
  function checkIsOnline(): actionObject;
}

declare namespace T2AppReduxReducers {

  function app(state?: any, options?: any): Redux.Reducer<any>;
}

declare namespace T2AppReduxComponents {
   const UpdateDialogContainer: any;
   const AppStatusContainer: any;
}

declare namespace T2AppReduxMiddleware {
   function checkOnlineStatus(defaultMs: number): Object;
   function sagaRoot(): Object;
}

declare namespace T2AppReduxRegisterPromise {
  function registerPromise(registrationPromise: any, appStore: any): any
}


declare module 'local-t2-sw-redux' {

  export import appReducers = T2AppReduxReducers.app;
  export import appActions = T2AppReduxActions;
  export import appMiddleware = T2AppReduxMiddleware;
  export import checkOnlineStatus = T2AppReduxMiddleware.checkOnlineStatus;
  export import appComponents = T2AppReduxComponents;
  export import registerPromise = T2AppReduxRegisterPromise.registerPromise;

}