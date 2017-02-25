
import Main from '../Main.tsx';

export default {
  path: 'main',
  getComponent (nextState, cb) {
    cb(null, Main);
  },
  name: 'main',
  getChildRoutes (partialNextState, cb) {
    //require.ensure([], function (require) {
      cb(null, [
        require('./introRoute.js').default,
        require('./homeRoute.js').default,
        require('./directorMessageRoute.js').default,
        require('./workbookRoute.js').default,
        require('./notesRoute.js').default,
        require('./debugRoute.js').default
      ]);
    //});
  }
};
