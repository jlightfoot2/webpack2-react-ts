import ServiceWorkerStatusComponents from '../components/ServiceWorkerStatus';
import { connect } from 'react-redux';


import {
  swLogEvent,
  updatesAvailable,
  updateUserNotified,
  cacheStatusChange
} from '../actions';


const stateToProps = (state, ownProps) => {
  return {
    updates: state.app.updates,
    cache: state.app.cache,
    log: state.app.log,
    actions: [
      {actions: [swLogEvent('random event')], name: 'random event'},
      {actions: [updatesAvailable(true),updateUserNotified(false)], name: 'Fake new SW'},
    ]
  }
}
const dispatchToProps = (dispatch) => {
  return {
    dispatchAction: (actions) => {
      return () => {
        actions.map(action => dispatch(action));
      }
    }
  }
}
export default connect(stateToProps,dispatchToProps)

(ServiceWorkerStatusComponents);