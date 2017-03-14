import Assessments from '../components/Assessments';
import {assessments, assessmentIds} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state) => {
  console.log(assessments);
  return {
    assessments: assessmentIds.map(id => assessments[id])
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessments);