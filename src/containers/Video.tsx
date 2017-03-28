import Video from '../components/Video';
import {videos, videoIds, VideoInterface} from '../res/data/video';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps): {video: VideoInterface, screenWidth?: number} => {
  return {
    video: videos[ownProps.params.id],
    screenWidth: state.device.width < 400 ? state.device.width : 400
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Video);