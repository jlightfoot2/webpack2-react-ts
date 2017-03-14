import * as React from "react";

export interface ItemInterface{
  title: string;
}

export interface Props { 
  appBarTitle(msg: string): any;
  item: ItemInterface;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    componentWillMount () {
      const {item} = this.props;
      console.log(item);
      this.props.appBarTitle(item.title);
    }

    componentWillReceiveProps(nextProps) {
      const {item} = nextProps;
      console.log(item);
      this.props.appBarTitle(item.title);
    }
    render() {
        return (<h1>An Assessment</h1>);
    }
}