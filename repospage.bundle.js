(self.webpackChunklski_web_client=self.webpackChunklski_web_client||[]).push([[236],{7986:function(t,e,r){"use strict";r.d(e,{d:function(){return c}});var n=r(5944);r(9748);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=function(t){return(0,n.tZ)("a",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({target:"_blank",rel:"noreferrer noopener"},t))}},9490:function(t,e,r){"use strict";r.r(e),r.d(e,{ReposPage:function(){return v}});var n=r(5944),i=(r(9748),r(4121)),o=r(8958),c=r(4636),l=r(4618),u=r(1850),a=r(3746),s=r(9875),f=r(5170),d=r(1268),h=r(4998),p=r(7986),m=r(7015);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g={name:"18d42vu",styles:"max-width:1200px;width:100%;margin:0 auto;flex-grow:1;display:flex;flex-direction:column"},v=function(){var t=b((0,u.v)(100),3),e=t[0],r=t[1],s=t[2];return(0,n.BX)(n.HY,{children:[(0,n.tZ)(i.V,{children:(0,n.tZ)(o.l,{children:"Public Repositories"})}),(0,n.BX)("div",{css:g,children:[(0,n.tZ)(c.gO,{children:(0,n.tZ)(c.Tp,{children:"A list of the public repositories that are currently active, so go check them out."})}),r?(0,n.tZ)(a.a,{centered:!0}):e?(0,n.tZ)(j,{repos:e}):s&&(0,n.tZ)(l.i,{children:s})]})]})},w={name:"7xmnw2",styles:"font-style:italic;margin-bottom:0.5rem"},O={name:"1ofkr2",styles:"padding:0 1rem 1rem 1rem"},j=function(t){var e=t.repos,r=(0,m.a)("(max-width: 500px)"),i=(0,m.a)("(max-width: 800px)");return null==e?null:0===e.totalCount?(0,n.tZ)(c.gO,{children:(0,n.tZ)(c.Tp,{children:"No articles were found"})}):(0,n.BX)("div",{css:O,children:[(0,n.BX)(s.n,{css:w,children:["Showing ",e.items.length," of ",e.totalCount]}),(0,n.tZ)(f._,{columns:r?1:i?2:3,children:e.items.map((function(t){return(0,n.tZ)(p.d,{href:t.link,children:(0,n.BX)(d.Zb,{children:[(0,n.tZ)(d.Ol,{children:t.title}),(0,n.tZ)(d.eW,{children:t.description}),(0,n.tZ)(d.iR,{children:(0,h.w)(t.lastUpdate)})]})},t.id)}))})]})};e.default=v},1850:function(t,e,r){"use strict";r.d(e,{v:function(){return a}});var n=r(4797),i=r(3716),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=arguments.length>1?arguments[1]:void 0,r="".concat(i.h,"/repo?size=").concat(t),n=e?{signal:e}:void 0;return fetch(r,n).then((function(t){if(t.ok)return t.json();throw console.log("fetch error",t.url,t.status,t.statusText),new Error("There was an error loading repositories, please try again later")}))},c=function(t){return{id:t.id,title:t.name,description:t.description,link:t.html_url,lastUpdate:new Date(t.updated_at)}},l=function(t){return function(e){return{totalCount:e.total_count,items:(r=t,n=e.items.filter((function(t){return!/lski\.github\.io/.test(t.name)})).map(c),n.length<=r?n:n.slice(0,r))};var r,n}},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return function(e){return o(t+1,e).then(l(t))}},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return(0,n.i)(u(t))}}}]);
//# sourceMappingURL=repospage.bundle.js.map