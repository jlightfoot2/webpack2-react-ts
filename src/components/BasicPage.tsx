import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

export interface Props { 
  appBarTitle(msg: string): any;
  title: string;
  page: {title: string, content: string, subtitle: string}
  content: string;
  image: string;
  actions: any[];
}

export interface State { 

}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class BasicPage extends React.Component<Props, State> {
    componentWillMount () {
      const {title} = this.props;

      this.props.appBarTitle(title);
    }

    componentWillReceiveProps(nextProps) {
      const {title} = nextProps;
 
      this.props.appBarTitle(title);
    }
    //<CardTitle title={subtitle} />
    render() {
      const {content,page,image,actions} = this.props;
      let cardHeader = null;
      if(image){
        cardHeader = (<CardMedia
                      overlay={<CardTitle title={page.title} subtitle={page.subtitle} />}
                      >
                      <img src={image} />
                    </CardMedia>);
      } else {
        cardHeader = <CardHeader
                title={page.title}
                subtitle={page.subtitle}
              />
      }
      return (
                <Card>
                    {cardHeader}
                    
                    <CardText>
                      {page.content}
                      {this.props.children}
                    </CardText>
                    <CardActions>
                      {actions.map(act => <FlatButton key={act.label} onTouchTap={act.action} label={act.label} />)}
                    </CardActions>
                </Card>
              );
    }
}