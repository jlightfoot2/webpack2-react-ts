import * as React from 'react';
import AppBarPage from '../components/AppBarPage'
import categoriesData from '../res/data/categories';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
interface Props {
  appBarTitle(msg: string): any;
  categories: any[];
  pathOnTouchTap(path:string): any
}

interface State {
 
}

class AppContainer extends React.Component<Props, State>{
  render(){
    const {categories,pathOnTouchTap} = this.props;
    return <AppBarPage categories={categories} pathOnTouchTap={pathOnTouchTap}>
              {this.props.children}
           </AppBarPage>
  }
}

const stateToProps = (state) => {
  return {
    categories: categoriesData
  }
}
const dispatchToProps = (distatch,ownProps) => {
  return {
    pathOnTouchTap: (path) => {
      return (event) => {
        event.preventDefault();
        event.stopPropagation();
        distatch(push(path));
      }
    }
  }
}
export default connect(
                  stateToProps,
                  dispatchToProps
                )(AppContainer);
