import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import Provider from './Provider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

require('./res/images/Icon_Family_128.png');
require('./res/images/Icon_Family_144.png');
require('./res/images/Icon_Family_152.png');
require('./res/images/Icon_Family_192.png');
require('./res/images/Icon_Family_256.png');
require('./index.html');
require('./manifest.json');
require("file-loader?name=[name].[ext]!./favicon.ico");
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
// Hot Module Replacement API. Only used when running the dev server.
if ((module as any).hot) {
  (module as any).hot.accept('./Provider', () => {
    render(Provider)
  });
}