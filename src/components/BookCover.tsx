import * as React from "react";
import { Link } from 'react-router';


export interface Props { 
  book: {title: string, description: string};
}

export interface State { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class BookCover extends React.Component<Props, State> {
    render() {
      const {book} = this.props;
        return (<div>
                  <h2>{book.title}</h2>
                  <p>{book.description}</p>
                  {this.props.children}
                </div>
              );
    }
}