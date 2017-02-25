import AppBarPage from '../components/AppBarPage';
export default {
  getComponent (nextState, cb) {
    console.log('quick Load comp called');
    cb(null, AppBarPage);
  },

  getChildRoutes (partialNextState, cb) {
    cb(null, [
      System.import('./indexRoute').then((comp: any) => comp.default)
    ]);
  }
};
