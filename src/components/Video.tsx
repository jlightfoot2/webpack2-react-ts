
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {connect} from 'react-redux';

interface MyProps {
  appBarTitle(title: string): any;
  video: any;
}

interface MyState {

}
class videoViewer extends React.Component<MyProps, MyState> {
  componentWillMount () {
    var {video} = this.props;
    this.props.appBarTitle && this.props.appBarTitle(video.title);
  }
  render () {
    let isOnline = true;
    var {video} = this.props;
    var onlineVideo = <video  src={video.src} poster={video.img} controls>
      Sorry, your browser doesn't support embedded videos.
    </video>;

    var offlineVideo = 'This video is not available while offline';

    var content = typeof isOnline === 'undefined' || isOnline ? onlineVideo : offlineVideo;
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default videoViewer;
