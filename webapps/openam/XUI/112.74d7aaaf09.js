(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112,315],{1266:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var o;return(null!=(o=e.invokePartial(a["headers/_TitleWithSubAndIcon"],t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"list-alt",type:"console.applications.oauth2.clients.edit.type",title:null!=t?t.id:t},data:n,helpers:r,partials:a,decorators:e.decorators}))?o:"")+"\n<form data-json-form></form>\n"},usePartial:true,useData:true})},1378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var o=void 0;try{for(var u=e[Symbol.iterator](),i;!(a=(i=u.next()).done);a=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){n=true;o=e}finally{try{!a&&u["return"]&&u["return"]()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var o=r(6);var u=r(61);var i=r(19);var l=k(i);var s=r(1542);var c=r(1534);var f=r(1530);var d=r(114);var v=k(d);var p=r(1528);var g=k(p);var m=r(1533);var h=k(m);var A=r(866);var y=k(A);var _=r(865);var b=k(_);var w=r(560);var O=k(w);var S=r(1592);var P=k(S);var C=r(73);var T=k(C);var I=r(1602);var E=k(I);var N=r(1591);var V=k(N);var R=r(1590);var M=k(R);var U=r(1266);var j=k(U);function k(e){return e&&e.__esModule?e:{default:e}}function D(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function H(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function L(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var B=function e(t){return(0,o.chain)(t.raw.properties).map(function(e,t){return{id:t,order:e.propertyOrder,title:e.title}}).sortBy("order").value()};var F=function e(t,r){var a="properties.coreOAuth2ClientConfig.properties.agentgroup";var n=(0,o.get)(t,a);if(n){var i=(0,o.map)(r.result,"_id");var l=[""].concat(L(i));var s=[(0,u.t)("common.form.unassigned")].concat(L(i));n.additional={alert:"alert-info"};n.enum=l;n.options={enum_titles:s}}else console.error('[EditOAuth2Client] Unable to add available OAuth 2.0 Groups to "coreOAuth2ClientConfig.properties.agentgroup" property.')};var x=function(e){H(t,e);function t(){J(this,t);var e=G(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.template=j.default;e.events={"click [data-delete]":"onDelete","click [data-inherit-value]":"toggleInheritance","click [data-save]":"onSave"};return e}n(t,[{key:"getJSONSchemaView",value:function e(){return this.subview.getBody()}},{key:"getGroupValues",value:function e(t,r){return t?(0,c.get)(r,f.OAUTH2_CLIENT,t):l.default.Deferred().resolve({})}},{key:"render",value:function e(t){var r=this;var n=a(t,2),u=n[0],i=n[1];this.data={id:i,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]};this.realm=u;Promise.all([(0,s.getSchema)(u,f.OAUTH2_CLIENT),(0,s.get)(u,f.OAUTH2_CLIENT,i),(0,c.getAll)(u,f.OAUTH2_CLIENT)]).then(function(e){var t=a(e,3),n=t[0],i=t[1],s=t[2];F(n,s);r.schema=new y.default(n);r.values=new b.default(i);var c=function e(){var t=function e(t,r){var a=r.replace(".",".properties.");var n=(0,o.get)(t.raw.properties,a);return t.hasInheritance(n)};var a=function e(t,a){var n=r.getJSONSchemaView();n.options.hideInheritance=!t;n.setData(a);n.render()};var n=r.getJSONSchemaView();var i=(0,l.default)("[name='root[agentgroup]']",n.subview.jsonEditor.element).val();var s=r.values.raw.coreOAuth2ClientConfig.agentgroup;if(i)i===s?a(i):r.getGroupValues(i,u).then(function(e){r.defaultValues=new b.default(e);r.values=r.values.mapProperties(function(a,n){if(t(r.schema,n)){var u=(0,o.get)(a,"inherited")?(0,o.get)(e,n):a.value;return{inherited:a.inherited,value:u}}return a});r.values.raw.coreOAuth2ClientConfig.agentgroup=i;a(i,r.values.raw[r.getSection()])});else{r.values=r.values.mapProperties(function(e,a){return t(r.schema,a)?{inherited:false,value:e.value}:e});r.values.raw.coreOAuth2ClientConfig.agentgroup=i;a(i,r.values.raw[r.getSection()])}};var f=(0,o.get)(r.values.raw,"coreOAuth2ClientConfig.agentgroup");r.getGroupValues(f,u).then(function(e){r.defaultValues=new b.default(e);r.parentRender(function(){var e=B(r.schema);r.subview=new V.default({tabs:e,createBody:function e(t){var a=(0,o.get)(r.values.raw,"coreOAuth2ClientConfig.agentgroup");var n=new g.default({hideInheritance:(0,o.isEmpty)(a),schema:new y.default(r.schema.raw.properties[t]),values:new b.default((0,o.cloneDeep)(r.values.raw)[t]),onRendered:function e(){n.watch("root.agentgroup",c)}});return n},createFooter:function e(){return new P.default({partial:"form/_JSONSchemaFooter"})}});var t={properties:r.schema.raw.properties,onChange:function e(t,a){r.subview.setTabId(t);(0,E.default)(r.$el.find('[data-schemapath="root.'+a+'"]'))}};r.$el.find("[data-tab-search]").append(new M.default(t).render().$el);r.subview.setElement("[data-json-form]");r.subview.render()})})})}},{key:"getSection",value:function e(){return this.subview.getTabId()}},{key:"updateValues",value:function e(){this.values=this.values.extend(D({},this.getSection(),this.getJSONSchemaView().getData()))}},{key:"onSave",value:function e(){if(!this.getJSONSchemaView().isValid()){O.default.addMessage({message:(0,u.t)("common.form.validation.errorsNotSaved"),type:O.default.TYPE_DANGER});return}this.updateValues();var t=this.values.removeNullPasswords(this.schema);(0,s.update)(this.realm,f.OAUTH2_CLIENT,t.raw,this.data.id).then(function(){O.default.addMessage({message:(0,u.t)("config.messages.AppMessages.changesSaved")})},function(e){O.default.addMessage({response:e,type:O.default.TYPE_DANGER})})}},{key:"toggleInheritance",value:function e(t){var r=t.currentTarget;var a=function e(t){return t.slice(5)};var n=a(r.getAttribute("data-schemapath"));var o=!("true"===r.getAttribute("data-inherit-value"));var u=o?this.defaultValues.raw[this.getSection()][n]:this.values.raw[this.getSection()][n].value;this.getJSONSchemaView().subview.toggleInheritance(n,u,o);this.values=this.values.addValueForPath(this.getSection()+"."+n,{inherited:o,value:u})}},{key:"onDelete",value:function e(){var t=this;h.default.showConfirmationBeforeDeleting({message:(0,u.t)("console.common.confirmDeleteItem")},function(){(0,s.remove)(t.realm,f.OAUTH2_CLIENT,[t.data.id]).then(function(){O.default.addMessage({message:(0,u.t)("config.messages.AppMessages.changesSaved")});T.default.routeTo(T.default.configuration.routes.realmsApplicationsOAuth2,{args:[encodeURIComponent(t.realm)],trigger:true})},function(e,t){O.default.addMessage({response:t,type:O.default.TYPE_DANGER})})})}}]);return t}(v.default);t.default=x},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){if(t){var r=t.sizePerPage,a=t.pagedResultsOffset,n=t.sortKey,o=t.sortDirection;var u=a?"&_pagedResultsOffset="+a:"";var i="&_pageSize="+r;var l=n&&o?"&_sortKeys="+encodeURIComponent(o)+n:"";return""+u+i+l}return""};t.default=a},1524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){return t?"&_fields="+t.join(","):""};t.default=a},1526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=i;var a=r(61);var n=r(655);var o=u(n);function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.t)("common.form.delete");o.default.confirm({type:o.default.TYPE_DANGER,title:(0,a.t)("common.form.confirm")+" "+r,message:e.message?e.message:(0,a.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:r,btnOKClass:"btn-danger",callback:function e(r){r&&t&&t()}})}},1530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=t.JAVA_AGENT="J2EEAgent";var n=t.OAUTH2_CLIENT="OAuth2Client";var o=t.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var u=t.SOAP_STS_AGENT="SoapSTSAgent";var i=t.SOFTWARE_PUBLISHER="SoftwarePublisher";var l=t.WEB_AGENT="WebAgent";var s=t.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1537);var n=s(a);var o=r(1536);var u=s(o);var i=r(1526);var l=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,l.default)(e,t)};c.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,u.default)(e,t)};t.default=c},1534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=m;t.get=h;t.getSchema=A;t.remove=y;t.getInitialState=_;t.create=b;t.update=w;var a=r(6);var n=r(169);var o=p(n);var u=r(27);var i=p(u);var l=r(1524);var s=p(l);var c=r(1523);var f=p(c);var d=r(168);var v=p(d);function p(e){return e&&e.__esModule?e:{default:e}}var g=new o.default(""+i.default.host+i.default.context+"/json");function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,f.default)(r.pagination);var n=(0,s.default)(r.fields);return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function h(e,t,r){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function A(e,t){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function y(e,t,r){var n=(0,a.map)(r,function(r){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function _(e,t){function r(){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([A(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function b(e,t,r,a){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function w(e,t,r,n){return g.serviceCall({url:(0,v.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}},1536:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getCreatableTypes=m;t.create=h;t.update=A;t.get=y;t.getSchema=_;t.getAll=b;t.getInitialState=w;t.remove=O;var a=r(6);var n=r(169);var o=p(n);var u=r(27);var i=p(u);var l=r(1524);var s=p(l);var c=r(1523);var f=p(c);var d=r(168);var v=p(d);function p(e){return e&&e.__esModule?e:{default:e}}var g=new o.default(""+i.default.host+i.default.context+"/json");function m(e){return g.serviceCall({url:(0,v.default)("/realm-config/agents?_action=getCreatableTypes",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.result})}function h(e,t,r,a){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function A(e,t,r,n){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}function y(e,t,r){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:true})}function _(e,t){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,f.default)(r.pagination);var n=(0,s.default)(r.fields);return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function w(e,t){function r(){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([_(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function O(e,t,r){var n=(0,a.map)(r,function(r){return g.serviceCall({url:(0,v.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}}}]);
//# sourceMappingURL=112.74d7aaaf09.js.map