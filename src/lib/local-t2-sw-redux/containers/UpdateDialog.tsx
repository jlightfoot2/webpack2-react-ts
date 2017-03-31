import * as React from 'react';
import UpdateDialog from '../components/UpdateDialog';
import { connect } from 'react-redux';

import {updateUserNotified, updatesAvailable} from '../actions';

const stateToProps = (state, ownProps) => {
  return {
    open: state.app.updates.available && !state.app.updates.userNotified,
    message: 'There are updates available for this app. This page will reload.'
  };
};

const stateToDispatch = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(updateUserNotified(true));
      dispatch(updatesAvailable(false,'user dialog click'));
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };
};

export default connect(stateToProps, stateToDispatch)(UpdateDialog);

