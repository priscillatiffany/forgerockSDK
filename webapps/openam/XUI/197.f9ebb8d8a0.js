(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[197],{1464:function(a,e,n){var l=n(62);a.exports=(l["default"]||l).template({1:function(a,e,n,l,t){var i,s,u=null!=e?e:a.nullContext||{},d=n.helperMissing,o="function",r=a.escapeExpression;return'                <div class="col-sm-6 col-md-3">\n                    <div class="panel-default panel am-panel-card '+(null!=(i=n.unless.call(u,null!=e?e.uuid:e,{name:"unless",hash:{},fn:a.program(2,t,0),inverse:a.noop,data:t}))?i:"")+' ">\n                        <div class="btn-group card-menu" role="group">\n                            <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n                                <i class="fa fa-ellipsis-v fa-lg"></i>\n                            </button>\n                            <ul class="dropdown-menu dropdown-menu-right" role="menu">\n                                <li>\n                                    <a\n                                        aria-haspopup="true"\n                                        data-edit\n                                        data-device-management-status="'+r((s=null!=(s=n.deviceManagementStatus||(null!=e?e.deviceManagementStatus:e))?s:d,typeof s===o?s.call(u,{name:"deviceManagementStatus",hash:{},data:t}):s))+'"\n                                        data-device-uuid="'+r((s=null!=(s=n.uuid||(null!=e?e.uuid:e))?s:d,typeof s===o?s.call(u,{name:"uuid",hash:{},data:t}):s))+'"\n                                        data-device-type="'+r((s=null!=(s=n.type||(null!=e?e.type:e))?s:d,typeof s===o?s.call(u,{name:"type",hash:{},data:t}):s))+'"\n                                        data-device-name="'+r((s=null!=(s=n.deviceName||(null!=e?e.deviceName:e))?s:d,typeof s===o?s.call(u,{name:"deviceName",hash:{},data:t}):s))+'"\n                                        href="#"\n                                        role="button"\n                                    >\n                                        <i class="fa fa-fw fa-pencil"></i> '+r((n.t||e&&e.t||d).call(u,"common.form.settings",{name:"t",hash:{},data:t}))+"\n                                    </a>\n                                </li>\n"+(null!=(i=n["if"].call(u,null!=e?e.uuid:e,{name:"if",hash:{},fn:a.program(4,t,0),inverse:a.noop,data:t}))?i:"")+'                            </ul>\n                        </div>\n                        <div class="card-body card-body-with-menu">\n                            <div class="card-icon-circle '+(null!=(i=n["if"].call(u,null!=e?e.uuid:e,{name:"if",hash:{},fn:a.program(9,t,0),inverse:a.program(11,t,0),data:t}))?i:"")+'">\n                                <i class="fa fa-'+r((s=null!=(s=n.icon||(null!=e?e.icon:e))?s:d,typeof s===o?s.call(u,{name:"icon",hash:{},data:t}):s))+'"></i>\n                            </div>\n                            <h3 class="card-name am-text-lines-one '+(null!=(i=n["if"].call(u,null!=e?e.uuid:e,{name:"if",hash:{},fn:a.program(13,t,0),inverse:a.program(15,t,0),data:t}))?i:"")+'"\n'+(null!=(i=n["if"].call(u,null!=e?e.uuid:e,{name:"if",hash:{},fn:a.program(17,t,0),inverse:a.noop,data:t}))?i:"")+"                            >"+r((s=null!=(s=n.title||(null!=e?e.title:e))?s:d,typeof s===o?s.call(u,{name:"title",hash:{},data:t}):s))+'</h3>\n                            <div class="card-subtext">\n                                <div class="am-text-lines-two small">\n                                    '+(null!=(i=(n.equals||e&&e.equals||d).call(u,null!=e?e.type:e,"webauthn",{name:"equals",hash:{},fn:a.program(19,t,0),inverse:a.program(21,t,0),data:t}))?i:"")+"\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n"},2:function(a,e,n,l,t){return"am-panel-card-muted"},4:function(a,e,n,l,t){var i,s,u=null!=e?e:a.nullContext||{},d=n.helperMissing,o="function",r=a.escapeExpression;return'                                <li role="separator" class="divider"></li>\n                                <li '+(null!=(i=(n.equals||e&&e.equals||d).call(u,null!=e?e.deviceManagementStatus:e,false,{name:"equals",hash:{},fn:a.program(5,t,0),inverse:a.noop,data:t}))?i:"")+'>\n                                <a\n                                    aria-haspopup="true"\n                                    data-device-uuid="'+r((s=null!=(s=n.uuid||(null!=e?e.uuid:e))?s:d,typeof s===o?s.call(u,{name:"uuid",hash:{},data:t}):s))+'"\n                                    data-device-type="'+r((s=null!=(s=n.type||(null!=e?e.type:e))?s:d,typeof s===o?s.call(u,{name:"type",hash:{},data:t}):s))+'"\n'+(null!=(i=(n.equals||e&&e.equals||d).call(u,null!=e?e.deviceManagementStatus:e,true,{name:"equals",hash:{},fn:a.program(7,t,0),inverse:a.noop,data:t}))?i:"")+'                                >\n                                <i class="fa fa-fw fa-times"></i> '+r((n.t||e&&e.t||d).call(u,"common.form.delete",{name:"t",hash:{},data:t}))+"\n                                </a>\n                                </li>\n"},5:function(a,e,n,l,t){return'class="disabled"'},7:function(a,e,n,l,t){return'                                    data-delete\n                                    href="#"\n                                    role="button"\n'},9:function(a,e,n,l,t){return"bg-primary"},11:function(a,e,n,l,t){return"bg-muted"},13:function(a,e,n,l,t){return"text-primary"},15:function(a,e,n,l,t){return"text-muted"},17:function(a,e,n,l,t){var i;return'                                    data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="'+a.escapeExpression((i=null!=(i=n.deviceName||(null!=e?e.deviceName:e))?i:n.helperMissing,"function"===typeof i?i.call(null!=e?e:a.nullContext||{},{name:"deviceName",hash:{},data:t}):i))+'"\n'},19:function(a,e,n,l,t){return" "},21:function(a,e,n,l,t){var i;return a.escapeExpression((i=null!=(i=n.deviceName||(null!=e?e.deviceName:e))?i:n.helperMissing,"function"===typeof i?i.call(null!=e?e:a.nullContext||{},{name:"deviceName",hash:{},data:t}):i))},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,t){var i,s=null!=e?e:a.nullContext||{};return'<div class="panel panel-default">\n    <div class="panel-heading" role="tab" id="deviceManagementCollapseHeading">\n        <h4 class="panel-title collapse-title">\n            <a data-toggle="collapse" href="#deviceManagementCollapse" aria-expanded="true" aria-controls="deviceManagementCollapseHeading" class="">'+a.escapeExpression((n.t||e&&e.t||n.helperMissing).call(s,"openam.authDevices.header",{name:"t",hash:{},data:t}))+'</a>\n        </h4>\n    </div>\n    <div id="deviceManagementCollapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="deviceManagementCollapse" aria-expanded="true">\n        <div class="panel-body">\n            <div class="row">\n'+(null!=(i=n.each.call(s,null!=e?e.devices:e,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?i:"")+"            </div>\n        </div>\n    </div>\n</div>\n"},useData:true})}}]);
//# sourceMappingURL=197.f9ebb8d8a0.js.map