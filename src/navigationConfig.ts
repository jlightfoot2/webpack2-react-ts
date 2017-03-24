export default {
  '1': {
    id: '1',
    name: 'Home',
    routes: ['/main/home', '/', '/intro'],
    pathname: '/main/home',
    level: 0,
    childrenIds: [],
    parentId: null
  },
  '2': {
    id: '2',
    name: 'Assessments',
    routes: ['/main/assessments'],
    level: 1,
    pathname: '/main/assessments',
    childrenIds: ['6']
  },
  '3': {
    id: '3',
    name: 'Videos',
    routes: ['/main/videos'],
    level: 1,
    pathname: '/main/videos',
    childrenIds: ['5']
  },
  '4': {
    id: '4',
    name: 'Library',
    routes: ['/main/library'],
    pathname: '/main/library',
    level: 1,
    childrenIds: []
  },
  '7': {
    id: '7',
    name: 'Resources',
    routes: ['/main/resources'],
    pathname: '/main/resources',
    level: 1,
    childrenIds: []
  },
  '5': {
    id: '5',
    name: 'Video',
    routes: [new RegExp('/main/videos/[0-9]+')],
    level: 2,
    pathname: '/main/video',
    childrenIds: []
  },
  '6': {
    id: '6',
    name: 'Assessment',
    routes: [new RegExp('/main/assessment/[0-9]+')],
    level: 2,
    pathname: '/main/assessment',
    childrenIds: ['8']
  },
  '8': {
    id: '8',
    name: 'Assessment Result',
    routes: [new RegExp('/main/assessmentresult/[0-9]+')],
    level: 2,
    pathname: '/main/assessmentresult',
    childrenIds: []
  }
};
