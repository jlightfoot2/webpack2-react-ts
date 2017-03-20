import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {GridList, GridTile} from 'material-ui/GridList';
import { Link, browserHistory } from 'react-router';

import Subheader from 'material-ui/Subheader';

import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import IconButton from 'material-ui/IconButton';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';


interface MyProps {
  appBarTitle(title: string): any;
  videos: any[];
}

interface MyState {

}

export default class Videos extends React.Component<MyProps, MyState> {
  componentWillMount(){
      this.props.appBarTitle && this.props.appBarTitle('Family Videos');
  }
  componentWillReceiveProps(nextProps) {
      this.props.appBarTitle && this.props.appBarTitle('Family Videos');
  }

  render(){

  var {videos, appBarTitle} = this.props;

    var cols = 2;
    return (
    <div>
      <GridList
        cols={cols}
      >

        {videos.map((tile) => (

          <Link key={tile.id} to={'/main/videos/'+tile.id}  cols={tile.featured ? 1 : 1} >
            <GridTile
              
              
              title={tile.title}
            >
              <img src={tile.img} />
            </GridTile>
          </Link>
        
         
        ))}
      </GridList>

    </div>);
  }

};
