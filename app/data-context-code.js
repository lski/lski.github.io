"use strict";define(["lib/request","lib/url","underscore"],function(e,t,n){console.log("app/data-context");var i={get:function(i){return i=i||20,e.get(t.resolveApi("/api/repo?size="+i)).then(function(e){return n.chain(e.items).reject(function(e){return/(^-DEPRECATED-|lski\.github\.io)/i.test(e.name)}).map(function(e){return{id:e.id,title:e.name,body:e.description,viewLink:e.html_url,target:"_blank",displayDate:e.updated_at,showInResults:!0}}).value()})}};return{repos:i}});
//# sourceMappingURL=../maps/app/data-context-code.js.map
