import Assessment from '../components/Assessment';
import {ItemInterface} from '../components/Assessment';
import {assessments} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {FormErrorInterface} from '../components/Form';
const stateToProps = (state,ownProps) => {
  return {
    item: assessments[ownProps.params.id] as ItemInterface
  }
}
const dispatchToProps = (dispatch) => {
  return {
    submitData: (data) => {
      console.log(data);
    },
    validateData: (data: any): FormErrorInterface => {
      console.log(data);
      return {
        asdf: {name: '', title: ''}
      }
    }
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessment);