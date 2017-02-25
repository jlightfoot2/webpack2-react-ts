import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import Provider from './Provider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
    <Provider />,
    document.getElementById("example")
);