"use strict";!function(e){"function"==typeof define&&define.amd&&define(["lib/request","lib/url"],e)}(function(e,n){var t={login:function(t,r){return e.post(n.resolveApi("/token"),"grant_type=password&username="+t+"&password="+r,{headers:{"content-type":"application/x-www-form-urlencoded"}})}};return t});
//# sourceMappingURL=../maps/app/data-context-auth.js.map
