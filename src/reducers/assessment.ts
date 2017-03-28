import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {ADD_ASSESSMENT_RESULT} from '../actions/assessments';

const defaultAssessResults = {

}

export const getMax = function(array){
  return Math.max.apply(null,array);
}

export const nextId = (array) => {
  let nextId = array.length ? getMax(array) + 1 : 1;
  return nextId;
}

export const assessmentResults = (state: any = defaultAssessResults, action: any) => {
  switch (action.type) {
    case ADD_ASSESSMENT_RESULT:
      state = {...state,[action.id]: action.data}
      break;
    default:
      // code ...
      break;
  }
  return state;
}

export const assessmentResultIds = (state: any = [], action: any) => {
  switch (action.type) {
    case ADD_ASSESSMENT_RESULT:
      if(action.id && !(state.indexOf(action.id) > -1)){
          state.push(action.id);
          state = state.map(id => id);
      }
      break;
    default:
      // code ...
      break;
  }
  return state;
}
