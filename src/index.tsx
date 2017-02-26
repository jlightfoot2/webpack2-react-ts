import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import Provider from './Provider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer><Component/></AppContainer>,
        document.getElementById("spaApp")
    );
}

render(Provider);
// Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept('./Provider', () => {
    render(Provider)
  });
}