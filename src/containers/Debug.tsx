import BasicPage from '../components/BasicPage';
import {appComponents} from '../lib/local-t2-sw-redux';
import {homePage} from '../res/data/page';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps) => {
  return {
    updates: state.app.updates,
    cache: state.app.cache,
    log: state.app.log
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(appComponents.AppStatusContainer);