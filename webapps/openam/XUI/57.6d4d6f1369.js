(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{1424:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(570);var l=r(61);var u=r(1);var o=m(u);var i=r(1627);var c=m(i);var f=r(1529);var s=m(f);var d=r(1626);var p=m(d);var v=r(1625);var h=m(v);function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){b(t,e);function t(e){g(this,t);var r=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={items:[]};return r}a(t,[{key:"componentDidMount",value:function e(){var t=this;h.default.authentication.getAll().then(function(e){t.setState({items:e})})}},{key:"render",value:function e(){var t=this.state.items.map(function(e){return o.default.createElement(n.ListGroupItem,{href:"#configure/authentication/"+e._id,key:e._id},e.name)});return o.default.createElement(n.Grid,null,o.default.createElement(s.default,{title:(0,l.t)("config.AppConfiguration.Navigation.links.configure.authentication")}),o.default.createElement(p.default,null,(0,l.t)("console.configuration.authentication.description")),o.default.createElement(n.Panel,null,o.default.createElement(n.Panel.Body,null,o.default.createElement(c.default,{description:(0,l.t)("console.configuration.authentication.description"),header:(0,l.t)("console.configuration.authentication.core.title")},o.default.createElement(n.ListGroup,null,o.default.createElement(n.ListGroupItem,{href:"#configure/authentication/core"},(0,l.t)("console.configuration.authentication.core.coreAttributes")))),o.default.createElement(c.default,{description:(0,l.t)("console.configuration.authentication.modules.title"),header:(0,l.t)("console.configuration.authentication.modules.title")},o.default.createElement(n.ListGroup,null,t)))))}}]);return t}(u.Component);t.default=_},1529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=o(a);var l=r(1);var u=o(l);function o(e){return e&&e.__esModule?e:{default:e}}var i=function e(t){var r=t.children,a=t.icon,n=t.title,l=t.type;var o=l?"deep":"shallow";var i=a?u.default.createElement("span",{className:"header-icon pull-left bg-primary"},u.default.createElement("i",{className:"fa fa-"+a})):null;var c=l?u.default.createElement("h4",{className:"page-type"},l):null;return u.default.createElement("header",{className:"page-header page-header-no-border clearfix"},i,u.default.createElement("div",{className:"button-group pull-right "+o+"-page-header-button-group"},r),u.default.createElement("div",{className:"pull-left"},c,u.default.createElement("h1",{className:"wordwrap"},n)))};i.propTypes={children:n.default.node,icon:n.default.string,title:n.default.string.isRequired,type:n.default.string};t.default=i},1625:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=h(a);var l=r(169);var u=h(l);var o=r(27);var i=h(o);var c=r(168);var f=h(c);var s=r(866);var d=h(s);var p=r(865);var v=h(p);function h(e){return e&&e.__esModule?e:{default:e}}var m=new u.default(""+i.default.host+i.default.context+"/json");function g(e){return"core"===e?"":"/modules/"+e}m.authentication={getAll:function e(){return m.serviceCall({url:(0,f.default)("/global-config/authentication/modules?_action=getAllTypes",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return n.default.sortBy(e.result,"name")})},schema:function e(){var t=function e(t){return m.serviceCall({url:(0,f.default)("/global-config/authentication?_action="+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})};return Promise.all([t("schema"),t("template")]).then(function(e){return{schema:e[0],values:e[1]}})},get:function e(t){var r=g(t);var a=function e(){return m.serviceCall({url:(0,f.default)("/global-config/authentication"+r+"?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new d.default(e)})};var n=function e(){return m.serviceCall({url:(0,f.default)("/global-config/authentication"+r,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return new v.default(e)})};return Promise.all([a(),n()]).then(function(e){return{schema:e[0],values:e[1],name:e[1].raw._type.name}})},update:function e(t,r){return m.serviceCall({url:(0,f.default)("/global-config/authentication"+g(t),{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:r})}};t.default=m},1626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=o(a);var l=r(1);var u=o(l);function o(e){return e&&e.__esModule?e:{default:e}}var i=function e(t){var r=t.children;return u.default.createElement("p",{className:"page-description"},r)};i.propTypes={children:n.default.node};t.default=i},1627:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=o(a);var l=r(1);var u=o(l);function o(e){return e&&e.__esModule?e:{default:e}}var i=function e(t){var r=t.children,a=t.header,n=t.description;var l=n?u.default.createElement("p",{className:"block-description"},n):void 0;return u.default.createElement("div",{className:"block clearfix"},u.default.createElement("h3",{className:"block-header"},a),l,r)};i.propTypes={children:n.default.oneOfType([n.default.arrayOf(n.default.node),n.default.node]).isRequired,description:n.default.string,header:n.default.string.isRequired};t.default=i}}]);
//# sourceMappingURL=57.6d4d6f1369.js.map