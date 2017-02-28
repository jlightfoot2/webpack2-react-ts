import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {GridList, GridTile} from 'material-ui/GridList';

import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

const styles = {
};

const categories = [
  {id: 1, title: 'Videos', path: '/main/videos', featured: true, img: require('../res/images/film-596011_640.png')},
  {id: 2, title: 'Assessments', path: '/main/assessment', featured: false, img: require('../res/images/2000px-Checklist_Noun_project_5166.svg.png')},
  {id: 3, title: 'Library', path: '/main/library', featured: false, img: require('../res/images/2000px-Book_font_awesome.svg.png')},
  {id: 4, title: 'Resources', path: '/main/resources', featured: false, img: require('../res/images/Sharing-icon.svg.png')}
];

interface MyProps {
  appBarTitle(msg: string): any;
}

interface MyState {
 
}

export default class HomePage extends React.Component<MyProps, MyState> {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.appBarTitle && this.props.appBarTitle('Home');
  }

  render () {
    var {appBarTitle} = this.props;

    var cols = 2;

    return (
    <div>
      <GridList
        cols={cols}
        cellHeight={250}
      >

        {categories.map((tile) => (
            <GridTile
              key={tile.id}
               {...tile}
              title={tile.title}
              titlePosition='bottom'
              style={{backgroundColor: 'grey'}}
            >
            <img src={tile.img} />
            </GridTile>
      
        ))}
      </GridList>
    </div>);
  }

};