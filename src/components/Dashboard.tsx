import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {GridList, GridTile} from 'material-ui/GridList';

import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

const styles = {
};

interface MyProps {
  appBarTitle(msg: string): any;
  categories: any[];
}

interface MyState {
 
}

export default class HomePage extends React.Component<MyProps, MyState> {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.appBarTitle('Home');
  }

  render () {
    var {appBarTitle,categories} = this.props;

    var cols = 2;

    return (
    <div>
      <GridList
        cols={cols}
        cellHeight={250}
      >

        {categories.map((tile) => (
           <Link to={tile.path} >
            <GridTile
              key={tile.id}
        
              title={tile.title}
              titlePosition='bottom'
            >
            <img src={tile.img} />
            </GridTile>
            </Link>
      
        ))}
      </GridList>
    </div>);
  }

};