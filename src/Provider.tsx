import Theme from './components/Theme';
import Hello from './components/Hello';
import AppBarPage from './components/AppBarPage';
import Dashboard from './components/Dashboard';
import PageContainer from './containers/MainContainer';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, browserHistory} from 'react-router';
import {navigationCreateMiddleware} from 'local-t2-navigation-redux';
import { createStore } from 'redux'
import reducer from './reducers';
import {asynRouteMaker,syncRoute} from './lib/helpers';

let store = createStore(reducer)
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
  asyncRoute('assessments',System.import('./components/Assessments'),[],Dashboard)
];

console.log(syncRoute('/',AppBarPage, quickRoutes,Hello));
const siteRoutes = [

  {
    component: Theme,
    indexRoute: Hello,
    childRoutes: [
      syncRoute('/',PageContainer, quickRoutes, Hello),
      syncRoute('/main',PageContainer, mainSubRoutes,Dashboard),
    ]
  }
];

export default class AppProvider extends React.Component<MyProps,  MyState>{
  render(){
   return (
            <Provider store={store}>
              <Router history={hashHistory} routes={siteRoutes} />
            </Provider>
           );
  }
}