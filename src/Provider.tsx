import Theme from './components/Theme';
import Hello from './components/Hello';
import AppBarPage from './components/AppBarPage';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, browserHistory} from 'react-router';
import { createStore } from 'redux'
import reducer from './reducers';

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
const siteRoutes = [

  {
    getComponent (nextState: any, cb: any) {
      cb(null, AppBarPage);
    },

    childRoutes: [
      {
       path: '/',
       getComponent(location, cb) {
         System.import('./components/Hello').then(loadRoute(cb)).catch(errorLoading);
       } 
      },
      {
       path: 'test',
       getComponent(location, cb) {
         System.import('./components/Test').then(loadRoute(cb)).catch(errorLoading);
       },
      }

      //System.import('./routes/quickLoadRoute').then((comp: any) => comp.default),
      /*
      System.import('./routes/mainPageRoute'),
      System.import('./routes/notFoundRoute.js')
      */
     // require('./routes/quickLoadRoute').default,
      //require('./routes/mainPageRoute').default
      //require('./routes/notFoundRoute.js').default
    ]
  }

];

export default class AppProvider extends React.Component<MyProps,  MyState>{
  render(){
   return (<Provider store={store}>
               <Router history={browserHistory} routes={siteRoutes} />
            </Provider>
           );
  }
 /*
   return (<Provider store={store}>
               <Router routes={siteRoutes} />
           </Provider>);

  render(){
    return <Theme>
    <AppBarPage>
        <Hello compiler="Webpack" framework="React" />
    </AppBarPage>
    </Theme>
  }
  */
}