(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107,318],{1269:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var o;return(null!=(o=e.invokePartial(a["headers/_TitleWithSubAndIcon"],t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"male",type:"console.applications.agents.web.agents.edit.type",title:null!=t?t.id:t},data:n,helpers:r,partials:a,decorators:e.decorators}))?o:"")+"\n<form data-json-form></form>\n"},usePartial:true,useData:true})},1373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var o=void 0;try{for(var u=e[Symbol.iterator](),i;!(a=(i=u.next()).done);a=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){n=true;o=e}finally{try{!a&&u["return"]&&u["return"]()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var o=r(6);var u=r(61);var i=r(19);var l=k(i);var s=r(1542);var c=r(1534);var f=r(1652);var v=r(1530);var d=r(114);var p=k(d);var g=r(1528);var m=k(g);var h=r(1533);var b=k(h);var A=r(866);var y=k(A);var _=r(865);var w=k(_);var P=r(560);var S=k(P);var E=r(1592);var T=k(E);var O=r(73);var I=k(O);var C=r(1602);var R=k(C);var N=r(1591);var V=k(N);var M=r(1590);var U=k(M);var j=r(1269);var W=k(j);function k(e){return e&&e.__esModule?e:{default:e}}function D(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function B(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function x(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var L="globalWebAgentConfig.cdssoRootUrl";var F=function e(t){return(0,o.chain)(t.raw.properties).map(function(e,t){return{id:t,order:e.propertyOrder,title:e.title}}).sortBy("order").value()};var H=function e(t,r){var a="properties.globalWebAgentConfig.properties.agentgroup";var n=(0,o.get)(t,a);if(n){var i=(0,o.map)(r.result,"_id");var l=[""].concat(x(i));var s=[(0,u.t)("common.form.unassigned")].concat(x(i));n.additional={alert:"alert-info"};n.enum=l;n.options={enum_titles:s}}else console.error('[EditWebAgent] Unable to add available Web Agent Groups to "globalWebAgentConfig.properties.agentgroup" property.')};var K=function(e){B(t,e);function t(){G(this,t);var e=J(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.template=W.default;e.events={"click [data-delete]":"onDelete","click [data-inherit-value]":"toggleInheritance","click [data-save]":"onSave"};return e}n(t,[{key:"getJSONSchemaView",value:function e(){return this.subview.getBody()}},{key:"getGroupValues",value:function e(t,r){return t?(0,c.get)(r,v.WEB_AGENT,t):l.default.Deferred().resolve({})}},{key:"render",value:function e(t){var r=this;var n=a(t,2),u=n[0],i=n[1];this.data={id:i,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]};this.realm=u;Promise.all([(0,s.getSchema)(u,v.WEB_AGENT),(0,s.get)(u,v.WEB_AGENT,i),(0,c.getAll)(u,v.WEB_AGENT)]).then(function(e){var t=a(e,3),n=t[0],i=t[1],s=t[2];H(n,s);i=(0,f.removeAgentRootURLPrefix)(i,L);r.schema=new y.default(n);r.values=new w.default(i);var c=function e(){var t=function e(t,r){var a=r.replace(".",".properties.");var n=(0,o.get)(t.raw.properties,a);return t.hasInheritance(n)};var a=function e(t,a){var n=r.getJSONSchemaView();n.options.hideInheritance=!t;n.setData(a);n.render()};var n=r.getJSONSchemaView();var i=(0,l.default)("[name='root[agentgroup]']",n.subview.jsonEditor.element).val();var s=r.values.raw.globalWebAgentConfig.agentgroup;if(i)i===s?a(i):r.getGroupValues(i,u).then(function(e){r.defaultValues=new w.default(e);r.values=r.values.mapProperties(function(a,n){if(t(r.schema,n)){var u=(0,o.get)(a,"inherited")?(0,o.get)(e,n):a.value;return{inherited:a.inherited,value:u}}return a});r.values.raw.globalWebAgentConfig.agentgroup=i;a(i,r.values.raw[r.getSection()])});else{r.values=r.values.mapProperties(function(e,a){return t(r.schema,a)?{inherited:false,value:e.value}:e});r.values.raw.globalWebAgentConfig.agentgroup=i;a(i,r.values.raw[r.getSection()])}};var v=(0,o.get)(r.values.raw,"globalWebAgentConfig.agentgroup");r.getGroupValues(v,u).then(function(e){r.defaultValues=new w.default(e);r.parentRender(function(){var e=F(r.schema);r.subview=new V.default({tabs:e,createBody:function e(t){var a=(0,o.get)(r.values.raw,"globalWebAgentConfig.agentgroup");var n=new m.default({hideInheritance:(0,o.isEmpty)(a),schema:new y.default(r.schema.raw.properties[t]),values:new w.default((0,o.cloneDeep)(r.values.raw)[t]),onRendered:function e(){n.watch("root.agentgroup",c)}});return n},createFooter:function e(){return new T.default({partial:"form/_JSONSchemaFooter"})}});var t={properties:r.schema.raw.properties,onChange:function e(t,a){r.subview.setTabId(t);(0,R.default)(r.$el.find('[data-schemapath="root.'+a+'"]'))}};r.$el.find("[data-tab-search]").append(new U.default(t).render().$el);r.subview.setElement("[data-json-form]");r.subview.render()})})})}},{key:"getSection",value:function e(){return this.subview.getTabId()}},{key:"updateValues",value:function e(){this.values=this.values.extend(D({},this.getSection(),this.getJSONSchemaView().getData()))}},{key:"onSave",value:function e(){if(!this.getJSONSchemaView().isValid()){S.default.addMessage({message:(0,u.t)("common.form.validation.errorsNotSaved"),type:S.default.TYPE_DANGER});return}this.updateValues();var t=this.values.removeNullPasswords(this.schema);var r=(0,f.addAgentRootURLPrefix)(t.raw,L);(0,s.update)(this.realm,v.WEB_AGENT,r,this.data.id).then(function(){S.default.addMessage({message:(0,u.t)("config.messages.AppMessages.changesSaved")})},function(e){S.default.addMessage({response:e,type:S.default.TYPE_DANGER})})}},{key:"toggleInheritance",value:function e(t){var r=t.currentTarget;var a=function e(t){return t.slice(5)};var n=a(r.getAttribute("data-schemapath"));var o=!("true"===r.getAttribute("data-inherit-value"));var u=o?this.defaultValues.raw[this.getSection()][n]:this.values.raw[this.getSection()][n].value;this.getJSONSchemaView().subview.toggleInheritance(n,u,o);this.values=this.values.addValueForPath(this.getSection()+"."+n,{inherited:o,value:u})}},{key:"onDelete",value:function e(){var t=this;b.default.showConfirmationBeforeDeleting({message:(0,u.t)("console.common.confirmDeleteItem")},function(){(0,s.remove)(t.realm,v.WEB_AGENT,[t.data.id]).then(function(){S.default.addMessage({message:(0,u.t)("config.messages.AppMessages.changesSaved")});I.default.routeTo(I.default.configuration.routes.realmsApplicationsAgentsWeb,{args:[encodeURIComponent(t.realm)],trigger:true})},function(e,t){S.default.addMessage({response:t,type:S.default.TYPE_DANGER})})})}}]);return t}(p.default);t.default=K},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){if(t){var r=t.sizePerPage,a=t.pagedResultsOffset,n=t.sortKey,o=t.sortDirection;var u=a?"&_pagedResultsOffset="+a:"";var i="&_pageSize="+r;var l=n&&o?"&_sortKeys="+encodeURIComponent(o)+n:"";return""+u+i+l}return""};t.default=a},1524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){return t?"&_fields="+t.join(","):""};t.default=a},1526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=i;var a=r(61);var n=r(655);var o=u(n);function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.t)("common.form.delete");o.default.confirm({type:o.default.TYPE_DANGER,title:(0,a.t)("common.form.confirm")+" "+r,message:e.message?e.message:(0,a.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:r,btnOKClass:"btn-danger",callback:function e(r){r&&t&&t()}})}},1530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=t.JAVA_AGENT="J2EEAgent";var n=t.OAUTH2_CLIENT="OAuth2Client";var o=t.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var u=t.SOAP_STS_AGENT="SoapSTSAgent";var i=t.SOFTWARE_PUBLISHER="SoftwarePublisher";var l=t.WEB_AGENT="WebAgent";var s=t.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1537);var n=s(a);var o=r(1536);var u=s(o);var i=r(1526);var l=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,l.default)(e,t)};c.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,u.default)(e,t)};t.default=c},1534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=m;t.get=h;t.getSchema=b;t.remove=A;t.getInitialState=y;t.create=_;t.update=w;var a=r(6);var n=r(169);var o=p(n);var u=r(27);var i=p(u);var l=r(1524);var s=p(l);var c=r(1523);var f=p(c);var v=r(168);var d=p(v);function p(e){return e&&e.__esModule?e:{default:e}}var g=new o.default(""+i.default.host+i.default.context+"/json");function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,f.default)(r.pagination);var n=(0,s.default)(r.fields);return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function h(e,t,r){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function b(e,t){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function A(e,t,r){var n=(0,a.map)(r,function(r){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function y(e,t){function r(){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([b(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function _(e,t,r,a){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function w(e,t,r,n){return g.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}},1536:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getCreatableTypes=m;t.create=h;t.update=b;t.get=A;t.getSchema=y;t.getAll=_;t.getInitialState=w;t.remove=P;var a=r(6);var n=r(169);var o=p(n);var u=r(27);var i=p(u);var l=r(1524);var s=p(l);var c=r(1523);var f=p(c);var v=r(168);var d=p(v);function p(e){return e&&e.__esModule?e:{default:e}}var g=new o.default(""+i.default.host+i.default.context+"/json");function m(e){return g.serviceCall({url:(0,d.default)("/realm-config/agents?_action=getCreatableTypes",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.result})}function h(e,t,r,a){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function b(e,t,r,n){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}function A(e,t,r){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:true})}function y(e,t){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function _(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,f.default)(r.pagination);var n=(0,s.default)(r.fields);return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function w(e,t){function r(){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([y(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function P(e,t,r){var n=(0,a.map)(r,function(r){return g.serviceCall({url:(0,d.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}},1652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.addAgentRootURLPrefix=t.removeAgentRootURLPrefix=void 0;var a=r(6);var n="agentRootURL=";var o=t.removeAgentRootURLPrefix=function e(t,r){var o=(0,a.get)(t,r);(0,a.forEach)(o.value,function(e,t){e&&0===e.indexOf(n)&&(o.value[t]=e.substring(n.length))});return t};var u=t.addAgentRootURLPrefix=function e(t,r){var o=(0,a.get)(t,r);(0,a.forEach)(o.value,function(e,t){e&&0!==e.indexOf(n)&&(o.value[t]=n.concat(e))});return t}}}]);
//# sourceMappingURL=107.1a93cd13ab.js.map