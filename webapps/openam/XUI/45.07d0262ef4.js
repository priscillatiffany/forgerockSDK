(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45,336,337,338,340,355,366],{1171:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l){var r;return null!=(r=e.invokePartial(n["util/_ButtonLink"],t,{name:"util/_ButtonLink",hash:{title:null!=t?t.title:t,icon:null!=t?t.icon:t,href:null!=t?t.href:t},data:l,indent:"        ",helpers:a,partials:n,decorators:e.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r;return'<div class="btn-toolbar page-toolbar" role="toolbar" aria-label="toolbar">\n'+(null!=(r=a["if"].call(null!=t?t:e.nullContext||{},null!=t?t.href:t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'    <ul class="btn-group pull-right" role="group">\n        <li class="btn-group tab-toggles"><a class="btn fr-btn-secondary" data-toggle="tab" href="#toggleAView"><i class="fa fa-th"></i></a></li>\n        <li class="btn-group tab-toggles"><a class="btn fr-btn-secondary" data-toggle="tab" href="#toggleBView"><i class="fa fa-list"></i></a></li>\n    </ul>\n</div>\n\n<div class="tab-content clearfix">\n    <div role="tabpanel" class="tab-pane" id="toggleAView">\n        <div class="row" id="viewAContainer"></div>\n    </div>\n    <div role="tabpanel" class="tab-pane" id="toggleBView">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="viewBContainer"></div>\n            </div>\n        </div>\n    </div>\n</div>\n'},usePartial:true,useData:true})},1172:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l){return"disabled"},3:function(e,t,a,n,l){var r;return'<i class="fa '+e.escapeExpression((r=null!=(r=a.icon||(null!=t?t.icon:t))?r:a.helperMissing,"function"===typeof r?r.call(null!=t?t:e.nullContext||{},{name:"icon",hash:{},data:l}):r))+'"></i> '},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r,i,s=null!=t?t:e.nullContext||{},o=a.helperMissing,u="function",c=e.escapeExpression;return'\x3c!--\n  Copyright 2016-2017 ForgeRock AS. All Rights Reserved\n \n  Use of this code requires a commercial software license with ForgeRock AS.\n  or with one of its affiliates. All use shall be exclusively subject\n  to such license between the licensee and ForgeRock AS.\n--\x3e\n<a class="btn '+c((i=null!=(i=a.btnClass||(null!=t?t.btnClass:t))?i:o,typeof i===u?i.call(s,{name:"btnClass",hash:{},data:l}):i))+" "+(null!=(r=a["if"].call(s,null!=t?t.disabled:t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'" href="'+c((i=null!=(i=a.href||(null!=t?t.href:t))?i:o,typeof i===u?i.call(s,{name:"href",hash:{},data:l}):i))+'" '+c((i=null!=(i=a.dataAttr||(null!=t?t.dataAttr:t))?i:o,typeof i===u?i.call(s,{name:"dataAttr",hash:{},data:l}):i))+">"+(null!=(r=a["if"].call(s,null!=t?t.icon:t,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+c((i=null!=(i=a.title||(null!=t?t.title:t))?i:o,typeof i===u?i.call(s,{name:"title",hash:{},data:l}):i))+"</a>\n"},useData:true})},1287:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r,i=null!=t?t:e.nullContext||{},s=a.helperMissing,o="function",u=e.escapeExpression;return'<div class="col-sm-6 col-md-4">\n    <div class="panel-default panel am-panel-card" data-realm-path="'+u((r=null!=(r=a.path||(null!=t?t.path:t))?r:s,typeof r===o?r.call(i,{name:"path",hash:{},data:l}):r))+'">\n        <div class="btn-group card-menu">\n            <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n                <i class="fa fa-ellipsis-v fa-lg"></i>\n            </button>\n            <ul class="dropdown-menu pull-left" role="menu">\n                <li><a href="'+u((a.routeTo||t&&t.routeTo||s).call(i,"editSite",null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'"><i class="fa fa-fw fa-pencil"></i> '+u((a.t||t&&t.t||s).call(i,"common.form.edit",{name:"t",hash:{},data:l}))+'</a></li>\n                <li class="divider"></li>\n                <li><a href="#" data-delete-item="'+u((r=null!=(r=a._id||(null!=t?t._id:t))?r:s,typeof r===o?r.call(i,{name:"_id",hash:{},data:l}):r))+'" ><i class="fa fa-fw fa-times"></i> '+u((a.t||t&&t.t||s).call(i,"common.form.delete",{name:"t",hash:{},data:l}))+'</a></li>\n            </ul>\n        </div>\n        <a href="'+u((a.routeTo||t&&t.routeTo||s).call(i,"editSite",null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'">\n            <div class="card-body card-body-with-menu">\n                <div class="card-icon-circle bg-primary">\n                    <i class="fa fa-bookmark-o"></i>\n                </div>\n                <h3 class="card-name am-text-lines-one text-primary" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="'+u((r=null!=(r=a._id||(null!=t?t._id:t))?r:s,typeof r===o?r.call(i,{name:"_id",hash:{},data:l}):r))+'">'+u((r=null!=(r=a._id||(null!=t?t._id:t))?r:s,typeof r===o?r.call(i,{name:"_id",hash:{},data:l}):r))+'</h3>\n                <div class="card-subtext">\n                    <div class="ellipsis">'+u((r=null!=(r=a.url||(null!=t?t.url:t))?r:s,typeof r===o?r.call(i,{name:"url",hash:{},data:l}):r))+"</div>\n                </div>\n            </div>\n        </a>\n    </div>\n</div>\n"},useData:true})},1288:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l){return"                    <th>"+e.escapeExpression(e.lambda(t,t))+"</th>\n"},3:function(e,t,a,n,l){var r,i,s=null!=t?t:e.nullContext||{},o=a.helperMissing,u=e.escapeExpression,c="function";return'            <tr>\n                <td class="wordwrap"><a href="'+u((a.routeTo||t&&t.routeTo||o).call(s,"editSite",null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'" title="'+u((a.t||t&&t.t||o).call(s,"common.form.edit",{name:"t",hash:{},data:l}))+'">'+u((i=null!=(i=a._id||(null!=t?t._id:t))?i:o,typeof i===c?i.call(s,{name:"_id",hash:{},data:l}):i))+'</a></td>\n                <td class="wordwrap">'+u((i=null!=(i=a.url||(null!=t?t.url:t))?i:o,typeof i===c?i.call(s,{name:"url",hash:{},data:l}):i))+"</td>\n                <td>\n"+(null!=(r=a.each.call(s,null!=t?t.secondaryURLs:t,{name:"each",hash:{},fn:e.program(4,l,0),inverse:e.noop,data:l}))?r:"")+"                </td>\n                <td>\n"+(null!=(r=a.each.call(s,null!=t?t.servers:t,{name:"each",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l}))?r:"")+'                </td>\n                <td class="fr-col-btn-2">\n                    <div class="btn-group">\n                        <a href="'+u((a.routeTo||t&&t.routeTo||o).call(s,"editSite",null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'" class="btn btn-link" title="'+u((a.t||t&&t.t||o).call(s,"common.form.edit",{name:"t",hash:{},data:l}))+'"><i class="fa fa-pencil"></i></a>\n                        <button type="button" data-delete-item="'+u((i=null!=(i=a._id||(null!=t?t._id:t))?i:o,typeof i===c?i.call(s,{name:"_id",hash:{},data:l}):i))+'" class="btn btn-link" title="'+u((a.t||t&&t.t||o).call(s,"common.form.delete",{name:"t",hash:{},data:l}))+'"><i class="fa fa-close"></i></button>\n                    </div>\n                </td>\n            </tr>\n'},4:function(e,t,a,n,l){var r;return"                        "+e.escapeExpression(e.lambda(t,t))+(null!=(r=a.unless.call(null!=t?t:e.nullContext||{},l&&l.last,{name:"unless",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l}))?r:"")+"\n"},5:function(e,t,a,n,l){return", "},7:function(e,t,a,n,l){var r;return"                        "+e.escapeExpression(e.lambda(null!=t?t.url:t,t))+(null!=(r=a.unless.call(null!=t?t:e.nullContext||{},l&&l.last,{name:"unless",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l}))?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r,i=null!=t?t:e.nullContext||{};return'<div class="table-container">\n    <table class="table">\n        <thead>\n            <tr>\n'+(null!=(r=a.each.call(i,null!=t?t.headers:t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'                <th class="fr-col-btn-2"></th>\n            </tr>\n        </thead>\n        <tbody>\n'+(null!=(r=a.each.call(i,null!=t?t.items:t,{name:"each",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+"        </tbody>\n    </table>\n</div>\n"},useData:true})},1289:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l){var r;return null!=(r=e.invokePartial(n["templates/admin/views/deployment/sites/_SiteCard"],t,{name:"templates/admin/views/deployment/sites/_SiteCard",data:l,indent:"    ",helpers:a,partials:n,decorators:e.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r;return null!=(r=a.each.call(null!=t?t:e.nullContext||{},null!=t?t.items:t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:""},usePartial:true,useData:true})},1291:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r,i=null!=t?t:e.nullContext||{},s=a.helperMissing,o=e.escapeExpression;return'<div class="container">\n'+(null!=(r=e.invokePartial(n["headers/_Title"],t,{name:"headers/_Title",hash:{title:"console.sites.list.title"},data:l,indent:"    ",helpers:a,partials:n,decorators:e.decorators}))?r:"")+'    <p class="page-description">'+o((a.t||t&&t.t||s).call(i,"console.sites.list.description",{name:"t",hash:{},data:l}))+'</p>\n    <div id="toggleCardList">\n        <div class="call-to-action-block panel hidden">\n            <h3>'+o((a.t||t&&t.t||s).call(i,"console.sites.list.empty",{name:"t",hash:{},data:l}))+'</h3>\n            <a href="'+o((a.routeTo||t&&t.routeTo||s).call(i,"newSite",{name:"routeTo",hash:{},data:l}))+'" class="btn btn-primary">\n                <i class="fa fa-plus"></i> '+o((a.t||t&&t.t||s).call(i,"console.sites.list.new",{name:"t",hash:{},data:l}))+"\n            </a>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1412:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var l=k(n);var r=a(19);var i=k(r);var s=a(114);var o=k(s);var u=a(1172);var c=k(u);var d=a(1291);var f=k(d);var p=a(560);var h=k(p);var v=a(1526);var m=k(v);var g=a(1287);var b=k(g);var w=a(1289);var y=k(w);var _=a(1619);var x=k(_);var A=a(1288);var C=k(A);var T=a(1618);var V=k(T);var E=a(1617);var P=k(E);function k(e){return e&&e.__esModule?e:{default:e}}var M=o.default.extend({template:f.default,events:{"click [data-delete-item]":"onDelete"},partials:{"util/_ButtonLink":c.default,"templates/admin/views/deployment/sites/_SiteCard":b.default},onDelete:function e(t){var a=this;t.preventDefault();var n=(0,i.default)(t.currentTarget).data().deleteItem;(0,m.default)({message:i.default.t("console.common.confirmDeleteText",{type:i.default.t("console.sites.common.confirmType")})},function(){x.default.sites.remove(n).then(function(){return a.render()},function(e){return h.default.addMessage({response:e,type:h.default.TYPE_DANGER})})})},renderToggleView:function e(t){var a=this;var n={headers:[i.default.t("console.sites.list.table.0"),i.default.t("console.sites.list.table.1"),i.default.t("console.sites.list.table.2"),i.default.t("console.sites.list.table.3")],items:t};this.toggleView=new P.default({el:"#toggleCardList",activeView:this.toggleView?this.toggleView.getActiveView():P.default.DEFAULT_VIEW,button:{href:"#deployment/sites/new",icon:"fa-plus",title:i.default.t("console.sites.list.new"),btnClass:"btn-primary"}});this.toggleView.render(function(e){new V.default({data:n,el:e.getElementA(),template:y.default,callback:function e(){a.$el.find('[data-toggle="popover"]').popover()}}).render();new V.default({data:n,el:e.getElementB(),template:C.default}).render()})},showCallToAction:function e(){this.$el.find(".call-to-action-block").removeClass("hidden")},render:function e(t,a){var n=this;x.default.sites.getAll().then(function(e){n.parentRender(function(){l.default.isEmpty(e)?n.showCallToAction():n.renderToggleView(e);a&&a()})},function(e){h.default.addMessage({type:h.default.TYPE_DANGER,response:e})})}});t.default=new M},1526:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(61);var l=a(655);var r=i(l);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,n.t)("common.form.delete");r.default.confirm({type:r.default.TYPE_DANGER,title:(0,n.t)("common.form.confirm")+" "+a,message:e.message?e.message:(0,n.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:a,btnOKClass:"btn-danger",callback:function e(a){a&&t&&t()}})}},1617:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(159);var l=s(n);var r=a(1171);var i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}t.default=l.default.View.extend({initialize:function e(t){this.options=t;this.options.activeView=this.options.activeView||0},getElementA:function e(){return"#viewAContainer"},getElementB:function e(){return"#viewBContainer"},getActiveView:function e(){var t=this.$el.find(".tab-pane.active").index();return t>0?t:0},render:function e(t){var a=(0,i.default)(this.options.button);this.$el.html(a);this.$el.find(".tab-pane").eq(this.options.activeView).addClass("active");this.$el.find(".tab-toggles").eq(this.options.activeView).addClass("active");t(this)}},{DEFAULT_VIEW:0})},1618:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var l=s(n);var r=a(159);var i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}t.default=i.default.View.extend({initialize:function e(t){var a=t.template,n=t.data,r=void 0===n?{}:n,i=t.callback,s=void 0===i?l.default.noop:i;if(!a)throw new Error('[TemplateBasedView] No "template" found.');this.template=a;this.callback=s;this.data=r},render:function e(){var t=this.template(this.data);this.$el.html(t);this.callback();return this}})},1619:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var l=v(n);var r=a(169);var i=v(r);var s=a(27);var o=v(s);var u=a(168);var c=v(u);var d=a(866);var f=v(d);var p=a(865);var h=v(p);function v(e){return e&&e.__esModule?e:{default:e}}var m=new i.default(""+o.default.host+o.default.context+"/json");var g=function e(t){return l.default.pick(t,["url","secondaryURLs"])};var b=function e(){return m.serviceCall({url:(0,c.default)("/global-config/sites?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",success:function e(t){var a=g(t.properties);t.properties=a;return t}})};var w=function e(t){return m.serviceCall({url:(0,c.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},success:function e(t,a){t.etag=a.getResponseHeader("ETag");return t}})};var y=function e(){return m.serviceCall({url:(0,c.default)("/global-config/sites?_action=template",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})};m.sites={getAll:function e(){return m.serviceCall({url:(0,c.default)("/global-config/sites?_queryFilter=true",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return l.default.sortBy(e.result,"_id")})},get:function e(t){return Promise.all([b(),w(t)]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})},create:function e(t){return m.serviceCall({url:(0,c.default)("/global-config/sites?_action=create",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(l.default.omit(t,["servers"]))})},update:function e(t,a,n){return m.serviceCall({url:(0,c.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":n},type:"PUT",data:JSON.stringify(g(a))})},remove:function e(t,a){var e=function e(t,a){return m.serviceCall({url:(0,c.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":a},type:"DELETE"})};return l.default.isUndefined(a)?w(t).then(function(a){return e(t,a.etag)}):e(t,a)},getInitialState:function e(){return Promise.all([b(),y()]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})}};t.default=m}}]);
//# sourceMappingURL=45.07d0262ef4.js.map