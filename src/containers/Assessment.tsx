import Assessment from '../components/Assessment';
import {ItemInterface} from '../components/Assessment';
import assessmentsData from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state,ownProps) => {
  console.log(assessmentsData);
  console.log(ownProps.params);
  return {
    item: assessmentsData[1] as ItemInterface
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessment);