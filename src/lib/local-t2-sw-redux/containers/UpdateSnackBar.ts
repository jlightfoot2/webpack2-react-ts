import * as React from 'react';
import UpdateComponent from '../components/UpdateSnackBar';
import { connect } from 'react-redux';

import {updateUserNotified, updatesAvailable} from '../actions';

const stateToProps = (state, ownProps) => {
  return {
    open: state.app.updates.available && !state.app.updates.userNotified,
    message: state.app.updates.available ? 'There are updates available for this app.' : '',
    autoHideDuration: 2000
  };
};

const stateToDispatch = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(updateUserNotified(true));
      dispatch(updatesAvailable(false,'user update click'));
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };
};

export default connect(stateToProps, stateToDispatch)(UpdateComponent);

