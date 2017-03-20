import Video from '../components/Video';
import {videos, videoIds} from '../res/data/video';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps) => {
 // let currentVid = typeof videos[ownProps.params.id] !== 'undefined' ? videos[ownProps.params.id] : null;
  return {
    video: videos[ownProps.params.id]
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Video);