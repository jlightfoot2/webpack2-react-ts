webpackJsonp([4],{"./src/components/Video.tsx":function(e,t,o){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o("./node_modules/react/react.js"),s=o("./src/components/commonStyles.ts"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.componentWillMount=function(){var e=this.props.video;this.props.appBarTitle&&this.props.appBarTitle(e.title)},t.prototype.render=function(){var e=!0,t=this.props,o=t.video,r=t.screenWidth,i=n.createElement("video",{width:r,src:o.src,poster:o.img,controls:!0},"Sorry, your browser doesn't support embedded videos."),c="This video is not available while offline",d="undefined"==typeof e||e?i:c;return n.createElement("div",{style:s.flexParentRowCenterStyle},n.createElement("div",{style:s.flexRowItemStyle},d))},t}(n.Component);i.defaultProps={screenWidth:400},t.default=i},"./src/containers/Video.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("./src/components/Video.tsx"),n=o("./src/res/data/video.ts"),s=o("./node_modules/react-redux/es/index.js"),i=function(e,t){return{video:n.videos[t.params.id],screenWidth:e.device.width<400?e.device.width:400}},c=function(e){return{}};t.default=s.connect(i,c)(r.default)}});