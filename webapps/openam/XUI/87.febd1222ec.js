(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87,220,320],{1164:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1271:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var o;return(null!=(o=e.invokePartial(a["headers/_TitleWithSubAndIcon"],t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"male",type:"console.applications.agents.trustedJwtIssuer.agents.edit.type",title:null!=t?t.id:t},data:n,helpers:r,partials:a,decorators:e.decorators}))?o:"")+'\n<div class="panel panel-default">\n    <div class="panel-body ">\n        <form data-json-form></form>\n    </div>\n    <div class="panel-footer clearfix">\n'+(null!=(o=e.invokePartial(a["form/_JSONSchemaFooter"],t,{name:"form/_JSONSchemaFooter",data:n,indent:"        ",helpers:r,partials:a,decorators:e.decorators}))?o:"")+"    </div>\n</div>\n"},usePartial:true,useData:true})},1353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var o=void 0;try{for(var i=e[Symbol.iterator](),s;!(a=(s=i.next()).done);a=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){n=true;o=e}finally{try{!a&&i["return"]&&i["return"]()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var o=r(6);var i=r(61);var s=r(19);var u=O(s);var l=r(1542);var c=r(1534);var d=r(1530);var f=r(114);var v=O(f);var p=r(1528);var h=O(p);var m=r(1533);var g=O(m);var w=r(866);var y=O(w);var _=r(865);var b=O(_);var S=r(560);var T=O(S);var A=r(73);var E=O(A);var P=r(1271);var I=O(P);function O(e){return e&&e.__esModule?e:{default:e}}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function D(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function C(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var j=function e(t,r){var a="properties.agentgroup";var n=(0,o.get)(t,a);if(n){var s=(0,o.map)(r.result,"_id");var u=[""].concat(C(s));var l=[(0,i.t)("common.form.unassigned")].concat(C(s));n.additional={alert:"alert-info"};n.enum=u;n.options={enum_titles:l}}else console.error('[EditTrustedJwtIssuerAgent] Unable to add available Trusted JWT Issuer Agent Groups to "agentgroup" property.')};var M=function(e){D(t,e);function t(){V(this,t);var e=R(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.template=I.default;e.events={"click [data-delete]":"onDelete","click [data-inherit-value]":"toggleInheritance","click [data-save]":"onSave"};return e}n(t,[{key:"getGroupValues",value:function e(t,r){return t?(0,c.get)(r,d.TRUSTED_JWT_ISSUER,t):u.default.Deferred().resolve({})}},{key:"render",value:function e(t){var r=this;var n=a(t,2),i=n[0],s=n[1];this.data={id:s,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]};this.realm=i;Promise.all([(0,l.getSchema)(i,d.TRUSTED_JWT_ISSUER),(0,l.get)(i,d.TRUSTED_JWT_ISSUER,s),(0,c.getAll)(i,d.TRUSTED_JWT_ISSUER)]).then(function(e){var t=a(e,3),n=t[0],s=t[1],l=t[2];j(n,l);r.schema=new y.default(n);r.values=new b.default(s);r.nonInheritedValues=(0,o.cloneDeep)(r.values);var c=function e(){var t=function e(t,r){var a=r.replace(".",".properties.");var n=(0,o.get)(t.raw.properties,a);return t.hasInheritance(n)};var a=function e(t,a){var n=r.view;n.options.hideInheritance=!t;n.setData(a);n.render()};var n=r.view.subview.jsonEditor.element;var s=(0,u.default)("[name='root[agentgroup]']",n).val();var l=r.values.raw.agentgroup;if(s)s===l?a(s):r.getGroupValues(s,i).then(function(e){r.defaultValues=new b.default(e);var n=(0,o.mapValues)(r.values.raw,function(a,n){if((0,o.startsWith)(n,"_"))return a;if(t(r.schema,n)){var i=(0,o.get)(a,"inherited")?(0,o.get)(e,n):a.value;return{inherited:a.inherited,value:i}}return a});r.values=new b.default(n).addValueForPath("agentgroup",s);a(s,r.values.raw)});else{var c=(0,o.mapValues)(r.nonInheritedValues.raw,function(e,a){return t(r.schema,a)?{inherited:false,value:e.value}:e});r.values=new b.default(c).addValueForPath("agentgroup",s);a(s,r.values.raw)}};var d=(0,o.get)(r.values.raw,"agentgroup");r.getGroupValues(d,i).then(function(e){r.defaultValues=new b.default(e);r.parentRender(function(){var e=(0,o.get)(r.values.raw,"agentgroup");var t=new h.default({hideInheritance:(0,o.isEmpty)(e),schema:new y.default(r.schema.raw),values:new b.default((0,o.cloneDeep)(r.values.raw)),onRendered:function e(){t.watch("root.agentgroup",c)}});r.view=t;r.view.setElement("[data-json-form]");r.view.render()})})})}},{key:"updateValues",value:function e(){this.values=this.values.extend(this.view.getData());this.nonInheritedValues=(0,o.cloneDeep)(this.values)}},{key:"onSave",value:function e(){if(!this.view.isValid()){T.default.addMessage({message:(0,i.t)("common.form.validation.errorsNotSaved"),type:T.default.TYPE_DANGER});return}this.updateValues();var t=this.values.removeNullPasswords(this.schema);(0,l.update)(this.realm,d.TRUSTED_JWT_ISSUER,t.raw,this.data.id).then(function(){T.default.addMessage({message:(0,i.t)("config.messages.AppMessages.changesSaved")})},function(e){T.default.addMessage({response:e,type:T.default.TYPE_DANGER})})}},{key:"toggleInheritance",value:function e(t){var r=t.currentTarget;var a=function e(t){return t.slice(5)};var n=a(r.getAttribute("data-schemapath"));var o=!("true"===r.getAttribute("data-inherit-value"));var i=o?this.defaultValues.raw[n]:this.nonInheritedValues.raw[n].value;o&&(this.nonInheritedValues.raw[n].value=this.view.getData()[n].value);this.view.subview.toggleInheritance(n,i,o);this.values=this.values.addValueForPath(n,{inherited:o,value:i})}},{key:"onDelete",value:function e(){var t=this;g.default.showConfirmationBeforeDeleting({message:(0,i.t)("console.common.confirmDeleteItem")},function(){(0,l.remove)(t.realm,d.TRUSTED_JWT_ISSUER,[t.data.id]).then(function(){T.default.addMessage({message:(0,i.t)("config.messages.AppMessages.changesSaved")});E.default.routeTo(E.default.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuer,{args:[encodeURIComponent(t.realm)],trigger:true})},function(e,t){T.default.addMessage({response:t,type:T.default.TYPE_DANGER})})})}}]);return t}(v.default);t.default=M},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){if(t){var r=t.sizePerPage,a=t.pagedResultsOffset,n=t.sortKey,o=t.sortDirection;var i=a?"&_pagedResultsOffset="+a:"";var s="&_pageSize="+r;var u=n&&o?"&_sortKeys="+encodeURIComponent(o)+n:"";return""+i+s+u}return""};t.default=a},1524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){return t?"&_fields="+t.join(","):""};t.default=a},1525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r(1539);var a=r(6);var n=b(a);var o=r(19);var i=b(o);var s=r(159);var u=b(s);var l=r(1538);var c=b(l);var d=r(1164);var f=b(d);var v=r(1541);var p=b(v);var h=r(866);var m=b(h);var g=r(865);var w=b(g);var y=r(1531);var _=b(y);function b(e){return e&&e.__esModule?e:{default:e}}function S(e){var t=(0,f.default)();(0,i.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,r){var a=(0,i.default)(t);a.popoverclickaway({container:"#content",html:true,placement:"auto top",content:r.innerHTML}).click(function(e){e.preventDefault()});(0,i.default)(r).parent().append(a)})}function T(e){(0,i.default)(e).find("input:password").attr("placeholder",i.default.t("common.form.passwordPlaceholder"))}_.default.define("enum_plugin",function(e){var t=this,r=arguments;var a=e.schema;var o=n.default.indexOf(a.enum,"");var i=o>-1;var s=function e(){var a=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(a(n))return e.apply(t,r);return false}}()};var u=function e(){t.plugins.settings["dropdown_header"]={title:a.options.enum_titles[o]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,r);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};i?u():s()});function A(e,t){var r=t.schema,a=t.values,n=t.hideInheritance,o=void 0!==n&&n;var i=6;var s=4;c.default.plugins.selectize.enable=true;c.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};c.default.defaults.themes.openam=p.default.getTheme(i,s);var u=r.toFlatWithInheritanceMeta(a);var l=a.removeInheritance();u=u.raw;l=l.raw;var d=new c.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:o,iconlib:"fontawesome4",schema:u,theme:"openam"});S(e);T(e);d.setValue(l);return d}var E=u.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof w.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,r,a){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],a);this.options.values=this.options.values.addValueForPath([t,"value"],r);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=A(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new w.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,r){this.jsonEditor.watch(t,r)},destroy:function e(){var t=this;var r=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(r,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=E},1526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var a=r(61);var n=r(655);var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.t)("common.form.delete");o.default.confirm({type:o.default.TYPE_DANGER,title:(0,a.t)("common.form.confirm")+" "+r,message:e.message?e.message:(0,a.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:r,btnOKClass:"btn-danger",callback:function e(r){r&&t&&t()}})}},1528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=v(a);var o=r(159);var i=v(o);var s=r(1525);var u=v(s);var l=r(866);var c=v(l);var d=r(865);var f=v(d);function v(e){return e&&e.__esModule?e:{default:e}}function p(e){e&&setTimeout(e,0)}var h=i.default.View.extend({initialize:function e(t){if(!(t.schema instanceof c.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var r=true;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys();var o=this.options.values.getEmptyValueKeys(t);var i=n.default.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i);r=!n.default.isEmpty(i)}this.subview=new u.default({displayForm:r,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();p(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,r){this.subview&&this.subview.watch(t,r)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=t.JAVA_AGENT="J2EEAgent";var n=t.OAUTH2_CLIENT="OAuth2Client";var o=t.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var i=t.SOAP_STS_AGENT="SoapSTSAgent";var s=t.SOFTWARE_PUBLISHER="SoftwarePublisher";var u=t.WEB_AGENT="WebAgent";var l=t.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1537);var n=l(a);var o=r(1536);var i=l(o);var s=r(1526);var u=l(s);function l(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,u.default)(e,t)};c.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,i.default)(e,t)};t.default=c},1534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=m;t.get=g;t.getSchema=w;t.remove=y;t.getInitialState=_;t.create=b;t.update=S;var a=r(6);var n=r(169);var o=p(n);var i=r(27);var s=p(i);var u=r(1524);var l=p(u);var c=r(1523);var d=p(c);var f=r(168);var v=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=new o.default(""+s.default.host+s.default.context+"/json");function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,d.default)(r.pagination);var n=(0,l.default)(r.fields);return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function g(e,t,r){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function w(e,t){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function y(e,t,r){var n=(0,a.map)(r,function(r){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function _(e,t){function r(){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([w(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function b(e,t,r,a){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function S(e,t,r,n){return h.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}},1536:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getCreatableTypes=m;t.create=g;t.update=w;t.get=y;t.getSchema=_;t.getAll=b;t.getInitialState=S;t.remove=T;var a=r(6);var n=r(169);var o=p(n);var i=r(27);var s=p(i);var u=r(1524);var l=p(u);var c=r(1523);var d=p(c);var f=r(168);var v=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=new o.default(""+s.default.host+s.default.context+"/json");function m(e){return h.serviceCall({url:(0,v.default)("/realm-config/agents?_action=getCreatableTypes",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.result})}function g(e,t,r,a){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function w(e,t,r,n){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}function y(e,t,r){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:true})}function _(e,t){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,d.default)(r.pagination);var n=(0,l.default)(r.fields);return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function S(e,t){function r(){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([_(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function T(e,t,r){var n=(0,a.map)(r,function(r){return h.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}}}]);
//# sourceMappingURL=87.febd1222ec.js.map