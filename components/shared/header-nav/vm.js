"use strict";!function(e){"function"==typeof define&&define.amd&&define(["knockout","text!./view.html"],e)}(function(e,t){function i(t){this.route=e.observable(t.route||""),this.route.subscribe(function(e){e&&"Navigate:"!==e&&window.location.assign(e)})}return{viewModel:i,template:t}});
//# sourceMappingURL=../../../maps/components/shared/header-nav/vm.js.map
