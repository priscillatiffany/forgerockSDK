(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125,220],{1164:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1391:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(3);var o=a(0);var i=k(o);var u=a(1);var s=k(u);var l=a(190);var c=a(1609);var f=a(61);var d=a(217);var v=a(1527);var p=k(v);var h=a(560);var m=k(h);var y=a(1870);var b=k(y);var g=a(73);var w=k(g);var _=a(1533);var E=k(_);var j=a(1522);var O=k(j);var P=a(1521);var S=k(P);function k(e){return e&&e.__esModule?e:{default:e}}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var D=function(e){C(t,e);function t(){M(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.state={isFetching:true};e.handleUpdate=e.handleUpdate.bind(e);e.handleDelete=e.handleDelete.bind(e);return e}r(t,[{key:"componentDidMount",value:function e(){var t=this;var a=this.props.router.params[0];var r=this.props.router.params[1];(0,c.getWithSchema)(a,r).then(function(e){var a=e.schema,r=e.data;t.setState({isFetching:false});t.props.setSchema(a);t.props.addInstance(r)},function(e){t.setState({isFetching:false});m.default.addMessage({response:e,type:m.default.TYPE_DANGER})})}},{key:"handleUpdate",value:function e(t){var a=this.props.router.params[0];var r=this.props.router.params[1];(0,c.update)(a,t,r).then(function(){m.default.addMessage({message:(0,f.t)("config.messages.AppMessages.changesSaved")})},function(e){m.default.addMessage({response:e,type:m.default.TYPE_DANGER})})}},{key:"handleDelete",value:function e(t){var a=this;t.preventDefault();E.default.showConfirmationBeforeDeleting({message:(0,f.t)("console.common.confirmDeleteItem")},function(){var e=a.props.router.params[0];var t=a.props.router.params[1];(0,c.remove)(e,[t]).then(function(){m.default.addMessage({message:(0,f.t)("config.messages.AppMessages.changesSaved")});w.default.routeTo(w.default.configuration.routes.realmsAuthenticationWebhooks,{args:[encodeURIComponent(e)],trigger:true})},function(e,t){m.default.addMessage({response:t,type:m.default.TYPE_DANGER})})})}},{key:"render",value:function e(){return s.default.createElement(b.default,{data:this.props.data,id:this.props.router.params[1],isFetching:this.state.isFetching,onDelete:this.handleDelete,onSave:this.handleUpdate,schema:this.props.schema})}}]);return t}(u.Component);D.propTypes={addInstance:i.default.func.isRequired,data:i.default.objectOf(i.default.object),router:S.default,schema:i.default.objectOf(i.default.object).isRequired,setSchema:i.default.func.isRequired};D=(0,p.default)(D,function(e,t){var a=t.router.params[1];return{data:e.remote.config.realm.authentication.webhooks.instances[a],schema:e.remote.config.realm.authentication.webhooks.schema}},function(e){return{addInstance:(0,n.bindActionCreators)(l.add,e),setSchema:(0,n.bindActionCreators)(d.setSchema,e)}});D=(0,O.default)(D);t.default=D},1521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=u(r);var o=a(0);var i=u(o);function u(e){return e&&e.__esModule?e:{default:e}}var s=i.default.shape({params:i.default.array.isRequired});t.default=s},1522:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=function t(a){var r=s.default.currentRoute;var o=s.default.extractParameters(r,c.default.getCurrentFragment());var u=s.default.applyDefaultParameters(r,o);var l={params:n.default.map(u,function(e){if(!e)return"";return decodeURIComponent(e)})};return i.default.createElement(e,n.default.extend({},a,{router:l}))};t.displayName="withRouter("+d(e)+")";t.WrappedComponent=e;return t};var r=a(6);var n=f(r);var o=a(1);var i=f(o);var u=a(73);var s=f(u);var l=a(63);var c=f(l);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return e.displayName||e.name||"Component"}},1525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1539);var r=a(6);var n=_(r);var o=a(19);var i=_(o);var u=a(159);var s=_(u);var l=a(1538);var c=_(l);var f=a(1164);var d=_(f);var v=a(1541);var p=_(v);var h=a(866);var m=_(h);var y=a(865);var b=_(y);var g=a(1531);var w=_(g);function _(e){return e&&e.__esModule?e:{default:e}}function E(e){var t=(0,d.default)();(0,i.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,a){var r=(0,i.default)(t);r.popoverclickaway({container:"#content",html:true,placement:"auto top",content:a.innerHTML}).click(function(e){e.preventDefault()});(0,i.default)(a).parent().append(r)})}function j(e){(0,i.default)(e).find("input:password").attr("placeholder",i.default.t("common.form.passwordPlaceholder"))}w.default.define("enum_plugin",function(e){var t=this,a=arguments;var r=e.schema;var o=n.default.indexOf(r.enum,"");var i=o>-1;var u=function e(){var r=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(r(n))return e.apply(t,a);return false}}()};var s=function e(){t.plugins.settings["dropdown_header"]={title:r.options.enum_titles[o]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,a);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};i?s():u()});function O(e,t){var a=t.schema,r=t.values,n=t.hideInheritance,o=void 0!==n&&n;var i=6;var u=4;c.default.plugins.selectize.enable=true;c.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};c.default.defaults.themes.openam=p.default.getTheme(i,u);var s=a.toFlatWithInheritanceMeta(r);var l=r.removeInheritance();s=s.raw;l=l.raw;var f=new c.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:o,iconlib:"fontawesome4",schema:s,theme:"openam"});E(e);j(e);f.setValue(l);return f}var P=s.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof b.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,a,r){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],r);this.options.values=this.options.values.addValueForPath([t,"value"],a);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=O(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new b.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,a){this.jsonEditor.watch(t,a)},destroy:function e(){var t=this;var a=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(a,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=P},1526:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=u;var r=a(61);var n=a(655);var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,r.t)("common.form.delete");o.default.confirm({type:o.default.TYPE_DANGER,title:(0,r.t)("common.form.confirm")+" "+a,message:e.message?e.message:(0,r.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:a,btnOKClass:"btn-danger",callback:function e(a){a&&t&&t()}})}},1527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var n=a(1548);var o=a(1);var i=l(o);var u=a(81);var s=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){return t.displayName||t.name||"Component"};var f=function e(t){for(var a=arguments.length,o=Array(a>1?a-1:0),u=1;u<a;u++)o[u-1]=arguments[u];var l=n.connect.apply(void 0,o)(t);var f=function e(t){return i.default.createElement(l,r({},t,{store:s.default}))};f.displayName="connectWithStore("+c(t)+")";f.WrappedComponent=t;return f};t.default=f},1528:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=v(r);var o=a(159);var i=v(o);var u=a(1525);var s=v(u);var l=a(866);var c=v(l);var f=a(865);var d=v(f);function v(e){return e&&e.__esModule?e:{default:e}}function p(e){e&&setTimeout(e,0)}var h=i.default.View.extend({initialize:function e(t){if(!(t.schema instanceof c.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof d.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var a=true;if(this.options.showOnlyRequiredAndEmpty){var r=this.options.schema.getRequiredPropertyKeys();var o=this.options.values.getEmptyValueKeys(t);var i=n.default.intersection(r,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i);a=!n.default.isEmpty(i)}this.subview=new s.default({displayForm:a,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();p(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,a){this.subview&&this.subview.watch(t,a)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1529:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var n=u(r);var o=a(1);var i=u(o);function u(e){return e&&e.__esModule?e:{default:e}}var s=function e(t){var a=t.children,r=t.icon,n=t.title,o=t.type;var u=o?"deep":"shallow";var s=r?i.default.createElement("span",{className:"header-icon pull-left bg-primary"},i.default.createElement("i",{className:"fa fa-"+r})):null;var l=o?i.default.createElement("h4",{className:"page-type"},o):null;return i.default.createElement("header",{className:"page-header page-header-no-border clearfix"},s,i.default.createElement("div",{className:"button-group pull-right "+u+"-page-header-button-group"},a),i.default.createElement("div",{className:"pull-left"},l,i.default.createElement("h1",{className:"wordwrap"},n)))};s.propTypes={children:n.default.node,icon:n.default.string,title:n.default.string.isRequired,type:n.default.string};t.default=s},1532:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=i(r);var o=a(61);function i(e){return e&&e.__esModule?e:{default:e}}var u=function e(){return n.default.createElement("p",{className:"loading text-muted"},n.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),n.default.createElement("span",null,(0,o.t)("console.common.loading")))};t.default=u},1533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1537);var n=l(r);var o=a(1536);var i=l(o);var u=a(1526);var s=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,s.default)(e,t)};c.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,i.default)(e,t)};t.default=c},1536:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=r;function r(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1559:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(570);var n=a(61);var o=a(0);var i=l(o);var u=a(1);var s=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var a=t.disabled,o=t.onSaveClick;return s.default.createElement(r.Clearfix,null,s.default.createElement("div",{className:"pull-right"},s.default.createElement(r.Button,{bsStyle:"primary",disabled:a,onClick:o},(0,n.t)("common.form.saveChanges"))))};c.defaultProps={disabled:false};c.propTypes={disabled:i.default.bool,onSaveClick:i.default.func.isRequired};t.default=c},1609:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){var a=[];var r=true;var n=false;var o=void 0;try{for(var i=e[Symbol.iterator](),u;!(r=(u=i.next()).done);r=true){a.push(u.value);if(t&&a.length===t)break}}catch(e){n=true;o=e}finally{try{!r&&i["return"]&&i["return"]()}finally{if(n)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.getSchema=y;t.create=b;t.update=g;t.get=w;t.getAll=_;t.getWithSchema=E;t.getInitialState=j;t.remove=O;var o=a(6);var i=a(169);var u=d(i);var s=a(27);var l=d(s);var c=a(168);var f=d(c);function d(e){return e&&e.__esModule?e:{default:e}}var v=new u.default(""+l.default.host+l.default.context+"/json");var p="/realm-config/webhooks";var h={"Accept-API-Version":"protocol=2.0,resource=1.0"};function m(e){var t=function e(t){return(0,o.omitBy)(t,function(e,t){return(0,o.startsWith)(t,"_")})};return n({},t(e))}function y(e){return v.serviceCall({url:(0,f.default)(p+"/?_action=schema",{realm:e}),headers:h,type:"POST"})}function b(e,t){return v.serviceCall({url:(0,f.default)(p+"/"+t,{realm:e}),type:"PUT",headers:n({},h,{"If-None-Match":"*"}),data:"{}",errorsHandlers:{incorrectRevisionError:{status:412}}})}function g(e,t,a){return v.serviceCall({url:(0,f.default)(p+"/"+a,{realm:e}),type:"PUT",headers:h,data:JSON.stringify(m(t))})}function w(e,t){return v.serviceCall({url:(0,f.default)(p+"/"+t+"?forUI=true",{realm:e}),headers:h})}function _(e){return v.serviceCall({url:(0,f.default)(p+"?_queryFilter=true",{realm:e}),headers:h,suppressSpinner:true,type:"GET"})}function E(e,t){var a=y(e);var n=w(e,t);return Promise.all([a,n]).then(function(e){var t=r(e,2),a=t[0],n=t[1];return{schema:a,data:n}})}function j(e){var t=v.serviceCall({url:(0,f.default)(p+"?_action=schema",{realm:e}),headers:h,type:"POST"});var a=v.serviceCall({url:(0,f.default)(p+"?_action=template",{realm:e}),headers:h,type:"POST"});return Promise.all([t,a]).then(function(e){var t=r(e,2),a=t[0],n=t[1];return{schema:a,template:n}})}function O(e,t){var a=(0,o.map)(t,function(t){return v.serviceCall({url:(0,f.default)(p+"/"+t,{realm:e}),headers:h,type:"DELETE"})});return Promise.all(a)}},1870:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(570);var o=a(0);var i=E(o);var u=a(1);var s=E(u);var l=a(61);var c=a(1559);var f=E(c);var d=a(1528);var v=E(d);var p=a(866);var h=E(p);var m=a(865);var y=E(m);var b=a(1532);var g=E(b);var w=a(1529);var _=E(w);function E(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S=function(e){P(t,e);function t(e){j(this,t);var a=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.setRef=a.setRef.bind(a);a.handleSave=a.handleSave.bind(a);return a}r(t,[{key:"componentWillReceiveProps",value:function e(t){this.jsonSchemaView&&this.jsonSchemaView.setData(t.values)}},{key:"componentDidUpdate",value:function e(){if(!this.jsonSchemaView&&this.props.data&&this.props.schema){this.jsonSchemaView=new v.default({schema:new h.default(this.props.schema),values:new y.default(this.props.data)});this.jsonForm.appendChild(this.jsonSchemaView.render().el)}}},{key:"setRef",value:function e(t){this.jsonForm=t}},{key:"handleSave",value:function e(){this.props.onSave(this.jsonSchemaView.getData())}},{key:"render",value:function e(){var t=this.props.isFetching?s.default.createElement(g.default,null):s.default.createElement(n.Form,null,s.default.createElement("div",{ref:this.setRef}));return s.default.createElement("div",null,s.default.createElement(_.default,{icon:"anchor",title:this.props.id,type:(0,l.t)("console.authentication.webhooks.edit.type")},s.default.createElement(n.Button,{onClick:this.props.onDelete},s.default.createElement("i",{className:"fa fa-times"})," ",(0,l.t)("common.form.delete"))),s.default.createElement(n.Panel,null,s.default.createElement(n.Panel.Body,null,t),s.default.createElement(n.Panel.Footer,null,s.default.createElement(f.default,{onSaveClick:this.handleSave}))))}}]);return t}(u.Component);S.propTypes={data:i.default.objectOf(i.default.object).isRequired,id:i.default.string.isRequired,isFetching:i.default.bool.isRequired,onDelete:i.default.func.isRequired,onSave:i.default.func.isRequired,schema:i.default.objectOf(i.default.object).isRequired,values:i.default.objectOf(i.default.object).isRequired};t.default=S}}]);
//# sourceMappingURL=125.29905e1a99.js.map