import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SplashPage from './SplashPage';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import siteTheme from './customTheme';

const muiTheme = getMuiTheme(siteTheme);
interface MyProps {
  [propName: string]: any;
}

interface MyState {
  [propName: string]: any;
}


class Theme extends React.Component<MyProps,  MyState>{

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
              {this.props.children || <SplashPage />}
              {/* SplashPage is displayed if there are no children */}

      </MuiThemeProvider>
    );
  }
}

export default Theme;