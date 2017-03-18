import {combineReducers} from 'redux';
import { normalize, schema } from 'normalizr';

import * as objectAssign from 'object-assign';

const assessmentSchema = new schema.Entity('assessment');
const assessmentListSchema = new schema.Array(assessmentSchema);

export interface ScoringInterface{
  id: number;
  min: number;
  max: number;
  title: string;
  description: string;
  recommendations: string;
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
  minScore: number;
  scoring: ScoringInterface[];
  questions: QuestionInterface[];
  image: string;
}

export const makeAssessment = (id,title, minScore: number,maxScore: number, scoring: ScoringInterface[], questions: QuestionInterface[], image=''):AssessmentInterface => {
  return {
    id,
    title,
    minScore,
    maxScore,
    scoring,
    questions,
    image
  }
}

export const makeScoring = (id: number,min,max,title,description='',recommendations=''): ScoringInterface => {
  return {
    id,
    min,
    max,
    title,
    description,
    recommendations
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
    makeScoring(1,0,15,'LOW',
      'Your score is in a range typically associated with low social support, and suggests that you do not feel socially connected or supported by the people in your life.',


      `After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer. Because you are reporting a low level of social support, we encourage you to meet with a health care provider. If you do not have a provider, you can locate a provider or a clinic near you by clicking on the LOCATE tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.

      If you have more immediate concerns, you can talk with a professional right now by clicking on the CALL or CHAT tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24-7.

      We encourage you to check out the materials in AfterDeployments "Families and Friendships" topic.

      Social isolation can occur alongside problems in relationships, life stress, depression, and post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you are having problems in these areas is to take additional assessments. We also suggest that you complete the Friendship Scale again in a month to track how you are doing.

      You can find links to these tools under the RESOURCES tab located below

      You may find it helpful to join the AfterDeployment Facebook page where you can network with others on a range of topics.`
      ),
    makeScoring(2,16,18,'MODERATE'),
    makeScoring(3,19,24,'HIGH',
      'Your score is in a range reflecting few problems with social connections. Your responses suggest that youre socially connected and do not feel isolated from others.',

      `Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the "Life Stress" topic. 

        You are also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas. You can find links to these tools under the RESOURCES tab located above.

        You may find it helpful to join the AfterDeployment Facebook page where you can network with others on a range of topics.`
      )
];

const scoringList2: ScoringInterface[] = [
    makeScoring(3,0,84,'Low Acuity'),
    makeScoring(2,85,99,'Moderate Acuity'),
    makeScoring(1,100,158,'High Acuity')
];

const scoringList3: ScoringInterface[] = [
    makeScoring(1,0,48,'Low Acuity'),
    makeScoring(2,49,68,'Moderate Acuity'),
    makeScoring(3,69,84,'High Acuity')
];

const scoringList4: ScoringInterface[] = [
    makeScoring(1,0,39,'Low Acuity'),
    makeScoring(2,40,59,'Moderate Acuity'),
    makeScoring(3,60,75,'High Acuity')
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
];

const choicesSet2: ChoicesInterface[] = [
      {title: 'Almost Always', value: '1', score: 4},
      {title: 'Most of the time', value: '2', score: 3},
      {title: 'About half the time', value: '3', score: 2},
      {title: 'Occasionally', value: '4', score: 1},
      {title: 'Not at all', value: '5', score: 0},
];

const choicesSet3: ChoicesInterface[] = [
      {title: 'Almost Always', value: '1', score: 0},
      {title: 'Most of the time', value: '2', score: 1},
      {title: 'About half the time', value: '3', score: 2},
      {title: 'Occasionally', value: '4', score: 3},
      {title: 'Not at all', value: '5', score: 4},
];

const choicesSet4: ChoicesInterface[] = [
      {title: 'Very Unhappy', value: '1', score: 0},
      {title: 'Somewhat Unhappy', value: '2', score: 2},
      {title: 'Slightly Unhappy', value: '3', score: 7},
      {title: 'Happy', value: '4', score: 15},
      {title: 'Pretty Happy', value: '5', score: 20},
      {title: 'Very Happy', value: '6', score: 25},
      {title: 'Perfectly Happy', value: '7', score: 35},
];

const choicesSet5: ChoicesInterface[] = [
      {title: 'Always Agree', value: '1', score: 5},
      {title: 'Almost Always Agree', value: '2', score: 4},
      {title: 'Occasionally Disagree', value: '3', score: 3},
      {title: 'Frequently Disagree', value: '4', score: 2},
      {title: 'Almost Always Disagree', value: '5', score: 1},
      {title: 'Always Disagree', value: '6', score: 0},
];

const choicesSet6: ChoicesInterface[] = [
      {title: 'Always Agree', value: '1', score: 8},
      {title: 'Almost Always Agree', value: '2', score: 6},
      {title: 'Occasionally Disagree', value: '3', score: 4},
      {title: 'Frequently Disagree', value: '4', score: 2},
      {title: 'Almost Always Disagree', value: '5', score: 1},
      {title: 'Always Disagree', value: '6', score: 0},
];

const choicesSet7: ChoicesInterface[] = [
      {title: 'Always Agree', value: '1', score: 15},
      {title: 'Almost Always Agree', value: '2', score: 12},
      {title: 'Occasionally Disagree', value: '3', score: 9},
      {title: 'Frequently Disagree', value: '4', score: 4},
      {title: 'Almost Always Disagree', value: '5', score: 1},
      {title: 'Always Disagree', value: '6', score: 0},
];

const choicesSet8: ChoicesInterface[] = [
      {title: 'Strongly disagree', value: '1', score: 5},
      {title: 'Disagree', value: '2', score: 4},
      {title: 'Neither agree nor disagree', value: '3', score: 3},
      {title: 'Agree', value: '4', score: 2},
      {title: 'Strongly agree', value: '5', score: 1}
];

const choicesSet9: ChoicesInterface[] = [
      {title: 'Strongly disagree', value: '1', score: 1},
      {title: 'Disagree', value: '2', score: 2},
      {title: 'Neither agree nor disagree', value: '3', score: 3},
      {title: 'Agree', value: '4', score: 4},
      {title: 'Strongly agree', value: '5', score: 5}
];

const friendShipQuestions: QuestionInterface[] = [
  makeQuestion(1,'It has been easy to relate to others.','select',choicesSet2),
  makeQuestion(2,'I felt isolated from other people.','select',choicesSet3),
  makeQuestion(3,'I had someone to share my feelings with.','select',choicesSet2),
  makeQuestion(4,'I found it easy to get in touch with others when I needed to.','select',choicesSet2),
  makeQuestion(6,'When with other people, I felt separate from them.','select',choicesSet3),
  makeQuestion(7,'I felt alone and friendless.','select',choicesSet3)
];

const marraigeHappinessQuestion = makeQuestion(
      1, 
      'Which describes the degree of happiness of your present marriage?',
      'select',
      choicesSet4
      );

const maritalSatisfactionQuestions: QuestionInterface[] = [
  marraigeHappinessQuestion,
  makeQuestion(2,'Handling Family Finances','select',choicesSet5),
  makeQuestion(3,'Matters of Recreation','select',choicesSet5),
  makeQuestion(4,'Demonstration of Affection','select',choicesSet6),
  makeQuestion(5,'Friends','text',choicesSet5),
  makeQuestion(6,'Sex Relations','select',choicesSet7),
  makeQuestion(7,'Conventionality (right, good, or proper conduct)','select',choicesSet5),
  makeQuestion(8,'Philosophy of Life','select',choicesSet5),
  makeQuestion(9,'Ways of dealing with in-laws','select',choicesSet5),
];

const percSocialSupportQuestions: QuestionInterface[] = [
  makeQuestion(1,'There is a special person who is around when I am in need.','select',choicesSet2),
  makeQuestion(2,'There is a special person with whom I can share my joys and sorrows.','select',choicesSet3),
  makeQuestion(3,'My family really tries to help me.','select',choicesSet2),
  makeQuestion(4,'I get the emotional help and support I need from my family.','select',choicesSet2),
  makeQuestion(5,'I have a special person who is a real source of comfort to me.','select',choicesSet3),
  makeQuestion(6,'My friends really try to help me.','select',choicesSet3),

  makeQuestion(7,'I can count on my friends when things go wrong.','select',choicesSet3),
  makeQuestion(8,'I can talk about my problems with my family.','select',choicesSet3),
  makeQuestion(9,'I have friends with whom I can share my joys and sorrows.','select',choicesSet3),

  makeQuestion(10,'There is a special person in my life who cares about my feelings.','select',choicesSet3),
  makeQuestion(11,'My family is willing to help me make decisions.','select',choicesSet3),
  makeQuestion(12,'I can talk about my problems with my friends.','select',choicesSet3)
];

const postDepSupportQuestions: QuestionInterface[] = [
  makeQuestion(1,'The reception I received when I returned from my deployment made me feel appreciated for my efforts.','select',choicesSet9),
  makeQuestion(2,'The American people made me feel at home when I returned.','select',choicesSet9),
  makeQuestion(3,'When I returned, people made me feel proud to have served my country in the armed forces.','select',choicesSet9),

  makeQuestion(4,'I am carefully listened to and understood by family members or friends.','select',choicesSet9),
  makeQuestion(5,'Among my family or relatives, there is someone who makes me feel better when I am feeling down.','select',choicesSet9),
  makeQuestion(6,'I have problems that I can’t discuss with family or friends.','select',choicesSet8),

  makeQuestion(7,'Among my friends or relatives, there is someone I go to when I need good advice.','select',choicesSet9),
  makeQuestion(8,'People at home just don’t understand what I have been through in the armed forces.','select',choicesSet8),
  makeQuestion(9,'There are people to whom I can talk about my deployment experiences.','select',choicesSet9),

  makeQuestion(10,'The people I work with respect the fact that I am a veteran or service member.','select',choicesSet9),
  makeQuestion(11,'My supervisor understands when I need time to take off to take care of personal matters.','select',choicesSet9),
  makeQuestion(12,'My friends or relatives would lend me money if I needed it.','select',choicesSet9),

  makeQuestion(13,'My friends or relatives would help me move my belongings if I needed to.','select',choicesSet9),
  makeQuestion(14,'When I am unable to attend to daily chores, there is someone who will help me with these tasks.','select',choicesSet9),
  makeQuestion(15,'When I am ill, friends or family members will help out until I am well.','select',choicesSet9)
];



const friendsImage = require('../images/friends-form.png');
const marriageImage  = require('../images/married.jpeg');
const socialImage  = require('../images/Social-Society-Community-Cooperation-Network-1020332.jpg');
const postDepSocialImage = require('../images/post-dep-social.jpg');


interface AssessmentTreeInterface {
  [propName: string]: AssessmentInterface;
}

const assessmentsRaw: AssessmentInterface[] = [
  makeAssessment(1,'Friendship Scale', 0, 24,scoringList1,friendShipQuestions,friendsImage),
  makeAssessment(2,'Marital Satisfaction', 2, 158,scoringList2,maritalSatisfactionQuestions,marriageImage),

  makeAssessment(3,'Perceived Social Support', 7, 84,scoringList2,percSocialSupportQuestions, socialImage),
  makeAssessment(4,'Post Deployment Social Support', 15, 75,scoringList4,postDepSupportQuestions,postDepSocialImage)

]

const normalData = normalize(assessmentsRaw,assessmentListSchema);

export const assessments: AssessmentTreeInterface = normalData.entities.assessment;

export const assessmentIds = normalData.result;




