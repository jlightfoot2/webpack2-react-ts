import {navigationCreateMiddleware}  from '../';
import {CONFIG_T2_NAVIGATION}  from '../actions';
let testConfig = {
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
  '9': {
    id: '9',
    name: 'Videos',
    routes: [new RegExp('/main/videos/[0-9]*')],
    level: 1,
    pathname: '/main/videos/',
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
    routes: [new RegExp('/main/video/[0-9]+')],
    level: 2,
    pathname: '/main/video',
    childrenIds: [],
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


describe('Middleware Testing', () => {
  it('should return correct initialization event data)', () => {
      const storeMock = {} as any;
      storeMock.dispatch = jest.fn();
      const blankNext = jest.fn();

       navigationCreateMiddleware(testConfig)(storeMock)(blankNext);
       const callArgs = storeMock.dispatch.mock.calls[0]; 
       //callArgs == The arguments past to storeMock.dispatch
       let action = callArgs[0].type
       let config = callArgs[0].config
       expect(action).toEqual(CONFIG_T2_NAVIGATION);
       //based on testConfig nodes should link to correct parents
       expect(config.tree['8'].parentId).toEqual('6');
       expect(config.tree['5'].parentId).toEqual('9');
       expect(config.tree['6'].parentId).toEqual('2');
  })
})




