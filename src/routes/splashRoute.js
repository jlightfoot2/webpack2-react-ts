import SplashPage from '../SplashPage';

export default {
	path: 'splash',
  name: 'splash',
	getComponent(nextState,cb){
		cb(null,SplashPage);
	}
}