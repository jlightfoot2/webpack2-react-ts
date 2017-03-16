import * as React from "react";
import LinearGauge from './LinearGauge';
export interface Props { 
  appBarTitle(msg: string): any;
  minScore: number;
  maxScore: number;
  score: number;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    componentWillMount () {
      //const {item} = this.props;

      this.props.appBarTitle("The result page");
    }

    componentWillReceiveProps(nextProps) {
  
 
      this.props.appBarTitle("The result page");
    }
    render() {
        const {minScore,maxScore,score} = this.props;

        return (<LinearGauge minScore={minScore} maxScore={maxScore} result={score} />);
    }
}