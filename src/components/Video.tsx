
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {flexParentRowCenterStyle, flexRowItemStyle} from './commonStyles'

interface MyProps {
  appBarTitle(title: string): any;
  video: any;
  screenWidth?: number;
}

interface MyState {

}
class videoViewer extends React.Component<MyProps, MyState> {

  public static defaultProps: Partial<MyProps> = {
      screenWidth: 400
  };

  componentWillMount () {
    var {video} = this.props;
    this.props.appBarTitle && this.props.appBarTitle(video.title);
  }
  render () {
    let isOnline = true;
    var {video,screenWidth} = this.props;

    var onlineVideo = <video width={screenWidth} src={video.src} poster={video.img} controls>
      Sorry, your browser doesn't support embedded videos.
    </video>;

    var offlineVideo = 'This video is not available while offline';

    var content = typeof isOnline === 'undefined' || isOnline ? onlineVideo : offlineVideo;
    return (
      <div style={flexParentRowCenterStyle as any}>
        <div style={flexRowItemStyle as any}>
        {content}
        </div>
      </div>
    );
  }
}


export default videoViewer;
