import {assessmentResults, assessmentResultIds} from '../assessment';
import {addAssessmentResult,ADD_ASSESSMENT_RESULT} from '../../actions/assessments';

describe('actions', () => {
  it('should return the same action object I feed in', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: ADD_ASSESSMENT_RESULT,
      id: 123,
      data: {test: 'blah'}
    }

    expect(addAssessmentResult(123,{test: 'blah'})).toEqual(expectedAction)
  })
})


