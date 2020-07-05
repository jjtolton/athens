goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50209,match){
var map__50210 = p__50209;
var map__50210__$1 = (((((!((map__50210 == null))))?(((((map__50210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50210):map__50210);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50212(s__50213){
return (new cljs.core.LazySeq(null,(function (){
var s__50213__$1 = s__50213;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50213__$1);
if(temp__5735__auto__){
var s__50213__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50213__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50213__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50215 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50214 = (0);
while(true){
if((i__50214 < size__4581__auto__)){
var vec__50216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50214);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(1),null);
cljs.core.chunk_append(b__50215,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50234 = (i__50214 + (1));
i__50214 = G__50234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50215),reitit$frontend$controllers$get_identity_$_iter__50212(cljs.core.chunk_rest(s__50213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50215),null);
}
} else {
var vec__50219 = cljs.core.first(s__50213__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50212(cljs.core.rest(s__50213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50222 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50222) : f.call(null,G__50222));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50223_50236 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50224_50237 = null;
var count__50225_50238 = (0);
var i__50226_50239 = (0);
while(true){
if((i__50226_50239 < count__50225_50238)){
var controller_50240 = chunk__50224_50237.cljs$core$IIndexed$_nth$arity$2(null,i__50226_50239);
reitit.frontend.controllers.apply_controller(controller_50240,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50241 = seq__50223_50236;
var G__50242 = chunk__50224_50237;
var G__50243 = count__50225_50238;
var G__50244 = (i__50226_50239 + (1));
seq__50223_50236 = G__50241;
chunk__50224_50237 = G__50242;
count__50225_50238 = G__50243;
i__50226_50239 = G__50244;
continue;
} else {
var temp__5735__auto___50245 = cljs.core.seq(seq__50223_50236);
if(temp__5735__auto___50245){
var seq__50223_50246__$1 = temp__5735__auto___50245;
if(cljs.core.chunked_seq_QMARK_(seq__50223_50246__$1)){
var c__4609__auto___50247 = cljs.core.chunk_first(seq__50223_50246__$1);
var G__50248 = cljs.core.chunk_rest(seq__50223_50246__$1);
var G__50249 = c__4609__auto___50247;
var G__50250 = cljs.core.count(c__4609__auto___50247);
var G__50251 = (0);
seq__50223_50236 = G__50248;
chunk__50224_50237 = G__50249;
count__50225_50238 = G__50250;
i__50226_50239 = G__50251;
continue;
} else {
var controller_50252 = cljs.core.first(seq__50223_50246__$1);
reitit.frontend.controllers.apply_controller(controller_50252,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50253 = cljs.core.next(seq__50223_50246__$1);
var G__50254 = null;
var G__50255 = (0);
var G__50256 = (0);
seq__50223_50236 = G__50253;
chunk__50224_50237 = G__50254;
count__50225_50238 = G__50255;
i__50226_50239 = G__50256;
continue;
}
} else {
}
}
break;
}

var seq__50227_50257 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50228_50258 = null;
var count__50229_50259 = (0);
var i__50230_50260 = (0);
while(true){
if((i__50230_50260 < count__50229_50259)){
var controller_50261 = chunk__50228_50258.cljs$core$IIndexed$_nth$arity$2(null,i__50230_50260);
reitit.frontend.controllers.apply_controller(controller_50261,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50262 = seq__50227_50257;
var G__50263 = chunk__50228_50258;
var G__50264 = count__50229_50259;
var G__50265 = (i__50230_50260 + (1));
seq__50227_50257 = G__50262;
chunk__50228_50258 = G__50263;
count__50229_50259 = G__50264;
i__50230_50260 = G__50265;
continue;
} else {
var temp__5735__auto___50266 = cljs.core.seq(seq__50227_50257);
if(temp__5735__auto___50266){
var seq__50227_50267__$1 = temp__5735__auto___50266;
if(cljs.core.chunked_seq_QMARK_(seq__50227_50267__$1)){
var c__4609__auto___50268 = cljs.core.chunk_first(seq__50227_50267__$1);
var G__50269 = cljs.core.chunk_rest(seq__50227_50267__$1);
var G__50270 = c__4609__auto___50268;
var G__50271 = cljs.core.count(c__4609__auto___50268);
var G__50272 = (0);
seq__50227_50257 = G__50269;
chunk__50228_50258 = G__50270;
count__50229_50259 = G__50271;
i__50230_50260 = G__50272;
continue;
} else {
var controller_50273 = cljs.core.first(seq__50227_50267__$1);
reitit.frontend.controllers.apply_controller(controller_50273,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50274 = cljs.core.next(seq__50227_50267__$1);
var G__50275 = null;
var G__50276 = (0);
var G__50277 = (0);
seq__50227_50257 = G__50274;
chunk__50228_50258 = G__50275;
count__50229_50259 = G__50276;
i__50230_50260 = G__50277;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map