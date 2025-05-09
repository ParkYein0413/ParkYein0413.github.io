(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function kN(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var iy={exports:{}},Yc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function MN(){if(Pb)return Yc;Pb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:l}}return Yc.Fragment=e,Yc.jsx=t,Yc.jsxs=t,Yc}var Nb;function LN(){return Nb||(Nb=1,iy.exports=MN()),iy.exports}var Z=LN(),sy={exports:{}},Wc={},ay={exports:{}},oy={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function UN(){return xb||(xb=1,function(n){function e(he,be){var Te=he.length;he.push(be);e:for(;0<Te;){var xe=Te-1>>>1,O=he[xe];if(0<a(O,be))he[xe]=be,he[Te]=O,Te=xe;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var be=he[0],Te=he.pop();if(Te!==be){he[0]=Te;e:for(var xe=0,O=he.length,se=O>>>1;xe<se;){var ge=2*(xe+1)-1,me=he[ge],fe=ge+1,Ce=he[fe];if(0>a(me,Te))fe<O&&0>a(Ce,me)?(he[xe]=Ce,he[fe]=Te,xe=fe):(he[xe]=me,he[ge]=Te,xe=ge);else if(fe<O&&0>a(Ce,Te))he[xe]=Ce,he[fe]=Te,xe=fe;else break e}}return be}function a(he,be){var Te=he.sortIndex-be.sortIndex;return Te!==0?Te:he.id-be.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var m=[],p=[],y=1,v=null,w=3,S=!1,P=!1,M=!1,U=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function G(he){for(var be=t(p);be!==null;){if(be.callback===null)r(p);else if(be.startTime<=he)r(p),be.sortIndex=be.expirationTime,e(m,be);else break;be=t(p)}}function ae(he){if(M=!1,G(he),!P)if(t(m)!==null)P=!0,xt();else{var be=t(p);be!==null&&It(ae,be.startTime-he)}}var ie=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function N(){if(ie){var he=n.unstable_now();R=he;var be=!0;try{e:{P=!1,M&&(M=!1,j(le),le=-1),S=!0;var Te=w;try{t:{for(G(he),v=t(m);v!==null&&!(v.expirationTime>he&&A());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,w=v.priorityLevel;var O=xe(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,G(he),be=!0;break t}v===t(m)&&r(m),G(he)}else r(m);v=t(m)}if(v!==null)be=!0;else{var se=t(p);se!==null&&It(ae,se.startTime-he),be=!1}}break e}finally{v=null,w=Te,S=!1}be=void 0}}finally{be?k():ie=!1}}}var k;if(typeof Y=="function")k=function(){Y(N)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,x=z.port2;z.port1.onmessage=N,k=function(){x.postMessage(null)}}else k=function(){U(N,0)};function xt(){ie||(ie=!0,k())}function It(he,be){le=U(function(){he(n.unstable_now())},be)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){P||S||(P=!0,xt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var be=3;break;default:be=w}var Te=w;w=be;try{return he()}finally{w=Te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,be){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var Te=w;w=he;try{return be()}finally{w=Te}},n.unstable_scheduleCallback=function(he,be,Te){var xe=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?xe+Te:xe):Te=xe,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Te+O,he={id:y++,callback:be,priorityLevel:he,startTime:Te,expirationTime:O,sortIndex:-1},Te>xe?(he.sortIndex=Te,e(p,he),t(m)===null&&he===t(p)&&(M?(j(le),le=-1):M=!0,It(ae,Te-xe))):(he.sortIndex=O,e(m,he),P||S||(P=!0,xt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var be=w;return function(){var Te=w;w=be;try{return he.apply(this,arguments)}finally{w=Te}}}}(oy)),oy}var Ob;function BN(){return Ob||(Ob=1,ay.exports=UN()),ay.exports}var ly={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb;function zN(){if(Vb)return Ne;Vb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,M={};function U(O,se,ge){this.props=O,this.context=se,this.refs=M,this.updater=ge||S}U.prototype.isReactComponent={},U.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},U.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function j(){}j.prototype=U.prototype;function Y(O,se,ge){this.props=O,this.context=se,this.refs=M,this.updater=ge||S}var G=Y.prototype=new j;G.constructor=Y,P(G,U.prototype),G.isPureReactComponent=!0;var ae=Array.isArray,ie={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,se,ge,me,fe,Ce){return ge=Ce.ref,{$$typeof:n,type:O,key:se,ref:ge!==void 0?ge:null,props:Ce}}function R(O,se){return D(O.type,se,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function N(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return se[ge]})}var k=/\/+/g;function z(O,se){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):se.toString(36)}function x(){}function xt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(x,x):(O.status="pending",O.then(function(se){O.status==="pending"&&(O.status="fulfilled",O.value=se)},function(se){O.status==="pending"&&(O.status="rejected",O.reason=se)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,se,ge,me,fe){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case n:case e:Re=!0;break;case y:return Re=O._init,It(Re(O._payload),se,ge,me,fe)}}if(Re)return fe=fe(O),Re=me===""?"."+z(O,0):me,ae(fe)?(ge="",Re!=null&&(ge=Re.replace(k,"$&/")+"/"),It(fe,se,ge,"",function(Xe){return Xe})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(k,"$&/")+"/")+Re)),se.push(fe)),1;Re=0;var ut=me===""?".":me+":";if(ae(O))for(var ke=0;ke<O.length;ke++)me=O[ke],Ce=ut+z(me,ke),Re+=It(me,se,ge,Ce,fe);else if(ke=w(O),typeof ke=="function")for(O=ke.call(O),ke=0;!(me=O.next()).done;)me=me.value,Ce=ut+z(me,ke++),Re+=It(me,se,ge,Ce,fe);else if(Ce==="object"){if(typeof O.then=="function")return It(xt(O),se,ge,me,fe);throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Re}function he(O,se,ge){if(O==null)return O;var me=[],fe=0;return It(O,me,"","",function(Ce){return se.call(ge,Ce,fe++)}),me}function be(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xe(){}return Ne.Children={map:he,forEach:function(O,se,ge){he(O,function(){se.apply(this,arguments)},ge)},count:function(O){var se=0;return he(O,function(){se++}),se},toArray:function(O){return he(O,function(se){return se})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=U,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=Y,Ne.StrictMode=r,Ne.Suspense=m,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,se,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var me=P({},O.props),fe=O.key,Ce=void 0;if(se!=null)for(Re in se.ref!==void 0&&(Ce=void 0),se.key!==void 0&&(fe=""+se.key),se)!le.call(se,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&se.ref===void 0||(me[Re]=se[Re]);var Re=arguments.length-2;if(Re===1)me.children=ge;else if(1<Re){for(var ut=Array(Re),ke=0;ke<Re;ke++)ut[ke]=arguments[ke+2];me.children=ut}return D(O.type,fe,void 0,void 0,Ce,me)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Ne.createElement=function(O,se,ge){var me,fe={},Ce=null;if(se!=null)for(me in se.key!==void 0&&(Ce=""+se.key),se)le.call(se,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(fe[me]=se[me]);var Re=arguments.length-2;if(Re===1)fe.children=ge;else if(1<Re){for(var ut=Array(Re),ke=0;ke<Re;ke++)ut[ke]=arguments[ke+2];fe.children=ut}if(O&&O.defaultProps)for(me in Re=O.defaultProps,Re)fe[me]===void 0&&(fe[me]=Re[me]);return D(O,Ce,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:be}},Ne.memo=function(O,se){return{$$typeof:p,type:O,compare:se===void 0?null:se}},Ne.startTransition=function(O){var se=ie.T,ge={};ie.T=ge;try{var me=O(),fe=ie.S;fe!==null&&fe(ge,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(xe,Te)}catch(Ce){Te(Ce)}finally{ie.T=se}},Ne.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Ne.use=function(O){return ie.H.use(O)},Ne.useActionState=function(O,se,ge){return ie.H.useActionState(O,se,ge)},Ne.useCallback=function(O,se){return ie.H.useCallback(O,se)},Ne.useContext=function(O){return ie.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,se){return ie.H.useDeferredValue(O,se)},Ne.useEffect=function(O,se){return ie.H.useEffect(O,se)},Ne.useId=function(){return ie.H.useId()},Ne.useImperativeHandle=function(O,se,ge){return ie.H.useImperativeHandle(O,se,ge)},Ne.useInsertionEffect=function(O,se){return ie.H.useInsertionEffect(O,se)},Ne.useLayoutEffect=function(O,se){return ie.H.useLayoutEffect(O,se)},Ne.useMemo=function(O,se){return ie.H.useMemo(O,se)},Ne.useOptimistic=function(O,se){return ie.H.useOptimistic(O,se)},Ne.useReducer=function(O,se,ge){return ie.H.useReducer(O,se,ge)},Ne.useRef=function(O){return ie.H.useRef(O)},Ne.useState=function(O){return ie.H.useState(O)},Ne.useSyncExternalStore=function(O,se,ge){return ie.H.useSyncExternalStore(O,se,ge)},Ne.useTransition=function(){return ie.H.useTransition()},Ne.version="19.0.0",Ne}var kb;function Nv(){return kb||(kb=1,ly.exports=zN()),ly.exports}var uy={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function FN(){if(Mb)return wn;Mb=1;var n=Nv();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(m,p,null,y)},wn.flushSync=function(m){var p=u.T,y=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=y,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(m,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Lb;function qN(){if(Lb)return uy.exports;Lb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),uy.exports=FN(),uy.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function jN(){if(Ub)return Wc;Ub=1;var n=BN(),e=Nv(),t=qN();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),ae=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case m:return"Fragment";case d:return"Portal";case y:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case U:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case P:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case j:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case Y:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,k,z;function x(i){if(k===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||"",z=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+i+z}var xt=!1;function It(i,s){if(!i||xt)return"";xt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(X){var $=X}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(X){$=X}i.call(ne.prototype)}}else{try{throw Error()}catch(X){$=X}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(X){if(X&&$&&typeof X.stack=="string")return[X.stack,$.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),L=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===L.length)for(c=C.length-1,f=L.length-1;1<=c&&0<=f&&C[c]!==L[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==L[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==L[f]){var J=`
`+C[c].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=c&&0<=f);break}}}finally{xt=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?x(o):""}function he(i){switch(i.tag){case 26:case 27:case 5:return x(i.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function be(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Te(i){var s=i,o=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(o=s.return),i=s.return;while(i)}return s.tag===3?o:null}function xe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(Te(i)!==i)throw Error(r(188))}function se(i){var s=i.alternate;if(!s){if(s=Te(i),s===null)throw Error(r(188));return s!==i?null:i}for(var o=i,c=s;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(o.return!==c.return)o=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===o){T=!0,o=f,c=g;break}if(b===c){T=!0,c=f,o=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===o){T=!0,o=g,c=f;break}if(b===c){T=!0,c=g,o=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(o.alternate!==c)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var me=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],ut=-1;function ke(i){return{current:i}}function Xe(i){0>ut||(i.current=Re[ut],Re[ut]=null,ut--)}function $e(i,s){ut++,Re[ut]=i.current,i.current=s}var Ut=ke(null),Zt=ke(null),rr=ke(null),as=ke(null);function os(i,s){switch($e(rr,s),$e(Zt,i),$e(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?sb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=sb(i),s=ab(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Xe(Ut),$e(Ut,s)}function _i(){Xe(Ut),Xe(Zt),Xe(rr)}function Hu(i){i.memoizedState!==null&&$e(as,i);var s=Ut.current,o=ab(s,i.type);s!==o&&($e(Zt,i),$e(Ut,o))}function qo(i){Zt.current===i&&(Xe(Ut),Xe(Zt)),as.current===i&&(Xe(as),Hc._currentValue=Ce)}var jo=Object.prototype.hasOwnProperty,Ia=n.unstable_scheduleCallback,Ho=n.unstable_cancelCallback,ag=n.unstable_shouldYield,Gu=n.unstable_requestPaint,Ln=n.unstable_now,Cd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Dd=n.unstable_LowPriority,$u=n.unstable_IdlePriority,og=n.log,Aa=n.unstable_setDisableYieldValue,ls=null,En=null;function Ku(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function kr(i){if(typeof og=="function"&&Aa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Nd,Qu=Math.log,Pd=Math.LN2;function Nd(i){return i>>>=0,i===0?32:31-(Qu(i)/Pd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var o=i.pendingLanes;if(o===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Ir(o):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=o&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=o&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Go(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function $o(i){for(var s=[],o=0;31>o;o++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function xd(i,s,o,c,f,g){var T=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,L=i.hiddenUpdates;for(o=T&~o;0<o;){var J=31-Rn(o),ne=1<<J;b[J]=0,C[J]=-1;var $=L[J];if($!==null)for(L[J]=null,J=0;J<$.length;J++){var X=$[J];X!==null&&(X.lane&=-536870913)}o&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,o){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|o&4194218}function fs(i,s){var o=i.entangledLanes|=s;for(i=i.entanglements;o;){var c=31-Rn(o),f=1<<c;f&s|i[c]&s&&(i[c]|=s),o&=~f}}function Od(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Vd(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:Ib(i.type))}function ms(i,s){var o=fe.p;try{return fe.p=i,s()}finally{fe.p=o}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Sa="__reactEvents$"+Lr,Ko="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Wu="__reactResources$"+Lr,ps="__reactMarker$"+Lr;function Ra(i){delete i[tn],delete i[$t],delete i[Sa],delete i[Ko],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var o=i.parentNode;o;){if(s=o[vi]||o[tn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(i=ub(i);i!==null;){if(o=i[tn])return o;i=ub(i)}return s}i=o,o=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function _s(i){var s=i[Wu];return s||(s=i[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ps]=!0}var Xu=new Set,Qo={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Qo[i]=s,i=0;i<s.length;i++)Xu.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ju={},Zu={};function kd(i){return jo.call(Zu,i)?!0:jo.call(Ju,i)?!1:lg.test(i)?Zu[i]=!0:(Ju[i]=!0,!1)}function ys(i,s,o){if(kd(s))if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+o)}}function vs(i,s,o){if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+o)}}function sr(i,s,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(s,o,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Md(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ug(i){var s=Md(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ca(i){i._valueTracker||(i._valueTracker=ug(i))}function ec(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return i&&(c=Md(i)?i.checked?"true":"false":i.value),i=c,i!==o?(s.setValue(i),!0):!1}function Yo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,o,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Wo(i,T,Cn(s)):o!=null?Wo(i,T,Cn(o)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Da(i,s,o,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;o=o!=null?""+Cn(o):"",s=s!=null?""+Cn(s):o,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Wo(i,s,o){s==="number"&&Yo(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Ke(i,s,o,c){if(i=i.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=s.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Cn(o),s=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Pa(i,s,o){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),o==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=o!=null?""+Cn(o):""}function Ts(i,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(r(92));if(me(c)){if(1<c.length)throw Error(r(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=Cn(s),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=s;return}}i.textContent=s}var cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(i,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,o):typeof o!="number"||o===0||cg.has(s)?s==="float"?i.cssFloat=o:i[s]=(""+o).trim():i[s]=o+"px"}function Ld(i,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&o[f]!==c&&tc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&tc(i,g,s[g])}function nc(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return dg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Xo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var o=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===i.form&&ec(c)}break e;case"textarea":Pa(i,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ke(i,!!o.multiple,s,!1)}}}var rc=!1;function Ud(i,s,o){if(rc)return i(s,o);rc=!0;try{var c=i(s);return c}finally{if(rc=!1,(wi!==null||bi!==null)&&(Pf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Na(i,s){var o=i.stateNode;if(o===null)return null;var c=o[$t]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var lr=!1;if($n)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){lr=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{lr=!1}var zr=null,ws=null,Ai=null;function ic(){if(Ai)return Ai;var i,s=ws,o=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<o&&s[i]===f[i];i++);var T=o-i;for(c=1;c<=T&&s[o-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function qr(){return!0}function sc(){return!1}function nn(i){function s(o,c,f,g,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(o=i[b],this[b]=o?o(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qr:sc,this.isPropagationStopped=sc,this}return N(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=nn(Je),Oa=N({},Je,{view:0,detail:0}),Bd=nn(Oa),Zo,el,jr,Va=N({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jr&&(jr&&i.type==="mousemove"?(Zo=i.screenX-jr.screenX,el=i.screenY-jr.screenY):el=Zo=0,jr=i),Zo)},movementY:function(i){return"movementY"in i?i.movementY:el}}),ur=nn(Va),zd=N({},Va,{dataTransfer:0}),fg=nn(zd),ka=N({},Oa,{relatedTarget:0}),tl=nn(ka),ac=N({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),nl=nn(ac),Fd=N({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),rl=nn(Fd),mg=N({},Je,{data:0}),oc=nn(mg),Ma={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=jd[i])?!!s[i]:!1}function La(){return lc}var Hd=N({},Oa,{key:function(i){if(i.key){var s=Ma[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?qd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),il=nn(Hd),Gd=N({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=nn(Gd),Si=N({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),$d=nn(Si),Kd=N({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=nn(Kd),Yd=N({},Va,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sl=nn(Yd),Dn=N({},Je,{newState:0,oldState:0}),Wd=nn(Dn),Xd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function Q(i,s){switch(i){case"keyup":return Xd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function je(i,s){if(qe)return i==="compositionend"||!Hr&&Q(i,s)?(i=ic(),Ai=ws=zr=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,o,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=kf(s,"onChange"),0<s.length&&(o=new Jo("onChange","change",null,o,c),i.push({event:o,listeners:s}))}var dn=null,Gr=null;function cc(i){eb(i,0)}function Jd(i){var s=gs(i);if(ec(s))return i}function DT(i,s){if(i==="change")return s}var PT=!1;if($n){var pg;if($n){var gg="oninput"in document;if(!gg){var NT=document.createElement("div");NT.setAttribute("oninput","return;"),gg=typeof NT.oninput=="function"}pg=gg}else pg=!1;PT=pg&&(!document.documentMode||9<document.documentMode)}function xT(){dn&&(dn.detachEvent("onpropertychange",OT),Gr=dn=null)}function OT(i){if(i.propertyName==="value"&&Jd(Gr)){var s=[];Ri(s,Gr,i,Xo(i)),Ud(cc,s)}}function hP(i,s,o){i==="focusin"?(xT(),dn=s,Gr=o,dn.attachEvent("onpropertychange",OT)):i==="focusout"&&xT()}function dP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Jd(Gr)}function fP(i,s){if(i==="click")return Jd(s)}function mP(i,s){if(i==="input"||i==="change")return Jd(s)}function pP(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:pP;function hc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var o=Object.keys(i),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!jo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function VT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function kT(i,s){var o=VT(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=s&&c>=s)return{node:o,offset:s-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=VT(o)}}function MT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?MT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function LT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Yo(i.document);s instanceof i.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)i=s.contentWindow;else break;s=Yo(i.document)}return s}function _g(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function gP(i,s){var o=LT(s);s=i.focusedElem;var c=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&MT(s.ownerDocument.documentElement,s)){if(c!==null&&_g(s)){if(i=c.start,o=c.end,o===void 0&&(o=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(o,s.value.length);else if(o=(i=s.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!o.extend&&g>c&&(f=c,c=g,g=f),f=kT(s,g);var T=kT(s,c);f&&T&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==T.node||o.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),o.removeAllRanges(),g>c?(o.addRange(i),o.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),o.addRange(i)))}}for(i=[],o=s;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)o=i[s],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var _P=$n&&"documentMode"in document&&11>=document.documentMode,al=null,yg=null,dc=null,vg=!1;function UT(i,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vg||al==null||al!==Yo(c)||(c=al,"selectionStart"in c&&_g(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),dc&&hc(dc,c)||(dc=c,c=kf(yg,"onSelect"),0<c.length&&(s=new Jo("onSelect","select",null,s,o),i.push({event:s,listeners:c}),s.target=al)))}function Ua(i,s){var o={};return o[i.toLowerCase()]=s.toLowerCase(),o["Webkit"+i]="webkit"+s,o["Moz"+i]="moz"+s,o}var ol={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},Eg={},BT={};$n&&(BT=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ba(i){if(Eg[i])return Eg[i];if(!ol[i])return i;var s=ol[i],o;for(o in s)if(s.hasOwnProperty(o)&&o in BT)return Eg[i]=s[o];return i}var zT=Ba("animationend"),FT=Ba("animationiteration"),qT=Ba("animationstart"),yP=Ba("transitionrun"),vP=Ba("transitionstart"),EP=Ba("transitioncancel"),jT=Ba("transitionend"),HT=new Map,GT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){HT.set(i,s),Gn(s,[i])}var cr=[],ll=0,Tg=0;function Zd(){for(var i=ll,s=Tg=ll=0;s<i;){var o=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&$T(o,f,g)}}function ef(i,s,o,c){cr[ll++]=i,cr[ll++]=s,cr[ll++]=o,cr[ll++]=c,Tg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function wg(i,s,o,c){return ef(i,s,o,c),tf(i)}function bs(i,s){return ef(i,null,null,s),tf(i)}function $T(i,s,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var f=!1,g=i.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(o),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=o|536870912)}function tf(i){if(50<Lc)throw Lc=0,C_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ul={},KT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var o=KT.get(i);return o!==void 0?o:(s={value:i,source:s,stack:be(s)},KT.set(i,s),s)}return{value:i,source:s,stack:be(s)}}var cl=[],hl=0,nf=null,rf=0,dr=[],fr=0,za=null,Ci=1,Di="";function Fa(i,s){cl[hl++]=rf,cl[hl++]=nf,nf=i,rf=s}function QT(i,s,o){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,za=i;var c=Ci;i=Di;var f=32-Rn(c)-1;c&=~(1<<f),o+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|o<<f|c,Di=g+i}else Ci=1<<g|o<<f|c,Di=i}function bg(i){i.return!==null&&(Fa(i,1),QT(i,1,0))}function Ig(i){for(;i===nf;)nf=cl[--hl],cl[hl]=null,rf=cl[--hl],cl[hl]=null;for(;i===za;)za=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Pn=null,fn=null,Qe=!1,Rr=null,$r=!1,Ag=Error(r(519));function qa(i){var s=Error(r(418,""));throw pc(hr(s,i)),Ag}function YT(i){var s=i.stateNode,o=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,o){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(o=0;o<Bc.length;o++)Fe(Bc[o],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Fe("invalid",s),Da(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ca(s);break;case"select":Fe("invalid",s);break;case"textarea":Fe("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Ca(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||ib(s.textContent,o)?(c.popover!=null&&(Fe("beforetoggle",s),Fe("toggle",s)),c.onScroll!=null&&Fe("scroll",s),c.onScrollEnd!=null&&Fe("scrollend",s),c.onClick!=null&&(s.onclick=Mf),s=!0):s=!1,s||qa(i)}function WT(i){for(Pn=i.return;Pn;)switch(Pn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:Pn=Pn.return}}function fc(i){if(i!==Pn)return!1;if(!Qe)return WT(i),Qe=!0,!1;var s=!1,o;if((o=i.tag!==3&&i.tag!==27)&&((o=i.tag===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||G_(i.type,i.memoizedProps)),o=!o),o&&(s=!0),s&&fn&&qa(i),WT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Pn?Dr(i.stateNode.nextSibling):null;return!0}function mc(){fn=Pn=null,Qe=!1}function pc(i){Rr===null?Rr=[i]:Rr.push(i)}var gc=Error(r(460)),XT=Error(r(474)),Sg={then:function(){}};function JT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function sf(){}function ZT(i,s,o){switch(o=i[o],o===void 0?i.push(s):o!==s&&(s.then(sf,sf),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(sf,sf);else{if(i=st,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i}throw _c=s,gc}}var _c=null;function ew(){if(_c===null)throw Error(r(459));var i=_c;return _c=null,i}var dl=null,yc=0;function af(i){var s=yc;return yc+=1,dl===null&&(dl=[]),ZT(dl,i,s)}function vc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function of(i,s){throw s.$$typeof===l?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function tw(i){var s=i._init;return s(i._payload)}function nw(i){function s(B,V){if(i){var H=B.deletions;H===null?(B.deletions=[V],B.flags|=16):H.push(V)}}function o(B,V){if(!i)return null;for(;V!==null;)s(B,V),V=V.sibling;return null}function c(B){for(var V=new Map;B!==null;)B.key!==null?V.set(B.key,B):V.set(B.index,B),B=B.sibling;return V}function f(B,V){return B=ks(B,V),B.index=0,B.sibling=null,B}function g(B,V,H){return B.index=H,i?(H=B.alternate,H!==null?(H=H.index,H<V?(B.flags|=33554434,V):H):(B.flags|=33554434,V)):(B.flags|=1048576,V)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,V,H,ee){return V===null||V.tag!==6?(V=E_(H,B.mode,ee),V.return=B,V):(V=f(V,H),V.return=B,V)}function C(B,V,H,ee){var _e=H.type;return _e===m?J(B,V,H.props.children,ee,H.key):V!==null&&(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Y&&tw(_e)===V.type)?(V=f(V,H.props),vc(V,H),V.return=B,V):(V=Af(H.type,H.key,H.props,null,B.mode,ee),vc(V,H),V.return=B,V)}function L(B,V,H,ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==H.containerInfo||V.stateNode.implementation!==H.implementation?(V=T_(H,B.mode,ee),V.return=B,V):(V=f(V,H.children||[]),V.return=B,V)}function J(B,V,H,ee,_e){return V===null||V.tag!==7?(V=Ja(H,B.mode,ee,_e),V.return=B,V):(V=f(V,H),V.return=B,V)}function ne(B,V,H){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=E_(""+V,B.mode,H),V.return=B,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case u:return H=Af(V.type,V.key,V.props,null,B.mode,H),vc(H,V),H.return=B,H;case d:return V=T_(V,B.mode,H),V.return=B,V;case Y:var ee=V._init;return V=ee(V._payload),ne(B,V,H)}if(me(V)||le(V))return V=Ja(V,B.mode,H,null),V.return=B,V;if(typeof V.then=="function")return ne(B,af(V),H);if(V.$$typeof===S)return ne(B,wf(B,V),H);of(B,V)}return null}function $(B,V,H,ee){var _e=V!==null?V.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return _e!==null?null:b(B,V,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case u:return H.key===_e?C(B,V,H,ee):null;case d:return H.key===_e?L(B,V,H,ee):null;case Y:return _e=H._init,H=_e(H._payload),$(B,V,H,ee)}if(me(H)||le(H))return _e!==null?null:J(B,V,H,ee,null);if(typeof H.then=="function")return $(B,V,af(H),ee);if(H.$$typeof===S)return $(B,V,wf(B,H),ee);of(B,H)}return null}function X(B,V,H,ee,_e){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return B=B.get(H)||null,b(V,B,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return B=B.get(ee.key===null?H:ee.key)||null,C(V,B,ee,_e);case d:return B=B.get(ee.key===null?H:ee.key)||null,L(V,B,ee,_e);case Y:var Me=ee._init;return ee=Me(ee._payload),X(B,V,H,ee,_e)}if(me(ee)||le(ee))return B=B.get(H)||null,J(V,B,ee,_e,null);if(typeof ee.then=="function")return X(B,V,H,af(ee),_e);if(ee.$$typeof===S)return X(B,V,H,wf(V,ee),_e);of(V,ee)}return null}function ve(B,V,H,ee){for(var _e=null,Me=null,we=V,Ae=V=0,on=null;we!==null&&Ae<H.length;Ae++){we.index>Ae?(on=we,we=null):on=we.sibling;var Ye=$(B,we,H[Ae],ee);if(Ye===null){we===null&&(we=on);break}i&&we&&Ye.alternate===null&&s(B,we),V=g(Ye,V,Ae),Me===null?_e=Ye:Me.sibling=Ye,Me=Ye,we=on}if(Ae===H.length)return o(B,we),Qe&&Fa(B,Ae),_e;if(we===null){for(;Ae<H.length;Ae++)we=ne(B,H[Ae],ee),we!==null&&(V=g(we,V,Ae),Me===null?_e=we:Me.sibling=we,Me=we);return Qe&&Fa(B,Ae),_e}for(we=c(we);Ae<H.length;Ae++)on=X(we,B,Ae,H[Ae],ee),on!==null&&(i&&on.alternate!==null&&we.delete(on.key===null?Ae:on.key),V=g(on,V,Ae),Me===null?_e=on:Me.sibling=on,Me=on);return i&&we.forEach(function(qs){return s(B,qs)}),Qe&&Fa(B,Ae),_e}function De(B,V,H,ee){if(H==null)throw Error(r(151));for(var _e=null,Me=null,we=V,Ae=V=0,on=null,Ye=H.next();we!==null&&!Ye.done;Ae++,Ye=H.next()){we.index>Ae?(on=we,we=null):on=we.sibling;var qs=$(B,we,Ye.value,ee);if(qs===null){we===null&&(we=on);break}i&&we&&qs.alternate===null&&s(B,we),V=g(qs,V,Ae),Me===null?_e=qs:Me.sibling=qs,Me=qs,we=on}if(Ye.done)return o(B,we),Qe&&Fa(B,Ae),_e;if(we===null){for(;!Ye.done;Ae++,Ye=H.next())Ye=ne(B,Ye.value,ee),Ye!==null&&(V=g(Ye,V,Ae),Me===null?_e=Ye:Me.sibling=Ye,Me=Ye);return Qe&&Fa(B,Ae),_e}for(we=c(we);!Ye.done;Ae++,Ye=H.next())Ye=X(we,B,Ae,Ye.value,ee),Ye!==null&&(i&&Ye.alternate!==null&&we.delete(Ye.key===null?Ae:Ye.key),V=g(Ye,V,Ae),Me===null?_e=Ye:Me.sibling=Ye,Me=Ye);return i&&we.forEach(function(VN){return s(B,VN)}),Qe&&Fa(B,Ae),_e}function Ct(B,V,H,ee){if(typeof H=="object"&&H!==null&&H.type===m&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case u:e:{for(var _e=H.key;V!==null;){if(V.key===_e){if(_e=H.type,_e===m){if(V.tag===7){o(B,V.sibling),ee=f(V,H.props.children),ee.return=B,B=ee;break e}}else if(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Y&&tw(_e)===V.type){o(B,V.sibling),ee=f(V,H.props),vc(ee,H),ee.return=B,B=ee;break e}o(B,V);break}else s(B,V);V=V.sibling}H.type===m?(ee=Ja(H.props.children,B.mode,ee,H.key),ee.return=B,B=ee):(ee=Af(H.type,H.key,H.props,null,B.mode,ee),vc(ee,H),ee.return=B,B=ee)}return T(B);case d:e:{for(_e=H.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===H.containerInfo&&V.stateNode.implementation===H.implementation){o(B,V.sibling),ee=f(V,H.children||[]),ee.return=B,B=ee;break e}else{o(B,V);break}else s(B,V);V=V.sibling}ee=T_(H,B.mode,ee),ee.return=B,B=ee}return T(B);case Y:return _e=H._init,H=_e(H._payload),Ct(B,V,H,ee)}if(me(H))return ve(B,V,H,ee);if(le(H)){if(_e=le(H),typeof _e!="function")throw Error(r(150));return H=_e.call(H),De(B,V,H,ee)}if(typeof H.then=="function")return Ct(B,V,af(H),ee);if(H.$$typeof===S)return Ct(B,V,wf(B,H),ee);of(B,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,V!==null&&V.tag===6?(o(B,V.sibling),ee=f(V,H),ee.return=B,B=ee):(o(B,V),ee=E_(H,B.mode,ee),ee.return=B,B=ee),T(B)):o(B,V)}return function(B,V,H,ee){try{yc=0;var _e=Ct(B,V,H,ee);return dl=null,_e}catch(we){if(we===gc)throw we;var Me=_r(29,we,null,B.mode);return Me.lanes=ee,Me.return=B,Me}finally{}}}var ja=nw(!0),rw=nw(!1),fl=ke(null),lf=ke(0);function iw(i,s){i=zi,$e(lf,i),$e(fl,s),zi=i|s.baseLanes}function Rg(){$e(lf,zi),$e(fl,fl.current)}function Cg(){zi=lf.current,Xe(fl),Xe(lf)}var mr=ke(null),Kr=null;function Is(i){var s=i.alternate;$e(Yt,Yt.current&1),$e(mr,i),Kr===null&&(s===null||fl.current!==null||s.memoizedState!==null)&&(Kr=i)}function sw(i){if(i.tag===22){if($e(Yt,Yt.current),$e(mr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){$e(Yt,Yt.current),$e(mr,mr.current)}function Pi(i){Xe(mr),Kr===i&&(Kr=null),Xe(Yt)}var Yt=ke(0);function uf(i){for(var s=i;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var TP=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(o){return o()})}},wP=n.unstable_scheduleCallback,bP=n.unstable_NormalPriority,Wt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dg(){return{controller:new TP,data:new Map,refCount:0}}function Ec(i){i.refCount--,i.refCount===0&&wP(bP,function(){i.controller.abort()})}var Tc=null,Pg=0,ml=0,pl=null;function IP(i,s){if(Tc===null){var o=Tc=[];Pg=0,ml=M_(),pl={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Pg++,s.then(aw,aw),s}function aw(){if(--Pg===0&&Tc!==null){pl!==null&&(pl.status="fulfilled");var i=Tc;Tc=null,ml=0,pl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function AP(i,s){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var ow=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&IP(i,s),ow!==null&&ow(i,s)};var Ha=ke(null);function Ng(){var i=Ha.current;return i!==null?i:st.pooledCache}function cf(i,s){s===null?$e(Ha,Ha.current):$e(Ha,s.pool)}function lw(){var i=Ng();return i===null?null:{parent:Wt._currentValue,pool:i}}var Ss=0,Ve=null,nt=null,Bt=null,hf=!1,gl=!1,Ga=!1,df=0,wc=0,_l=null,SP=0;function Vt(){throw Error(r(321))}function xg(i,s){if(s===null)return!1;for(var o=0;o<s.length&&o<i.length;o++)if(!Kn(i[o],s[o]))return!1;return!0}function Og(i,s,o,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?$a:Rs,Ga=!1,g=o(c,f),Ga=!1,gl&&(g=cw(s,o,c,f)),uw(i),g}function uw(i){A.H=Qr;var s=nt!==null&&nt.next!==null;if(Ss=0,Bt=nt=Ve=null,hf=!1,wc=0,_l=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&Tf(i)&&(sn=!0))}function cw(i,s,o,c){Ve=i;var f=0;do{if(gl&&(_l=null),wc=0,gl=!1,25<=f)throw Error(r(301));if(f+=1,Bt=nt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ka,g=s(o,c)}while(gl);return g}function RP(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?bc(s):s,i=i.useState()[0],(nt!==null?nt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Vg(){var i=df!==0;return df=0,i}function kg(i,s,o){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~o}function Mg(i){if(hf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}hf=!1}Ss=0,Bt=nt=Ve=null,gl=!1,wc=df=0,_l=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(nt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=nt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,nt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));nt=i,i={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var ff;ff=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bc(i){var s=wc;return wc+=1,_l===null&&(_l=[]),i=ZT(_l,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?$a:Rs),i}function mf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Lg(i){var s=null,o=Ve.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ff(),Ve.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(i),c=0;c<i;c++)o[c]=ae;return s.index++,o}function Ni(i,s){return typeof s=="function"?s(i):s}function pf(i){var s=zt();return Ug(s,nt,i)}function Ug(i,s,o){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=o;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,L=s,J=!1;do{var ne=L.lane&-536870913;if(ne!==L.lane?(He&ne)===ne:(Ss&ne)===ne){var $=L.revertLane;if($===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),ne===ml&&(J=!0);else if((Ss&$)===$){L=L.next,$===ml&&(J=!0);continue}else ne={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=$,Ms|=$;ne=L.action,Ga&&o(g,ne),g=L.hasEagerState?L.eagerState:o(g,ne)}else $={lane:ne,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=$,T=g):C=C.next=$,Ve.lanes|=ne,Ms|=ne;L=L.next}while(L!==null&&L!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,J&&(o=pl,o!==null)))throw o;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Bg(i){var s=zt(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=i;var c=o.dispatch,f=o.pending,g=s.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,c]}function hw(i,s,o){var c=Ve,f=zt(),g=Qe;if(g){if(o===void 0)throw Error(r(407));o=o()}else o=s();var T=!Kn((nt||f).memoizedState,o);if(T&&(f.memoizedState=o,sn=!0),f=f.queue,qg(mw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,yl(9,fw.bind(null,c,f,o,s),{destroy:void 0},null),st===null)throw Error(r(349));g||(Ss&60)!==0||dw(c,s,o)}return o}function dw(i,s,o){i.flags|=16384,i={getSnapshot:s,value:o},s=Ve.updateQueue,s===null?(s=ff(),Ve.updateQueue=s,s.stores=[i]):(o=s.stores,o===null?s.stores=[i]:o.push(i))}function fw(i,s,o,c){s.value=o,s.getSnapshot=c,pw(s)&&gw(i)}function mw(i,s,o){return o(function(){pw(s)&&gw(i)})}function pw(i){var s=i.getSnapshot;i=i.value;try{var o=s();return!Kn(i,o)}catch{return!0}}function gw(i){var s=bs(i,2);s!==null&&Nn(s,i,2)}function zg(i){var s=Bn();if(typeof i=="function"){var o=i;if(i=o(),Ga){kr(!0);try{o()}finally{kr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:i},s}function _w(i,s,o,c){return i.baseState=o,Ug(i,nt,typeof c=="function"?c:Ni)}function CP(i,s,o,c,f){if(yf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?o(!0):g.isTransition=!1,c(g),o=s.pending,o===null?(g.next=s.pending=g,yw(s,g)):(g.next=o.next,s.pending=o.next=g)}}function yw(i,s){var o=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=o(f,c),C=A.S;C!==null&&C(T,b),vw(i,s,b)}catch(L){Fg(i,s,L)}finally{A.T=g}}else try{g=o(f,c),vw(i,s,g)}catch(L){Fg(i,s,L)}}function vw(i,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Ew(i,s,c)},function(c){return Fg(i,s,c)}):Ew(i,s,o)}function Ew(i,s,o){s.status="fulfilled",s.value=o,Tw(s),i.state=o,s=i.pending,s!==null&&(o=s.next,o===s?i.pending=null:(o=o.next,s.next=o,yw(i,o)))}function Fg(i,s,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,Tw(s),s=s.next;while(s!==c)}i.action=null}function Tw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function ww(i,s){return s}function bw(i,s){if(Qe){var o=st.formState;if(o!==null){e:{var c=Ve;if(Qe){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=Dr(f.nextSibling),c=f.data==="F!";break e}}qa(c)}c=!1}c&&(s=o[0])}}return o=Bn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ww,lastRenderedState:s},o.queue=c,o=Fw.bind(null,Ve,c),c.dispatch=o,c=zg(!1),g=Kg.bind(null,Ve,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,o=CP.bind(null,Ve,f,g,o),f.dispatch=o,c.memoizedState=i,[s,o,!1]}function Iw(i){var s=zt();return Aw(s,nt,i)}function Aw(i,s,o){s=Ug(i,s,ww)[0],i=pf(Ni)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?bc(s):s;var c=zt(),f=c.queue,g=f.dispatch;return o!==c.memoizedState&&(Ve.flags|=2048,yl(9,DP.bind(null,f,o),{destroy:void 0},null)),[s,g,i]}function DP(i,s){i.action=s}function Sw(i){var s=zt(),o=nt;if(o!==null)return Aw(s,o,i);zt(),s=s.memoizedState,o=zt();var c=o.queue.dispatch;return o.memoizedState=i,[s,c,!1]}function yl(i,s,o,c){return i={tag:i,create:s,inst:o,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=ff(),Ve.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,s.lastEffect=i),i}function Rw(){return zt().memoizedState}function gf(i,s,o,c){var f=Bn();Ve.flags|=i,f.memoizedState=yl(1|s,o,{destroy:void 0},c===void 0?null:c)}function _f(i,s,o,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;nt!==null&&c!==null&&xg(c,nt.memoizedState.deps)?f.memoizedState=yl(s,o,g,c):(Ve.flags|=i,f.memoizedState=yl(1|s,o,g,c))}function Cw(i,s){gf(8390656,8,i,s)}function qg(i,s){_f(2048,8,i,s)}function Dw(i,s){return _f(4,2,i,s)}function Pw(i,s){return _f(4,4,i,s)}function Nw(i,s){if(typeof s=="function"){i=i();var o=s(i);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function xw(i,s,o){o=o!=null?o.concat([i]):null,_f(4,4,Nw.bind(null,s,i),o)}function jg(){}function Ow(i,s){var o=zt();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&xg(s,c[1])?c[0]:(o.memoizedState=[i,s],i)}function Vw(i,s){var o=zt();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&xg(s,c[1]))return c[0];if(c=i(),Ga){kr(!0);try{i()}finally{kr(!1)}}return o.memoizedState=[c,s],c}function Hg(i,s,o){return o===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=o,i=M0(),Ve.lanes|=i,Ms|=i,o)}function kw(i,s,o,c){return Kn(o,s)?o:fl.current!==null?(i=Hg(i,o,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=o):(i=M0(),Ve.lanes|=i,Ms|=i,s)}function Mw(i,s,o,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Kg(i,!1,s,o);try{var C=f(),L=A.S;if(L!==null&&L(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=AP(C,c);Ic(i,s,J,Xn(i))}else Ic(i,s,c,Xn(i))}catch(ne){Ic(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{fe.p=g,A.T=T}}function PP(){}function Gg(i,s,o,c){if(i.tag!==5)throw Error(r(476));var f=Lw(i).queue;Mw(i,f,s,Ce,o===null?PP:function(){return Uw(i),o(c)})}function Lw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:Ce},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:o},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Uw(i){var s=Lw(i).next.queue;Ic(i,s,{},Xn())}function $g(){return Tn(Hc)}function Bw(){return zt().memoizedState}function zw(){return zt().memoizedState}function NP(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var o=Xn();i=Ps(o);var c=Ns(s,i,o);c!==null&&(Nn(c,s,o),Rc(c,s,o)),s={cache:Dg()},i.payload=s;return}s=s.return}}function xP(i,s,o){var c=Xn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},yf(i)?qw(s,o):(o=wg(i,s,o,c),o!==null&&(Nn(o,i,c),jw(o,s,c)))}function Fw(i,s,o){var c=Xn();Ic(i,s,o,c)}function Ic(i,s,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(yf(i))qw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,o);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return ef(i,s,f,0),st===null&&Zd(),!1}catch{}finally{}if(o=wg(i,s,f,c),o!==null)return Nn(o,i,c),jw(o,s,c),!0}return!1}function Kg(i,s,o,c){if(c={lane:2,revertLane:M_(),action:c,hasEagerState:!1,eagerState:null,next:null},yf(i)){if(s)throw Error(r(479))}else s=wg(i,o,c,2),s!==null&&Nn(s,i,2)}function yf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function qw(i,s){gl=hf=!0;var o=i.pending;o===null?s.next=s:(s.next=o.next,o.next=s),i.pending=s}function jw(i,s,o){if((o&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,o|=c,s.lanes=o,fs(i,o)}}var Qr={readContext:Tn,use:mf,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt};Qr.useCacheRefresh=Vt,Qr.useMemoCache=Vt,Qr.useHostTransitionStatus=Vt,Qr.useFormState=Vt,Qr.useActionState=Vt,Qr.useOptimistic=Vt;var $a={readContext:Tn,use:mf,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Cw,useImperativeHandle:function(i,s,o){o=o!=null?o.concat([i]):null,gf(4194308,4,Nw.bind(null,s,i),o)},useLayoutEffect:function(i,s){return gf(4194308,4,i,s)},useInsertionEffect:function(i,s){gf(4,2,i,s)},useMemo:function(i,s){var o=Bn();s=s===void 0?null:s;var c=i();if(Ga){kr(!0);try{i()}finally{kr(!1)}}return o.memoizedState=[c,s],c},useReducer:function(i,s,o){var c=Bn();if(o!==void 0){var f=o(s);if(Ga){kr(!0);try{o(s)}finally{kr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=xP.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=zg(i);var s=i.queue,o=Fw.bind(null,Ve,s);return s.dispatch=o,[i.memoizedState,o]},useDebugValue:jg,useDeferredValue:function(i,s){var o=Bn();return Hg(o,i,s)},useTransition:function(){var i=zg(!1);return i=Mw.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,o){var c=Ve,f=Bn();if(Qe){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),st===null)throw Error(r(349));(He&60)!==0||dw(c,s,o)}f.memoizedState=o;var g={value:o,getSnapshot:s};return f.queue=g,Cw(mw.bind(null,c,g,i),[i]),c.flags|=2048,yl(9,fw.bind(null,c,g,o,s),{destroy:void 0},null),o},useId:function(){var i=Bn(),s=st.identifierPrefix;if(Qe){var o=Di,c=Ci;o=(c&~(1<<32-Rn(c)-1)).toString(32)+o,s=":"+s+"R"+o,o=df++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=SP++,s=":"+s+"r"+o.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=NP.bind(null,Ve)}};$a.useMemoCache=Lg,$a.useHostTransitionStatus=$g,$a.useFormState=bw,$a.useActionState=bw,$a.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Kg.bind(null,Ve,!0,o),o.dispatch=s,[i,s]};var Rs={readContext:Tn,use:mf,useCallback:Ow,useContext:Tn,useEffect:qg,useImperativeHandle:xw,useInsertionEffect:Dw,useLayoutEffect:Pw,useMemo:Vw,useReducer:pf,useRef:Rw,useState:function(){return pf(Ni)},useDebugValue:jg,useDeferredValue:function(i,s){var o=zt();return kw(o,nt.memoizedState,i,s)},useTransition:function(){var i=pf(Ni)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:hw,useId:Bw};Rs.useCacheRefresh=zw,Rs.useMemoCache=Lg,Rs.useHostTransitionStatus=$g,Rs.useFormState=Iw,Rs.useActionState=Iw,Rs.useOptimistic=function(i,s){var o=zt();return _w(o,nt,i,s)};var Ka={readContext:Tn,use:mf,useCallback:Ow,useContext:Tn,useEffect:qg,useImperativeHandle:xw,useInsertionEffect:Dw,useLayoutEffect:Pw,useMemo:Vw,useReducer:Bg,useRef:Rw,useState:function(){return Bg(Ni)},useDebugValue:jg,useDeferredValue:function(i,s){var o=zt();return nt===null?Hg(o,i,s):kw(o,nt.memoizedState,i,s)},useTransition:function(){var i=Bg(Ni)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:hw,useId:Bw};Ka.useCacheRefresh=zw,Ka.useMemoCache=Lg,Ka.useHostTransitionStatus=$g,Ka.useFormState=Sw,Ka.useActionState=Sw,Ka.useOptimistic=function(i,s){var o=zt();return nt!==null?_w(o,nt,i,s):(o.baseState=i,[i,o.queue.dispatch])};function Qg(i,s,o,c){s=i.memoizedState,o=o(c,s),o=o==null?s:N({},s,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Yg={isMounted:function(i){return(i=i._reactInternals)?Te(i)===i:!1},enqueueSetState:function(i,s,o){i=i._reactInternals;var c=Xn(),f=Ps(c);f.payload=s,o!=null&&(f.callback=o),s=Ns(i,f,c),s!==null&&(Nn(s,i,c),Rc(s,i,c))},enqueueReplaceState:function(i,s,o){i=i._reactInternals;var c=Xn(),f=Ps(c);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ns(i,f,c),s!==null&&(Nn(s,i,c),Rc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var o=Xn(),c=Ps(o);c.tag=2,s!=null&&(c.callback=s),s=Ns(i,c,o),s!==null&&(Nn(s,i,o),Rc(s,i,o))}};function Hw(i,s,o,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!hc(o,c)||!hc(f,g):!0}function Gw(i,s,o,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==i&&Yg.enqueueReplaceState(s,s.state,null)}function Qa(i,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(i=i.defaultProps){o===s&&(o=N({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var vf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function $w(i){vf(i)}function Kw(i){console.error(i)}function Qw(i){vf(i)}function Ef(i,s){try{var o=i.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Yw(i,s,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Wg(i,s,o){return o=Ps(o),o.tag=3,o.payload={element:null},o.callback=function(){Ef(i,s)},o}function Ww(i){return i=Ps(i),i.tag=3,i}function Xw(i,s,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){Yw(s,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){Yw(s,o,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function OP(i,s,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&Sc(s,o,f,!0),o=mr.current,o!==null){switch(o.tag){case 13:return Kr===null?N_():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Sg?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),O_(i,c,f)),!1;case 22:return o.flags|=65536,c===Sg?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),O_(i,c,f)),!1}throw Error(r(435,o.tag))}return O_(i,c,f),N_(),!1}if(Qe)return s=mr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Ag&&(i=Error(r(422),{cause:c}),pc(hr(i,o)))):(c!==Ag&&(s=Error(r(423),{cause:c}),pc(hr(s,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,o),f=Wg(i.stateNode,c,f),h_(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,o),kc===null?kc=[g]:kc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Wg(o.stateNode,c,i),h_(o,i),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Ww(f),Xw(f,i,o,c),h_(o,f),!1}o=o.return}while(o!==null);return!1}var Jw=Error(r(461)),sn=!1;function mn(i,s,o,c){s.child=i===null?rw(s,null,o,c):ja(s,i.child,o,c)}function Zw(i,s,o,c,f){o=o.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Wa(s),c=Og(i,s,o,T,g,f),b=Vg(),i!==null&&!sn?(kg(i,s,f),xi(i,s,f)):(Qe&&b&&bg(s),s.flags|=1,mn(i,s,c,f),s.child)}function e0(i,s,o,c,f){if(i===null){var g=o.type;return typeof g=="function"&&!v_(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,t0(i,s,g,c,f)):(i=Af(o.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!s_(i,f)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:hc,o(T,c)&&i.ref===s.ref)return xi(i,s,f)}return s.flags|=1,i=ks(g,c),i.ref=s.ref,i.return=s,s.child=i}function t0(i,s,o,c,f){if(i!==null){var g=i.memoizedProps;if(hc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,s_(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,xi(i,s,f)}return Xg(i,s,o,c,f)}function n0(i,s,o){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Ac(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|o:o,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return r0(i,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&cf(s,T!==null?T.cachePool:null),T!==null?iw(s,T):Rg(),sw(s);else return s.lanes=s.childLanes=536870912,r0(i,s,T!==null?T.baseLanes|o:o,o)}else T!==null?(cf(s,T.cachePool),iw(s,T),As(),s.memoizedState=null):(i!==null&&cf(s,null),Rg(),As());return mn(i,s,f,o),s.child}function r0(i,s,o,c){var f=Ng();return f=f===null?null:{parent:Wt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},i!==null&&cf(s,null),Rg(),sw(s),i!==null&&Sc(i,s,c,!0),null}function Ac(i,s){var o=s.ref;if(o===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(i===null||i.ref!==o)&&(s.flags|=2097664)}}function Xg(i,s,o,c,f){return Wa(s),o=Og(i,s,o,c,void 0,f),c=Vg(),i!==null&&!sn?(kg(i,s,f),xi(i,s,f)):(Qe&&c&&bg(s),s.flags|=1,mn(i,s,o,f),s.child)}function i0(i,s,o,c,f,g){return Wa(s),s.updateQueue=null,o=cw(s,c,o,f),uw(i),c=Vg(),i!==null&&!sn?(kg(i,s,g),xi(i,s,g)):(Qe&&c&&bg(s),s.flags|=1,mn(i,s,o,g),s.child)}function s0(i,s,o,c,f){if(Wa(s),s.stateNode===null){var g=ul,T=o.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new o(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Yg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},u_(s),T=o.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ul,g.state=s.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(Qg(s,o,T,c),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Yg.enqueueReplaceState(g,g.state,null),Dc(s,c,g,f),Cc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Qa(o,b);g.props=C;var L=g.context,J=o.contextType;T=ul,typeof J=="object"&&J!==null&&(T=Tn(J));var ne=o.getDerivedStateFromProps;J=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||L!==T)&&Gw(s,g,c,T),Ds=!1;var $=s.memoizedState;g.state=$,Dc(s,c,g,f),Cc(),L=s.memoizedState,b||$!==L||Ds?(typeof ne=="function"&&(Qg(s,o,ne,c),L=s.memoizedState),(C=Ds||Hw(s,o,C,c,$,L,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=L),g.props=c,g.state=L,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,c_(i,s),T=s.memoizedProps,J=Qa(o,T),g.props=J,ne=s.pendingProps,$=g.context,L=o.contextType,C=ul,typeof L=="object"&&L!==null&&(C=Tn(L)),b=o.getDerivedStateFromProps,(L=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||$!==C)&&Gw(s,g,c,C),Ds=!1,$=s.memoizedState,g.state=$,Dc(s,c,g,f),Cc();var X=s.memoizedState;T!==ne||$!==X||Ds||i!==null&&i.dependencies!==null&&Tf(i.dependencies)?(typeof b=="function"&&(Qg(s,o,b,c),X=s.memoizedState),(J=Ds||Hw(s,o,J,c,$,X,C)||i!==null&&i.dependencies!==null&&Tf(i.dependencies))?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=C,c=J):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Ac(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=ja(s,i.child,null,f),s.child=ja(s,null,o,f)):mn(i,s,o,f),s.memoizedState=g.state,i=s.child):i=xi(i,s,f),i}function a0(i,s,o,c){return mc(),s.flags|=256,mn(i,s,o,c),s.child}var Jg={dehydrated:null,treeContext:null,retryLane:0};function Zg(i){return{baseLanes:i,cachePool:lw()}}function e_(i,s,o){return i=i!==null?i.childLanes&~o:0,s&&(i|=yr),i}function o0(i,s,o){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Qe){if(f?Is(s):As(),Qe){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:za!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Pn=s,fn=null,C=!0):C=!1}C||qa(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Pi(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=n_({mode:"hidden",children:b},f),c=Ja(c,f,o,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Zg(o),f.childLanes=e_(i,T,o),s.memoizedState=Jg,c):(Is(s),t_(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=r_(i,s,o)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=n_({mode:"visible",children:c.children},b),f=Ja(f,b,o,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,ja(s,i.child,null,o),c=s.child,c.memoizedState=Zg(o),c.childLanes=e_(i,T,o),s.memoizedState=Jg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var L=T.dgst;T=L,c=Error(r(419)),c.stack="",c.digest=T,pc({value:c,source:null,stack:null}),s=r_(i,s,o)}else if(sn||Sc(i,s,o,!1),T=(o&i.childLanes)!==0,sn||T){if(T=st,T!==null){if(c=o&-o,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Nn(T,i,c),Jw}b.data==="$?"||N_(),s=r_(i,s,o)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=QP.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),Pn=s,Qe=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,Ci=i.id,Di=i.overflow,za=s),s=t_(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,L=C.sibling,c=ks(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,L!==null?f=ks(L,f):(f=Ja(f,b,o,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Zg(o):(C=b.cachePool,C!==null?(L=Wt._currentValue,C=C.parent!==L?{parent:L,pool:L}:C):C=lw(),b={baseLanes:b.baseLanes|o,cachePool:C}),f.memoizedState=b,f.childLanes=e_(i,T,o),s.memoizedState=Jg,c):(Is(s),o=i.child,i=o.sibling,o=ks(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=o,s.memoizedState=null,o)}function t_(i,s){return s=n_({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function n_(i,s){return O0(i,s,0,null)}function r_(i,s,o){return ja(s,i.child,null,o),i=t_(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function l0(i,s,o){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),o_(i.return,s,o)}function i_(i,s,o,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function u0(i,s,o){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(mn(i,s,c.children,o),c=Yt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&l0(i,o,s);else if(i.tag===19)l0(i,o,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch($e(Yt,c),f){case"forwards":for(o=s.child,f=null;o!==null;)i=o.alternate,i!==null&&uf(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),i_(s,!1,f,o,g);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&uf(i)===null){s.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}i_(s,!0,o,null,g);break;case"together":i_(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function xi(i,s,o){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(o&s.childLanes)===0)if(i!==null){if(Sc(i,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,o=ks(i,i.pendingProps),s.child=o,o.return=s;i.sibling!==null;)i=i.sibling,o=o.sibling=ks(i,i.pendingProps),o.return=s;o.sibling=null}return s.child}function s_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&Tf(i)))}function VP(i,s,o){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Wt,i.memoizedState.cache),mc();break;case 27:case 5:Hu(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(o&s.child.childLanes)!==0?o0(i,s,o):(Is(s),i=xi(i,s,o),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(Sc(i,s,o,!1),c=(o&s.childLanes)!==0),f){if(c)return u0(i,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$e(Yt,Yt.current),c)break;return null;case 22:case 23:return s.lanes=0,n0(i,s,o);case 24:Cs(s,Wt,i.memoizedState.cache)}return xi(i,s,o)}function c0(i,s,o){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!s_(i,o)&&(s.flags&128)===0)return sn=!1,VP(i,s,o);sn=(i.flags&131072)!==0}else sn=!1,Qe&&(s.flags&1048576)!==0&&QT(s,rf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")v_(c)?(i=Qa(c,i),s.tag=1,s=s0(null,s,c,i,o)):(s.tag=0,s=Xg(null,s,c,i,o));else{if(c!=null){if(f=c.$$typeof,f===P){s.tag=11,s=Zw(null,s,c,i,o);break e}else if(f===j){s.tag=14,s=e0(null,s,c,i,o);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Xg(i,s,s.type,s.pendingProps,o);case 1:return c=s.type,f=Qa(c,s.pendingProps),s0(i,s,c,f,o);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,c_(i,s),Dc(s,g,null,o);var T=s.memoizedState;if(g=T.cache,Cs(s,Wt,g),g!==f.cache&&l_(s,[Wt],o,!0),Cc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=a0(i,s,g,o);break e}else if(g!==c){c=hr(Error(r(424)),s),pc(c),s=a0(i,s,g,o);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),Pn=s,Qe=!0,Rr=null,$r=!0,o=rw(s,null,g,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(mc(),g===c){s=xi(i,s,o);break e}mn(i,s,g,o)}s=s.child}return s;case 26:return Ac(i,s),i===null?(o=fb(s.type,null,s.pendingProps,null))?s.memoizedState=o:Qe||(o=s.type,i=s.pendingProps,c=Lf(rr.current).createElement(o),c[tn]=s,c[$t]=i,pn(c,o,i),_t(c),s.stateNode=c):s.memoizedState=fb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Hu(s),i===null&&Qe&&(c=s.stateNode=cb(s.type,s.pendingProps,rr.current),Pn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||Qe?mn(i,s,c,o):s.child=ja(s,null,c,o),Ac(i,s),s.child;case 5:return i===null&&Qe&&((f=c=fn)&&(c=cN(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,Pn=s,fn=Dr(c.firstChild),$r=!1,f=!0):f=!1),f||qa(s)),Hu(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,G_(f,g)?c=null:T!==null&&G_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Og(i,s,RP,null,null,o),Hc._currentValue=f),Ac(i,s),mn(i,s,c,o),s.child;case 6:return i===null&&Qe&&((i=o=fn)&&(o=hN(o,s.pendingProps,$r),o!==null?(s.stateNode=o,Pn=s,fn=null,i=!0):i=!1),i||qa(s)),null;case 13:return o0(i,s,o);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ja(s,null,c,o):mn(i,s,c,o),s.child;case 11:return Zw(i,s,s.type,s.pendingProps,o);case 7:return mn(i,s,s.pendingProps,o),s.child;case 8:return mn(i,s,s.pendingProps.children,o),s.child;case 12:return mn(i,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),mn(i,s,c.children,o),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Wa(s),f=Tn(f),c=c(f),s.flags|=1,mn(i,s,c,o),s.child;case 14:return e0(i,s,s.type,s.pendingProps,o);case 15:return t0(i,s,s.type,s.pendingProps,o);case 19:return u0(i,s,o);case 22:return n0(i,s,o);case 24:return Wa(s),c=Tn(Wt),i===null?(f=Ng(),f===null&&(f=st,g=Dg(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),s.memoizedState={parent:c,cache:f},u_(s),Cs(s,Wt,f)):((i.lanes&o)!==0&&(c_(i,s),Dc(s,null,null,o),Cc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Wt,c)):(c=g.cache,Cs(s,Wt,c),c!==f.cache&&l_(s,[Wt],o,!0))),mn(i,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var a_=ke(null),Ya=null,Oi=null;function Cs(i,s,o){$e(a_,s._currentValue),s._currentValue=o}function Vi(i){i._currentValue=a_.current,Xe(a_)}function o_(i,s,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===o)break;i=i.return}}function l_(i,s,o,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=o,b=g.alternate,b!==null&&(b.lanes|=o),o_(g.return,o,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),o_(T,o,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Sc(i,s,o,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Hc):i=[Hc])}f=f.return}i!==null&&l_(s,i,o,c),s.flags|=262144}function Tf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Wa(i){Ya=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return h0(Ya,i)}function wf(i,s){return Ya===null&&Wa(i),h0(i,s)}function h0(i,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return o}var Ds=!1;function u_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function c_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ps(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ns(i,s,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=tf(i),$T(i,null,o),s}return ef(i,c,s,o),tf(i)}function Rc(i,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,o|=c,s.lanes=o,fs(i,o)}}function h_(i,s){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?f=g=s:g=g.next=s}else f=g=s;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=s:i.next=s,o.lastBaseUpdate=s}var d_=!1;function Cc(){if(d_){var i=pl;if(i!==null)throw i}}function Dc(i,s,o,c){d_=!1;var f=i.updateQueue;Ds=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,L=C.next;C.next=null,T===null?g=L:T.next=L,T=C;var J=i.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=L:b.next=L,J.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,J=L=C=null,b=g;do{var $=b.lane&-536870913,X=$!==b.lane;if(X?(He&$)===$:(c&$)===$){$!==0&&$===ml&&(d_=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=i,De=b;$=s;var Ct=o;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){ne=ve.call(Ct,ne,$);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,$=typeof ve=="function"?ve.call(Ct,ne,$):ve,$==null)break e;ne=N({},ne,$);break e;case 2:Ds=!0}}$=b.callback,$!==null&&(i.flags|=64,X&&(i.flags|=8192),X=f.callbacks,X===null?f.callbacks=[$]:X.push($))}else X={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(L=J=X,C=ne):J=J.next=X,T|=$;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;X=b,b=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=L,f.lastBaseUpdate=J,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function d0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function f0(i,s){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)d0(o[i],s)}function Pc(i,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&i)===i){c=void 0;var g=o.create,T=o.inst;c=g(),T.destroy=c}o=o.next}while(o!==f)}}catch(b){it(s,s.return,b)}}function xs(i,s,o){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=o;try{b()}catch(L){it(f,C,L)}}}c=c.next}while(c!==g)}}catch(L){it(s,s.return,L)}}function m0(i){var s=i.updateQueue;if(s!==null){var o=i.stateNode;try{f0(s,o)}catch(c){it(i,i.return,c)}}}function p0(i,s,o){o.props=Qa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){it(i,s,c)}}function Xa(i,s){try{var o=i.ref;if(o!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof o=="function"?i.refCleanup=o(f):o.current=f}}catch(g){it(i,s,g)}}function Qn(i,s){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){it(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){it(i,s,f)}else o.current=null}function g0(i){var s=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){it(i,i.return,f)}}function _0(i,s,o){try{var c=i.stateNode;sN(c,i.type,o,s),c[$t]=s}catch(f){it(i,i.return,f)}}function y0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function f_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||y0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function m_(i,s,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(i,s):o.insertBefore(i,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(i,o)):(s=o,s.appendChild(i)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Mf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(m_(i,s,o),i=i.sibling;i!==null;)m_(i,s,o),i=i.sibling}function bf(i,s,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?o.insertBefore(i,s):o.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(bf(i,s,o),i=i.sibling;i!==null;)bf(i,s,o),i=i.sibling}var ki=!1,St=!1,p_=!1,v0=typeof WeakSet=="function"?WeakSet:Set,an=null,E0=!1;function kP(i,s){if(i=i.containerInfo,j_=jf,i=LT(i),_g(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,b=-1,C=-1,L=0,J=0,ne=i,$=null;t:for(;;){for(var X;ne!==o||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(X=ne.firstChild)!==null;)$=ne,ne=X;for(;;){if(ne===i)break t;if($===o&&++L===f&&(b=T),$===g&&++J===c&&(C=T),(X=ne.nextSibling)!==null)break;ne=$,$=ne.parentNode}ne=X}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(H_={focusedElem:i,selectionRange:o},jf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,o=s,f=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var ve=Qa(o.type,f,o.elementType===o.type);i=c.getSnapshotBeforeUpdate(ve,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){it(o,o.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,o=i.nodeType,o===9)Q_(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Q_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return ve=E0,E0=!1,ve}function T0(i,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Li(i,o),c&4&&Pc(5,o);break;case 1:if(Li(i,o),c&4)if(i=o.stateNode,s===null)try{i.componentDidMount()}catch(b){it(o,o.return,b)}else{var f=Qa(o.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){it(o,o.return,b)}}c&64&&m0(o),c&512&&Xa(o,o.return);break;case 3:if(Li(i,o),c&64&&(c=o.updateQueue,c!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{f0(c,i)}catch(b){it(o,o.return,b)}}break;case 26:Li(i,o),c&512&&Xa(o,o.return);break;case 27:case 5:Li(i,o),s===null&&c&4&&g0(o),c&512&&Xa(o,o.return);break;case 12:Li(i,o);break;case 13:Li(i,o),c&4&&I0(i,o);break;case 22:if(f=o.memoizedState!==null||ki,!f){s=s!==null&&s.memoizedState!==null||St;var g=ki,T=St;ki=f,(St=s)&&!T?Os(i,o,(o.subtreeFlags&8772)!==0):Li(i,o),ki=g,St=T}c&512&&(o.memoizedProps.mode==="manual"?Xa(o,o.return):Qn(o,o.return));break;default:Li(i,o)}}function w0(i){var s=i.alternate;s!==null&&(i.alternate=null,w0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ra(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Yn=!1;function Mi(i,s,o){for(o=o.child;o!==null;)b0(i,s,o),o=o.sibling}function b0(i,s,o){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,o)}catch{}switch(o.tag){case 26:St||Qn(o,s),Mi(i,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||Qn(o,s);var c=Ft,f=Yn;for(Ft=o.stateNode,Mi(i,s,o),o=o.stateNode,s=o.attributes;s.length;)o.removeAttributeNode(s[0]);Ra(o),Ft=c,Yn=f;break;case 5:St||Qn(o,s);case 6:f=Ft;var g=Yn;if(Ft=null,Mi(i,s,o),Ft=f,Yn=g,Ft!==null)if(Yn)try{i=Ft,c=o.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){it(o,s,T)}else try{Ft.removeChild(o.stateNode)}catch(T){it(o,s,T)}break;case 18:Ft!==null&&(Yn?(s=Ft,o=o.stateNode,s.nodeType===8?K_(s.parentNode,o):s.nodeType===1&&K_(s,o),Qc(s)):K_(Ft,o.stateNode));break;case 4:c=Ft,f=Yn,Ft=o.stateNode.containerInfo,Yn=!0,Mi(i,s,o),Ft=c,Yn=f;break;case 0:case 11:case 14:case 15:St||xs(2,o,s),St||xs(4,o,s),Mi(i,s,o);break;case 1:St||(Qn(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&p0(o,s,c)),Mi(i,s,o);break;case 21:Mi(i,s,o);break;case 22:St||Qn(o,s),St=(c=St)||o.memoizedState!==null,Mi(i,s,o),St=c;break;default:Mi(i,s,o)}}function I0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Qc(i)}catch(o){it(s,s.return,o)}}function MP(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new v0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new v0),s;default:throw Error(r(435,i.tag))}}function g_(i,s){var o=MP(i);s.forEach(function(c){var f=YP.bind(null,i,c);o.has(c)||(o.add(c),c.then(f,f))})}function pr(i,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Yn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Yn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Yn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));b0(g,T,f),Ft=null,Yn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)A0(s,i),s=s.sibling}var Cr=null;function A0(i,s){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:pr(s,i),gr(i),c&4&&(xs(3,i,i.return),Pc(3,i),xs(5,i,i.return));break;case 1:pr(s,i),gr(i),c&512&&(St||o===null||Qn(o,o.return)),c&64&&ki&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=Cr;if(pr(s,i),gr(i),c&512&&(St||o===null||Qn(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ps]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),pn(g,c,o),g[tn]=i,_t(g),c=g;break e;case"link":var T=gb("link","href",f).get(c+(o.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(o.href==null?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,o),f.head.appendChild(g);break;case"meta":if(T=gb("meta","content",f).get(c+(o.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,o),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else _b(f,i.type,i.stateNode);else i.stateNode=pb(f,c,i.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?_b(f,i.type,i.stateNode):pb(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&_0(i,i.memoizedProps,o.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var L=C.nextSibling,J=C.nodeName;C[ps]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=L}for(var ne=i.type,$=f.attributes;$.length;)f.removeAttributeNode($[0]);pn(f,ne,g),f[tn]=i,f[$t]=g}catch(ve){it(i,i.return,ve)}}case 5:if(pr(s,i),gr(i),c&512&&(St||o===null||Qn(o,o.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(ve){it(i,i.return,ve)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,_0(i,f,o!==null?o.memoizedProps:f)),c&1024&&(p_=!0);break;case 6:if(pr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(ve){it(i,i.return,ve)}}break;case 3:if(zf=null,f=Cr,Cr=Uf(s.containerInfo),pr(s,i),Cr=f,gr(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Qc(s.containerInfo)}catch(ve){it(i,i.return,ve)}p_&&(p_=!1,S0(i));break;case 4:c=Cr,Cr=Uf(i.stateNode.containerInfo),pr(s,i),gr(i),Cr=c;break;case 12:pr(s,i),gr(i);break;case 13:pr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(A_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,g_(i,c)));break;case 22:if(c&512&&(St||o===null||Qn(o,o.return)),C=i.memoizedState!==null,L=o!==null&&o.memoizedState!==null,J=ki,ne=St,ki=J||C,St=ne||L,pr(s,i),St=ne,ki=J,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=ki||St,o===null||L||s||vl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(o=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(o===null){L=o=s;try{if(f=L.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=L.stateNode,b=L.memoizedProps.style;var X=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ve){it(L,L.return,ve)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=C?"":L.memoizedProps}catch(ve){it(L,L.return,ve)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,g_(i,o))));break;case 19:pr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,g_(i,c)));break;case 21:break;default:pr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var o=i.return;o!==null;){if(y0(o)){var c=o;break e}o=o.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=f_(i);bf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=f_(i);bf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,L=f_(i);m_(i,L,C);break;default:throw Error(r(161))}}}catch(J){it(i,i.return,J)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function S0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;S0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)T0(i,s.alternate,s),s=s.sibling}function vl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:xs(4,s,s.return),vl(s);break;case 1:Qn(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&p0(s,s.return,o),vl(s);break;case 26:case 27:case 5:Qn(s,s.return),vl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&vl(s);break;default:vl(s)}i=i.sibling}}function Os(i,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,o),Pc(4,g);break;case 1:if(Os(f,g,o),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){it(c,c.return,L)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)d0(C[f],b)}catch(L){it(c,c.return,L)}}o&&T&64&&m0(g),Xa(g,g.return);break;case 26:case 27:case 5:Os(f,g,o),o&&c===null&&T&4&&g0(g),Xa(g,g.return);break;case 12:Os(f,g,o);break;case 13:Os(f,g,o),o&&T&4&&I0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,o),Xa(g,g.return);break;default:Os(f,g,o)}s=s.sibling}}function __(i,s){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Ec(o))}function y_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i))}function Vs(i,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)R0(i,s,o,c),s=s.sibling}function R0(i,s,o,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Vs(i,s,o,c),f&2048&&Pc(9,s);break;case 3:Vs(i,s,o,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i)));break;case 12:if(f&2048){Vs(i,s,o,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){it(s,s.return,C)}}else Vs(i,s,o,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?Vs(i,s,o,c):Nc(i,s):g._visibility&4?Vs(i,s,o,c):(g._visibility|=4,El(i,s,o,c,(s.subtreeFlags&10256)!==0)),f&2048&&__(s.alternate,s);break;case 24:Vs(i,s,o,c),f&2048&&y_(s.alternate,s);break;default:Vs(i,s,o,c)}}function El(i,s,o,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=o,C=c,L=T.flags;switch(T.tag){case 0:case 11:case 15:El(g,T,b,C,f),Pc(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?El(g,T,b,C,f):Nc(g,T):(J._visibility|=4,El(g,T,b,C,f)),f&&L&2048&&__(T.alternate,T);break;case 24:El(g,T,b,C,f),f&&L&2048&&y_(T.alternate,T);break;default:El(g,T,b,C,f)}s=s.sibling}}function Nc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=i,c=s,f=c.flags;switch(c.tag){case 22:Nc(o,c),f&2048&&__(c.alternate,c);break;case 24:Nc(o,c),f&2048&&y_(c.alternate,c);break;default:Nc(o,c)}s=s.sibling}}var xc=8192;function Tl(i){if(i.subtreeFlags&xc)for(i=i.child;i!==null;)C0(i),i=i.sibling}function C0(i){switch(i.tag){case 26:Tl(i),i.flags&xc&&i.memoizedState!==null&&IN(Cr,i.memoizedState,i.memoizedProps);break;case 5:Tl(i);break;case 3:case 4:var s=Cr;Cr=Uf(i.stateNode.containerInfo),Tl(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=xc,xc=16777216,Tl(i),xc=s):Tl(i));break;default:Tl(i)}}function D0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Oc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];an=c,N0(c,i)}D0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)P0(i),i=i.sibling}function P0(i){switch(i.tag){case 0:case 11:case 15:Oc(i),i.flags&2048&&xs(9,i,i.return);break;case 3:Oc(i);break;case 12:Oc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,If(i)):Oc(i);break;default:Oc(i)}}function If(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];an=c,N0(c,i)}D0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:xs(8,s,s.return),If(s);break;case 22:o=s.stateNode,o._visibility&4&&(o._visibility&=-5,If(s));break;default:If(s)}i=i.sibling}}function N0(i,s){for(;an!==null;){var o=an;switch(o.tag){case 0:case 11:case 15:xs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ec(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,an=c;else e:for(o=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(w0(c),c===o){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function LP(i,s,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,o,c){return new LP(i,s,o,c)}function v_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ks(i,s){var o=i.alternate;return o===null?(o=_r(i.tag,s,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=s,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&31457280,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,s=i.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function x0(i,s){i.flags&=31457282;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,s=o.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Af(i,s,o,c,f,g){var T=0;if(c=i,typeof i=="function")v_(i)&&(T=1);else if(typeof i=="string")T=wN(i,o,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case m:return Ja(o.children,f,g,s);case p:T=8,f|=24;break;case y:return i=_r(12,o,s,f|2),i.elementType=y,i.lanes=g,i;case M:return i=_r(13,o,s,f),i.elementType=M,i.lanes=g,i;case U:return i=_r(19,o,s,f),i.elementType=U,i.lanes=g,i;case G:return O0(o,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case P:T=11;break e;case j:T=14;break e;case Y:T=16,c=null;break e}T=29,o=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,o,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Ja(i,s,o,c){return i=_r(7,i,c,s),i.lanes=o,i}function O0(i,s,o,c){i=_r(22,i,c,s),i.elementType=G,i.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Nn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Nn(T,g,2))}}};return i.stateNode=f,i}function E_(i,s,o){return i=_r(6,i,null,s),i.lanes=o,i}function T_(i,s,o){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=o,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function V0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!yb(s)){if(s=mr.current,s!==null&&((He&4194176)===He?Kr!==null:(He&62914560)!==He&&(He&536870912)===0||s!==Kr))throw _c=Sg,XT;i.flags|=8192}}function Sf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,bl|=s)}function Vc(i,s){if(!Qe)switch(i.tailMode){case"hidden":s=i.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(s)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=o,s}function UP(i,s,o){var c=s.pendingProps;switch(Ig(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return o=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Vi(Wt),_i(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(fc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(D_(Rr),Rr=null))),yt(s),null;case 26:return o=s.memoizedState,i===null?(Ui(s),o!==null?(yt(s),V0(s,o)):(yt(s),s.flags&=-16777217)):o?o!==i.memoizedState?(Ui(s),yt(s),V0(s,o)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:qo(s),o=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,fc(s)?YT(s):(i=cb(f,c,o),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(qo(s),o=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,fc(s))YT(s);else{switch(f=Lf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(pn(i,o,c),o){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,fc(s)){if(i=s.stateNode,o=s.memoizedProps,c=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||ib(i.nodeValue,o)),i||qa(s)}else i=Lf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=fc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else mc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),f=!1}else Rr!==null&&(D_(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Pi(s),s):(Pi(s),null)}if(Pi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,i=i!==null&&i.memoizedState!==null,o){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return o!==i&&o&&(s.child.flags|=8192),Sf(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&z_(s.stateNode.containerInfo),yt(s),null;case 10:return Vi(s.type),yt(s),null;case 19:if(Xe(Yt),f=s.memoizedState,f===null)return yt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Vc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=uf(i),g!==null){for(s.flags|=128,Vc(f,!1),i=g.updateQueue,s.updateQueue=i,Sf(s,i),s.subtreeFlags=0,i=o,o=s.child;o!==null;)x0(o,i),o=o.sibling;return $e(Yt,Yt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Rf&&(s.flags|=128,c=!0,Vc(f,!1),s.lanes=4194304)}else{if(!c)if(i=uf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Sf(s,i),Vc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Qe)return yt(s),null}else 2*Ln()-f.renderingStartTime>Rf&&o!==536870912&&(s.flags|=128,c=!0,Vc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Yt.current,$e(Yt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return Pi(s),Cg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),o=s.updateQueue,o!==null&&Sf(s,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),i!==null&&Xe(Ha),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Vi(Wt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function BP(i,s){switch(Ig(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Vi(Wt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return qo(s),null;case 13:if(Pi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));mc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Xe(Yt),null;case 4:return _i(),null;case 10:return Vi(s.type),null;case 22:case 23:return Pi(s),Cg(),i!==null&&Xe(Ha),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return Vi(Wt),null;case 25:return null;default:return null}}function k0(i,s){switch(Ig(s),s.tag){case 3:Vi(Wt),_i();break;case 26:case 27:case 5:qo(s);break;case 4:_i();break;case 13:Pi(s);break;case 19:Xe(Yt);break;case 10:Vi(s.type);break;case 22:case 23:Pi(s),Cg(),i!==null&&Xe(Ha);break;case 24:Vi(Wt)}}var zP={getCacheForType:function(i){var s=Tn(Wt),o=s.data.get(i);return o===void 0&&(o=i(),s.data.set(i,o)),o}},FP=typeof WeakMap=="function"?WeakMap:Map,vt=0,st=null,Le=null,He=0,at=0,Wn=null,Bi=!1,wl=!1,w_=!1,zi=0,Rt=0,Ms=0,Za=0,b_=0,yr=0,bl=0,kc=null,Yr=null,I_=!1,A_=0,Rf=1/0,Cf=null,Ls=null,Df=!1,eo=null,Mc=0,S_=0,R_=null,Lc=0,C_=null;function Xn(){if((vt&2)!==0&&He!==0)return He&-He;if(A.T!==null){var i=ml;return i!==0?i:M_()}return Vd()}function M0(){yr===0&&(yr=(He&536870912)===0||Qe?Yu():536870912);var i=mr.current;return i!==null&&(i.flags|=32),yr}function Nn(i,s,o){(i===st&&at===2||i.cancelPendingCommit!==null)&&(Il(i,0),Fi(i,He,yr,!1)),Ot(i,o),((vt&2)===0||i!==st)&&(i===st&&((vt&2)===0&&(Za|=o),Rt===4&&Fi(i,He,yr,!1)),Wr(i))}function L0(i,s,o){if((vt&6)!==0)throw Error(r(327));var c=!o&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?HP(i,s):x_(i,s,!0),g=c;do{if(f===0){wl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(o=i.current.alternate,g&&!qP(o)){f=x_(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=kc;var C=b.current.memoizedState.isDehydrated;if(C&&(Il(b,T).flags|=256),T=x_(b,T,!1),T!==2){if(w_&&!C){b.errorRecoveryDisabledLanes|=g,Za|=g,f=4;break e}g=Yr,Yr=f,g!==null&&D_(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Il(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Yr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=o,c.finishedLanes=s,(s&62914560)===s&&(g=A_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=ob(U0.bind(null,c,o,Yr,Cf,I_,s,yr,Za,bl,Bi,2,-0,0),g);break e}U0(c,o,Yr,Cf,I_,s,yr,Za,bl,Bi,0,-0,0)}}break}while(!0);Wr(i)}function D_(i){Yr===null?Yr=i:Yr.push.apply(Yr,i)}function U0(i,s,o,c,f,g,T,b,C,L,J,ne,$){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(jc={stylesheets:null,count:0,unsuspend:bN},C0(s),s=AN(),s!==null)){i.cancelPendingCommit=s(G0.bind(null,i,o,c,f,T,b,C,1,ne,$)),Fi(i,g,T,!L);return}G0(i,o,c,f,T,b,C,J,ne,$)}function qP(i){for(var s=i;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,o,c){s&=~b_,s&=~Za,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}o!==0&&ds(i,o,s)}function Pf(){return(vt&6)===0?(Uc(0),!1):!0}function P_(){if(Le!==null){if(at===0)var i=Le.return;else i=Le,Oi=Ya=null,Mg(i),dl=null,yc=0,i=Le;for(;i!==null;)k0(i.alternate,i),i=i.return;Le=null}}function Il(i,s){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,oN(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),P_(),st=i,Le=o=ks(i.current,null),He=s,at=0,Wn=null,Bi=!1,wl=cs(i,s),w_=!1,bl=yr=b_=Za=Ms=Rt=0,Yr=kc=null,I_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,Zd(),o}function B0(i,s){Ve=null,A.H=Qr,s===gc?(s=ew(),at=3):s===XT?(s=ew(),at=4):at=s===Jw?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Wn=s,Le===null&&(Rt=1,Ef(i,hr(s,i.current)))}function z0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function F0(){var i=A.A;return A.A=zP,i}function N_(){Rt=4,Bi||(He&4194176)!==He&&mr.current!==null||(wl=!0),(Ms&134217727)===0&&(Za&134217727)===0||st===null||Fi(st,He,yr,!1)}function x_(i,s,o){var c=vt;vt|=2;var f=z0(),g=F0();(st!==i||He!==s)&&(Cf=null,Il(i,s)),s=!1;var T=Rt;e:do try{if(at!==0&&Le!==null){var b=Le,C=Wn;switch(at){case 8:P_(),T=6;break e;case 3:case 2:case 6:mr.current===null&&(s=!0);var L=at;if(at=0,Wn=null,Al(i,b,C,L),o&&wl){T=0;break e}break;default:L=at,at=0,Wn=null,Al(i,b,C,L)}}jP(),T=Rt;break}catch(J){B0(i,J)}while(!0);return s&&i.shellSuspendCounter++,Oi=Ya=null,vt=c,A.H=f,A.A=g,Le===null&&(st=null,He=0,Zd()),T}function jP(){for(;Le!==null;)q0(Le)}function HP(i,s){var o=vt;vt|=2;var c=z0(),f=F0();st!==i||He!==s?(Cf=null,Rf=Ln()+500,Il(i,s)):wl=cs(i,s);e:do try{if(at!==0&&Le!==null){s=Le;var g=Wn;t:switch(at){case 1:at=0,Wn=null,Al(i,s,g,1);break;case 2:if(JT(g)){at=0,Wn=null,j0(s);break}s=function(){at===2&&st===i&&(at=7),Wr(i)},g.then(s,s);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:JT(g)?(at=0,Wn=null,j0(s)):(at=0,Wn=null,Al(i,s,g,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var b=Le;if(!T||yb(T)){at=0,Wn=null;var C=b.sibling;if(C!==null)Le=C;else{var L=b.return;L!==null?(Le=L,Nf(L)):Le=null}break t}}at=0,Wn=null,Al(i,s,g,5);break;case 6:at=0,Wn=null,Al(i,s,g,6);break;case 8:P_(),Rt=6;break e;default:throw Error(r(462))}}GP();break}catch(J){B0(i,J)}while(!0);return Oi=Ya=null,A.H=c,A.A=f,vt=o,Le!==null?0:(st=null,He=0,Zd(),Rt)}function GP(){for(;Le!==null&&!ag();)q0(Le)}function q0(i){var s=c0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?Nf(i):Le=s}function j0(i){var s=i,o=s.alternate;switch(s.tag){case 15:case 0:s=i0(o,s,s.pendingProps,s.type,void 0,He);break;case 11:s=i0(o,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:Mg(s);default:k0(o,s),s=Le=x0(s,zi),s=c0(o,s,zi)}i.memoizedProps=i.pendingProps,s===null?Nf(i):Le=s}function Al(i,s,o,c){Oi=Ya=null,Mg(s),dl=null,yc=0;var f=s.return;try{if(OP(i,f,s,o,He)){Rt=1,Ef(i,hr(o,i.current)),Le=null;return}}catch(g){if(f!==null)throw Le=f,g;Rt=1,Ef(i,hr(o,i.current)),Le=null;return}s.flags&32768?(Qe||c===1?i=!0:wl||(He&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=mr.current,c!==null&&c.tag===13&&(c.flags|=16384))),H0(s,i)):Nf(s)}function Nf(i){var s=i;do{if((s.flags&32768)!==0){H0(s,Bi);return}i=s.return;var o=UP(s.alternate,s,zi);if(o!==null){Le=o;return}if(s=s.sibling,s!==null){Le=s;return}Le=s=i}while(s!==null);Rt===0&&(Rt=5)}function H0(i,s){do{var o=BP(i.alternate,i);if(o!==null){o.flags&=32767,Le=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(i=i.sibling,i!==null)){Le=i;return}Le=i=o}while(i!==null);Rt=6,Le=null}function G0(i,s,o,c,f,g,T,b,C,L){var J=A.T,ne=fe.p;try{fe.p=2,A.T=null,$P(i,s,o,c,ne,f,g,T,b,C,L)}finally{A.T=J,fe.p=ne}}function $P(i,s,o,c,f,g,T,b){do Sl();while(eo!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var L=C.lanes|C.childLanes;if(L|=Tg,xd(i,c,L,g,T,b),i===st&&(Le=st=null,He=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Df||(Df=!0,S_=L,R_=o,WP(yi,function(){return Sl(),null})),o=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||o?(o=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,kP(i,C),A0(C,i),gP(H_,i.containerInfo),jf=!!j_,H_=j_=null,i.current=C,T0(i,C.alternate,C),Gu(),vt=T,fe.p=g,A.T=o):i.current=C,Df?(Df=!1,eo=i,Mc=c):$0(i,L),L=i.pendingLanes,L===0&&(Ls=null),Ku(C.stateNode),Wr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)L=s[C],f(L.value,{componentStack:L.stack});return(Mc&3)!==0&&Sl(),L=i.pendingLanes,(c&4194218)!==0&&(L&42)!==0?i===C_?Lc++:(Lc=0,C_=i):Lc=0,Uc(0),null}function $0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Ec(s)))}function Sl(){if(eo!==null){var i=eo,s=S_;S_=0;var o=Od(Mc),c=A.T,f=fe.p;try{if(fe.p=32>o?32:o,A.T=null,eo===null)var g=!1;else{o=R_,R_=null;var T=eo,b=Mc;if(eo=null,Mc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,P0(T.current),R0(T,T.current,b,o),vt=C,Uc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,$0(i,s)}}return!1}function K0(i,s,o){s=hr(o,s),s=Wg(i.stateNode,s,2),i=Ns(i,s,2),i!==null&&(Ot(i,2),Wr(i))}function it(i,s,o){if(i.tag===3)K0(i,i,o);else for(;s!==null;){if(s.tag===3){K0(s,i,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(o,i),o=Ww(2),c=Ns(s,o,2),c!==null&&(Xw(o,c,s,i),Ot(c,2),Wr(c));break}}s=s.return}}function O_(i,s,o){var c=i.pingCache;if(c===null){c=i.pingCache=new FP;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(o)||(w_=!0,f.add(o),i=KP.bind(null,i,s,o),s.then(i,i))}function KP(i,s,o){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,st===i&&(He&o)===o&&(Rt===4||Rt===3&&(He&62914560)===He&&300>Ln()-A_?(vt&2)===0&&Il(i,0):b_|=o,bl===He&&(bl=0)),Wr(i)}function Q0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Wr(i))}function QP(i){var s=i.memoizedState,o=0;s!==null&&(o=s.retryLane),Q0(i,o)}function YP(i,s){var o=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),Q0(i,o)}function WP(i,s){return Ia(i,s)}var xf=null,Rl=null,V_=!1,Of=!1,k_=!1,to=0;function Wr(i){i!==Rl&&i.next===null&&(Rl===null?xf=Rl=i:Rl=Rl.next=i),Of=!0,V_||(V_=!0,JP(XP))}function Uc(i,s){if(!k_&&Of){k_=!0;do for(var o=!1,c=xf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(o=!0,X0(c,g))}else g=He,g=ir(c,c===st?g:0),(g&3)===0||cs(c,g)||(o=!0,X0(c,g));c=c.next}while(o);k_=!1}}function XP(){Of=V_=!1;var i=0;to!==0&&(aN()&&(i=to),to=0);for(var s=Ln(),o=null,c=xf;c!==null;){var f=c.next,g=Y0(c,s);g===0?(c.next=null,o===null?xf=f:o.next=f,f===null&&(Rl=o)):(o=c,(i!==0||(g&3)!==0)&&(Of=!0)),c=f}Uc(i)}function Y0(i,s){for(var o=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&o)===0||(b&c)!==0)&&(f[T]=Go(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=st,o=He,o=ir(i,i===s?o:0),c=i.callbackNode,o===0||i===s&&at===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ho(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||cs(i,o)){if(s=o&-o,s===i.callbackPriority)return s;switch(c!==null&&Ho(c),Od(o)){case 2:case 8:o=en;break;case 32:o=yi;break;case 268435456:o=$u;break;default:o=yi}return c=W0.bind(null,i),o=Ia(o,c),i.callbackPriority=s,i.callbackNode=o,s}return c!==null&&c!==null&&Ho(c),i.callbackPriority=2,i.callbackNode=null,2}function W0(i,s){var o=i.callbackNode;if(Sl()&&i.callbackNode!==o)return null;var c=He;return c=ir(i,i===st?c:0),c===0?null:(L0(i,c,s),Y0(i,Ln()),i.callbackNode!=null&&i.callbackNode===o?W0.bind(null,i):null)}function X0(i,s){if(Sl())return null;L0(i,s,!0)}function JP(i){lN(function(){(vt&6)!==0?Ia(Gt,i):i()})}function M_(){return to===0&&(to=Yu()),to}function J0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function Z0(i,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,i.id&&o.setAttribute("form",i.id),s.parentNode.insertBefore(o,s),i=new FormData(i),o.parentNode.removeChild(o),i}function ZP(i,s,o,c,f){if(s==="submit"&&o&&o.stateNode===f){var g=J0((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?J0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Jo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(to!==0){var C=T?Z0(f,T):new FormData(f);Gg(o,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?Z0(f,T):new FormData(f),Gg(o,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var L_=0;L_<GT.length;L_++){var U_=GT[L_],eN=U_.toLowerCase(),tN=U_[0].toUpperCase()+U_.slice(1);Sr(eN,"on"+tN)}Sr(zT,"onAnimationEnd"),Sr(FT,"onAnimationIteration"),Sr(qT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(yP,"onTransitionRun"),Sr(vP,"onTransitionStart"),Sr(EP,"onTransitionCancel"),Sr(jT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bc));function eb(i,s){s=(s&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,L=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){vf(J)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,L=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){vf(J)}f.currentTarget=null,g=C}}}}function Fe(i,s){var o=s[Sa];o===void 0&&(o=s[Sa]=new Set);var c=i+"__bubble";o.has(c)||(tb(s,i,2,!1),o.add(c))}function B_(i,s,o){var c=0;s&&(c|=4),tb(o,i,c,s)}var Vf="_reactListening"+Math.random().toString(36).slice(2);function z_(i){if(!i[Vf]){i[Vf]=!0,Xu.forEach(function(o){o!=="selectionchange"&&(nN.has(o)||B_(o,!1,i),B_(o,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Vf]||(s[Vf]=!0,B_("selectionchange",!1,s))}}function tb(i,s,o,c){switch(Ib(s)){case 2:var f=CN;break;case 8:f=DN;break;default:f=Z_}o=f.bind(null,s,o,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,o,{capture:!0,passive:f}):i.addEventListener(s,o,!0):f!==void 0?i.addEventListener(s,o,{passive:f}):i.addEventListener(s,o,!1)}function F_(i,s,o,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Ud(function(){var L=g,J=Xo(o),ne=[];e:{var $=HT.get(i);if($!==void 0){var X=Jo,ve=i;switch(i){case"keypress":if(Fr(o)===0)break e;case"keydown":case"keyup":X=il;break;case"focusin":ve="focus",X=tl;break;case"focusout":ve="blur",X=tl;break;case"beforeblur":case"afterblur":X=tl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=$d;break;case zT:case FT:case qT:X=nl;break;case jT:X=Qd;break;case"scroll":case"scrollend":X=Bd;break;case"wheel":X=sl;break;case"copy":case"cut":case"paste":X=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=uc;break;case"toggle":case"beforetoggle":X=Wd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),B=De?$!==null?$+"Capture":null:$;De=[];for(var V=L,H;V!==null;){var ee=V;if(H=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||H===null||B===null||(ee=Na(V,B),ee!=null&&De.push(zc(V,ee,H))),Ct)break;V=V.return}0<De.length&&($=new X($,ve,null,o,J),ne.push({event:$,listeners:De}))}}if((s&7)===0){e:{if($=i==="mouseover"||i==="pointerover",X=i==="mouseout"||i==="pointerout",$&&o!==or&&(ve=o.relatedTarget||o.fromElement)&&(Ar(ve)||ve[vi]))break e;if((X||$)&&($=J.window===J?J:($=J.ownerDocument)?$.defaultView||$.parentWindow:window,X?(ve=o.relatedTarget||o.toElement,X=L,ve=ve?Ar(ve):null,ve!==null&&(Ct=Te(ve),De=ve.tag,ve!==Ct||De!==5&&De!==27&&De!==6)&&(ve=null)):(X=null,ve=L),X!==ve)){if(De=ur,ee="onMouseLeave",B="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(De=uc,ee="onPointerLeave",B="onPointerEnter",V="pointer"),Ct=X==null?$:gs(X),H=ve==null?$:gs(ve),$=new De(ee,V+"leave",X,o,J),$.target=Ct,$.relatedTarget=H,ee=null,Ar(J)===L&&(De=new De(B,V+"enter",ve,o,J),De.target=H,De.relatedTarget=Ct,ee=De),Ct=ee,X&&ve)t:{for(De=X,B=ve,V=0,H=De;H;H=Cl(H))V++;for(H=0,ee=B;ee;ee=Cl(ee))H++;for(;0<V-H;)De=Cl(De),V--;for(;0<H-V;)B=Cl(B),H--;for(;V--;){if(De===B||B!==null&&De===B.alternate)break t;De=Cl(De),B=Cl(B)}De=null}else De=null;X!==null&&nb(ne,$,X,De,!1),ve!==null&&Ct!==null&&nb(ne,Ct,ve,De,!0)}}e:{if($=L?gs(L):window,X=$.nodeName&&$.nodeName.toLowerCase(),X==="select"||X==="input"&&$.type==="file")var _e=DT;else if(Qt($))if(PT)_e=mP;else{_e=dP;var Me=hP}else X=$.nodeName,!X||X.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?L&&nc(L.elementType)&&(_e=DT):_e=fP;if(_e&&(_e=_e(i,L))){Ri(ne,_e,o,J);break e}Me&&Me(i,$,L),i==="focusout"&&L&&$.type==="number"&&L.memoizedProps.value!=null&&Wo($,"number",$.value)}switch(Me=L?gs(L):window,i){case"focusin":(Qt(Me)||Me.contentEditable==="true")&&(al=Me,yg=L,dc=null);break;case"focusout":dc=yg=al=null;break;case"mousedown":vg=!0;break;case"contextmenu":case"mouseup":case"dragend":vg=!1,UT(ne,o,J);break;case"selectionchange":if(_P)break;case"keydown":case"keyup":UT(ne,o,J)}var we;if(Hr)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else qe?Q(i,o)&&(Ae="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&o.locale!=="ko"&&(qe||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&qe&&(we=ic()):(zr=J,ws="value"in zr?zr.value:zr.textContent,qe=!0)),Me=kf(L,Ae),0<Me.length&&(Ae=new oc(Ae,i,null,o,J),ne.push({event:Ae,listeners:Me}),we?Ae.data=we:(we=ue(o),we!==null&&(Ae.data=we)))),(we=_?Kt(i,o):je(i,o))&&(Ae=kf(L,"onBeforeInput"),0<Ae.length&&(Me=new oc("onBeforeInput","beforeinput",null,o,J),ne.push({event:Me,listeners:Ae}),Me.data=we)),ZP(ne,i,L,o,J)}eb(ne,s)})}function zc(i,s,o){return{instance:i,listener:s,currentTarget:o}}function kf(i,s){for(var o=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(i,o),f!=null&&c.unshift(zc(i,f,g)),f=Na(i,s),f!=null&&c.push(zc(i,f,g))),i=i.return}return c}function Cl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function nb(i,s,o,c,f){for(var g=s._reactName,T=[];o!==null&&o!==c;){var b=o,C=b.alternate,L=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||L===null||(C=L,f?(L=Na(o,g),L!=null&&T.unshift(zc(o,L,C))):f||(L=Na(o,g),L!=null&&T.push(zc(o,L,C)))),o=o.return}T.length!==0&&i.push({event:s,listeners:T})}var rN=/\r\n?/g,iN=/\u0000|\uFFFD/g;function rb(i){return(typeof i=="string"?i:""+i).replace(rN,`
`).replace(iN,"")}function ib(i,s){return s=rb(s),rb(i)===s}function Mf(){}function rt(i,s,o,c,f,g){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,o,c);break;case"style":Ld(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=Br(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&rt(i,s,"name",f.name,f,null),rt(i,s,"formEncType",f.formEncType,f,null),rt(i,s,"formMethod",f.formMethod,f,null),rt(i,s,"formTarget",f.formTarget,f,null)):(rt(i,s,"encType",f.encType,f,null),rt(i,s,"method",f.method,f,null),rt(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=Br(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=Mf);break;case"onScroll":c!=null&&Fe("scroll",i);break;case"onScrollEnd":c!=null&&Fe("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Fe("beforetoggle",i),Fe("toggle",i),ys(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ys(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=hg.get(o)||o,ys(i,o,c))}}function q_(i,s,o,c,f,g){switch(o){case"style":Ld(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&Fe("scroll",i);break;case"onScrollEnd":c!=null&&Fe("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Mf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),g=i[$t]||null,g=g!=null?g[o]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(s,c,f);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):ys(i,o,c)}}}function pn(i,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",i),Fe("load",i);var c=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:rt(i,s,g,T,o,null)}}f&&rt(i,s,"srcSet",o.srcSet,o,null),c&&rt(i,s,"src",o.src,o,null);return;case"input":Fe("invalid",i);var b=g=T=f=null,C=null,L=null;for(c in o)if(o.hasOwnProperty(c)){var J=o[c];if(J!=null)switch(c){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":L=J;break;case"value":g=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:rt(i,s,c,J,o,null)}}Da(i,g,b,C,L,T,f,!1),Ca(i);return;case"select":Fe("invalid",i),c=T=g=null;for(f in o)if(o.hasOwnProperty(f)&&(b=o[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:rt(i,s,f,b,o,null)}s=g,o=T,i.multiple=!!c,s!=null?Ke(i,!!c,s,!1):o!=null&&Ke(i,!!c,o,!0);return;case"textarea":Fe("invalid",i),g=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(b=o[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:rt(i,s,T,b,o,null)}Ts(i,c,f,g),Ca(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(c=o[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rt(i,s,C,c,o,null)}return;case"dialog":Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":Fe("load",i);break;case"video":case"audio":for(c=0;c<Bc.length;c++)Fe(Bc[c],i);break;case"image":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"embed":case"source":case"link":Fe("error",i),Fe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in o)if(o.hasOwnProperty(L)&&(c=o[L],c!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:rt(i,s,L,c,o,null)}return;default:if(nc(s)){for(J in o)o.hasOwnProperty(J)&&(c=o[J],c!==void 0&&q_(i,s,J,c,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(c=o[b],c!=null&&rt(i,s,b,c,o,null))}function sN(i,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,L=null,J=null;for(X in o){var ne=o[X];if(o.hasOwnProperty(X)&&ne!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(X)||rt(i,s,X,null,c,ne)}}for(var $ in c){var X=c[$];if(ne=o[$],c.hasOwnProperty($)&&(X!=null||ne!=null))switch($){case"type":g=X;break;case"name":f=X;break;case"checked":L=X;break;case"defaultChecked":J=X;break;case"value":T=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,s));break;default:X!==ne&&rt(i,s,$,X,c,ne)}}Es(i,T,b,C,L,J,g,f);return;case"select":X=T=b=$=null;for(g in o)if(C=o[g],o.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":X=C;default:c.hasOwnProperty(g)||rt(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=o[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":$=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&rt(i,s,f,g,c,C)}s=b,o=T,c=X,$!=null?Ke(i,!!o,$,!1):!!c!=!!o&&(s!=null?Ke(i,!!o,s,!0):Ke(i,!!o,o?[]:"",!1));return;case"textarea":X=$=null;for(b in o)if(f=o[b],o.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:rt(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=o[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":$=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&rt(i,s,T,f,c,g)}Pa(i,$,X);return;case"option":for(var ve in o)if($=o[ve],o.hasOwnProperty(ve)&&$!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:rt(i,s,ve,null,c,$)}for(C in c)if($=c[C],X=o[C],c.hasOwnProperty(C)&&$!==X&&($!=null||X!=null))switch(C){case"selected":i.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:rt(i,s,C,$,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in o)$=o[De],o.hasOwnProperty(De)&&$!=null&&!c.hasOwnProperty(De)&&rt(i,s,De,null,c,$);for(L in c)if($=c[L],X=o[L],c.hasOwnProperty(L)&&$!==X&&($!=null||X!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,s));break;default:rt(i,s,L,$,c,X)}return;default:if(nc(s)){for(var Ct in o)$=o[Ct],o.hasOwnProperty(Ct)&&$!==void 0&&!c.hasOwnProperty(Ct)&&q_(i,s,Ct,void 0,c,$);for(J in c)$=c[J],X=o[J],!c.hasOwnProperty(J)||$===X||$===void 0&&X===void 0||q_(i,s,J,$,c,X);return}}for(var B in o)$=o[B],o.hasOwnProperty(B)&&$!=null&&!c.hasOwnProperty(B)&&rt(i,s,B,null,c,$);for(ne in c)$=c[ne],X=o[ne],!c.hasOwnProperty(ne)||$===X||$==null&&X==null||rt(i,s,ne,$,c,X)}var j_=null,H_=null;function Lf(i){return i.nodeType===9?i:i.ownerDocument}function sb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ab(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function G_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var $_=null;function aN(){var i=window.event;return i&&i.type==="popstate"?i===$_?!1:($_=i,!0):($_=null,!1)}var ob=typeof setTimeout=="function"?setTimeout:void 0,oN=typeof clearTimeout=="function"?clearTimeout:void 0,lb=typeof Promise=="function"?Promise:void 0,lN=typeof queueMicrotask=="function"?queueMicrotask:typeof lb<"u"?function(i){return lb.resolve(null).then(i).catch(uN)}:ob;function uN(i){setTimeout(function(){throw i})}function K_(i,s){var o=s,c=0;do{var f=o.nextSibling;if(i.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){i.removeChild(f),Qc(s);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Qc(s)}function Q_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Q_(o),Ra(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function cN(i,s,o,c){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ps])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function hN(i,s,o){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ub(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return i;s--}else o==="/$"&&s++}i=i.previousSibling}return null}function cb(i,s,o){switch(s=Lf(o),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,hb=new Set;function Uf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var qi=fe.d;fe.d={f:dN,r:fN,D:mN,C:pN,L:gN,m:_N,X:vN,S:yN,M:EN};function dN(){var i=qi.f(),s=Pf();return i||s}function fN(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Uw(s):qi.r(i)}var Dl=typeof document>"u"?null:document;function db(i,s,o){var c=Dl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),hb.has(f)||(hb.add(f),i={rel:i,crossOrigin:o,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function mN(i){qi.D(i),db("dns-prefetch",i,null)}function pN(i,s){qi.C(i,s),db("preconnect",i,s)}function gN(i,s,o){qi.L(i,s,o);var c=Dl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+At(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+At(o.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Pl(i);break;case"script":g=Nl(i)}vr.has(g)||(i=N({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:i,as:s},o),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Fc(g))||s==="script"&&c.querySelector(qc(g))||(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function _N(i,s){qi.m(i,s);var o=Dl;if(o&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Nl(i)}if(!vr.has(g)&&(i=N({rel:"modulepreload",href:i},s),vr.set(g,i),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(qc(g)))return}c=o.createElement("link"),pn(c,"link",i),_t(c),o.head.appendChild(c)}}}function yN(i,s,o){qi.S(i,s,o);var c=Dl;if(c&&i){var f=_s(c).hoistableStyles,g=Pl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Fc(g)))b.loading=5;else{i=N({rel:"stylesheet",href:i,"data-precedence":s},o),(o=vr.get(g))&&Y_(i,o);var C=T=c.createElement("link");_t(C),pn(C,"link",i),C._p=new Promise(function(L,J){C.onload=L,C.onerror=J}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function vN(i,s){qi.X(i,s);var o=Dl;if(o&&i){var c=_s(o).hoistableScripts,f=Nl(i),g=c.get(f);g||(g=o.querySelector(qc(f)),g||(i=N({src:i,async:!0},s),(s=vr.get(f))&&W_(i,s),g=o.createElement("script"),_t(g),pn(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function EN(i,s){qi.M(i,s);var o=Dl;if(o&&i){var c=_s(o).hoistableScripts,f=Nl(i),g=c.get(f);g||(g=o.querySelector(qc(f)),g||(i=N({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&W_(i,s),g=o.createElement("script"),_t(g),pn(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function fb(i,s,o,c){var f=(f=rr.current)?Uf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Pl(o.href),o=_s(f).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Pl(o.href);var g=_s(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Fc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},vr.set(i,o),g||TN(f,i,o,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Nl(o),o=_s(f).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Pl(i){return'href="'+At(i)+'"'}function Fc(i){return'link[rel="stylesheet"]['+i+"]"}function mb(i){return N({},i,{"data-precedence":i.precedence,precedence:null})}function TN(i,s,o,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),pn(s,"link",o),_t(s),i.head.appendChild(s))}function Nl(i){return'[src="'+At(i)+'"]'}function qc(i){return"script[async]"+i}function pb(i,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(o.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),pn(c,"style",f),Bf(c,o.precedence,i),s.instance=c;case"stylesheet":f=Pl(o.href);var g=i.querySelector(Fc(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=mb(o),(f=vr.get(f))&&Y_(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",c),s.state.loading|=4,Bf(g,o.precedence,i),s.instance=g;case"script":return g=Nl(o.src),(f=i.querySelector(qc(g)))?(s.instance=f,_t(f),f):(c=o,(f=vr.get(g))&&(c=N({},o),W_(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),pn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Bf(c,o.precedence,i));return s.instance}function Bf(i,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(i,s.firstChild))}function Y_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function W_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var zf=null;function gb(i,s,o){if(zf===null){var c=new Map,f=zf=new Map;f.set(o,c)}else f=zf,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var g=o[f];if(!(g[ps]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function _b(i,s,o){i=i.ownerDocument||i,i.head.insertBefore(o,s==="title"?i.querySelector("head > title"):null)}function wN(i,s,o){if(o===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function yb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var jc=null;function bN(){}function IN(i,s,o){if(jc===null)throw Error(r(475));var c=jc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Pl(o.href),g=i.querySelector(Fc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ff.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,o=mb(o),(f=vr.get(f))&&Y_(o,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",o),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Ff.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function AN(){if(jc===null)throw Error(r(475));var i=jc;return i.stylesheets&&i.count===0&&X_(i,i.stylesheets),0<i.count?function(s){var o=setTimeout(function(){if(i.stylesheets&&X_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Ff(){if(this.count--,this.count===0){if(this.stylesheets)X_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var qf=null;function X_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,qf=new Map,s.forEach(SN,i),qf=null,Ff.call(i))}function SN(i,s){if(!(s.state.loading&4)){var o=qf.get(i);if(o)var c=o.get(null);else{o=new Map,qf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=o.get(T)||c,g===c&&o.set(null,f),o.set(T,f),this.count++,c=Ff.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var Hc={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function RN(i,s,o,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function vb(i,s,o,c,f,g,T,b,C,L,J,ne){return i=new RN(i,s,o,T,b,C,L,ne),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Dg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:s},u_(g),i}function Eb(i){return i?(i=ul,i):ul}function Tb(i,s,o,c,f,g){f=Eb(f),c.context===null?c.context=f:c.pendingContext=f,c=Ps(s),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=Ns(i,c,s),o!==null&&(Nn(o,i,s),Rc(o,i,s))}function wb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<s?o:s}}function J_(i,s){wb(i,s),(i=i.alternate)&&wb(i,s)}function bb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Nn(s,i,67108864),J_(i,67108864)}}var jf=!0;function CN(i,s,o,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,Z_(i,s,o,c)}finally{fe.p=g,A.T=f}}function DN(i,s,o,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,Z_(i,s,o,c)}finally{fe.p=g,A.T=f}}function Z_(i,s,o,c){if(jf){var f=ey(c);if(f===null)F_(i,s,c,Hf,o),Ab(i,c);else if(NN(f,i,s,o,c))c.stopPropagation();else if(Ab(i,c),s&4&&-1<PN.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Wr(g),(vt&6)===0&&(Rf=Ln()+500,Uc(0))}}break;case 13:b=bs(g,2),b!==null&&Nn(b,g,2),Pf(),J_(g,2)}if(g=ey(c),g===null&&F_(i,s,c,Hf,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else F_(i,s,c,null,o)}}function ey(i){return i=Xo(i),ty(i)}var Hf=null;function ty(i){if(Hf=null,i=Ar(i),i!==null){var s=Te(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=xe(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Hf=i,null}function Ib(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cd()){case Gt:return 2;case en:return 8;case yi:case Dd:return 32;case $u:return 268435456;default:return 32}default:return 32}}var ny=!1,Us=null,Bs=null,zs=null,Gc=new Map,$c=new Map,Fs=[],PN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Gc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$c.delete(s.pointerId)}}function Kc(i,s,o,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&bb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function NN(i,s,o,c,f){switch(s){case"focusin":return Us=Kc(Us,i,s,o,c,f),!0;case"dragenter":return Bs=Kc(Bs,i,s,o,c,f),!0;case"mouseover":return zs=Kc(zs,i,s,o,c,f),!0;case"pointerover":var g=f.pointerId;return Gc.set(g,Kc(Gc.get(g)||null,i,s,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,$c.set(g,Kc($c.get(g)||null,i,s,o,c,f)),!0}return!1}function Sb(i){var s=Ar(i.target);if(s!==null){var o=Te(s);if(o!==null){if(s=o.tag,s===13){if(s=xe(o),s!==null){i.blockedOn=s,ms(i.priority,function(){if(o.tag===13){var c=Xn(),f=bs(o,c);f!==null&&Nn(f,o,c),J_(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var o=ey(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);or=c,o.target.dispatchEvent(c),or=null}else return s=Ei(o),s!==null&&bb(s),i.blockedOn=o,!1;s.shift()}return!0}function Rb(i,s,o){Gf(i)&&o.delete(s)}function xN(){ny=!1,Us!==null&&Gf(Us)&&(Us=null),Bs!==null&&Gf(Bs)&&(Bs=null),zs!==null&&Gf(zs)&&(zs=null),Gc.forEach(Rb),$c.forEach(Rb)}function $f(i,s){i.blockedOn===s&&(i.blockedOn=null,ny||(ny=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xN)))}var Kf=null;function Cb(i){Kf!==i&&(Kf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Kf===i&&(Kf=null);for(var s=0;s<i.length;s+=3){var o=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(ty(c||o)===null)continue;break}var g=Ei(o);g!==null&&(i.splice(s,3),s-=3,Gg(g,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Qc(i){function s(C){return $f(C,i)}Us!==null&&$f(Us,i),Bs!==null&&$f(Bs,i),zs!==null&&$f(zs,i),Gc.forEach(s),$c.forEach(s);for(var o=0;o<Fs.length;o++){var c=Fs[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(o=Fs[0],o.blockedOn===null);)Sb(o),o.blockedOn===null&&Fs.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],g=o[c+1],T=f[$t]||null;if(typeof g=="function")T||Cb(o);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(ty(f)!==null)continue}else b=T.action;typeof b=="function"?o[c+1]=b:(o.splice(c,3),c-=3),Cb(o)}}}function ry(i){this._internalRoot=i}Qf.prototype.render=ry.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,c=Xn();Tb(o,c,i,s,null,null)},Qf.prototype.unmount=ry.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Sl(),Tb(i.current,2,null,i,null,null),Pf(),s[vi]=null}};function Qf(i){this._internalRoot=i}Qf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Vd();i={blockedOn:null,target:i,priority:s};for(var o=0;o<Fs.length&&s!==0&&s<Fs[o].priority;o++);Fs.splice(o,0,i),o===0&&Sb(i)}};var Db=e.version;if(Db!=="19.0.0")throw Error(r(527,Db,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=se(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var ON={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yf.isDisabled&&Yf.supportsFiber)try{ls=Yf.inject(ON),En=Yf}catch{}}return Wc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var o=!1,c="",f=$w,g=Kw,T=Qw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=vb(i,1,!1,null,null,o,c,f,g,T,b,null),i[vi]=s.current,z_(i.nodeType===8?i.parentNode:i),new ry(s)},Wc.hydrateRoot=function(i,s,o){if(!a(i))throw Error(r(299));var c=!1,f="",g=$w,T=Kw,b=Qw,C=null,L=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(L=o.formState)),s=vb(i,1,!0,s,o??null,c,f,g,T,b,C,L),s.context=Eb(null),o=s.current,c=Xn(),f=Ps(c),f.callback=null,Ns(o,f,c),s.current.lanes=c,Ot(s,c),Wr(s),i[vi]=s.current,z_(i),new Qf(s)},Wc.version="19.0.0",Wc}var Bb;function HN(){if(Bb)return sy.exports;Bb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sy.exports=jN(),sy.exports}var GN=HN(),W=Nv();const Ph=kN(W);var Xc={},zb;function $N(){if(zb)return Xc;zb=1,Object.defineProperty(Xc,"__esModule",{value:!0}),Xc.parse=u,Xc.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const P=new l,M=w.length;if(M<2)return P;const U=(S==null?void 0:S.decode)||y;let j=0;do{const Y=w.indexOf("=",j);if(Y===-1)break;const G=w.indexOf(";",j),ae=G===-1?M:G;if(Y>ae){j=w.lastIndexOf(";",Y-1)+1;continue}const ie=d(w,j,Y),le=m(w,Y,ie),D=w.slice(ie,le);if(P[D]===void 0){let R=d(w,Y+1,ae),A=m(w,ae,R);const N=U(w.slice(R,A));P[D]=N}j=ae+1}while(j<M);return P}function d(w,S,P){do{const M=w.charCodeAt(S);if(M!==32&&M!==9)return S}while(++S<P);return P}function m(w,S,P){for(;S>P;){const M=w.charCodeAt(--S);if(M!==32&&M!==9)return S+1}return P}function p(w,S,P){const M=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const U=M(S);if(!e.test(U))throw new TypeError(`argument val is invalid: ${S}`);let j=w+"="+U;if(!P)return j;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);j+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);j+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);j+="; Path="+P.path}if(P.expires){if(!v(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);j+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(j+="; HttpOnly"),P.secure&&(j+="; Secure"),P.partitioned&&(j+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":j+="; Priority=Low";break;case"medium":j+="; Priority=Medium";break;case"high":j+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":j+="; SameSite=Strict";break;case"lax":j+="; SameSite=Lax";break;case"none":j+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return j}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Xc}$N();var Fb="popstate";function KN(n={}){function e(r,a){let{pathname:l,search:u,hash:d}=r.location;return ky("",{pathname:l,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Nh(a)}return YN(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QN(){return Math.random().toString(36).substring(2,10)}function qb(n,e){return{usr:n.state,key:n.key,idx:e}}function ky(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Cu(e):e,state:t,key:e&&e.key||r||QN()}}function Nh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Cu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function YN(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,u=a.history,d="POP",m=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let U=y(),j=U==null?null:U-p;p=U,m&&m({action:d,location:M.location,delta:j})}function w(U,j){d="PUSH";let Y=ky(M.location,U,j);p=y()+1;let G=qb(Y,p),ae=M.createHref(Y);try{u.pushState(G,"",ae)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;a.location.assign(ae)}l&&m&&m({action:d,location:M.location,delta:1})}function S(U,j){d="REPLACE";let Y=ky(M.location,U,j);p=y();let G=qb(Y,p),ae=M.createHref(Y);u.replaceState(G,"",ae),l&&m&&m({action:d,location:M.location,delta:0})}function P(U){return WN(U)}let M={get action(){return d},get location(){return n(a,u)},listen(U){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Fb,v),m=U,()=>{a.removeEventListener(Fb,v),m=null}},createHref(U){return e(a,U)},createURL:P,encodeLocation(U){let j=P(U);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:w,replace:S,go(U){return u.go(U)}};return M}function WN(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Et(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Nh(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function pS(n,e,t="/"){return XN(n,e,t,!1)}function XN(n,e,t,r){let a=typeof e=="string"?Cu(e):e,l=Qi(a.pathname||"/",t);if(l==null)return null;let u=gS(n);JN(u);let d=null;for(let m=0;d==null&&m<u.length;++m){let p=ux(l);d=ox(u[m],p,r)}return d}function gS(n,e=[],t=[],r=""){let a=(l,u,d)=>{let m={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};m.relativePath.startsWith("/")&&(Et(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=$i([r,m.relativePath]),y=t.concat(m);l.children&&l.children.length>0&&(Et(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),gS(l.children,e,y,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:sx(p,l.index),routesMeta:y})};return n.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,u);else for(let m of _S(l.path))a(l,u,m)}),e}function _S(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let u=_S(r.join("/")),d=[];return d.push(...u.map(m=>m===""?l:[l,m].join("/"))),a&&d.push(...u),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function JN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ax(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var ZN=/^:[\w-]+$/,ex=3,tx=2,nx=1,rx=10,ix=-2,jb=n=>n==="*";function sx(n,e){let t=n.split("/"),r=t.length;return t.some(jb)&&(r+=ix),e&&(r+=tx),t.filter(a=>!jb(a)).reduce((a,l)=>a+(ZN.test(l)?ex:l===""?nx:rx),r)}function ax(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function ox(n,e,t=!1){let{routesMeta:r}=n,a={},l="/",u=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,y=l==="/"?e:e.slice(l.length)||"/",v=Nm({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),w=m.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=Nm({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([l,v.pathname]),pathnameBase:fx($i([l,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(l=$i([l,v.pathnameBase]))}return u}function Nm(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=lx(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:v},w)=>{if(y==="*"){let P=d[w]||"";u=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:n}}function lx(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function ux(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function cx(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Cu(n):n;return{pathname:t?t.startsWith("/")?t:hx(t,e):e,search:mx(r),hash:px(a)}}function hx(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function cy(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yS(n){let e=dx(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function vS(n,e,t,r=!1){let a;typeof n=="string"?a=Cu(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),cy("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),cy("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),cy("#","search","hash",a)));let l=n===""||a.pathname==="",u=l?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let m=cx(a,d),p=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),fx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,px=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function gx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var ES=["POST","PUT","PATCH","DELETE"];new Set(ES);var _x=["GET",...ES];new Set(_x);var Du=W.createContext(null);Du.displayName="DataRouter";var hp=W.createContext(null);hp.displayName="DataRouterState";var TS=W.createContext({isTransitioning:!1});TS.displayName="ViewTransition";var yx=W.createContext(new Map);yx.displayName="Fetchers";var vx=W.createContext(null);vx.displayName="Await";var pi=W.createContext(null);pi.displayName="Navigation";var rd=W.createContext(null);rd.displayName="Location";var gi=W.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var xv=W.createContext(null);xv.displayName="RouteError";function Ex(n,{relative:e}={}){Et(id(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=W.useContext(pi),{hash:a,pathname:l,search:u}=sd(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$i([t,l])),r.createHref({pathname:d,search:u,hash:a})}function id(){return W.useContext(rd)!=null}function ko(){return Et(id(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(rd).location}var wS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bS(n){W.useContext(pi).static||W.useLayoutEffect(n)}function dp(){let{isDataRoute:n}=W.useContext(gi);return n?Vx():Tx()}function Tx(){Et(id(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Du),{basename:e,navigator:t}=W.useContext(pi),{matches:r}=W.useContext(gi),{pathname:a}=ko(),l=JSON.stringify(yS(r)),u=W.useRef(!1);return bS(()=>{u.current=!0}),W.useCallback((m,p={})=>{if(ui(u.current,wS),!u.current)return;if(typeof m=="number"){t.go(m);return}let y=vS(m,JSON.parse(l),a,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$i([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,l,a,n])}W.createContext(null);function wx(){let{matches:n}=W.useContext(gi),e=n[n.length-1];return e?e.params:{}}function sd(n,{relative:e}={}){let{matches:t}=W.useContext(gi),{pathname:r}=ko(),a=JSON.stringify(yS(t));return W.useMemo(()=>vS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function bx(n,e){return IS(n,e)}function IS(n,e,t,r){var Y;Et(id(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=W.useContext(pi),{matches:u}=W.useContext(gi),d=u[u.length-1],m=d?d.params:{},p=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let G=v&&v.path||"";AS(p,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let w=ko(),S;if(e){let G=typeof e=="string"?Cu(e):e;Et(y==="/"||((Y=G.pathname)==null?void 0:Y.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),S=G}else S=w;let P=S.pathname||"/",M=P;if(y!=="/"){let G=y.replace(/^\//,"").split("/");M="/"+P.replace(/^\//,"").split("/").slice(G.length).join("/")}let U=!l&&t&&t.matches&&t.matches.length>0?t.matches:pS(n,{pathname:M});ui(v||U!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=Cx(U&&U.map(G=>Object.assign({},G,{params:Object.assign({},m,G.params),pathname:$i([y,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:$i([y,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),u,t,r);return e&&j?W.createElement(rd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},j):j}function Ix(){let n=Ox(),e=gx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:a},t):null,u)}var Ax=W.createElement(Ix,null),Sx=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(gi.Provider,{value:this.props.routeContext},W.createElement(xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rx({routeContext:n,match:e,children:t}){let r=W.useContext(Du);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(gi.Provider,{value:n},t)}function Cx(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Et(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let u=!1,d=-1;if(t)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:y,errors:v}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,p,y)=>{let v,w=!1,S=null,P=null;t&&(v=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||Ax,u&&(d<0&&y===0?(AS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):d===y&&(w=!0,P=p.route.hydrateFallbackElement||null)));let M=e.concat(a.slice(0,y+1)),U=()=>{let j;return v?j=S:w?j=P:p.route.Component?j=W.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=m,W.createElement(Rx,{match:p,routeContext:{outlet:m,matches:M,isDataRoute:t!=null},children:j})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?W.createElement(Sx,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:U(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):U()},null)}function Ov(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dx(n){let e=W.useContext(Du);return Et(e,Ov(n)),e}function Px(n){let e=W.useContext(hp);return Et(e,Ov(n)),e}function Nx(n){let e=W.useContext(gi);return Et(e,Ov(n)),e}function Vv(n){let e=Nx(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function xx(){return Vv("useRouteId")}function Ox(){var r;let n=W.useContext(xv),e=Px("useRouteError"),t=Vv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Vx(){let{router:n}=Dx("useNavigate"),e=Vv("useNavigate"),t=W.useRef(!1);return bS(()=>{t.current=!0}),W.useCallback(async(a,l={})=>{ui(t.current,wS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var Hb={};function AS(n,e,t){!e&&!Hb[n]&&(Hb[n]=!0,ui(!1,t))}W.memo(kx);function kx({routes:n,future:e,state:t}){return IS(n,void 0,t,e)}function om(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mx({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:l=!1}){Et(!id(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof t=="string"&&(t=Cu(t));let{pathname:m="/",search:p="",hash:y="",state:v=null,key:w="default"}=t,S=W.useMemo(()=>{let P=Qi(m,u);return P==null?null:{location:{pathname:P,search:p,hash:y,state:v,key:w},navigationType:r}},[u,m,p,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:W.createElement(pi.Provider,{value:d},W.createElement(rd.Provider,{children:e,value:S}))}function Lx({children:n,location:e}){return bx(My(n),e)}function My(n,e=[]){let t=[];return W.Children.forEach(n,(r,a)=>{if(!W.isValidElement(r))return;let l=[...e,a];if(r.type===W.Fragment){t.push.apply(t,My(r.props.children,l));return}Et(r.type===om,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=My(r.props.children,l)),t.push(u)}),t}var lm="get",um="application/x-www-form-urlencoded";function fp(n){return n!=null&&typeof n.tagName=="string"}function Ux(n){return fp(n)&&n.tagName.toLowerCase()==="button"}function Bx(n){return fp(n)&&n.tagName.toLowerCase()==="form"}function zx(n){return fp(n)&&n.tagName.toLowerCase()==="input"}function Fx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qx(n,e){return n.button===0&&(!e||e==="_self")&&!Fx(n)}var Wf=null;function jx(){if(Wf===null)try{new FormData(document.createElement("form"),0),Wf=!1}catch{Wf=!0}return Wf}var Hx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hy(n){return n!=null&&!Hx.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${um}"`),null):n}function Gx(n,e){let t,r,a,l,u;if(Bx(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||lm,a=hy(n.getAttribute("enctype"))||um,l=new FormData(n)}else if(Ux(n)||zx(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(r=m?Qi(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||lm,a=hy(n.getAttribute("formenctype"))||hy(d.getAttribute("enctype"))||um,l=new FormData(d,n),!jx()){let{name:p,type:y,value:v}=n;if(y==="image"){let w=p?`${p}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else p&&l.append(p,v)}}else{if(fp(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=lm,r=null,a=um,u=n}return l&&a==="text/plain"&&(u=l,l=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:l,body:u}}function kv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function $x(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Qx(n,e,t){let r=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let u=await $x(l,t);return u.links?u.links():[]}return[]}));return Jx(r.flat(1).filter(Kx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Gb(n,e,t,r,a,l){let u=(m,p)=>t[p]?m.route.id!==t[p].route.id:!0,d=(m,p)=>{var y;return t[p].pathname!==m.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,p)=>u(m,p)||d(m,p)):l==="data"?e.filter((m,p)=>{var v;let y=r.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Yx(n,e,{includeHydrateFallback:t}={}){return Wx(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Wx(n){return[...new Set(n)]}function Xx(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function Jx(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let l=JSON.stringify(Xx(a));return t.has(l)||(t.add(l),r.push({key:l,link:a})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zx=new Set([100,101,204,205]);function eO(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function SS(){let n=W.useContext(Du);return kv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function tO(){let n=W.useContext(hp);return kv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Mv=W.createContext(void 0);Mv.displayName="FrameworkContext";function RS(){let n=W.useContext(Mv);return kv(n,"You must render this element inside a <HydratedRouter> element"),n}function nO(n,e){let t=W.useContext(Mv),[r,a]=W.useState(!1),[l,u]=W.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=e,w=W.useRef(null);W.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let M=j=>{j.forEach(Y=>{u(Y.isIntersecting)})},U=new IntersectionObserver(M,{threshold:.5});return w.current&&U.observe(w.current),()=>{U.disconnect()}}},[n]),W.useEffect(()=>{if(r){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[r]);let S=()=>{a(!0)},P=()=>{a(!1),u(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Jc(d,S),onBlur:Jc(m,P),onMouseEnter:Jc(p,S),onMouseLeave:Jc(y,P),onTouchStart:Jc(v,S)}]:[!1,w,{}]}function Jc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function rO({page:n,...e}){let{router:t}=SS(),r=W.useMemo(()=>pS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?W.createElement(sO,{page:n,matches:r,...e}):null}function iO(n){let{manifest:e,routeModules:t}=RS(),[r,a]=W.useState([]);return W.useEffect(()=>{let l=!1;return Qx(n,e,t).then(u=>{l||a(u)}),()=>{l=!0}},[n,e,t]),r}function sO({page:n,matches:e,...t}){let r=ko(),{manifest:a,routeModules:l}=RS(),{basename:u}=SS(),{loaderData:d,matches:m}=tO(),p=W.useMemo(()=>Gb(n,e,m,a,r,"data"),[n,e,m,a,r]),y=W.useMemo(()=>Gb(n,e,m,a,r,"assets"),[n,e,m,a,r]),v=W.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,M=!1;if(e.forEach(j=>{var G;let Y=a.routes[j.route.id];!Y||!Y.hasLoader||(!p.some(ae=>ae.route.id===j.route.id)&&j.route.id in d&&((G=l[j.route.id])!=null&&G.shouldRevalidate)||Y.hasClientLoader?M=!0:P.add(j.route.id))}),P.size===0)return[];let U=eO(n,u);return M&&P.size>0&&U.searchParams.set("_routes",e.filter(j=>P.has(j.route.id)).map(j=>j.route.id).join(",")),[U.pathname+U.search]},[u,d,r,a,p,e,n,l]),w=W.useMemo(()=>Yx(y,a),[y,a]),S=iO(y);return W.createElement(W.Fragment,null,v.map(P=>W.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>W.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),S.map(({key:P,link:M})=>W.createElement("link",{key:P,...M})))}function aO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var CS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{CS&&(window.__reactRouterVersion="7.6.0")}catch{}function oO({basename:n,children:e,window:t}){let r=W.useRef();r.current==null&&(r.current=KN({window:t,v5Compat:!0}));let a=r.current,[l,u]=W.useState({action:a.action,location:a.location}),d=W.useCallback(m=>{W.startTransition(()=>u(m))},[u]);return W.useLayoutEffect(()=>a.listen(d),[a,d]),W.createElement(Mx,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PS=W.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:l,replace:u,state:d,target:m,to:p,preventScrollReset:y,viewTransition:v,...w},S){let{basename:P}=W.useContext(pi),M=typeof p=="string"&&DS.test(p),U,j=!1;if(typeof p=="string"&&M&&(U=p,CS))try{let A=new URL(window.location.href),N=p.startsWith("//")?new URL(A.protocol+p):new URL(p),k=Qi(N.pathname,P);N.origin===A.origin&&k!=null?p=k+N.search+N.hash:j=!0}catch{ui(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=Ex(p,{relative:a}),[G,ae,ie]=nO(r,w),le=hO(p,{replace:u,state:d,target:m,preventScrollReset:y,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=W.createElement("a",{...w,...ie,href:U||Y,onClick:j||l?e:D,ref:aO(S,ae),target:m,"data-discover":!M&&t==="render"?"true":void 0});return G&&!M?W.createElement(W.Fragment,null,R,W.createElement(rO,{page:Y})):R});PS.displayName="Link";var lO=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:l,to:u,viewTransition:d,children:m,...p},y){let v=sd(u,{relative:p.relative}),w=ko(),S=W.useContext(hp),{navigator:P,basename:M}=W.useContext(pi),U=S!=null&&gO(v)&&d===!0,j=P.encodeLocation?P.encodeLocation(v).pathname:v.pathname,Y=w.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),G=G?G.toLowerCase():null,j=j.toLowerCase()),G&&M&&(G=Qi(G,M)||G);const ae=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let ie=Y===j||!a&&Y.startsWith(j)&&Y.charAt(ae)==="/",le=G!=null&&(G===j||!a&&G.startsWith(j)&&G.charAt(j.length)==="/"),D={isActive:ie,isPending:le,isTransitioning:U},R=ie?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ie?"active":null,le?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(D):l;return W.createElement(PS,{...p,"aria-current":R,className:A,ref:y,style:N,to:u,viewTransition:d},typeof m=="function"?m(D):m)});lO.displayName="NavLink";var uO=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:l,method:u=lm,action:d,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:v,...w},S)=>{let P=mO(),M=pO(d,{relative:p}),U=u.toLowerCase()==="get"?"get":"post",j=typeof d=="string"&&DS.test(d),Y=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let ae=G.nativeEvent.submitter,ie=(ae==null?void 0:ae.getAttribute("formmethod"))||u;P(ae||G.currentTarget,{fetcherKey:e,method:ie,navigate:t,replace:a,state:l,relative:p,preventScrollReset:y,viewTransition:v})};return W.createElement("form",{ref:S,method:U,action:M,onSubmit:r?m:Y,...w,"data-discover":!j&&n==="render"?"true":void 0})});uO.displayName="Form";function cO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NS(n){let e=W.useContext(Du);return Et(e,cO(n)),e}function hO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:u}={}){let d=dp(),m=ko(),p=sd(n,{relative:l});return W.useCallback(y=>{if(qx(y,e)){y.preventDefault();let v=t!==void 0?t:Nh(m)===Nh(p);d(n,{replace:v,state:r,preventScrollReset:a,relative:l,viewTransition:u})}},[m,d,p,t,r,e,n,a,l,u])}var dO=0,fO=()=>`__${String(++dO)}__`;function mO(){let{router:n}=NS("useSubmit"),{basename:e}=W.useContext(pi),t=xx();return W.useCallback(async(r,a={})=>{let{action:l,method:u,encType:d,formData:m,body:p}=Gx(r,e);if(a.navigate===!1){let y=a.fetcherKey||fO();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function pO(n,{relative:e}={}){let{basename:t}=W.useContext(pi),r=W.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...sd(n||".",{relative:e})},u=ko();if(n==null){l.search=u.search;let d=new URLSearchParams(l.search),m=d.getAll("index");if(m.some(y=>y==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$i([t,l.pathname])),Nh(l)}function gO(n,e={}){let t=W.useContext(TS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=NS("useViewTransitionState"),a=sd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Nm(a.pathname,u)!=null||Nm(a.pathname,l)!=null}[...Zx];var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Fn.apply(this,arguments)};function Lv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function xm(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,l;r<a;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return n.concat(l||Array.prototype.slice.call(e))}var ct="-ms-",gh="-moz-",Ze="-webkit-",xS="comm",mp="rule",Uv="decl",_O="@import",OS="@keyframes",yO="@layer",VS=Math.abs,Bv=String.fromCharCode,Ly=Object.assign;function vO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function kS(n){return n.trim()}function ji(n,e){return(n=e.exec(n))?n[0]:n}function Oe(n,e,t){return n.replace(e,t)}function cm(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function eu(n,e,t){return n.slice(e,t)}function Jr(n){return n.length}function MS(n){return n.length}function lh(n,e){return e.push(n),n}function EO(n,e){return n.map(e).join("")}function $b(n,e){return n.filter(function(t){return!ji(t,e)})}var pp=1,tu=1,LS=0,wr=0,Ht=0,Pu="";function gp(n,e,t,r,a,l,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:l,line:pp,column:tu,length:u,return:"",siblings:d}}function Qs(n,e){return Ly(gp("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function xl(n){for(;n.root;)n=Qs(n.root,{children:[n]});lh(n,n.siblings)}function TO(){return Ht}function wO(){return Ht=wr>0?un(Pu,--wr):0,tu--,Ht===10&&(tu=1,pp--),Ht}function xr(){return Ht=wr<LS?un(Pu,wr++):0,tu++,Ht===10&&(tu=1,pp++),Ht}function _o(){return un(Pu,wr)}function hm(){return wr}function _p(n,e){return eu(Pu,n,e)}function Uy(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bO(n){return pp=tu=1,LS=Jr(Pu=n),wr=0,[]}function IO(n){return Pu="",n}function dy(n){return kS(_p(wr-1,By(n===91?n+2:n===40?n+1:n)))}function AO(n){for(;(Ht=_o())&&Ht<33;)xr();return Uy(n)>2||Uy(Ht)>3?"":" "}function SO(n,e){for(;--e&&xr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return _p(n,hm()+(e<6&&_o()==32&&xr()==32))}function By(n){for(;xr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&By(Ht);break;case 40:n===41&&By(n);break;case 92:xr();break}return wr}function RO(n,e){for(;xr()&&n+Ht!==57;)if(n+Ht===84&&_o()===47)break;return"/*"+_p(e,wr-1)+"*"+Bv(n===47?n:xr())}function CO(n){for(;!Uy(_o());)xr();return _p(n,wr)}function DO(n){return IO(dm("",null,null,null,[""],n=bO(n),0,[0],n))}function dm(n,e,t,r,a,l,u,d,m){for(var p=0,y=0,v=u,w=0,S=0,P=0,M=1,U=1,j=1,Y=0,G="",ae=a,ie=l,le=r,D=G;U;)switch(P=Y,Y=xr()){case 40:if(P!=108&&un(D,v-1)==58){cm(D+=Oe(dy(Y),"&","&\f"),"&\f",VS(p?d[p-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:D+=dy(Y);break;case 9:case 10:case 13:case 32:D+=AO(P);break;case 92:D+=SO(hm()-1,7);continue;case 47:switch(_o()){case 42:case 47:lh(PO(RO(xr(),hm()),e,t,m),m);break;default:D+="/"}break;case 123*M:d[p++]=Jr(D)*j;case 125*M:case 59:case 0:switch(Y){case 0:case 125:U=0;case 59+y:j==-1&&(D=Oe(D,/\f/g,"")),S>0&&Jr(D)-v&&lh(S>32?Qb(D+";",r,t,v-1,m):Qb(Oe(D," ","")+";",r,t,v-2,m),m);break;case 59:D+=";";default:if(lh(le=Kb(D,e,t,p,y,a,d,G,ae=[],ie=[],v,l),l),Y===123)if(y===0)dm(D,e,le,le,ae,l,v,d,ie);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:dm(n,le,le,r&&lh(Kb(n,le,le,0,0,a,d,G,a,ae=[],v,ie),ie),a,ie,v,d,r?ae:ie);break;default:dm(D,le,le,le,[""],ie,0,d,ie)}}p=y=S=0,M=j=1,G=D="",v=u;break;case 58:v=1+Jr(D),S=P;default:if(M<1){if(Y==123)--M;else if(Y==125&&M++==0&&wO()==125)continue}switch(D+=Bv(Y),Y*M){case 38:j=y>0?1:(D+="\f",-1);break;case 44:d[p++]=(Jr(D)-1)*j,j=1;break;case 64:_o()===45&&(D+=dy(xr())),w=_o(),y=v=Jr(G=D+=CO(hm())),Y++;break;case 45:P===45&&Jr(D)==2&&(M=0)}}return l}function Kb(n,e,t,r,a,l,u,d,m,p,y,v){for(var w=a-1,S=a===0?l:[""],P=MS(S),M=0,U=0,j=0;M<r;++M)for(var Y=0,G=eu(n,w+1,w=VS(U=u[M])),ae=n;Y<P;++Y)(ae=kS(U>0?S[Y]+" "+G:Oe(G,/&\f/g,S[Y])))&&(m[j++]=ae);return gp(n,e,t,a===0?mp:d,m,p,y,v)}function PO(n,e,t,r){return gp(n,e,t,xS,Bv(TO()),eu(n,2,-2),0,r)}function Qb(n,e,t,r,a){return gp(n,e,t,Uv,eu(n,0,r),eu(n,r+1,-1),r,a)}function US(n,e,t){switch(vO(n,e)){case 5103:return Ze+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+n+gh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return Ze+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ze+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ze+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ze+n+ct+n+n;case 6165:return Ze+n+ct+"flex-"+n+n;case 5187:return Ze+n+Oe(n,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return Ze+n+ct+"flex-item-"+Oe(n,/flex-|-self/g,"")+(ji(n,/flex-|baseline/)?"":ct+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return Ze+n+ct+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ze+n+ct+Oe(n,"shrink","negative")+n;case 5292:return Ze+n+ct+Oe(n,"basis","preferred-size")+n;case 6060:return Ze+"box-"+Oe(n,"-grow","")+Ze+n+ct+Oe(n,"grow","positive")+n;case 4554:return Ze+Oe(n,/([^-])(transform)/g,"$1"+Ze+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+n+n;case 4200:if(!ji(n,/flex-|baseline/))return ct+"grid-column-align"+eu(n,e)+n;break;case 2592:case 3360:return ct+Oe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,ji(r.props,/grid-\w+-end/)})?~cm(n+(t=t[e].value),"span",0)?n:ct+Oe(n,"-start","")+n+ct+"grid-row-span:"+(~cm(t,"span",0)?ji(t,/\d+/):+ji(t,/\d+/)-+ji(n,/\d+/))+";":ct+Oe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return ji(r.props,/grid-\w+-start/)})?n:ct+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,Ze+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+gh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~cm(n,"stretch",0)?US(Oe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,l,u,d,m,p){return ct+a+":"+l+p+(u?ct+a+"-span:"+(d?m:+m-+l)+p:"")+n});case 4949:if(un(n,e+6)===121)return Oe(n,":",":"+Ze)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(un(n,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+ct+"$2box$3")+n;case 100:return Oe(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function Om(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function NO(n,e,t,r){switch(n.type){case yO:if(n.children.length)break;case _O:case Uv:return n.return=n.return||n.value;case xS:return"";case OS:return n.return=n.value+"{"+Om(n.children,r)+"}";case mp:if(!Jr(n.value=n.props.join(",")))return""}return Jr(t=Om(n.children,r))?n.return=n.value+"{"+t+"}":""}function xO(n){var e=MS(n);return function(t,r,a,l){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,l)||"";return u}}function OO(n){return function(e){e.root||(e=e.return)&&n(e)}}function VO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Uv:n.return=US(n.value,n.length,t);return;case OS:return Om([Qs(n,{value:Oe(n.value,"@","@"+Ze)})],r);case mp:if(n.length)return EO(t=n.props,function(a){switch(ji(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xl(Qs(n,{props:[Oe(a,/:(read-\w+)/,":"+gh+"$1")]})),xl(Qs(n,{props:[a]})),Ly(n,{props:$b(t,r)});break;case"::placeholder":xl(Qs(n,{props:[Oe(a,/:(plac\w+)/,":"+Ze+"input-$1")]})),xl(Qs(n,{props:[Oe(a,/:(plac\w+)/,":"+gh+"$1")]})),xl(Qs(n,{props:[Oe(a,/:(plac\w+)/,ct+"input-$1")]})),xl(Qs(n,{props:[a]})),Ly(n,{props:$b(t,r)});break}return""})}}var kO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn={},nu=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",BS="active",zS="data-styled-version",yp="6.1.18",zv=`/*!sc*/
`,Vm=typeof window<"u"&&typeof document<"u",MO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==""?Jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.SC_DISABLE_SPEEDY!==void 0&&Jn.SC_DISABLE_SPEEDY!==""&&Jn.SC_DISABLE_SPEEDY!=="false"&&Jn.SC_DISABLE_SPEEDY),vp=Object.freeze([]),ru=Object.freeze({});function LO(n,e,t){return t===void 0&&(t=ru),n.theme!==t.theme&&n.theme||e||t.theme}var FS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),UO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BO=/(^-|-$)/g;function Yb(n){return n.replace(UO,"-").replace(BO,"")}var zO=/(a)(d)/gi,Xf=52,Wb=function(n){return String.fromCharCode(n+(n>25?39:97))};function zy(n){var e,t="";for(e=Math.abs(n);e>Xf;e=e/Xf|0)t=Wb(e%Xf)+t;return(Wb(e%Xf)+t).replace(zO,"$1-$2")}var fy,qS=5381,Gl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},jS=function(n){return Gl(qS,n)};function FO(n){return zy(jS(n)>>>0)}function qO(n){return n.displayName||n.name||"Component"}function my(n){return typeof n=="string"&&!0}var HS=typeof Symbol=="function"&&Symbol.for,GS=HS?Symbol.for("react.memo"):60115,jO=HS?Symbol.for("react.forward_ref"):60112,HO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$S={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$O=((fy={})[jO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fy[GS]=$S,fy);function Xb(n){return("type"in(e=n)&&e.type.$$typeof)===GS?$S:"$$typeof"in n?$O[n.$$typeof]:HO;var e}var KO=Object.defineProperty,QO=Object.getOwnPropertyNames,Jb=Object.getOwnPropertySymbols,YO=Object.getOwnPropertyDescriptor,WO=Object.getPrototypeOf,Zb=Object.prototype;function KS(n,e,t){if(typeof e!="string"){if(Zb){var r=WO(e);r&&r!==Zb&&KS(n,r,t)}var a=QO(e);Jb&&(a=a.concat(Jb(e)));for(var l=Xb(n),u=Xb(e),d=0;d<a.length;++d){var m=a[d];if(!(m in GO||t&&t[m]||u&&m in u||l&&m in l)){var p=YO(e,m);try{KO(n,m,p)}catch{}}}}return n}function iu(n){return typeof n=="function"}function Fv(n){return typeof n=="object"&&"styledComponentId"in n}function ho(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function eI(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function xh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Fy(n,e,t){if(t===void 0&&(t=!1),!t&&!xh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Fy(n[r],e[r]);else if(xh(e))for(var r in e)n[r]=Fy(n[r],e[r]);return n}function qv(n,e){Object.defineProperty(n,"toString",{value:e})}function ad(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var XO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,l=a;e>=l;)if((l<<=1)<0)throw ad(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=a;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),m=(u=0,t.length);u<m;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var l=r;l<a;l++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),l=a+r,u=a;u<l;u++)t+="".concat(this.tag.getRule(u)).concat(zv);return t},n}(),fm=new Map,km=new Map,mm=1,Jf=function(n){if(fm.has(n))return fm.get(n);for(;km.has(mm);)mm++;var e=mm++;return fm.set(n,e),km.set(e,n),e},JO=function(n,e){mm=e+1,fm.set(n,e),km.set(e,n)},ZO="style[".concat(nu,"][").concat(zS,'="').concat(yp,'"]'),eV=new RegExp("^".concat(nu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tV=function(n,e,t){for(var r,a=t.split(","),l=0,u=a.length;l<u;l++)(r=a[l])&&n.registerName(e,r)},nV=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(zv),a=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var m=d.match(eV);if(m){var p=0|parseInt(m[1],10),y=m[2];p!==0&&(JO(y,p),tV(n,y,m[3]),n.getTag().insertRules(p,a)),a.length=0}else a.push(d)}}},tI=function(n){for(var e=document.querySelectorAll(ZO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(nu)!==BS&&(nV(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function rV(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var QS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var m=Array.from(d.querySelectorAll("style[".concat(nu,"]")));return m[m.length-1]}(t),l=a!==void 0?a.nextSibling:null;r.setAttribute(nu,BS),r.setAttribute(zS,yp);var u=rV();return u&&r.setAttribute("nonce",u),t.insertBefore(r,l),r},iV=function(){function n(e){this.element=QS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,l=r.length;a<l;a++){var u=r[a];if(u.ownerNode===t)return u}throw ad(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),sV=function(){function n(e){this.element=QS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),aV=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),nI=Vm,oV={isServer:!Vm,useCSSOMInjection:!MO},YS=function(){function n(e,t,r){e===void 0&&(e=ru),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},oV),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Vm&&nI&&(nI=!1,tI(this)),qv(this,function(){return function(l){for(var u=l.getTag(),d=u.length,m="",p=function(v){var w=function(j){return km.get(j)}(v);if(w===void 0)return"continue";var S=l.names.get(w),P=u.getGroup(v);if(S===void 0||!S.size||P.length===0)return"continue";var M="".concat(nu,".g").concat(v,'[id="').concat(w,'"]'),U="";S!==void 0&&S.forEach(function(j){j.length>0&&(U+="".concat(j,","))}),m+="".concat(P).concat(M,'{content:"').concat(U,'"}').concat(zv)},y=0;y<d;y++)p(y);return m}(a)})}return n.registerId=function(e){return Jf(e)},n.prototype.rehydrate=function(){!this.server&&Vm&&tI(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new aV(a):r?new iV(a):new sV(a)}(this.options),new XO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Jf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Jf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Jf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),lV=/&/g,uV=/^\s*\/\/.*$/gm;function WS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=WS(t.children,e)),t})}function cV(n){var e,t,r,a=ru,l=a.options,u=l===void 0?ru:l,d=a.plugins,m=d===void 0?vp:d,p=function(w,S,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):w},y=m.slice();y.push(function(w){w.type===mp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(lV,t).replace(r,p))}),u.prefix&&y.push(VO),y.push(NO);var v=function(w,S,P,M){S===void 0&&(S=""),P===void 0&&(P=""),M===void 0&&(M="&"),e=M,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var U=w.replace(uV,""),j=DO(P||S?"".concat(P," ").concat(S," { ").concat(U," }"):U);u.namespace&&(j=WS(j,u.namespace));var Y=[];return Om(j,xO(y.concat(OO(function(G){return Y.push(G)})))),Y};return v.hash=m.length?m.reduce(function(w,S){return S.name||ad(15),Gl(w,S.name)},qS).toString():"",v}var hV=new YS,qy=cV(),XS=Ph.createContext({shouldForwardProp:void 0,styleSheet:hV,stylis:qy});XS.Consumer;Ph.createContext(void 0);function rI(){return W.useContext(XS)}var dV=function(){function n(e,t){var r=this;this.inject=function(a,l){l===void 0&&(l=qy);var u=r.name+l.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qv(this,function(){throw ad(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=qy),this.name+e.hash},n}(),fV=function(n){return n>="A"&&n<="Z"};function iI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;fV(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var JS=function(n){return n==null||n===!1||n===""},ZS=function(n){var e,t,r=[];for(var a in n){var l=n[a];n.hasOwnProperty(a)&&!JS(l)&&(Array.isArray(l)&&l.isCss||iu(l)?r.push("".concat(iI(a),":"),l,";"):xh(l)?r.push.apply(r,xm(xm(["".concat(a," {")],ZS(l),!1),["}"],!1)):r.push("".concat(iI(a),": ").concat((e=a,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in kO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function yo(n,e,t,r){if(JS(n))return[];if(Fv(n))return[".".concat(n.styledComponentId)];if(iu(n)){if(!iu(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var a=n(e);return yo(a,e,t,r)}var l;return n instanceof dV?t?(n.inject(t,r),[n.getName(r)]):[n]:xh(n)?ZS(n):Array.isArray(n)?Array.prototype.concat.apply(vp,n.map(function(u){return yo(u,e,t,r)})):[n.toString()]}function mV(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(iu(t)&&!Fv(t))return!1}return!0}var pV=jS(yp),gV=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mV(e),this.componentId=t,this.baseHash=Gl(pV,t),this.baseStyle=r,YS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ho(a,this.staticRulesId);else{var l=eI(yo(this.rules,e,t,r)),u=zy(Gl(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=ho(a,u),this.staticRulesId=u}else{for(var m=Gl(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")p+=v;else if(v){var w=eI(yo(v,e,t,r));m=Gl(m,w+y),p+=w}}if(p){var S=zy(m>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(p,".".concat(S),void 0,this.componentId)),a=ho(a,S)}}return a},n}(),eR=Ph.createContext(void 0);eR.Consumer;var py={};function _V(n,e,t){var r=Fv(n),a=n,l=!my(n),u=e.attrs,d=u===void 0?vp:u,m=e.componentId,p=m===void 0?function(ae,ie){var le=typeof ae!="string"?"sc":Yb(ae);py[le]=(py[le]||0)+1;var D="".concat(le,"-").concat(FO(yp+le+py[le]));return ie?"".concat(ie,"-").concat(D):D}(e.displayName,e.parentComponentId):m,y=e.displayName,v=y===void 0?function(ae){return my(ae)?"styled.".concat(ae):"Styled(".concat(qO(ae),")")}(n):y,w=e.displayName&&e.componentId?"".concat(Yb(e.displayName),"-").concat(e.componentId):e.componentId||p,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(r&&a.shouldForwardProp){var M=a.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;P=function(ae,ie){return M(ae,ie)&&U(ae,ie)}}else P=M}var j=new gV(t,w,r?a.componentStyle:void 0);function Y(ae,ie){return function(le,D,R){var A=le.attrs,N=le.componentStyle,k=le.defaultProps,z=le.foldedComponentIds,x=le.styledComponentId,xt=le.target,It=Ph.useContext(eR),he=rI(),be=le.shouldForwardProp||he.shouldForwardProp,Te=LO(D,It,k)||ru,xe=function(Ce,Re,ut){for(var ke,Xe=Fn(Fn({},Re),{className:void 0,theme:ut}),$e=0;$e<Ce.length;$e+=1){var Ut=iu(ke=Ce[$e])?ke(Xe):ke;for(var Zt in Ut)Xe[Zt]=Zt==="className"?ho(Xe[Zt],Ut[Zt]):Zt==="style"?Fn(Fn({},Xe[Zt]),Ut[Zt]):Ut[Zt]}return Re.className&&(Xe.className=ho(Xe.className,Re.className)),Xe}(A,D,Te),O=xe.as||xt,se={};for(var ge in xe)xe[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&xe.theme===Te||(ge==="forwardedAs"?se.as=xe.forwardedAs:be&&!be(ge,O)||(se[ge]=xe[ge]));var me=function(Ce,Re){var ut=rI(),ke=Ce.generateAndInjectStyles(Re,ut.styleSheet,ut.stylis);return ke}(N,xe),fe=ho(z,x);return me&&(fe+=" "+me),xe.className&&(fe+=" "+xe.className),se[my(O)&&!FS.has(O)?"class":"className"]=fe,R&&(se.ref=R),W.createElement(O,se)}(G,ae,ie)}Y.displayName=v;var G=Ph.forwardRef(Y);return G.attrs=S,G.componentStyle=j,G.displayName=v,G.shouldForwardProp=P,G.foldedComponentIds=r?ho(a.foldedComponentIds,a.styledComponentId):"",G.styledComponentId=w,G.target=r?a.target:n,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=r?function(ie){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)Fy(ie,A[R],!0);return ie}({},a.defaultProps,ae):ae}}),qv(G,function(){return".".concat(G.styledComponentId)}),l&&KS(G,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function sI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var aI=function(n){return Object.assign(n,{isCss:!0})};function yV(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(iu(n)||xh(n))return aI(yo(sI(vp,xm([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?yo(r):aI(yo(sI(r,e)))}function jy(n,e,t){if(t===void 0&&(t=ru),!e)throw ad(1,e);var r=function(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return n(e,t,yV.apply(void 0,xm([a],l,!1)))};return r.attrs=function(a){return jy(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return jy(n,e,Fn(Fn({},t),a))},r}var tR=function(n){return jy(_V,n)},lt=tR;FS.forEach(function(n){lt[n]=tR(n)});const Kl=lt.button`
    padding-left:32px;
    padding-right:32px;
    height:48px;
    background-color: #323232;
    color:white;
    font-size:20px;
    font-weight:100;
    border:none;
    border-radius:27px;
    cursor:pointer;
    margin-top:24px;
    &:hover{
        background-color: #474747;
    }
`,vV=lt(Kl)`
    padding-left:24px;
    padding-right:24px;
    height:70px;
    font-size:20px;
`,EV=lt(Kl)`
    height:48px;
    background-color:#9A9A9A;
    &:hover{
        background-color:#D2D2D2;
    }
`,TV=lt(Kl)`
    padding-left:16px;
    padding-right:16px;
    margin-right:16px;
    background-color:#ffffff;
    color:#323232;
    height:32px;
    font-size:16px;
    border: 1px solid #323232;
    &:hover{
        background-color:#D2D2D2;
    }
`;function vo(n){let e;return n.type=="outline"&&(e=n.color=="white"?Z.jsxs(TV,{onClick:n.onClick,children:[n.text,n.icon]}):Z.jsxs(Kl,{onClick:n.onClick,children:[n.text,n.icon]})),n.type==null&&(e=n.borderRadius=="16px"?Z.jsxs(vV,{onClick:n.onClick,children:[n.text,n.icon]}):Z.jsxs(Kl,{onClick:n.onClick,children:[n.text,n.icon]})),n.type=="solid"&&(e=n.color=="grey"?Z.jsxs(EV,{onClick:n.onClick,children:[n.text,n.icon]}):Z.jsxs(Kl,{onClick:n.onClick,children:[n.text,n.icon]})),e}const wV=lt.div`
    background-color: white;
    display: block;
    padding:52px;
    margin-bottom:32px;
    width:986px;
    border-radius:16px;
`,nR=lt.div`
    font-weight:200;
    font-size:16px;
`,bV=lt(nR)`
    display:inline-block;
    font-weight:600;
    margin-right:16px;
`;function IV(n){const{post:e,onClick:t}=n;return Z.jsx(wV,{onClick:t,children:Z.jsxs(nR,{children:[" ",Z.jsx(bV,{children:e.date}),e.title]})})}const AV=lt.div`
    `;function SV(n){const{posts:e,itemClicked:t}=n,r=e.map((a,l)=>Z.jsx(IV,{post:a,onClick:u=>{t(a)}},a.id));return Z.jsx(AV,{children:r})}const RV=lt.div`
    background-color: #323232;
    width:280px;
    height:150vh;
`,CV=lt.div`
    position:fixed;
    margin-left:52px;
`,rR=lt.div`
`,pm=lt.a`
    display:block;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 100;
    font-size: 20px;
    color:white;
    padding-bottom: 32px;
    text-align: center;
    text-decoration:none;
`,DV=lt(pm)`
    font-size:16px;
    color:#9A9A9A
`,PV=lt(rR)`
    color:#9A9A9A;
    margin-top:280px;
`,NV=lt.div`
    padding-top:56px;
    padding-bottom:64px;
    item-align:center;
`;function jv(n){return Z.jsx("div",{children:Z.jsx(RV,{children:Z.jsxs(CV,{children:[Z.jsx(NV,{children:Z.jsx("img",{src:"/parkyein0413.github.io//profile.jpg"})}),Z.jsxs(rR,{children:[Z.jsx(pm,{children:"POST"}),Z.jsx(pm,{children:"CALENDER"}),Z.jsx(pm,{children:"NEIGHBOR"})]}),Z.jsx(PV,{children:Z.jsx(DV,{children:"SETTING"})})]})})})}const xV=lt.div`
  overflow-y: scroll;
  width:1090px;
  height:${n=>n.height}px;
  margin-top: ${n=>n.marginTop}px;
`;function iR(n){const{marginTop:e,height:t,children:r}=n;return Z.jsx(xV,{marginTop:e||0,height:t||480,children:r})}const OV=lt.div`
  display:flex;
  justify-content: space-between;
  width:1090px;
  align-items: center;
  margin-top: ${n=>n.marginTop}px;
  margin-bottom: ${n=>n.marginBottom}px;
`;function Mm(n){const{marginTop:e,marginBottom:t,children:r}=n;return Z.jsx(OV,{marginTop:e||0,marginBottom:t||0,children:r})}const VV=()=>{};var oI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},kV=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],m=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},aR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,m=a+2<n.length,p=m?n[a+2]:0,y=l>>2,v=(l&3)<<4|d>>4;let w=(d&15)<<2|p>>6,S=p&63;m||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kV(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const p=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||p==null||v==null)throw new MV;const w=l<<2|d>>4;if(r.push(w),p!==64){const S=d<<4&240|p>>2;if(r.push(S),v!==64){const P=p<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LV=function(n){const e=sR(n);return aR.encodeByteArray(e,!0)},Lm=function(n){return LV(n).replace(/\./g,"")},Hv=function(n){try{return aR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Um(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!UV(t)||(n[t]=Um(n[t],e[t]));return n}function UV(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV=()=>Gv().__FIREBASE_DEFAULTS__,zV=()=>{if(typeof process>"u"||typeof oI>"u")return;const n=oI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},FV=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hv(n[1]);return e&&JSON.parse(e)},$v=()=>{try{return VV()||BV()||zV()||FV()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oR=()=>{var n;return(n=$v())===null||n===void 0?void 0:n.config},qV=n=>{var e;return(e=$v())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lm(JSON.stringify(t)),Lm(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Kv(){var n;const e=(n=$v())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $V(){return typeof window<"u"||lR()}function lR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function KV(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hR(){return!Kv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function QV(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV="FirebaseError";class Vn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=YV,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?WV(l,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new Vn(a,d,r)}}function WV(n,e){return n.replace(XV,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const XV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function JV(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=n[a],u=e[a];if(uI(l)&&uI(u)){if(!ia(l,u))return!1}else if(l!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function uI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $l(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dR(n,e){const t=new ZV(n,e);return t.subscribe.bind(t)}class ZV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ek(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=gy),a.error===void 0&&(a.error=gy),a.complete===void 0&&(a.complete=gy);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ek(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gy(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){return n.endsWith(".cloudworkstations.dev")}async function fR(n){return(await fetch(n,{credentials:"include"})).ok}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jV;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rk(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const u=this.instances.get(a);return u&&e(u,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nk(n){return n===ro?void 0:n}function rk(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=[];var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const pR={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},ik=Ue.INFO,sk={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},ak=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=sk[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tp{constructor(e){this.name=e,this._logLevel=ik,this._logHandler=ak,this._userLogHandler=null,Yv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}function ok(n){Yv.forEach(e=>{e.setLogLevel(n)})}function lk(n,e){for(const t of Yv){let r=null;e&&e.level&&(r=pR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,l,...u)=>{const d=u.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");l>=(r??a.logLevel)&&n({level:Ue[l].toLowerCase(),message:d,args:u,type:a.name})}}}const uk=(n,e)=>e.some(t=>n instanceof t);let cI,hI;function ck(){return cI||(cI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hk(){return hI||(hI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gR=new WeakMap,Hy=new WeakMap,_R=new WeakMap,_y=new WeakMap,Wv=new WeakMap;function dk(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Zs(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&gR.set(t,n)}).catch(()=>{}),Wv.set(e,n),e}function fk(n){if(Hy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Hy.set(n,e)}let Gy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_R.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mk(n){Gy=n(Gy)}function pk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yy(this),e,...t);return _R.set(r,e.sort?e.sort():[e]),Zs(r)}:hk().includes(n)?function(...e){return n.apply(yy(this),e),Zs(gR.get(this))}:function(...e){return Zs(n.apply(yy(this),e))}}function gk(n){return typeof n=="function"?pk(n):(n instanceof IDBTransaction&&fk(n),uk(n,ck())?new Proxy(n,Gy):n)}function Zs(n){if(n instanceof IDBRequest)return dk(n);if(_y.has(n))return _y.get(n);const e=gk(n);return e!==n&&(_y.set(n,e),Wv.set(e,n)),e}const yy=n=>Wv.get(n);function _k(n,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Zs(u);return r&&u.addEventListener("upgradeneeded",m=>{r(Zs(u.result),m.oldVersion,m.newVersion,Zs(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),d}const yk=["get","getKey","getAll","getAllKeys","count"],vk=["put","add","delete","clear"],vy=new Map;function dI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vy.get(e))return vy.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=vk.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||yk.includes(t)))return;const l=async function(u,...d){const m=this.transaction(u,a?"readwrite":"readonly");let p=m.store;return r&&(p=p.index(d.shift())),(await Promise.all([p[t](...d),a&&m.done]))[0]};return vy.set(e,l),l}mk(n=>({...n,get:(e,t,r)=>dI(e,t)||n.get(e,t,r),has:(e,t)=>!!dI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bm="@firebase/app",$y="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Tp("@firebase/app"),wk="@firebase/app-compat",bk="@firebase/analytics-compat",Ik="@firebase/analytics",Ak="@firebase/app-check-compat",Sk="@firebase/app-check",Rk="@firebase/auth",Ck="@firebase/auth-compat",Dk="@firebase/database",Pk="@firebase/data-connect",Nk="@firebase/database-compat",xk="@firebase/functions",Ok="@firebase/functions-compat",Vk="@firebase/installations",kk="@firebase/installations-compat",Mk="@firebase/messaging",Lk="@firebase/messaging-compat",Uk="@firebase/performance",Bk="@firebase/performance-compat",zk="@firebase/remote-config",Fk="@firebase/remote-config-compat",qk="@firebase/storage",jk="@firebase/storage-compat",Hk="@firebase/firestore",Gk="@firebase/vertexai",$k="@firebase/firestore-compat",Kk="firebase",Qk="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]",Yk={[Bm]:"fire-core",[wk]:"fire-core-compat",[Ik]:"fire-analytics",[bk]:"fire-analytics-compat",[Sk]:"fire-app-check",[Ak]:"fire-app-check-compat",[Rk]:"fire-auth",[Ck]:"fire-auth-compat",[Dk]:"fire-rtdb",[Pk]:"fire-data-connect",[Nk]:"fire-rtdb-compat",[xk]:"fire-fn",[Ok]:"fire-fn-compat",[Vk]:"fire-iid",[kk]:"fire-iid-compat",[Mk]:"fire-fcm",[Lk]:"fire-fcm-compat",[Uk]:"fire-perf",[Bk]:"fire-perf-compat",[zk]:"fire-rc",[Fk]:"fire-rc-compat",[qk]:"fire-gcs",[jk]:"fire-gcs-compat",[Hk]:"fire-fst",[$k]:"fire-fst-compat",[Gk]:"fire-vertex","fire-js":"fire-js",[Kk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,su=new Map,au=new Map;function Vh(n,e){try{n.container.addComponent(e)}catch(t){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yR(n,e){n.container.addOrOverwriteComponent(e)}function oa(n){const e=n.name;if(au.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,n);for(const t of aa.values())Vh(t,n);for(const t of su.values())Vh(t,n);return!0}function vR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wk(n,e,t=sa){vR(n,e).clearInstance(t)}function ER(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function Xk(){au.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Mo("app","Firebase",Jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n,e){const t=Hv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class Zk extends TR{constructor(e,t,r,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._serverConfig.authIdToken&&fI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&fI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Bm,$y,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Jv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=Qk;function Xv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=oR()),!t)throw Tr.create("no-options");const l=aa.get(a);if(l){if(ia(t,l.options)&&ia(r,l.config))return l;throw Tr.create("duplicate-app",{appName:a})}const u=new mR(a);for(const m of au.values())u.addComponent(m);const d=new TR(t,r,u);return aa.set(a,d),d}function eM(n,e){if($V()&&!lR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;ER(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=p=>[...p].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(r)),u=su.get(l);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new mR(l);for(const p of au.values())d.addComponent(p);const m=new Zk(t,e,l,d);return su.set(l,m),m}function tM(n=sa){const e=aa.get(n);if(!e&&n===sa&&oR())return Xv();if(!e)throw Tr.create("no-app",{appName:n});return e}function nM(){return Array.from(aa.values())}async function Jv(n){let e=!1;const t=n.name;aa.has(t)?(e=!0,aa.delete(t)):su.has(t)&&n.decRefCount()<=0&&(su.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=Yk[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(d.join(" "));return}oa(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function wR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");lk(n,e)}function bR(n){ok(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM="firebase-heartbeat-database",iM=1,kh="firebase-heartbeat-store";let Ey=null;function IR(){return Ey||(Ey=_k(rM,iM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),Ey}async function sM(n){try{const t=(await IR()).transaction(kh),r=await t.objectStore(kh).get(AR(n));return await t.done,r}catch(e){if(e instanceof Vn)Yi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(t.message)}}}async function mI(n,e){try{const r=(await IR()).transaction(kh,"readwrite");await r.objectStore(kh).put(e,AR(n)),await r.done}catch(t){if(t instanceof Vn)Yi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(r.message)}}}function AR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=1024,oM=30;class lM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=pI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>oM){const u=hM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pI(),{heartbeatsToSend:r,unsentEntries:a}=uM(this._heartbeatsCache.heartbeats),l=Lm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Yi.warn(t),""}}}function pI(){return new Date().toISOString().substring(0,10)}function uM(n,e=aM){const t=[];let r=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),gI(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),gI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?QV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return mI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return mI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function gI(n){return Lm(JSON.stringify({version:2,heartbeats:n})).length}function hM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(n){oa(new ci("platform-logger",e=>new Ek(e),"PRIVATE")),oa(new ci("heartbeat",e=>new lM(e),"PRIVATE")),Or(Bm,$y,n),Or(Bm,$y,"esm2017"),Or("fire-js","")}dM("");const fM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Vn,SDK_VERSION:_a,_DEFAULT_ENTRY_NAME:sa,_addComponent:Vh,_addOrOverwriteComponent:yR,_apps:aa,_clearComponents:Xk,_components:au,_getProvider:vR,_isFirebaseApp:ER,_isFirebaseServerApp:ft,_registerComponent:oa,_removeServiceInstance:Wk,_serverApps:su,deleteApp:Jv,getApp:tM,getApps:nM,initializeApp:Xv,initializeServerApp:eM,onLog:wR,registerVersion:Or,setLogLevel:bR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,t){this._delegate=e,this.firebase=t,Vh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Jv(this._delegate)))}_getService(e,t=sa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=sa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Vh(this._delegate,e)}_addOrOverwriteComponent(e){yR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},_I=new Mo("app-compat","Firebase",pM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(n){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Or,setLogLevel:bR,onLog:wR,apps:null,SDK_VERSION:_a,INTERNAL:{registerComponent:d,removeApp:r,useAsService:m,modularAPIs:fM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(p){delete e[p]}function a(p){if(p=p||sa,!lI(e,p))throw _I.create("no-app",{appName:p});return e[p]}a.App=n;function l(p,y={}){const v=Xv(p,y);if(lI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(p=>e[p])}function d(p){const y=p.name,v=y.replace("-compat","");if(oa(p)&&p.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw _I.create("invalid-app-argument",{appName:y});return S[v]()};p.serviceProps!==void 0&&Um(w,p.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,p.multipleInstances?S:[])}}return p.type==="PUBLIC"?t[v]:null}function m(p,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(){const n=gM(mM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:SR,extendNamespace:e,createSubscribe:dR,ErrorFactory:Mo,deepExtend:Um});function e(t){Um(n,t)}return n}const _M=SR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Tp("@firebase/app-compat"),yM="@firebase/app-compat",vM="0.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(n){Or(yM,vM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=Gv();if(n.firebase!==void 0){yI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&yI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const xu=_M;EM();var TM="firebase",wM="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xu.registerVersion(TM,wM,"app-compat");const Zc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ol={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function RR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IM=bM,AM=RR,CR=new Mo("auth","Firebase",RR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Tp("@firebase/auth");function SM(n,...e){zm.logLevel<=Ue.WARN&&zm.warn(`Auth (${_a}): ${n}`,...e)}function gm(n,...e){zm.logLevel<=Ue.ERROR&&zm.error(`Auth (${_a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw eE(n,...e)}function Xt(n,...e){return eE(n,...e)}function Zv(n,e,t){const r=Object.assign(Object.assign({},AM()),{[e]:t});return new Mo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Zv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Zv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eE(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return CR.create(n,...e)}function oe(n,e,...t){if(!n)throw eE(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gm(e),new Error(e)}function Vr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tE(){return vI()==="http:"||vI()==="https:"}function vI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tE()||uR()||"connection"in navigator)?navigator.onLine:!0}function CM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=GV()||Qv()}get(){return RM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n,e){Vr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NM=new od(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,a={}){return PR(n,a,async()=>{let l={},u={};r&&(e==="GET"?u=r:l={body:JSON.stringify(r)});const d=Nu(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},l);return KV()||(p.referrerPolicy="no-referrer"),n.emulatorConfig&&Ep(n.emulatorConfig.host)&&(p.credentials="include"),DR.fetch()(await NR(n,n.config.apiHost,t,d),p)})}async function PR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},DM),e);try{const a=new OM(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[m,p]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw ch(n,"user-disabled",u);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Zv(n,y,p);vn(n,y)}}catch(a){if(a instanceof Vn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const l=await Nt(n,e,t,r,a);return"mfaPendingCredential"in l&&vn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function NR(n,e,t,r){const a=`${e}${t}?${r}`,l=n,u=l.config.emulator?nE(n.config,a):`${n.config.apiScheme}://${a}`;return PM.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function xM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),NM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n){return n!==void 0&&n.getResponse!==void 0}function TI(n){return n!==void 0&&n.enterprise!==void 0}class xR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VM(n){return(await Nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function OR(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kM(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function MM(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function Fm(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LM(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),a=wp(r);oe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:_h(Ty(a.auth_time)),issuedAtTime:_h(Ty(a.iat)),expirationTime:_h(Ty(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ty(n){return Number(n)*1e3}function wp(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gm("JWT malformed, contained fewer than 3 sections"),null;try{const a=Hv(t);return a?JSON.parse(a):(gm("Failed to decode base64 JWT payload"),null)}catch(a){return gm("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function wI(n){const e=wp(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vn&&UM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function UM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_h(this.lastLoginAt),this.creationTime=_h(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Wi(n,Fm(t,{idToken:r}));oe(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?VR(l.providerUserInfo):[],d=FM(n.providerData,u),m=n.isAnonymous,p=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=m?p:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Ky(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function zM(n){const e=Ie(n);await Lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function VR(n){return n.map(e=>{var{providerId:t}=e,r=Lv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(n,e){const t=await PR(n,{},async()=>{const r=Nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await NR(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",DR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jM(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=wI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await qM(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,u=new Ql;return r&&(oe(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(oe(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(oe(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ql,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Lv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ky(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LM(this,e)}reload(){return zM(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Wi(this,kM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,u,d,m,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,j=(p=t.createdAt)!==null&&p!==void 0?p:void 0,Y=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:G,emailVerified:ae,isAnonymous:ie,providerData:le,stsTokenManager:D}=t;oe(G&&D,e,"internal-error");const R=Ql.fromJSON(this.name,D);oe(typeof G=="string",e,"internal-error"),js(v,e.name),js(w,e.name),oe(typeof ae=="boolean",e,"internal-error"),oe(typeof ie=="boolean",e,"internal-error"),js(S,e.name),js(P,e.name),js(M,e.name),js(U,e.name),js(j,e.name),js(Y,e.name);const A=new Nr({uid:G,auth:e,email:w,emailVerified:ae,displayName:v,isAnonymous:ie,photoURL:P,phoneNumber:S,tenantId:M,stsTokenManager:R,createdAt:j,lastLoginAt:Y});return le&&Array.isArray(le)&&(A.providerData=le.map(N=>Object.assign({},N))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ql;a.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Lh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?VR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Ql;d.updateFromIdToken(r);const m=new Nr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Ky(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,p),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new Map;function tr(n){Vr(n instanceof Function,"Expected a class definition");let e=bI.get(n);return e?(Vr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kR.type="NONE";const ou=kR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Yl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Eo(this.userKey,a.apiKey,l),this.fullPersistenceKey=Eo("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Fm(this.auth,{idToken:e}).catch(()=>{});return t?Nr._fromGetAccountInfoResponse(this.auth,t,e):null}return Nr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yl(tr(ou),e,r);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=a[0]||tr(ou);const u=Eo(r,e.config.apiKey,e.name);let d=null;for(const p of t)try{const y=await p._get(u);if(y){let v;if(typeof y=="string"){const w=await Fm(e,{idToken:y}).catch(()=>{});if(!w)break;v=await Nr._fromGetAccountInfoResponse(e,w,y)}else v=Nr._fromJSON(e,y);p!==l&&(d=v),l=p;break}}catch{}const m=a.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Yl(l,e,r):(l=m[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new Yl(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zR(e))return"Blackberry";if(FR(e))return"Webos";if(LR(e))return"Safari";if((e.includes("chrome/")||UR(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MR(n=wt()){return/firefox\//i.test(n)}function LR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UR(n=wt()){return/crios\//i.test(n)}function BR(n=wt()){return/iemobile/i.test(n)}function ld(n=wt()){return/android/i.test(n)}function zR(n=wt()){return/blackberry/i.test(n)}function FR(n=wt()){return/webos/i.test(n)}function ud(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function HM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function GM(n=wt()){var e;return ud(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $M(){return cR()&&document.documentMode===10}function qR(n=wt()){return ud(n)||ld(n)||FR(n)||zR(n)||/windows phone/i.test(n)||BR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e=[]){let t;switch(n){case"Browser":t=II(wt());break;case"Worker":t=`${II(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((u,d)=>{try{const m=e(l);u(m)}catch(m){d(m)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QM(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=6;class WM{constructor(e){var t,r,a,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:YM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,u,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new AI(this),this.idTokenSubscription=new AI(this),this.beforeStateQueue=new KM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Yl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fm(this,{idToken:e}),r=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===d)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ie(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QM(this),t=new WM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Yl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,a);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&SM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class AI{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JM(n){cd=n}function rE(n){return cd.loadJS(n)}function ZM(){return cd.recaptchaV2Script}function e2(){return cd.recaptchaEnterpriseScript}function t2(){return cd.gapiScript}function HR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=500,r2=6e4,Zf=1e12;class i2{constructor(e){this.auth=e,this.counter=Zf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new o2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Zf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Zf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Zf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class s2{constructor(){this.enterprise=new a2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class a2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class o2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;oe(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=l2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},r2)},n2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function l2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const u2="recaptcha-enterprise",yh="NO_RECAPTCHA";class GR{constructor(e){this.type=u2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{OR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const p=new xR(m);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(m=>{d(m)})})}function a(l,u,d){const m=window.grecaptcha;TI(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(p=>{u(p)}).catch(()=>{u(yh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new s2().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{r(this.auth).then(d=>{if(!t&&TI(window.grecaptcha))a(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=e2();m.length!==0&&(m+=d),rE(m).then(()=>{a(d,l,u)}).catch(p=>{u(p)})}}).catch(d=>{u(d)})})}}async function eh(n,e,t,r=!1,a=!1){const l=new GR(n);let u;if(a)u=yh;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,p=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ea(n,e,t,r,a){var l,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await eh(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await eh(n,e,t,t==="getOobCode");return r(n,m)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await eh(n,e,t);return r(n,d).catch(async m=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await eh(n,e,t,!1,!0);return r(n,y)}return Promise.reject(m)})}else{const d=await eh(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function c2(n){const e=bt(n),t=await OR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new xR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new GR(e).verify()}function h2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function d2(n,e,t){const r=bt(n);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=$R(e),{host:u,port:d}=f2(e),m=d===null?"":`:${d}`,p={url:`${l}//${u}${m}/`},y=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(ia(p,r.config.emulator)&&ia(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||m2(),Ep(u)&&fR(`${l}//${u}${m}`)}function $R(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function f2(n){const e=$R(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:SI(r.substr(l.length+1))}}else{const[l,u]=r.split(":");return{host:l,port:SI(u)}}}function SI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function m2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(n,e){return Nt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function p2(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function g2(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}async function _2(n,e){return Nt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function bp(n,e){return Nt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function v2(n,e){return bp(n,e)}async function E2(n,e){return bp(n,e)}async function T2(n,e){return bp(n,e)}async function w2(n,e){return bp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function I2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends Vu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Uh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Uh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",y2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return b2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,r,"signUpPassword",g2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return I2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="http://localhost";class hi extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Lv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:A2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(n,e){return Nt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function S2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function R2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const C2={USER_NOT_FOUND:"user-not-found"};async function D2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),C2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Vu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new To({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new To({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return S2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return R2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return D2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:l}=e;return!r&&!t&&!a&&!l?null:new To({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N2(n){const e=$l(uh(n)).link,t=e?$l(uh(e)).deep_link_id:null,r=$l(uh(n)).deep_link_id;return(r?$l(uh(r)).link:null)||r||t||e||n}class Ip{constructor(e){var t,r,a,l,u,d;const m=$l(uh(e)),p=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(r=m.oobCode)!==null&&r!==void 0?r:null,v=P2((a=m.mode)!==null&&a!==void 0?a:null);oe(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=m.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=N2(e);try{return new Ip(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(e,t){return Uh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ip.parseLink(t);return oe(r,"argument-error"),Uh._fromEmailAndCode(e,r.code,r.tenantId)}}ya.PROVIDER_ID="password";ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wl extends ku{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return oe("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return oe(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Wl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Wl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:l,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!l||!d)return null;try{return new Wl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ku{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ku{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2="http://localhost";class lu extends Vu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:l}=t;return!r||!a||!l||r!==a?null:new lu(r,l)}static _create(e,t){return new lu(e,t)}buildRequest(){return{requestUri:x2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="saml.";class qm extends ts{constructor(e){oe(e.startsWith(O2),"argument-error"),super(e)}static credentialFromResult(e){return qm.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qm.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=lu.fromJSON(e);return oe(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return lu._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ku{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e){return es(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Nr._fromIdTokenResponse(e,r,a),u=CI(r);return new br({user:l,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=CI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function CI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await QR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends Vn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,jm.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new jm(e,t,r,a)}}function YR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jm._fromErrorAndOperation(n,l,e,r):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n,e){const t=Ie(n);await Ap(!0,t,e);const{providerUserInfo:r}=await MM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=WR(r||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function iE(n,e,t=!1){const r=await Wi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Ap(n,e,t){await Lh(e);const r=WR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";oe(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const l=await Wi(n,YR(r,a,e,n),t);oe(l.idToken,r,"internal-error");const u=wp(l.idToken);oe(u,r,"internal-error");const{sub:d}=u;return oe(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await YR(n,r,e),l=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(l.user),l}async function Sp(n,e){return JR(bt(n),e)}async function ZR(n,e){const t=Ie(n);return await Ap(!1,t,e.providerId),iE(t,e)}async function e1(n,e){return XR(Ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await M2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?sE._fromServerResponse(e,t):"totpInfo"in t?aE._fromServerResponse(e,t):vn(e,"internal-error")}}class sE extends hd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new sE(t)}}class aE extends hd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new aE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e,t){var r;oe(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),oe(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),oe(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(oe(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(oe(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function U2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Rp(r,a,t),await ea(r,a,"getOobCode",E2,"EMAIL_PASSWORD_PROVIDER")}async function B2(n,e,t){await KR(Ie(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oE(n),r})}async function z2(n,e){await _2(Ie(n),{oobCode:e})}async function t1(n,e){const t=Ie(n),r=await KR(t,{oobCode:e}),a=r.requestType;switch(oe(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":oe(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":oe(r.mfaInfo,t,"internal-error");default:oe(r.email,t,"internal-error")}let l=null;return r.mfaInfo&&(l=hd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:l},operation:a}}async function F2(n,e){const{data:t}=await t1(Ie(n),e);return t.email}async function q2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ea(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QR,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&oE(n),m}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function j2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):Sp(Ie(n),ya.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(u,d){oe(d.handleCodeInApp,r,"argument-error"),d&&Rp(r,u,d)}l(a,t),await ea(r,a,"getOobCode",T2,"EMAIL_PASSWORD_PROVIDER")}function G2(n,e){const t=Ip.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function $2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ie(n),a=ya.credentialWithLink(e,t||Mh());return oe(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sp(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(n,e){return Nt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(n,e){const t=tE()?Mh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await K2(Ie(n),r);return a||[]}async function Y2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Rp(t.auth,a,e);const{email:l}=await v2(t.auth,a);l!==n.email&&await n.reload()}async function W2(n,e,t){const r=Ie(n),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Rp(r.auth,l,t);const{email:u}=await w2(r.auth,l);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(n,e){return Nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),l={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Wi(r,X2(r.auth,l));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Z2(n,e){const t=Ie(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):n1(t,e,null)}function eL(n,e){return n1(Ie(n),null,e)}async function n1(n,e,t){const{auth:r}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const u=await Wi(n,p2(r,l));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},l=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=wp(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Xl(l,d)}}if(!r)return null;switch(r){case"facebook.com":return new nL(l,a);case"github.com":return new rL(l,a);case"google.com":return new iL(l,a);case"twitter.com":return new sL(l,a,n.screenName||null);case"custom":case"anonymous":return new Xl(l,null);default:return new Xl(l,r,a)}}class Xl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class r1 extends Xl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class nL extends Xl{constructor(e,t){super(e,"facebook.com",t)}}class rL extends r1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class iL extends Xl{constructor(e,t){super(e,"google.com",t)}}class sL extends r1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function aL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:tL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new fo("enroll",e,t)}static _fromMfaPendingCredential(e){return new fo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return fo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(d=>hd._fromServerResponse(r,d));oe(a.mfaPendingCredential,r,"internal-error");const u=fo._fromMfaPendingCredential(a.mfaPendingCredential);return new lE(u,l,async d=>{const m=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const p=Object.assign(Object.assign({},a),{idToken:m.idToken,refreshToken:m.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,p);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return oe(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,p);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function oL(n,e){var t;const r=Ie(n),a=e;return oe(e.customData.operationType,r,"argument-error"),oe((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),lE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function lL(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function uL(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class uE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>hd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new uE(e)}async getSession(){return fo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),l=await Wi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Wi(this.user,uL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const wy=new WeakMap;function cL(n){const e=Ie(n);return wy.has(e)||wy.set(e,uE._fromUser(e)),wy.get(e)}const Hm="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hm,"1"),this.storage.removeItem(Hm),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=1e3,dL=10;class s1 extends i1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,m)=>{this.notifyListeners(u,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},l=this.storage.getItem(r);$M()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}s1.type="LOCAL";const cE=s1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1 extends i1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}a1.type="SESSION";const bo=a1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Cp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async p=>p(t.origin,l)),m=await fL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,m)=>{const p=dd("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function pL(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function gL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _L(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yL(){return hE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebaseLocalStorageDb",vL=1,Gm="firebaseLocalStorage",l1="fbase_key";class fd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dp(n,e){return n.transaction([Gm],e?"readwrite":"readonly").objectStore(Gm)}function EL(){const n=indexedDB.deleteDatabase(o1);return new fd(n).toPromise()}function Qy(){const n=indexedDB.open(o1,vL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gm,{keyPath:l1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gm)?e(r):(r.close(),await EL(),e(await Qy()))})})}async function PI(n,e,t){const r=Dp(n,!0).put({[l1]:e,value:t});return new fd(r).toPromise()}async function TL(n,e){const t=Dp(n,!1).get(e),r=await new fd(t).toPromise();return r===void 0?null:r.value}function NI(n,e){const t=Dp(n,!0).delete(e);return new fd(t).toPromise()}const wL=800,bL=3;class u1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cp._getInstance(yL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gL(),!this.activeServiceWorker)return;this.sender=new mL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_L()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qy();return await PI(e,Hm,"1"),await NI(e,Hm),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>PI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>TL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Dp(a,!1).getAll();return new fd(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u1.type="LOCAL";const Bh=u1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function IL(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=HR("rcb"),AL=new od(3e4,6e4);class SL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=jt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return oe(RL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&EI(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((r,a)=>{const l=jt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},AL.get());jt()[by]=()=>{jt().clearTimeout(l),delete jt()[by];const d=jt().grecaptcha;if(!d||!EI(d)){a(Xt(e,"internal-error"));return}const m=d.render;d.render=(p,y)=>{const v=m(p,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${ZM()}?${Nu({onload:by,render:"explicit",hl:t})}`;rE(u).catch(()=>{clearTimeout(l),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=jt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class CL{async load(e){return new i2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="recaptcha",DL={theme:"light",type:"image"};let PL=class{constructor(e,t,r=Object.assign({},DL)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",oe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;oe(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new CL:new SL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const l=u=>{u&&(this.tokenChangeListeners.delete(l),a(u))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){oe(!this.parameters.sitekey,this.auth,"argument-error"),oe(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),oe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=jt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){oe(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){oe(tE()&&!hE(),this.auth,"internal-error"),await NL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await VM(this.auth);oe(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return oe(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function NL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=To._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function xL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Pp(r,e,Ie(t));return new dE(a,l=>Sp(r,l))}async function OL(n,e,t){const r=Ie(n);await Ap(!1,r,"phone");const a=await Pp(r.auth,e,Ie(t));return new dE(a,l=>ZR(r,l))}async function VL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Pp(r.auth,e,Ie(t));return new dE(a,l=>e1(r,l))}async function Pp(n,e,t){var r;if(!n._getRecaptchaConfig())try{await c2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){oe(l.type==="enroll",n,"internal-error");const u={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===yh){oe((t==null?void 0:t.type)===vh,y,"argument-error");const w=await Iy(y,v,t);return DI(y,w)}return DI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{oe(l.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;oe(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:l.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===yh){oe((t==null?void 0:t.type)===vh,v,"argument-error");const S=await Iy(v,w,t);return xI(v,S)}return xI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ea(n,l,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===yh){oe((t==null?void 0:t.type)===vh,p,"argument-error");const v=await Iy(p,y,t);return RI(p,v)}return RI(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t==null||t._reset()}}async function kL(n,e){const t=Ie(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await iE(t,e)}async function Iy(n,e,t){oe(t.type===vh,n,"argument-error");const r=await t.verify();oe(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:l,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=class _m{constructor(e){this.providerId=_m.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Pp(this.auth,e,Ie(t))}static credential(e,t){return To._fromVerification(e,t)}static credentialFromResult(e){const t=e;return _m.credentialFromTaggedObject(t)}static credentialFromError(e){return _m.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?To._fromTokenResponse(t,r):null}};Io.PROVIDER_ID="phone";Io.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){return e?tr(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ML(n){return JR(n.auth,new fE(n),n.bypassAuthState)}function LL(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),XR(t,new fE(n),n.bypassAuthState)}async function UL(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),iE(t,new fE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ML;case"linkViaPopup":case"linkViaRedirect":return UL;case"reauthViaPopup":case"reauthViaRedirect":return LL;default:vn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=new od(2e3,1e4);async function zL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Ou(n,e,ts);const a=Lo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function FL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function qL(n,e,t){const r=Ie(n);Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends c1{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BL.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="pendingRedirect",Eh=new Map;class HL extends c1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await GL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GL(n,e){const t=d1(e),r=h1(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function mE(n,e){return h1(n)._set(d1(e),"true")}function $L(){Eh.clear()}function pE(n,e){Eh.set(n._key(),e)}function h1(n){return tr(n._redirectPersistence)}function d1(n){return Eo(jL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(n,e,t){return QL(n,e,t)}async function QL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Ou(n,e,ts),await r._initializationPromise;const a=Lo(r,t);return await mE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function YL(n,e,t){return WL(n,e,t)}async function WL(n,e,t){const r=Ie(n);if(Ou(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Lo(r.auth,t);await mE(a,r.auth);const l=await f1(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",l)}function XL(n,e,t){return JL(n,e,t)}async function JL(n,e,t){const r=Ie(n);Ou(r.auth,e,ts),await r.auth._initializationPromise;const a=Lo(r.auth,t);await Ap(!1,r,e.providerId),await mE(a,r.auth);const l=await f1(r);return a._openRedirect(r.auth,e,"linkViaRedirect",l)}async function ZL(n,e){return await bt(n)._initializationPromise,Np(n,e,!1)}async function Np(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Lo(r,e),u=await new HL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function f1(n){const e=dd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tU(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!p1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eU&&this.cachedEventUids.clear(),this.cachedEventUids.has(OI(e))}saveEventToCache(e){this.cachedEventUids.add(OI(e)),this.lastProcessedEventTime=Date.now()}}function OI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function p1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tU(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rU=/^https?/;async function iU(n){if(n.config.emulator)return;const{authorizedDomains:e}=await g1(n);for(const t of e)try{if(sU(t))return}catch{}vn(n,"unauthorized-domain")}function sU(n){const e=Mh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!rU.test(t))return!1;if(nU.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU=new od(3e4,6e4);function VI(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oU(n){return new Promise((e,t)=>{var r,a,l;function u(){VI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{VI(),t(Xt(n,"network-request-failed"))},timeout:aU.get()})}if(!((a=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=jt().gapi)===null||l===void 0)&&l.load)u();else{const d=HR("iframefcb");return jt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},rE(`${t2()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw ym=null,e})}let ym=null;function lU(n){return ym=ym||oU(n),ym}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uU=new od(5e3,15e3),cU="__/auth/iframe",hU="emulator/auth/iframe",dU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mU(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nE(e,hU):`https://${n.config.authDomain}/${cU}`,r={apiKey:e.apiKey,appName:n.name,v:_a},a=fU.get(n.config.apiHost);a&&(r.eid=a);const l=n._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${Nu(r).slice(1)}`}async function pU(n){const e=await lU(n),t=jt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:mU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dU,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=jt().setTimeout(()=>{l(u)},uU.get());function m(){jt().clearTimeout(d),a(r)}r.ping(m).then(m,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_U=500,yU=600,vU="_blank",EU="http://localhost";class kI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TU(n,e,t,r=_U,a=yU){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const m=Object.assign(Object.assign({},gU),{width:r.toString(),height:a.toString(),top:l,left:u}),p=wt().toLowerCase();t&&(d=UR(p)?vU:t),MR(p)&&(e=e||EU,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[S,P])=>`${w}${S}=${P},`,"");if(GM(p)&&d!=="_self")return wU(e||"",d),new kI(null);const v=window.open(e||"",d,y);oe(v,n,"popup-blocked");try{v.focus()}catch{}return new kI(v)}function wU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU="__/auth/handler",IU="emulator/auth/handler",AU=encodeURIComponent("fac");async function Yy(n,e,t,r,a,l){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",JV(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(l||{}))u[y]=v}if(e instanceof ku){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await n._getAppCheckToken(),p=m?`#${AU}=${encodeURIComponent(m)}`:"";return`${SU(n)}?${Nu(d).slice(1)}${p}`}function SU({config:n}){return n.emulator?nE(n,IU):`https://${n.authDomain}/${bU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="webStorageSupport";class RU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bo,this._completeRedirectFn=Np,this._overrideRedirectResult=pE}async _openPopup(e,t,r,a){var l;Vr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Yy(e,t,r,Mh(),a);return TU(e,u,dd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await Yy(e,t,r,Mh(),a);return pL(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Vr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await pU(e),r=new m1(e);return t.register("authEvent",a=>(oe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ay,{type:Ay},a=>{var l;const u=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Ay];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qR()||LR()||ud()}}const CU=RU;class DU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class gE extends DU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gE(e)}_finalizeEnroll(e,t,r){return lL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return IL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _1{constructor(){}static assertion(e){return gE._fromCredential(e)}}_1.FACTOR_ID="phone";var MI="@firebase/auth",LI="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xU(n){oa(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;oe(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jR(n)},p=new XM(r,a,l,m);return h2(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),oa(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new PU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(MI,LI,NU(n)),Or(MI,LI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OU=5*60;qV("authIdTokenMaxAge");function VU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}JM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const l=Xt("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",VU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU=2e3;async function MU(n,e,t){var r;const{BuildInfo:a}=Ao();Vr(e.sessionId,"AuthEvent did not contain a session ID");const l=await FU(e.sessionId),u={};return ud()?u.ibi=a.packageName:ld()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=l,Yy(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function LU(n){const{BuildInfo:e}=Ao(),t={};ud()?t.iosBundleId=e.packageName:ld()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await g1(n,t)}function UU(n){const{cordova:e}=Ao();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,HM()?"_blank":"_system","location=yes"),t(a)})})}async function BU(n,e,t){const{cordova:r}=Ao();let a=()=>{};try{await new Promise((l,u)=>{let d=null;function m(){var v;l();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},kU))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(m),document.addEventListener("resume",p,!1),ld()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function zU(n){var e,t,r,a,l,u,d,m,p,y;const v=Ao();oe(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),oe(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),oe(typeof((l=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),oe(typeof((m=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||m===void 0?void 0:m.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),oe(typeof((y=(p=v==null?void 0:v.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function FU(n){const e=qU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function qU(n){if(Vr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU=20;class HU extends m1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function GU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:QU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function $U(n,e){return Wy()._set(Xy(n),e)}async function UI(n){const e=await Wy()._get(Xy(n));return e&&await Wy()._remove(Xy(n)),e}function KU(n,e){var t,r;const a=WU(e);if(a.includes("/__/auth/callback")){const l=vm(a),u=l.firebaseError?YU(decodeURIComponent(l.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],m=d?Xt(d):null;return m?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function QU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<jU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Wy(){return tr(cE)}function Xy(n){return Eo("authEvent",n.config.apiKey,n.name)}function YU(n){try{return JSON.parse(n)}catch{return null}}function WU(n){const e=vm(n),t=e.link?decodeURIComponent(e.link):void 0,r=vm(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vm(a).link||a||r||t||n}function vm(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $l(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU=500;class JU{constructor(){this._redirectPersistence=bo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Np,this._overrideRedirectResult=pE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new HU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){zU(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),$L(),await this._originValidation(e);const u=GU(e,r,a);await $U(e,u);const d=await MU(e,u,t),m=await UU(d);return BU(e,l,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=Ao(),u=setTimeout(async()=>{await UI(e),t.onEvent(BI())},XU),d=async y=>{clearTimeout(u);const v=await UI(e);let w=null;v&&(y!=null&&y.url)&&(w=KU(v,y.url)),t.onEvent(w||BI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const m=a,p=`${l.packageName.toLowerCase()}://`;Ao().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(p)&&d({url:y}),typeof m=="function")try{m(y)}catch(v){console.error(v)}}}}const ZU=JU;function BI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(n,e){bt(n)._logFramework(e)}var t4="@firebase/auth-compat",n4="0.5.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function i4(){return Th()==="http:"||Th()==="https:"}function y1(n=wt()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function s4(){return Qv()||Kv()}function a4(){return cR()&&(document==null?void 0:document.documentMode)===11}function o4(n=wt()){return/Edge\/\d+/.test(n)}function l4(n=wt()){return a4()||o4(n)}function v1(){try{const n=self.localStorage,e=dd();if(n)return n.setItem(e,"1"),n.removeItem(e),l4()?Oh():!0}catch{return _E()&&Oh()}return!1}function _E(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Sy(){return(i4()||uR()||y1())&&!s4()&&v1()&&!_E()}function E1(){return y1()&&typeof document<"u"}async function u4(){return E1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},r4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function c4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},th=oe,T1="persistence";function h4(n,e){if(th(Object.values(er).includes(e),n,"invalid-persistence-type"),Qv()){th(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Kv()){th(e===er.NONE,n,"unsupported-persistence-type");return}if(_E()){th(e===er.NONE||e===er.LOCAL&&Oh(),n,"unsupported-persistence-type");return}th(e===er.NONE||v1(),n,"unsupported-persistence-type")}async function Jy(n){await n._initializationPromise;const e=w1(),t=Eo(T1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function d4(n,e){const t=w1();if(!t)return[];const r=Eo(T1,n,e);switch(t.getItem(r)){case er.NONE:return[ou];case er.LOCAL:return[Bh,bo];case er.SESSION:return[bo];default:return[]}}function w1(){var n;try{return((n=c4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=oe;class Ws{constructor(){this.browserResolver=tr(CU),this.cordovaResolver=tr(ZU),this.underlyingResolver=null,this._redirectPersistence=bo,this._completeRedirectFn=Np,this._overrideRedirectResult=pE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return E1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return f4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await u4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){return n.unwrap()}function m4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(n){return I1(n)}function g4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new _4(n,oL(n,e))}else if(r){const a=I1(e),l=e;a&&(l.credential=a,l.tenantId=r.tenantId||void 0,l.email=r.email||void 0,l.phoneNumber=r.phoneNumber||void 0)}}function I1(n){const{_tokenResponse:e}=n instanceof Vn?n.customData:n;if(!e)return null;if(!(n instanceof Vn)&&"temporaryProof"in e&&"phoneNumber"in e)return Io.credentialFromResult(n);const t=e.providerId;if(!t||t===Zc.PASSWORD)return null;let r;switch(t){case Zc.GOOGLE:r=ti;break;case Zc.FACEBOOK:r=ei;break;case Zc.GITHUB:r=ni;break;case Zc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:u,pendingToken:d,nonce:m}=e;return!l&&!u&&!a&&!d?null:d?t.startsWith("saml.")?lu._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:l}):new Wl(t).credential({idToken:a,accessToken:l,rawNonce:m})}return n instanceof Vn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof Vn&&g4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:p4(t),additionalUserInfo:aL(t),user:xp.getOrCreate(a)}})}async function Zy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class _4{constructor(e,t){this.resolver=t,this.auth=m4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(b1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp=class hh{constructor(e){this._delegate=e,this.multiFactor=cL(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,ZR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Zy(this.auth,OL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,qL(this._delegate,e,Ws))}async linkWithRedirect(e){return await Jy(bt(this.auth)),XL(this._delegate,e,Ws)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,e1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Zy(this.auth,VL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,FL(this._delegate,e,Ws))}async reauthenticateWithRedirect(e){return await Jy(bt(this.auth)),YL(this._delegate,e,Ws)}sendEmailVerification(e){return Y2(this._delegate,e)}async unlink(e){return await k2(this._delegate,e),this}updateEmail(e){return Z2(this._delegate,e)}updatePassword(e){return eL(this._delegate,e)}updatePhoneNumber(e){return kL(this._delegate,e)}updateProfile(e){return J2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return W2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};xp.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=oe;class ev{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;nh(r,"invalid-api-key",{appName:e.name}),nh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ws:void 0;this._delegate=t.initialize({options:{persistence:y4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(IM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xp.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){d2(this._delegate,e,t)}applyActionCode(e){return z2(this._delegate,e)}checkActionCode(e){return t1(this._delegate,e)}confirmPasswordReset(e,t){return B2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,q2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Q2(this._delegate,e)}isSignInWithEmailLink(e){return G2(this._delegate,e)}async getRedirectResult(){nh(Sy(),this._delegate,"operation-not-supported-in-this-environment");const e=await ZL(this._delegate,Ws);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){e4(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:l,complete:u}=zI(e,t,r);return this._delegate.onAuthStateChanged(a,l,u)}onIdTokenChanged(e,t,r){const{next:a,error:l,complete:u}=zI(e,t,r);return this._delegate.onIdTokenChanged(a,l,u)}sendSignInLinkToEmail(e,t){return H2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return U2(this._delegate,e,t||void 0)}async setPersistence(e){h4(this._delegate,e);let t;switch(e){case er.SESSION:t=bo;break;case er.LOCAL:t=await tr(Bh)._isAvailable()?Bh:cE;break;case er.NONE:t=ou;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,V2(this._delegate))}signInWithCredential(e){return zn(this._delegate,Sp(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,L2(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,j2(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,$2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Zy(this._delegate,xL(this._delegate,e,t))}async signInWithPopup(e){return nh(Sy(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,zL(this._delegate,e,Ws))}async signInWithRedirect(e){return nh(Sy(),this._delegate,"operation-not-supported-in-this-environment"),await Jy(this._delegate),KL(this._delegate,e,Ws)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return F2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ev.Persistence=er;function zI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&xp.getOrCreate(u)),error:e,complete:t}}function y4(n,e){const t=d4(n,e);if(typeof self<"u"&&!t.includes(Bh)&&t.push(Bh),typeof window<"u")for(const r of[cE,bo])t.includes(r)||t.push(r);return t.includes(ou)||t.push(ou),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{static credential(e,t){return Io.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Io(b1(xu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}yE.PHONE_SIGN_IN_METHOD=Io.PHONE_SIGN_IN_METHOD;yE.PROVIDER_ID=Io.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=oe;class E4{constructor(e,t,r=xu.app()){var a;v4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new PL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="auth-compat";function w4(n){n.INTERNAL.registerComponent(new ci(T4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ev(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ol.EMAIL_SIGNIN,PASSWORD_RESET:Ol.PASSWORD_RESET,RECOVER_EMAIL:Ol.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ol.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ol.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ol.VERIFY_EMAIL}},EmailAuthProvider:ya,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Wl,SAMLAuthProvider:qm,PhoneAuthProvider:yE,PhoneMultiFactorGenerator:_1,RecaptchaVerifier:E4,TwitterAuthProvider:ri,Auth:ev,AuthCredential:Vu,Error:Vn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(t4,n4)}w4(xu);var FI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,A1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(N,k,z){for(var x=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)x[xt-2]=arguments[xt];return R.prototype[k].apply(N,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(k=0;16>k;++k)N[k]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],k=D.g[2];var z=D.g[3],x=R+(z^A&(k^z))+N[0]+3614090360&4294967295;R=A+(x<<7&4294967295|x>>>25),x=z+(k^R&(A^k))+N[1]+3905402710&4294967295,z=R+(x<<12&4294967295|x>>>20),x=k+(A^z&(R^A))+N[2]+606105819&4294967295,k=z+(x<<17&4294967295|x>>>15),x=A+(R^k&(z^R))+N[3]+3250441966&4294967295,A=k+(x<<22&4294967295|x>>>10),x=R+(z^A&(k^z))+N[4]+4118548399&4294967295,R=A+(x<<7&4294967295|x>>>25),x=z+(k^R&(A^k))+N[5]+1200080426&4294967295,z=R+(x<<12&4294967295|x>>>20),x=k+(A^z&(R^A))+N[6]+2821735955&4294967295,k=z+(x<<17&4294967295|x>>>15),x=A+(R^k&(z^R))+N[7]+4249261313&4294967295,A=k+(x<<22&4294967295|x>>>10),x=R+(z^A&(k^z))+N[8]+1770035416&4294967295,R=A+(x<<7&4294967295|x>>>25),x=z+(k^R&(A^k))+N[9]+2336552879&4294967295,z=R+(x<<12&4294967295|x>>>20),x=k+(A^z&(R^A))+N[10]+4294925233&4294967295,k=z+(x<<17&4294967295|x>>>15),x=A+(R^k&(z^R))+N[11]+2304563134&4294967295,A=k+(x<<22&4294967295|x>>>10),x=R+(z^A&(k^z))+N[12]+1804603682&4294967295,R=A+(x<<7&4294967295|x>>>25),x=z+(k^R&(A^k))+N[13]+4254626195&4294967295,z=R+(x<<12&4294967295|x>>>20),x=k+(A^z&(R^A))+N[14]+2792965006&4294967295,k=z+(x<<17&4294967295|x>>>15),x=A+(R^k&(z^R))+N[15]+1236535329&4294967295,A=k+(x<<22&4294967295|x>>>10),x=R+(k^z&(A^k))+N[1]+4129170786&4294967295,R=A+(x<<5&4294967295|x>>>27),x=z+(A^k&(R^A))+N[6]+3225465664&4294967295,z=R+(x<<9&4294967295|x>>>23),x=k+(R^A&(z^R))+N[11]+643717713&4294967295,k=z+(x<<14&4294967295|x>>>18),x=A+(z^R&(k^z))+N[0]+3921069994&4294967295,A=k+(x<<20&4294967295|x>>>12),x=R+(k^z&(A^k))+N[5]+3593408605&4294967295,R=A+(x<<5&4294967295|x>>>27),x=z+(A^k&(R^A))+N[10]+38016083&4294967295,z=R+(x<<9&4294967295|x>>>23),x=k+(R^A&(z^R))+N[15]+3634488961&4294967295,k=z+(x<<14&4294967295|x>>>18),x=A+(z^R&(k^z))+N[4]+3889429448&4294967295,A=k+(x<<20&4294967295|x>>>12),x=R+(k^z&(A^k))+N[9]+568446438&4294967295,R=A+(x<<5&4294967295|x>>>27),x=z+(A^k&(R^A))+N[14]+3275163606&4294967295,z=R+(x<<9&4294967295|x>>>23),x=k+(R^A&(z^R))+N[3]+4107603335&4294967295,k=z+(x<<14&4294967295|x>>>18),x=A+(z^R&(k^z))+N[8]+1163531501&4294967295,A=k+(x<<20&4294967295|x>>>12),x=R+(k^z&(A^k))+N[13]+2850285829&4294967295,R=A+(x<<5&4294967295|x>>>27),x=z+(A^k&(R^A))+N[2]+4243563512&4294967295,z=R+(x<<9&4294967295|x>>>23),x=k+(R^A&(z^R))+N[7]+1735328473&4294967295,k=z+(x<<14&4294967295|x>>>18),x=A+(z^R&(k^z))+N[12]+2368359562&4294967295,A=k+(x<<20&4294967295|x>>>12),x=R+(A^k^z)+N[5]+4294588738&4294967295,R=A+(x<<4&4294967295|x>>>28),x=z+(R^A^k)+N[8]+2272392833&4294967295,z=R+(x<<11&4294967295|x>>>21),x=k+(z^R^A)+N[11]+1839030562&4294967295,k=z+(x<<16&4294967295|x>>>16),x=A+(k^z^R)+N[14]+4259657740&4294967295,A=k+(x<<23&4294967295|x>>>9),x=R+(A^k^z)+N[1]+2763975236&4294967295,R=A+(x<<4&4294967295|x>>>28),x=z+(R^A^k)+N[4]+1272893353&4294967295,z=R+(x<<11&4294967295|x>>>21),x=k+(z^R^A)+N[7]+4139469664&4294967295,k=z+(x<<16&4294967295|x>>>16),x=A+(k^z^R)+N[10]+3200236656&4294967295,A=k+(x<<23&4294967295|x>>>9),x=R+(A^k^z)+N[13]+681279174&4294967295,R=A+(x<<4&4294967295|x>>>28),x=z+(R^A^k)+N[0]+3936430074&4294967295,z=R+(x<<11&4294967295|x>>>21),x=k+(z^R^A)+N[3]+3572445317&4294967295,k=z+(x<<16&4294967295|x>>>16),x=A+(k^z^R)+N[6]+76029189&4294967295,A=k+(x<<23&4294967295|x>>>9),x=R+(A^k^z)+N[9]+3654602809&4294967295,R=A+(x<<4&4294967295|x>>>28),x=z+(R^A^k)+N[12]+3873151461&4294967295,z=R+(x<<11&4294967295|x>>>21),x=k+(z^R^A)+N[15]+530742520&4294967295,k=z+(x<<16&4294967295|x>>>16),x=A+(k^z^R)+N[2]+3299628645&4294967295,A=k+(x<<23&4294967295|x>>>9),x=R+(k^(A|~z))+N[0]+4096336452&4294967295,R=A+(x<<6&4294967295|x>>>26),x=z+(A^(R|~k))+N[7]+1126891415&4294967295,z=R+(x<<10&4294967295|x>>>22),x=k+(R^(z|~A))+N[14]+2878612391&4294967295,k=z+(x<<15&4294967295|x>>>17),x=A+(z^(k|~R))+N[5]+4237533241&4294967295,A=k+(x<<21&4294967295|x>>>11),x=R+(k^(A|~z))+N[12]+1700485571&4294967295,R=A+(x<<6&4294967295|x>>>26),x=z+(A^(R|~k))+N[3]+2399980690&4294967295,z=R+(x<<10&4294967295|x>>>22),x=k+(R^(z|~A))+N[10]+4293915773&4294967295,k=z+(x<<15&4294967295|x>>>17),x=A+(z^(k|~R))+N[1]+2240044497&4294967295,A=k+(x<<21&4294967295|x>>>11),x=R+(k^(A|~z))+N[8]+1873313359&4294967295,R=A+(x<<6&4294967295|x>>>26),x=z+(A^(R|~k))+N[15]+4264355552&4294967295,z=R+(x<<10&4294967295|x>>>22),x=k+(R^(z|~A))+N[6]+2734768916&4294967295,k=z+(x<<15&4294967295|x>>>17),x=A+(z^(k|~R))+N[13]+1309151649&4294967295,A=k+(x<<21&4294967295|x>>>11),x=R+(k^(A|~z))+N[4]+4149444226&4294967295,R=A+(x<<6&4294967295|x>>>26),x=z+(A^(R|~k))+N[11]+3174756917&4294967295,z=R+(x<<10&4294967295|x>>>22),x=k+(R^(z|~A))+N[2]+718787259&4294967295,k=z+(x<<15&4294967295|x>>>17),x=A+(z^(k|~R))+N[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+z&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,N=this.B,k=this.h,z=0;z<R;){if(k==0)for(;z<=A;)a(this,D,z),z+=this.blockSize;if(typeof D=="string"){for(;z<R;)if(N[k++]=D.charCodeAt(z++),k==this.blockSize){a(this,N),k=0;break}}else for(;z<R;)if(N[k++]=D[z++],k==this.blockSize){a(this,N),k=0;break}}this.h=k,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var N=0;32>N;N+=8)D[A++]=this.g[R]>>>N&255;return D};function l(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],N=!0,k=D.length-1;0<=k;k--){var z=D[k]|0;N&&z==R||(A[k]=z,N=!1)}this.g=A}var d={};function m(D){return-128<=D&&128>D?l(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function p(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return U(p(-D));for(var R=[],A=1,N=0;D>=A;N++)R[N]=D/A|0,A*=4294967296;return new u(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return U(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(R,8)),N=v,k=0;k<D.length;k+=8){var z=Math.min(8,D.length-k),x=parseInt(D.substring(k,k+z),R);8>z?(z=p(Math.pow(R,z)),N=N.j(z).add(p(x))):(N=N.j(A),N=N.add(p(x)))}return N}var v=m(0),w=m(1),S=m(16777216);n=u.prototype,n.m=function(){if(M(this))return-U(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var N=this.i(A);D+=(0<=N?N:4294967296+N)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(M(this))return"-"+U(this).toString(D);for(var R=p(Math.pow(D,6)),A=this,N="";;){var k=ae(A,R).g;A=j(A,k.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=k,P(A))return z+N;for(;6>z.length;)z="0"+z;N=z+N}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function M(D){return D.h==-1}n.l=function(D){return D=j(this,D),M(D)?-1:P(D)?0:1};function U(D){for(var R=D.g.length,A=[],N=0;N<R;N++)A[N]=~D.g[N];return new u(A,~D.h).add(w)}n.abs=function(){return M(this)?U(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],N=0,k=0;k<=R;k++){var z=N+(this.i(k)&65535)+(D.i(k)&65535),x=(z>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);N=x>>>16,z&=65535,x&=65535,A[k]=x<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function j(D,R){return D.add(U(R))}n.j=function(D){if(P(this)||P(D))return v;if(M(this))return M(D)?U(this).j(U(D)):U(U(this).j(D));if(M(D))return U(this.j(U(D)));if(0>this.l(S)&&0>D.l(S))return p(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],N=0;N<2*R;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<D.g.length;k++){var z=this.i(N)>>>16,x=this.i(N)&65535,xt=D.i(k)>>>16,It=D.i(k)&65535;A[2*N+2*k]+=x*It,Y(A,2*N+2*k),A[2*N+2*k+1]+=z*It,Y(A,2*N+2*k+1),A[2*N+2*k+1]+=x*xt,Y(A,2*N+2*k+1),A[2*N+2*k+2]+=z*xt,Y(A,2*N+2*k+2)}for(N=0;N<R;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=R;N<2*R;N++)A[N]=0;return new u(A,0)};function Y(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function G(D,R){this.g=D,this.h=R}function ae(D,R){if(P(R))throw Error("division by zero");if(P(D))return new G(v,v);if(M(D))return R=ae(U(D),R),new G(U(R.g),U(R.h));if(M(R))return R=ae(D,U(R)),new G(U(R.g),R.h);if(30<D.g.length){if(M(D)||M(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,N=R;0>=N.l(D);)A=ie(A),N=ie(N);var k=le(A,1),z=le(N,1);for(N=le(N,2),A=le(A,2);!P(N);){var x=z.add(N);0>=x.l(D)&&(k=k.add(A),z=x),N=le(N,1),A=le(A,1)}return R=j(D,k.j(R)),new G(k,R)}for(k=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),z=p(A),x=z.j(R);M(x)||0<x.l(D);)A-=N,z=p(A),x=z.j(R);P(z)&&(z=w),k=k.add(z),D=j(D,x)}return new G(k,D)}n.A=function(D){return ae(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)&D.i(N);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)|D.i(N);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)^D.i(N);return new u(A,this.h^D.h)};function ie(D){for(var R=D.g.length+1,A=[],N=0;N<R;N++)A[N]=D.i(N)<<1|D.i(N-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var N=D.g.length-A,k=[],z=0;z<N;z++)k[z]=0<R?D.i(z+A)>>>R|D.i(z+A+1)<<32-R:D.i(z+A);return new u(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,A1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,ta=u}).apply(typeof FI<"u"?FI:typeof self<"u"?self:typeof window<"u"?window:{});var em=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S1,dh,R1,Em,tv,C1,D1,P1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof em=="object"&&em];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var Q=E++;return{value:_(Q,h[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function p(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function P(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,Q){for(var ue=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ue[qe-2]=arguments[qe];return _.prototype[F].apply(I,ue)}}function M(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function U(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(m(I)){const F=h.length||0,Q=I.length||0;h.length=F+Q;for(let ue=0;ue<Q;ue++)h[F+ue]=I[ue]}else h.push(I)}}class j{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Y(h){return/^[\s\xa0]*$/.test(h)}function G(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ae(h){return ae[" "](h),h}ae[" "]=function(){};var ie=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function le(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function D(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function k(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function z(h){d.setTimeout(()=>{throw h},0)}function x(){var h=xe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class xt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new j(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,xe=new xt,O=()=>{const h=d.Promise.resolve(void 0);be=()=>{h.then(se)}};var se=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(E){z(E)}var _=It;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}Te=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function Ce(h,_){if(me.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ie){e:{try{ae(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}P(Ce,me);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ke=0;function Xe(h,_,E,I,F){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=F,this.key=++ke,this.da=this.fa=!1}function $e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,_,E,I,F){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ue=rr(h,_,I,F);return-1<ue?(_=h[ue],E||(_.fa=!1)):(_=new Xe(_,this.src,Q,!!I,F),_.fa=E,h.push(_)),_};function Zt(h,_){var E=_.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(I,F,1),Q&&($e(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,_,E,I){for(var F=0;F<h.length;++F){var Q=h[F];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function _i(h,_,E,I,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)_i(h,_[Q],E,I,F);return null}return E=Cd(E),h&&h[ut]?h.K(_,E,p(I)?!!I.capture:!1,F):Hu(h,_,E,!1,I,F)}function Hu(h,_,E,I,F,Q){if(!_)throw Error("Invalid event type");var ue=p(F)?!!F.capture:!!F,qe=Gu(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(_,E,I,ue,Q),E.proxy)return E;if(I=qo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(F=ue),F===void 0&&(F=!1),h.addEventListener(_.toString(),I,F);else if(h.attachEvent)h.attachEvent(Ho(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function qo(){function h(E){return _.call(h.src,h.listener,E)}const _=ag;return h}function jo(h,_,E,I,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)jo(h,_[Q],E,I,F);else I=p(I)?!!I.capture:!!I,E=Cd(E),h&&h[ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],E=rr(Q,E,I,F),-1<E&&($e(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Gu(h))&&(_=h.g[_.toString()],h=-1,_&&(h=rr(_,E,I,F)),(E=-1<h?_[h]:null)&&Ia(E))}function Ia(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ut])Zt(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(Ho(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Gu(_))?(Zt(E,h),E.h==0&&(E.src=null,_[as]=null)):$e(h)}}}function Ho(h){return h in os?os[h]:os[h]="on"+h}function ag(h,_){if(h.da)h=!0;else{_=new Ce(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Ia(h),h=E.call(I,_)}return h}function Gu(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(_){return h.handleEvent(_)}),h[Ln])}function Gt(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}P(Gt,ge),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,_,E,I){jo(this,h,_,E,I)};function en(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new me(_,h);else if(_ instanceof me)_.target=_.target||h;else{var F=_;_=new me(I,h),N(_,F)}if(F=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];F=yi(ue,I,!0,_)&&F}if(ue=_.g=h,F=yi(ue,I,!0,_)&&F,F=yi(ue,I,!1,_)&&F,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],F=yi(ue,I,!1,_)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)$e(E[I]);delete h.g[_],h.h--}}this.F=null},Gt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Gt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function yi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var qe=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Zt(h.i,ue),F=qe.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Dd(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function $u(h){h.g=Dd(()=>{h.g=null,h.i&&(h.i=!1,$u(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class og extends ge{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:$u(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(h){ge.call(this),this.h=h,this.g={}}P(Aa,ge);var ls=[];function En(h){le(h.g,function(_,E){this.g.hasOwnProperty(E)&&Ia(_)},h),h.g={}}Aa.prototype.N=function(){Aa.aa.N.call(this),En(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=d.JSON.stringify,kr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Qu(){}Qu.prototype.h=null;function Pd(h){return h.h||(h.h=h.i())}function Nd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){me.call(this,"d")}P(us,me);function Ir(){me.call(this,"c")}P(Ir,me);var ir={},cs=null;function Go(){return cs=cs||new Gt}ir.La="serverreachability";function Yu(h){me.call(this,ir.La,h)}P(Yu,me);function hs(h){const _=Go();en(_,new Yu(_))}ir.STAT_EVENT="statevent";function $o(h,_){me.call(this,ir.STAT_EVENT,h),this.stat=_}P($o,me);function Ot(h){const _=Go();en(_,new $o(_,h))}ir.Ma="timingevent";function xd(h,_){me.call(this,ir.Ma,h),this.size=_}P(xd,me);function ds(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Od(h,_,E,I,F,Q){h.info(function(){if(h.g)if(Q)for(var ue="",qe=Q.split("&"),Kt=0;Kt<qe.length;Kt++){var je=qe[Kt].split("=");if(1<je.length){var rn=je[0];je=je[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+je+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+_+`
`+E+`
`+ue})}function Vd(h,_,E,I,F,Q,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+_+`
`+E+`
`+Q+" "+ue})}function ms(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,_){h.info(function(){return"TIMEOUT: "+_})}fs.prototype.info=function(){};function tn(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Ku(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function Ko(){}P(Ko,Qu),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},Sa=new Ko;function Ur(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new Aa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var ps={},Ra={};function Ar(h,_,E){h.L=1,h.v=Pa(At(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),_t(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Wu,h.g=Qd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new og(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var Q=0;Q<F.length;Q++){var ue=_i(E,F[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hs(),Od(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const _=this.M;_&&ur(h)==3?_.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||zd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?hs(3):hs(2)),Qo(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=zd(this.g);h="";var F=I.length,Q=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(Q&&_==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Vd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(qe)){var je=qe;break t}}je=null}if(E=je)ms(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=_s(this,ue),dn==Ra){Qt==4&&(this.s=4,Ot(14),E=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ps){this.s=4,Ot(15),ms(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ms(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ms(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),La(rn),rn.M=!0,Ot(11))}}else ms(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Gd(this.j,this):(this.o=!1,_t(this)))}else fg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _s(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Ra:(E=Number(_.substring(E,I)),isNaN(E)?ps:(I+=1,I+E>_.length?Ra:(_=_.slice(I,I+E),h.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(h){h.S=Date.now()+h.I,Xu(h,h.I)}function Xu(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),_)}function Qo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Xu(this,this.S-h)};function Gn(h){h.j.G==0||h.J||Gd(h.j,h)}function Un(h){Qo(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||ys(E.h,h))){if(!h.K&&ys(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)il(E),nl(E);else break e;lc(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=kd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&il(E),!Y(_))for(F=E.Da.g.parse(_),_=0;_<F.length;_++){let je=F[_];if(E.T=je[0],je=je[1],E.G==2)if(je[0]=="c"){E.K=je[1],E.ia=je[2];const rn=je[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=je[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=je[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var Q=I.h;Q.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(vs(Q,Q.h),Q.h=null))}if(I.D){const cc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(I.ya=cc,Ke(I.I,I.D,cc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Kd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var qe=ue,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Qo(qe),_t(qe)),I.g=ue}else jd(I);0<E.i.length&&rl(E)}else je[0]!="stop"&&je[0]!="close"||Si(E,7);else E.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Si(E,7):ac(E):je[0]!="noop"&&E.l&&E.l.ta(je),E.v=0)}}hs(4)}catch{}}var lg=class{constructor(h,_){this.g=h,this.map=_}};function Ju(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function kd(h){return h.h?1:h.g?h.g.size:0}function ys(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vs(h,_){h.g?h.g.add(_):h.h=_}function sr(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Ju.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return M(h.i)}function Md(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function ug(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Ca(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=ug(h),I=Md(h),F=I.length,Q=0;Q<F;Q++)_.call(void 0,I[Q],E&&E[Q],h)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var Q=h[E].substring(0,I);F=h[E].substring(I+1)}else Q=h[E];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Da(this,h.s),this.l=h.l;var _=h.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Wo(this,E),this.m=h.m}else h&&(_=String(h).match(ec))?(this.h=!1,Es(this,_[1]||"",!0),this.o=Ts(_[2]||""),this.g=Ts(_[3]||"",!0),Da(this,_[4]),this.l=Ts(_[5]||"",!0),Wo(this,_[6]||"",!0),this.m=Ts(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ar(_,tc,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ar(_,tc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?nc:Ld,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,dg)),h.join("")};function At(h){return new Ti(h)}function Es(h,_,E){h.j=E?Ts(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Da(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Wo(h,_,E){_ instanceof Br?(h.i=_,rc(h.i,h.h)):(E||(_=ar(_,hg)),h.i=new Br(_,h.h))}function Ke(h,_,E){h.i.set(_,E)}function Pa(h){return Ke(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,cg),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function cg(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var tc=/[#\/\?@]/g,Ld=/[#\?:]/g,nc=/[#\?]/g,hg=/[#\?@]/g,dg=/#/g;function Br(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Yo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,_){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Xo(h,_){or(h),_=Ii(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function wi(h,_){return or(h),_=Ii(h,_),h.g.has(_)}n.forEach=function(h,_){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(_,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const F=h[I];for(let Q=0;Q<F.length;Q++)E.push(_[I])}return E},n.V=function(h){or(this);let _=[];if(typeof h=="string")wi(this,h)&&(_=_.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bi(h,_,E){Xo(h,_),0<E.length&&(h.i=null,h.g.set(Ii(h,_),M(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=Q;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function rc(h,_){_&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Xo(this,I),bi(this,F,E))},h)),h.j=_}function Ud(h,_){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Na(h,_){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(Q=>{clearTimeout(F),Q.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,_)})}function lr(h,_,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function xa(){this.g=new Rn}function zr(h,_,E){const I=E||"";try{Ca(h,function(F,Q){let ue=F;p(F)&&(ue=Ku(F)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(F){throw _.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}P(ws,Qu),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,_){Gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ai,Gt),n=Ai.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,qr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ic(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ic(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):qr(this),this.readyState==3&&ic(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,qr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function qr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function sc(h){let _="";return le(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=sc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Ke(h,_,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Je,Gt);var Jo=/^https?$/i,Oa=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?Pd(this.o):Pd(Sa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Bd(this,Q);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,_,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Bd(this,Q)}};function Bd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Zo(h),jr(h)}function Zo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?el(this):this.bb())},n.bb=function(){el(this)};function el(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Dd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var F=String(h.D).match(ec)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Jo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Q=2<ur(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",Zo(h)}}finally{jr(h)}}}}function jr(h,_){if(h.g){Va(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function Va(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),kr(_)}};function zd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function fg(h){const _={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(Y(h[I]))continue;var E=k(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[F]||[];_[F]=Q,Q.push(E)}D(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ka(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function tl(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ka("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ka("baseRetryDelayMs",5e3,h),this.cb=ka("retryDelaySeedMs",1e4,h),this.Wa=ka("forwardChannelMaxRetries",2,h),this.wa=ka("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ju(h&&h.concurrentRequestLimit),this.Da=new xa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tl.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){Ot(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Kd(this,null,this.W),rl(this)};function ac(h){if(Fd(h),h.G==3){var _=h.U++,E=At(h.I);if(Ke(E,"SID",h.K),Ke(E,"RID",_),Ke(E,"TYPE","terminate"),Ma(h,E),_=new Ur(h,h.j,_),_.L=2,_.v=Pa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Qd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}$d(h)}function nl(h){h.g&&(La(h),h.g.cancel(),h.g=null)}function Fd(h){nl(h),h.u&&(d.clearTimeout(h.u),h.u=null),il(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function rl(h){if(!Zu(h.h)&&!h.s){h.s=!0;var _=h.Ga;be||O(),Te||(be(),Te=!0),xe.add(_,h),h.B=0}}function mg(h,_){return kd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,_),uc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=R(Q),N(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=qd(this,F,_),E=At(this.I),Ke(E,"RID",h),Ke(E,"CVER",22),this.D&&Ke(E,"X-HTTP-Session-Id",this.D),Ma(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(sc(Q)))+"&"+_:this.m&&nn(E,this.m,Q)),vs(this.h,F),this.Ua&&Ke(E,"TYPE","init"),this.P?(Ke(E,"$req",_),Ke(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,_),this.G=2}}else this.G==3&&(h?oc(this,h):this.i.length==0||Zu(this.h)||oc(this))};function oc(h,_){var E;_?E=_.l:E=h.U++;const I=At(h.I);Ke(I,"SID",h.K),Ke(I,"RID",E),Ke(I,"AID",h.T),Ma(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=qd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,_)}function Ma(h,_){h.H&&le(h.H,function(E,I){Ke(_,I,E)}),h.l&&Ca({},function(E,I){Ke(_,I,E)})}function qd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=F[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let qe=!0;for(let Kt=0;Kt<E;Kt++){let je=F[Kt].g;const rn=F[Kt].map;if(je-=Q,0>je)Q=Math.max(0,F[Kt].g-100),qe=!1;else try{zr(rn,ue,"req"+je+"_")}catch{I&&I(rn)}}if(qe){I=ue.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function jd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;be||O(),Te||(be(),Te=!0),xe.add(_,h),h.v=0}}function lc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),uc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Hd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),nl(this),Hd(this))};function La(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Hd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=At(h.qa);Ke(_,"RID","rpc"),Ke(_,"SID",h.K),Ke(_,"AID",h.T),Ke(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ke(_,"TO",h.ja),Ke(_,"TYPE","xmlhttp"),Ma(h,_),h.m&&h.o&&nn(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Pa(At(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,nl(this),lc(this),Ot(19))};function il(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Gd(h,_){var E=null;if(h.g==_){il(h),La(h),h.g=null;var I=2}else if(ys(h.h,_))E=_.D,sr(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;I=Go(),en(I,new xd(I,E)),rl(h)}else jd(h);else if(F=_.s,F==3||F==0&&0<_.X||!(I==1&&mg(h,_)||I==2&&lc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function uc(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Si(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Pa(I),F?Ud(I.toString(),E):Na(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(_),$d(h),Fd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function $d(h){if(h.G=0,h.ka=[],h.l){const _=Cn(h.h);(_.length!=0||h.i.length!=0)&&(U(h.ka,_),U(h.ka,h.i),h.h.i.length=0,M(h.i),h.i.length=0),h.l.ra()}}function Kd(h,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),Da(I,I.s);else{var F=d.location;I=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new Ti(null);I&&Es(Q,I),_&&(Q.g=_),F&&Da(Q,F),E&&(Q.l=E),I=Q}return E=h.D,_=h.ya,E&&_&&Ke(I,E,_),Ke(I,"VER",h.la),Ma(h,I),I}function Qd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yd(){}n=Yd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sl(){}sl.prototype.g=function(h,_){return new Dn(h,_)};function Dn(h,_){Gt.call(this),this.g=new tl(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!Y(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!Y(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Hr(this)}P(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){ac(this.g)},Dn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Ku(h),h=E);_.i.push(new lg(_.Ya++,h)),_.G==3&&rl(_)},Dn.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Dn.aa.N.call(this)};function Wd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}P(Wd,us);function Xd(){Ir.call(this),this.status=1}P(Xd,Ir);function Hr(h){this.g=h}P(Hr,Yd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Wd(h))},Hr.prototype.sa=function(h){en(this.g,new Xd)},Hr.prototype.ra=function(){en(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,P1=function(){return new sl},D1=function(){return Go()},C1=ir,tv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,Em=$t,vi.COMPLETE="complete",R1=vi,Nd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,dh=Nd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,S1=Je}).apply(typeof em<"u"?em:typeof self<"u"?self:typeof window<"u"?window:{});const qI="@firebase/firestore",jI="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Tp("@firebase/firestore");function zl(){return la.logLevel}function b4(n){la.setLogLevel(n)}function re(n,...e){if(la.logLevel<=Ue.DEBUG){const t=e.map(vE);la.debug(`Firestore (${Mu}): ${n}`,...t)}}function kt(n,...e){if(la.logLevel<=Ue.ERROR){const t=e.map(vE);la.error(`Firestore (${Mu}): ${n}`,...t)}}function di(n,...e){if(la.logLevel<=Ue.WARN){const t=e.map(vE);la.warn(`Firestore (${Mu}): ${n}`,...t)}}function vE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,N1(n,r,t)}function N1(n,e,t){let r=`FIRESTORE (${Mu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw kt(r),new Error(r)}function ye(n,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,n||N1(e,a,r)}function I4(n,e){n||pe(57014,e)}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class S4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class R4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const a=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let l=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new x1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class C4{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class D4{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new C4(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new HI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new HI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=N4(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function nv(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Se(r,a);{const l=EE(),u=x4(l.encode(GI(n,t)),l.encode(GI(e,t)));return u!==0?u:Se(r,a)}}t+=r>65535?2:1}return Se(n.length,e.length)}function GI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function x4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function uu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function V1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=-62135596800,KI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*KI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$I)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/KI}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$I;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&pe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=Xr.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):nv(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class Be extends Xr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const O4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Xr{construct(e,t,r){return new mt(e,t,r)}static isValidIdentifier(e){return O4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===QI}static keyField(){return new mt([QI])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new te(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(l(),a++)}if(l(),u)throw new te(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Be.fromString(e))}static fromName(e){return new ce(Be.fromString(e).popFirst(5))}static empty(){return new ce(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Be(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=-1;class $m{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function rv(n){return n.fields.find(e=>e.kind===2)}function io(n){return n.fields.filter(e=>e.kind!==2)}$m.UNKNOWN_ID=-1;class Tm{constructor(e,t){this.fieldPath=e,this.kind=t}}class zh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new zh(0,nr.min())}}function k1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function M1(n){return new nr(n.readTime,n.key,cu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Ee.min(),ce.empty(),cu)}static max(){return new nr(Ee.max(),ce.empty(),cu)}}function TE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==L1)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let a=0,l=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++l,u&&l===a&&t()},m=>r(m))}),u=!0,l===a&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(a=>a?q.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new q((r,a)=>{const l=e.length,u=new Array(l);let d=0;for(let m=0;m<l;m++){const p=m;t(e[p]).next(y=>{u[p]=y,++d,d===l&&r(u)},y=>a(y))}})}static doWhile(e,t){return new q((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="SimpleDb";class Op{static open(e,t,r,a){try{return new Op(t,e.transaction(a,r))}catch(l){throw new wh(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new yn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new wh(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const a=wE(r.target.error);this.S.reject(new wh(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(re(Zn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new k4(t)}}class oi{static delete(e){return re(Zn,"Removing database:",e),ao(Gv().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Oh())return!1;if(oi.F())return!0;const e=wt(),t=oi.M(e),r=0<t&&t<10,a=B1(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,oi.M(wt())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(re(Zn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const u=l.target.result;t(u)},a.onblocked=()=>{r(new wh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const u=l.target.error;u.name==="VersionError"?r(new te(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new wh(e,u))},a.onupgradeneeded=l=>{re(Zn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const u=l.target.result;if(this.L!==null&&this.L!==l.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${l.oldVersion}, event.newVersion=${l.newVersion}, db.version=${u.version}`);this.B.q(u,a.transaction,l.oldVersion,this.version).next(()=>{re(Zn,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const l=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=Op.open(this.db,e,l?"readonly":"readwrite",r),m=a(d).next(p=>(d.v(),p)).catch(p=>(d.abort(p),q.reject(p))).toPromise();return m.catch(()=>{}),await d.D,m}catch(d){const m=d,p=m.name!=="FirebaseError"&&u<3;if(re(Zn,"Transaction failed with error:",m.message,"Retrying:",p),this.close(),!p)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function B1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class V4{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return ao(this.K.delete())}}class wh extends te{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ea(n){return n.name==="IndexedDbTransactionError"}class k4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Zn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Zn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ao(r)}add(e){return re(Zn,"ADD",this.store.name,e,e),ao(this.store.add(e))}get(e){return ao(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Zn,"GET",this.store.name,e,t),t))}delete(e){return re(Zn,"DELETE",this.store.name,e),ao(this.store.delete(e))}count(){return re(Zn,"COUNT",this.store.name),ao(this.store.count())}J(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(r.range);return new q((u,d)=>{l.onerror=m=>{d(m.target.error)},l.onsuccess=m=>{u(m.target.result)}})}{const l=this.cursor(r),u=[];return this.Y(l,(d,m)=>{u.push(m)}).next(()=>u)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new q((a,l)=>{r.onerror=u=>{l(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}X(e,t){re(Zn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const a=this.cursor(r);return this.Y(a,(l,u,d)=>d.delete())}te(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.Y(a,t)}ne(e){const t=this.cursor({});return new q((r,a)=>{t.onerror=l=>{const u=wE(l.target.error);a(u)},t.onsuccess=l=>{const u=l.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}Y(e,t){const r=[];return new q((a,l)=>{e.onerror=u=>{l(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const m=new V4(d),p=t(d.primaryKey,d.value,m);if(p instanceof q){const y=p.catch(v=>(m.done(),q.reject(v)));r.push(y)}m.isDone?a():m.j===null?d.continue():d.continue(m.j)}}).next(()=>q.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ao(n){return new q((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=wE(r.target.error);t(a)}})}let YI=!1;function wE(n){const e=oi.M(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return YI||(YI=!0,setTimeout(()=>{throw r},0)),r}}return n}const bh="IndexBackfiller";class M4{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){re(bh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();re(bh,`Documents written: ${t}`)}catch(t){Ea(t)?re(bh,"Ignoring IndexedDB error during index backfill: ",t):await va(t)}await this.ie(6e4)})}}class L4{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let a=t,l=!0;return q.doWhile(()=>l===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(bh,`Processing collection: ${u}`),this._e(e,u,a).next(d=>{a-=d,r.add(u)});l=!1})).next(()=>t-a)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(l=>{const u=l.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.ae(a,l)).next(d=>(re(bh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}ae(e,t){let r=e;return t.changes.forEach((a,l)=>{const u=M1(l);TE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}qn.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function md(n){return n==null}function Fh(n){return n===0&&1/n==-1/0}function z1(n){return typeof n=="number"&&Number.isInteger(n)&&!Fh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=WI(e)),e=U4(n.get(t),e);return WI(e)}function U4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Km:t+="";break;default:t+=l}}return t}function WI(n){return n+Km+""}function si(n){const e=n.length;if(ye(e>=2,64408,{path:n}),e===2)return ye(n.charAt(0)===Km&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,r=[];let a="";for(let l=0;l<e;){const u=n.indexOf(Km,l);switch((u<0||u>t)&&pe(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(l,u);let m;a.length===0?m=d:(a+=d,m=a,a=""),r.push(m);break;case"":a+=n.substring(l,u),a+="\0";break;case"":a+=n.substring(l,u+1);break;default:pe(61167,{path:n})}l=u+2}return new Be(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="remoteDocuments",pd="owner",Vl="owner",qh="mutationQueues",B4="userId",Pr="mutations",XI="batchId",mo="userMutationsIndex",JI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){return[n,An(e)]}function F1(n,e,t){return[n,An(e),t]}const z4={},hu="documentMutations",Qm="remoteDocumentsV14",F4=["prefixPath","collectionGroup","readTime","documentId"],bm="documentKeyIndex",q4=["prefixPath","collectionGroup","documentId"],q1="collectionGroupIndex",j4=["collectionGroup","readTime","prefixPath","documentId"],jh="remoteDocumentGlobal",iv="remoteDocumentGlobalKey",du="targets",j1="queryTargetsIndex",H4=["canonicalId","targetId"],fu="targetDocuments",G4=["targetId","path"],bE="documentTargetsIndex",$4=["path","targetId"],Ym="targetGlobalKey",wo="targetGlobal",Hh="collectionParents",K4=["collectionId","parent"],mu="clientMetadata",Q4="clientId",Vp="bundles",Y4="bundleId",kp="namedQueries",W4="name",IE="indexConfiguration",X4="indexId",sv="collectionGroupIndex",J4="collectionGroup",Wm="indexState",Z4=["indexId","uid"],H1="sequenceNumberIndex",e6=["uid","sequenceNumber"],Xm="indexEntries",t6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],G1="documentKeyIndex",n6=["indexId","uid","orderedDocumentKey"],Mp="documentOverlays",r6=["userId","collectionPath","documentId"],av="collectionPathOverlayIndex",i6=["userId","collectionPath","largestBatchId"],$1="collectionGroupOverlayIndex",s6=["userId","collectionGroup","largestBatchId"],AE="globals",a6="name",K1=[qh,Pr,hu,so,du,pd,wo,fu,mu,jh,Hh,Vp,kp],o6=[...K1,Mp],Q1=[qh,Pr,hu,Qm,du,pd,wo,fu,mu,jh,Hh,Vp,kp,Mp],Y1=Q1,SE=[...Y1,IE,Wm,Xm],l6=SE,u6=[...SE,AE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends U1{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Jt(n,e){const t=de(n);return oi.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ta(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function W1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tm(this.root,e,this.comparator,!1)}getReverseIterator(){return new tm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tm(this.root,e,this.comparator,!0)}}class tm{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=l??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eA(this.data.getIterator())}getIteratorFrom(e){return new eA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new tt(this.comparator);return t.data=e,t}}class eA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new tt(mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new X1("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const h6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=h6.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ji(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="server_timestamp",Z1="__type__",eC="__previous_value__",tC="__local_write_time__";function Lp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Z1])===null||t===void 0?void 0:t.stringValue)===J1}function Up(n){const e=n.mapValue.fields[eC];return Lp(e)?Up(e):e}function Gh(n){const e=Xi(n.mapValue.fields[tC].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e,t,r,a,l,u,d,m,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=p,this.isUsingEmulator=y}}const lv="(default)";class ua{constructor(e,t){this.projectId=e,this.database=t||lv}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===lv}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="__type__",nC="__max__",Xs={mapValue:{fields:{__type__:{stringValue:nC}}}},CE="__vector__",pu="value",Im={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lp(n)?4:rC(n)?9007199254740991:Bp(n)?10:11:pe(28295,{value:n})}function fi(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gh(n).isEqual(Gh(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Xi(a.timestampValue),d=Xi(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Ji(a.bytesValue).isEqual(Ji(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return dt(a.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return dt(a.integerValue)===dt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=dt(a.doubleValue),d=dt(l.doubleValue);return u===d?Fh(u)===Fh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return uu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if(ZI(u)!==ZI(d))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(d[m]===void 0||!fi(u[m],d[m])))return!1;return!0}(n,e);default:return pe(52216,{left:n})}}function $h(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),r=ca(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return function(l,u){const d=dt(l.integerValue||l.doubleValue),m=dt(u.integerValue||u.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return tA(n.timestampValue,e.timestampValue);case 4:return tA(Gh(n),Gh(e));case 5:return nv(n.stringValue,e.stringValue);case 6:return function(l,u){const d=Ji(l),m=Ji(u);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,u){const d=l.split("/"),m=u.split("/");for(let p=0;p<d.length&&p<m.length;p++){const y=Se(d[p],m[p]);if(y!==0)return y}return Se(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,u){const d=Se(dt(l.latitude),dt(u.latitude));return d!==0?d:Se(dt(l.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nA(n.arrayValue,e.arrayValue);case 10:return function(l,u){var d,m,p,y;const v=l.fields||{},w=u.fields||{},S=(d=v[pu])===null||d===void 0?void 0:d.arrayValue,P=(m=w[pu])===null||m===void 0?void 0:m.arrayValue,M=Se(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0);return M!==0?M:nA(S,P)}(n.mapValue,e.mapValue);case 11:return function(l,u){if(l===Xs.mapValue&&u===Xs.mapValue)return 0;if(l===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),p=u.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let v=0;v<m.length&&v<y.length;++v){const w=nv(m[v],y[v]);if(w!==0)return w;const S=ha(d[m[v]],p[y[v]]);if(S!==0)return S}return Se(m.length,y.length)}(n.mapValue,e.mapValue);default:throw pe(23264,{Pe:t})}}function tA(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Xi(n),r=Xi(e),a=Se(t.seconds,r.seconds);return a!==0?a:Se(t.nanos,r.nanos)}function nA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=ha(t[a],r[a]);if(l)return l}return Se(t.length,r.length)}function gu(n){return uv(n)}function uv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ji(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=uv(l);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of r)l?l=!1:a+=",",a+=`${u}:${uv(t.fields[u])}`;return a+"}"}(n.mapValue):pe(61005,{value:n})}function Am(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Up(n);return e?16+Am(e):16;case 5:return 2*n.stringValue.length;case 6:return Ji(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Am(l),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Ta(r.fields,(l,u)=>{a+=l.length+Am(u)}),a}(n.mapValue);default:throw pe(13486,{value:n})}}function So(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cv(n){return!!n&&"integerValue"in n}function Kh(n){return!!n&&"arrayValue"in n}function rA(n){return!!n&&"nullValue"in n}function iA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sm(n){return!!n&&"mapValue"in n}function Bp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[RE])===null||t===void 0?void 0:t.stringValue)===CE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ta(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nC}const iC={mapValue:{fields:{[RE]:{stringValue:CE},[pu]:{arrayValue:{}}}}};function f6(n){return"nullValue"in n?Im:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?So(ua.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Bp(n)?iC:{mapValue:{}}:pe(35942,{value:n})}function m6(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?So(ua.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?iC:"mapValue"in n?Bp(n)?{mapValue:{}}:Xs:pe(61959,{value:n})}function sA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function aA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=mt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Sm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Sm(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Ta(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new _n(Ih(this.value))}}function sC(n){const e=[];return Ta(n.fields,(t,r)=>{const a=new mt([t]);if(Sm(r)){const l=sC(r.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,l,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Ee.min(),Ee.min(),Ee.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Ee.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Ee.min(),Ee.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Ee.min(),Ee.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function oA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=ha(u,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function lA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t="asc"){this.field=e,this.dir=t}}function p6(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{}class ze extends aC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new g6(e,t,r):t==="array-contains"?new v6(e,r):t==="in"?new dC(e,r):t==="not-in"?new E6(e,r):t==="array-contains-any"?new T6(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _6(e,r):new y6(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends aC{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new et(e,t)}matches(e){return _u(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function _u(n){return n.op==="and"}function hv(n){return n.op==="or"}function DE(n){return oC(n)&&_u(n)}function oC(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function dv(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+gu(n.value);if(DE(n))return n.filters.map(e=>dv(e)).join(",");{const e=n.filters.map(t=>dv(t)).join(",");return`${n.op}(${e})`}}function lC(n,e){return n instanceof ze?function(r,a){return a instanceof ze&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof et?function(r,a){return a instanceof et&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,u,d)=>l&&lC(u,a.filters[d]),!0):!1}(n,e):void pe(19439)}function uC(n,e){const t=n.filters.concat(e);return et.create(t,n.op)}function cC(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${gu(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(cC).join(" ,")+"}"}(n):"Filter"}class g6 extends ze{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class _6 extends ze{constructor(e,t){super(e,"in",t),this.keys=hC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class y6 extends ze{constructor(e,t){super(e,"not-in",t),this.keys=hC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class v6 extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kh(t)&&$h(t.arrayValue,this.value)}}class dC extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$h(this.value.arrayValue,t)}}class E6 extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if($h(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$h(this.value.arrayValue,t)}}class T6 extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$h(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,t=null,r=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.Ie=null}}function fv(n,e=null,t=[],r=[],a=null,l=null,u=null){return new w6(n,e,t,r,a,l,u)}function Ro(n){const e=de(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>dv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gu(r)).join(",")),e.Ie=t}return e.Ie}function gd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!p6(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lA(n.startAt,e.startAt)&&lA(n.endAt,e.endAt)}function Jm(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zm(n,e){return n.filters.filter(t=>t instanceof ze&&t.field.isEqual(e))}function uA(n,e,t){let r=Im,a=!0;for(const l of Zm(n,e)){let u=Im,d=!0;switch(l.op){case"<":case"<=":u=f6(l.value);break;case"==":case"in":case">=":u=l.value;break;case">":u=l.value,d=!1;break;case"!=":case"not-in":u=Im}sA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const u=t.position[l];sA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function cA(n,e,t){let r=Xs,a=!0;for(const l of Zm(n,e)){let u=Xs,d=!0;switch(l.op){case">=":case">":u=m6(l.value),d=!1;break;case"==":case"in":case"<=":u=l.value;break;case"<":u=l.value,d=!1;break;case"!=":case"not-in":u=Xs}aA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const u=t.position[l];aA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],l=null,u="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function fC(n,e,t,r,a,l,u,d){return new ns(n,e,t,r,a,l,u,d)}function Lu(n){return new ns(n)}function hA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function PE(n){return n.collectionGroup!==null}function Jl(n){const e=de(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new tt(mt.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(d=d.add(p.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Qh(l,r))}),t.has(mt.keyField().canonicalString())||e.Ee.push(new Qh(mt.keyField(),r))}return e.Ee}function kn(n){const e=de(n);return e.de||(e.de=b6(e,Jl(n))),e.de}function b6(n,e){if(n.limitType==="F")return fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Qh(a.field,l)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function mv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ep(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _d(n,e){return gd(kn(n),kn(e))&&n.limitType===e.limitType}function mC(n){return`${Ro(kn(n))}|lt:${n.limitType}`}function Fl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>cC(a)).join(", ")}]`),md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>gu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>gu(a)).join(",")),`Target(${r})`}(kn(n))}; limitType=${n.limitType})`}function yd(n,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):ce.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(n,e)&&function(r,a){for(const l of Jl(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,m){const p=oA(u,d,m);return u.inclusive?p<=0:p<0}(r.startAt,Jl(r),a)||r.endAt&&!function(u,d,m){const p=oA(u,d,m);return u.inclusive?p>=0:p>0}(r.endAt,Jl(r),a))}(n,e)}function pC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gC(n){return(e,t)=>{let r=!1;for(const a of Jl(n)){const l=I6(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function I6(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(l,u,d){const m=u.data.field(l),p=d.data.field(l);return m!==null&&p!==null?ha(m,p):pe(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ta(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return W1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6=new ot(ce.comparator);function Hn(){return A6}const _C=new ot(ce.comparator);function fh(...n){let e=_C;for(const t of n)e=e.insert(t.key,t);return e}function yC(n){let e=_C;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function vC(){return Ah()}function Ah(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const S6=new ot(ce.comparator),R6=new tt(ce.comparator);function Pe(...n){let e=R6;for(const t of n)e=e.add(t);return e}const C6=new tt(Se);function NE(){return C6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function EC(n){return{integerValue:""+n}}function TC(n,e){return z1(e)?EC(e):xE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this._=void 0}}function D6(n,e,t){return n instanceof yu?function(a,l){const u={fields:{[Z1]:{stringValue:J1},[tC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Lp(l)&&(l=Up(l)),l&&(u.fields[eC]=l),{mapValue:u}}(t,e):n instanceof Co?bC(n,e):n instanceof Do?IC(n,e):function(a,l){const u=wC(a,l),d=dA(u)+dA(a.Re);return cv(u)&&cv(a.Re)?EC(d):xE(a.serializer,d)}(n,e)}function P6(n,e,t){return n instanceof Co?bC(n,e):n instanceof Do?IC(n,e):t}function wC(n,e){return n instanceof vu?function(r){return cv(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class yu extends zp{}class Co extends zp{constructor(e){super(),this.elements=e}}function bC(n,e){const t=AC(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Do extends zp{constructor(e){super(),this.elements=e}}function IC(n,e){let t=AC(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class vu extends zp{constructor(e,t){super(),this.serializer=e,this.Re=t}}function dA(n){return dt(n.integerValue||n.doubleValue)}function AC(n){return Kh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.field=e,this.transform=t}}function N6(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Co&&a instanceof Co||r instanceof Do&&a instanceof Do?uu(r.elements,a.elements,fi):r instanceof vu&&a instanceof vu?fi(r.Re,a.Re):r instanceof yu&&a instanceof yu}(n.transform,e.transform)}class x6{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rm(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fp{}function SC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bu(n.key,pt.none()):new Uu(n.key,n.data,pt.none());{const t=n.data,r=_n.empty();let a=new tt(mt.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?r.delete(l):r.set(l,u),a=a.add(l)}return new is(n.key,r,new jn(a.toArray()),pt.none())}}function O6(n,e,t){n instanceof Uu?function(a,l,u){const d=a.value.clone(),m=mA(a.fieldTransforms,l,u.transformResults);d.setAll(m),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,l,u){if(!Rm(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=mA(a.fieldTransforms,l,u.transformResults),m=l.data;m.setAll(RC(a)),m.setAll(d),l.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof Uu?function(l,u,d,m){if(!Rm(l.precondition,u))return d;const p=l.value.clone(),y=pA(l.fieldTransforms,m,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(l,u,d,m){if(!Rm(l.precondition,u))return d;const p=pA(l.fieldTransforms,m,u),y=u.data;return y.setAll(RC(l)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(l,u,d){return Rm(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function V6(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),l=wC(r.transform,a||null);l!=null&&(t===null&&(t=_n.empty()),t.set(r.field,l))}return t||null}function fA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&uu(r,a,(l,u)=>N6(l,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uu extends Fp{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Fp{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function RC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function mA(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);r.set(l.field,P6(u,d,t[a]))}return r}function pA(n,e,t){const r=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);r.set(a.field,D6(l,u,e))}return r}class Bu extends Fp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OE extends Fp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&O6(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vC();return this.mutations.forEach(a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const m=SC(u,d);m!==null&&r.set(a.key,m),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&uu(this.mutations,e.mutations,(t,r)=>fA(t,r))&&uu(this.baseMutations,e.baseMutations,(t,r)=>fA(t,r))}}class kE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ye(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return S6}();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,r[u].version);return new kE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,Ge;function CC(n){switch(n){case K.OK:return pe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe(15467,{code:n})}}function DC(n){if(n===void 0)return kt("GRPC error has no .code"),K.UNKNOWN;switch(n){case qt.OK:return K.OK;case qt.CANCELLED:return K.CANCELLED;case qt.UNKNOWN:return K.UNKNOWN;case qt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case qt.INTERNAL:return K.INTERNAL;case qt.UNAVAILABLE:return K.UNAVAILABLE;case qt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case qt.NOT_FOUND:return K.NOT_FOUND;case qt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case qt.ABORTED:return K.ABORTED;case qt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case qt.DATA_LOSS:return K.DATA_LOSS;default:return pe(39323,{code:n})}}(Ge=qt||(qt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=new ta([4294967295,4294967295],0);function gA(n){const e=EE().encode(n),t=new A1;return t.update(e),new Uint8Array(t.digest())}function _A(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ta([t,r],0),new ta([a,l],0)]}class LE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mh(`Invalid padding: ${t}`);if(r<0)throw new mh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new mh(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ta.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(ta.fromNumber(r)));return a.compare(M6)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=gA(e),[r,a]=_A(t);for(let l=0;l<this.hashCount;l++){const u=this.we(r,a,l);if(!this.be(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new LE(l,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const t=gA(e),[r,a]=_A(t);for(let l=0;l<this.hashCount;l++){const u=this.we(r,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class mh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Td.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ed(Ee.min(),a,new ot(Se),Hn(),Pe())}}class Td{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Td(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class PC{constructor(e,t){this.targetId=e,this.Ce=t}}class NC{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class yA{constructor(){this.Fe=0,this.Me=vA(),this.xe=Dt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),r=Pe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:pe(38017,{changeType:l})}}),new Td(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=vA()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class L6{constructor(e){this.ze=e,this.je=new Map,this.He=Hn(),this.Je=nm(),this.Ye=nm(),this.Ze=new ot(Se)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:pe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Jm(l))if(r===0){const u=new ce(l.path);this.tt(t,u,ht.newNoDocument(u,Ee.min()))}else ye(r===1,20013,{expectedCount:r});else{const u=this.ut(t);if(u!==r){const d=this.ct(e),m=d?this.lt(d,e,u):1;if(m!==0){this.st(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,p)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=Ji(r).toUint8Array()}catch(m){if(m instanceof X1)return di("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new LE(u,a,l)}catch(m){return di(m instanceof mh?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.pe===0?null:d}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,u)=>{const d=this._t(u);if(d){if(l.current&&Jm(d.target)){const m=new ce(d.target.path);this.Et(m).has(u)||this.dt(u,m)||this.tt(u,m,ht.newNoDocument(m,e))}l.Le&&(t.set(u,l.qe()),l.Qe())}});let r=Pe();this.Ye.forEach((l,u)=>{let d=!0;u.forEachWhile(m=>{const p=this._t(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(l))}),this.He.forEach((l,u)=>u.setReadTime(e));const a=new Ed(e,t,this.Ze,this.He,r);return this.He=Hn(),this.Je=nm(),this.Ye=nm(),this.Ze=new ot(Se),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new yA,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new tt(Se),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new tt(Se),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new yA),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function nm(){return new ot(ce.comparator)}function vA(){return new ot(ce.comparator)}const U6={asc:"ASCENDING",desc:"DESCENDING"},B6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},z6={and:"AND",or:"OR"};class F6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pv(n,e){return n.useProto3Json||md(e)?e:{value:e}}function Eu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function q6(n,e){return Eu(n,e.toTimestamp())}function Mt(n){return ye(!!n,49232),Ee.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function UE(n,e){return gv(n,e).canonicalString()}function gv(n,e){const t=function(a){return new Be(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function OC(n){const e=Be.fromString(n);return ye(jC(e),10190,{key:e.toString()}),e}function Yh(n,e){return UE(n.databaseId,e.path)}function li(n,e){const t=OC(e);if(t.get(1)!==n.databaseId.projectId)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(MC(t))}function VC(n,e){return UE(n.databaseId,e)}function kC(n){const e=OC(n);return e.length===4?Be.emptyPath():MC(e)}function _v(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function MC(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function EA(n,e,t){return{name:Yh(n,e),fields:t.value.mapValue.fields}}function LC(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),l=e.createTime?Mt(e.createTime):Ee.min(),u=new _n({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,l,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function j6(n,e){return"found"in e?function(r,a){ye(!!a.found,43571),a.found.name,a.found.updateTime;const l=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),m=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(l,u,d,m)}(n,e):"missing"in e?function(r,a){ye(!!a.missing,3894),ye(!!a.readTime,22933);const l=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(l,u)}(n,e):pe(7234,{result:e})}function H6(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:pe(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(p,y){return p.useProto3Json?(ye(y===void 0||typeof y=="string",58123),Dt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(p){const y=p.code===void 0?K.UNKNOWN:DC(p.code);return new te(y,p.message||"")}(u);t=new NC(r,a,l,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),l=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Ee.min(),d=new _n({mapValue:{fields:r.document.fields}}),m=ht.newFoundDocument(a,l,u,d),p=r.targetIds||[],y=r.removedTargetIds||[];t=new Cm(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),l=r.readTime?Mt(r.readTime):Ee.min(),u=ht.newNoDocument(a,l),d=r.removedTargetIds||[];t=new Cm([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),l=r.removedTargetIds||[];t=new Cm([],l,a,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,u=new k6(a,l),d=r.targetId;t=new PC(d,u)}}return t}function Wh(n,e){let t;if(e instanceof Uu)t={update:EA(n,e.key,e.value)};else if(e instanceof Bu)t={delete:Yh(n,e.key)};else if(e instanceof is)t={update:EA(n,e.key,e.data),updateMask:W6(e.fieldMask)};else{if(!(e instanceof OE))return pe(16599,{ft:e.type});t={verify:Yh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,u){const d=u.transform;if(d instanceof yu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Do)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof vu)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw pe(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:q6(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:pe(27497)}(n,e.precondition)),t}function yv(n,e){const t=e.currentDocument?function(l){return l.updateTime!==void 0?pt.updateTime(Mt(l.updateTime)):l.exists!==void 0?pt.exists(l.exists):pt.none()}(e.currentDocument):pt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let m=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),m=new yu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];m=new Co(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];m=new Do(y)}else"increment"in d?m=new vu(u,d.increment):pe(16584,{proto:d});const p=mt.fromServerFormat(d.fieldPath);return new vd(p,m)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),l=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(m){const p=m.fieldPaths||[];return new jn(p.map(y=>mt.fromServerFormat(y)))}(e.updateMask);return new is(a,l,u,t,r)}return new Uu(a,l,t,r)}if(e.delete){const a=li(n,e.delete);return new Bu(a,t)}if(e.verify){const a=li(n,e.verify);return new OE(a,t)}return pe(1463,{proto:e})}function G6(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(a,l){let u=a.updateTime?Mt(a.updateTime):Mt(l);return u.isEqual(Ee.min())&&(u=Mt(l)),new x6(u,a.transformResults||[])}(t,e))):[]}function UC(n,e){return{documents:[VC(n,e.path)]}}function BC(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=VC(n,a);const l=function(p){if(p.length!==0)return qC(et.create(p,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:ql(w.field),direction:K6(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=pv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{gt:t,parent:a}}function zC(n){let e=kC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ye(r===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(v){const w=FC(v);return w instanceof et&&DE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(P){return new Qh(jl(P.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,md(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(v){const w=!!v.before,S=v.values||[];return new da(S,w)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const w=!v.before,S=v.values||[];return new da(S,w)}(t.endAt)),fC(e,a,u,l,d,"F",m,p)}function $6(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function FC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jl(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=jl(t.unaryFilter.field);return ze.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=jl(t.unaryFilter.field);return ze.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jl(t.unaryFilter.field);return ze.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}}(n):n.fieldFilter!==void 0?function(t){return ze.create(jl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(r=>FC(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return pe(1026)}}(t.compositeFilter.op))}(n):pe(30097,{filter:n})}function K6(n){return U6[n]}function Q6(n){return B6[n]}function Y6(n){return z6[n]}function ql(n){return{fieldPath:n.canonicalString()}}function jl(n){return mt.fromServerFormat(n.fieldPath)}function qC(n){return n instanceof ze?function(t){if(t.op==="=="){if(iA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NAN"}};if(rA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NOT_NAN"}};if(rA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ql(t.field),op:Q6(t.op),value:t.value}}}(n):n instanceof et?function(t){const r=t.getFilters().map(a=>qC(a));return r.length===1?r[0]:{compositeFilter:{op:Y6(t.op),filters:r}}}(n):pe(54877,{filter:n})}function W6(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,a,l=Ee.min(),u=Ee.min(),d=Dt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.wt=e}}function X6(n,e){let t;if(e.document)t=LC(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=No(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return pe(56709);{const r=ce.fromSegments(e.unknownDocument.path),a=No(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const l=new gt(a[0],a[1]);return Ee.fromTimestamp(l)}(e.readTime)),t}function TA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:tp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(l,u){return{name:Yh(l,u.key),fields:u.data.value.mapValue.fields,updateTime:Eu(l,u.version.toTimestamp()),createTime:Eu(l,u.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Po(e.version)};else{if(!e.isUnknownDocument())return pe(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Po(e.version)}}return r}function tp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Po(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function No(n){const e=new gt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(l=>yv(n.wt,l));for(let l=0;l<e.mutations.length-1;++l){const u=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const d=e.mutations[l+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const r=e.mutations.map(l=>yv(n.wt,l)),a=gt.fromMillis(e.localWriteTimeMs);return new VE(e.batchId,a,t,r)}function ph(n){const e=No(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?No(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=function(l){return l.documents!==void 0}(n.query)?function(l){const u=l.documents.length;return ye(u===1,1966,{count:u}),kn(Lu(kC(l.documents[0])))}(n.query):function(l){return kn(zC(l))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function GC(n,e){const t=Po(e.snapshotVersion),r=Po(e.lastLimboFreeSnapshotVersion);let a;a=Jm(e.target)?UC(n.wt,e.target):BC(n.wt,e.target).gt;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ro(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function BE(n){const e=zC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ep(e,e.limit,"L"):e}function Ry(n,e){return new ME(e.largestBatchId,yv(n.wt,e.overlayMutation))}function wA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function bA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Po(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{getBundleMetadata(e,t){return IA(e).get(t).next(r=>{if(r)return function(l){return{id:l.bundleId,createTime:No(l.createTime),version:l.version}}(r)})}saveBundleMetadata(e,t){return IA(e).put(function(a){return{bundleId:a.id,createTime:Po(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return AA(e).get(t).next(r=>{if(r)return function(l){return{name:l.name,query:BE(l.bundledQuery),readTime:No(l.readTime)}}(r)})}saveNamedQuery(e,t){return AA(e).put(function(a){return{name:a.name,readTime:Po(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function IA(n){return Jt(n,Vp)}function AA(n){return Jt(n,kp)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const r=t.uid||"";return new qp(e,r)}getOverlay(e,t){return rh(e).get(wA(this.userId,t)).next(r=>r?Ry(this.serializer,r):null)}getOverlays(e,t){const r=ai();return q.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((l,u)=>{const d=new ME(t,u);a.push(this.St(e,d))}),q.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const l=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);l.push(rh(e).X(av,d))}),q.waitFor(l)}getOverlaysForCollection(e,t,r){const a=ai(),l=An(t),u=IDBKeyRange.bound([this.userId,l,r],[this.userId,l,Number.POSITIVE_INFINITY],!0);return rh(e).J(av,u).next(d=>{for(const m of d){const p=Ry(this.serializer,m);a.set(p.getKey(),p)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const l=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rh(e).te({index:$1,range:d},(m,p,y)=>{const v=Ry(this.serializer,p);l.size()<a||v.largestBatchId===u?(l.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>l)}St(e,t){return rh(e).put(function(a,l,u){const[d,m,p]=wA(l,u.mutation.key);return{userId:l,collectionPath:m,documentId:p,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Wh(a.wt,u.mutation)}}(this.serializer,this.userId,t))}}function rh(n){return Jt(n,Mp)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{Dt(e){return Jt(e,AE)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),Fh(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Xi(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Ji(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?rC(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Bp(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):pe(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const a of Object.keys(r))this.Nt(a,t),this.Ct(r[a],t)}qt(e,t){var r,a;const l=e.fields||{};this.Mt(t,53);const u=pu,d=((a=(r=l[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(dt(d)),this.Nt(u,t),this.Ct(l[u],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const a of r)this.Ct(a,t)}kt(e,t){this.Mt(t,37),ce.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}lo.Wt=new lo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=255;function e9(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function SA(n){const e=64-function(r){let a=0;for(let l=0;l<8;++l){const u=e9(255&r[l]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class t9{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),r=SA(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),r=SA(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(Ml),this._n(255)}an(){this.un(Ml),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(l){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,l,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Ml?(this._n(Ml),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Ml?(this.un(Ml),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class n9{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class r9{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class ih{constructor(){this.ln=new t9,this.hn=new n9(this.ln),this.Pn=new r9(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new uo(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=RA(n.arrayValue,e.arrayValue),t!==0?t:(t=RA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function RA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.En=new tt((t,r)=>mt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const r=t;r.isInequality()?this.En=this.En.add(r):this.An.push(r)}}get Rn(){return this.En.size>1}Vn(e){if(ye(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=rv(e);if(t!==void 0&&!this.mn(t))return!1;const r=io(e);let a=new Set,l=0,u=0;for(;l<r.length&&this.mn(r[l]);++l)a=a.add(r[l].fieldPath.canonicalString());if(l===r.length)return!0;if(this.En.size>0){const d=this.En.getIterator().getNext();if(!a.has(d.field.canonicalString())){const m=r[l];if(!this.fn(d,m)||!this.gn(this.dn[u++],m))return!1}++l}for(;l<r.length;++l){const d=r[l];if(u>=this.dn.length||!this.gn(this.dn[u++],d))return!1}return!0}pn(){if(this.Rn)return null;let e=new tt(mt.comparator);const t=[];for(const r of this.An)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Tm(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Tm(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Tm(r.field,r.dir==="asc"?0:1)));return new $m($m.UNKNOWN_ID,this.collectionId,t,zh.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){var e,t;if(ye(n instanceof ze||n instanceof et,20012),n instanceof ze){if(n instanceof dC){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(l=>ze.create(n.field,"==",l)))||[];return et.create(a,"or")}return n}const r=n.filters.map(a=>$C(a));return et.create(r,n.op)}function i9(n){if(n.getFilters().length===0)return[];const e=Tv($C(n));return ye(KC(e),7391),vv(e)||Ev(e)?[e]:e.getFilters()}function vv(n){return n instanceof ze}function Ev(n){return n instanceof et&&DE(n)}function KC(n){return vv(n)||Ev(n)||function(t){if(t instanceof et&&hv(t)){for(const r of t.getFilters())if(!vv(r)&&!Ev(r))return!1;return!0}return!1}(n)}function Tv(n){if(ye(n instanceof ze||n instanceof et,34018),n instanceof ze)return n;if(n.filters.length===1)return Tv(n.filters[0]);const e=n.filters.map(r=>Tv(r));let t=et.create(e,n.op);return t=np(t),KC(t)?t:(ye(t instanceof et,64498),ye(_u(t),40251),ye(t.filters.length>1,57927),t.filters.reduce((r,a)=>zE(r,a)))}function zE(n,e){let t;return ye(n instanceof ze||n instanceof et,38388),ye(e instanceof ze||e instanceof et,25473),t=n instanceof ze?e instanceof ze?function(a,l){return et.create([a,l],"and")}(n,e):DA(n,e):e instanceof ze?DA(e,n):function(a,l){if(ye(a.filters.length>0&&l.filters.length>0,48005),_u(a)&&_u(l))return uC(a,l.getFilters());const u=hv(a)?a:l,d=hv(a)?l:a,m=u.filters.map(p=>zE(p,d));return et.create(m,"or")}(n,e),np(t)}function DA(n,e){if(_u(e))return uC(e,n.getFilters());{const t=e.filters.map(r=>zE(n,r));return et.create(t,"or")}}function np(n){if(ye(n instanceof ze||n instanceof et,11850),n instanceof ze)return n;const e=n.getFilters();if(e.length===1)return np(e[0]);if(oC(n))return n;const t=e.map(a=>np(a)),r=[];return t.forEach(a=>{a instanceof ze?r.push(a):a instanceof et&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:et.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(){this.yn=new FE}addToCollectionParentIndex(e,t){return this.yn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(nr.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class FE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new tt(Be.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new tt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="IndexedDbIndexManager",rm=new Uint8Array(0);class a9{constructor(e,t){this.databaseId=t,this.wn=new FE,this.bn=new rs(r=>Ro(r),(r,a)=>gd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const l={collectionId:r,parent:An(a)};return NA(e).put(l)}return q.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[V1(t),""],!1,!0);return NA(e).J(a).next(l=>{for(const u of l){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=sh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(m=>[m.fieldPath.canonicalString(),m.kind])}}(t);delete a.indexId;const l=r.add(a);if(t.indexState){const u=Ul(e);return l.next(d=>{u.put(bA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){const r=sh(e),a=Ul(e),l=Ll(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sh(e),r=Ll(e),a=Ul(e);return t.X().next(()=>r.X()).next(()=>a.X())}createTargetIndexes(e,t){return q.forEach(this.Sn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const l=new CA(r).pn();if(l!=null)return this.addFieldIndex(e,l)}}))}getDocumentsMatchingTarget(e,t){const r=Ll(e);let a=!0;const l=new Map;return q.forEach(this.Sn(t),u=>this.Dn(e,u).next(d=>{a&&(a=!!d),l.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return q.forEach(l,(m,p)=>{re(PA,`Using index ${function(G){return`id=${G.indexId}|cg=${G.collectionGroup}|f=${G.fields.map(ae=>`${ae.fieldPath}:${ae.kind}`).join(",")}`}(m)} to execute ${Ro(t)}`);const y=function(G,ae){const ie=rv(ae);if(ie===void 0)return null;for(const le of Zm(G,ie.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(p,m),v=function(G,ae){const ie=new Map;for(const le of io(ae))for(const D of Zm(G,le.fieldPath))switch(D.op){case"==":case"in":ie.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ie.set(le.fieldPath.canonicalString(),D.value),Array.from(ie.values())}return null}(p,m),w=function(G,ae){const ie=[];let le=!0;for(const D of io(ae)){const R=D.kind===0?uA(G,D.fieldPath,G.startAt):cA(G,D.fieldPath,G.startAt);ie.push(R.value),le&&(le=R.inclusive)}return new da(ie,le)}(p,m),S=function(G,ae){const ie=[];let le=!0;for(const D of io(ae)){const R=D.kind===0?cA(G,D.fieldPath,G.endAt):uA(G,D.fieldPath,G.endAt);ie.push(R.value),le&&(le=R.inclusive)}return new da(ie,le)}(p,m),P=this.vn(m,p,w),M=this.vn(m,p,S),U=this.Cn(m,p,v),j=this.Fn(m.indexId,y,P,w.inclusive,M,S.inclusive,U);return q.forEach(j,Y=>r.Z(Y,t.limit).next(G=>{G.forEach(ae=>{const ie=ce.fromSegments(ae.documentKey);u.has(ie)||(u=u.add(ie),d.push(ie))})}))}).next(()=>d)}return q.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=i9(et.create(e.filters,"and")).map(r=>fv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,r,a,l,u,d){const m=(t!=null?t.length:1)*Math.max(r.length,l.length),p=m/(t!=null?t.length:1),y=[];for(let v=0;v<m;++v){const w=t?this.Mn(t[v/p]):rm,S=this.xn(e,w,r[v%p],a),P=this.On(e,w,l[v%p],u),M=d.map(U=>this.xn(e,w,U,!0));y.push(...this.createRange(S,P,M))}return y}xn(e,t,r,a){const l=new uo(e,ce.empty(),t,r);return a?l:l.In()}On(e,t,r,a){const l=new uo(e,ce.empty(),t,r);return a?l.In():l}Dn(e,t){const r=new CA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(l=>{let u=null;for(const d of l)r.Vn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.Sn(t);return q.forEach(a,l=>this.Dn(e,l).next(u=>{u?r!==0&&u.fields.length<function(m){let p=new tt(mt.comparator),y=!1;for(const v of m.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:p=p.add(w.field));for(const v of m.orderBy)v.field.isKeyField()||(p=p.add(v.field));return p.size+(y?1:0)}(l)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}Nn(e,t){const r=new ih;for(const a of io(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const u=r.Tn(a.kind);lo.Wt.vt(l,u)}return r.cn()}Mn(e){const t=new ih;return lo.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const r=new ih;return lo.Wt.vt(So(this.databaseId,t),r.Tn(function(l){const u=io(l);return u.length===0?0:u[u.length-1].kind}(e))),r.cn()}Cn(e,t,r){if(r===null)return[];let a=[];a.push(new ih);let l=0;for(const u of io(e)){const d=r[l++];for(const m of a)if(this.Ln(t,u.fieldPath)&&Kh(d))a=this.kn(a,u,d);else{const p=m.Tn(u.kind);lo.Wt.vt(d,p)}}return this.qn(a)}vn(e,t,r){return this.Cn(e,t,r.position)}qn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}kn(e,t,r){const a=[...e],l=[];for(const u of r.arrayValue.values||[])for(const d of a){const m=new ih;m.seed(d.cn()),lo.Wt.vt(u,m.Tn(t.kind)),l.push(m)}return l}Ln(e,t){return!!e.filters.find(r=>r instanceof ze&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=sh(e),a=Ul(e);return(t?r.J(sv,IDBKeyRange.bound(t,t)):r.J()).next(l=>{const u=[];return q.forEach(l,d=>a.get([d.indexId,this.uid]).next(m=>{u.push(function(y,v){const w=v?new zh(v.sequenceNumber,new nr(No(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):zh.empty(),S=y.fields.map(([P,M])=>new Tm(mt.fromServerFormat(P),M));return new $m(y.indexId,y.collectionGroup,S,w)}(d,m))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const l=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Se(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=sh(e),l=Ul(e);return this.Qn(e).next(u=>a.J(sv,IDBKeyRange.bound(t,t)).next(d=>q.forEach(d,m=>l.put(bA(m.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return q.forEach(t,(a,l)=>{const u=r.get(a.collectionGroup);return(u?q.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),q.forEach(d,m=>this.$n(e,a,m).next(p=>{const y=this.Un(l,m);return p.isEqual(y)?q.resolve():this.Kn(e,l,m,p,y)}))))})}Wn(e,t,r,a){return Ll(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Bn(r,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,r,a){return Ll(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Bn(r,t.key),t.key.path.toArray()])}$n(e,t,r){const a=Ll(e);let l=new tt(Hs);return a.te({index:G1,range:IDBKeyRange.only([r.indexId,this.uid,this.Bn(r,t)])},(u,d)=>{l=l.add(new uo(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>l)}Un(e,t){let r=new tt(Hs);const a=this.Nn(t,e);if(a==null)return r;const l=rv(t);if(l!=null){const u=e.data.field(l.fieldPath);if(Kh(u))for(const d of u.arrayValue.values||[])r=r.add(new uo(t.indexId,e.key,this.Mn(d),a))}else r=r.add(new uo(t.indexId,e.key,rm,a));return r}Kn(e,t,r,a,l){re(PA,"Updating index entries for document '%s'",t.key);const u=[];return function(m,p,y,v,w){const S=m.getIterator(),P=p.getIterator();let M=kl(S),U=kl(P);for(;M||U;){let j=!1,Y=!1;if(M&&U){const G=y(M,U);G<0?Y=!0:G>0&&(j=!0)}else M!=null?Y=!0:j=!0;j?(v(U),U=kl(P)):Y?(w(M),M=kl(S)):(M=kl(S),U=kl(P))}}(a,l,Hs,d=>{u.push(this.Wn(e,t,r,d))},d=>{u.push(this.Gn(e,t,r,d))}),q.waitFor(u)}Qn(e){let t=1;return Ul(e).te({index:H1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,l)=>{l.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,m)=>!d||Hs(u,m[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),m=Hs(u,t);if(d===0)a[0]=e.In();else if(d>0&&m<0)a.push(u),a.push(u.In());else if(m>0)break}a.push(t);const l=[];for(let u=0;u<a.length;u+=2){if(this.zn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,rm,[]],m=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,rm,[]];l.push(IDBKeyRange.bound(d,m))}return l}zn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(xA)}getMinOffset(e,t){return q.mapArray(this.Sn(t),r=>this.Dn(e,r).next(a=>a||pe(44426))).next(xA)}}function NA(n){return Jt(n,Hh)}function Ll(n){return Jt(n,Xm)}function sh(n){return Jt(n,IE)}function Ul(n){return Jt(n,Wm)}function xA(n){ye(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;TE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},QC=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(n,e,t){const r=n.store(Pr),a=n.store(hu),l=[],u=IDBKeyRange.only(t.batchId);let d=0;const m=r.te({range:u},(y,v,w)=>(d++,w.delete()));l.push(m.next(()=>{ye(d===1,47070,{batchId:t.batchId})}));const p=[];for(const y of t.mutations){const v=F1(e,y.key.path,t.batchId);l.push(a.delete(v)),p.push(y.key)}return q.waitFor(l).next(()=>p)}function rp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw pe(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(QC,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class jp{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.jn={}}static bt(e,t,r,a){ye(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new jp(l,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).te({index:mo,range:r},(a,l,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const l=Hl(e),u=Gs(e);return u.add({}).next(d=>{ye(typeof d=="number",49019);const m=new VE(d,t,r,a),p=function(S,P,M){const U=M.baseMutations.map(Y=>Wh(S.wt,Y)),j=M.mutations.map(Y=>Wh(S.wt,Y));return{userId:P,batchId:M.batchId,localWriteTimeMs:M.localWriteTime.toMillis(),baseMutations:U,mutations:j}}(this.serializer,this.userId,m),y=[];let v=new tt((w,S)=>Se(w.canonicalString(),S.canonicalString()));for(const w of a){const S=F1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(p)),y.push(l.put(S,z4))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.jn[d]=m.keys()}),q.waitFor(y).next(()=>m)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(ye(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),oo(this.serializer,r)):null)}Hn(e,t){return this.jn[t]?q.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.jn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let l=null;return Gs(e).te({index:mo,range:a},(u,d,m)=>{d.userId===this.userId&&(ye(d.batchId>=r,47524,{Jn:r}),l=oo(this.serializer,d)),m.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=na;return Gs(e).te({index:mo,range:t,reverse:!0},(a,l,u)=>{r=l.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,na],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).J(mo,t).next(r=>r.map(a=>oo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=wm(this.userId,t.path),a=IDBKeyRange.lowerBound(r),l=[];return Hl(e).te({range:a},(u,d,m)=>{const[p,y,v]=u,w=si(y);if(p===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw pe(61480,{Yn:u,batchId:v});ye(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:v}),l.push(oo(this.serializer,S))});m.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tt(Se);const a=[];return t.forEach(l=>{const u=wm(this.userId,l.path),d=IDBKeyRange.lowerBound(u),m=Hl(e).te({range:d},(p,y,v)=>{const[w,S,P]=p,M=si(S);w===this.userId&&l.path.isEqual(M)?r=r.add(P):v.done()});a.push(m)}),q.waitFor(a).next(()=>this.Zn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,l=wm(this.userId,r),u=IDBKeyRange.lowerBound(l);let d=new tt(Se);return Hl(e).te({range:u},(m,p,y)=>{const[v,w,S]=m,P=si(w);v===this.userId&&r.isPrefixOf(P)?P.length===a&&(d=d.add(S)):y.done()}).next(()=>this.Zn(e,d))}Zn(e,t){const r=[],a=[];return t.forEach(l=>{a.push(Gs(e).get(l).next(u=>{if(u===null)throw pe(35274,{batchId:l});ye(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:l}),r.push(oo(this.serializer,u))}))}),q.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return YC(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),q.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return q.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Hl(e).te({range:r},(l,u,d)=>{if(l[0]===this.userId){const m=si(l[1]);a.push(m)}else d.done()}).next(()=>{ye(a.length===0,56720,{er:a.map(l=>l.canonicalString())})})})}containsKey(e,t){return WC(e,this.userId,t)}tr(e){return XC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:na,lastStreamToken:""})}}function WC(n,e,t){const r=wm(e,t.path),a=r[1],l=IDBKeyRange.lowerBound(r);let u=!1;return Hl(n).te({range:l,ee:!0},(d,m,p)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),p.done()}).next(()=>u)}function Gs(n){return Jt(n,Pr)}function Hl(n){return Jt(n,hu)}function XC(n){return Jt(n,qh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new xo(0)}static ir(){return new xo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const r=new xo(t.highestTargetId);return t.highestTargetId=r.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Ee.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.sr(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this._r(e,a)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(r=>(r.targetCount+=1,this.ur(t,r),this._r(e,r))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Bl(e).delete(t.targetId)).next(()=>this.sr(e)).next(r=>(ye(r.targetCount>0,8065),r.targetCount-=1,this._r(e,r)))}removeTargets(e,t,r){let a=0;const l=[];return Bl(e).te((u,d)=>{const m=ph(d);m.sequenceNumber<=t&&r.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))}).next(()=>q.waitFor(l)).next(()=>a)}forEachTarget(e,t){return Bl(e).te((r,a)=>{const l=ph(a);t(l)})}sr(e){return VA(e).get(Ym).next(t=>(ye(t!==null,2888),t))}_r(e,t){return VA(e).put(Ym,t)}ar(e,t){return Bl(e).put(GC(this.serializer,t))}ur(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ro(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let l=null;return Bl(e).te({range:a,index:j1},(u,d,m)=>{const p=ph(d);gd(t,p.target)&&(l=p,m.done())}).next(()=>l)}addMatchingKeys(e,t,r){const a=[],l=Ys(e);return t.forEach(u=>{const d=An(u.path);a.push(l.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),q.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ys(e);return q.forEach(t,l=>{const u=An(l.path);return q.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,l)])})}removeMatchingKeysForTargetId(e,t){const r=Ys(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ys(e);let l=Pe();return a.te({range:r,ee:!0},(u,d,m)=>{const p=si(u[1]),y=new ce(p);l=l.add(y)}).next(()=>l)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[V1(r)],!1,!0);let l=0;return Ys(e).te({index:bE,ee:!0,range:a},([u,d],m,p)=>{u!==0&&(l++,p.done())}).next(()=>l>0)}Rt(e,t){return Bl(e).get(t).next(r=>r?ph(r):null)}}function Bl(n){return Jt(n,du)}function VA(n){return Jt(n,wo)}function Ys(n){return Jt(n,fu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="LruGarbageCollector",l9=1048576;function MA([n,e],[t,r]){const a=Se(n,t);return a===0?Se(e,r):a}class u9{constructor(e){this.cr=e,this.buffer=new tt(MA),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();MA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JC{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){re(kA,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ea(t)?re(kA,"Ignoring IndexedDB error during garbage collection: ",t):await va(t)}await this.Ir(3e5)})}}class c9{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return q.resolve(qn.le);const r=new u9(t);return this.Er.forEachTarget(e,a=>r.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>r.Pr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(OA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),OA):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,a,l,u,d,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(l=v,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),zl()<=Ue.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${v} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:v})))}}function ZC(n,e){return new c9(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,t){this.db=e,this.garbageCollector=ZC(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(r,a)=>t(a))}addReference(e,t,r){return im(e,r)}removeReference(e,t,r){return im(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return im(e,t)}gr(e,t){return function(a,l){let u=!1;return XC(a).ne(d=>WC(a,d,l).next(m=>(m&&(u=!0),q.resolve(!m)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.mr(e,(u,d)=>{if(d<=t){const m=this.gr(e,u).next(p=>{if(!p)return l++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Ee.min()),Ys(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(m)}}).next(()=>q.waitFor(a)).next(()=>r.apply(e)).next(()=>l)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return im(e,t)}mr(e,t){const r=Ys(e);let a,l=qn.le;return r.te({index:bE},([u,d],{path:m,sequenceNumber:p})=>{u===0?(l!==qn.le&&t(new ce(si(a)),l),l=p,a=m):l=qn.le}).next(()=>{l!==qn.le&&t(new ce(si(a)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function im(n,e){return Ys(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return no(e).put(r)}removeEntry(e,t,r){return no(e).delete(function(l,u){const d=l.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],tp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.pr(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return no(e).te({index:bm,range:IDBKeyRange.only(ah(t))},(a,l)=>{r=this.yr(t,l)}).next(()=>r)}wr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return no(e).te({index:bm,range:IDBKeyRange.only(ah(t))},(a,l)=>{r={document:this.yr(t,l),size:rp(l)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.br(e,t,(a,l)=>{const u=this.yr(a,l);r=r.insert(a,u)}).next(()=>r)}Sr(e,t){let r=Hn(),a=new ot(ce.comparator);return this.br(e,t,(l,u)=>{const d=this.yr(l,u);r=r.insert(l,d),a=a.insert(l,rp(u))}).next(()=>({documents:r,Dr:a}))}br(e,t,r){if(t.isEmpty())return q.resolve();let a=new tt(BA);t.forEach(m=>a=a.add(m));const l=IDBKeyRange.bound(ah(a.first()),ah(a.last())),u=a.getIterator();let d=u.getNext();return no(e).te({index:bm,range:l},(m,p,y)=>{const v=ce.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;d&&BA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,p),d=u.hasNext()?u.getNext():null),d?y.H(ah(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,l){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),tp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],m=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return no(e).J(IDBKeyRange.bound(d,m,!0)).next(p=>{l==null||l.incrementDocumentReadCount(p.length);let y=Hn();for(const v of p){const w=this.yr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(yd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let l=Hn();const u=UA(t,r),d=UA(t,nr.max());return no(e).te({index:q1,range:IDBKeyRange.bound(u,d,!0)},(m,p,y)=>{const v=this.yr(ce.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);l=l.insert(v.key,v),l.size===a&&y.done()}).next(()=>l)}newChangeBuffer(e){return new f9(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return LA(e).get(iv).next(t=>(ye(!!t,20021),t))}pr(e,t){return LA(e).put(iv,t)}yr(e,t){if(t){const r=X6(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return ht.newInvalidDocument(e)}}function tD(n){return new d9(n)}class f9 extends eD{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new tt((l,u)=>Se(l.canonicalString(),u.canonicalString()));return this.changes.forEach((l,u)=>{const d=this.Cr.get(l);if(t.push(this.vr.removeEntry(e,l,d.readTime)),u.isValidDocument()){const m=TA(this.vr.serializer,u);a=a.add(l.path.popLast());const p=rp(m);r+=p-d.size,t.push(this.vr.addEntry(e,l,m))}else if(r-=d.size,this.trackRemovals){const m=TA(this.vr.serializer,u.convertToNoDocument(Ee.min()));t.push(this.vr.addEntry(e,l,m))}}),a.forEach(l=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,l))}),t.push(this.vr.updateMetadata(e,r)),q.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(r=>(this.Cr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:r,Dr:a})=>(a.forEach((l,u)=>{this.Cr.set(l,{size:u,readTime:r.get(l).readTime})}),r))}}function LA(n){return Jt(n,jh)}function no(n){return Jt(n,Qm)}function ah(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function UA(n,e){const t=e.documentKey.path.toArray();return[n,tp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function BA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<r.length-2;++l)if(a=Se(t[l],r[l]),a)return a;return a=Se(t.length,r.length),a||(a=Se(t[t.length-2],r[r.length-2]),a||Se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,jn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let u=fh();return l.forEach((d,m)=>{u=u.insert(d,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let l=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((m,p)=>{const y=r.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof is)?l=l.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),Sh(y.mutation,p,y.mutation.getFieldMask(),gt.now())):u.set(p.key,jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var v;return d.set(p,new m9(y,(v=u.get(p))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new ot((u,d)=>u-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=r.get(m)||jn.empty();y=d.applyToLocalView(p,y),r.set(m,y);const v=(a.get(d.batchId)||Pe()).add(m);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),p=m.key,y=m.value,v=vC();y.forEach(w=>{if(!l.has(w)){const S=SC(t.get(w),r.get(w));S!==null&&v.set(w,S),l=l.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,v))}return q.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):PE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):q.resolve(ai());let d=cu,m=l;return u.next(p=>q.forEach(p,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),l.get(y)?q.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,p,l)).next(()=>this.computeViews(e,m,p,Pe())).next(y=>({batchId:d,changes:yC(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,l).next(d=>q.forEach(d,m=>{const p=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,p,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(u=>{l.forEach((m,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let d=fh();return u.forEach((m,p)=>{const y=l.get(m);y!==void 0&&Sh(y.mutation,p,jn.empty(),gt.now()),yd(t,p)&&(d=d.insert(m,p))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return q.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:BE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(){this.overlays=new ot(ce.comparator),this.Or=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return q.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.St(e,t,l)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Or.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),l=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const m=d.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===l&&m.largestBatchId>r&&a.set(m.getKey(),m)}return q.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ot((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=l.get(p.largestBatchId);y===null&&(y=ai(),l=l.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const d=ai(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>d.set(p,y)),!(d.size()>=a)););return q.resolve(d)}St(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Or.get(a.largestBatchId).delete(r.key);this.Or.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ME(t,r));let l=this.Or.get(t);l===void 0&&(l=Pe(),this.Or.set(t,l)),this.Or.set(t,l.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.Nr=new tt(ln.Br),this.Lr=new tt(ln.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new ln(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1),l=[];return this.Lr.forEachInRange([r,a],u=>{this.Qr(u),l.push(u.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1);let l=Pe();return this.Lr.forEachInRange([r,a],u=>{l=l.add(u.key)}),l}containsKey(e){const t=new ln(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return ce.comparator(e.key,t.key)||Se(e.Gr,t.Gr)}static kr(e,t){return Se(e.Gr,t.Gr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new tt(ln.Br)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new VE(l,t,r,a);this.mutationQueue.push(u);for(const d of a)this.zr=this.zr.add(new ln(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return q.resolve(u)}lookupMutationBatch(e,t){return q.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Hr(r),l=a<0?0:a;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?na:this.Jn-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([r,a],u=>{const d=this.jr(u.Gr);l.push(d)}),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tt(Se);return t.forEach(a=>{const l=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,u],d=>{r=r.add(d.Gr)})}),q.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;ce.isDocumentKey(l)||(l=l.child(""));const u=new ln(new ce(l),0);let d=new tt(Se);return this.zr.forEachWhile(m=>{const p=m.key.path;return!!r.isPrefixOf(p)&&(p.length===a&&(d=d.add(m.Gr)),!0)},u),q.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(r=>{const a=this.jr(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ye(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return q.forEach(t.mutations,a=>{const l=new ln(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new ln(t,0),a=this.zr.firstAfterOrEqual(r);return q.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(e){this.Zr=e,this.docs=function(){return new ot(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,u=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():ht.newInvalidDocument(a))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||TE(M1(y),r)<=0||(a.has(y.key)||yd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,r,a){pe(9500)}Xr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new E9(this)}getSize(e){return q.resolve(this.size)}}class E9 extends eD{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(e){this.persistence=e,this.ei=new rs(t=>Ro(t),gd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ti=0,this.ni=new qE,this.targetCount=0,this.ri=xo.rr()}forEachTarget(e,t){return this.ei.forEach((r,a)=>t(a)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),q.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.ar(t),q.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ei.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),q.waitFor(l).next(()=>a)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(u=>{l.push(a.markPotentiallyOrphaned(e,u))}),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t){this.ii={},this.overlays={},this.si=new qn(0),this.oi=!1,this.oi=!0,this._i=new _9,this.referenceDelegate=e(this),this.ai=new T9(this),this.indexManager=new s9,this.remoteDocumentCache=function(a){return new v9(a)}(r=>this.referenceDelegate.ui(r)),this.serializer=new HC(t),this.ci=new p9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new y9(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new w9(this.si.next());return this.referenceDelegate.li(),r(a).next(l=>this.referenceDelegate.hi(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Pi(e,t){return q.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class w9 extends U1{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Ti=new qE,this.Ii=null}static Ei(e){return new Hp(e)}get di(){if(this.Ii)return this.Ii;throw pe(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.di.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.di,r=>{const a=ce.fromPath(r);return this.Ai(e,a).next(l=>{l||t.removeEntry(a,Ee.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return q.or([()=>q.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class ip{constructor(e,t){this.persistence=e,this.Ri=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=ZC(this,t)}static Ei(e,t){return new ip(e,t)}li(){}hi(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return q.forEach(this.Ri,(r,a)=>this.gr(e,r,a).next(l=>l?q.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.Xr(e,u=>this.gr(e,u,t).next(d=>{d||(r++,l.removeEntry(u,Ee.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),q.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Am(e.data.value)),t}gr(e,t,r){return q.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return q.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(e){this.serializer=e}q(e,t,r,a){const l=new Op("createOrUpgrade",t);r<1&&a>=1&&(function(m){m.createObjectStore(pd)}(e),function(m){m.createObjectStore(qh,{keyPath:B4}),m.createObjectStore(Pr,{keyPath:XI,autoIncrement:!0}).createIndex(mo,JI,{unique:!0}),m.createObjectStore(hu)}(e),zA(e),function(m){m.createObjectStore(so)}(e));let u=q.resolve();return r<3&&a>=3&&(r!==0&&(function(m){m.deleteObjectStore(fu),m.deleteObjectStore(du),m.deleteObjectStore(wo)}(e),zA(e)),u=u.next(()=>function(m){const p=m.store(wo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return p.put(Ym,y)}(l))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(m,p){return p.store(Pr).J().next(v=>{m.deleteObjectStore(Pr),m.createObjectStore(Pr,{keyPath:XI,autoIncrement:!0}).createIndex(mo,JI,{unique:!0});const w=p.store(Pr),S=v.map(P=>w.put(P));return q.waitFor(S)})}(e,l))),u=u.next(()=>{(function(m){m.createObjectStore(mu,{keyPath:Q4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this.Vi(l))),r<6&&a>=6&&(u=u.next(()=>(function(m){m.createObjectStore(jh)}(e),this.mi(l)))),r<7&&a>=7&&(u=u.next(()=>this.fi(l))),r<8&&a>=8&&(u=u.next(()=>this.gi(e,l))),r<9&&a>=9&&(u=u.next(()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.pi(l))),r<11&&a>=11&&(u=u.next(()=>{(function(m){m.createObjectStore(Vp,{keyPath:Y4})})(e),function(m){m.createObjectStore(kp,{keyPath:W4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(m){const p=m.createObjectStore(Mp,{keyPath:r6});p.createIndex(av,i6,{unique:!1}),p.createIndex($1,s6,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(m){const p=m.createObjectStore(Qm,{keyPath:F4});p.createIndex(bm,q4),p.createIndex(q1,j4)}(e)).next(()=>this.yi(e,l)).next(()=>e.deleteObjectStore(so))),r<14&&a>=14&&(u=u.next(()=>this.wi(e,l))),r<15&&a>=15&&(u=u.next(()=>function(m){m.createObjectStore(IE,{keyPath:X4,autoIncrement:!0}).createIndex(sv,J4,{unique:!1}),m.createObjectStore(Wm,{keyPath:Z4}).createIndex(H1,e6,{unique:!1}),m.createObjectStore(Xm,{keyPath:t6}).createIndex(G1,n6,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Wm).clear()}).next(()=>{t.objectStore(Xm).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(m){m.createObjectStore(AE,{keyPath:a6})})(e)})),u}mi(e){let t=0;return e.store(so).te((r,a)=>{t+=rp(a)}).next(()=>{const r={byteSize:t};return e.store(jh).put(iv,r)})}Vi(e){const t=e.store(qh),r=e.store(Pr);return t.J().next(a=>q.forEach(a,l=>{const u=IDBKeyRange.bound([l.userId,na],[l.userId,l.lastAcknowledgedBatchId]);return r.J(mo,u).next(d=>q.forEach(d,m=>{ye(m.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:m.batchId});const p=oo(this.serializer,m);return YC(e,l.userId,p).next(()=>{})}))}))}fi(e){const t=e.store(fu),r=e.store(so);return e.store(wo).get(Ym).next(a=>{const l=[];return r.te((u,d)=>{const m=new Be(u),p=function(v){return[0,An(v)]}(m);l.push(t.get(p).next(y=>y?q.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(m)))}).next(()=>q.waitFor(l))})}gi(e,t){e.createObjectStore(Hh,{keyPath:K4});const r=t.store(Hh),a=new FE,l=u=>{if(a.add(u)){const d=u.lastSegment(),m=u.popLast();return r.put({collectionId:d,parent:An(m)})}};return t.store(so).te({ee:!0},(u,d)=>{const m=new Be(u);return l(m.popLast())}).next(()=>t.store(hu).te({ee:!0},([u,d,m],p)=>{const y=si(d);return l(y.popLast())}))}pi(e){const t=e.store(du);return t.te((r,a)=>{const l=ph(a),u=GC(this.serializer,l);return t.put(u)})}yi(e,t){const r=t.store(so),a=[];return r.te((l,u)=>{const d=t.store(Qm),m=function(v){return v.document?new ce(Be.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):pe(36783)}(u).path.toArray(),p={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(p))}).next(()=>q.waitFor(a))}wi(e,t){const r=t.store(Pr),a=tD(this.serializer),l=new jE(Hp.Ei,this.serializer.wt);return r.J().next(u=>{const d=new Map;return u.forEach(m=>{var p;let y=(p=d.get(m.userId))!==null&&p!==void 0?p:Pe();oo(this.serializer,m).keys().forEach(v=>y=y.add(v)),d.set(m.userId,y)}),q.forEach(d,(m,p)=>{const y=new cn(p),v=qp.bt(this.serializer,y),w=l.getIndexManager(y),S=jp.bt(y,this.serializer,w,l.referenceDelegate);return new nD(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new ov(t,qn.le),m).next()})})}}function zA(n){n.createObjectStore(fu,{keyPath:G4}).createIndex(bE,$4,{unique:!0}),n.createObjectStore(du,{keyPath:"targetId"}).createIndex(j1,H4,{unique:!0}),n.createObjectStore(wo)}const $s="IndexedDbPersistence",Cy=18e5,Dy=5e3,Py="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",rD="main";class HE{constructor(e,t,r,a,l,u,d,m,p,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.bi=l,this.window=u,this.document=d,this.Si=p,this.Di=y,this.Ci=v,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=w=>Promise.resolve(),!HE.C())throw new te(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new h9(this,a),this.Bi=t+rD,this.serializer=new HC(m),this.Li=new oi(this.Bi,this.Ci,new b9(this.serializer)),this._i=new Z6,this.ai=new o9(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tD(this.serializer),this.ci=new J6,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,y===!1&&kt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Py);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new qn(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>sm(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(Ea(e))return re($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return oh(e).get(Vl).next(t=>q.resolve(this.Hi(t)))}Ji(e){return sm(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,Cy)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Jt(t,mu);return r.J().next(a=>{const l=this.Xi(a,Cy),u=a.filter(d=>l.indexOf(d)===-1);return q.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?q.resolve(!0):oh(e).get(Vl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,Dy)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Py);return!1}}return!(!this.networkEnabled||!this.inForeground)||sm(e).J().next(r=>this.Xi(r,Dy).find(a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(l||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[pd,mu],e=>{const t=new ov(e,qn.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(r=>this.Zi(r.updateTimeMs,t)&&!this.ts(r.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>sm(e).J().next(t=>this.Xi(t,Cy).map(r=>r.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return jp.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new a9(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return qp.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,r){re($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=function(m){return m===17?u6:m===16?l6:m===15?SE:m===14?Y1:m===13?Q1:m===12?o6:m===11?K1:void pe(60245)}(this.Ci);let u;return this.Li.runTransaction(e,a,l,d=>(u=new ov(d,this.si?this.si.next():qn.le),t==="readwrite-primary"?this.Wi(u).next(m=>!!m||this.Gi(u)).next(m=>{if(!m)throw kt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new te(K.FAILED_PRECONDITION,L1);return r(u)}).next(m=>this.ji(u).next(()=>m)):this.cs(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}cs(e){return oh(e).get(Vl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,Dy)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(K.FAILED_PRECONDITION,Py)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return oh(e).put(Vl,t)}static C(){return oi.C()}zi(e){const t=oh(e);return t.get(Vl).next(r=>this.Hi(r)?(re($s,"Releasing primary lease."),t.delete(Vl)):q.resolve())}Zi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(kt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;hR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const r=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return re($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return kt($s,"Failed to get zombied client id.",r),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){kt("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function oh(n){return Jt(n,pd)}function sm(n){return Jt(n,mu)}function GE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=a}static Ps(e,t){let r=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new $E(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return hR()?8:B1(wt())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.Rs(e,t).next(u=>{l.result=u}).next(()=>{if(!l.result)return this.Vs(e,t,a,r).next(u=>{l.result=u})}).next(()=>{if(l.result)return;const u=new I9;return this.fs(e,t,u).next(d=>{if(l.result=d,this.Is)return this.gs(e,t,u,d.size)})}).next(()=>l.result)}gs(e,t,r,a){return r.documentReadCount<this.Es?(zl()<=Ue.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Fl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),q.resolve()):(zl()<=Ue.DEBUG&&re("QueryEngine","Query:",Fl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ds*a?(zl()<=Ue.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Fl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(t))):q.resolve())}Rs(e,t){if(hA(t))return q.resolve(null);let r=kn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=ep(t,null,"F"),r=kn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const u=Pe(...l);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(m=>{const p=this.ps(t,d);return this.ys(t,p,u,m.readTime)?this.Rs(e,ep(t,null,"F")):this.ws(e,p,t,m)}))})))}Vs(e,t,r,a){return hA(t)||a.isEqual(Ee.min())?q.resolve(null):this.As.getDocuments(e,r).next(l=>{const u=this.ps(t,l);return this.ys(t,u,r,a)?q.resolve(null):(zl()<=Ue.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fl(t)),this.ws(e,u,t,k1(a,cu)).next(d=>d))})}ps(e,t){let r=new tt(gC(e));return t.forEach((a,l)=>{yd(e,l)&&(r=r.add(l))}),r}ys(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}fs(e,t,r){return zl()<=Ue.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Fl(t)),this.As.getDocumentsMatchingQuery(e,t,nr.min(),r)}ws(e,t,r,a){return this.As.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(u=>{l=l.insert(u.key,u)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="LocalStore",A9=3e8;class S9{constructor(e,t,r,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new ot(Se),this.Ds=new rs(l=>Ro(l),gd),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function sD(n,e,t,r){return new S9(n,e,t,r)}async function aD(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const u=[],d=[];let m=Pe();for(const p of a){u.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of l){d.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(r,m).next(p=>({Ms:p,removedBatchIds:u,addedBatchIds:d}))})})}function R9(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,m,p,y){const v=p.batch,w=v.keys();let S=q.resolve();return w.forEach(P=>{S=S.next(()=>y.getEntry(m,P)).next(M=>{const U=p.docVersions.get(P);ye(U!==null,48541),M.version.compareTo(U)<0&&(v.applyToRemoteDocument(M,p),M.isValidDocument()&&(M.setReadTime(p.commitVersion),y.addEntry(M)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(m,v))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let m=Pe();for(let p=0;p<d.mutationResults.length;++p)d.mutationResults[p].transformResults.length>0&&(m=m.add(d.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function oD(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function C9(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const u=t.Cs.newChangeBuffer({trackRemovals:!0});a=t.Ss;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.ai.removeMatchingKeys(l,y.removedDocuments,v).next(()=>t.ai.addMatchingKeys(l,y.addedDocuments,v)));let S=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(M,U,j){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=A9?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,S,y)&&d.push(t.ai.updateTargetData(l,S))});let m=Hn(),p=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(lD(l,u,e.documentUpdates).next(y=>{m=y.xs,p=y.Os})),!r.isEqual(Ee.min())){const y=t.ai.getLastRemoteSnapshotVersion(l).next(v=>t.ai.setTargetsMetadata(l,l.currentSequenceNumber,r));d.push(y)}return q.waitFor(d).next(()=>u.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,p)).next(()=>m)}).then(l=>(t.Ss=a,l))}function lD(n,e,t){let r=Pe(),a=Pe();return t.forEach(l=>r=r.add(l)),e.getEntries(n,r).next(l=>{let u=Hn();return t.forEach((d,m)=>{const p=l.get(d);m.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(d,m.readTime),u=u.insert(d,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(d,m)):re(KE,"Ignoring outdated watch update for ",d,". Current version:",p.version," Watch version:",m.version)}),{xs:u,Os:a}})}function D9(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.ai.getTargetData(r,e).next(l=>l?(a=l,q.resolve(a)):t.ai.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ss.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function wu(n,e,t){const r=de(n),a=r.Ss.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ea(u))throw u;re(KE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(a.target)}function sp(n,e,t){const r=de(n);let a=Ee.min(),l=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,y){const v=de(m),w=v.Ds.get(y);return w!==void 0?q.resolve(v.Ss.get(w)):v.ai.getTargetData(p,y)}(r,u,kn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(u,d.targetId).next(m=>{l=m})}).next(()=>r.bs.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?l:Pe())).next(d=>(hD(r,pC(e),d),{documents:d,Ns:l})))}function uD(n,e){const t=de(n),r=de(t.ai),a=t.Ss.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",l=>r.Rt(l,e).next(u=>u?u.target:null))}function cD(n,e){const t=de(n),r=t.vs.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Cs.getAllFromCollectionGroup(a,e,k1(r,cu),Number.MAX_SAFE_INTEGER)).then(a=>(hD(t,e,a),a))}function hD(n,e,t){let r=n.vs.get(e)||Ee.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),n.vs.set(e,r)}async function P9(n,e,t,r){const a=de(n);let l=Pe(),u=Hn();for(const p of t){const y=e.Bs(p.metadata.name);p.document&&(l=l.add(y));const v=e.Ls(p);v.setReadTime(e.ks(p.metadata.readTime)),u=u.insert(y,v)}const d=a.Cs.newChangeBuffer({trackRemovals:!0}),m=await Tu(a,function(y){return kn(Lu(Be.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",p=>lD(p,d,u).next(y=>(d.apply(p),y)).next(y=>a.ai.removeMatchingKeysForTargetId(p,m.targetId).next(()=>a.ai.addMatchingKeys(p,l,m.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(p,y.xs,y.Os)).next(()=>y.xs)))}async function N9(n,e,t=Pe()){const r=await Tu(n,kn(BE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",l=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.ci.saveNamedQuery(l,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ss=a.Ss.insert(d.targetId,d),a.ai.updateTargetData(l,d).next(()=>a.ai.removeMatchingKeysForTargetId(l,r.targetId)).next(()=>a.ai.addMatchingKeys(l,t,r.targetId)).next(()=>a.ci.saveNamedQuery(l,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="firestore_clients";function FA(n,e){return`${dD}_${n}_${e}`}const fD="firestore_mutations";function qA(n,e,t){let r=`${fD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const mD="firestore_targets";function Ny(n,e){return`${mD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="SharedClientState";class ap{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static qs(e,t,r){const a=JSON.parse(r);let l,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(l=new te(a.error.code,a.error.message))),u?new ap(e,t,a.state,l):(kt(Zr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static qs(e,t){const r=JSON.parse(t);let a,l=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return l&&r.error&&(l=typeof r.error.message=="string"&&typeof r.error.code=="string",l&&(a=new te(r.error.code,r.error.message))),l?new Rh(e,r.state,a):(kt(Zr,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class op{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,l=NE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=z1(r.activeTargetIds[u]),l=l.add(r.activeTargetIds[u]);return a?new op(e,l):(kt(Zr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class QE{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new QE(t.clientId,t.onlineState):(kt(Zr,`Failed to parse online state: ${e}`),null)}}class wv{constructor(){this.activeTargetIds=NE()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(e,t,r,a,l){this.window=e,this.bi=t,this.persistenceKey=r,this.Ks=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new ot(Se),this.started=!1,this.js=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.Hs=FA(this.persistenceKey,this.Ks),this.Js=function(m){return`firestore_sequence_number_${m}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new wv),this.Ys=new RegExp(`^${dD}_${u}_([^_]*)$`),this.Zs=new RegExp(`^${fD}_${u}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${mD}_${u}_(\\d+)$`),this.eo=function(m){return`firestore_online_state_${m}`}(this.persistenceKey),this.no=function(m){return`firestore_bundle_loaded_v2_${m}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const r of e){if(r===this.Ks)continue;const a=this.getItem(FA(this.persistenceKey,r));if(a){const l=op.qs(r,a);l&&(this.zs=this.zs.insert(l.clientId,l))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const r=this.io(t);r&&this.so(r)}for(const r of this.js)this.Gs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,r){this._o(e,t,r),this.ao(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Ny(this.persistenceKey,e));if(a){const l=Rh.qs(e,a);l&&(r=l.state)}}return t&&this.uo.$s(e),this.ro(),r}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ny(this.persistenceKey,e))}updateQueryState(e,t,r){this.co(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.ao(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Zr,"READ",e,t),t}setItem(e,t){re(Zr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Zr,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(re(Zr,"EVENT",t.key,t.newValue),t.key===this.Hs)return void kt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const r=this.Po(t.key);return this.To(r,null)}{const r=this.Io(t.key,t.newValue);if(r)return this.To(r.clientId,r)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const r=this.Eo(t.key,t.newValue);if(r)return this.Ao(r)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const r=this.Ro(t.key,t.newValue);if(r)return this.Vo(r)}}else if(t.key===this.eo){if(t.newValue!==null){const r=this.io(t.newValue);if(r)return this.so(r)}}else if(t.key===this.Js){const r=function(l){let u=qn.le;if(l!=null)try{const d=JSON.parse(l);ye(typeof d=="number",30636,{mo:l}),u=d}catch(d){kt(Zr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==qn.le&&this.sequenceNumberHandler(r)}else if(t.key===this.no){const r=this.fo(t.newValue);await Promise.all(r.map(a=>this.syncEngine.po(a)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,r){const a=new ap(this.currentUser,e,t,r),l=qA(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Qs())}ao(e){const t=qA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,r){const a=Ny(this.persistenceKey,e),l=new Rh(e,t,r);this.setItem(a,l.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const r=this.Po(e);return op.qs(r,t)}Eo(e,t){const r=this.Zs.exec(e),a=Number(r[1]),l=r[2]!==void 0?r[2]:null;return ap.qs(new cn(l),a,t)}Ro(e,t){const r=this.Xs.exec(e),a=Number(r[1]);return Rh.qs(a,t)}io(e){return QE.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);re(Zr,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const r=t?this.zs.insert(e,t):this.zs.remove(e),a=this.oo(this.zs),l=this.oo(r),u=[],d=[];return l.forEach(m=>{a.has(m)||u.push(m)}),a.forEach(m=>{l.has(m)||d.push(m)}),this.syncEngine.bo(u,d).then(()=>{this.zs=r})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=NE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class pD{constructor(){this.So=new wv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new wv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="ConnectivityMonitor";class HA{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){re(jA,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){re(jA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am=null;function bv(){return am===null?am=function(){return 268435456+Math.round(2147483648*Math.random())}():am++,"0x"+am.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="RestConnection",O9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class V9{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${a}`,this.qo=this.databaseId.database===lv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}Qo(e,t,r,a,l){const u=bv(),d=this.$o(e,t.toUriEncodedString());re(Oy,`Sending RPC '${e}' ${u}:`,d,r);const m={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(m,a,l);const{host:p}=new URL(d),y=Ep(p);return this.Ko(e,d,m,r,y).then(v=>(re(Oy,`Received RPC '${e}' ${u}: `,v),v),v=>{throw di(Oy,`RPC '${e}' ${u} failed with error: `,v,"url: ",d,"request:",r),v})}Wo(e,t,r,a,l,u){return this.Qo(e,t,r,a,l)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}$o(e,t){const r=O9[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k9{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class M9 extends V9{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,a,l){const u=bv();return new Promise((d,m)=>{const p=new S1;p.setWithCredentials(!0),p.listenOnce(R1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Em.NO_ERROR:const v=p.getResponseJson();re(bn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),d(v);break;case Em.TIMEOUT:re(bn,`RPC '${e}' ${u} timed out`),m(new te(K.DEADLINE_EXCEEDED,"Request time out"));break;case Em.HTTP_ERROR:const w=p.getStatus();if(re(bn,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const M=function(j){const Y=j.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(Y)>=0?Y:K.UNKNOWN}(P.status);m(new te(M,P.message))}else m(new te(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new te(K.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{s_:e,streamId:u,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{re(bn,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(a);re(bn,`RPC '${e}' ${u} sending request:`,a),p.send(t,"POST",y,r,15)})}a_(e,t,r){const a=bv(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=P1(),d=D1(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Uo(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const y=l.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const v=u.createWebChannel(y,m);let w=!1,S=!1;const P=new k9({Go:U=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,U),v.send(U))},zo:()=>v.close()}),M=(U,j,Y)=>{U.listen(j,G=>{try{Y(G)}catch(ae){setTimeout(()=>{throw ae},0)}})};return M(v,dh.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),P.t_())}),M(v,dh.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),P.r_())}),M(v,dh.EventType.ERROR,U=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),P.r_(new te(K.UNAVAILABLE,"The operation could not be completed")))}),M(v,dh.EventType.MESSAGE,U=>{var j;if(!S){const Y=U.data[0];ye(!!Y,16349);const G=Y,ae=(G==null?void 0:G.error)||((j=G[0])===null||j===void 0?void 0:j.error);if(ae){re(bn,`RPC '${e}' stream ${a} received error:`,ae);const ie=ae.status;let le=function(A){const N=qt[A];if(N!==void 0)return DC(N)}(ie),D=ae.message;le===void 0&&(le=K.INTERNAL,D="Unknown error status: "+ie+" with message "+ae.message),S=!0,P.r_(new te(le,D)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,Y),P.i_(Y)}}),M(d,C1.STAT_EVENT,U=>{U.stat===tv.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===tv.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.n_()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){return typeof window<"u"?window:null}function Dm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return new F6(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r=1e3,a=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=a,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="PersistentStream";class _D{constructor(e,t,r,a,l,u,d,m){this.bi=e,this.R_=r,this.V_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new YE(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.m_===t&&this.B_(r,a)},r=>{e(()=>{const a=new te(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(a)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{r(()=>this.L_(a))}),this.stream.onMessage(a=>{r(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return re(GA,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(re(GA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L9 extends _D{constructor(e,t,r,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=l}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=H6(this.serializer,e),r=function(l){if(!("targetChange"in l))return Ee.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=_v(this.serializer),t.addTarget=function(l,u){let d;const m=u.target;if(d=Jm(m)?{documents:UC(l,m)}:{query:BC(l,m).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=xC(l,u.resumeToken);const p=pv(l,u.expectedCount);p!==null&&(d.expectedCount=p)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=Eu(l,u.snapshotVersion.toTimestamp());const p=pv(l,u.expectedCount);p!==null&&(d.expectedCount=p)}return d}(this.serializer,e);const r=$6(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=_v(this.serializer),t.removeTarget=e,this.F_(t)}}class U9 extends _D{constructor(e,t,r,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=G6(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=_v(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wh(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B9{}class z9 extends B9{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Qo(e,gv(t,r),a,l,u)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(K.UNKNOWN,l.toString())})}Wo(e,t,r,a,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,gv(t,r),a,u,d,l)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(K.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class F9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(kt(t),this.ea=!1):re("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class q9{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(u=>{r.enqueueAndForget(async()=>{wa(this)&&(re(Oo,"Restarting streams for network reachability change."),await async function(m){const p=de(m);p.aa.add(4),await zu(p),p.la.set("Unknown"),p.aa.delete(4),await bd(p)}(this))})}),this.la=new F9(r,a)}}async function bd(n){if(wa(n))for(const e of n.ua)await e(!0)}async function zu(n){for(const e of n.ua)await e(!1)}function Gp(n,e){const t=de(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),JE(t)?XE(t):qu(t).b_()&&WE(t,e))}function bu(n,e){const t=de(n),r=qu(t);t._a.delete(e),r.b_()&&yD(t,e),t._a.size===0&&(r.b_()?r.v_():wa(t)&&t.la.set("Unknown"))}function WE(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qu(n).U_(e)}function yD(n,e){n.ha.Ke(e),qu(n).K_(e)}function XE(n){n.ha=new L6({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),qu(n).start(),n.la.ta()}function JE(n){return wa(n)&&!qu(n).w_()&&n._a.size>0}function wa(n){return de(n).aa.size===0}function vD(n){n.ha=void 0}async function j9(n){n.la.set("Online")}async function H9(n){n._a.forEach((e,t)=>{WE(n,e)})}async function G9(n,e){vD(n),JE(n)?(n.la.ia(e),XE(n)):n.la.set("Unknown")}async function $9(n,e,t){if(n.la.set("Online"),e instanceof NC&&e.state===2&&e.cause)try{await async function(a,l){const u=l.cause;for(const d of l.targetIds)a._a.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a._a.delete(d),a.ha.removeTarget(d))}(n,e)}catch(r){re(Oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lp(n,r)}else if(e instanceof Cm?n.ha.Xe(e):e instanceof PC?n.ha.ot(e):n.ha.nt(e),!t.isEqual(Ee.min()))try{const r=await oD(n.localStore);t.compareTo(r)>=0&&await function(l,u){const d=l.ha.It(u);return d.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=l._a.get(p);y&&l._a.set(p,y.withResumeToken(m.resumeToken,u))}}),d.targetMismatches.forEach((m,p)=>{const y=l._a.get(m);if(!y)return;l._a.set(m,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),yD(l,m);const v=new Gi(y.target,m,p,y.sequenceNumber);WE(l,v)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(Oo,"Failed to raise snapshot:",r),await lp(n,r)}}async function lp(n,e,t){if(!Ea(e))throw e;n.aa.add(1),await zu(n),n.la.set("Offline"),t||(t=()=>oD(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(Oo,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await bd(n)})}function ED(n,e){return e().catch(t=>lp(n,t,e))}async function Fu(n){const e=de(n),t=fa(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:na;for(;K9(e);)try{const a=await D9(e.localStore,r);if(a===null){e.oa.length===0&&t.v_();break}r=a.batchId,Q9(e,a)}catch(a){await lp(e,a)}TD(e)&&wD(e)}function K9(n){return wa(n)&&n.oa.length<10}function Q9(n,e){n.oa.push(e);const t=fa(n);t.b_()&&t.W_&&t.G_(e.mutations)}function TD(n){return wa(n)&&!fa(n).w_()&&n.oa.length>0}function wD(n){fa(n).start()}async function Y9(n){fa(n).H_()}async function W9(n){const e=fa(n);for(const t of n.oa)e.G_(t.mutations)}async function X9(n,e,t){const r=n.oa.shift(),a=kE.from(r,e,t);await ED(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Fu(n)}async function J9(n,e){e&&fa(n).W_&&await async function(r,a){if(function(u){return CC(u)&&u!==K.ABORTED}(a.code)){const l=r.oa.shift();fa(r).D_(),await ED(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Fu(r)}}(n,e),TD(n)&&wD(n)}async function $A(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(Oo,"RemoteStore received new credentials");const r=wa(t);t.aa.add(3),await zu(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await bd(t)}async function Iv(n,e){const t=de(n);e?(t.aa.delete(2),await bd(t)):e||(t.aa.add(2),await zu(t),t.la.set("Unknown"))}function qu(n){return n.Pa||(n.Pa=function(t,r,a){const l=de(t);return l.Y_(),new L9(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:j9.bind(null,n),Jo:H9.bind(null,n),Zo:G9.bind(null,n),Q_:$9.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),JE(n)?XE(n):n.la.set("Unknown")):(await n.Pa.stop(),vD(n))})),n.Pa}function fa(n){return n.Ta||(n.Ta=function(t,r,a){const l=de(t);return l.Y_(),new U9(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:Y9.bind(null,n),Zo:J9.bind(null,n),z_:W9.bind(null,n),j_:X9.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Fu(n)):(await n.Ta.stop(),n.oa.length>0&&(re(Oo,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const u=Date.now()+r,d=new ZE(e,t,u,a,l);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(n,e){if(kt("AsyncQueue",`${e}: ${n}`),Ea(n))return new te(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static emptySet(e){return new Zl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.Ia=new ot(ce.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class Iu{constructor(e,t,r,a,l,u,d,m,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,a,l){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Iu(e,t,Zl.emptySet(t),u,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class eB{constructor(){this.queries=QA(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const a=de(t),l=a.queries;a.queries=QA(),l.forEach((u,d)=>{for(const m of d.Ra)m.onError(r)})})(this,new te(K.ABORTED,"Firestore shutting down"))}}function QA(){return new rs(n=>mC(n),_d)}async function eT(n,e){const t=de(n);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.Va()&&e.ma()&&(r=2):(l=new Z9,r=e.ma()?0:1);try{switch(r){case 0:l.Aa=await t.onListen(a,!0);break;case 1:l.Aa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=ju(u,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Ra.push(e),e.ga(t.onlineState),l.Aa&&e.pa(l.Aa)&&nT(t)}async function tT(n,e){const t=de(n),r=e.query;let a=3;const l=t.queries.get(r);if(l){const u=l.Ra.indexOf(e);u>=0&&(l.Ra.splice(u,1),l.Ra.length===0?a=e.ma()?0:1:!l.Va()&&e.ma()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function tB(n,e){const t=de(n);let r=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.Ra)d.pa(a)&&(r=!0);u.Aa=a}}r&&nT(t)}function nB(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const l of a.Ra)l.onError(t);r.queries.delete(e)}function nT(n){n.fa.forEach(e=>{e.next()})}var Av,YA;(YA=Av||(Av={})).ya="default",YA.Cache="cache";class rT{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Iu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Iu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Av.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.serializer=e}Bs(e){return li(this.serializer,e)}Ls(e){return e.metadata.exists?LC(this.serializer,e.document,!1):ht.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return Mt(e)}}class iB{constructor(e,t,r){this.Oa=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bD(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const r=Be.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,r=new WA(this.serializer);for(const a of e)if(a.metadata.queries){const l=r.Bs(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(l);t.set(u,d)}}return t}async complete(){const e=await P9(this.localStore,new WA(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const r of this.queries)await N9(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function bD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.key=e}}class AD{constructor(e){this.key=e}}class SD{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pe(),this.mutatedKeys=Pe(),this.Ua=gC(e),this.Ka=new Zl(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new KA,a=t?t.Ka:this.Ka;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=yd(this.query,v)?v:null,P=!!w&&this.mutatedKeys.has(w.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let U=!1;w&&S?w.data.isEqual(S.data)?P!==M&&(r.track({type:3,doc:S}),U=!0):this.ja(w,S)||(r.track({type:2,doc:S}),U=!0,(m&&this.Ua(S,m)>0||p&&this.Ua(S,p)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),U=!0):w&&!S&&(r.track({type:1,doc:w}),U=!0,(m||p)&&(d=!0)),U&&(S?(u=u.add(S),l=M?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),r.track({type:1,doc:y})}return{Ka:u,za:r,ys:d,mutatedKeys:l}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((y,v)=>function(S,P){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:U})}};return M(S)-M(P)}(y.type,v.type)||this.Ua(y.doc,v.doc)),this.Ha(r),a=a!=null&&a;const d=t&&!a?this.Ja():[],m=this.$a.size===0&&this.current&&!a?1:0,p=m!==this.Qa;return this.Qa=m,u.length!==0||p?{snapshot:new Iu(this.query,e.Ka,l,u,e.mutatedKeys,m===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new KA,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Pe(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new AD(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new ID(r))}),t}Xa(e){this.qa=e.Ns,this.$a=Pe();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Iu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const ba="SyncEngine";class sB{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aB{constructor(e){this.key=e,this.tu=!1}}class oB{constructor(e,t,r,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new rs(d=>mC(d),_d),this.iu=new Map,this.su=new Set,this.ou=new ot(ce.comparator),this._u=new Map,this.au=new qE,this.uu={},this.cu=new Map,this.lu=xo.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function lB(n,e,t=!0){const r=$p(n);let a;const l=r.ru.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.eu()):a=await RD(r,e,t,!0),a}async function uB(n,e){const t=$p(n);await RD(t,e,!0,!1)}async function RD(n,e,t,r){const a=await Tu(n.localStore,kn(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return r&&(d=await iT(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Gp(n.remoteStore,a),d}async function iT(n,e,t,r,a){n.Pu=(v,w,S)=>async function(M,U,j,Y){let G=U.view.Ga(j);G.ys&&(G=await sp(M.localStore,U.query,!1).then(({documents:D})=>U.view.Ga(D,G)));const ae=Y&&Y.targetChanges.get(U.targetId),ie=Y&&Y.targetMismatches.get(U.targetId)!=null,le=U.view.applyChanges(G,M.isPrimaryClient,ae,ie);return Sv(M,U.targetId,le.Ya),le.snapshot}(n,v,w,S);const l=await sp(n.localStore,e,!0),u=new SD(e,l.Ns),d=u.Ga(l.documents),m=Td.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),p=u.applyChanges(d,n.isPrimaryClient,m);Sv(n,t,p.Ya);const y=new sB(e,t,u);return n.ru.set(e,y),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),p.snapshot}async function cB(n,e,t){const r=de(n),a=r.ru.get(e),l=r.iu.get(a.targetId);if(l.length>1)return r.iu.set(a.targetId,l.filter(u=>!_d(u,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await wu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&bu(r.remoteStore,a.targetId),Au(r,a.targetId)}).catch(va)):(Au(r,a.targetId),await wu(r.localStore,a.targetId,!0))}async function hB(n,e){const t=de(n),r=t.ru.get(e),a=t.iu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bu(t.remoteStore,r.targetId))}async function dB(n,e,t){const r=lT(n);try{const a=await function(u,d){const m=de(u),p=gt.now(),y=d.reduce((S,P)=>S.add(P.key),Pe());let v,w;return m.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Hn(),M=Pe();return m.Cs.getEntries(S,y).next(U=>{P=U,P.forEach((j,Y)=>{Y.isValidDocument()||(M=M.add(j))})}).next(()=>m.localDocuments.getOverlayedDocuments(S,P)).next(U=>{v=U;const j=[];for(const Y of d){const G=V6(Y,v.get(Y.key).overlayedDocument);G!=null&&j.push(new is(Y.key,G,sC(G.value.mapValue),pt.exists(!0)))}return m.mutationQueue.addMutationBatch(S,p,j,d)}).next(U=>{w=U;const j=U.applyToLocalDocumentSet(v,M);return m.documentOverlayCache.saveOverlays(S,U.batchId,j)})}).then(()=>({batchId:w.batchId,changes:yC(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,m){let p=u.uu[u.currentUser.toKey()];p||(p=new ot(Se)),p=p.insert(d,m),u.uu[u.currentUser.toKey()]=p}(r,a.batchId,t),await ss(r,a.changes),await Fu(r.remoteStore)}catch(a){const l=ju(a,"Failed to persist write");t.reject(l)}}async function CD(n,e){const t=de(n);try{const r=await C9(t.localStore,e);e.targetChanges.forEach((a,l)=>{const u=t._u.get(l);u&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.tu=!0:a.modifiedDocuments.size>0?ye(u.tu,14607):a.removedDocuments.size>0&&(ye(u.tu,42227),u.tu=!1))}),await ss(t,r,e)}catch(r){await va(r)}}function XA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ru.forEach((l,u)=>{const d=u.view.ga(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const m=de(u);m.onlineState=d;let p=!1;m.queries.forEach((y,v)=>{for(const w of v.Ra)w.ga(d)&&(p=!0)}),p&&nT(m)}(r.eventManager,e),a.length&&r.nu.Q_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fB(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r._u.get(e),l=a&&a.key;if(l){let u=new ot(ce.comparator);u=u.insert(l,ht.newNoDocument(l,Ee.min()));const d=Pe().add(l),m=new Ed(Ee.min(),new Map,new ot(Se),u,d);await CD(r,m),r.ou=r.ou.remove(l),r._u.delete(e),oT(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,t)).catch(va)}async function mB(n,e){const t=de(n),r=e.batch.batchId;try{const a=await R9(t.localStore,e);aT(t,r,null),sT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await va(a)}}async function pB(n,e,t){const r=de(n);try{const a=await function(u,d){const m=de(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,d).next(v=>(ye(v!==null,37113),y=v.keys(),m.mutationQueue.removeMutationBatch(p,v))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(r.localStore,e);aT(r,e,t),sT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await va(a)}}async function gB(n,e){const t=de(n);wa(t.remoteStore)||re(ba,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",m=>d.mutationQueue.getHighestUnacknowledgedBatchId(m))}(t.localStore);if(r===na)return void e.resolve();const a=t.cu.get(r)||[];a.push(e),t.cu.set(r,a)}catch(r){const a=ju(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function sT(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function aT(n,e,t){const r=de(n);let a=r.uu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.uu[r.currentUser.toKey()]=a}}function Au(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||DD(n,r)})}function DD(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(bu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),oT(n))}function Sv(n,e,t){for(const r of t)r instanceof ID?(n.au.addReference(r.key,e),_B(n,r)):r instanceof AD?(re(ba,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||DD(n,r.key)):pe(19791,{Iu:r})}function _B(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(re(ba,"New document in limbo: "+t),n.su.add(r),oT(n))}function oT(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new ce(Be.fromString(e)),r=n.lu.next();n._u.set(r,new aB(t)),n.ou=n.ou.insert(t,r),Gp(n.remoteStore,new Gi(kn(Lu(t.path)),r,"TargetPurposeLimboResolution",qn.le))}}async function ss(n,e,t){const r=de(n),a=[],l=[],u=[];r.ru.isEmpty()||(r.ru.forEach((d,m)=>{u.push(r.Pu(m,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(p){a.push(p);const v=$E.Ps(m.targetId,p);l.push(v)}}))}),await Promise.all(u),r.nu.Q_(a),await async function(m,p){const y=de(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>q.forEach(p,w=>q.forEach(w.ls,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>q.forEach(w.hs,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ea(v))throw v;re(KE,"Failed to update sequence numbers: "+v)}for(const v of p){const w=v.targetId;if(!v.fromCache){const S=y.Ss.get(w),P=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(P);y.Ss=y.Ss.insert(w,M)}}}(r.localStore,l))}async function yB(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(ba,"User change. New user:",e.toKey());const r=await aD(t.localStore,e);t.currentUser=e,function(l,u){l.cu.forEach(d=>{d.forEach(m=>{m.reject(new te(K.CANCELLED,u))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ms)}}function vB(n,e){const t=de(n),r=t._u.get(e);if(r&&r.tu)return Pe().add(r.key);{let a=Pe();const l=t.iu.get(e);if(!l)return a;for(const u of l){const d=t.ru.get(u);a=a.unionWith(d.view.Wa)}return a}}async function EB(n,e){const t=de(n),r=await sp(t.localStore,e.query,!0),a=e.view.Xa(r);return t.isPrimaryClient&&Sv(t,e.targetId,a.Ya),a}async function TB(n,e){const t=de(n);return cD(t.localStore,e).then(r=>ss(t,r))}async function wB(n,e,t,r){const a=de(n),l=await function(d,m){const p=de(d),y=de(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Hn(v,m).next(w=>w?p.localDocuments.getDocuments(v,w):q.resolve(null)))}(a.localStore,e);l!==null?(t==="pending"?await Fu(a.remoteStore):t==="acknowledged"||t==="rejected"?(aT(a,e,r||null),sT(a,e),function(d,m){de(de(d).mutationQueue).Xn(m)}(a.localStore,e)):pe(6720,"Unknown batchState",{Eu:t}),await ss(a,l)):re(ba,"Cannot apply mutation batch with id: "+e)}async function bB(n,e){const t=de(n);if($p(t),lT(t),e===!0&&t.hu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await JA(t,r.toArray());t.hu=!0,await Iv(t.remoteStore,!0);for(const l of a)Gp(t.remoteStore,l)}else if(e===!1&&t.hu!==!1){const r=[];let a=Promise.resolve();t.iu.forEach((l,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Au(t,u),wu(t.localStore,u,!0))),bu(t.remoteStore,u)}),await a,await JA(t,r),function(u){const d=de(u);d._u.forEach((m,p)=>{bu(d.remoteStore,p)}),d.au.Kr(),d._u=new Map,d.ou=new ot(ce.comparator)}(t),t.hu=!1,await Iv(t.remoteStore,!1)}}async function JA(n,e,t){const r=de(n),a=[],l=[];for(const u of e){let d;const m=r.iu.get(u);if(m&&m.length!==0){d=await Tu(r.localStore,kn(m[0]));for(const p of m){const y=r.ru.get(p),v=await EB(r,y);v.snapshot&&l.push(v.snapshot)}}else{const p=await uD(r.localStore,u);d=await Tu(r.localStore,p),await iT(r,PD(p),u,!1,d.resumeToken)}a.push(d)}return r.nu.Q_(l),a}function PD(n){return fC(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function IB(n){return function(t){return de(de(t).persistence).us()}(de(n).localStore)}async function AB(n,e,t,r){const a=de(n);if(a.hu)return void re(ba,"Ignoring unexpected query state notification.");const l=a.iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const u=await cD(a.localStore,pC(l[0])),d=Ed.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await wu(a.localStore,e,!0),Au(a,e,r);break;default:pe(64155,t)}}async function SB(n,e,t){const r=$p(n);if(r.hu){for(const a of e){if(r.iu.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(ba,"Adding an already active target "+a);continue}const l=await uD(r.localStore,a),u=await Tu(r.localStore,l);await iT(r,PD(l),u.targetId,!1,u.resumeToken),Gp(r.remoteStore,u)}for(const a of t)r.iu.has(a)&&await wu(r.localStore,a,!1).then(()=>{bu(r.remoteStore,a),Au(r,a)}).catch(va)}}function $p(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=CD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fB.bind(null,e),e.nu.Q_=tB.bind(null,e.eventManager),e.nu.Tu=nB.bind(null,e.eventManager),e}function lT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pB.bind(null,e),e}function RB(n,e,t){const r=de(n);(async function(l,u,d){try{const m=await u.getMetadata();if(await function(S,P){const M=de(S),U=Mt(P.createTime);return M.persistence.runTransaction("hasNewerBundle","readonly",j=>M.ci.getBundleMetadata(j,P.id)).then(j=>!!j&&j.createTime.compareTo(U)>=0)}(l.localStore,m))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(m)),Promise.resolve(new Set);d._updateProgress(bD(m));const p=new iB(m,l.localStore,u.serializer);let y=await u.du();for(;y;){const w=await p.Na(y);w&&d._updateProgress(w),y=await u.du()}const v=await p.complete();return await ss(l,v.ka,void 0),await function(S,P){const M=de(S);return M.persistence.runTransaction("Save bundle","readwrite",U=>M.ci.saveBundleMetadata(U,P))}(l.localStore,m),d._completeWith(v.progress),Promise.resolve(v.La)}catch(m){return di(ba,`Loading bundle failed with ${m}`),d._failWith(m),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Xh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wd(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return sD(this.persistence,new iD,e.initialUser,this.serializer)}Ru(e){return new jE(Hp.Ei,this.serializer)}Au(e){return new pD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xh.provider={build:()=>new Xh};class CB extends Xh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){ye(this.persistence.referenceDelegate instanceof ip,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new JC(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new jE(r=>ip.Ei(r,t),this.serializer)}}class ND extends Xh{constructor(e,t,r){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await lT(this.gu.syncEngine),await Fu(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return sD(this.persistence,new iD,e.initialUser,this.serializer)}mu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new JC(r,e.asyncQueue,t)}fu(e,t){const r=new L4(t,this.persistence);return new M4(e.asyncQueue,r)}Ru(e){const t=GE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new HE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,gD(),Dm(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new pD}}class DB extends ND{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof xy&&(this.sharedClientState.syncEngine={yo:wB.bind(null,t),wo:AB.bind(null,t),bo:SB.bind(null,t),us:IB.bind(null,t),po:TB.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async r=>{await bB(this.gu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Au(e){const t=gD();if(!xy.C(t))throw new te(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=GE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xy(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>XA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yB.bind(null,this.syncEngine),await Iv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eB}()}createDatastore(e){const t=wd(e.databaseInfo.databaseId),r=function(l){return new M9(l)}(e.databaseInfo);return function(l,u,d,m){return new z9(l,u,d,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,u,d){return new q9(r,a,l,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>XA(this.syncEngine,t,0),function(){return HA.C()?new HA:new x9}())}createSyncEngine(e,t){return function(a,l,u,d,m,p,y){const v=new oB(a,l,u,d,m,p);return y&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=de(a);re(Oo,"RemoteStore shutting down."),l.aa.add(5),await zu(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jh.provider={build:()=>new Jh};function ZA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(r=>{r&&r.xa()?this.metadata.resolve(r.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ma)}`))},r=>this.metadata.reject(r))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),r=Number(t);isNaN(r)&&this.vu(`length string (${t}) is not valid number`);const a=await this.Cu(r);return new rB(JSON.parse(a),e.length+r)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,l){const u=de(a),d={documents:l.map(v=>Yh(u.serializer,v))},m=await u.Wo("BatchGetDocuments",u.serializer.databaseId,Be.emptyPath(),d,l.length),p=new Map;m.forEach(v=>{const w=j6(u.serializer,v);p.set(w.key.toString(),w)});const y=[];return l.forEach(v=>{const w=p.get(v.toString());ye(!!w,55234,{key:v}),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Bu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new OE(a,this.precondition(a)))}),await async function(r,a){const l=de(r),u={writes:a.map(d=>Wh(l.serializer,d))};await l.Qo("Commit",l.serializer.databaseId,Be.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw pe(50498,{xu:e.constructor.name});t=Ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?pt.exists(!1):pt.updateTime(t):pt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new te(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pt.updateTime(t)}return pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{constructor(e,t,r,a,l){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=l,this.Ou=r.maxAttempts,this.y_=new YE(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new NB(this.datastore),t=this.Lu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.ku(a)}))}).catch(r=>{this.ku(r)})})}Lu(e){try{const t=this.updateFunction(e);return!md(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!CC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="FirestoreClient";class OB{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=O1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async u=>{re(ma,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(ma,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ju(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vy(n,e){n.asyncQueue.verifyOperationInProgress(),re(ma,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await aD(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function eS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uT(n);re(ma,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$A(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>$A(e.remoteStore,a)),n._onlineComponents=e}async function uT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ma,"Using user provided OfflineComponentProvider");try{await Vy(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await Vy(n,new Xh)}}else re(ma,"Using default OfflineComponentProvider"),await Vy(n,new CB(void 0));return n._offlineComponents}async function Qp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ma,"Using user provided OnlineComponentProvider"),await eS(n,n._uninitializedComponentsProvider._online)):(re(ma,"Using default OnlineComponentProvider"),await eS(n,new Jh))),n._onlineComponents}function xD(n){return uT(n).then(e=>e.persistence)}function cT(n){return uT(n).then(e=>e.localStore)}function OD(n){return Qp(n).then(e=>e.remoteStore)}function hT(n){return Qp(n).then(e=>e.syncEngine)}function VB(n){return Qp(n).then(e=>e.datastore)}async function Su(n){const e=await Qp(n),t=e.eventManager;return t.onListen=lB.bind(null,e.syncEngine),t.onUnlisten=cB.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uB.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hB.bind(null,e.syncEngine),t}function kB(n){return n.asyncQueue.enqueue(async()=>{const e=await xD(n),t=await OD(n);return e.setNetworkEnabled(!0),function(a){const l=de(a);return l.aa.delete(0),bd(l)}(t)})}function MB(n){return n.asyncQueue.enqueue(async()=>{const e=await xD(n),t=await OD(n);return e.setNetworkEnabled(!1),async function(a){const l=de(a);l.aa.add(0),await zu(l),l.la.set("Offline")}(t)})}function LB(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,u){try{const d=await function(p,y){const v=de(p);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,l);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const m=ju(d,`Failed to get document '${l} from cache`);u.reject(m)}}(await cT(n),e,t)),t.promise}function VD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,m,p){const y=new Kp({next:w=>{y.yu(),u.enqueueAndForget(()=>tT(l,v));const S=w.docs.has(d);!S&&w.fromCache?p.reject(new te(K.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&m&&m.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new rT(Lu(d.path),y,{includeMetadataChanges:!0,Fa:!0});return eT(l,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function UB(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,u){try{const d=await sp(a,l,!0),m=new SD(l,d.Ns),p=m.Ga(d.documents),y=m.applyChanges(p,!1);u.resolve(y.snapshot)}catch(d){const m=ju(d,`Failed to execute query '${l} against cache`);u.reject(m)}}(await cT(n),e,t)),t.promise}function kD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,m,p){const y=new Kp({next:w=>{y.yu(),u.enqueueAndForget(()=>tT(l,v)),w.fromCache&&m.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new rT(d,y,{includeMetadataChanges:!0,Fa:!0});return eT(l,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function BB(n,e){const t=new Kp(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,l){de(a).fa.add(l),l.next()}(await Su(n),t)),()=>{t.yu(),n.asyncQueue.enqueueAndForget(async()=>function(a,l){de(a).fa.delete(l)}(await Su(n),t))}}function zB(n,e,t,r){const a=function(u,d){let m;return m=typeof u=="string"?EE().encode(u):u,function(y,v){return new PB(y,v)}(function(y,v){if(y instanceof Uint8Array)return ZA(y,v);if(y instanceof ArrayBuffer)return ZA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(m),d)}(t,wd(e));n.asyncQueue.enqueueAndForget(async()=>{RB(await hT(n),a,r)})}function FB(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const l=de(r);return l.persistence.runTransaction("Get named query","readonly",u=>l.ci.getNamedQuery(u,a))}(await cT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e,t){if(!t)throw new te(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function LD(n,e,t,r){if(e===!0&&r===!0)throw new te(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nS(n){if(!ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rS(n){if(ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe(12329,{type:typeof n})}function We(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yp(n);throw new te(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function UD(n,e){if(e<=0)throw new te(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="firestore.googleapis.com",iS=!0;class sS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=BD,this.ssl=iS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:iS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l9)throw new te(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MD((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A4;switch(r.type){case"firstParty":return new D4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=tS.get(t);r&&(re("ComponentProvider","Removing Datastore"),tS.delete(t),r.terminate())}(this),Promise.resolve()}}function qB(n,e,t,r={}){var a;n=We(n,Id);const l=Ep(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&fR(`https://${m}`),u.host!==BD&&u.host!==m&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:l,emulatorOptions:r});if(!ia(p,d)&&(n._setSettings(p),r.mockUserToken)){let y,v;if(typeof r.mockUserToken=="string")y=r.mockUserToken,v=cn.MOCK_USER;else{y=HV(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new te(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new cn(w)}n._authCredentials=new S4(new x1(y,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class zD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zD(this.firestore,e,this._query)}},Tt=class FD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new FD(this.firestore,e,this._key)}},ra=class qD extends Mn{constructor(e,t,r){super(e,t,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new qD(this.firestore,e,this._path)}};function jD(n,e,...t){if(n=Ie(n),dT("collection","path",e),n instanceof Id){const r=Be.fromString(e,...t);return rS(r),new ra(n,null,r)}{if(!(n instanceof Tt||n instanceof ra))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return rS(r),new ra(n.firestore,null,r)}}function jB(n,e){if(n=We(n,Id),dT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(Be.emptyPath(),r)}(e))}function up(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=O1.newId()),dT("doc","path",e),n instanceof Id){const r=Be.fromString(e,...t);return nS(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ra))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return nS(r),new Tt(n.firestore,n instanceof ra?n.converter:null,new ce(r))}}function HD(n,e){return n=Ie(n),e=Ie(e),(n instanceof Tt||n instanceof ra)&&(e instanceof Tt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function GD(n,e){return n=Ie(n),e=Ie(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&_d(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="AsyncQueue";class oS{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new YE(this,"async_queue_retry"),this.ju=()=>{const r=Dm();r&&re(aS,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=Dm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=Dm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new yn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ea(e))throw e;re(aS,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,kt("INTERNAL UNHANDLED ERROR: ",lS(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=ZE.createAndSchedule(this,e,t,r,l=>this.Xu(l));return this.Uu.push(a),a}Ju(){this.Ku&&pe(47125,{ec:lS(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function lS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of r)if(l in a&&typeof a[l]=="function")return!0;return!1}(n,["next","error","complete"])}class HB{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GB=-1;let Lt=class extends Id{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new oS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$D(n),n._firestoreClient}function $D(n){var e,t,r;const a=n._freezeSettings(),l=function(d,m,p,y){return new d6(d,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,MD(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new OB(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(n._componentsProvider))}function $B(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return KD(n,Jh.provider,{build:r=>new ND(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function KB(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();KD(n,Jh.provider,{build:t=>new DB(t,e.cacheSizeBytes)})}function KD(n,e,t){if((n=We(n,Lt))._firestoreClient||n._terminated)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},$D(n)}function QB(n){if(n._initialized&&!n._terminated)throw new te(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.C())return Promise.resolve();const a=r+rD;await oi.delete(a)}(GE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function YB(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>gB(await hT(t),r)),r.promise}(Sn(n=We(n,Lt)))}function WB(n){return kB(Sn(n=We(n,Lt)))}function XB(n){return MB(Sn(n=We(n,Lt)))}function JB(n,e){const t=Sn(n=We(n,Lt)),r=new HB;return zB(t,n._databaseId,e,r),r}function ZB(n,e){return FB(Sn(n=We(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mi(Dt.fromBase64String(e))}catch(t){throw new te(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ez=/^__.*__$/;class tz{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}class QD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function YD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{oc:n})}}class Xp{constructor(e,t,r,a,l,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a.lc(e),a}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return cp(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(YD(this.oc)&&ez.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class nz{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wd(e)}dc(e,t,r,a=!1){return new Xp({oc:e,methodName:t,Ec:r,path:mt.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=wd(n._databaseId);return new nz(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jp(n,e,t,r,a,l={}){const u=n.dc(l.merge||l.mergeFields?2:0,e,t,a);ET("Data must be an object, but it was:",u,r);const d=JD(r,u);let m,p;if(l.merge)m=new jn(u.fieldMask),p=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const v of l.mergeFields){const w=Cv(e,v,t);if(!u.contains(w))throw new te(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);eP(y,w)||y.push(w)}m=new jn(y),p=u.fieldTransforms.filter(v=>m.covers(v.field))}else m=null,p=u.fieldTransforms;return new tz(new _n(d),m,p)}class Ad extends Uo{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ad}}function WD(n,e,t){return new Xp({oc:3,Ec:e.settings.Ec,methodName:n._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mT extends Uo{_toFieldTransform(e){return new vd(e.path,new yu)}isEqual(e){return e instanceof mT}}class pT extends Uo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=WD(this,e,!0),r=this.Ac.map(l=>zo(l,t)),a=new Co(r);return new vd(e.path,a)}isEqual(e){return e instanceof pT&&ia(this.Ac,e.Ac)}}class gT extends Uo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=WD(this,e,!0),r=this.Ac.map(l=>zo(l,t)),a=new Do(r);return new vd(e.path,a)}isEqual(e){return e instanceof gT&&ia(this.Ac,e.Ac)}}class _T extends Uo{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new vu(e.serializer,TC(e.serializer,this.Rc));return new vd(e.path,t)}isEqual(e){return e instanceof _T&&this.Rc===e.Rc}}function yT(n,e,t,r){const a=n.dc(1,e,t);ET("Data must be an object, but it was:",a,r);const l=[],u=_n.empty();Ta(r,(m,p)=>{const y=TT(e,m,t);p=Ie(p);const v=a.hc(y);if(p instanceof Ad)l.push(y);else{const w=zo(p,v);w!=null&&(l.push(y),u.set(y,w))}});const d=new jn(l);return new QD(u,d,a.fieldTransforms)}function vT(n,e,t,r,a,l){const u=n.dc(1,e,t),d=[Cv(e,r,t)],m=[a];if(l.length%2!=0)throw new te(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Cv(e,l[w])),m.push(l[w+1]);const p=[],y=_n.empty();for(let w=d.length-1;w>=0;--w)if(!eP(p,d[w])){const S=d[w];let P=m[w];P=Ie(P);const M=u.hc(S);if(P instanceof Ad)p.push(S);else{const U=zo(P,M);U!=null&&(p.push(S),y.set(S,U))}}const v=new jn(p);return new QD(y,v,u.fieldTransforms)}function XD(n,e,t,r=!1){return zo(t,n.dc(r?4:3,e))}function zo(n,e){if(ZD(n=Ie(n)))return ET("Unsupported field value:",e,n),JD(n,e);if(n instanceof Uo)return function(r,a){if(!YD(a.oc))throw a.Tc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,a){const l=[];let u=0;for(const d of r){let m=zo(d,a.Pc(u));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),u++}return{arrayValue:{values:l}}}(n,e)}return function(r,a){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TC(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=gt.fromDate(r);return{timestampValue:Eu(a.serializer,l)}}if(r instanceof gt){const l=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(a.serializer,l)}}if(r instanceof Wp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mi)return{bytesValue:xC(a.serializer,r._byteString)};if(r instanceof Tt){const l=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(l))throw a.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:UE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof fT)return function(u,d){return{mapValue:{fields:{[RE]:{stringValue:CE},[pu]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw d.Tc("VectorValues must only contain numeric values.");return xE(d.serializer,p)})}}}}}}(r,a);throw a.Tc(`Unsupported field value: ${Yp(r)}`)}(n,e)}function JD(n,e){const t={};return W1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(n,(r,a)=>{const l=zo(a,e.uc(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function ZD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Wp||n instanceof mi||n instanceof Tt||n instanceof Uo||n instanceof fT)}function ET(n,e,t){if(!ZD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Yp(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function Cv(n,e,t){if((e=Ie(e))instanceof pa)return e._internalPath;if(typeof e=="string")return TT(n,e);throw cp("Field path arguments must be of type string or ",n,!1,void 0,t)}const rz=new RegExp("[~\\*/\\[\\]]");function TT(n,e,t){if(e.search(rz)>=0)throw cp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pa(...e.split("."))._internalPath}catch{throw cp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cp(n,e,t,r,a){const l=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||u)&&(m+=" (found",l&&(m+=` in field ${r}`),u&&(m+=` in document ${a}`),m+=")"),new te(K.INVALID_ARGUMENT,d+n+m)}function eP(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iz extends Zh{data(){return super.data()}}function Zp(n,e){return typeof e=="string"?TT(n,e):e instanceof pa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wT{}class Sd extends wT{}function Ks(n,e,...t){let r=[];e instanceof wT&&r.push(e),r=r.concat(t),function(l){const u=l.filter(m=>m instanceof bT).length,d=l.filter(m=>m instanceof eg).length;if(u>1||u>0&&d>0)throw new te(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class eg extends Sd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new eg(e,t,r)}_apply(e){const t=this._parse(e);return rP(e._query,t),new Mn(e.firestore,e.converter,mv(e._query,t))}_parse(e){const t=Bo(e.firestore);return function(l,u,d,m,p,y,v){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new te(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){cS(v,y);const P=[];for(const M of v)P.push(uS(m,l,M));w={arrayValue:{values:P}}}else w=uS(m,l,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||cS(v,y),w=XD(d,u,v,y==="in"||y==="not-in");return ze.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sz(n,e,t){const r=e,a=Zp("where",n);return eg._create(a,r,t)}class bT extends wT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let u=a;const d=l.getFlattenedFilters();for(const m of d)rP(u,m),u=mv(u,m)}(e._query,t),new Mn(e.firestore,e.converter,mv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class IT extends Sd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new IT(e,t)}_apply(e){const t=function(a,l,u){if(a.startAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qh(l,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,l){const u=a.explicitOrderBy.concat([l]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function az(n,e="asc"){const t=e,r=Zp("orderBy",n);return IT._create(r,t)}class tg extends Sd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new tg(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,ep(e._query,this._limit,this._limitType))}}function oz(n){return UD("limit",n),tg._create("limit",n,"F")}function lz(n){return UD("limitToLast",n),tg._create("limitToLast",n,"L")}class ng extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ng(e,t,r)}_apply(e){const t=nP(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,l){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)}(e._query,t))}}function uz(...n){return ng._create("startAt",n,!0)}function cz(...n){return ng._create("startAfter",n,!1)}class rg extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new rg(e,t,r)}_apply(e){const t=nP(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,l){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)}(e._query,t))}}function hz(...n){return rg._create("endBefore",n,!1)}function dz(...n){return rg._create("endAt",n,!0)}function nP(n,e,t,r){if(t[0]=Ie(t[0]),t[0]instanceof Zh)return function(l,u,d,m,p){if(!m)throw new te(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Jl(l))if(v.field.isKeyField())y.push(So(u,m.key));else{const w=m.data.field(v.field);if(Lp(w))throw new te(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new da(y,p)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Bo(n.firestore);return function(u,d,m,p,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new te(K.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let P=0;P<y.length;P++){const M=y[P];if(w[P].field.isKeyField()){if(typeof M!="string")throw new te(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof M}`);if(!PE(u)&&M.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${M}' contains a slash.`);const U=u.path.child(Be.fromString(M));if(!ce.isDocumentKey(U))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${U}' is not because it contains an odd number of segments.`);const j=new ce(U);S.push(So(d,j))}else{const U=XD(m,p,M);S.push(U)}}return new da(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function uS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new te(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PE(e)&&t.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!ce.isDocumentKey(r))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return So(n,new ce(r))}if(t instanceof Tt)return So(n,t._key);throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yp(t)}.`)}function cS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rP(n,e){const t=function(a,l){for(const u of a)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AT{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ta(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[pu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new fT(l)}convertGeoPoint(e){return new Wp(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Up(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);ye(jC(r),9688,{name:e});const a=new ua(r.get(1),r.get(3)),l=new ce(r.popFirst(5));return a.isEqual(t)||kt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class fz extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new mi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Zi=class extends Zh{constructor(e,t,r,a,l,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Zi{data(e={}){return super.data(e)}},ga=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new po(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new po(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const m=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new po(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new po(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return d.type!==0&&(p=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:mz(d.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function mz(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:n})}}function iP(n,e){return n instanceof Zi&&e instanceof Zi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ga&&e instanceof ga&&n._firestore===e._firestore&&GD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pz(n){n=We(n,Tt);const e=We(n.firestore,Lt);return VD(Sn(e),n._key).then(t=>ST(e,n,t))}class Fo extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new mi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function gz(n){n=We(n,Tt);const e=We(n.firestore,Lt),t=Sn(e),r=new Fo(e);return LB(t,n._key).then(a=>new Zi(e,r,n._key,a,new po(a!==null&&a.hasLocalMutations,!0),n.converter))}function _z(n){n=We(n,Tt);const e=We(n.firestore,Lt);return VD(Sn(e),n._key,{source:"server"}).then(t=>ST(e,n,t))}function yz(n){n=We(n,Mn);const e=We(n.firestore,Lt),t=Sn(e),r=new Fo(e);return tP(n._query),kD(t,n._query).then(a=>new ga(e,r,n,a))}function vz(n){n=We(n,Mn);const e=We(n.firestore,Lt),t=Sn(e),r=new Fo(e);return UB(t,n._query).then(a=>new ga(e,r,n,a))}function Ez(n){n=We(n,Mn);const e=We(n.firestore,Lt),t=Sn(e),r=new Fo(e);return kD(t,n._query,{source:"server"}).then(a=>new ga(e,r,n,a))}function hS(n,e,t){n=We(n,Tt);const r=We(n.firestore,Lt),a=ig(n.converter,e,t);return Rd(r,[Jp(Bo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,pt.none())])}function dS(n,e,t,...r){n=We(n,Tt);const a=We(n.firestore,Lt),l=Bo(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof pa?vT(l,"updateDoc",n._key,e,t,r):yT(l,"updateDoc",n._key,e),Rd(a,[u.toMutation(n._key,pt.exists(!0))])}function Tz(n){return Rd(We(n.firestore,Lt),[new Bu(n._key,pt.none())])}function wz(n,e){const t=We(n.firestore,Lt),r=up(n),a=ig(n.converter,e);return Rd(t,[Jp(Bo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,pt.exists(!1))]).then(()=>r)}function sP(n,...e){var t,r,a;n=Ie(n);let l={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Rv(e[u])||(l=e[u],u++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Rv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let m,p,y;if(n instanceof Tt)p=We(n.firestore,Lt),y=Lu(n._key.path),m={next:v=>{e[u]&&e[u](ST(p,n,v))},error:e[u+1],complete:e[u+2]};else{const v=We(n,Mn);p=We(v.firestore,Lt),y=v._query;const w=new Fo(p);m={next:S=>{e[u]&&e[u](new ga(p,w,v,S))},error:e[u+1],complete:e[u+2]},tP(n._query)}return function(w,S,P,M){const U=new Kp(M),j=new rT(S,U,P);return w.asyncQueue.enqueueAndForget(async()=>eT(await Su(w),j)),()=>{U.yu(),w.asyncQueue.enqueueAndForget(async()=>tT(await Su(w),j))}}(Sn(p),y,d,m)}function bz(n,e){return BB(Sn(n=We(n,Lt)),Rv(e)?e:{next:e})}function Rd(n,e){return function(r,a){const l=new yn;return r.asyncQueue.enqueueAndForget(async()=>dB(await hT(r),a,l)),l.promise}(Sn(n),e)}function ST(n,e,t){const r=t.docs.get(e._key),a=new Fo(n);return new Zi(n,a,e._key,r,new po(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Az=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bo(e)}set(e,t,r){this._verifyNotCommitted();const a=Js(e,this._firestore),l=ig(a.converter,t,r),u=Jp(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,pt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const l=Js(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof pa?vT(this._dataReader,"WriteBatch.update",l._key,t,r,a):yT(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(u.toMutation(l._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Js(e,this._firestore);return this._mutations=this._mutations.concat(new Bu(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Js(n,e){if((n=Ie(n)).firestore!==e)throw new te(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sz{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bo(e)}get(e){const t=Js(e,this._firestore),r=new fz(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return pe(24041);const l=a[0];if(l.isFoundDocument())return new Zh(this._firestore,r,l.key,l,t.converter);if(l.isNoDocument())return new Zh(this._firestore,r,t._key,null,t.converter);throw pe(18433,{doc:l})})}set(e,t,r){const a=Js(e,this._firestore),l=ig(a.converter,t,r),u=Jp(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const l=Js(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof pa?vT(this._dataReader,"Transaction.update",l._key,t,r,a):yT(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,u),this}delete(e){const t=Js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rz=class extends Sz{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Js(e,this._firestore),r=new Fo(this._firestore);return super.get(e).then(a=>new Zi(this._firestore,r,t._key,a._document,new po(!1,!1),t.converter))}};function Cz(n,e,t){n=We(n,Lt);const r=Object.assign(Object.assign({},Iz),t);return function(l){if(l.maxAttempts<1)throw new te(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(l,u,d){const m=new yn;return l.asyncQueue.enqueueAndForget(async()=>{const p=await VB(l);new xB(l.asyncQueue,p,d,u,m).Nu()}),m.promise}(Sn(n),a=>e(new Rz(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dz(){return new Ad("deleteField")}function Pz(){return new mT("serverTimestamp")}function Nz(...n){return new pT("arrayUnion",n)}function xz(...n){return new gT("arrayRemove",n)}function Oz(n){return new _T("increment",n)}(function(e,t=!0){(function(a){Mu=a})(_a),oa(new ci("firestore",(r,{instanceIdentifier:a,options:l})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new R4(r.getProvider("auth-internal")),new P4(u,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new te(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(p.options.projectId,y)}(u,a),u);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Or(qI,jI,e),Or(qI,jI,"esm2017")})();const Vz="@firebase/firestore-compat",kz="0.3.47";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function mS(){if(!c6())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ed{constructor(e){this._delegate=e}static fromBase64String(e){return mS(),new ed(mi.fromBase64String(e))}static fromUint8Array(e){return fS(),new ed(mi.fromUint8Array(e))}toBase64(){return mS(),this._delegate.toBase64()}toUint8Array(){return fS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){return Mz(n,["next","error","complete"])}function Mz(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lz{enableIndexedDbPersistence(e,t){return $B(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return KB(e._delegate)}clearIndexedDbPersistence(e){return QB(e._delegate)}}class aP{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){qB(this._delegate,e,t,r)}enableNetwork(){return WB(this._delegate)}disableNetwork(){return XB(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,LD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return YB(this._delegate)}onSnapshotsInSync(e){return bz(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ru(this,jD(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,up(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xn(this,jB(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Cz(this._delegate,t=>e(new oP(this,t)))}batch(){return Sn(this._delegate),new lP(new Az(this._delegate,e=>Rd(this._delegate,e)))}loadBundle(e){return JB(this._delegate,e)}namedQuery(e){return ZB(this._delegate,e).then(t=>t?new xn(this,t):null)}}class sg extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ed(new mi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function Uz(n){b4(n)}class oP{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}get(e){const t=go(e);return this._delegate.get(t).then(r=>new td(this._firestore,new Zi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=go(e);return r?(RT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const l=go(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}}class lP{constructor(e){this._delegate=e}set(e,t,r){const a=go(e);return r?(RT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const l=go(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nd(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Vo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let l=a.get(t);return l||(l=new Vo(e,new sg(e),t),a.set(t,l)),l}}Vo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ru(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ru(this.firestore,jD(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof Tt?HD(this._delegate,e):!1}set(e,t){t=RT("DocumentReference.set",t);try{return t?hS(this._delegate,e,t):hS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?dS(this._delegate,e):dS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return Tz(this._delegate)}onSnapshot(...e){const t=uP(e),r=cP(e,a=>new td(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return sP(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=gz(this._delegate):(e==null?void 0:e.source)==="server"?t=_z(this._delegate):t=pz(this._delegate),t.then(r=>new td(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function uP(n){for(const e of n)if(typeof e=="object"&&!Dv(e))return e;return{}}function cP(n,e){var t,r;let a;return Dv(n[0])?a=n[0]:Dv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class td{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iP(this._delegate,e._delegate)}}class nd extends td{data(e){const t=this._delegate.data(e);return this._delegate._converter||I4(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class xn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}where(e,t,r){try{return new xn(this.firestore,Ks(this._delegate,sz(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xn(this.firestore,Ks(this._delegate,az(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xn(this.firestore,Ks(this._delegate,oz(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xn(this.firestore,Ks(this._delegate,lz(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xn(this.firestore,Ks(this._delegate,uz(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xn(this.firestore,Ks(this._delegate,cz(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xn(this.firestore,Ks(this._delegate,hz(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xn(this.firestore,Ks(this._delegate,dz(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return GD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=vz(this._delegate):(e==null?void 0:e.source)==="server"?t=Ez(this._delegate):t=yz(this._delegate),t.then(r=>new Pv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=uP(e),r=cP(e,a=>new Pv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return sP(this._delegate,t,r)}withConverter(e){return new xn(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Bz{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new nd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Pv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new nd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Bz(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new nd(this._firestore,r))})}isEqual(e){return iP(this._delegate,e._delegate)}}class Ru extends xn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,up(this._delegate)):new Er(this.firestore,up(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return wz(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return HD(this._delegate,e._delegate)}withConverter(e){return new Ru(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function go(n){return We(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(...e){this._delegate=new pa(...e)}static documentId(){return new CT(mt.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof pa?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static serverTimestamp(){const e=Pz();return e._methodName="FieldValue.serverTimestamp",new co(e)}static delete(){const e=Dz();return e._methodName="FieldValue.delete",new co(e)}static arrayUnion(...e){const t=Nz(...e);return t._methodName="FieldValue.arrayUnion",new co(t)}static arrayRemove(...e){const t=xz(...e);return t._methodName="FieldValue.arrayRemove",new co(t)}static increment(e){const t=Oz(e);return t._methodName="FieldValue.increment",new co(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zz={Firestore:aP,GeoPoint:Wp,Timestamp:gt,Blob:ed,Transaction:oP,WriteBatch:lP,DocumentReference:Er,DocumentSnapshot:td,Query:xn,QueryDocumentSnapshot:nd,QuerySnapshot:Pv,CollectionReference:Ru,FieldPath:CT,FieldValue:co,setLogLevel:Uz,CACHE_SIZE_UNLIMITED:GB};function Fz(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},zz)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qz(n){Fz(n,(e,t)=>new aP(e,t,new Lz)),n.registerVersion(Vz,kz)}qz(xu);const jz={apiKey:"AIzaSyDAMAuf1yHBiC-TF2emk6gZOsNqB17hLcs",authDomain:"react-app-mini-blog-65cda.firebaseapp.com",projectId:"react-app-mini-blog-65cda",storageBucket:"react-app-mini-blog-65cda.firebasestorage.app",messagingSenderId:"505114452480",appId:"1:505114452480:web:262824cbb1fd6219972ee5"},Hz=xu.initializeApp(jz),Dh=Hz.firestore();function Gz(n){const e=dp(),[t,r]=W.useState("2025"),[a,l]=W.useState("05"),[u,d]=W.useState([]),[m,p]=W.useState([]),[y,v]=W.useState(!1),w=W.useRef([]);W.useEffect(()=>{Dh.collection("post").get().then(j=>{const Y=[];j.forEach(ae=>{Y.push(ae.data())});const G=Y.sort((ae,ie)=>ie.id-ae.id);w.current=G,d(G),S(G,t,a)})},[]),W.useEffect(()=>{S(w.current,t,a)},[t,a]);const S=(j,Y,G)=>{const ae=j.filter(ie=>ie.year===Y&&ie.month===G);p(ae)},P=j=>{r(j.target.value)},M=j=>{l(j.target.value)},U=()=>{const j=!y;v(j);const Y=[...w.current].sort((G,ae)=>j?G.id-ae.id:ae.id-G.id);w.current=Y,S(Y,t,a)};return Z.jsxs("div",{className:"blog",children:[Z.jsx("div",{className:"navWrapper",children:Z.jsx(jv,{})}),Z.jsxs("div",{className:"content",children:[Z.jsx("h1",{children:"Post"}),Z.jsxs(Mm,{marginTop:"64",children:[Z.jsxs("div",{children:[Z.jsxs("select",{value:t,onChange:P,children:[Z.jsx("option",{value:"2024",children:"2024"}),Z.jsx("option",{value:"2025",children:"2025"})]}),Z.jsxs("select",{value:a,onChange:M,children:[Z.jsx("option",{value:"01",children:"01"}),Z.jsx("option",{value:"02",children:"02"}),Z.jsx("option",{value:"03",children:"03"}),Z.jsx("option",{value:"04",children:"04"}),Z.jsx("option",{value:"05",children:"05"}),Z.jsx("option",{value:"06",children:"06"}),Z.jsx("option",{value:"07",children:"07"}),Z.jsx("option",{value:"08",children:"08"}),Z.jsx("option",{value:"09",children:"09"}),Z.jsx("option",{value:"10",children:"10"}),Z.jsx("option",{value:"11",children:"11"}),Z.jsx("option",{value:"12",children:"12"})]}),Z.jsx(vo,{color:"white",type:"outline",icon:y?Z.jsx("i",{className:"fa-solid fa-arrow-up"}):Z.jsx("i",{className:"fa-solid fa-arrow-down"}),onClick:U})]}),Z.jsx(vo,{text:"Create  ",icon:Z.jsx("i",{className:"fa-regular fa-pen-to-square"}),onClick:j=>{e("/write")}})]}),Z.jsx("br",{}),Z.jsx("hr",{}),Z.jsx(iR,{marginTop:"32",children:Z.jsx(SV,{posts:m,itemClicked:j=>{e(`/post/${j.id}`)}})})]})]})}const $z=lt.textarea`
    background-color: white;
    height: ${n=>n.height}px;
    margin-top:24px;
    width: ${n=>n.width}px;
    display: block;
    border-radius:16px;
    padding:24px;
    resize:none;
    font-size:16px;
    color:#323232;
    line-height:160%;
`;function Pm(n){const{height:e,width:t,value:r,onChange:a}=n;return Z.jsx($z,{height:e||20,width:t||1042,value:r,onChange:a})}function Kz(n){const e=dp(),[t,r]=W.useState(""),[a,l]=W.useState(""),[u,d]=W.useState(""),[m,p]=W.useState(String(new Date().getFullYear())),[y,v]=W.useState(String(new Date().getMonth()+1).padStart(2,"0")),[w,S]=W.useState(String(new Date().getDate()).padStart(2,"0"));W.useEffect(()=>{r(m+"."+y+"."+w)},[]);const P=()=>{let M=new Date().getTime().toString();Dh.collection("post").doc(M).set({id:M,year:m,month:y,day:w,date:t,title:a,content:u,comments:[]}).then(()=>{alert("글이 등록되었습니다!"),e("/")})};return Z.jsxs("div",{className:"blog",children:[Z.jsx("div",{className:"navWrapper",children:Z.jsx(jv,{})}),Z.jsxs("div",{className:"content",children:[Z.jsx("h1",{children:"Writing"}),Z.jsxs("div",{children:[Z.jsx("div",{className:"writeTitle",children:Z.jsx("h2",{children:"Date"})}),Z.jsx("div",{className:"wrapper",children:Z.jsx(Pm,{width:"882",value:t,onChange:M=>r(M.target.value)})})]}),Z.jsxs("div",{children:[Z.jsx("div",{className:"writeTitle",children:Z.jsx("h2",{children:"Title"})}),Z.jsx("div",{className:"wrapper",children:Z.jsx(Pm,{width:"882",value:a,onChange:M=>l(M.target.value)})})]}),Z.jsxs("div",{children:[Z.jsx("div",{className:"writeTitle",children:Z.jsx("h2",{children:"Content"})}),Z.jsx("div",{className:"wrapper",children:Z.jsx(Pm,{height:"280",width:"882",value:u,onChange:M=>d(M.target.value)})})]}),Z.jsxs(Mm,{marginBottom:"36",children:[Z.jsx(vo,{icon:Z.jsx("i",{className:"fa-solid fa-arrow-left"}),onClick:M=>{e("/")}}),Z.jsx(vo,{text:"Upload",onClick:M=>{P()}})]})]})]})}const Qz=lt.div`
    background-color: white;
    padding:32px;
    border-radius:16px;
    margin-top:24px;
    display: block;
    width:1024px;
    color:#323232;
`,Yz=lt.h3`
    font-size:20px;
    font-weight:600;
    margin-bottom: 32px;
`,Wz=lt.h3`
    font-size:32px;
    font-weight:600;
    margin-bottom:32px;
`,Xz=lt.p`
    font-size:16px;
    text-align: justify;
    font-weight:regular;
    line-height:160%;
`;function Jz(n){const{post:e}=n;return Z.jsxs(Qz,{children:[Z.jsx(Yz,{children:e.date}),Z.jsx(Wz,{children:e.title}),Z.jsx(Xz,{children:e.content})]})}const Zz=lt.div`
    background-color: white;
    display: block;
    width:1040px;
    padding:24px;
    margin-top:16px;
    border-radius:16px;
`,e5=lt.p`
    font-size: 16px;
`;function t5(n){const{comment:e}=n;return Z.jsx(Zz,{children:Z.jsx(e5,{children:e.content})})}const n5=lt.div`
`;function r5(n){const{comments:e}=n,t=e.map((r,a)=>Z.jsx(t5,{comment:r},r.id));return Z.jsx(n5,{children:t})}function i5(n){const e=dp(),t=wx().id,[r,a]=W.useState({id:0,title:"",content:"",comments:[]}),l=()=>{Dh.collection("post").doc(t).delete().then(function(){e("/")})};W.useEffect(()=>{Dh.collection("post").doc(t).get().then(p=>{a(p.data())})},[]);const[u,d]=W.useState(""),m=()=>{let p=new Date().getTime().toString(),y=r.comments;y.push({id:`${t}_${p}`,content:u}),Dh.collection("post").doc(t).update({comments:y}).then(()=>{alert("댓글이 등록되었습니다!"),d("")})};return Z.jsxs("div",{className:"blog",children:[Z.jsx("div",{className:"navWrapper",children:Z.jsx(jv,{})}),Z.jsxs("div",{className:"content",children:[Z.jsxs(Mm,{marginTop:"40",children:[Z.jsx(vo,{icon:Z.jsx("i",{className:"fa-solid fa-arrow-left"}),onClick:p=>{e("/")}}),Z.jsx(vo,{color:"grey",type:"solid",text:"Delete",onClick:p=>{window.confirm("삭제하시겠습니까?")&&l()}})]}),Z.jsx(Jz,{post:r}),Z.jsx("br",{}),Z.jsx("hr",{}),Z.jsxs(Mm,{marginBottom:"12",children:[Z.jsx(Pm,{width:"917",value:u,onChange:p=>{d(p.target.value)}}),Z.jsx(vo,{text:"Upload",borderRadius:"16px",onClick:p=>{m()}})]}),Z.jsx(iR,{height:"320",children:Z.jsx(r5,{comments:r.comments})})]})]})}GN.createRoot(document.getElementById("root")).render(Z.jsx(oO,{basename:"/parkyein0413.github.io/",children:Z.jsxs(Lx,{children:[Z.jsx(om,{index:!0,element:Z.jsx(Gz,{})}),Z.jsx(om,{path:"write",element:Z.jsx(Kz,{})}),Z.jsx(om,{path:"post/:id",element:Z.jsx(i5,{})})]})}));
