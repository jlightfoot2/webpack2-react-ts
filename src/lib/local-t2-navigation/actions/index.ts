export const CONFIG_T2_NAVIGATION = 'CONFIG_T2_NAVIGATION';
export const T2_REPLACE_CHILD = 'T2_NAVIGATION_REPLACE_CHILD';
export const T2_REPLACE_CHILDREN = 'T2_NAVIGATION_REPLACE_CHILDREN';

export const init = (config) => {
  return {
    type: CONFIG_T2_NAVIGATION,
    config
  };
};
export const replaceChildRoute = (parentRoute,route) => {
  return {
    type: CONFIG_T2_NAVIGATION,
    parentRoute,
    route
  };
};

export const replaceChildRoutes = (parentRoute,routes) => {
  return {
    type: T2_REPLACE_CHILDREN,
    parentRoute,
    routes
  };
};
export default {
  CONFIG_T2_NAVIGATION,
  T2_REPLACE_CHILD,
  T2_REPLACE_CHILDREN,
  init
};
