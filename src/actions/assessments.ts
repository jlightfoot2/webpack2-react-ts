export const ADD_ASSESSMENT_RESULT = 'T2.SET_ASSESSMENT_RESULT';


export const addAssessmentResult = (id,data) => {
  return {
    type: ADD_ASSESSMENT_RESULT,
    id,
    data
  };
};
