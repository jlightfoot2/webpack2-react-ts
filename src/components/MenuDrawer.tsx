import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import {push} from 'react-router-redux';

/**
 * AppBarMenuIcon provides the left icon in the top navigation bar
 * @param  {[type]} options.paths   [description]
 * @param  {[type]} options.submenu [description]
 * @param  {[type]} options.parent  [description]
 * @return {[type]}                 [description]
 */

interface MyProps {
  paths: any;
  submenu: any;
  parent: any;
  workbooks: any;
  navigateTo(path:string): any
}

interface MyState {
  open: boolean;
}

export default class AppBarMenuIconDrawer extends React.Component<MyProps, MyState> {
    constructor (props, context) {
      super(props);
      this.state = {open: false};
    }

    handleToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();

       this.setState({open: !this.state.open});
    }


    handleClose = (path) => {
      const {navigateTo} = this.props;
      return (event) => {

        event.preventDefault();
        event.stopPropagation();
        this.setState({open: false});
        navigateTo(path);
      }
    }
    render(){
      const {} = this.props;
        return (
          <div>
            <IconButton onTouchTap={this.handleToggle}><MenuIcon /></IconButton>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              containerStyle={{paddingTop: 60}}
            >
               <Divider />
              <MenuItem key={'static_directors_message'} primaryText="Home" onTouchTap={this.handleClose('/main/home')}   />
         
            </Drawer>
          </div>
          );
    }
}