import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
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
  paths?: any;
  submenu?: any;
  pathOnTouchTap(path:string): any
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


    handleClosePath = (path) => {
      const {pathOnTouchTap} = this.props;
      return (event) => {
        pathOnTouchTap(path)(event);
        this.setState({open: false});
      }
    }

    handleClose = () => {
      this.setState({open: false});
    }
    render(){
      const {pathOnTouchTap} = this.props;
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
              <Menu onItemTouchTap={this.handleClose} >
                 {this.props.children}
              </Menu>
            </Drawer>
          </div>
          );
    }
}