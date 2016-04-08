"use strict";!function(e){"function"==typeof define&&define.amd&&define(["knockout","knockout-mapping","text!./view.html","module","app/data-context-blog","lib/auth","lib/url","lib/alerts","vendor/lski-modal","lib/knockout-bindings-ext","lib/knockout-bindings-datetime","lib/knockout-bindings-richText","lib/knockout-bindings-iframe"],function(n,o,t,i,l,s,u,r,a){return e(n,o,t,i.config(),l,s,u,r,a)})}(function(e,n,o,t,i,l,s,u,r){function a(o){var t=this;t.loaded=e.observable(!1),t.model=e.observable(),t.notFound=e.observable(),t.updateRunning=e.observable(!1),t.updateListingRunning=e.observable(!1),t.fileBrowser=e.observable(null),l.authenticated()||l.loginRedirect(),i.blogs.getById(o.id).done(function(e){e?t.model(new d(e)):t.notFound(!0),t.loaded(!0)}),t.submit=function(e){t.updateRunning(!0),setTimeout(function(){var e=arguments,o=n.toJS(t.model());i.blogs.update(o).then(function(){s.load(s.resolve("#blog/",o.id)),u.info("Article successfully saved")},function(){console.log("Error occurred",e),u.info("There was an saving the article")}).then(function(){t.updateRunning(!1)})},200)},t.toggleShowInListings=function(){var e=t.model(),n=!e.showInResults();t.updateListingRunning(!0),i.blogs.updateListed(e.id(),n).then(function(){e.showInResults(n),u.success("This is article is now "+(n?"visible":"hidden")+" in listings. You do not need to save the article","Success")},function(e){console.log(e)}).then(function(){t.updateListingRunning(!1)})},t.showFileBrowser=function(){var e=document.querySelector("#fileBrowser");t.fileBrowser({src:s.resolve(c),onload:function(){(this.contentWindow||this).Run({apiUrl:s.resolveApi(""),token:l.token})}}),r.show(e),e.addEventListener("file-selected",function(){alert("hello")})}}function d(o){n.fromJS(o,{},this),this.cancelLink=o.viewLink,this.newLabel=e.observable(null)}var c=t.browserUrl||"/browser/index.htm";return d.prototype.addLabel=function(){var e=this.newLabel();e&&(this.labels.push({id:null,value:e.toLowerCase()}),this.newLabel(null))},d.prototype.removeLabel=function(e){this.labels.remove(e)},{viewModel:a,template:o}});
//# sourceMappingURL=../../../maps/components/blog/edit-page/vm.js.map
