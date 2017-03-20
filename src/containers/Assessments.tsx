import Assessments from '../components/Assessments';
import {assessments, assessmentIds} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
const getCols = (device) => {
  const width = device.width;
  if(!width){
    return 1;
  }
  if(width > 900){
    return 4;
  }
  if(width > 600){
    return 2;
  }
  return 1
}
const stateToProps = (state) => {
  console.log(assessments);
  return {
    assessments: assessmentIds.map(id => assessments[id]),
    cols: getCols(state.device)
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessments);