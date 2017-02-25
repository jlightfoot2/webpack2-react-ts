import BlankPage from '../BlankPage.js';
export default  {

	getComponent(nextState,cb){
		console.log('blank page called 1')
		cb(null,BlankPage);
	},
  	getChildRoutes(partialNextState, cb) {
      	cb(null, [
        	require('./introRoute.js'),
      	])

  	}	
}