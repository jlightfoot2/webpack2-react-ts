import Videos from '../components/Videos';
import {videos, videoIds} from '../res/data/video';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state) => {
  return {
    videos: videoIds.map(id => videos[id])
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Videos);