import {LOCATION_CHANGE} from 'react-router-redux';
import {CONFIG_T2_NAVIGATION, T2_REPLACE_CHILD, T2_REPLACE_CHILDREN} from '../actions';

/**
 * Eventually this data will come from api
 * @type {[type]}
 */
var navigationIds = [];
var navigationTree = {};
var defaultNav = {
  id: '-1',
  name: 'Default',
  routes: [],
  level: 1,
  pathname: '',
  childrenIds: []
};

const navigatinDefaults = {
  tree: {},
  treeIds: [],
  menus: {
    primary: ''
  },
  paths: {
    current: defaultNav,
    last: null,
    parent: null
  }
};

function findRoute (path) {

  for (var id in navigationIds) {
    var navItem = navigationTree[navigationIds[id]];
    var foundRoute = navHasPath(navItem, path);
    if (foundRoute) {
      return foundRoute;
    }
  }
  return false;
}

function getRouteNodeId(path, cb){
  for (var id in navigationIds) {
    var navItem = navigationTree[navigationIds[id]];
    var foundRoute = navHasPath(navItem, path);
    if (foundRoute) {
      return navigationIds[id];
    }
  }
  return false;
}

function navHasPath (navItem, path) {
  var routes = navItem.routes;
  if (routes.indexOf(path) > -1) {
    return navItem;
  } else {
    for (var j = 0; j < routes.length; j++) {
      var route = routes[j];
      if (route instanceof RegExp) {
        if (route.test(path)) {
          return navItem;
        }
      }
    }
  }
}

function getParent (route,lastRoute) {
  let parent = typeof navigationTree[route.parentId] !== 'undefined' ? {...navigationTree[route.parentId]} : null;
  if(parent && parent.id === lastRoute.id){
    parent = {...parent,pathname: lastRoute.pathname}
  }
  return parent;
}


function paths (state, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      var newRoute = findRoute(action.payload.pathname);
      if (state.current && newRoute && newRoute.id !== state.current.id) {
        return {
          ...state,
          current: {...newRoute, pathname: action.payload.pathname},
          last: state.current,
          parent: getParent(newRoute,state.current)
        };
      }

  }
  return state;
}

export const navigation = (state = navigatinDefaults, action) => {

  switch (action.type) {
    case CONFIG_T2_NAVIGATION:
      navigationTree = action.config.tree;
      navigationIds = action.config.treeIds;
      return {
        ...state,
        tree: action.config.tree || state.tree,
        treeIds: action.config.treeIds || state.treeIds,
        paths: paths(state.paths, action)
      };
    case LOCATION_CHANGE:
      if (action.payload.pathname !== state.paths.current) {
        return {...state, paths: paths(state.paths, action)};
      }
      /* meh
    case T2_REPLACE_CHILD:
      if (parent_id = getRouteNodeId(action.parentRoute)) {
          const parentRoute = navigationTree[parent_id];
          const childRoute = action.route; // interface{ routes: string[], name: string }
          const routeId = '_' + childRoute.routes[0];
          const replaceRoute = {
            id: routeId,
            name: childRoute.name
            routes: childRoute.routes,
            level: parentRoute.level + 1,
            pathname: childRoute.routes[0],
            childrenIds: []
          }
          navigationTree[replaceRoute.id]
          if(!parentRoute.childrenIds.find(replaceRoute.id)){
            parentRoute.childrenIds.push(replaceRoute.id);
          }
          return {
            ...state,
            tree: {...navigationTree}
          };
      }
    case T2_REPLACE_CHILDREN:
      */

  }
  return state;
};

export default navigation;





