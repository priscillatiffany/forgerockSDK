(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110,220,221],{1164:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1166:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){return"checked"},3:function(e,t,a,r,n){return"block-header-inactive"},5:function(e,t,a,r,n){return'        <span class="text-muted">schema.raw.description</span>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var o,u=null!=t?t:e.nullContext||{};return'<div class="form-inline">\n    <label class="am-toggle-switch pull-right">\n        <input data-json-editor-toggle type="checkbox" '+(null!=(o=a["if"].call(u,null!=t?t.enablePropertyValue:t,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?o:"")+' />\n        <span />\n    </label>\n\n    <h3 class="block-header '+(null!=(o=a.unless.call(u,null!=t?t.enablePropertyValue:t,{name:"unless",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?o:"")+'">\n        '+e.escapeExpression(e.lambda(null!=(o=null!=(o=null!=t?t.schema:t)?o.raw:o)?o.title:o,t))+"\n    </h3>\n\n"+(null!=(o=a["if"].call(u,null!=(o=null!=(o=null!=t?t.schema:t)?o.raw:o)?o.description:o,{name:"if",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n}))?o:"")+"</div>\n\n<div data-toggleable-json-editor/>\n"},useData:true})},1376:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(3);var o=a(6);var u=a(0);var i=j(u);var l=a(1);var s=j(l);var d=a(1534);var c=a(1530);var f=a(225);var p=a(224);var v=a(1527);var h=j(v);var m=a(560);var g=j(m);var y=a(1818);var b=j(y);var _=a(73);var w=j(_);var E=a(1522);var O=j(E);var C=a(1521);var P=j(C);function j(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function R(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function(e){R(t,e);function t(e){S(this,t);var a=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={isFetching:true,groupId:""};a.handleCreate=a.handleCreate.bind(a);a.handleGroupIdChange=a.handleGroupIdChange.bind(a);return a}r(t,[{key:"componentDidMount",value:function e(){var t=this;(0,d.getInitialState)(this.props.router.params[0],c.OAUTH2_CLIENT).then(function(e){var a=e.schema,r=e.values;t.setState({isFetching:false});t.props.setSchema(a);t.props.setTemplate(r)},function(e){t.setState({isFetching:false});g.default.addMessage({response:e,type:g.default.TYPE_DANGER})})}},{key:"handleCreate",value:function e(t){var a=this;var r=this.props.router.params[0];(0,d.create)(r,c.OAUTH2_CLIENT,t,this.state.groupId).then(function(){w.default.routeTo(w.default.configuration.routes.realmsApplicationsOAuth2GroupsEdit,{args:(0,o.map)([r,a.state.groupId],encodeURIComponent),trigger:true})},function(e){g.default.addMessage({response:e,type:g.default.TYPE_DANGER})})}},{key:"handleGroupIdChange",value:function e(t){this.setState({groupId:t})}},{key:"render",value:function e(){return s.default.createElement(b.default,{isCreateAllowed:!(0,o.isEmpty)(this.state.groupId),isFetching:this.state.isFetching,onCreate:this.handleCreate,onGroupIdChange:this.handleGroupIdChange,schema:this.props.schema,template:this.props.template})}}]);return t}(l.Component);T.propTypes={router:P.default,schema:i.default.shape({type:i.default.string.isRequired}),setSchema:i.default.func.isRequired,setTemplate:i.default.func.isRequired,template:i.default.shape({type:i.default.string.isRequired})};T=(0,h.default)(T,function(e){return{schema:e.remote.config.realm.applications.oauth2.groups.schema,template:e.remote.config.realm.applications.oauth2.groups.template}},function(e){return{setSchema:(0,n.bindActionCreators)(f.setSchema,e),setTemplate:(0,n.bindActionCreators)(p.setTemplate,e)}});T=(0,O.default)(T);t.default=T},1521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=i(r);var o=a(0);var u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}var l=u.default.shape({params:u.default.array.isRequired});t.default=l},1522:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=function t(a){var r=l.default.currentRoute;var o=l.default.extractParameters(r,d.default.getCurrentFragment());var i=l.default.applyDefaultParameters(r,o);var s={params:n.default.map(i,function(e){if(!e)return"";return decodeURIComponent(e)})};return u.default.createElement(e,n.default.extend({},a,{router:s}))};t.displayName="withRouter("+f(e)+")";t.WrappedComponent=e;return t};var r=a(6);var n=c(r);var o=a(1);var u=c(o);var i=a(73);var l=c(i);var s=a(63);var d=c(s);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return e.displayName||e.name||"Component"}},1523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t){if(t){var a=t.sizePerPage,r=t.pagedResultsOffset,n=t.sortKey,o=t.sortDirection;var u=r?"&_pagedResultsOffset="+r:"";var i="&_pageSize="+a;var l=n&&o?"&_sortKeys="+encodeURIComponent(o)+n:"";return""+u+i+l}return""};t.default=r},1524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t){return t?"&_fields="+t.join(","):""};t.default=r},1525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1539);var r=a(6);var n=w(r);var o=a(19);var u=w(o);var i=a(159);var l=w(i);var s=a(1538);var d=w(s);var c=a(1164);var f=w(c);var p=a(1541);var v=w(p);var h=a(866);var m=w(h);var g=a(865);var y=w(g);var b=a(1531);var _=w(b);function w(e){return e&&e.__esModule?e:{default:e}}function E(e){var t=(0,f.default)();(0,u.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,a){var r=(0,u.default)(t);r.popoverclickaway({container:"#content",html:true,placement:"auto top",content:a.innerHTML}).click(function(e){e.preventDefault()});(0,u.default)(a).parent().append(r)})}function O(e){(0,u.default)(e).find("input:password").attr("placeholder",u.default.t("common.form.passwordPlaceholder"))}_.default.define("enum_plugin",function(e){var t=this,a=arguments;var r=e.schema;var o=n.default.indexOf(r.enum,"");var u=o>-1;var i=function e(){var r=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(r(n))return e.apply(t,a);return false}}()};var l=function e(){t.plugins.settings["dropdown_header"]={title:r.options.enum_titles[o]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,a);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};u?l():i()});function C(e,t){var a=t.schema,r=t.values,n=t.hideInheritance,o=void 0!==n&&n;var u=6;var i=4;d.default.plugins.selectize.enable=true;d.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};d.default.defaults.themes.openam=v.default.getTheme(u,i);var l=a.toFlatWithInheritanceMeta(r);var s=r.removeInheritance();l=l.raw;s=s.raw;var c=new d.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:o,iconlib:"fontawesome4",schema:l,theme:"openam"});E(e);O(e);c.setValue(s);return c}var P=l.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof y.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,a,r){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],r);this.options.values=this.options.values.addValueForPath([t,"value"],a);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=C(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new y.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,a){this.jsonEditor.watch(t,a)},destroy:function e(){var t=this;var a=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(a,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=P},1527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var n=a(1548);var o=a(1);var u=s(o);var i=a(81);var l=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var d=function e(t){return t.displayName||t.name||"Component"};var c=function e(t){for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var s=n.connect.apply(void 0,o)(t);var c=function e(t){return u.default.createElement(s,r({},t,{store:l.default}))};c.displayName="connectWithStore("+d(t)+")";c.WrappedComponent=t;return c};t.default=c},1529:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var n=i(r);var o=a(1);var u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){var a=t.children,r=t.icon,n=t.title,o=t.type;var i=o?"deep":"shallow";var l=r?u.default.createElement("span",{className:"header-icon pull-left bg-primary"},u.default.createElement("i",{className:"fa fa-"+r})):null;var s=o?u.default.createElement("h4",{className:"page-type"},o):null;return u.default.createElement("header",{className:"page-header page-header-no-border clearfix"},l,u.default.createElement("div",{className:"button-group pull-right "+i+"-page-header-button-group"},a),u.default.createElement("div",{className:"pull-left"},s,u.default.createElement("h1",{className:"wordwrap"},n)))};l.propTypes={children:n.default.node,icon:n.default.string,title:n.default.string.isRequired,type:n.default.string};t.default=l},1530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=t.JAVA_AGENT="J2EEAgent";var n=t.OAUTH2_CLIENT="OAuth2Client";var o=t.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var u=t.SOAP_STS_AGENT="SoapSTSAgent";var i=t.SOFTWARE_PUBLISHER="SoftwarePublisher";var l=t.WEB_AGENT="WebAgent";var s=t.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1532:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=u(r);var o=a(61);function u(e){return e&&e.__esModule?e:{default:e}}var i=function e(){return n.default.createElement("p",{className:"loading text-muted"},n.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),n.default.createElement("span",null,(0,o.t)("console.common.loading")))};t.default=i},1534:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=m;t.get=g;t.getSchema=y;t.remove=b;t.getInitialState=_;t.create=w;t.update=E;var r=a(6);var n=a(169);var o=v(n);var u=a(27);var i=v(u);var l=a(1524);var s=v(l);var d=a(1523);var c=v(d);var f=a(168);var p=v(f);function v(e){return e&&e.__esModule?e:{default:e}}var h=new o.default(""+i.default.host+i.default.context+"/json");function m(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r=(0,c.default)(a.pagination);var n=(0,s.default)(a.fields);return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_queryFilter=true"+r+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function g(e,t,a){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function y(e,t){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t,a){var n=(0,r.map)(a,function(a){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function _(e,t){function a(){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([y(e,t),a()]).then(function(e){return{schema:e[0],values:e[1]}})}function w(e,t,a,r){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(a),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function E(e,t,a,n){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,r.omit)(a,"_rev"))})}},1540:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(570);var n=a(6);var o=a(61);var u=a(0);var i=m(u);var l=a(1);var s=m(l);var d=a(73);var c=m(d);var f=a(1522);var p=m(f);var v=a(1521);var h=m(v);function m(e){return e&&e.__esModule?e:{default:e}}function g(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var y=function e(t){var a=t.backRoute,u=t.backRouteArgs,i=t.disabled,l=t.onCreateClick,d=t.router;var f=d.params[0];var p=(0,n.map)([f].concat(g(u)),encodeURIComponent);var v="#"+c.default.getLink(a,p);return s.default.createElement(r.Clearfix,null,s.default.createElement("div",{className:"pull-right"},s.default.createElement("div",{className:"am-btn-action-group"},s.default.createElement(r.Button,{href:v},(0,o.t)("common.form.cancel")),s.default.createElement(r.Button,{bsStyle:"primary",disabled:i,onClick:l},(0,o.t)("common.form.create")))))};y.defaultProps={backRouteArgs:[],disabled:false};y.propTypes={backRoute:i.default.shape({url:i.default.oneOfType([i.default.string,i.default.instanceOf(RegExp)]).isRequired,pattern:i.default.string.isRequired}).isRequired,backRouteArgs:i.default.arrayOf(i.default.string),disabled:i.default.bool,onCreateClick:i.default.func.isRequired,router:h.default};t.default=(0,p.default)(y)},1543:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=function e(t){if((0,r.isEmpty)(t))return true;if("."===t||".."===t||(0,r.startsWith)(t," ")||(0,r.endsWith)(t," ")||(0,r.startsWith)(t,"#")||(0,r.startsWith)(t,'"')||(0,r.includes)(t,"\\")||(0,r.includes)(t,"/")||(0,r.includes)(t,"+")||(0,r.includes)(t,";")||(0,r.includes)(t,",")||(0,r.includes)(t,"%")||(0,r.includes)(t,"[")||(0,r.includes)(t,"]")||(0,r.includes)(t,"|")||(0,r.includes)(t,"?"))return false;return true};t.default=n},1544:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(570);var o=a(6);var u=a(0);var i=d(u);var l=a(1);var s=d(l);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){p(t,e);function t(e){c(this,t);var a=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.handleOnChange=a.handleOnChange.bind(a);return a}r(t,[{key:"handleOnChange",value:function e(t){this.props.onChange(t.target.value)}},{key:"render",value:function e(){var t=this.props,a=t.isGrid,r=t.isValid,u=t.value,i=t.validationMessage,l=t.label,d=t.placeholder;var c=!r&&i?s.default.createElement(n.HelpBlock,null,s.default.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null;var f=s.default.createElement(n.FormControl,{onChange:this.handleOnChange,placeholder:d,type:"text",value:u});return a?s.default.createElement(n.FormGroup,{controlId:(0,o.uniqueId)("formGroupInput"),validationState:r?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.Col,{componentClass:n.ControlLabel,sm:4},l),s.default.createElement(n.Col,{sm:6},f,c))):s.default.createElement(n.FormGroup,{controlId:(0,o.uniqueId)("formGroupInput"),validationState:r?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.ControlLabel,null,l),f,c))}}]);return t}(l.Component);v.defaultProps={isGrid:true,isValid:true};v.propTypes={isGrid:i.default.bool,isValid:i.default.bool,label:i.default.string.isRequired,onChange:i.default.func.isRequired,placeholder:i.default.string,validationMessage:i.default.string,value:i.default.string.isRequired};t.default=v},1557:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=w(r);var o=a(159);var u=w(o);var i=a(1568);var l=w(i);var s=a(1566);var d=w(s);var c=a(866);var f=w(c);var p=a(865);var v=w(p);var h=a(1565);var m=w(h);var g=a(1564);var y=w(g);var b=a(1563);var _=w(b);function w(e){return e&&e.__esModule?e:{default:e}}function E(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a;return e}function O(e){e&&setTimeout(e,0)}var C=u.default.View.extend({initialize:function e(t){if(!(t.schema instanceof f.default))throw new TypeError('[GroupedJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!t.schema.isCollection())throw new Error("[GroupedJSONSchemaView] Only JSONSchema collections are supported by this view.");if(!(t.values instanceof v.default))throw new TypeError('[GroupedJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequired:false,showOnlyRequiredAndEmpty:false})},render:function e(){var t=this;var a=this.options.schema.getPropertiesAsSchemas();var r=this.options.values.raw;var o=this.options.schema.getKeys(true);var u=n.default.map(o,function(e){return{key:e,hideInheritance:t.options.hideInheritance,schema:a[e],values:new v.default(r[e])}});this.options.showOnlyRequiredAndEmpty?u=(0,n.default)(u).map(y.default).map(_.default).omitBy(d.default).value():this.options.showOnlyRequired&&(u=(0,n.default)(u).map(m.default).map(_.default).omitBy(d.default).value());this.displayForm=!n.default.isEmpty(u);this.subviews=(0,n.default)(u).map(l.default).invokeMap("render").each(function(e){e.$el.appendTo(t.$el)});O(this.options.onRendered);return this},getData:function e(){var t=n.default.map(this.subviews,function(e){var t=void 0;t=e.options.key?E({},e.options.key,e.getData()):e.getData();return t});return n.default.reduce(t,n.default.merge,{})}});t.default=C},1563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=(0,r.isEmpty)(e.schema.raw.defaultProperties);if(t&&e.schema.hasEnableProperty())return(0,r.extend)(e,{schema:e.schema.getEnableProperty().addDefaultProperties([e.schema.getEnableKey()])});return e};var r=a(6)},1564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=e.schema.getRequiredPropertyKeys();var a=e.values.getEmptyValueKeys(e.schema);var n=(0,r.intersection)(t,a);return(0,r.extend)(e,{schema:e.schema.addDefaultProperties(n)})};var r=a(6)},1565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=e.schema.getRequiredPropertyKeys();return(0,r.extend)(e,{schema:e.schema.addDefaultProperties(t)})};var r=a(6)},1566:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){return(0,r.isEmpty)(e.schema.raw.defaultProperties)};var r=a(6)},1567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=h(r);var o=a(159);var u=h(o);var i=a(1525);var l=h(i);var s=a(866);var d=h(s);var c=a(865);var f=h(c);var p=a(1166);var v=h(p);function h(e){return e&&e.__esModule?e:{default:e}}var m=u.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof d.default))throw new TypeError('[TogglableJSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[TogglableJSONEditorView] "values" argument is not an instance of JSONValues.');this.options=t;this.options.enablePropertyKey=this.options.schema.getEnableKey();this.options.enablePropertyValue=this.options.values.raw[this.options.enablePropertyKey];this.options.schema=t.schema.omit(this.options.enablePropertyKey);this.options.values=t.values.omit(this.options.enablePropertyKey)},onEnabledChange:function e(t){var a=250;var r=t.currentTarget.checked;this.options.enablePropertyValue=r;this.$el.find(".block-header").toggleClass("block-header-inactive");this.options.schema.isEmpty()||(r?this.$el.find("[data-toggleable-json-editor]").slideDown(a):this.$el.find("[data-toggleable-json-editor]").slideUp(a))},render:function e(){var t=(0,v.default)(this.options);this.$el.html(t);this.$el.find("[data-json-editor-toggle]").change(n.default.bind(this.onEnabledChange,this));this.jsonEditor=new l.default({el:this.$el.find("[data-toggleable-json-editor]"),displayTitle:false,schema:this.options.schema,values:this.options.values});this.options.enablePropertyValue||this.$el.find("[data-toggleable-json-editor]").hide();this.jsonEditor.render();return this},getData:function e(){var t=n.default.clone(this.jsonEditor.getData());t[this.options.enablePropertyKey]=this.options.enablePropertyValue;return t}});t.default=m},1568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=e.schema.hasEnableProperty()?u.default:n.default;return new t(e)};var r=a(1525);var n=i(r);var o=a(1567);var u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}},1818:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(570);var o=a(61);var u=a(0);var i=I(u);var l=a(1);var s=I(l);var d=a(1540);var c=I(d);var f=a(1544);var p=I(f);var v=a(1557);var h=I(v);var m=a(1543);var g=I(m);var y=a(866);var b=I(y);var _=a(865);var w=I(_);var E=a(1532);var O=I(E);var C=a(1529);var P=I(C);var j=a(73);var S=I(j);function I(e){return e&&e.__esModule?e:{default:e}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){A(t,e);function t(e){R(this,t);var a=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={groupId:""};a.handleGroupIdChange=a.handleGroupIdChange.bind(a);a.setRef=a.setRef.bind(a);a.handleCreate=a.handleCreate.bind(a);return a}r(t,[{key:"componentDidUpdate",value:function e(){if(!this.jsonSchemaView&&this.props.template){this.jsonSchemaView=new h.default({hideInheritance:true,schema:new b.default(this.props.schema),values:new w.default(this.props.template),showOnlyRequiredAndEmpty:true});this.jsonForm.appendChild(this.jsonSchemaView.render().el)}}},{key:"handleCreate",value:function e(){this.props.onCreate(this.jsonSchemaView.getData())}},{key:"handleGroupIdChange",value:function e(t){var a=this;this.setState({groupId:t},function(){a.props.onGroupIdChange((0,g.default)(a.state.groupId)?a.state.groupId:null)})}},{key:"setRef",value:function e(t){this.jsonForm=t}},{key:"render",value:function e(){var t=(0,g.default)(this.state.groupId);var a=void 0;a=this.props.isFetching?s.default.createElement(O.default,null):s.default.createElement(n.Form,{horizontal:true},s.default.createElement(p.default,{isValid:t,label:(0,o.t)("console.applications.agents.common.groups.new.groupId.title"),onChange:this.handleGroupIdChange,validationMessage:(0,o.t)("console.common.validation.invalidCharacters"),value:this.state.groupId}),s.default.createElement("div",{ref:this.setRef}));return s.default.createElement("div",null,s.default.createElement(P.default,{title:(0,o.t)("console.applications.oauth2.groups.new.title")}),s.default.createElement(n.Panel,null,s.default.createElement(n.Panel.Body,null,a),s.default.createElement(n.Panel.Footer,null,s.default.createElement(c.default,{backRoute:S.default.configuration.routes.realmsApplicationsOAuth2,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}]);return t}(l.Component);k.propTypes={isCreateAllowed:i.default.bool.isRequired,isFetching:i.default.bool.isRequired,onCreate:i.default.func.isRequired,onGroupIdChange:i.default.func.isRequired,schema:i.default.objectOf(i.default.object).isRequired,template:i.default.objectOf(i.default.object).isRequired};t.default=k}}]);
//# sourceMappingURL=110.9b712fd0d9.js.map