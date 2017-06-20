import Theme from './components/Theme';
import Home from './containers/Home';
import AppBarPage from './components/AppBarPage';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import PageContainer from './containers/Main';
import Debug from './containers/Debug';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {navigationCreateMiddleware} from 'local-t2-navigation-redux';
import {registerPromise,appMiddleware} from 'local-t2-sw-redux';
import { createStore, applyMiddleware} from 'redux'
import reducer from './reducers';
import {asynRouteMaker,syncRoute} from './lib/helpers';
import {windowResize} from './actions/device';
import navigationConfig from './navigationConfig';
import thunk from 'redux-thunk';
import {createPlainRoutes, AssessmentInterface} from 'local-t2-assessment-suite';

let store = createStore(reducer,
    applyMiddleware(
        thunk,
        routerMiddleware(hashHistory),
        navigationCreateMiddleware(navigationConfig),
        appMiddleware({url: '',interval: 30000})
      )
  );

var _timeOutResizeId = null;
window.onresize = () => {
   if(_timeOutResizeId){
     clearTimeout(_timeOutResizeId);
   }
   _timeOutResizeId = setTimeout(
          function(){
         
              store.dispatch(windowResize(window.innerWidth,window.innerHeight));
          },
        500);
  
}

if (__DEVTOOLS__) {
  store.subscribe(() => {
    console.log((store as any).getState()); // list entire state of app in js console. Essential for debugging.
  });
}

interface MyProps {
  [propName: string]: any;
}

interface MyState {
  [propName: string]: any;
}


if(__INCLUDE_SERVICE_WORKER__){ // __INCLUDE_SERVICE_WORKER__ and other __VAR_NAME__ variables are used by webpack durring the build process. See <root>/webpack-production.config.js
  if ('serviceWorker' in navigator) {
    if (__DEVTOOLS__) {
      console.log("Registering Service Worker !!");
    }
    /**
     * Service workers are not supported currently in an iOS browsers
     */
    const registrationPromise = navigator.serviceWorker.register('./sw.js');
    /**
     * registerPromise takes the serviceWorker promise and listens for
     * certain events which will trigger redux dispatch events
     *
     */
   
    registerPromise(registrationPromise, store).then(function (res) {
      if (__DEVTOOLS__) {
        console.log(res);
      }
    }).catch(function (e) {
      if (__DEVTOOLS__) {
        console.log(e);
      }
      throw e;
    });
  
  }
}


const asyncRoute = asynRouteMaker({});


const quickRoutes = [

];

export const itemCb = (assessment: AssessmentInterface) => {
  //console.log(assessment);
  hashHistory.push('/main/assessment/'+assessment.id);
}

const configSubroutes = {
  ids: [1,2,3,4,5],
  itemClick: itemCb,
  loadImages: true,
  onCancel: (error,assessment: AssessmentInterface) => {
    hashHistory.push('/main/assessments');
  }
};

const {AssessmentsRoute,AssessmentPageRoute} = createPlainRoutes(configSubroutes);

let mainSubRoutes = [

  asyncRoute('library',System.import('./containers/Book')),
  asyncRoute('library/:open',System.import('./containers/Book')),
  asyncRoute('videos(/:pageOffset)',System.import('./containers/Videos')),
  asyncRoute('video/:id',System.import('./containers/Video')),
  asyncRoute('resources',System.import('./containers/Resources')),
  AssessmentsRoute,AssessmentPageRoute
];

const siteRoutes = [
  {
    component: Theme,
    indexRoute: Home,
    childRoutes: [
      syncRoute('/',PageContainer, quickRoutes, Home),
      syncRoute('/main',PageContainer, mainSubRoutes,Dashboard),
      syncRoute('/debug',PageContainer, [],Debug),
      syncRoute('*',PageContainer,[],NotFound)
    ]
  }
];


const history = syncHistoryWithStore(hashHistory, store);

export default class AppProvider extends React.Component<MyProps,  MyState>{
  render(){
   return (
            <Provider store={store}>
              <Router history={history} routes={siteRoutes} />
            </Provider>
           );
  }
}