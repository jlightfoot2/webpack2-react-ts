import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import ArrowNext from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowPrevious from 'material-ui/svg-icons/navigation/arrow-back';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import {flexParentRowStyle, flexRowItemStyle} from './commonStyles'

export interface Props { 
  page: {title: string,content: string};
  numPages: number;
  pageIndex: number;
  next(event: any): void;
  previous(event: any): void;
  close(event: any): void;
}

export interface State { 

}

const getNavigation = (previusButton,closeButton,nextButton) => {
  return (<div style={flexParentRowStyle as any}>
                     <div style={flexRowItemStyle as any}>{previusButton}</div>
                     <div style={flexRowItemStyle as any}>{closeButton}</div>
                     <div style={flexRowItemStyle as any}>{nextButton}</div>
          </div>);
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Page extends React.Component<Props, State> {
    componentWillMount () {
      const {page} = this.props;
    }

    render() {
      const {page,pageIndex,numPages,next,previous,close} = this.props;
      const previusButton =  <IconButton disabled={!(pageIndex > 0)}  onTouchTap={previous}><ArrowPrevious /></IconButton>;
      const closeButton = <IconButton onTouchTap={close}><ClearIcon /></IconButton>;
      const nextButton = <IconButton disabled={!(pageIndex + 1 < numPages )} onTouchTap={next}><ArrowNext /></IconButton>;
      const navigation = getNavigation(previusButton,closeButton,nextButton);
        return (<div>

                  {navigation}

                  <h2>{page.title}</h2>
                  <div dangerouslySetInnerHTML={{__html: page.content }} />

                  {navigation}

                </div>
              );
    }
}