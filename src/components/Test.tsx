import * as React from "react";

import { Link } from 'react-router';
export interface HelloProps { 

}

export interface HelloState { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Hello extends React.Component<HelloProps, HelloState> {
    render() {
        return (<div>
                  <h1>Test Test Test</h1>
                    <Link to="/">Hello</Link>

                  </div>);
    }
}