import BasicPage from '../components/BasicPage';
import {homePage} from '../res/data/page';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps) => {
  return {
    title: 'Home',
    page: {title: homePage.title, subtitle: 'Family & Friends Module', content: homePage.content},
    image: homePage.image && !(state.device.width > 600 || state.device.width > state.device.height)? homePage.image : '',
    
    actions: [
      {label: 'Assessments', action: ownProps.pathOnTouchTap('main/assessments')},
      {label: 'Library', action: ownProps.pathOnTouchTap('main/library')}
    ]
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(BasicPage);