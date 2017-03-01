import Assessments from '../components/Assessments';
import assessmentsData from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state) => {
  console.log(assessmentsData);
  return {
    assessments: assessmentsData
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessments);