"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(){function e(){try{var e=document.querySelector("script[data-app]"),r=e&&e.getAttribute("data-app"),o=r&&JSON.parse(r)||{};return o}catch(a){throw new Error("There was an error extracting the settings for the application")}}function r(e){e=e||{};for(var o=1;o<arguments.length;o++){var a=arguments[o];if(a)for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)){var t=a[n];null===t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))||t instanceof Date||t instanceof Array?e[n]=t:e[n]=r(e[n],t)}}return e}function o(){return a(document.querySelector("html"),"ielt9")}function a(e,r){return e.classList?e.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(e.className)}var n=o(),t=e(),i={baseUrl:"./",urlArgs:"v=20160414",paths:{text:"vendor/text",underscore:"vendor/underscore",moment:"vendor/moment.min",ckeditor:"vendor/ckeditor/ckeditor",highlight:n?"lib/highlight-shim":"vendor/ckeditor/plugins/codesnippet/lib/highlight/highlight.pack"},shim:{ckeditor:{exports:"CKEDITOR"},highlight:{exports:"hljs"}},globals:{email:"lee.cooper@lski.uk"},config:r({"lib/auth":{urls:{logout:"#logout",login:"#login"}},"lib/url":{root:"/"},"lib/router":{routes:[{url:"",params:{page:"home-page"}},{url:"contact",params:{page:"contact-page"}},{url:"logout",params:{page:"logout-page"}},{url:"login",params:{page:"login-page"}},{url:"about",params:{page:"about-page"}},{url:"blogs/:label:",params:{page:"blog-page"}},{url:"blog/edit/{id}",params:{page:"blog-edit-page"}},{url:"blog/new",params:{page:"blog-create-page"}},{url:"blog/{id}",params:{page:"blog-details-page"}},{url:"code",params:{page:"code-page"}},{url:"privacy",params:{page:"privacy-page"}}],components:[{name:"home-page",args:{require:"components/home-page/vm"}},{name:"logout-page",args:{require:"components/logout-page/vm"}},{name:"login-page",args:{require:"components/login-page/vm"}},{name:"contact-page",args:{require:"components/contact-page/vm"}},{name:"about-page",args:{require:"components/about-page/vm"}},{name:"code-page",args:{require:"components/code/index-page/vm"}},{name:"blog-page",args:{require:"components/blog/index-page/vm"}},{name:"blog-hidden-page",args:{require:"components/blog/hidden-blog-page/vm"}},{name:"blog-details-page",args:{require:"components/blog/details-page/vm"}},{name:"blog-edit-page",args:{require:"components/blog/edit-page/vm"}},{name:"blog-create-page",args:{require:"components/blog/create-page/vm"}},{name:"header-nav",args:{require:"components/shared/header-nav/vm"}},{name:"footer-nav",args:{require:"components/shared/footer-nav/vm"}},{name:"summary",args:{template:{require:"text!components/shared/summary/view.html"}}},{name:"quick-links",args:{template:{require:"text!components/shared/quick-links/view.html"}}},{name:"side-bar",args:{require:"components/shared/side-bar/vm"}},{name:"privacy-page",args:{template:{require:"text!components/privacy/view.html"}}},{name:"file-browser",args:{require:"components/shared/file-browser/vm"}}]},"components/shared/file-browser/vm":{browserUrl:"/browser/index.htm"}},t)};t.debug&&(t.debug.log&&(i.config["lib/router"].log=function(){console.log.apply(console,arguments)}),t.debug.vm&&require(["lib/knockout-bindings-debug"]),t.debug.mock&&(i.map={"*":{"lib/request":"app/mock/request"},"app/mock/request":{"lib/request":"lib/request"}})),require.config(i),define("root",[],function(){return window}),define("knockout",[],function(){return ko}),define("knockout-mapping",["knockout"],function(){return ko.mapping}),define("lib/knockout-bindings-ext",[],function(){}),define("crossroads",[],function(){return crossroads}),define("hasher",[],function(){return hasher}),define("globals",[],function(){return i.globals}),require(["lib/router"])}();
//# sourceMappingURL=../maps/app/config.js.map
