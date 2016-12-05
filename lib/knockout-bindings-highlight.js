"use strict";define(["knockout","highlight"],function(e,t){e.bindingHandlers.highlight={update:function(i,n){var o=e.unwrap(n()),h="code"===i.tagName.toLowerCase()?[i]:i.querySelectorAll("pre code");o&&h.length>0&&setTimeout(function(){for(var e=0,i=h.length;e<i;e++)t.highlightBlock(h[e])},isNaN(o)?1:o)}}});
//# sourceMappingURL=../maps/lib/knockout-bindings-highlight.js.map
