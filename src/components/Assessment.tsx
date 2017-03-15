import * as React from "react";
import Form from './Form';
export interface ItemInterface{
  title: string;
  questions: any[];
}

export interface Props { 
  appBarTitle(msg: string): any;
  item: ItemInterface;
  submitData(data: any): void; 
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
      const {item, submitData} = nextProps;
      console.log(item);
      this.props.appBarTitle(item.title);
    }
    render() {
        const {item, submitData} = this.props;

        return (<Form items={item.questions} submitData={submitData} />);
    }
}