import * as React from "react";
import Form, {ValidationResultInterface} from './Form';
export interface ItemInterface{
  title: string;
  questions: any[];
}


export interface Props { 
  appBarTitle(msg: string): any;
  item: ItemInterface;
  submitData(data: any): void;
  validateData(data: any): ValidationResultInterface; 
  cancel(): void;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    componentWillMount () {
      const {item} = this.props;

      this.props.appBarTitle(item.title);
    }

    componentWillReceiveProps(nextProps) {
      const {item} = nextProps;
 
      this.props.appBarTitle(item.title);
    }
    render() {
        const {item, submitData, validateData,cancel} = this.props;
        return (<Form items={item.questions} cancel={cancel} validateData={validateData} submitData={submitData} />);
    }
}