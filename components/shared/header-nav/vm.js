"use strict";define(["knockout","text!./view.html","lib/url"],function(t,e,i){function o(e){this.route=t.observable(e.route||""),this.route.subscribe(function(t){t&&"Navigate:"!==t&&i.load(t)})}return{viewModel:o,template:e}});
//# sourceMappingURL=../../../maps/components/shared/header-nav/vm.js.map
