/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuDrawer from './MenuDrawer';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import AppSnackBarContainer from 'local-t2-sw-redux/lib/containers/UpdateSnackBar';
//import SnackBarNotice from './SnackBarNoticeComponent';
//import AppBarMenuIcon from './AppBarMenuIconDrawer';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {push, replace} from 'react-router-redux';

//import {FlashMessageInterface} from './data/workbook';


//import {userLogin,userLogout} from './actions';
//import Eula from './Eula';


interface MyProps {
  
  appBarTitle?(msg: string): any;
  categories: any[];
  pathOnTouchTap(path:string): any;
  appConfig: any;
  leftIcon: any;

}

interface MyState {
  title?: any,
  open?: boolean
}



export default class AppBarPage extends React.Component<MyProps, MyState>{
  static contextTypes: any = {
                                router: React.PropTypes.object.isRequired
                              };
  constructor (props: any) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.state = {
      open: false,
      title: ''
    };
  }

  componentWillMount () {
    //this.props.dispatch(windowResize(window.innerWidth, window.innerHeight));
  }
  handleRequestClose () {
    this.setState({
      open: false
    });
  }

  handleTouchTap () {
    this.setState({
      open: true
    });
  }

  handleTitle (title: string) {
    this.setState({
      title: title
    });
  }

  render () {
    const {categories,pathOnTouchTap,appConfig,leftIcon} = this.props;
    return (
       
        <div>
            <AppBar
                title={this.state.title}
                titleStyle={{textAlign: 'center'}}
                iconElementLeft={leftIcon}
               
                 />
                <div style={{'padding': '5px'} as any}>
                  <div>
                    {React.cloneElement((this.props as any).children, { appBarTitle: this.handleTitle, categories, pathOnTouchTap, appConfig: appConfig })}
                  </div>
                </div>
                <AppSnackBarContainer />
                {/*
                <Eula />
                <SnackBarNotice flash={flash} />
                */}
        </div>
    );
  }
}
