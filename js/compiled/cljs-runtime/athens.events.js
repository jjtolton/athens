goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54473){var e = e54473;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-devtool","toggle-devtool",-1568832653),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"devtool","devtool",1338288336),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-left-sidebar","toggle-left-sidebar",-468830841),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"left-sidebar","left-sidebar",-1413634357),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-right-sidebar","toggle-right-sidebar",-1502056686),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar","right-sidebar",-603234618),new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = cljs.core.assoc_in((function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54476){var e = e54476;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = cljs.core.assoc_in((function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54477){var e = e54477;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = cljs.core.assoc_in((function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54478){var e = e54478;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__54479){
var vec__54480 = p__54479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54480,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54480,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})(),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),(function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54483){var e = e54483;
throw e;
}}):(function (db,p__54484){
var vec__54485 = p__54484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54485,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54485,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),uid);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),(function (db,p__54488){
var vec__54489 = p__54488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54489,(0),null);
var map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54489,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),map);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),(function (db,p__54492){
var vec__54493 = p__54492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54493,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54493,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54496){var e = e54496;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),(function (_,p__54497){
var vec__54498 = p__54497;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54498,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54498,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db,new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920),(function (p__54501){
var map__54502 = p__54501;
var map__54502__$1 = (((((!((map__54502 == null))))?(((((map__54502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54502):map__54502);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54502__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = localStorage.getItem("datascript/DB");
if(cljs.core.truth_(temp__5733__auto__)){
var stored = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(stored),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),(function (_,p__54504){
var vec__54505 = p__54504;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),datoms], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__54508_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__54508_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__54509_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__54509_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),next], null);
} else {
return null;
}
}));
athens.events.get_block = (function athens$events$get_block(id){
return cljs.core.deref((function (){var G__54510 = athens.db.dsdb;
var G__54511 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__54512 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__54510,G__54511,G__54512) : posh.reagent.pull.call(null,G__54510,G__54511,G__54512));
})());
});
athens.events.get_parent = (function athens$events$get_parent(id){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__54513 = cljs.core.deref(athens.db.dsdb);
var G__54514 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__54513,G__54514) : datascript.core.entity.call(null,G__54513,G__54514));
})())));
return athens.events.get_block(eid);
});
athens.events.rules = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null)], null);
athens.events.gen_block_uid = (function athens$events$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backspace","backspace",-696007848),(function (_,p__54515){
var vec__54516 = p__54515;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516,(0),null);
var _uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516,(1),null);
return null;
}));
athens.events.split_block = (function athens$events$split_block(uid,val,sel_start){
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),sel_start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,sel_start);
var new_uid = athens.events.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54519){
var vec__54520 = p__54519;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54523 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__54524 = cljs.core.deref(athens.db.dsdb);
var G__54525 = athens.events.rules;
var G__54526 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__54527 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54523,G__54524,G__54525,G__54526,G__54527) : datascript.core.q.call(null,G__54523,G__54524,G__54525,G__54526,G__54527));
})()));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new_uid], null)], null);
});
athens.events.bump_up = (function athens$events$bump_up(uid,val,sel_start){
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,sel_start);
var new_uid = athens.events.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54528){
var vec__54529 = p__54528;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54529,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54529,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54532 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__54533 = cljs.core.deref(athens.db.dsdb);
var G__54534 = athens.events.rules;
var G__54535 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__54536 = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54532,G__54533,G__54534,G__54535,G__54536) : datascript.core.q.call(null,G__54532,G__54533,G__54534,G__54535,G__54536));
})()));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new_uid], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),(function (_,p__54545){
var vec__54546 = p__54545;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(2),null);
var sel_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(3),null);
if((!((sel_start === (0))))){
return athens.events.split_block(uid,val,sel_start);
} else {
if(cljs.core.empty_QMARK_(val)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null)], null);
} else {
if(cljs.core.truth_((((sel_start === (0)))?val:false))){
return athens.events.bump_up(uid,val,sel_start);
} else {
return null;
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__54550){
var vec__54551 = p__54550;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54551,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54551,(1),null);
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.events.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54549_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1)),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(p1__54549_SHARP_));
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)))));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib))], null);
var reindex_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54554){
var vec__54555 = p__54554;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54555,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54555,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54558 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__54559 = cljs.core.deref(athens.db.dsdb);
var G__54560 = athens.events.rules;
var G__54561 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__54562 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54558,G__54559,G__54560,G__54561,G__54562) : datascript.core.q.call(null,G__54558,G__54559,G__54560,G__54561,G__54562));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_blocks], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (_,p__54565){
var vec__54566 = p__54565;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566,(1),null);
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.events.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1))], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54569){
var vec__54570 = p__54569;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54573 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__54574 = cljs.core.deref(athens.db.dsdb);
var G__54575 = athens.events.rules;
var G__54576 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa);
var G__54577 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54573,G__54574,G__54575,G__54576,G__54577) : datascript.core.q.call(null,G__54573,G__54574,G__54575,G__54576,G__54577));
})()));
if(cljs.core.truth_((function (){var and__4174__auto__ = parent;
if(cljs.core.truth_(and__4174__auto__)){
return grandpa;
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null)], null)], null);
} else {
return null;
}
}));
athens.events.target_child = (function athens$events$target_child(source,source_parent,target){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var new_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54578){
var vec__54579 = p__54578;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54582 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__54583 = cljs.core.deref(athens.db.dsdb);
var G__54584 = athens.events.rules;
var G__54585 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__54586 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54582,G__54583,G__54584,G__54585,G__54586) : datascript.core.q.call(null,G__54582,G__54583,G__54584,G__54585,G__54586));
})());
var new_target_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54587){
var vec__54588 = p__54587;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54591 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__54592 = cljs.core.deref(athens.db.dsdb);
var G__54593 = athens.events.rules;
var G__54594 = new cljs.core.Keyword(null,"dbid","dbid",-196647356).cljs$core$IFn$_invoke$arity$1(target);
var G__54595 = (0);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54591,G__54592,G__54593,G__54594,G__54595) : datascript.core.q.call(null,G__54591,G__54592,G__54593,G__54594,G__54595));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),new_target_children], null)], null);
});
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
athens.events.target_sibling_same_parent = (function athens$events$target_sibling_same_parent(source,target,parent){
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(t_order + (1))], null);
var inc_or_dec = (((s_order > t_order))?cljs.core.inc:cljs.core.dec);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54597){
var vec__54598 = p__54597;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54601 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__54602 = cljs.core.deref(athens.db.dsdb);
var G__54603 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__54604 = s_order;
var G__54605 = t_order;
var G__54606 = athens.events.between;
var G__54607 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607) : datascript.core.q.call(null,G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607));
})()));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null);
});
athens.events.target_sibling_diff_parent = (function athens$events$target_sibling_diff_parent(source,target,source_parent,target_parent){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target) + (1))], null);
var source_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54608){
var vec__54609 = p__54608;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54612 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__54613 = cljs.core.deref(athens.db.dsdb);
var G__54614 = athens.events.rules;
var G__54615 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__54616 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54612,G__54613,G__54614,G__54615,G__54616) : datascript.core.q.call(null,G__54612,G__54613,G__54614,G__54615,G__54616));
})());
var target_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54617){
var vec__54618 = p__54617;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54618,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54618,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__54621 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__54622 = cljs.core.deref(athens.db.dsdb);
var G__54623 = athens.events.rules;
var G__54624 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent);
var G__54625 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__54621,G__54622,G__54623,G__54624,G__54625) : datascript.core.q.call(null,G__54621,G__54622,G__54623,G__54624,G__54625));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),source_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),target_parent_children], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__54626){
var vec__54627 = p__54626;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54627,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54627,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54627,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54627,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)));

var opts__54367__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = (function (){var source = (function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = athens.events.get_block((function (){var opts__54367__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__54367__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__54368__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54368__auto__;
})();
var target = (function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = athens.events.get_block((function (){var opts__54367__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__54367__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__54368__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54368__auto__;
})();
var source_parent = (function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = athens.events.get_parent((function (){var opts__54367__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__54367__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__54368__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54368__auto__;
})();
var target_parent = (function (){var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = athens.events.get_parent((function (){var opts__54367__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__54367__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__54368__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54368__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54368__auto__;
})();
var opts__54367__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54368__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54368__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54368__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54368__auto__;
}catch (e54630){var e = e54630;
throw e;
}}):(function (_,p__54631){
var vec__54632 = p__54631;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(3),null);
var source = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
})));

//# sourceMappingURL=athens.events.js.map
