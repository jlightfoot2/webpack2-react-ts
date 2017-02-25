import Main from '../Main.tsx';
export default {
  getComponent (nextState, cb) {
    console.log('quick Load comp called');
    cb(null, Main);
  },

  getChildRoutes (partialNextState, cb) {
    cb(null, [
      require('./introRoute.js').default,
      require('./defaultRoute.js').default,
      require('./splashRoute.js').default
    ]);
  }
};
