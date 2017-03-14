import Assessment from '../components/Assessment';
import {ItemInterface} from '../components/Assessment';
import {assessments} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state,ownProps) => {
  console.log(assessments);
  console.log(ownProps.params);
  return {
    item: assessments[ownProps.params.id] as ItemInterface
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessment);