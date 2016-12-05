"use strict";define(["text!./view.html","knockout","knockout-mapping","app/data-context-contact","vendor/lski-modal","underscore","app/config"],function(e,t,n,i,c,a,o){function s(){this.email=o.contact,this.emailLink="mailto:"+this.email,this.contact=new u}function u(){var e=this;e.Email=t.observable(),e.Name=t.observable(),e.Subject=t.observable(),e.Message=t.observable(),e.running=t.observable(),e.Topic=t.computed({read:e.Subject,write:e.Subject})}return u.prototype={submit:function(e){if(!e.checkValidity||e.checkValidity()!==!1){var t=this,o=n.toJS(t);t.running(!0),i.contacts.sendmessage(o).then(function(){c.show("#success"),a(e.querySelectorAll("input, textarea")).each(function(e){e.value=""}),t.running(!1)})["catch"](function(){c.show("#fail"),t.running(!1)})}}},{viewModel:s,template:e}});
//# sourceMappingURL=../../maps/components/contact-page/vm.js.map
