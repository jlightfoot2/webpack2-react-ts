import * as React from "react";

export interface Props { 

}

export interface State { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Assessments extends React.Component<Props, State> {
    render() {
        return (<h1>Assessments</h1>);
    }
}