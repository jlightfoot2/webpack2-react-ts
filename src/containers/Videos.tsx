import Videos from '../components/Videos';
import {videos, videoIds} from '../res/data/video';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const getCols = (device) => {
  const width = device.width;
  if(!width){
    return 1;
  }
  if(width > 900){
    return 4;
  }
  if(width > 600){
    return 2;
  }
  return 1
}

const stateToProps = (state) => {
  return {
    videos: videoIds.map(id => videos[id]),
    cols: getCols(state.device)
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Videos);