webpackJsonp([3],{39:/*!*******************************************!*\
  !*** ../~/react-router-dom/HashRouter.js ***!
  \*******************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(/*! react */0),p=r(a),u=n(/*! history/createHashHistory */20),c=r(u),f=n(/*! react-router */1),l=function(e){function t(){var n,r,i;o(this,t);for(var a=arguments.length,p=Array(a),u=0;u<a;u++)p[u]=arguments[u];return n=r=s(this,e.call.apply(e,[this].concat(p))),r.history=(0,c.default)(r.props),i=n,s(r,i)}return i(t,e),t.prototype.render=function(){return p.default.createElement(f.Router,{history:this.history,children:this.props.children})},t}(p.default.Component);l.propTypes={basename:a.PropTypes.string,getUserConfirmation:a.PropTypes.func,hashType:a.PropTypes.oneOf(["hashbang","noslash","slash"]),children:a.PropTypes.node},t.default=l}});