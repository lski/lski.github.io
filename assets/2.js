webpackJsonp([2],{45:/*!*******************************************!*\
  !*** ../~/react-router-dom/HashRouter.js ***!
  \*******************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(/*! react */0),u=r(s),f=n(/*! prop-types */1),c=r(f),l=n(/*! history/createHashHistory */44),p=r(l),h=n(/*! react-router */2),d=function(e){function t(){var n,r,i;o(this,t);for(var s=arguments.length,u=Array(s),f=0;f<s;f++)u[f]=arguments[f];return n=r=a(this,e.call.apply(e,[this].concat(u))),r.history=(0,p.default)(r.props),i=n,a(r,i)}return i(t,e),t.prototype.render=function(){return u.default.createElement(h.Router,{history:this.history,children:this.props.children})},t}(u.default.Component);d.propTypes={basename:c.default.string,getUserConfirmation:c.default.func,hashType:c.default.oneOf(["hashbang","noslash","slash"]),children:c.default.node},t.default=d}});