import * as React from "react";

export interface Props { 
  appBarTitle(msg: string): any;
}

export interface State { 

}

export default class Resources extends React.Component<Props, State> {
    componentWillMount () {
      this.props.appBarTitle('Resources');
    }
    render() {
        return (<h1>Resources</h1>);
    }
}