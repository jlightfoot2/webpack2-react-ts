import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {GridList, GridTile} from 'material-ui/GridList';
import { Link, browserHistory } from 'react-router';

import Subheader from 'material-ui/Subheader';
import {flexParentRowStyle, flexRowItemStyle} from './commonStyles';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import IconButton from 'material-ui/IconButton';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import ArrowNext from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowPrevious from 'material-ui/svg-icons/navigation/arrow-back';


interface MyProps {
  appBarTitle(title: string): any;
  videos: any[];
  resultsPerPage: number;
  page: number;
  next(currentPage: any): any;
  prev(currentPage: any): any;
  cols: number;
  title: string;
}

interface MyState {
  pageItems: any[];
  offset: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
const getNavigation = (previusButton,nextButton) => {
  return (<div style={flexParentRowStyle as any}>
                     <div style={flexRowItemStyle as any}>{previusButton}</div>

                     <div style={flexRowItemStyle as any}>{nextButton}</div>
          </div>);
}
export default class VideosPager extends React.Component<MyProps, MyState> {
  public static defaultProps: Partial<MyProps> = {
      resultsPerPage: 6,
      page: 0
  };
  constructor(props){
    super(props)
    let offset = props.page * props.resultsPerPage;
    this.state = this.calculateState(props);
  }

  calculateState = (props) => {
    let offset = props.page * props.resultsPerPage;
    return {
      hasPrevious: props.page > 0,
      hasNext: (offset + props.resultsPerPage) < props.videos.length,
      offset: offset,
      pageItems: props.videos.slice(offset,offset + props.resultsPerPage)
    }
  }
  componentWillMount(){
      this.props.appBarTitle && this.props.appBarTitle(this.props.title)
  }
  componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps));
      this.props.appBarTitle && this.props.appBarTitle(this.props.title)
  }

  render(){

  var {cols,next,prev} = this.props;
  const pagerClickWrapper = (action) => {
    return (event) => {
      action(this.props.page);
    }
  }

      const previusButton =  <IconButton disabled={!this.state.hasPrevious}  onTouchTap={pagerClickWrapper(prev)}><ArrowPrevious /></IconButton>;
      const nextButton = <IconButton disabled={!this.state.hasNext}  onTouchTap={pagerClickWrapper(next)}><ArrowNext /></IconButton>;
      const navigation = getNavigation(previusButton,nextButton);
    return (
    <div>
      {navigation}
      <GridList
        cols={cols}
      >

        {this.state.pageItems.map((tile) => (

          <Link key={tile.id} to={'/main/video/'+tile.id}  cols={tile.featured ? 1 : 1} >
            <GridTile
              
              
              title={tile.title}
            >
              <img src={tile.img} />
            </GridTile>
          </Link>
        
         
        ))}
      </GridList>
      {navigation}
    </div>);
  }

};
