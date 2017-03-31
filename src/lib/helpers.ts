
console.log(__dirname);
function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}


export const asynRouteMaker = (config: any = {}) => {

  return (route: string,component: Promise<any>, childRoutes: any[] =[],indexComponent: any = null) => {
      return {
         path: route,
         getComponent(location, cb) {
            component.then(loadRoute(cb)).catch(errorLoading);
         },
        childRoutes,
       
        indexRoute: indexComponent ? { component: indexComponent} : null
      }
  }
}

export const syncRoute = (route: string,component: any, childRoutes: any[] =[],indexComponent: any = null) => {
  return {
       path: route,
       component: component,
       childRoutes,
       
       indexRoute: indexComponent ? { component: indexComponent} : null
  }
}