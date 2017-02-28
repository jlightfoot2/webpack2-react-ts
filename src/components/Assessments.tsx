import * as React from "react";

export interface Props { 
   assessments: any[];
}

export interface State { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Assessments extends React.Component<Props, State> {
    render() {
      const {assessments} = this.props;
      return (
        <div>
          <h1>Assessments</h1>
          {assessments.map((item => {
            return <div key={item.id}>{item.title}</div>
          }))}
        </div>
        );
    }
}