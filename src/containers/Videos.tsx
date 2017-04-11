import VideosPager from '../components/VideosPager';
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

const stateToProps = (state,ownProps) => {
  return {
    videos: videoIds.map(id => videos[id]),
    cols: getCols(state.device),
    title: 'Alcohol & Drugs Videos',
    resultsPerPage: 8,
    page: typeof ownProps.params.pageOffset !== 'undefined' ? parseInt(ownProps.params.pageOffset) : 0
  }
}
const dispatchToProps = (dispatch) => {
  return {
    next: (currentPage: number) => {
       let nextPage = currentPage + 1;
       dispatch(push('/main/videos/' + nextPage));
    },
    prev: (currentPage: number) => {
       let prevPage = currentPage - 1;
       dispatch(push('/main/videos/' + prevPage));
    }
  }
}
export default connect(stateToProps,dispatchToProps)

(VideosPager);