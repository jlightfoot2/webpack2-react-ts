import {combineReducers} from 'redux';
import { normalize, schema } from 'normalizr';

import * as objectAssign from 'object-assign';


export interface ScoringInterface{
  id: number;
  min: number;
  max: number;
  title: string;
  description: string;
}

export interface ChoicesInterface{
  title: string;
  value: string;
  score: number;
}

export interface QuestionInterface{
  id: number;
  title: string;
  type: string;
  choices: ChoicesInterface[];
}

export interface AssessmentInterface{
  id: number;
  title: string;
  maxScore: number;
  scoring: ScoringInterface[];
  questions: QuestionInterface[];
}

export const makeAssessment = (id,title,maxScore: number, scoring: ScoringInterface[], questions: QuestionInterface[]):AssessmentInterface => {
  return {
    id,
    title,
    maxScore,
    scoring,
    questions
  }
}

export const makeScoring = (id: number,min,max,title,description=''): ScoringInterface => {
  return {
    id,
    min,
    max,
    title,
    description
  }
}

export const makeQuestion = (id: number,title,type='text',choices = []): QuestionInterface => {
  return {
    id,
    title,
    type,
    choices
  }
}

const scoringList1: ScoringInterface[] = [
    makeScoring(1,0,22,'LOW'),
    makeScoring(2,23,42,'MODERATE'),
    makeScoring(3,43,56,'HIGH')
];

const choicesSet1: ChoicesInterface[] = [
      {title: '0 - Not at all', value: '1', score: 0},
      {title: '1', value: '2', score: 1},
      {title: '2', value: '3', score: 2},
      {title: '3', value: '4', score: 3},
      {title: '4', value: '5', score: 4},
      {title: '5', value: '6', score: 5},
      {title: '6', value: '7', score: 6},
      {title: '7', value: '8', score: 7},
      {title: '8 - Exactly So', value: '9', score: 8}
]

const friendShipQuestions: QuestionInterface[] = [
  makeQuestion(1,'Q1','text',choicesSet1),
  makeQuestion(2,'Q2','text',choicesSet1),
  makeQuestion(3,'Q3','text',choicesSet1),
  makeQuestion(4,'Q4','text',choicesSet1)
];

const maritalSatisfactionQuestions: QuestionInterface[] = [
  makeQuestion(1,'QM1','text',choicesSet1),
  makeQuestion(2,'QM2','text',choicesSet1),
  makeQuestion(3,'QM3','text',choicesSet1),
  makeQuestion(4,'QM4','text',choicesSet1)
];


const assessments: AssessmentInterface[] = [
  makeAssessment(1,'Friendship Scale',100,scoringList1,friendShipQuestions),
  makeAssessment(2,'Marital Satisfaction',100,scoringList1,maritalSatisfactionQuestions),
];
export default assessments;




