import AssessmentResult from '../components/AssessmentResult';
import {assessments, assessmentIds} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const computeScore = (assessment,results) => {
      console.log(assessment);
      console.log(results);

    function countCompleted (answers) {
      var count = 0;
      var totalCount = 0;
      Object.keys(answers).map(function (v) {
        if (answers[v]) {
          count++;
        }
        totalCount++;
      });
      return {numAnswered: count, total: totalCount};
    }

    function tallyScore (answers, questions) {
      var total = 0;
      console.log(questions);
      Object.keys(questions).map(function (idx) {
          let question = questions[idx];

          let choiceValue = answers[question.id];
          let choices = questions[idx].choices;
          choices.map((choice) => {
            if(choice.value === choiceValue){
              total += parseInt(choice.score);
            }
          });
      });
      console.log(total);
      return total;
    }

    function getScore (answers, questions) {
      var tally = tallyScore(answers, questions);

      return assessment.scoring.filter(function (criteria) {
        if (criteria.min <= tally && criteria.max >= tally) {
          return true;
        }
        return false;
      })[0] || assessment.scoring[0];
    }

    return getScore(results,assessment.questions);
}

const stateToProps = (state,ownProps) => {
 // ownProps.params.id

  return {
    minScore: assessments[ownProps.params.id] ? 0 : 0,
    maxScore: assessments[ownProps.params.id] ? assessments[ownProps.params.id].maxScore : 100,
    score: state.assessmentResults[ownProps.params.id] ? computeScore(assessments[ownProps.params.id],state.assessmentResults[ownProps.params.id]) : 0
  }
}
const dispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(stateToProps,dispatchToProps)

(AssessmentResult);