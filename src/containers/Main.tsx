import * as React from 'react';
import AppBarPage from '../components/AppBarPage'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import MenuDrawer from '../components/MenuDrawer';
import MenuItem from 'material-ui/MenuItem';
import categoriesData,{mainMenu} from '../res/data/categories';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import Divider from 'material-ui/Divider';

interface Props {
  appBarTitle(msg: string): any;
  menuItems: any[];
  categories: any[];
  pathOnTouchTap(path:string): any
  appConfig: any;
  parentRoute: any;
}

interface State {
 
}

const createMenuItems = (categories,pathOnTouchTap) => {

  const secretTap = (path) => {
    const tapMax = 3;
    let tapCount = 0;
    return (event) => {
      tapCount++;
      if(tapCount >= tapMax){
        pathOnTouchTap(path)(event);
      }
    }
  }

  return(
        <MenuDrawer pathOnTouchTap={pathOnTouchTap}>
          {categories.map(cat => {
   
            switch(cat.type){
              case 'divider':
                return <Divider />;
              case 'link':
                return <MenuItem key={cat.item.id} primaryText={cat.item.title} onTouchTap={pathOnTouchTap(cat.item.path)} />;
              case 'link_absolute':
                return <MenuItem key={cat.item.id} primaryText={cat.item.title} href={cat.item.path} />;
            }

          })}
          
          <MenuItem innerDivStyle={{color: 'grey'}} key='version_num' primaryText={'v1.0.0'} onTouchTap={secretTap('debug')} />
        </MenuDrawer>
          );
}

const backIcon = (path) => {
  return <Link to={path}><IconButton><ArrowBack /></IconButton></Link>
}

class AppContainer extends React.Component<Props, State>{
  render(){
    
    const {menuItems, categories, pathOnTouchTap,appConfig,parentRoute} = this.props;

    const leftIcon = !parentRoute ? createMenuItems(menuItems,pathOnTouchTap) : backIcon(parentRoute.pathname) ;
    return <AppBarPage leftIcon={leftIcon} categories={categories} pathOnTouchTap={pathOnTouchTap} appConfig={appConfig} >
              {this.props.children}
           </AppBarPage>
  }
}

const stateToProps = (state) => {
  return {
    menuItems: mainMenu,
    categories: categoriesData,
    appConfig: {
      parentSite: 'http://afterdeployment.dcoe.mil'
    },
    parentRoute: state.navigation.paths.parent
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
