/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';
//import SnackBarNotice from './SnackBarNoticeComponent';
//import AppBarMenuIcon from './AppBarMenuIconDrawer';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {push, replace} from 'react-router-redux';
import { withRouter } from 'react-router';
import Theme from './Theme';
//import {FlashMessageInterface} from './data/workbook';


//import {userLogin,userLogout} from './actions';
//import Eula from './Eula';


const styles = {
  wrapper: {
    maxWidth: '1500px',
    margin: '0 auto 0 auto'
  },
  content: {
    paddingTop: '10px',
    padding: '5px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
};
interface MyProps {
 // dispatch(arg: any): any;
  appBarTitle?(msg: string): any;
  //isAuthed: boolean;

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
    const {} = this.props;
    return (
       
        <div style={styles.wrapper}>
            <AppBar
                title={this.state.title}
                titleStyle={{textAlign: 'center'}}
                iconElementLeft={<IconButton containerElement={<Link to="/" />}><HomeIcon /></IconButton>}
               
                 />
                <div style={{'padding': '5px'} as any}>
                  <div style={styles.content as any}>
                    {React.cloneElement((this.props as any).children, { appBarTitle: this.handleTitle })}
                  </div>
                </div>
                {/*
                <Eula />
                <SnackBarNotice flash={flash} />
                */}
        </div>
    );
  }
}
