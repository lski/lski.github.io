"use strict";define(["lib/request","lib/url"],function(e,r){var n={login:function(n,t){return e.post(r.resolveApi("/token"),"grant_type=password&username="+n+"&password="+t,{headers:{"content-type":"application/x-www-form-urlencoded"}})}};return n});
//# sourceMappingURL=../maps/app/data-context-auth.js.map
