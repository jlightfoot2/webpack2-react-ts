webpackJsonp([6],{"./src/components/Assessments.tsx":function(e,t,s){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function n(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(n.prototype=s.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=s("./node_modules/react/react.js"),r=s("./node_modules/material-ui/GridList/index.js"),i=s("./node_modules/react-router/es/index.js"),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.componentWillMount=function(){this.props.appBarTitle("Assessments")},t.prototype.componentWillReceiveProps=function(e){this.props.appBarTitle("Assessments")},t.prototype.render=function(){var e=this.props,t=e.assessments,s=(e.pathOnTouchTap,e.cols);return o.createElement(r.GridList,{cols:s,cellHeight:200},t.map(function(e){return o.createElement(i.Link,{to:"/main/assessment/"+e.id,key:e.image},o.createElement(r.GridTile,{title:e.title},o.createElement("img",{src:e.image})))}))},t}(o.Component);t.default=c},"./src/containers/Assessments.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("./src/components/Assessments.tsx"),o=s("./src/res/data/assessments.ts"),r=s("./node_modules/react-redux/es/index.js"),i=function(e){var t=e.width;return t?t>900?4:t>600?2:1:1},c=function(e){return console.log(o.assessments),{assessments:o.assessmentIds.map(function(e){return o.assessments[e]}),cols:i(e.device)}},a=function(e){return{}};t.default=r.connect(c,a)(n.default)}});