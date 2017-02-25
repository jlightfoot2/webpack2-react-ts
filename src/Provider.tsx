import Theme from './components/Theme';
import {Hello} from './components/Hello';
import AppBarPage from './components/AppBarPage';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, browserHistory} from 'react-router';

interface MyProps {
  [propName: string]: any;
}

interface MyState {
  [propName: string]: any;
}

function errorLoading(err: any) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb: any) {
 return (module: any) => cb(null, module.default);
}

function loadDefault(cb: any) {
 return (comp: any) => comp.default
}

const siteRoutes = [

  {
    getComponent (nextState: any, cb: any) {
      cb(null, Theme);
    },
    name: 'root',
    childRoutes: [
     // System.import('./routes/quickLoadRoute').then((comp: any) => comp.default),
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
   return (<Provider>
               <Router routes={siteRoutes} />
           </Provider>);
  }
 /*
  render(){
    return <Theme>
    <AppBarPage>
        <Hello compiler="Webpack" framework="React" />
    </AppBarPage>
    </Theme>
  }
  */
}