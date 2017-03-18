import * as React from "react";
import { Link } from 'react-router';


export interface Props { 
  page: {title: string,content: string};
}

export interface State { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Page extends React.Component<Props, State> {
    componentWillMount () {
      const {page} = this.props;
    }

    render() {
      const {page} = this.props;
        return (<div>
                  <h2>{page.title}</h2>
                  <div dangerouslySetInnerHTML={{__html: page.content }} />
                </div>
              );
    }
}