import * as React from "react";
import BasicPage,{Props,State} from "./BasicPage";
import { Link } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

export const fieldRowStyle = {
  marginBottom: '15px'
}
export default class PageWithLinks extends React.Component<Props, State> {

  render(){
    return (
    <BasicPage {...this.props}>
          <h2>Choose a Related Resource</h2>
          <ul>
            <li style={fieldRowStyle}>
              <Link  to={'main/library'}>Library</Link>
            </li>
            <li style={fieldRowStyle}>
              <a href={'http://afterdeployment.dcoe.mil/links-and-books/Families and Friendships'} target="_blank">Links and Books</a>
            </li>
            <li style={fieldRowStyle}>
              <a href={'http://afterdeployment.dcoe.mil/forums/peer-2-peer'} target="_blank">Forum</a>
            </li>
            <li style={fieldRowStyle}>
              <a href={'http://afterdeployment.dcoe.mil/fact/families-and-friendships'} target="_blank">Facts</a>
            </li>
            <li style={fieldRowStyle}>
              <a href={'http://afterdeployment.dcoe.mil/article/families-and-friendships'} target="_blank">Articles</a>
            </li>
            <li style={fieldRowStyle}>
              <a href={'http://afterdeployment.dcoe.mil/tip/families-and-friendships'} target="_blank">Tips</a>
            </li>
          </ul>
    </BasicPage>
      );

  }
}