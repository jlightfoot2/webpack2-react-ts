import Theme from './components/Theme';
import Hello from './components/Hello';
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

let store = createStore(reducer,applyMiddleware(routerMiddleware(hashHistory)));



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
  asyncRoute('library',System.import('./components/Library'),[],Dashboard),
  asyncRoute('assessments',System.import('./containers/Assessments'),[],Dashboard),
  asyncRoute('assessment/:id',System.import('./containers/Assessment'),[],Dashboard),
  asyncRoute('assessmentresult/:id',System.import('./containers/AssessmentResult'),[],Dashboard)
];


const siteRoutes = [

  {
    component: Theme,
    indexRoute: Hello,
    childRoutes: [
      syncRoute('/',PageContainer, quickRoutes, Hello),
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