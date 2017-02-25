import { Link, browserHistory } from 'react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CircularProgress from 'material-ui/CircularProgress';
const styles = {
  content: {
    paddingTop: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
};
const Splash = () => {
	return (<div style={styles.content as any}><CircularProgress /></div>);
};

export default Splash;
