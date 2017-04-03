import * as React from "react";
import LinearGauge from './LinearGauge';
export interface Props { 
  appBarTitle(msg: string): any;
  minScore: number;
  maxScore: number;
  score: number;
  assessment: any;
  result: any;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    componentWillMount () {
      //const {item} = this.props;

      this.props.appBarTitle("The result page");
      window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps) {
  
 
      this.props.appBarTitle("The result page");
    }
    render() {
        const {minScore,maxScore,score,result} = this.props;
        console.log(score,result);

        return (
          <div>
            <LinearGauge minScore={minScore} maxScore={maxScore} result={score} />
            <h2>{result.title}</h2>
            <div dangerouslySetInnerHTML={{__html: result.description}} />
            <h3>Recommendations</h3>
            <div dangerouslySetInnerHTML={{__html: result.recommendations}} />
          
          </div>
        );
    }
}

