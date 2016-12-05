"use strict";define(["text!./view.html","knockout","app/config","app/data-context-labels"],function(t,e,i,a){function l(){var t=this;this.email=i.contact,this.emailLink="mailto:"+this.email,this.labels=e.observableArray([]),a.labels.getSummaries().then(function(e){t.labels(e)})}return{viewModel:l,template:t}});
//# sourceMappingURL=../../../maps/components/shared/side-bar/vm.js.map
