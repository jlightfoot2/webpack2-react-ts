import Theme from './components/Theme';
import Home from './containers/Home';
import AppBarPage from './components/AppBarPage';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import PageContainer from './containers/Main';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {navigationCreateMiddleware} from 'local-t2-navigation-redux';
import { createStore, applyMiddleware} from 'redux'
import reducer from './reducers';
import {asynRouteMaker,syncRoute} from './lib/helpers';
import {windowResize} from './actions/device';

let store = createStore(reducer,applyMiddleware(routerMiddleware(hashHistory)));

var _timeOutResizeId = null;
window.onresize = () => {
   if(_timeOutResizeId){
     clearTimeout(_timeOutResizeId);
   }
   _timeOutResizeId = setTimeout(
          function(){
              console.log('resize called');
              store.dispatch(windowResize(window.innerWidth,window.innerHeight));
          },
        1000);
  
}

store.subscribe(() => {
  console.log(store.getState()); // list entire state of app in js console. Essential for debugging.
});
interface MyProps {
  [propName: string]: any;
}

interface MyState {
  [propName: string]: any;
}

function getDefaultModule() {
 return (comp: any) => comp.default
}

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}
const asyncRoute = asynRouteMaker({});


const quickRoutes = [
  asyncRoute('hello',System.import('./components/Hello'),[],Dashboard),
  asyncRoute('test',System.import('./components/Test'),[],Dashboard),
];


const mainSubRoutes = [
  asyncRoute('library',System.import('./containers/Book'),[],Dashboard),
  asyncRoute('library/:open',System.import('./containers/Book'),[],Dashboard),
  asyncRoute('assessments',System.import('./containers/Assessments'),[],Dashboard),
  asyncRoute('assessment/:id',System.import('./containers/Assessment'),[],Dashboard),
  asyncRoute('assessmentresult/:id',System.import('./containers/AssessmentResult'),[],Dashboard),
  asyncRoute('videos',System.import('./containers/Videos'),[],Dashboard),
  asyncRoute('videos/:id',System.import('./containers/Video'),[],Dashboard),
  asyncRoute('resources',System.import('./containers/Resources'),[],Dashboard),
];


const siteRoutes = [

  {
    component: Theme,
    indexRoute: Home,
    childRoutes: [
      syncRoute('/',PageContainer, quickRoutes, Home),
      syncRoute('/main',PageContainer, mainSubRoutes,Dashboard),
      syncRoute('*',PageContainer,[],NotFound)
    ]
  }
];
const history = syncHistoryWithStore(hashHistory, store)
export default class AppProvider extends React.Component<MyProps,  MyState>{
  render(){
   return (
            <Provider store={store}>
              <Router history={history} routes={siteRoutes} />
            </Provider>
           );
  }
}