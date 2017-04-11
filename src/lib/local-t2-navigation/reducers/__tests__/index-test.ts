import {paths, navigation, navigatinDefaults} from '../';
import {init} from '../../actions/';
import {navigationCreateMiddleware}  from '../../';
import { push ,LOCATION_CHANGE} from 'react-router-redux';


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

const fakePushEvent = (pathname) => {
  return {
    type: LOCATION_CHANGE,
    payload: {
      action: 'push',
      pathname
    }
  }
}
describe('Reducer Tests', () => {
  it('Test navigation logic when traversing config tree', () => {
      const storeMock = {} as any;
      storeMock.dispatch = jest.fn();
      const blankNext = jest.fn();
 
       navigationCreateMiddleware(testConfig)(storeMock)(blankNext);
       const callArgs = storeMock.dispatch.mock.calls[0]; 
       //callArgs == The arguments past to storeMock.dispatch
       let action = callArgs[0].type
       let config = callArgs[0].config
   
    let currentState =  navigation(undefined, {} as any)
    expect(navigatinDefaults).toEqual(currentState);
    //init tree
    currentState =  navigation(undefined,init(config));


    currentState =  navigation(currentState, fakePushEvent('/main/home'));
    currentState =  navigation(currentState, fakePushEvent('/main/videos/1'))

    expect(currentState.paths.last.id).toEqual('1');
    expect(currentState.paths.current.id).toEqual('9');

    //go to page 2 of vidoes and check for correct "current and last states" 
    currentState =  navigation(currentState, fakePushEvent('/main/videos/2'))

    expect(currentState.paths.last.id).toEqual('9');
    expect(currentState.paths.last.pathname).toEqual('/main/videos/1');
    expect(currentState.paths.current.id).toEqual('9');
    expect(currentState.paths.current.pathname).toEqual('/main/videos/2');
    
    //go to child path "vidoe details for video 17"
    currentState =  navigation(currentState, fakePushEvent('/main/video/17'))
    expect(currentState.paths.last.id).toEqual('9');
    expect(currentState.paths.last.pathname).toEqual('/main/videos/2');
    expect(currentState.paths.current.id).toEqual('5');
    expect(currentState.paths.parent.id).toEqual('9');

    //go back to videos page 2 route then to page 1
    currentState =  navigation(currentState, fakePushEvent('/main/videos/2'))
    currentState =  navigation(currentState, fakePushEvent('/main/videos/1'))
    expect(currentState.paths.last.id).toEqual('9');
    expect(currentState.paths.last.pathname).toEqual('/main/videos/2');
    expect(currentState.paths.current.id).toEqual('9');
    expect(currentState.paths.current.pathname).toEqual('/main/videos/1');
    // then go to child path "vidoe details for video 34"
    currentState =  navigation(currentState, fakePushEvent('/main/video/34'))

    expect(currentState.paths.last.id).toEqual('9');
    expect(currentState.paths.last.pathname).toEqual('/main/videos/1');
    expect(currentState.paths.current.id).toEqual('5');
    expect(currentState.paths.current.pathname).toEqual('/main/video/34');

  })
});

