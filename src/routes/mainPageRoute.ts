
import AppBarPage from '../components/AppBarPage';

export default {
  path: 'main',
  getComponent (nextState, cb) {
    cb(null, AppBarPage);
  },
  getChildRoutes (partialNextState, cb) {
    //require.ensure([], function (require) {
      cb(null, [
        System.import('./homeRoute'),
      ]);
    //});
  }
};
