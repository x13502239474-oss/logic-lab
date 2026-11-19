function m4(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(n,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function f4(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ed={exports:{}},J0={},Bd={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),v4=Symbol.for("react.portal"),g4=Symbol.for("react.fragment"),x4=Symbol.for("react.strict_mode"),y4=Symbol.for("react.profiler"),$4=Symbol.for("react.provider"),w4=Symbol.for("react.context"),S4=Symbol.for("react.forward_ref"),k4=Symbol.for("react.suspense"),b4=Symbol.for("react.memo"),A4=Symbol.for("react.lazy"),mc=Symbol.iterator;function P4(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Nd={};function ms(e,t,r){this.props=e,this.context=t,this.refs=Nd,this.updater=r||zd}ms.prototype.isReactComponent={};ms.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ms.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Td(){}Td.prototype=ms.prototype;function Vo(e,t,r){this.props=e,this.context=t,this.refs=Nd,this.updater=r||zd}var Go=Vo.prototype=new Td;Go.constructor=Vo;Md(Go,ms.prototype);Go.isPureReactComponent=!0;var fc=Array.isArray,Dd=Object.prototype.hasOwnProperty,Xo={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,r){var n,s={},l=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Dd.call(t,n)&&!Id.hasOwnProperty(n)&&(s[n]=t[n]);var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){for(var u=Array(o),p=0;p<o;p++)u[p]=arguments[p+2];s.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)s[n]===void 0&&(s[n]=o[n]);return{$$typeof:vl,type:e,key:l,ref:i,props:s,_owner:Xo.current}}function j4(e,t){return{$$typeof:vl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===vl}function C4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var vc=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C4(""+e.key):t.toString(36)}function n0(e,t,r,n,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case vl:case v4:i=!0}}if(i)return i=e,s=s(i),e=n===""?"."+Ni(i,0):n,fc(s)?(r="",e!=null&&(r=e.replace(vc,"$&/")+"/"),n0(s,t,r,"",function(p){return p})):s!=null&&(Yo(s)&&(s=j4(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(vc,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=n===""?".":n+":",fc(e))for(var o=0;o<e.length;o++){l=e[o];var u=n+Ni(l,o);i+=n0(l,t,r,u,s)}else if(u=P4(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=n+Ni(l,o++),i+=n0(l,t,r,u,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Cl(e,t,r){if(e==null)return e;var n=[],s=0;return n0(e,n,"","",function(l){return t.call(r,l,s++)}),n}function q4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},s0={transition:null},E4={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:s0,ReactCurrentOwner:Xo};function Od(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Cl,forEach:function(e,t,r){Cl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cl(e,function(){t++}),t},toArray:function(e){return Cl(e,function(t){return t})||[]},only:function(e){if(!Yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=ms;ee.Fragment=g4;ee.Profiler=y4;ee.PureComponent=Vo;ee.StrictMode=x4;ee.Suspense=k4;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E4;ee.act=Od;ee.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Md({},e.props),s=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Xo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)Dd.call(t,u)&&!Id.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){o=Array(u);for(var p=0;p<u;p++)o[p]=arguments[p+2];n.children=o}return{$$typeof:vl,type:e.type,key:s,ref:l,props:n,_owner:i}};ee.createContext=function(e){return e={$$typeof:w4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$4,_context:e},e.Consumer=e};ee.createElement=Rd;ee.createFactory=function(e){var t=Rd.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:S4,render:e}};ee.isValidElement=Yo;ee.lazy=function(e){return{$$typeof:A4,_payload:{_status:-1,_result:e},_init:q4}};ee.memo=function(e,t){return{$$typeof:b4,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=s0.transition;s0.transition={};try{e()}finally{s0.transition=t}};ee.unstable_act=Od;ee.useCallback=function(e,t){return st.current.useCallback(e,t)};ee.useContext=function(e){return st.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return st.current.useDeferredValue(e)};ee.useEffect=function(e,t){return st.current.useEffect(e,t)};ee.useId=function(){return st.current.useId()};ee.useImperativeHandle=function(e,t,r){return st.current.useImperativeHandle(e,t,r)};ee.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return st.current.useMemo(e,t)};ee.useReducer=function(e,t,r){return st.current.useReducer(e,t,r)};ee.useRef=function(e){return st.current.useRef(e)};ee.useState=function(e){return st.current.useState(e)};ee.useSyncExternalStore=function(e,t,r){return st.current.useSyncExternalStore(e,t,r)};ee.useTransition=function(){return st.current.useTransition()};ee.version="18.3.1";Bd.exports=ee;var B=Bd.exports;const Ld=f4(B),B4=m4({__proto__:null,default:Ld},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z4=B,M4=Symbol.for("react.element"),N4=Symbol.for("react.fragment"),T4=Object.prototype.hasOwnProperty,D4=z4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I4={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,r){var n,s={},l=null,i=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)T4.call(t,n)&&!I4.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:M4,type:e,key:l,ref:i,props:s,_owner:D4.current}}J0.Fragment=N4;J0.jsx=Fd;J0.jsxs=Fd;Ed.exports=J0;var a=Ed.exports,Hd={exports:{}},kt={},_d={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,X){var G=F.length;F.push(X);e:for(;0<G;){var ae=G-1>>>1,me=F[ae];if(0<s(me,X))F[ae]=X,F[G]=me,G=ae;else break e}}function r(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var X=F[0],G=F.pop();if(G!==X){F[0]=G;e:for(var ae=0,me=F.length,_e=me>>>1;ae<_e;){var Ct=2*(ae+1)-1,qn=F[Ct],lr=Ct+1,Rt=F[lr];if(0>s(qn,G))lr<me&&0>s(Rt,qn)?(F[ae]=Rt,F[lr]=G,ae=lr):(F[ae]=qn,F[Ct]=G,ae=Ct);else if(lr<me&&0>s(Rt,G))F[ae]=Rt,F[lr]=G,ae=lr;else break e}}return X}function s(F,X){var G=F.sortIndex-X.sortIndex;return G!==0?G:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var u=[],p=[],h=1,f=null,m=3,x=!1,A=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(F){for(var X=r(p);X!==null;){if(X.callback===null)n(p);else if(X.startTime<=F)n(p),X.sortIndex=X.expirationTime,t(u,X);else break;X=r(p)}}function q(F){if(w=!1,b(F),!A)if(r(u)!==null)A=!0,jt(C);else{var X=r(p);X!==null&&Wt(q,X.startTime-F)}}function C(F,X){A=!1,w&&(w=!1,$(N),N=-1),x=!0;var G=m;try{for(b(X),f=r(u);f!==null&&(!(f.expirationTime>X)||F&&!le());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,m=f.priorityLevel;var me=ae(f.expirationTime<=X);X=e.unstable_now(),typeof me=="function"?f.callback=me:f===r(u)&&n(u),b(X)}else n(u);f=r(u)}if(f!==null)var _e=!0;else{var Ct=r(p);Ct!==null&&Wt(q,Ct.startTime-X),_e=!1}return _e}finally{f=null,m=G,x=!1}}var E=!1,z=null,N=-1,Q=5,U=-1;function le(){return!(e.unstable_now()-U<Q)}function ie(){if(z!==null){var F=e.unstable_now();U=F;var X=!0;try{X=z(!0,F)}finally{X?He():(E=!1,z=null)}}else E=!1}var He;if(typeof y=="function")He=function(){y(ie)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,mt=De.port2;De.port1.onmessage=ie,He=function(){mt.postMessage(null)}}else He=function(){j(ie,0)};function jt(F){z=F,E||(E=!0,He())}function Wt(F,X){N=j(function(){F(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){A||x||(A=!0,jt(C))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(F){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var G=m;m=X;try{return F()}finally{m=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=m;m=F;try{return X()}finally{m=G}},e.unstable_scheduleCallback=function(F,X,G){var ae=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ae+G:ae):G=ae,F){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=G+me,F={id:h++,callback:X,priorityLevel:F,startTime:G,expirationTime:me,sortIndex:-1},G>ae?(F.sortIndex=G,t(p,F),r(u)===null&&F===r(p)&&(w?($(N),N=-1):w=!0,Wt(q,G-ae))):(F.sortIndex=me,t(u,F),A||x||(A=!0,jt(C))),F},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(F){var X=m;return function(){var G=m;m=X;try{return F.apply(this,arguments)}finally{m=G}}}})(Qd);_d.exports=Qd;var R4=_d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O4=B,wt=R4;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ud=new Set,Gs={};function bn(e,t){ss(e,t),ss(e+"Capture",t)}function ss(e,t){for(Gs[e]=t,e=0;e<t.length;e++)Ud.add(t[e])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ba=Object.prototype.hasOwnProperty,L4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},xc={};function F4(e){return Ba.call(xc,e)?!0:Ba.call(gc,e)?!1:L4.test(e)?xc[e]=!0:(gc[e]=!0,!1)}function H4(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _4(e,t,r,n){if(t===null||typeof t>"u"||H4(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,r,n,s,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ko,Zo);Fe[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ko,Zo);Fe[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ko,Zo);Fe[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jo(e,t,r,n){var s=Fe.hasOwnProperty(t)?Fe[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_4(t,r,s,n)&&(r=null),n||s===null?F4(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var wr=O4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),tu=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),ru=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Ss(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Ti;function Bs(e){if(Ti===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Di=!1;function Ii(e,t){if(!e||Di)return"";Di=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var n=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){n=p}e.call(t.prototype)}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var s=p.stack.split(`
`),l=n.stack.split(`
`),i=s.length-1,o=l.length-1;1<=i&&0<=o&&s[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(s[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||s[i]!==l[o]){var u=`
`+s[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=o);break}}}finally{Di=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Bs(e):""}function Q4(e){switch(e.tag){case 5:return Bs(e.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Nn:return"Portal";case za:return"Profiler";case eu:return"StrictMode";case Ma:return"Suspense";case Na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Wd:return(e._context.displayName||"Context")+".Provider";case tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ru:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case Er:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function U4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W4(e){var t=Xd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function El(e){e._valueTracker||(e._valueTracker=W4(e))}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Xd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function w0(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var r=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $c(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Xr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kd(e,t){t=t.checked,t!=null&&Jo(e,"checked",t,!1)}function Ia(e,t){Kd(e,t);var r=Xr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ra(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ra(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ra(e,t,r){(t!=="number"||w0(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var zs=Array.isArray;function Gn(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Xr(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(D(92));if(zs(r)){if(1<r.length)throw Error(D(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Xr(r)}}function Zd(e,t){var r=Xr(t.value),n=Xr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bl,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V4=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){V4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Is[t]=Is[e]})});function tp(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Is.hasOwnProperty(e)&&Is[e]?(""+t).trim():t+"px"}function rp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=tp(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var G4=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(G4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Xn=null,Yn=null;function bc(e){if(e=yl(e)){if(typeof Qa!="function")throw Error(D(280));var t=e.stateNode;t&&(t=si(t),Qa(e.stateNode,e.type,t))}}function np(e){Xn?Yn?Yn.push(e):Yn=[e]:Xn=e}function sp(){if(Xn){var e=Xn,t=Yn;if(Yn=Xn=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function lp(e,t){return e(t)}function ip(){}var Ri=!1;function ap(e,t,r){if(Ri)return e(t,r);Ri=!0;try{return lp(e,t,r)}finally{Ri=!1,(Xn!==null||Yn!==null)&&(ip(),sp())}}function Ys(e,t){var r=e.stateNode;if(r===null)return null;var n=si(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(D(231,t,typeof r));return r}var Ua=!1;if(vr)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Ua=!1}function X4(e,t,r,n,s,l,i,o,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(r,p)}catch(h){this.onError(h)}}var Rs=!1,S0=null,k0=!1,Wa=null,Y4={onError:function(e){Rs=!0,S0=e}};function K4(e,t,r,n,s,l,i,o,u){Rs=!1,S0=null,X4.apply(Y4,arguments)}function Z4(e,t,r,n,s,l,i,o,u){if(K4.apply(this,arguments),Rs){if(Rs){var p=S0;Rs=!1,S0=null}else throw Error(D(198));k0||(k0=!0,Wa=p)}}function An(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function op(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if(An(e)!==e)throw Error(D(188))}function J4(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(D(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var l=s.alternate;if(l===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===r)return Ac(s),e;if(l===n)return Ac(s),t;l=l.sibling}throw Error(D(188))}if(r.return!==n.return)r=s,n=l;else{for(var i=!1,o=s.child;o;){if(o===r){i=!0,r=s,n=l;break}if(o===n){i=!0,n=s,r=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===r){i=!0,r=l,n=s;break}if(o===n){i=!0,n=l,r=s;break}o=o.sibling}if(!i)throw Error(D(189))}}if(r.alternate!==n)throw Error(D(190))}if(r.tag!==3)throw Error(D(188));return r.stateNode.current===r?e:t}function up(e){return e=J4(e),e!==null?cp(e):null}function cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cp(e);if(t!==null)return t;e=e.sibling}return null}var dp=wt.unstable_scheduleCallback,Pc=wt.unstable_cancelCallback,ef=wt.unstable_shouldYield,tf=wt.unstable_requestPaint,Pe=wt.unstable_now,rf=wt.unstable_getCurrentPriorityLevel,su=wt.unstable_ImmediatePriority,pp=wt.unstable_UserBlockingPriority,b0=wt.unstable_NormalPriority,nf=wt.unstable_LowPriority,hp=wt.unstable_IdlePriority,ei=null,Jt=null;function sf(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:of,lf=Math.log,af=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(lf(e)/af|0)|0}var zl=64,Ml=4194304;function Ms(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function A0(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,l=e.pingedLanes,i=r&268435455;if(i!==0){var o=i&~s;o!==0?n=Ms(o):(l&=i,l!==0&&(n=Ms(l)))}else i=r&~s,i!==0?n=Ms(i):l!==0&&(n=Ms(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-_t(t),s=1<<r,n|=e[r],t&=~s;return n}function uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-_t(l),o=1<<i,u=s[i];u===-1?(!(o&r)||o&n)&&(s[i]=uf(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=zl;return zl<<=1,!(zl&4194240)&&(zl=64),e}function Oi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gl(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=r}function df(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-_t(r),l=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~l}}function lu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-_t(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var oe=0;function fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,iu,gp,xp,yp,Ga=!1,Nl=[],Fr=null,Hr=null,_r=null,Ks=new Map,Zs=new Map,Mr=[],pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Ks.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(t.pointerId)}}function bs(e,t,r,n,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[s]},t!==null&&(t=yl(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function hf(e,t,r,n,s){switch(t){case"focusin":return Fr=bs(Fr,e,t,r,n,s),!0;case"dragenter":return Hr=bs(Hr,e,t,r,n,s),!0;case"mouseover":return _r=bs(_r,e,t,r,n,s),!0;case"pointerover":var l=s.pointerId;return Ks.set(l,bs(Ks.get(l)||null,e,t,r,n,s)),!0;case"gotpointercapture":return l=s.pointerId,Zs.set(l,bs(Zs.get(l)||null,e,t,r,n,s)),!0}return!1}function $p(e){var t=pn(e.target);if(t!==null){var r=An(t);if(r!==null){if(t=r.tag,t===13){if(t=op(r),t!==null){e.blockedOn=t,yp(e.priority,function(){gp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function l0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);_a=n,r.target.dispatchEvent(n),_a=null}else return t=yl(r),t!==null&&iu(t),e.blockedOn=r,!1;t.shift()}return!0}function Cc(e,t,r){l0(e)&&r.delete(t)}function mf(){Ga=!1,Fr!==null&&l0(Fr)&&(Fr=null),Hr!==null&&l0(Hr)&&(Hr=null),_r!==null&&l0(_r)&&(_r=null),Ks.forEach(Cc),Zs.forEach(Cc)}function As(e,t){e.blockedOn===t&&(e.blockedOn=null,Ga||(Ga=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,mf)))}function Js(e){function t(s){return As(s,e)}if(0<Nl.length){As(Nl[0],e);for(var r=1;r<Nl.length;r++){var n=Nl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Fr!==null&&As(Fr,e),Hr!==null&&As(Hr,e),_r!==null&&As(_r,e),Ks.forEach(t),Zs.forEach(t),r=0;r<Mr.length;r++)n=Mr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Mr.length&&(r=Mr[0],r.blockedOn===null);)$p(r),r.blockedOn===null&&Mr.shift()}var Kn=wr.ReactCurrentBatchConfig,P0=!0;function ff(e,t,r,n){var s=oe,l=Kn.transition;Kn.transition=null;try{oe=1,au(e,t,r,n)}finally{oe=s,Kn.transition=l}}function vf(e,t,r,n){var s=oe,l=Kn.transition;Kn.transition=null;try{oe=4,au(e,t,r,n)}finally{oe=s,Kn.transition=l}}function au(e,t,r,n){if(P0){var s=Xa(e,t,r,n);if(s===null)Xi(e,t,n,j0,r),jc(e,n);else if(hf(s,e,t,r,n))n.stopPropagation();else if(jc(e,n),t&4&&-1<pf.indexOf(e)){for(;s!==null;){var l=yl(s);if(l!==null&&vp(l),l=Xa(e,t,r,n),l===null&&Xi(e,t,n,j0,r),l===s)break;s=l}s!==null&&n.stopPropagation()}else Xi(e,t,n,null,r)}}var j0=null;function Xa(e,t,r,n){if(j0=null,e=nu(n),e=pn(e),e!==null)if(t=An(e),t===null)e=null;else if(r=t.tag,r===13){if(e=op(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return j0=e,null}function wp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rf()){case su:return 1;case pp:return 4;case b0:case nf:return 16;case hp:return 536870912;default:return 16}default:return 16}}var Ir=null,ou=null,i0=null;function Sp(){if(i0)return i0;var e,t=ou,r=t.length,n,s="value"in Ir?Ir.value:Ir.textContent,l=s.length;for(e=0;e<r&&t[e]===s[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===s[l-n];n++);return i0=s.slice(e,1<n?1-n:void 0)}function a0(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function qc(){return!1}function bt(e){function t(r,n,s,l,i){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tl:qc,this.isPropagationStopped=qc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),t}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=bt(fs),xl=Se({},fs,{view:0,detail:0}),gf=bt(xl),Li,Fi,Ps,ti=Se({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ps&&(Ps&&e.type==="mousemove"?(Li=e.screenX-Ps.screenX,Fi=e.screenY-Ps.screenY):Fi=Li=0,Ps=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),Ec=bt(ti),xf=Se({},ti,{dataTransfer:0}),yf=bt(xf),$f=Se({},xl,{relatedTarget:0}),Hi=bt($f),wf=Se({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sf=bt(wf),kf=Se({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bf=bt(kf),Af=Se({},fs,{data:0}),Bc=bt(Af),Pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function cu(){return qf}var Ef=Se({},xl,{key:function(e){if(e.key){var t=Pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=a0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?a0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?a0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=bt(Ef),zf=Se({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=bt(zf),Mf=Se({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Nf=bt(Mf),Tf=Se({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Df=bt(Tf),If=Se({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=bt(If),Of=[9,13,27,32],du=vr&&"CompositionEvent"in window,Os=null;vr&&"documentMode"in document&&(Os=document.documentMode);var Lf=vr&&"TextEvent"in window&&!Os,kp=vr&&(!du||Os&&8<Os&&11>=Os),Mc=" ",Nc=!1;function bp(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Ff(e,t){switch(e){case"compositionend":return Ap(t);case"keypress":return t.which!==32?null:(Nc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Nc?null:e;default:return null}}function Hf(e,t){if(Dn)return e==="compositionend"||!du&&bp(e,t)?(e=Sp(),i0=ou=Ir=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kp&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function Pp(e,t,r,n){np(n),t=C0(t,"onChange"),0<t.length&&(r=new uu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ls=null,el=null;function Qf(e){Ip(e,0)}function ri(e){var t=On(e);if(Yd(t))return e}function Uf(e,t){if(e==="change")return t}var jp=!1;if(vr){var _i;if(vr){var Qi="oninput"in document;if(!Qi){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Qi=typeof Dc.oninput=="function"}_i=Qi}else _i=!1;jp=_i&&(!document.documentMode||9<document.documentMode)}function Ic(){Ls&&(Ls.detachEvent("onpropertychange",Cp),el=Ls=null)}function Cp(e){if(e.propertyName==="value"&&ri(el)){var t=[];Pp(t,el,e,nu(e)),ap(Qf,t)}}function Wf(e,t,r){e==="focusin"?(Ic(),Ls=t,el=r,Ls.attachEvent("onpropertychange",Cp)):e==="focusout"&&Ic()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(el)}function Gf(e,t){if(e==="click")return ri(t)}function Xf(e,t){if(e==="input"||e==="change")return ri(t)}function Yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Yf;function tl(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Ba.call(t,s)||!Ut(e[s],t[s]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var r=Rc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rc(r)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ep(){for(var e=window,t=w0();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=w0(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kf(e){var t=Ep(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qp(r.ownerDocument.documentElement,r)){if(n!==null&&pu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,l=Math.min(n.start,s);n=n.end===void 0?l:Math.min(n.end,s),!e.extend&&l>n&&(s=n,n=l,l=s),s=Oc(r,l);var i=Oc(r,n);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=vr&&"documentMode"in document&&11>=document.documentMode,In=null,Ya=null,Fs=null,Ka=!1;function Lc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ka||In==null||In!==w0(n)||(n=In,"selectionStart"in n&&pu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fs&&tl(Fs,n)||(Fs=n,n=C0(Ya,"onSelect"),0<n.length&&(t=new uu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=In)))}function Dl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Rn={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},Ui={},Bp={};vr&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ni(e){if(Ui[e])return Ui[e];if(!Rn[e])return e;var t=Rn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bp)return Ui[e]=t[r];return e}var zp=ni("animationend"),Mp=ni("animationiteration"),Np=ni("animationstart"),Tp=ni("transitionend"),Dp=new Map,Fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Dp.set(e,t),bn(t,[e])}for(var Wi=0;Wi<Fc.length;Wi++){var Vi=Fc[Wi],Jf=Vi.toLowerCase(),e2=Vi[0].toUpperCase()+Vi.slice(1);rn(Jf,"on"+e2)}rn(zp,"onAnimationEnd");rn(Mp,"onAnimationIteration");rn(Np,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Tp,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function Hc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Z4(n,t,void 0,e),e.currentTarget=null}function Ip(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var i=n.length-1;0<=i;i--){var o=n[i],u=o.instance,p=o.currentTarget;if(o=o.listener,u!==l&&s.isPropagationStopped())break e;Hc(s,o,p),l=u}else for(i=0;i<n.length;i++){if(o=n[i],u=o.instance,p=o.currentTarget,o=o.listener,u!==l&&s.isPropagationStopped())break e;Hc(s,o,p),l=u}}}if(k0)throw e=Wa,k0=!1,Wa=null,e}function pe(e,t){var r=t[ro];r===void 0&&(r=t[ro]=new Set);var n=e+"__bubble";r.has(n)||(Rp(t,e,2,!1),r.add(n))}function Gi(e,t,r){var n=0;t&&(n|=4),Rp(r,e,n,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function rl(e){if(!e[Il]){e[Il]=!0,Ud.forEach(function(r){r!=="selectionchange"&&(t2.has(r)||Gi(r,!1,e),Gi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,Gi("selectionchange",!1,t))}}function Rp(e,t,r,n){switch(wp(t)){case 1:var s=ff;break;case 4:s=vf;break;default:s=au}r=s.bind(null,t,r,e),s=void 0,!Ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Xi(e,t,r,n,s){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;i=i.return}for(;o!==null;){if(i=pn(o),i===null)return;if(u=i.tag,u===5||u===6){n=l=i;continue e}o=o.parentNode}}n=n.return}ap(function(){var p=l,h=nu(r),f=[];e:{var m=Dp.get(e);if(m!==void 0){var x=uu,A=e;switch(e){case"keypress":if(a0(r)===0)break e;case"keydown":case"keyup":x=Bf;break;case"focusin":A="focus",x=Hi;break;case"focusout":A="blur",x=Hi;break;case"beforeblur":case"afterblur":x=Hi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Nf;break;case zp:case Mp:case Np:x=Sf;break;case Tp:x=Df;break;case"scroll":x=gf;break;case"wheel":x=Rf;break;case"copy":case"cut":case"paste":x=bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=zc}var w=(t&4)!==0,j=!w&&e==="scroll",$=w?m!==null?m+"Capture":null:m;w=[];for(var y=p,b;y!==null;){b=y;var q=b.stateNode;if(b.tag===5&&q!==null&&(b=q,$!==null&&(q=Ys(y,$),q!=null&&w.push(nl(y,q,b)))),j)break;y=y.return}0<w.length&&(m=new x(m,A,null,r,h),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&r!==_a&&(A=r.relatedTarget||r.fromElement)&&(pn(A)||A[gr]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(A=r.relatedTarget||r.toElement,x=p,A=A?pn(A):null,A!==null&&(j=An(A),A!==j||A.tag!==5&&A.tag!==6)&&(A=null)):(x=null,A=p),x!==A)){if(w=Ec,q="onMouseLeave",$="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=zc,q="onPointerLeave",$="onPointerEnter",y="pointer"),j=x==null?m:On(x),b=A==null?m:On(A),m=new w(q,y+"leave",x,r,h),m.target=j,m.relatedTarget=b,q=null,pn(h)===p&&(w=new w($,y+"enter",A,r,h),w.target=b,w.relatedTarget=j,q=w),j=q,x&&A)t:{for(w=x,$=A,y=0,b=w;b;b=Bn(b))y++;for(b=0,q=$;q;q=Bn(q))b++;for(;0<y-b;)w=Bn(w),y--;for(;0<b-y;)$=Bn($),b--;for(;y--;){if(w===$||$!==null&&w===$.alternate)break t;w=Bn(w),$=Bn($)}w=null}else w=null;x!==null&&_c(f,m,x,w,!1),A!==null&&j!==null&&_c(f,j,A,w,!0)}}e:{if(m=p?On(p):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=Uf;else if(Tc(m))if(jp)C=Xf;else{C=Vf;var E=Wf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Gf);if(C&&(C=C(e,p))){Pp(f,C,r,h);break e}E&&E(e,m,p),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Ra(m,"number",m.value)}switch(E=p?On(p):window,e){case"focusin":(Tc(E)||E.contentEditable==="true")&&(In=E,Ya=p,Fs=null);break;case"focusout":Fs=Ya=In=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Lc(f,r,h);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":Lc(f,r,h)}var z;if(du)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Dn?bp(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(kp&&r.locale!=="ko"&&(Dn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Dn&&(z=Sp()):(Ir=h,ou="value"in Ir?Ir.value:Ir.textContent,Dn=!0)),E=C0(p,N),0<E.length&&(N=new Bc(N,e,null,r,h),f.push({event:N,listeners:E}),z?N.data=z:(z=Ap(r),z!==null&&(N.data=z)))),(z=Lf?Ff(e,r):Hf(e,r))&&(p=C0(p,"onBeforeInput"),0<p.length&&(h=new Bc("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:p}),h.data=z))}Ip(f,t)})}function nl(e,t,r){return{instance:e,listener:t,currentTarget:r}}function C0(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Ys(e,r),l!=null&&n.unshift(nl(e,l,s)),l=Ys(e,t),l!=null&&n.push(nl(e,l,s))),e=e.return}return n}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,r,n,s){for(var l=t._reactName,i=[];r!==null&&r!==n;){var o=r,u=o.alternate,p=o.stateNode;if(u!==null&&u===n)break;o.tag===5&&p!==null&&(o=p,s?(u=Ys(r,l),u!=null&&i.unshift(nl(r,u,o))):s||(u=Ys(r,l),u!=null&&i.push(nl(r,u,o)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var r2=/\r\n?/g,n2=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(r2,`
`).replace(n2,"")}function Rl(e,t,r){if(t=Qc(t),Qc(e)!==t&&r)throw Error(D(425))}function q0(){}var Za=null,Ja=null;function eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var to=typeof setTimeout=="function"?setTimeout:void 0,s2=typeof clearTimeout=="function"?clearTimeout:void 0,Uc=typeof Promise=="function"?Promise:void 0,l2=typeof queueMicrotask=="function"?queueMicrotask:typeof Uc<"u"?function(e){return Uc.resolve(null).then(e).catch(i2)}:to;function i2(e){setTimeout(function(){throw e})}function Yi(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),Js(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);Js(t)}function Qr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Yt="__reactFiber$"+vs,sl="__reactProps$"+vs,gr="__reactContainer$"+vs,ro="__reactEvents$"+vs,a2="__reactListeners$"+vs,o2="__reactHandles$"+vs;function pn(e){var t=e[Yt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gr]||r[Yt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wc(e);e!==null;){if(r=e[Yt])return r;e=Wc(e)}return t}e=r,r=e.parentNode}return null}function yl(e){return e=e[Yt]||e[gr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function si(e){return e[sl]||null}var no=[],Ln=-1;function nn(e){return{current:e}}function he(e){0>Ln||(e.current=no[Ln],no[Ln]=null,Ln--)}function de(e,t){Ln++,no[Ln]=e.current,e.current=t}var Yr={},Ze=nn(Yr),dt=nn(!1),yn=Yr;function ls(e,t){var r=e.type.contextTypes;if(!r)return Yr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in r)s[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function pt(e){return e=e.childContextTypes,e!=null}function E0(){he(dt),he(Ze)}function Vc(e,t,r){if(Ze.current!==Yr)throw Error(D(168));de(Ze,t),de(dt,r)}function Op(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(D(108,U4(e)||"Unknown",s));return Se({},r,n)}function B0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yr,yn=Ze.current,de(Ze,e),de(dt,dt.current),!0}function Gc(e,t,r){var n=e.stateNode;if(!n)throw Error(D(169));r?(e=Op(e,t,yn),n.__reactInternalMemoizedMergedChildContext=e,he(dt),he(Ze),de(Ze,e)):he(dt),de(dt,r)}var or=null,li=!1,Ki=!1;function Lp(e){or===null?or=[e]:or.push(e)}function u2(e){li=!0,Lp(e)}function sn(){if(!Ki&&or!==null){Ki=!0;var e=0,t=oe;try{var r=or;for(oe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}or=null,li=!1}catch(s){throw or!==null&&(or=or.slice(e+1)),dp(su,sn),s}finally{oe=t,Ki=!1}}return null}var Fn=[],Hn=0,z0=null,M0=0,qt=[],Et=0,$n=null,cr=1,dr="";function un(e,t){Fn[Hn++]=M0,Fn[Hn++]=z0,z0=e,M0=t}function Fp(e,t,r){qt[Et++]=cr,qt[Et++]=dr,qt[Et++]=$n,$n=e;var n=cr;e=dr;var s=32-_t(n)-1;n&=~(1<<s),r+=1;var l=32-_t(t)+s;if(30<l){var i=s-s%5;l=(n&(1<<i)-1).toString(32),n>>=i,s-=i,cr=1<<32-_t(t)+s|r<<s|n,dr=l+e}else cr=1<<l|r<<s|n,dr=e}function hu(e){e.return!==null&&(un(e,1),Fp(e,1,0))}function mu(e){for(;e===z0;)z0=Fn[--Hn],Fn[Hn]=null,M0=Fn[--Hn],Fn[Hn]=null;for(;e===$n;)$n=qt[--Et],qt[Et]=null,dr=qt[--Et],qt[Et]=null,cr=qt[--Et],qt[Et]=null}var xt=null,gt=null,fe=!1,Ht=null;function Hp(e,t){var r=zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,gt=Qr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$n!==null?{id:cr,overflow:dr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,xt=e,gt=null,!0):!1;default:return!1}}function so(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lo(e){if(fe){var t=gt;if(t){var r=t;if(!Xc(e,t)){if(so(e))throw Error(D(418));t=Qr(r.nextSibling);var n=xt;t&&Xc(e,t)?Hp(n,r):(e.flags=e.flags&-4097|2,fe=!1,xt=e)}}else{if(so(e))throw Error(D(418));e.flags=e.flags&-4097|2,fe=!1,xt=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Ol(e){if(e!==xt)return!1;if(!fe)return Yc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eo(e.type,e.memoizedProps)),t&&(t=gt)){if(so(e))throw _p(),Error(D(418));for(;t;)Hp(e,t),t=Qr(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){gt=Qr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=xt?Qr(e.stateNode.nextSibling):null;return!0}function _p(){for(var e=gt;e;)e=Qr(e.nextSibling)}function is(){gt=xt=null,fe=!1}function fu(e){Ht===null?Ht=[e]:Ht.push(e)}var c2=wr.ReactCurrentBatchConfig;function js(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(D(309));var n=r.stateNode}if(!n)throw Error(D(147,e));var s=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var o=s.refs;i===null?delete o[l]:o[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(D(284));if(!r._owner)throw Error(D(290,e))}return e}function Ll(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function Qp(e){function t($,y){if(e){var b=$.deletions;b===null?($.deletions=[y],$.flags|=16):b.push(y)}}function r($,y){if(!e)return null;for(;y!==null;)t($,y),y=y.sibling;return null}function n($,y){for($=new Map;y!==null;)y.key!==null?$.set(y.key,y):$.set(y.index,y),y=y.sibling;return $}function s($,y){return $=Gr($,y),$.index=0,$.sibling=null,$}function l($,y,b){return $.index=b,e?(b=$.alternate,b!==null?(b=b.index,b<y?($.flags|=2,y):b):($.flags|=2,y)):($.flags|=1048576,y)}function i($){return e&&$.alternate===null&&($.flags|=2),$}function o($,y,b,q){return y===null||y.tag!==6?(y=sa(b,$.mode,q),y.return=$,y):(y=s(y,b),y.return=$,y)}function u($,y,b,q){var C=b.type;return C===Tn?h($,y,b.props.children,q,b.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&Kc(C)===y.type)?(q=s(y,b.props),q.ref=js($,y,b),q.return=$,q):(q=m0(b.type,b.key,b.props,null,$.mode,q),q.ref=js($,y,b),q.return=$,q)}function p($,y,b,q){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=la(b,$.mode,q),y.return=$,y):(y=s(y,b.children||[]),y.return=$,y)}function h($,y,b,q,C){return y===null||y.tag!==7?(y=vn(b,$.mode,q,C),y.return=$,y):(y=s(y,b),y.return=$,y)}function f($,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=sa(""+y,$.mode,b),y.return=$,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ql:return b=m0(y.type,y.key,y.props,null,$.mode,b),b.ref=js($,null,y),b.return=$,b;case Nn:return y=la(y,$.mode,b),y.return=$,y;case Er:var q=y._init;return f($,q(y._payload),b)}if(zs(y)||Ss(y))return y=vn(y,$.mode,b,null),y.return=$,y;Ll($,y)}return null}function m($,y,b,q){var C=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:o($,y,""+b,q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ql:return b.key===C?u($,y,b,q):null;case Nn:return b.key===C?p($,y,b,q):null;case Er:return C=b._init,m($,y,C(b._payload),q)}if(zs(b)||Ss(b))return C!==null?null:h($,y,b,q,null);Ll($,b)}return null}function x($,y,b,q,C){if(typeof q=="string"&&q!==""||typeof q=="number")return $=$.get(b)||null,o(y,$,""+q,C);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case ql:return $=$.get(q.key===null?b:q.key)||null,u(y,$,q,C);case Nn:return $=$.get(q.key===null?b:q.key)||null,p(y,$,q,C);case Er:var E=q._init;return x($,y,b,E(q._payload),C)}if(zs(q)||Ss(q))return $=$.get(b)||null,h(y,$,q,C,null);Ll(y,q)}return null}function A($,y,b,q){for(var C=null,E=null,z=y,N=y=0,Q=null;z!==null&&N<b.length;N++){z.index>N?(Q=z,z=null):Q=z.sibling;var U=m($,z,b[N],q);if(U===null){z===null&&(z=Q);break}e&&z&&U.alternate===null&&t($,z),y=l(U,y,N),E===null?C=U:E.sibling=U,E=U,z=Q}if(N===b.length)return r($,z),fe&&un($,N),C;if(z===null){for(;N<b.length;N++)z=f($,b[N],q),z!==null&&(y=l(z,y,N),E===null?C=z:E.sibling=z,E=z);return fe&&un($,N),C}for(z=n($,z);N<b.length;N++)Q=x(z,$,N,b[N],q),Q!==null&&(e&&Q.alternate!==null&&z.delete(Q.key===null?N:Q.key),y=l(Q,y,N),E===null?C=Q:E.sibling=Q,E=Q);return e&&z.forEach(function(le){return t($,le)}),fe&&un($,N),C}function w($,y,b,q){var C=Ss(b);if(typeof C!="function")throw Error(D(150));if(b=C.call(b),b==null)throw Error(D(151));for(var E=C=null,z=y,N=y=0,Q=null,U=b.next();z!==null&&!U.done;N++,U=b.next()){z.index>N?(Q=z,z=null):Q=z.sibling;var le=m($,z,U.value,q);if(le===null){z===null&&(z=Q);break}e&&z&&le.alternate===null&&t($,z),y=l(le,y,N),E===null?C=le:E.sibling=le,E=le,z=Q}if(U.done)return r($,z),fe&&un($,N),C;if(z===null){for(;!U.done;N++,U=b.next())U=f($,U.value,q),U!==null&&(y=l(U,y,N),E===null?C=U:E.sibling=U,E=U);return fe&&un($,N),C}for(z=n($,z);!U.done;N++,U=b.next())U=x(z,$,N,U.value,q),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?N:U.key),y=l(U,y,N),E===null?C=U:E.sibling=U,E=U);return e&&z.forEach(function(ie){return t($,ie)}),fe&&un($,N),C}function j($,y,b,q){if(typeof b=="object"&&b!==null&&b.type===Tn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ql:e:{for(var C=b.key,E=y;E!==null;){if(E.key===C){if(C=b.type,C===Tn){if(E.tag===7){r($,E.sibling),y=s(E,b.props.children),y.return=$,$=y;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&Kc(C)===E.type){r($,E.sibling),y=s(E,b.props),y.ref=js($,E,b),y.return=$,$=y;break e}r($,E);break}else t($,E);E=E.sibling}b.type===Tn?(y=vn(b.props.children,$.mode,q,b.key),y.return=$,$=y):(q=m0(b.type,b.key,b.props,null,$.mode,q),q.ref=js($,y,b),q.return=$,$=q)}return i($);case Nn:e:{for(E=b.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){r($,y.sibling),y=s(y,b.children||[]),y.return=$,$=y;break e}else{r($,y);break}else t($,y);y=y.sibling}y=la(b,$.mode,q),y.return=$,$=y}return i($);case Er:return E=b._init,j($,y,E(b._payload),q)}if(zs(b))return A($,y,b,q);if(Ss(b))return w($,y,b,q);Ll($,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(r($,y.sibling),y=s(y,b),y.return=$,$=y):(r($,y),y=sa(b,$.mode,q),y.return=$,$=y),i($)):r($,y)}return j}var as=Qp(!0),Up=Qp(!1),N0=nn(null),T0=null,_n=null,vu=null;function gu(){vu=_n=T0=null}function xu(e){var t=N0.current;he(N0),e._currentValue=t}function io(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Zn(e,t){T0=e,vu=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(vu!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(T0===null)throw Error(D(308));_n=e,T0.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var hn=null;function yu(e){hn===null?hn=[e]:hn.push(e)}function Wp(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,yu(t)):(r.next=s.next,s.next=r),t.interleaved=r,xr(e,n)}function xr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Br=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,re&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,xr(e,r)}return s=n.interleaved,s===null?(t.next=t,yu(n)):(t.next=s.next,s.next=t),n.interleaved=t,xr(e,r)}function o0(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lu(e,r)}}function Zc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?s=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?s=l=t:l=l.next=t}else s=l=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function D0(e,t,r,n){var s=e.updateQueue;Br=!1;var l=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var u=o,p=u.next;u.next=null,i===null?l=p:i.next=p,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==i&&(o===null?h.firstBaseUpdate=p:o.next=p,h.lastBaseUpdate=u))}if(l!==null){var f=s.baseState;i=0,h=p=u=null,o=l;do{var m=o.lane,x=o.eventTime;if((n&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var A=e,w=o;switch(m=t,x=r,w.tag){case 1:if(A=w.payload,typeof A=="function"){f=A.call(x,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=w.payload,m=typeof A=="function"?A.call(x,f,m):A,m==null)break e;f=Se({},f,m);break e;case 2:Br=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[o]:m.push(o))}else x={eventTime:x,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(p=h=x,u=f):h=h.next=x,i|=m;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;m=o,o=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(u=f),s.baseState=u,s.firstBaseUpdate=p,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);Sn|=i,e.lanes=i,e.memoizedState=f}}function Jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(D(191,s));s.call(n)}}}var $l={},er=nn($l),ll=nn($l),il=nn($l);function mn(e){if(e===$l)throw Error(D(174));return e}function wu(e,t){switch(de(il,t),de(ll,e),de(er,$l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}he(er),de(er,t)}function os(){he(er),he(ll),he(il)}function Gp(e){mn(il.current);var t=mn(er.current),r=La(t,e.type);t!==r&&(de(ll,e),de(er,r))}function Su(e){ll.current===e&&(he(er),he(ll))}var ye=nn(0);function I0(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function ku(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var u0=wr.ReactCurrentDispatcher,Ji=wr.ReactCurrentBatchConfig,wn=0,we=null,ze=null,Ie=null,R0=!1,Hs=!1,al=0,d2=0;function Qe(){throw Error(D(321))}function bu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function Au(e,t,r,n,s,l){if(wn=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,u0.current=e===null||e.memoizedState===null?f2:v2,e=r(n,s),Hs){l=0;do{if(Hs=!1,al=0,25<=l)throw Error(D(301));l+=1,Ie=ze=null,t.updateQueue=null,u0.current=g2,e=r(n,s)}while(Hs)}if(u0.current=O0,t=ze!==null&&ze.next!==null,wn=0,Ie=ze=we=null,R0=!1,t)throw Error(D(300));return e}function Pu(){var e=al!==0;return al=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?we.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Dt(){if(ze===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ie===null?we.memoizedState:Ie.next;if(t!==null)Ie=t,ze=e;else{if(e===null)throw Error(D(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ie===null?we.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ol(e,t){return typeof t=="function"?t(e):t}function ea(e){var t=Dt(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var n=ze,s=n.baseQueue,l=r.pending;if(l!==null){if(s!==null){var i=s.next;s.next=l.next,l.next=i}n.baseQueue=s=l,r.pending=null}if(s!==null){l=s.next,n=n.baseState;var o=i=null,u=null,p=l;do{var h=p.lane;if((wn&h)===h)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),n=p.hasEagerState?p.eagerState:e(n,p.action);else{var f={lane:h,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(o=u=f,i=n):u=u.next=f,we.lanes|=h,Sn|=h}p=p.next}while(p!==null&&p!==l);u===null?i=n:u.next=o,Ut(n,t.memoizedState)||(ct=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do l=s.lane,we.lanes|=l,Sn|=l,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ta(e){var t=Dt(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,l=t.memoizedState;if(s!==null){r.pending=null;var i=s=s.next;do l=e(l,i.action),i=i.next;while(i!==s);Ut(l,t.memoizedState)||(ct=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function Xp(){}function Yp(e,t){var r=we,n=Dt(),s=t(),l=!Ut(n.memoizedState,s);if(l&&(n.memoizedState=s,ct=!0),n=n.queue,ju(Jp.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,ul(9,Zp.bind(null,r,n,s,t),void 0,null),Re===null)throw Error(D(349));wn&30||Kp(r,t,s)}return s}function Kp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Zp(e,t,r,n){t.value=r,t.getSnapshot=n,eh(t)&&th(e)}function Jp(e,t,r){return r(function(){eh(t)&&th(e)})}function eh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ut(e,r)}catch{return!0}}function th(e){var t=xr(e,1);t!==null&&Qt(t,e,1,-1)}function e1(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:e},t.queue=e,e=e.dispatch=m2.bind(null,we,e),[t.memoizedState,e]}function ul(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function rh(){return Dt().memoizedState}function c0(e,t,r,n){var s=Gt();we.flags|=e,s.memoizedState=ul(1|t,r,void 0,n===void 0?null:n)}function ii(e,t,r,n){var s=Dt();n=n===void 0?null:n;var l=void 0;if(ze!==null){var i=ze.memoizedState;if(l=i.destroy,n!==null&&bu(n,i.deps)){s.memoizedState=ul(t,r,l,n);return}}we.flags|=e,s.memoizedState=ul(1|t,r,l,n)}function t1(e,t){return c0(8390656,8,e,t)}function ju(e,t){return ii(2048,8,e,t)}function nh(e,t){return ii(4,2,e,t)}function sh(e,t){return ii(4,4,e,t)}function lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ih(e,t,r){return r=r!=null?r.concat([e]):null,ii(4,4,lh.bind(null,t,e),r)}function Cu(){}function ah(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function oh(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function uh(e,t,r){return wn&21?(Ut(r,t)||(r=mp(),we.lanes|=r,Sn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=r)}function p2(e,t){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var n=Ji.transition;Ji.transition={};try{e(!1),t()}finally{oe=r,Ji.transition=n}}function ch(){return Dt().memoizedState}function h2(e,t,r){var n=Vr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},dh(e))ph(t,r);else if(r=Wp(e,t,r,n),r!==null){var s=nt();Qt(r,e,n,s),hh(r,t,n)}}function m2(e,t,r){var n=Vr(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(dh(e))ph(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,o=l(i,r);if(s.hasEagerState=!0,s.eagerState=o,Ut(o,i)){var u=t.interleaved;u===null?(s.next=s,yu(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}r=Wp(e,t,s,n),r!==null&&(s=nt(),Qt(r,e,n,s),hh(r,t,n))}}function dh(e){var t=e.alternate;return e===we||t!==null&&t===we}function ph(e,t){Hs=R0=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function hh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lu(e,r)}}var O0={readContext:Tt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},f2={readContext:Tt,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:t1,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,c0(4194308,4,lh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return c0(4194308,4,e,t)},useInsertionEffect:function(e,t){return c0(4,2,e,t)},useMemo:function(e,t){var r=Gt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Gt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=h2.bind(null,we,e),[n.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:e1,useDebugValue:Cu,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=e1(!1),t=e[0];return e=p2.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=we,s=Gt();if(fe){if(r===void 0)throw Error(D(407));r=r()}else{if(r=t(),Re===null)throw Error(D(349));wn&30||Kp(n,t,r)}s.memoizedState=r;var l={value:r,getSnapshot:t};return s.queue=l,t1(Jp.bind(null,n,l,e),[e]),n.flags|=2048,ul(9,Zp.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Gt(),t=Re.identifierPrefix;if(fe){var r=dr,n=cr;r=(n&~(1<<32-_t(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=al++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=d2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v2={readContext:Tt,useCallback:ah,useContext:Tt,useEffect:ju,useImperativeHandle:ih,useInsertionEffect:nh,useLayoutEffect:sh,useMemo:oh,useReducer:ea,useRef:rh,useState:function(){return ea(ol)},useDebugValue:Cu,useDeferredValue:function(e){var t=Dt();return uh(t,ze.memoizedState,e)},useTransition:function(){var e=ea(ol)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Yp,useId:ch,unstable_isNewReconciler:!1},g2={readContext:Tt,useCallback:ah,useContext:Tt,useEffect:ju,useImperativeHandle:ih,useInsertionEffect:nh,useLayoutEffect:sh,useMemo:oh,useReducer:ta,useRef:rh,useState:function(){return ta(ol)},useDebugValue:Cu,useDeferredValue:function(e){var t=Dt();return ze===null?t.memoizedState=e:uh(t,ze.memoizedState,e)},useTransition:function(){var e=ta(ol)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Yp,useId:ch,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ao(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ai={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=nt(),s=Vr(e),l=hr(n,s);l.payload=t,r!=null&&(l.callback=r),t=Ur(e,l,s),t!==null&&(Qt(t,e,s,n),o0(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=nt(),s=Vr(e),l=hr(n,s);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Ur(e,l,s),t!==null&&(Qt(t,e,s,n),o0(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=nt(),n=Vr(e),s=hr(r,n);s.tag=2,t!=null&&(s.callback=t),t=Ur(e,s,n),t!==null&&(Qt(t,e,n,r),o0(t,e,n))}};function r1(e,t,r,n,s,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,i):t.prototype&&t.prototype.isPureReactComponent?!tl(r,n)||!tl(s,l):!0}function mh(e,t,r){var n=!1,s=Yr,l=t.contextType;return typeof l=="object"&&l!==null?l=Tt(l):(s=pt(t)?yn:Ze.current,n=t.contextTypes,l=(n=n!=null)?ls(e,s):Yr),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function n1(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function oo(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},$u(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Tt(l):(l=pt(t)?yn:Ze.current,s.context=ls(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ao(e,t,l,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ai.enqueueReplaceState(s,s.state,null),D0(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t){try{var r="",n=t;do r+=Q4(n),n=n.return;while(n);var s=r}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function ra(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function uo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var x2=typeof WeakMap=="function"?WeakMap:Map;function fh(e,t,r){r=hr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){F0||(F0=!0,$o=n),uo(e,t)},r}function vh(e,t,r){r=hr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){uo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){uo(e,t),typeof n!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function s1(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new x2;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=z2.bind(null,e,t,r),t.then(e,e))}function l1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function i1(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hr(-1,1),t.tag=2,Ur(r,t,1))),r.lanes|=1),e)}var y2=wr.ReactCurrentOwner,ct=!1;function et(e,t,r,n){t.child=e===null?Up(t,null,r,n):as(t,e.child,r,n)}function a1(e,t,r,n,s){r=r.render;var l=t.ref;return Zn(t,s),n=Au(e,t,r,n,l,s),r=Pu(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,yr(e,t,s)):(fe&&r&&hu(t),t.flags|=1,et(e,t,n,s),t.child)}function o1(e,t,r,n,s){if(e===null){var l=r.type;return typeof l=="function"&&!Du(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,gh(e,t,l,n,s)):(e=m0(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:tl,r(i,n)&&e.ref===t.ref)return yr(e,t,s)}return t.flags|=1,e=Gr(l,n),e.ref=t.ref,e.return=t,t.child=e}function gh(e,t,r,n,s){if(e!==null){var l=e.memoizedProps;if(tl(l,n)&&e.ref===t.ref)if(ct=!1,t.pendingProps=n=l,(e.lanes&s)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,yr(e,t,s)}return co(e,t,r,n,s)}function xh(e,t,r){var n=t.pendingProps,s=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Un,vt),vt|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Un,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,de(Un,vt),vt|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,de(Un,vt),vt|=n;return et(e,t,s,r),t.child}function yh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function co(e,t,r,n,s){var l=pt(r)?yn:Ze.current;return l=ls(t,l),Zn(t,s),r=Au(e,t,r,n,l,s),n=Pu(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,yr(e,t,s)):(fe&&n&&hu(t),t.flags|=1,et(e,t,r,s),t.child)}function u1(e,t,r,n,s){if(pt(r)){var l=!0;B0(t)}else l=!1;if(Zn(t,s),t.stateNode===null)d0(e,t),mh(t,r,n),oo(t,r,n,s),n=!0;else if(e===null){var i=t.stateNode,o=t.memoizedProps;i.props=o;var u=i.context,p=r.contextType;typeof p=="object"&&p!==null?p=Tt(p):(p=pt(r)?yn:Ze.current,p=ls(t,p));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==n||u!==p)&&n1(t,i,n,p),Br=!1;var m=t.memoizedState;i.state=m,D0(t,n,i,s),u=t.memoizedState,o!==n||m!==u||dt.current||Br?(typeof h=="function"&&(ao(t,r,h,n),u=t.memoizedState),(o=Br||r1(t,r,o,n,m,u,p))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=p,n=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Vp(e,t),o=t.memoizedProps,p=t.type===t.elementType?o:Lt(t.type,o),i.props=p,f=t.pendingProps,m=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=pt(r)?yn:Ze.current,u=ls(t,u));var x=r.getDerivedStateFromProps;(h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==f||m!==u)&&n1(t,i,n,u),Br=!1,m=t.memoizedState,i.state=m,D0(t,n,i,s);var A=t.memoizedState;o!==f||m!==A||dt.current||Br?(typeof x=="function"&&(ao(t,r,x,n),A=t.memoizedState),(p=Br||r1(t,r,p,n,m,A,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,A,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,A,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),i.props=n,i.state=A,i.context=u,n=p):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return po(e,t,r,n,l,s)}function po(e,t,r,n,s,l){yh(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return s&&Gc(t,r,!1),yr(e,t,l);n=t.stateNode,y2.current=t;var o=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=as(t,e.child,null,l),t.child=as(t,null,o,l)):et(e,t,o,l),t.memoizedState=n.state,s&&Gc(t,r,!0),t.child}function $h(e){var t=e.stateNode;t.pendingContext?Vc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vc(e,t.context,!1),wu(e,t.containerInfo)}function c1(e,t,r,n,s){return is(),fu(s),t.flags|=256,et(e,t,r,n),t.child}var ho={dehydrated:null,treeContext:null,retryLane:0};function mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function wh(e,t,r){var n=t.pendingProps,s=ye.current,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),de(ye,s&1),e===null)return lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,l?(n=t.mode,l=t.child,i={mode:"hidden",children:i},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=ci(i,n,0,null),e=vn(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=mo(r),t.memoizedState=ho,e):qu(t,i));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return $2(e,t,i,n,o,s,r);if(l){l=n.fallback,i=t.mode,s=e.child,o=s.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Gr(s,u),n.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=Gr(o,l):(l=vn(l,i,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,i=e.child.memoizedState,i=i===null?mo(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~r,t.memoizedState=ho,n}return l=e.child,e=l.sibling,n=Gr(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function qu(e,t){return t=ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fl(e,t,r,n){return n!==null&&fu(n),as(t,e.child,null,r),e=qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $2(e,t,r,n,s,l,i){if(r)return t.flags&256?(t.flags&=-257,n=ra(Error(D(422))),Fl(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,s=t.mode,n=ci({mode:"visible",children:n.children},s,0,null),l=vn(l,s,i,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&as(t,e.child,null,i),t.child.memoizedState=mo(i),t.memoizedState=ho,l);if(!(t.mode&1))return Fl(e,t,i,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var o=n.dgst;return n=o,l=Error(D(419)),n=ra(l,n,void 0),Fl(e,t,i,n)}if(o=(i&e.childLanes)!==0,ct||o){if(n=Re,n!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|i)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,xr(e,s),Qt(n,e,s,-1))}return Tu(),n=ra(Error(D(421))),Fl(e,t,i,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=M2.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,gt=Qr(s.nextSibling),xt=t,fe=!0,Ht=null,e!==null&&(qt[Et++]=cr,qt[Et++]=dr,qt[Et++]=$n,cr=e.id,dr=e.overflow,$n=t),t=qu(t,n.children),t.flags|=4096,t)}function d1(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),io(e.return,t,r)}function na(e,t,r,n,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=s)}function Sh(e,t,r){var n=t.pendingProps,s=n.revealOrder,l=n.tail;if(et(e,t,n.children,r),n=ye.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d1(e,r,t);else if(e.tag===19)d1(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(ye,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&I0(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),na(t,!1,s,r,l);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&I0(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}na(t,!0,r,null,l);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function d0(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,r=Gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function w2(e,t,r){switch(t.tag){case 3:$h(t),is();break;case 5:Gp(t);break;case 1:pt(t.type)&&B0(t);break;case 4:wu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;de(N0,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):r&t.child.childLanes?wh(e,t,r):(de(ye,ye.current&1),e=yr(e,t,r),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Sh(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(ye,ye.current),n)break;return null;case 22:case 23:return t.lanes=0,xh(e,t,r)}return yr(e,t,r)}var kh,fo,bh,Ah;kh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fo=function(){};bh=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,mn(er.current);var l=null;switch(r){case"input":s=Da(e,s),n=Da(e,n),l=[];break;case"select":s=Se({},s,{value:void 0}),n=Se({},n,{value:void 0}),l=[];break;case"textarea":s=Oa(e,s),n=Oa(e,n),l=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=q0)}Fa(r,n);var i;r=null;for(p in s)if(!n.hasOwnProperty(p)&&s.hasOwnProperty(p)&&s[p]!=null)if(p==="style"){var o=s[p];for(i in o)o.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Gs.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in n){var u=n[p];if(o=s!=null?s[p]:void 0,n.hasOwnProperty(p)&&u!==o&&(u!=null||o!=null))if(p==="style")if(o){for(i in o)!o.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&o[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(l||(l=[]),l.push(p,r)),r=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&pe("scroll",e),l||o===u||(l=[])):(l=l||[]).push(p,u))}r&&(l=l||[]).push("style",r);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};Ah=function(e,t,r,n){r!==n&&(t.flags|=4)};function Cs(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function S2(e,t,r){var n=t.pendingProps;switch(mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return pt(t.type)&&E0(),Ue(t),null;case 3:return n=t.stateNode,os(),he(dt),he(Ze),ku(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(ko(Ht),Ht=null))),fo(e,t),Ue(t),null;case 5:Su(t);var s=mn(il.current);if(r=t.type,e!==null&&t.stateNode!=null)bh(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(D(166));return Ue(t),null}if(e=mn(er.current),Ol(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Yt]=t,n[sl]=l,e=(t.mode&1)!==0,r){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(s=0;s<Ns.length;s++)pe(Ns[s],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":$c(n,l),pe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},pe("invalid",n);break;case"textarea":Sc(n,l),pe("invalid",n)}Fa(r,l),s=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?n.textContent!==o&&(l.suppressHydrationWarning!==!0&&Rl(n.textContent,o,e),s=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Rl(n.textContent,o,e),s=["children",""+o]):Gs.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&pe("scroll",n)}switch(r){case"input":El(n),wc(n,l,!0);break;case"textarea":El(n),kc(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=q0)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[Yt]=t,e[sl]=n,kh(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ha(r,n),r){case"dialog":pe("cancel",e),pe("close",e),s=n;break;case"iframe":case"object":case"embed":pe("load",e),s=n;break;case"video":case"audio":for(s=0;s<Ns.length;s++)pe(Ns[s],e);s=n;break;case"source":pe("error",e),s=n;break;case"img":case"image":case"link":pe("error",e),pe("load",e),s=n;break;case"details":pe("toggle",e),s=n;break;case"input":$c(e,n),s=Da(e,n),pe("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=Se({},n,{value:void 0}),pe("invalid",e);break;case"textarea":Sc(e,n),s=Oa(e,n),pe("invalid",e);break;default:s=n}Fa(r,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?rp(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ep(e,u)):l==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Xs(e,u):typeof u=="number"&&Xs(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gs.hasOwnProperty(l)?u!=null&&l==="onScroll"&&pe("scroll",e):u!=null&&Jo(e,l,u,i))}switch(r){case"input":El(e),wc(e,n,!1);break;case"textarea":El(e),kc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Xr(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Gn(e,!!n.multiple,l,!1):n.defaultValue!=null&&Gn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=q0)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Ah(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(D(166));if(r=mn(il.current),mn(er.current),Ol(t)){if(n=t.stateNode,r=t.memoizedProps,n[Yt]=t,(l=n.nodeValue!==r)&&(e=xt,e!==null))switch(e.tag){case 3:Rl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rl(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Yt]=t,t.stateNode=n}return Ue(t),null;case 13:if(he(ye),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&gt!==null&&t.mode&1&&!(t.flags&128))_p(),is(),t.flags|=98560,l=!1;else if(l=Ol(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(D(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(D(317));l[Yt]=t}else is(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else Ht!==null&&(ko(Ht),Ht=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Me===0&&(Me=3):Tu())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return os(),fo(e,t),e===null&&rl(t.stateNode.containerInfo),Ue(t),null;case 10:return xu(t.type._context),Ue(t),null;case 17:return pt(t.type)&&E0(),Ue(t),null;case 19:if(he(ye),l=t.memoizedState,l===null)return Ue(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Cs(l,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=I0(e),i!==null){for(t.flags|=128,Cs(l,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}l.tail!==null&&Pe()>cs&&(t.flags|=128,n=!0,Cs(l,!1),t.lanes=4194304)}else{if(!n)if(e=I0(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Cs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!fe)return Ue(t),null}else 2*Pe()-l.renderingStartTime>cs&&r!==1073741824&&(t.flags|=128,n=!0,Cs(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(r=l.last,r!==null?r.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Pe(),t.sibling=null,r=ye.current,de(ye,n?r&1|2:r&1),t):(Ue(t),null);case 22:case 23:return Nu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?vt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function k2(e,t){switch(mu(t),t.tag){case 1:return pt(t.type)&&E0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return os(),he(dt),he(Ze),ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(he(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));is()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ye),null;case 4:return os(),null;case 10:return xu(t.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Hl=!1,Xe=!1,b2=typeof WeakSet=="function"?WeakSet:Set,_=null;function Qn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ae(e,t,n)}else r.current=null}function vo(e,t,r){try{r()}catch(n){Ae(e,t,n)}}var p1=!1;function A2(e,t){if(Za=P0,e=Ep(),pu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,o=-1,u=-1,p=0,h=0,f=e,m=null;t:for(;;){for(var x;f!==r||s!==0&&f.nodeType!==3||(o=i+s),f!==l||n!==0&&f.nodeType!==3||(u=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===r&&++p===s&&(o=i),m===l&&++h===n&&(u=i),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}r=o===-1||u===-1?null:{start:o,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ja={focusedElem:e,selectionRange:r},P0=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var w=A.memoizedProps,j=A.memoizedState,$=t.stateNode,y=$.getSnapshotBeforeUpdate(t.elementType===t.type?w:Lt(t.type,w),j);$.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(q){Ae(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return A=p1,p1=!1,A}function _s(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&vo(t,r,l)}s=s.next}while(s!==n)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function go(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ph(e){var t=e.alternate;t!==null&&(e.alternate=null,Ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[sl],delete t[ro],delete t[a2],delete t[o2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jh(e){return e.tag===5||e.tag===3||e.tag===4}function h1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=q0));else if(n!==4&&(e=e.child,e!==null))for(xo(e,t,r),e=e.sibling;e!==null;)xo(e,t,r),e=e.sibling}function yo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(yo(e,t,r),e=e.sibling;e!==null;)yo(e,t,r),e=e.sibling}var Oe=null,Ft=!1;function Ar(e,t,r){for(r=r.child;r!==null;)Ch(e,t,r),r=r.sibling}function Ch(e,t,r){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(ei,r)}catch{}switch(r.tag){case 5:Xe||Qn(r,t);case 6:var n=Oe,s=Ft;Oe=null,Ar(e,t,r),Oe=n,Ft=s,Oe!==null&&(Ft?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Ft?(e=Oe,r=r.stateNode,e.nodeType===8?Yi(e.parentNode,r):e.nodeType===1&&Yi(e,r),Js(e)):Yi(Oe,r.stateNode));break;case 4:n=Oe,s=Ft,Oe=r.stateNode.containerInfo,Ft=!0,Ar(e,t,r),Oe=n,Ft=s;break;case 0:case 11:case 14:case 15:if(!Xe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var l=s,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&vo(r,t,i),s=s.next}while(s!==n)}Ar(e,t,r);break;case 1:if(!Xe&&(Qn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Ae(r,t,o)}Ar(e,t,r);break;case 21:Ar(e,t,r);break;case 22:r.mode&1?(Xe=(n=Xe)||r.memoizedState!==null,Ar(e,t,r),Xe=n):Ar(e,t,r);break;default:Ar(e,t,r)}}function m1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new b2),t.forEach(function(n){var s=N2.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var l=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 5:Oe=o.stateNode,Ft=!1;break e;case 3:Oe=o.stateNode.containerInfo,Ft=!0;break e;case 4:Oe=o.stateNode.containerInfo,Ft=!0;break e}o=o.return}if(Oe===null)throw Error(D(160));Ch(l,i,s),Oe=null,Ft=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(p){Ae(s,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qh(t,e),t=t.sibling}function qh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Vt(e),n&4){try{_s(3,e,e.return),oi(3,e)}catch(w){Ae(e,e.return,w)}try{_s(5,e,e.return)}catch(w){Ae(e,e.return,w)}}break;case 1:Ot(t,e),Vt(e),n&512&&r!==null&&Qn(r,r.return);break;case 5:if(Ot(t,e),Vt(e),n&512&&r!==null&&Qn(r,r.return),e.flags&32){var s=e.stateNode;try{Xs(s,"")}catch(w){Ae(e,e.return,w)}}if(n&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Kd(s,l),Ha(o,i);var p=Ha(o,l);for(i=0;i<u.length;i+=2){var h=u[i],f=u[i+1];h==="style"?rp(s,f):h==="dangerouslySetInnerHTML"?ep(s,f):h==="children"?Xs(s,f):Jo(s,h,f,p)}switch(o){case"input":Ia(s,l);break;case"textarea":Zd(s,l);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Gn(s,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?Gn(s,!!l.multiple,l.defaultValue,!0):Gn(s,!!l.multiple,l.multiple?[]:"",!1))}s[sl]=l}catch(w){Ae(e,e.return,w)}}break;case 6:if(Ot(t,e),Vt(e),n&4){if(e.stateNode===null)throw Error(D(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(w){Ae(e,e.return,w)}}break;case 3:if(Ot(t,e),Vt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Js(t.containerInfo)}catch(w){Ae(e,e.return,w)}break;case 4:Ot(t,e),Vt(e);break;case 13:Ot(t,e),Vt(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(zu=Pe())),n&4&&m1(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(Xe=(p=Xe)||h,Ot(t,e),Xe=p):Ot(t,e),Vt(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(f=_=h;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:_s(4,m,m.return);break;case 1:Qn(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(w){Ae(n,r,w)}}break;case 5:Qn(m,m.return);break;case 22:if(m.memoizedState!==null){v1(f);continue}}x!==null?(x.return=m,_=x):v1(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,p?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,u=f.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=tp("display",i))}catch(w){Ae(e,e.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=p?"":f.memoizedProps}catch(w){Ae(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ot(t,e),Vt(e),n&4&&m1(e);break;case 21:break;default:Ot(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(jh(r)){var n=r;break e}r=r.return}throw Error(D(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Xs(s,""),n.flags&=-33);var l=h1(e);yo(e,l,s);break;case 3:case 4:var i=n.stateNode.containerInfo,o=h1(e);xo(e,o,i);break;default:throw Error(D(161))}}catch(u){Ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P2(e,t,r){_=e,Eh(e)}function Eh(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var s=_,l=s.child;if(s.tag===22&&n){var i=s.memoizedState!==null||Hl;if(!i){var o=s.alternate,u=o!==null&&o.memoizedState!==null||Xe;o=Hl;var p=Xe;if(Hl=i,(Xe=u)&&!p)for(_=s;_!==null;)i=_,u=i.child,i.tag===22&&i.memoizedState!==null?g1(s):u!==null?(u.return=i,_=u):g1(s);for(;l!==null;)_=l,Eh(l),l=l.sibling;_=s,Hl=o,Xe=p}f1(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,_=l):f1(e)}}function f1(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||oi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Xe)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Lt(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jc(t,l,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jc(t,i,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var h=p.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Js(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Xe||t.flags&512&&go(t)}catch(m){Ae(t,t.return,m)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function v1(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function g1(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oi(4,t)}catch(u){Ae(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(u){Ae(t,s,u)}}var l=t.return;try{go(t)}catch(u){Ae(t,l,u)}break;case 5:var i=t.return;try{go(t)}catch(u){Ae(t,i,u)}}}catch(u){Ae(t,t.return,u)}if(t===e){_=null;break}var o=t.sibling;if(o!==null){o.return=t.return,_=o;break}_=t.return}}var j2=Math.ceil,L0=wr.ReactCurrentDispatcher,Eu=wr.ReactCurrentOwner,Nt=wr.ReactCurrentBatchConfig,re=0,Re=null,je=null,Le=0,vt=0,Un=nn(0),Me=0,cl=null,Sn=0,ui=0,Bu=0,Qs=null,ut=null,zu=0,cs=1/0,ar=null,F0=!1,$o=null,Wr=null,_l=!1,Rr=null,H0=0,Us=0,wo=null,p0=-1,h0=0;function nt(){return re&6?Pe():p0!==-1?p0:p0=Pe()}function Vr(e){return e.mode&1?re&2&&Le!==0?Le&-Le:c2.transition!==null?(h0===0&&(h0=mp()),h0):(e=oe,e!==0||(e=window.event,e=e===void 0?16:wp(e.type)),e):1}function Qt(e,t,r,n){if(50<Us)throw Us=0,wo=null,Error(D(185));gl(e,r,n),(!(re&2)||e!==Re)&&(e===Re&&(!(re&2)&&(ui|=r),Me===4&&Nr(e,Le)),ht(e,n),r===1&&re===0&&!(t.mode&1)&&(cs=Pe()+500,li&&sn()))}function ht(e,t){var r=e.callbackNode;cf(e,t);var n=A0(e,e===Re?Le:0);if(n===0)r!==null&&Pc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Pc(r),t===1)e.tag===0?u2(x1.bind(null,e)):Lp(x1.bind(null,e)),l2(function(){!(re&6)&&sn()}),r=null;else{switch(fp(n)){case 1:r=su;break;case 4:r=pp;break;case 16:r=b0;break;case 536870912:r=hp;break;default:r=b0}r=Rh(r,Bh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bh(e,t){if(p0=-1,h0=0,re&6)throw Error(D(327));var r=e.callbackNode;if(Jn()&&e.callbackNode!==r)return null;var n=A0(e,e===Re?Le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=_0(e,n);else{t=n;var s=re;re|=2;var l=Mh();(Re!==e||Le!==t)&&(ar=null,cs=Pe()+500,fn(e,t));do try{E2();break}catch(o){zh(e,o)}while(!0);gu(),L0.current=l,re=s,je!==null?t=0:(Re=null,Le=0,t=Me)}if(t!==0){if(t===2&&(s=Va(e),s!==0&&(n=s,t=So(e,s))),t===1)throw r=cl,fn(e,0),Nr(e,n),ht(e,Pe()),r;if(t===6)Nr(e,n);else{if(s=e.current.alternate,!(n&30)&&!C2(s)&&(t=_0(e,n),t===2&&(l=Va(e),l!==0&&(n=l,t=So(e,l))),t===1))throw r=cl,fn(e,0),Nr(e,n),ht(e,Pe()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(D(345));case 2:cn(e,ut,ar);break;case 3:if(Nr(e,n),(n&130023424)===n&&(t=zu+500-Pe(),10<t)){if(A0(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){nt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=to(cn.bind(null,e,ut,ar),t);break}cn(e,ut,ar);break;case 4:if(Nr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var i=31-_t(n);l=1<<i,i=t[i],i>s&&(s=i),n&=~l}if(n=s,n=Pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*j2(n/1960))-n,10<n){e.timeoutHandle=to(cn.bind(null,e,ut,ar),n);break}cn(e,ut,ar);break;case 5:cn(e,ut,ar);break;default:throw Error(D(329))}}}return ht(e,Pe()),e.callbackNode===r?Bh.bind(null,e):null}function So(e,t){var r=Qs;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=_0(e,t),e!==2&&(t=ut,ut=r,t!==null&&ko(t)),e}function ko(e){ut===null?ut=e:ut.push.apply(ut,e)}function C2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],l=s.getSnapshot;s=s.value;try{if(!Ut(l(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nr(e,t){for(t&=~Bu,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-_t(t),n=1<<r;e[r]=-1,t&=~n}}function x1(e){if(re&6)throw Error(D(327));Jn();var t=A0(e,0);if(!(t&1))return ht(e,Pe()),null;var r=_0(e,t);if(e.tag!==0&&r===2){var n=Va(e);n!==0&&(t=n,r=So(e,n))}if(r===1)throw r=cl,fn(e,0),Nr(e,t),ht(e,Pe()),r;if(r===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,ut,ar),ht(e,Pe()),null}function Mu(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(cs=Pe()+500,li&&sn())}}function kn(e){Rr!==null&&Rr.tag===0&&!(re&6)&&Jn();var t=re;re|=1;var r=Nt.transition,n=oe;try{if(Nt.transition=null,oe=1,e)return e()}finally{oe=n,Nt.transition=r,re=t,!(re&6)&&sn()}}function Nu(){vt=Un.current,he(Un)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,s2(r)),je!==null)for(r=je.return;r!==null;){var n=r;switch(mu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&E0();break;case 3:os(),he(dt),he(Ze),ku();break;case 5:Su(n);break;case 4:os();break;case 13:he(ye);break;case 19:he(ye);break;case 10:xu(n.type._context);break;case 22:case 23:Nu()}r=r.return}if(Re=e,je=e=Gr(e.current,null),Le=vt=t,Me=0,cl=null,Bu=ui=Sn=0,ut=Qs=null,hn!==null){for(t=0;t<hn.length;t++)if(r=hn[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,l=r.pending;if(l!==null){var i=l.next;l.next=s,n.next=i}r.pending=n}hn=null}return e}function zh(e,t){do{var r=je;try{if(gu(),u0.current=O0,R0){for(var n=we.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}R0=!1}if(wn=0,Ie=ze=we=null,Hs=!1,al=0,Eu.current=null,r===null||r.return===null){Me=1,cl=t,je=null;break}e:{var l=e,i=r.return,o=r,u=t;if(t=Le,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=l1(i);if(x!==null){x.flags&=-257,i1(x,i,o,l,t),x.mode&1&&s1(l,p,t),t=x,u=p;var A=t.updateQueue;if(A===null){var w=new Set;w.add(u),t.updateQueue=w}else A.add(u);break e}else{if(!(t&1)){s1(l,p,t),Tu();break e}u=Error(D(426))}}else if(fe&&o.mode&1){var j=l1(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),i1(j,i,o,l,t),fu(us(u,o));break e}}l=u=us(u,o),Me!==4&&(Me=2),Qs===null?Qs=[l]:Qs.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var $=fh(l,u,t);Zc(l,$);break e;case 1:o=u;var y=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wr===null||!Wr.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var q=vh(l,o,t);Zc(l,q);break e}}l=l.return}while(l!==null)}Th(r)}catch(C){t=C,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function Mh(){var e=L0.current;return L0.current=O0,e===null?O0:e}function Tu(){(Me===0||Me===3||Me===2)&&(Me=4),Re===null||!(Sn&268435455)&&!(ui&268435455)||Nr(Re,Le)}function _0(e,t){var r=re;re|=2;var n=Mh();(Re!==e||Le!==t)&&(ar=null,fn(e,t));do try{q2();break}catch(s){zh(e,s)}while(!0);if(gu(),re=r,L0.current=n,je!==null)throw Error(D(261));return Re=null,Le=0,Me}function q2(){for(;je!==null;)Nh(je)}function E2(){for(;je!==null&&!ef();)Nh(je)}function Nh(e){var t=Ih(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Th(e):je=t,Eu.current=null}function Th(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=k2(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,je=null;return}}else if(r=S2(r,t,vt),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Me===0&&(Me=5)}function cn(e,t,r){var n=oe,s=Nt.transition;try{Nt.transition=null,oe=1,B2(e,t,r,n)}finally{Nt.transition=s,oe=n}return null}function B2(e,t,r,n){do Jn();while(Rr!==null);if(re&6)throw Error(D(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(df(e,l),e===Re&&(je=Re=null,Le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_l||(_l=!0,Rh(b0,function(){return Jn(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Nt.transition,Nt.transition=null;var i=oe;oe=1;var o=re;re|=4,Eu.current=null,A2(e,r),qh(r,e),Kf(Ja),P0=!!Za,Ja=Za=null,e.current=r,P2(r),tf(),re=o,oe=i,Nt.transition=l}else e.current=r;if(_l&&(_l=!1,Rr=e,H0=s),l=e.pendingLanes,l===0&&(Wr=null),sf(r.stateNode),ht(e,Pe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(F0)throw F0=!1,e=$o,$o=null,e;return H0&1&&e.tag!==0&&Jn(),l=e.pendingLanes,l&1?e===wo?Us++:(Us=0,wo=e):Us=0,sn(),null}function Jn(){if(Rr!==null){var e=fp(H0),t=Nt.transition,r=oe;try{if(Nt.transition=null,oe=16>e?16:e,Rr===null)var n=!1;else{if(e=Rr,Rr=null,H0=0,re&6)throw Error(D(331));var s=re;for(re|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var p=o[u];for(_=p;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:_s(8,h,l)}var f=h.child;if(f!==null)f.return=h,_=f;else for(;_!==null;){h=_;var m=h.sibling,x=h.return;if(Ph(h),h===p){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var A=l.alternate;if(A!==null){var w=A.child;if(w!==null){A.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_s(9,l,l.return)}var $=l.sibling;if($!==null){$.return=l.return,_=$;break e}_=l.return}}var y=e.current;for(_=y;_!==null;){i=_;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,_=b;else e:for(i=y;_!==null;){if(o=_,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:oi(9,o)}}catch(C){Ae(o,o.return,C)}if(o===i){_=null;break e}var q=o.sibling;if(q!==null){q.return=o.return,_=q;break e}_=o.return}}if(re=s,sn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(ei,e)}catch{}n=!0}return n}finally{oe=r,Nt.transition=t}}return!1}function y1(e,t,r){t=us(r,t),t=fh(e,t,1),e=Ur(e,t,1),t=nt(),e!==null&&(gl(e,1,t),ht(e,t))}function Ae(e,t,r){if(e.tag===3)y1(e,e,r);else for(;t!==null;){if(t.tag===3){y1(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Wr===null||!Wr.has(n))){e=us(r,e),e=vh(t,e,1),t=Ur(t,e,1),e=nt(),t!==null&&(gl(t,1,e),ht(t,e));break}}t=t.return}}function z2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(Le&r)===r&&(Me===4||Me===3&&(Le&130023424)===Le&&500>Pe()-zu?fn(e,0):Bu|=r),ht(e,t)}function Dh(e,t){t===0&&(e.mode&1?(t=Ml,Ml<<=1,!(Ml&130023424)&&(Ml=4194304)):t=1);var r=nt();e=xr(e,t),e!==null&&(gl(e,t,r),ht(e,r))}function M2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dh(e,r)}function N2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(D(314))}n!==null&&n.delete(t),Dh(e,r)}var Ih;Ih=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ct=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ct=!1,w2(e,t,r);ct=!!(e.flags&131072)}else ct=!1,fe&&t.flags&1048576&&Fp(t,M0,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;d0(e,t),e=t.pendingProps;var s=ls(t,Ze.current);Zn(t,r),s=Au(null,t,n,e,s,r);var l=Pu();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(n)?(l=!0,B0(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$u(t),s.updater=ai,t.stateNode=s,s._reactInternals=t,oo(t,n,e,r),t=po(null,t,n,!0,l,r)):(t.tag=0,fe&&l&&hu(t),et(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(d0(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=D2(n),e=Lt(n,e),s){case 0:t=co(null,t,n,e,r);break e;case 1:t=u1(null,t,n,e,r);break e;case 11:t=a1(null,t,n,e,r);break e;case 14:t=o1(null,t,n,Lt(n.type,e),r);break e}throw Error(D(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Lt(n,s),co(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Lt(n,s),u1(e,t,n,s,r);case 3:e:{if($h(t),e===null)throw Error(D(387));n=t.pendingProps,l=t.memoizedState,s=l.element,Vp(e,t),D0(t,n,null,r);var i=t.memoizedState;if(n=i.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=us(Error(D(423)),t),t=c1(e,t,n,r,s);break e}else if(n!==s){s=us(Error(D(424)),t),t=c1(e,t,n,r,s);break e}else for(gt=Qr(t.stateNode.containerInfo.firstChild),xt=t,fe=!0,Ht=null,r=Up(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(is(),n===s){t=yr(e,t,r);break e}et(e,t,n,r)}t=t.child}return t;case 5:return Gp(t),e===null&&lo(t),n=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,i=s.children,eo(n,s)?i=null:l!==null&&eo(n,l)&&(t.flags|=32),yh(e,t),et(e,t,i,r),t.child;case 6:return e===null&&lo(t),null;case 13:return wh(e,t,r);case 4:return wu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=as(t,null,n,r):et(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Lt(n,s),a1(e,t,n,s,r);case 7:return et(e,t,t.pendingProps,r),t.child;case 8:return et(e,t,t.pendingProps.children,r),t.child;case 12:return et(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,l=t.memoizedProps,i=s.value,de(N0,n._currentValue),n._currentValue=i,l!==null)if(Ut(l.value,i)){if(l.children===s.children&&!dt.current){t=yr(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var u=o.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=hr(-1,r&-r),u.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var h=p.pending;h===null?u.next=u:(u.next=h.next,h.next=u),p.pending=u}}l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),io(l.return,r,t),o.lanes|=r;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(D(341));i.lanes|=r,o=i.alternate,o!==null&&(o.lanes|=r),io(i,r,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}et(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Zn(t,r),s=Tt(s),n=n(s),t.flags|=1,et(e,t,n,r),t.child;case 14:return n=t.type,s=Lt(n,t.pendingProps),s=Lt(n.type,s),o1(e,t,n,s,r);case 15:return gh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Lt(n,s),d0(e,t),t.tag=1,pt(n)?(e=!0,B0(t)):e=!1,Zn(t,r),mh(t,n,s),oo(t,n,s,r),po(null,t,n,!0,e,r);case 19:return Sh(e,t,r);case 22:return xh(e,t,r)}throw Error(D(156,t.tag))};function Rh(e,t){return dp(e,t)}function T2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,r,n){return new T2(e,t,r,n)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D2(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tu)return 11;if(e===ru)return 14}return 2}function Gr(e,t){var r=e.alternate;return r===null?(r=zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function m0(e,t,r,n,s,l){var i=2;if(n=e,typeof e=="function")Du(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Tn:return vn(r.children,s,l,t);case eu:i=8,s|=8;break;case za:return e=zt(12,r,t,s|2),e.elementType=za,e.lanes=l,e;case Ma:return e=zt(13,r,t,s),e.elementType=Ma,e.lanes=l,e;case Na:return e=zt(19,r,t,s),e.elementType=Na,e.lanes=l,e;case Gd:return ci(r,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wd:i=10;break e;case Vd:i=9;break e;case tu:i=11;break e;case ru:i=14;break e;case Er:i=16,n=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=zt(i,r,t,s),t.elementType=e,t.type=n,t.lanes=l,t}function vn(e,t,r,n){return e=zt(7,e,n,t),e.lanes=r,e}function ci(e,t,r,n){return e=zt(22,e,n,t),e.elementType=Gd,e.lanes=r,e.stateNode={isHidden:!1},e}function sa(e,t,r){return e=zt(6,e,null,t),e.lanes=r,e}function la(e,t,r){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I2(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Iu(e,t,r,n,s,l,i,o,u){return e=new I2(e,t,r,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=zt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(l),e}function R2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Oh(e){if(!e)return Yr;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var r=e.type;if(pt(r))return Op(e,r,t)}return t}function Lh(e,t,r,n,s,l,i,o,u){return e=Iu(r,n,!0,e,s,l,i,o,u),e.context=Oh(null),r=e.current,n=nt(),s=Vr(r),l=hr(n,s),l.callback=t??null,Ur(r,l,s),e.current.lanes=s,gl(e,s,n),ht(e,n),e}function di(e,t,r,n){var s=t.current,l=nt(),i=Vr(s);return r=Oh(r),t.context===null?t.context=r:t.pendingContext=r,t=hr(l,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ur(s,t,i),e!==null&&(Qt(e,s,i,l),o0(e,s,i)),i}function Q0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ru(e,t){$1(e,t),(e=e.alternate)&&$1(e,t)}function O2(){return null}var Fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}pi.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));di(e,t,null,null)};pi.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){di(null,e,null,null)}),t[gr]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=xp();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Mr.length&&t!==0&&t<Mr[r].priority;r++);Mr.splice(r,0,e),r===0&&$p(e)}};function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function w1(){}function L2(e,t,r,n,s){if(s){if(typeof n=="function"){var l=n;n=function(){var p=Q0(i);l.call(p)}}var i=Lh(t,n,e,0,null,!1,!1,"",w1);return e._reactRootContainer=i,e[gr]=i.current,rl(e.nodeType===8?e.parentNode:e),kn(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var o=n;n=function(){var p=Q0(u);o.call(p)}}var u=Iu(e,0,!1,null,null,!1,!1,"",w1);return e._reactRootContainer=u,e[gr]=u.current,rl(e.nodeType===8?e.parentNode:e),kn(function(){di(t,u,r,n)}),u}function mi(e,t,r,n,s){var l=r._reactRootContainer;if(l){var i=l;if(typeof s=="function"){var o=s;s=function(){var u=Q0(i);o.call(u)}}di(t,i,e,s)}else i=L2(r,t,e,s,n);return Q0(i)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ms(t.pendingLanes);r!==0&&(lu(t,r|1),ht(t,Pe()),!(re&6)&&(cs=Pe()+500,sn()))}break;case 13:kn(function(){var n=xr(e,1);if(n!==null){var s=nt();Qt(n,e,1,s)}}),Ru(e,1)}};iu=function(e){if(e.tag===13){var t=xr(e,134217728);if(t!==null){var r=nt();Qt(t,e,134217728,r)}Ru(e,134217728)}};gp=function(e){if(e.tag===13){var t=Vr(e),r=xr(e,t);if(r!==null){var n=nt();Qt(r,e,t,n)}Ru(e,t)}};xp=function(){return oe};yp=function(e,t){var r=oe;try{return oe=e,t()}finally{oe=r}};Qa=function(e,t,r){switch(t){case"input":if(Ia(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=si(n);if(!s)throw Error(D(90));Yd(n),Ia(n,s)}}}break;case"textarea":Zd(e,r);break;case"select":t=r.value,t!=null&&Gn(e,!!r.multiple,t,!1)}};lp=Mu;ip=kn;var F2={usingClientEntryPoint:!1,Events:[yl,On,si,np,sp,Mu]},qs={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H2={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||O2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ei=Ql.inject(H2),Jt=Ql}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F2;kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(t))throw Error(D(200));return R2(e,t,null,r)};kt.createRoot=function(e,t){if(!Lu(e))throw Error(D(299));var r=!1,n="",s=Fh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Iu(e,1,!1,null,null,r,!1,n,s),e[gr]=t.current,rl(e.nodeType===8?e.parentNode:e),new Ou(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return kn(e)};kt.hydrate=function(e,t,r){if(!hi(t))throw Error(D(200));return mi(null,e,t,!0,r)};kt.hydrateRoot=function(e,t,r){if(!Lu(e))throw Error(D(405));var n=r!=null&&r.hydratedSources||null,s=!1,l="",i=Fh;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Lh(t,null,e,1,r??null,s,!1,l,i),e[gr]=t.current,rl(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new pi(t)};kt.render=function(e,t,r){if(!hi(t))throw Error(D(200));return mi(null,e,t,!1,r)};kt.unmountComponentAtNode=function(e){if(!hi(e))throw Error(D(40));return e._reactRootContainer?(kn(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[gr]=null})}),!0):!1};kt.unstable_batchedUpdates=Mu;kt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!hi(r))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return mi(e,t,r,!1,n)};kt.version="18.3.1-next-f1338f8080-20240426";function Hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh)}catch(e){console.error(e)}}Hh(),Hd.exports=kt;var _2=Hd.exports,_h,S1=_2;_h=S1.createRoot,S1.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dl.apply(null,arguments)}var Or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Or||(Or={}));const k1="popstate";function Q2(e){e===void 0&&(e={});function t(s,l){let{pathname:i="/",search:o="",hash:u=""}=Pn(s.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),bo("",{pathname:i,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(s,l){let i=s.document.querySelector("base"),o="";if(i&&i.getAttribute("href")){let u=s.location.href,p=u.indexOf("#");o=p===-1?u:u.slice(0,p)}return o+"#"+(typeof l=="string"?l:Qh(l))}function n(s,l){Fu(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return W2(t,r,n,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function U2(){return Math.random().toString(36).substr(2,8)}function b1(e,t){return{usr:e.state,key:e.key,idx:t}}function bo(e,t,r,n){return r===void 0&&(r=null),dl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pn(t):t,{state:r,key:t&&t.key||n||U2()})}function Qh(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Pn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function W2(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:l=!1}=n,i=s.history,o=Or.Pop,u=null,p=h();p==null&&(p=0,i.replaceState(dl({},i.state,{idx:p}),""));function h(){return(i.state||{idx:null}).idx}function f(){o=Or.Pop;let j=h(),$=j==null?null:j-p;p=j,u&&u({action:o,location:w.location,delta:$})}function m(j,$){o=Or.Push;let y=bo(w.location,j,$);r&&r(y,j),p=h()+1;let b=b1(y,p),q=w.createHref(y);try{i.pushState(b,"",q)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(q)}l&&u&&u({action:o,location:w.location,delta:1})}function x(j,$){o=Or.Replace;let y=bo(w.location,j,$);r&&r(y,j),p=h();let b=b1(y,p),q=w.createHref(y);i.replaceState(b,"",q),l&&u&&u({action:o,location:w.location,delta:0})}function A(j){let $=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof j=="string"?j:Qh(j);return y=y.replace(/ $/,"%20"),Ne($,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,$)}let w={get action(){return o},get location(){return e(s,i)},listen(j){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(k1,f),u=j,()=>{s.removeEventListener(k1,f),u=null}},createHref(j){return t(s,j)},createURL:A,encodeLocation(j){let $=A(j);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:m,replace:x,go(j){return i.go(j)}};return w}var A1;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(A1||(A1={}));function V2(e,t,r){return r===void 0&&(r="/"),G2(e,t,r)}function G2(e,t,r,n){let s=typeof t=="string"?Pn(t):t,l=Vh(s.pathname||"/",r);if(l==null)return null;let i=Uh(e);X2(i);let o=null,u=a3(l);for(let p=0;o==null&&p<i.length;++p)o=s3(i[p],u);return o}function Uh(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(l,i,o)=>{let u={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let p=gn([n,u.relativePath]),h=r.concat(u);l.children&&l.children.length>0&&(Ne(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Uh(l.children,t,h,p)),!(l.path==null&&!l.index)&&t.push({path:p,score:r3(p,l.index),routesMeta:h})};return e.forEach((l,i)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))s(l,i);else for(let u of Wh(l.path))s(l,i,u)}),t}function Wh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return s?[l,""]:[l];let i=Wh(n.join("/")),o=[];return o.push(...i.map(u=>u===""?l:[l,u].join("/"))),s&&o.push(...i),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function X2(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:n3(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Y2=/^:[\w-]+$/,K2=3,Z2=2,J2=1,e3=10,t3=-2,P1=e=>e==="*";function r3(e,t){let r=e.split("/"),n=r.length;return r.some(P1)&&(n+=t3),t&&(n+=Z2),r.filter(s=>!P1(s)).reduce((s,l)=>s+(Y2.test(l)?K2:l===""?J2:e3),n)}function n3(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function s3(e,t,r){let{routesMeta:n}=e,s={},l="/",i=[];for(let o=0;o<n.length;++o){let u=n[o],p=o===n.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=l3({path:u.relativePath,caseSensitive:u.caseSensitive,end:p},h),m=u.route;if(!f)return null;Object.assign(s,f.params),i.push({params:s,pathname:gn([l,f.pathname]),pathnameBase:p3(gn([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=gn([l,f.pathnameBase]))}return i}function l3(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=i3(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let l=s[0],i=l.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:n.reduce((p,h,f)=>{let{paramName:m,isOptional:x}=h;if(m==="*"){let w=o[f]||"";i=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const A=o[f];return x&&!A?p[m]=void 0:p[m]=(A||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:i,pattern:e}}function i3(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Fu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,u)=>(n.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function a3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function o3(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Pn(e):e,l;return r?(r=Gh(r),r.startsWith("/")?l=j1(r.substring(1),"/"):l=j1(r,t)):l=t,{pathname:l,search:h3(n),hash:m3(s)}}function j1(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ia(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u3(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function c3(e,t){let r=u3(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function d3(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Pn(e):(s=dl({},e),Ne(!s.pathname||!s.pathname.includes("?"),ia("?","pathname","search",s)),Ne(!s.pathname||!s.pathname.includes("#"),ia("#","pathname","hash",s)),Ne(!s.search||!s.search.includes("#"),ia("#","search","hash",s)));let l=e===""||s.pathname==="",i=l?"/":s.pathname,o;if(i==null)o=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}o=f>=0?t[f]:"/"}let u=o3(s,o),p=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(p||h)&&(u.pathname+="/"),u}const Gh=e=>e.replace(/\/\/+/g,"/"),gn=e=>Gh(e.join("/")),p3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),h3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xh=["post","put","patch","delete"];new Set(Xh);const v3=["get",...Xh];new Set(v3);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pl.apply(null,arguments)}const Hu=B.createContext(null),g3=B.createContext(null),fi=B.createContext(null),vi=B.createContext(null),jn=B.createContext({outlet:null,matches:[],isDataRoute:!1}),Yh=B.createContext(null);function gi(){return B.useContext(vi)!=null}function xi(){return gi()||Ne(!1),B.useContext(vi).location}function Kh(e){B.useContext(fi).static||B.useLayoutEffect(e)}function tr(){let{isDataRoute:e}=B.useContext(jn);return e?E3():x3()}function x3(){gi()||Ne(!1);let e=B.useContext(Hu),{basename:t,future:r,navigator:n}=B.useContext(fi),{matches:s}=B.useContext(jn),{pathname:l}=xi(),i=JSON.stringify(c3(s,r.v7_relativeSplatPath)),o=B.useRef(!1);return Kh(()=>{o.current=!0}),B.useCallback(function(p,h){if(h===void 0&&(h={}),!o.current)return;if(typeof p=="number"){n.go(p);return}let f=d3(p,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:gn([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,i,l,e])}function Zh(){let{matches:e}=B.useContext(jn),t=e[e.length-1];return t?t.params:{}}function y3(e,t){return $3(e,t)}function $3(e,t,r,n){gi()||Ne(!1);let{navigator:s}=B.useContext(fi),{matches:l}=B.useContext(jn),i=l[l.length-1],o=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let p=xi(),h;if(t){var f;let j=typeof t=="string"?Pn(t):t;u==="/"||(f=j.pathname)!=null&&f.startsWith(u)||Ne(!1),h=j}else h=p;let m=h.pathname||"/",x=m;if(u!=="/"){let j=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let A=V2(e,{pathname:x}),w=A3(A&&A.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:gn([u,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:gn([u,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,r,n);return t&&w?B.createElement(vi.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Or.Pop}},w):w}function w3(){let e=q3(),t=f3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},t),r?B.createElement("pre",{style:s},r):null,null)}const S3=B.createElement(w3,null);class k3 extends B.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?B.createElement(jn.Provider,{value:this.props.routeContext},B.createElement(Yh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b3(e){let{routeContext:t,match:r,children:n}=e,s=B.useContext(Hu);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),B.createElement(jn.Provider,{value:t},n)}function A3(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,o=(s=r)==null?void 0:s.errors;if(o!=null){let h=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||Ne(!1),i=i.slice(0,Math.min(i.length,h+1))}let u=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(p=h),f.route.id){let{loaderData:m,errors:x}=r,A=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||A){u=!0,p>=0?i=i.slice(0,p+1):i=[i[0]];break}}}return i.reduceRight((h,f,m)=>{let x,A=!1,w=null,j=null;r&&(x=o&&f.route.id?o[f.route.id]:void 0,w=f.route.errorElement||S3,u&&(p<0&&m===0?(B3("route-fallback"),A=!0,j=null):p===m&&(A=!0,j=f.route.hydrateFallbackElement||null)));let $=t.concat(i.slice(0,m+1)),y=()=>{let b;return x?b=w:A?b=j:f.route.Component?b=B.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=h,B.createElement(b3,{match:f,routeContext:{outlet:h,matches:$,isDataRoute:r!=null},children:b})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?B.createElement(k3,{location:r.location,revalidation:r.revalidation,component:w,error:x,children:y(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):y()},null)}var Jh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jh||{}),em=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(em||{});function P3(e){let t=B.useContext(Hu);return t||Ne(!1),t}function j3(e){let t=B.useContext(g3);return t||Ne(!1),t}function C3(e){let t=B.useContext(jn);return t||Ne(!1),t}function tm(e){let t=C3(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function q3(){var e;let t=B.useContext(Yh),r=j3(),n=tm();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function E3(){let{router:e}=P3(Jh.UseNavigateStable),t=tm(em.UseNavigateStable),r=B.useRef(!1);return Kh(()=>{r.current=!0}),B.useCallback(function(s,l){l===void 0&&(l={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,pl({fromRouteId:t},l)))},[e,t])}const C1={};function B3(e,t,r){C1[e]||(C1[e]=!0)}function z3(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ft(e){Ne(!1)}function M3(e){let{basename:t="/",children:r=null,location:n,navigationType:s=Or.Pop,navigator:l,static:i=!1,future:o}=e;gi()&&Ne(!1);let u=t.replace(/^\/*/,"/"),p=B.useMemo(()=>({basename:u,navigator:l,static:i,future:pl({v7_relativeSplatPath:!1},o)}),[u,o,l,i]);typeof n=="string"&&(n=Pn(n));let{pathname:h="/",search:f="",hash:m="",state:x=null,key:A="default"}=n,w=B.useMemo(()=>{let j=Vh(h,u);return j==null?null:{location:{pathname:j,search:f,hash:m,state:x,key:A},navigationType:s}},[u,h,f,m,x,A,s]);return w==null?null:B.createElement(fi.Provider,{value:p},B.createElement(vi.Provider,{children:r,value:w}))}function N3(e){let{children:t,location:r}=e;return y3(Ao(t),r)}new Promise(()=>{});function Ao(e,t){t===void 0&&(t=[]);let r=[];return B.Children.forEach(e,(n,s)=>{if(!B.isValidElement(n))return;let l=[...t,s];if(n.type===B.Fragment){r.push.apply(r,Ao(n.props.children,l));return}n.type!==ft&&Ne(!1),!n.props.index||!n.props.children||Ne(!1);let i={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=Ao(n.props.children,l)),r.push(i)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const T3="6";try{window.__reactRouterVersion=T3}catch{}const D3="startTransition",q1=B4[D3];function I3(e){let{basename:t,children:r,future:n,window:s}=e,l=B.useRef();l.current==null&&(l.current=Q2({window:s,v5Compat:!0}));let i=l.current,[o,u]=B.useState({action:i.action,location:i.location}),{v7_startTransition:p}=n||{},h=B.useCallback(f=>{p&&q1?q1(()=>u(f)):u(f)},[u,p]);return B.useLayoutEffect(()=>i.listen(h),[i,h]),B.useEffect(()=>z3(n),[n]),B.createElement(M3,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:i,future:n})}var E1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(E1||(E1={}));var B1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(B1||(B1={}));const R3=["A","B","C","D","E","F"];function O3(e,t){let r=2166136261;for(let s=0;s<e.length;s++)r^=e.charCodeAt(s),r=Math.imul(r,16777619);const n=Array.from({length:t},(s,l)=>l);for(let s=t-1;s>0;s--){r^=r<<13,r^=r>>>17,r^=r<<5;const l=Math.abs(r)%(s+1);[n[s],n[l]]=[n[l],n[s]]}return n}function L3(e){if(!e.options||e.options.length<2||e.type==="judge"||e.type==="short"||/[A-F]/.test(e.explanation))return e;const t=e.options.length,r=O3(e.id,t),n=r.map(i=>e.options[i]),s=i=>{const o=i.charCodeAt(0)-65,u=r.indexOf(o);return u>=0?R3[u]:i};let l=e.answer;return typeof e.answer=="string"?l=s(e.answer):Array.isArray(e.answer)&&(l=e.answer.map(s).sort()),{...e,options:n,answer:l}}const F3=[{id:"s1-01",no:1,code:"1.1",title:"什么是逻辑学",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:12,lead:"我们常听人说「你这话不合逻辑」。这句批评到底在指责什么？是说对方说错了事实，还是说对方讲得没道理？如果两者不同，逻辑学管的又是哪一种「错」？",objectives:["用一句话说清逻辑学的研究对象，并把它与心理学、修辞学区分开","识别一段话里是否真的存在推理，而不只是陈述或抒情","说明「前提为真」与「推理正确」是两件彼此独立的事"],concepts:["逻辑学","推理","论证","有效性","前提","结论"],body:`
## 核心定义

**专业定义**：逻辑学是研究区分正确推理与错误推理的方法和原则的学问。它不关心你具体相信什么，只关心你的结论是否被你的前提所支持。

**通俗解释**：逻辑学是一门「讲理的手艺」。别人给你一堆理由，你要能判断这些理由够不够撑住结论；你自己要给出一堆理由，也要能保证不中途偷换、不凭空加料。

**关键术语**

- **推理（reasoning）**：从一个或几个判断推出另一个判断的思维过程。
- **论证（argument）**：把推理摆到明面上来——由若干**前提**和一个**结论**组成的语言单位。
- **有效性（validity）**：前提若为真，结论是否必然为真。这是逻辑学的核心评价词。

**容易混淆的概念**

> 逻辑学 ≠ 心理学。心理学研究人实际上怎样思维（人会受情绪、偏见影响），逻辑学研究人应当怎样推理才算正确。前者描述事实，后者给出规范。

> 逻辑学 ≠ 修辞学。修辞学研究如何说得动人，逻辑学研究如何说得站得住。一句漂亮话可以毫无逻辑，一个笨拙的论证也可以完全有效。

## 理论讲解

### 第一步：把「推理」和「事实」分开

看这句话：

> 所有金属都导电，铜是金属，所以铜导电。

这里有三句话，前两句是前提，第三句是结论。你不必真的去做实验，只要承认前两句，第三句就被「逼」出来了。这种「被逼出来」的关系，就是逻辑学要研究的东西。

### 第二步：认清逻辑学只管「形式」

逻辑学有一个著名的口号：**逻辑只管形式，不管内容**。把上句里的词换掉：

> 所有 A 都是 B，x 是 A，所以 x 是 B。

无论 A、B、x 换成什么，只要前提为真，结论就必然为真。这个「骨架」就是论证形式。逻辑学的技术工作，大部分是把日常语言翻译成这种骨架，再检查骨架是否合格。

### 第三步：知道逻辑学不做什么

- 它不负责告诉你前提是不是真的——那是各门具体科学和常识的事。
- 它不负责让你说话更有感染力——那是修辞与传播的事。
- 它不保证你结论一定正确——它只保证：**前提真时，结论不会假**。

$$\\text{逻辑学的保证} = \\text{前提真} \\rightarrow \\text{结论真（必然）}$$

## 例题与分析

**例 1（易）** 判断下面哪一段包含推理。

甲：今天下雨了，天真冷。
乙：今天下雨了，所以路上会堵车。

**分析**：甲只是并列两个观察，没有推出关系；乙用「所以」把两个判断连成推出关系，是一个（省略了「下雨天容易堵车」这一隐含前提的）论证。识别论证的第一个信号词，就是「所以」「因此」「可见」这类**结论指示词**。

**例 2（中）** 有人说：「逻辑学教人冷血，只讲道理不讲人情。」这句话错在哪？

**分析**：它把「研究推理形式」混同于「主张只按推理行事」。逻辑学告诉你有哪种推理是可靠的，并不命令你在所有场合都只用推理。就像生理学告诉你胃怎样工作，并不命令你只吃流食。这是**混淆学科对象与行为准则**。

**例 3（难）** 某广告：「本课程学员平均提分 30 分，所以你报名也能提 30 分。」从逻辑学角度看，问题出在前提还是推理？

**分析**：问题首先出在**推理**——从「平均」推「个体」，中间缺一座桥（你是平均学员吗？样本如何选出？）。但也可能出在前提（数据是否真实）。逻辑学的分工是：先假定前提为真，检查推理是否成立；若不成立，无论前提多真，结论都没有被支持。**这两项检查必须分开做，否则会互相掩盖。**

## 反例训练

下面这段话看起来很有道理，请找出问题：

> 如果一个人受过良好教育，他就会讲道理。老王很讲道理，可见他受过良好教育。

**问题所在**：这是**肯定后件**。条件句只承诺「有前者必有后者」，没有承诺「有后者必有前者」。讲道理的人也可能没上过学。形式上是：

$$p \\to q,\\ q \\therefore p$$

这个形式无效：让 $p$ 假、$q$ 真，前提全真而结论假。

## 现实应用

- **读新闻**：标题给出结论，正文给出理由。先找结论，再问「这些理由够吗」，而不是先问「我喜不喜欢这个结论」。
- **开会争论**：把对方的话复述成「前提 1、前提 2，所以结论」，很多争吵会当场消解——因为双方发现争的其实是某个未说出口的前提。
- **自我检查**：写完一段议论，用「所以」标出结论，用「因为」标出前提，看看中间是否有一步是跳过去的。

## 本节总结

**核心概念**：逻辑学、推理、论证、前提、结论、有效性。

**关键规则**

1. 有「所以」才有结论，有结论才有论证。
2. 逻辑评价分两步：前提真假、推理有效，二者独立。
3. 逻辑学研究形式，形式对了，前提真就必然结论真。

**常见错误**：把「说得动听」当成「说得有理」；把「结论我同意」当成「论证成立」；把「前提是真的」当成「推理是对的」。

**需要掌握的能力**：在一段自然语言里，一眼看出哪里是结论、哪里是理由，以及理由到结论之间有没有断层。
`,quiz:[{id:"s1-01-q1",type:"single",stem:"逻辑学主要研究的是：",options:["人实际上如何思维，以及情绪如何影响判断","区分正确推理与错误推理的方法和原则","如何把话说得更有说服力","如何判断一个前提在事实上是否为真"],answer:"B",explanation:"逻辑学的研究对象是区分正确与错误推理的方法和原则。A 是心理学的范围，C 是修辞学，D 属于各门具体科学和事实核查。",skill:"逻辑学的研究对象"},{id:"s1-01-q2",type:"judge",stem:"一个论证的前提全部为真，它的结论就一定为真。",answer:!1,explanation:"前提真而推理无效时，结论仍可能为假。例如「所有猫都是动物，所有狗都是动物，所以所有狗都是猫」——两个前提都真，结论假。前提真只保证「若推理有效则结论真」。",skill:"有效性与真实性"},{id:"s1-01-q3",type:"single",stem:"「如果下雨，地就会湿。地湿了，所以下过雨。」这个推理：",options:["有效，因为前提与结论都符合常识","无效，因为它肯定后件","有效，因为它是否定后件","无法判断，缺少关于天气的信息"],answer:"B",explanation:"这是典型的肯定后件：$p \\to q,\\ q \\therefore p$。地湿也可能因为洒水车。前提真、结论假的情形可以构造出来，故无效。",skill:"肯定后件谬误"},{id:"s1-01-q4",type:"multi",stem:"下列哪些属于逻辑学**不**负责回答的问题？（多选）",options:["这个前提在事实上是否为真","这段话能不能打动听众","从这些前提到这个结论是否必然","这个词在语境中是什么意思"],answer:["A","B","D"],explanation:"C 是逻辑学的核心任务。A 属于事实核查，B 属于修辞学，D 属于语言学/语义分析——虽然逻辑学在翻译自然语言时必须借助语义分析，但它本身不负责给出词义。",skill:"逻辑学的边界"},{id:"s1-01-q5",type:"short",stem:"用两三句话说明：为什么「逻辑学研究形式而不研究内容」，并不等于「逻辑学不关心真假」？",keywords:[["形式","结构","骨架"],["前提真","前提为真","真假"],["必然","结论真","保证"]],answer:"逻辑学研究的是前提与结论之间的形式关系；正因为它把内容抽掉，才能给出「前提真则结论必然真」的普遍保证。所以它恰恰是通过研究形式来服务于真假：形式有效 + 前提为真 = 结论为真。",explanation:"要点有三：一是逻辑学抽掉内容是为了看清结构；二是结构决定「前提真时结论能不能假」；三是它与事实科学分工合作，一个管形式，一个管前提。",skill:"形式与内容"}]},{id:"s1-02",no:2,code:"1.2",title:"命题与论证",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:14,lead:"「请把窗户关上」「窗户关了吗」「窗户竟然关着」——这三句话里，只有一句能被追问「真的吗」。为什么偏偏是它？这个小小的差别，划出了逻辑学的地界。",objectives:["能区分陈述句与命令句、疑问句、感叹句，并说明只有前者有真假","能从一段话中标出前提与结论，并借助指示词定位","能判断一段话语是否够格构成论证"],concepts:["命题","真值","前提","结论","结论指示词","前提指示词"],body:`
## 核心定义

**专业定义**：命题（proposition）是由陈述句所表达、有真假可言的判断。一个命题要么真，要么假，没有第三种可能。

**通俗解释**：命题就是那种你说完之后，别人有权追问一句「真的吗？」的话。追问站得住，它是命题；追问得莫名其妙，它就不是。

**关键术语**

- **命题**：有真假可言的语句内容。
- **真值**：一个命题的真或假。
- **前提**：论证中用来支持别的命题的那些命题。
- **结论**：被支持、被确立的那个命题。
- **指示词**：像「所以」「因为」这样标示结构位置的词。

**容易混淆的概念**

> 命题 ≠ 句子。「下雨了」和「天在下雨」是两个不同的句子，却说同一个命题。反过来，同一句话换个人、换个时间说，表达的命题就变了——「我饿了」由谁说，命题就不同。

> 命题 ≠ 真话。假话也是命题，只要它有真假可言。「地球是平的」是假命题，不是「非命题」。

## 理论讲解

### 第一步：用「真假测试」筛句子

拿一句话问自己：它能不能被判为真或假？

- 「铜导电。」——能。这是命题。
- 「铜导电吗？」——不能。疑问句只表达询问，没有做出断言。
- 「请把铜片递给我。」——不能。命令句不描述世界，只要求改变世界。
- 「铜竟然导电！」——不能。感叹句表达的是态度。

四类句子里只有陈述句承担真假。这一步是全部工作的地基：**没有真假的句子，进不了论证**。

### 第二步：先定结论，再收前提

论证就是「若干前提 + 一个结论」。结论是要你接受的那句，前提是要你接受它的理由。

- 结论指示词：所以、因此、可见、由此可知、结论是、足以说明。
- 前提指示词：因为、由于、既然、理由是、考虑到、鉴于。

「既然」这类词还透露预设：前提已被双方接受，只剩结论要争。

### 第三步：给论证搭骨架

> 所有哺乳动物都有肺，鲸是哺乳动物，所以鲸有肺。

把内容抽掉，剩下：

$$\\forall x (M(x) \\to L(x)),\\ M(w) \\therefore L(w)$$

只要骨架合格，无论把「哺乳动物」换成什么，前提真就结论真。

### 第四步：确认它真是论证

两个条件缺一不可：有主张，有支持。缺一样就不是论证，也不接受有效性的评价。

## 例题与分析

**例 1（易）** 下列哪一句表达命题？

A 你昨天几点到家的？ B 他昨天十点到家。 C 快回家！ D 天哪，这么晚！

**分析**：B。A 是疑问，C 是命令，D 是感叹，三者都没有真假。检验方法很机械：能不能接上「这是假的」而不显得荒唐。B 能，其余不能。

**例 2（中）** 找出下面这段话的前提与结论。

> 既然这个方案的成本超出预算三成，而公司今年明确要求压缩开支，那么这个方案只能搁置。

**分析**：「既然」「而」后面是前提，「那么」后面是结论：方案只能搁置。前提两条：成本超预算三成；公司要求压缩开支。这段话还藏着一个未说出的前提——「超出预算又需压缩开支的方案应当搁置」，那是规范性判断，不是事实。

**例 3（难）** 下面这段话没有指示词，它是不是论证？

> 这家店排队排到街角。厨师是从那家米其林餐厅出来的。菜的味道不会差。

**分析**：是论证。第三句是主张，前两句是理由，只是作者省略了「所以」。判断依据不是词，而是**支持关系**：前两句的存在，显然是为了让第三句可信。

## 反例训练

> 因为公司规定所有访客都要登记，所以你明天进厂时必须先到前台登记。

**问题所在**：结论是一个命令。「必须先到前台登记」没有真假，用「前提真则结论真」去衡量它，等于拿秤去量声音。这段话实际在做的是**依据规则发出指令**，不是论证。要让它变成论证，得把结论改写成命题：「你明天进厂时需要先到前台登记。」

**形式化说明**：$R \\therefore !D$，其中 $!D$ 表示祈使句。祈使句没有真值，$!D$ 取不到真也取不到假，「前提真而结论假」这个检验根本无从谈起。

## 现实应用

- **看新闻标题**：先分清是陈述还是预测。「某地房价下跌」可核查，「明年楼市必回暖」需要额外证据，别用读事实的心态去读预测。
- **签合同**：合同里绝大多数句子是命令与承诺，用论证的标准去读会读偏。
- **日常吵架**：「你怎么能这样」是感叹。换成「你昨天没有提前告诉我」，才成为可检验的命题。

## 本节总结

**核心概念**：命题、真值、前提、结论、结论指示词、前提指示词。

**关键规则**

1. 只有陈述句有真假；命令、疑问、感叹都没有真假。
2. 论证必须同时有主张与支持，缺一不可。
3. 结构可以靠指示词找，也可以靠支持关系找，后者更可靠。

**常见错误**：把「说了很多」当成「论证了」；把假命题当成非命题；只盯指示词，漏掉没有指示词的论证；把反问句一律当成疑问句。

**需要掌握的能力**：一句话扫过去，立刻分出哪些句子能判真假、哪句是结论、哪几句是理由。
`,quiz:[{id:"s1-02-q1",type:"single",stem:"下列哪一句表达了命题？",options:["请勿在车厢内饮食","你为什么不早点说？","水在标准大气压下的沸点是 100 摄氏度","多么壮观的日落啊"],answer:"C",explanation:"只有 C 是陈述句，可以被判为真或假。A 是命令，B 是疑问，D 是感叹，三者都不描述世界，因而没有真值，也就不是命题。",skill:"命题的识别"},{id:"s1-02-q2",type:"judge",stem:"因为疑问句「你昨天去哪儿了」没有真假，所以它不是命题。",answer:!0,explanation:"疑问句表达的是询问而非断言，没有做出任何可以被判真判假的判断，因此不是命题。要注意例外：反问句如「难道你不知道吗」实际是断言，仍可算命题。",skill:"命题与句式"},{id:"s1-02-q3",type:"single",stem:"「既然你已经答应了他，那就该守约。」这个论证的结论是：",options:["你已经答应了他","守约是一种美德","那就该守约","这段话没有结论，只是陈述"],answer:"C",explanation:"「既然」是前提指示词，引出的「你已经答应了他」是前提；「那就」引出的是被支持的主张，即结论。B 是这段话背后可能依赖的隐含前提，不是它明说的结论。",skill:"前提与结论的区分"},{id:"s1-02-q4",type:"multi",stem:"下列哪些词通常充当结论指示词？（多选）",options:["所以","因此","因为","可见"],answer:["A","B","D"],explanation:"「所以」「因此」「可见」都把后面那句标为结论。「因为」相反，它引出的是理由，属于前提指示词。误把「因为」当结论指示词，会把整个论证的方向读反。",skill:"指示词"},{id:"s1-02-q5",type:"short",stem:"为什么命令句不能充当论证的结论？请用两三句话说明理由。",keywords:[["没有真假","无真假","真值"],["命题","陈述"],["前提真","结论假","检验","评价"]],answer:"论证的结论必须是命题，而命题的标志是有真假。命令句要求改变世界，不描述世界，因此没有真值；既然它不能真也不能假，「前提真而结论假」这一检验就无法进行，论证的有效性也就无从谈起。",explanation:"关键在于把「结论必须是命题」和「命题必须有真值」两步连起来。只答「命令不是陈述」不够，还要说明为什么这会导致论证无法被评价。",skill:"命题与论证的关系"}]},{id:"s1-03",no:3,code:"1.3",title:"论证的辨识",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:13,lead:"朋友讲了一大段今天的遭遇：堵车、迟到、被领导批。你听完只想问一句「所以呢」。这三个字为什么恰好戳中了「叙述」与「论证」之间那条看不见的界线？",objectives:["能判断一段文字有没有提出可评价的主张","能区分论证与叙事、描写、抒情三类话语","能在没有指示词时，靠语境与支持关系确认论证"],concepts:["主张","论证","叙事","隐含结论","语境","支持关系"],body:`
## 核心定义

**专业定义**：辨识论证，是判断一段话语中是否存在一个被其他命题支持的主张。它要同时满足三条：有一个主张（结论）；有支持它的理由（前提）；理由与主张之间确实存在支持关系。

**通俗解释**：一段话是不是论证，就看它有没有「想让你相信点什么」，并且拿出了东西让你相信。只想让你知道发生了什么，是叙述；只想让你有情绪，是抒情。

**关键术语**

- **主张**：说话人希望听者接受的命题。
- **支持关系**：前提为真，会使结论更可信或必然为真。
- **叙事**：按时间或因果顺序陈述事件，不提出待证主张。
- **隐含结论**：没有明说、但由上下文可以确定的主张。

**容易混淆的概念**

> 论证 ≠ 说服。说服可以靠威胁、撒娇、反复念叨；论证只能靠理由。一段话成功改变了你的想法，不代表它是论证。

> 有倾向 ≠ 有主张。作者选了什么细节、用了什么形容词，读者能感到倾向，但倾向不是命题。**主张必须可以说真说假**，而不是一种气氛。

## 理论讲解

### 第一步：先问「有没有人想让我相信什么」

这是最快的筛子。读完一段话，问：作者希望我点头认同哪一句？一句都找不到，这段多半不是论证。

### 第二步：把四类话语分开

- **叙事**：先发生什么，后发生什么。
- **描写**：某物是什么样子。
- **抒情**：我感受如何。
- **论证**：某句为真，理由是什么。

前三类可以很动人，但不承担「支持」的功能。

### 第三步：处理隐含结论

日常说话常把结论吞掉，只留理由。同事说「这个需求改了五版，每次改完又说回第一版」，他没说「所以别再改了」，但意思到了。结论隐含时，要结合语境补，且只补他显然想说的那句。

要注意，有三种东西长得像论证却没有提供理由：把结论换个说法重说一遍、不谈主张只攻击提出主张的人、用恐惧与同情替代理由。

## 例题与分析

**例 1（易）** 判断下列三句各属哪类话语。

甲：昨天下午停电了，整整两个小时。
乙：这破地方，一年到头停电。
丙：停电两小时，冰箱里的东西怕是保不住了。

**分析**：甲是叙事，只报告事件。乙是抒情加抱怨，「一年到头」是夸张，没有给出可检验的主张。丙是论证，隐含结论是「得赶紧处理冰箱里的东西」，前提是「停电两小时」。

**例 2（中）** 一则新闻导语：「本市今年新增三所公办幼儿园，学前教育资源进一步扩大。」这里面有论证吗？

**分析**：前半是事实，后半是由事实引出的判断，中间有推出关系，但作者没展开理由（新增三所为何就等于「进一步扩大」？基数是什么？）。这属于有结论、支持很薄的论证。

**例 3（难）** 下面这段的结论在第几句？

> 很多人说年轻人不愿意加班。我们部门去年招的六个应届生，五个主动申请过周末值班。真正的问题恐怕不在年轻人身上，而在管理方式上。

**分析**：结论在最后一句：「问题在管理方式」。中间那句支持「年轻人并非不愿加班」，而这一句又是反驳开头流行说法的**中间结论**。这段是两个论证叠在一起，一个用来破，一个用来立。结论不总在末尾，也不总只有一个。

## 反例训练

> 昨天下午三点，会议室空调坏了，三十多个人在里面坐了两个小时，中途有人出去买了三次水，散会时大家的衬衫都湿了。

**问题所在**：这段话只有材料，没有主张。它可能在暗示「会议室太热、公司该修空调」，但暗示不是主张——没有明说的命题，就没有可评价的结论。补上「所以公司应当检修空调」，它才成为论证，而那一步是读者替作者做的。

**形式化说明**：这段只给出了 $P_1, P_2, P_3$ 三个命题，缺少结论 $C$。没有 $C$，就没有 $\\{P_1, P_2, P_3\\} \\therefore C$ 这个结构，也就谈不上有效或无效。

## 现实应用

- **刷社交媒体**：长文情绪铺满，主张只有一句。先找那一句，再看它有没有被支持。
- **听销售介绍**：把「产品有多好」还原成「主张 + 理由」，去掉形容词后事实往往极少。
- **听领导讲话**：区分「通报情况」与「提出要求」，前者不需要你被说服，后者才需要。

## 本节总结

**核心概念**：主张、论证、叙事、隐含结论、语境、支持关系。

**关键规则**

1. 先找主张，没有主张就没有论证。
2. 叙事、描写、抒情都不是论证，它们不需要被「支持」。
3. 结论可以隐含，可以出现在开头、中间或结尾。
4. 支持关系要看实质，不能只看有没有「所以」。

**常见错误**：把信息量大的段落当成论证；把作者的语气当成主张；把「我不同意」当成「这不是论证」。

**需要掌握的能力**：读完任何一段议论，能一句话说出「他想让我信什么」和「他拿什么让我信」。
`,quiz:[{id:"s1-03-q1",type:"single",stem:"判断一段话语是不是论证，最关键的依据是：",options:["段落里有没有出现「所以」「因此」这类词","段落长度是否足够，理由是否充分","是否存在一个主张，并且有命题在为它提供支持","作者的语气是否坚定"],answer:"C",explanation:"指示词只是线索，很多论证省略了它们；长度和语气与论证无关。真正的判据是结构：有主张、有支持、两者之间有支持关系。A 只是辅助信号，D 属于修辞。",skill:"论证的辨识标准"},{id:"s1-03-q2",type:"judge",stem:"一段只叙述事件经过、没有提出任何主张的文字，也可以算作论证，只要它的事实足够多。",answer:!1,explanation:"论证必须有结论，也就是一个待确立的主张。事实再多，如果作者没有用它去支持某个命题，那只是叙述。事实的数量不能替代主张的存在。",skill:"叙事与论证"},{id:"s1-03-q3",type:"single",stem:"「这房子采光太差，冬天下午三点就得开灯，隔壁那套朝南的就不会。」这段话的主要功能是：",options:["纯粹叙述看房的经过","通过对比给出理由，支持「这房子采光差」这一判断","表达对房主的愤怒","提出一个疑问"],answer:"B",explanation:"开头是主张，后面两条是对它的支持：一是开灯时间，二是同类对比。虽然省略了「所以」，支持关系清楚，属于论证。A 忽略了主张，C、D 与文本不符。",skill:"隐含结论的识别"},{id:"s1-03-q4",type:"multi",stem:"下列哪些属于「看起来像论证、其实不是」的情况？（多选）",options:["把结论换个说法再重复一遍","不谈主张，只攻击提出主张的人","用具体数据支持一个判断","用恐惧和同情替代理由"],answer:["A","B","D"],explanation:"A 是循环式的空转，没有新增支持；B 是诉诸人身；D 是诉诸情绪。C 恰恰是正当的支持方式，数据若能真实相关，就是合格的前提。",skill:"伪论证"},{id:"s1-03-q5",type:"short",stem:"有人把一段新闻报道当成了论证，认为「报道里事实很多，所以论证很充分」。请指出这种看法的错误。",keywords:[["主张","结论"],["支持关系","推出"],["事实多","不等于","数量"]],answer:"论证的核心不是事实的数量，而是这些事实有没有被用来支持一个明确的主张。新闻报道可能只陈述事件而不提出结论，这时它是叙述而非论证；即使提出了结论，也要看事实与结论之间是否真有支持关系。",explanation:"答题要抓住两点：一是论证需要结论，二是需要支持关系。只说「新闻不是论证」而不解释结构，等于没有回答为什么。",skill:"叙事与论证的界限"}]},{id:"s1-04",no:4,code:"1.4",title:"论证与说明",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:14,lead:"「因为昨天下暴雨，所以小区停电了。」和「因为所有金属都导电，所以铜导电。」句式一模一样。可前者不需要你被说服，后者却要。同一种句式，为什么干的是两件不同的事？",objectives:["能按说话目的区分解释与论证","能判断「因为」引出的是原因还是理由","能说明把说明误当论证会带来什么后果"],concepts:["解释","论证","已知事实","待确立主张","语境","目的"],body:`
## 核心定义

**专业定义**：解释（explanation）旨在使人理解一个**已被接受**的事实何以如此；论证（argument）旨在使人**接受**一个尚未被接受的命题。两者的语言外壳可以完全相同，区别在于说话的目的与听者的认知状态。

**通俗解释**：解释回答「为什么会这样」，论证回答「凭什么这么说」。一个是在你已经点头之后补上缘由，一个是在你还没点头之前递上理由。

**关键术语**

- **被解释项**：需要被说明的那个已知事实。
- **解释项**：用来说明它的因素。
- **待确立主张**：说话人希望听者接受、而听者尚未接受的命题。
- **语境**：判断目的所依赖的对话背景。

**容易混淆的概念**

> 同一个句子，在不同语境里可以是解释也可以是论证。「因为地滑，所以他摔倒了」——如果你们都知道他摔了，这是解释；如果有人正否认他摔了，这就是论证。**判断依据是听者的认知状态，不是句式。**

## 理论讲解

### 第一步：先问「这个结论还有争议吗」

结论双方都已接受，说话人在补充缘由；结论仍待确立，说话人在提供支持。这是全部分辨的起点。

### 第二步：看「因为」后面接的是什么

- 接**原因**：物理的、心理的、历史的因素。「因为管道老化，所以停水。」
- 接**理由**：支持某个判断的命题。「因为管道老化已久，所以不该临时通知。」

两者都用「因为」，区别是：原因解释世界为何如此，理由支持我们该相信什么。

### 第三步：解释的深度不等于论证的强度

解释可以很细致，把每个环节都说清楚，但它仍然只是解释。细节提高的是可理解性，不是可信度。真遇到解释与论证混在一段的文本，要分清哪几句说明已有的、哪几句支持待定的。

## 例题与分析

**例 1（易）** 医生看完片子说：「你的膝盖疼，是因为半月板有轻微撕裂。」这是解释还是论证？

**分析**：解释。「膝盖疼」是病人自己报告、双方都已接受的事实，医生在说明成因。若病人否认自己疼，医生就不会这样说话。关键在于：被说明的那一项，此前是否已被接受。

**例 2（中）** 历史书上写：「这场战争之所以爆发，是因为三国同盟体系把局部冲突迅速放大。」这是解释还是论证？

**分析**：表面是解释，实际常兼有论证功能。若「战争爆发」是公认史实，它在解释成因；但若作者想论证「同盟体系是危险的」，「它把局部冲突放大」就成了理由。同一个句子承担哪种功能，取决于作者想让你接受什么。

**例 3（难）** 下面这段话里，哪部分是解释，哪部分是论证？

> 这家公司去年亏损，是因为它把大量资金投在了尚未验证的新业务上。而这种投入方式在行业内并不罕见，可见亏损并非经营能力的问题，而是行业周期的问题。

**分析**：第一句是解释——亏损是已知事实，作者说明其来源。第二句转为论证：用「行业内并不罕见」支持「不是能力问题」，再推出「是周期问题」。风险在于：解释成立不等于「行业周期」被支持，后者需要独立的行业数据。

## 反例训练

> 为什么我们班的成绩这么好？因为我们老师每天晚上批改作业到深夜。

**问题所在**：如果「成绩好」已是公认事实，这是解释；若说话人想借此证明「这位老师很负责」，那就是另一个论证，前提与结论都变了。把解释当论证，会让人以为「找到了原因」等于「证明了主张」。成绩好也可能因为生源好、题目简单或统计口径变了。

**形式化说明**：解释的结构是 $E \\to F$，$F$ 已知为真，$E$ 待说明；论证的结构是 $E \\therefore F$，$F$ 待确立。方向相反：解释从已知事实回溯原因，论证从理由推向结论。

## 现实应用

- **看病**：医生说的多是解释。要问「有什么证据排除了别的可能」，而不是「这个解释顺不顺」。
- **复盘工作**：项目失败后开会，多数发言是解释。要做决策，必须再走一步，变成「所以下次该改哪条流程」。
- **听人辩解**：「我迟到是因为地铁故障」是解释。若对方在质疑你「是否重视这次会议」，它就被当成了论证，而它支持不了那个结论。

## 本节总结

**核心概念**：解释、论证、已知事实、待确立主张、语境、目的。

**关键规则**

1. 结论已被接受，多半是解释；结论待确立，才是论证。
2. 「因为」既能引原因，也能引理由，看功能不看词。
3. 解释的细致程度不代表论证的强度。
4. 一段话里可以既有解释又有论证，要分段判定。

**常见错误**：见到「因为…所以…」就认定是论证；把机制解释当成结论已获证明；把「说得通」当成「说得对」。

**需要掌握的能力**：读一段话，先判断「哪一句还需要被相信」，再决定用解释的标准还是论证的标准去衡量它。
`,quiz:[{id:"s1-04-q1",type:"single",stem:"区分解释与论证，最关键的判据是：",options:["句子里有没有出现「因为」","被说明的那一项是否已经被双方接受","解释得是否足够详细","说话人是不是专业人士"],answer:"B",explanation:"解释针对已被接受的事实，论证针对待确立的主张，所以听者的认知状态是分水岭。A 只是表面句式，C 是深度而非性质，D 与结构无关。",skill:"解释与论证的区别"},{id:"s1-04-q2",type:"judge",stem:"一段解释即使非常细致、每个环节都说得通，也不能因此认为它支持的那个主张已经被证明。",answer:!0,explanation:"解释的细致提高的是可理解性，不是可信度。一个现象往往有多种都能自圆其说的解释，能讲通不等于为真。要证明主张，还需要排除竞争解释的独立证据。",skill:"解释与证明"},{id:"s1-04-q3",type:"single",stem:"「这台机器停机，是因为冷却泵的轴承磨损了。」在双方都已知停机的情况下，这句话是：",options:["一个论证，结论是轴承磨损","一个解释，被解释项是停机","一个命令，要求更换轴承","一个没有真值的感叹"],answer:"B",explanation:"停机是双方已接受的事实，说话人在说明其成因，因此是解释。若有人正在否认停机，同一句话才转为论证。判断依据是认知状态，不是句式。",skill:"解释的识别"},{id:"s1-04-q4",type:"multi",stem:"把解释误当成论证，可能导致哪些错误？（多选）",options:["以为找到了原因就等于证明了主张","忽略还存在其他竞争解释","把已被接受的事实当成待证结论","要求解释提供排除其他可能的证据"],answer:["A","B","C"],explanation:"A、B、C 都是混淆两者的典型后果。D 恰恰是正确做法：一旦某段话被当作论证使用，就应当要求它排除竞争解释，而不是继续用解释的标准放宽它。",skill:"混淆解释与论证的后果"},{id:"s1-04-q5",type:"short",stem:"同一句话「因为地滑，所以他摔倒了」，在什么情况下是解释，在什么情况下是论证？请说明判断依据。",keywords:[["已知","都接受","公认"],["否认","争议","待确立"],["认知状态","目的"]],answer:"若双方都已知道他摔倒，这句话是在说明成因，属于解释；若有人正在否认他摔倒，说话人是在用「地滑」支持「他摔倒了」这一主张，属于论证。判断依据是听者的认知状态与说话目的，而不是句式。",explanation:"关键在于指出同一语句的功能随语境变化。只答「看语境」太笼统，要具体说明语境改变了什么：被支持的那一项是否已被接受。",skill:"语境中的解释与论证"}]},{id:"s1-05",no:5,code:"1.5",title:"演绎论证与归纳论证",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:15,lead:"「太阳升起过一万次，所以明天还会升起」和「所有人都会死，苏格拉底是人，所以苏格拉底会死」，都用了「所以」。可一个给你铁一样的必然，一个只给你很高的概率。这条线画在哪？",objectives:["能按前提对结论的支持强度区分演绎论证与归纳论证","能判断一个论证是否声称提供了决定性支持","能说明归纳结论为何只能是或然的"],concepts:["演绎论证","归纳论证","决定性支持","或然支持","归纳强度","反例"],body:`
## 核心定义

**专业定义**：演绎论证声称其前提为结论提供**决定性**支持——前提若真，结论不可能假。归纳论证只声称前提为结论提供**或然的**支持——前提若真，结论很可能真，但仍然可能假。

**通俗解释**：演绎是「前提一真，结论就跑不掉」；归纳是「前提一真，结论八成跑得掉」。前者给你保证，后者给你信心。

**关键术语**

- **决定性支持**：前提真则结论必然真，没有例外空间。
- **或然支持**：前提真则结论更可能真，但保留例外空间。
- **归纳强度**：前提对结论的支持有多强，强度高的归纳结论更可信，但仍非必然。
- **反例**：使「前提真而结论假」成为可能的设想。

**容易混淆的概念**

> 别再用「从一般到个别是演绎、从个别到一般是归纳」这个旧定义。它既漏掉大量演绎（「所有 A 是 B，所有 B 是 C，所以所有 A 是 C」并不涉及个别），也漏掉大量归纳（统计外推两头都不是「个别」）。**判断标准是支持强度，不是推理方向。**

## 理论讲解

### 第一步：做一个思想实验

拿到论证只问一句：**能不能设想前提全真而结论假？**

「所有人都会死，苏格拉底是人」，你想不出苏格拉底不死的样子——这是演绎。「这只天鹅是白的，那只也是」，你能想出一只黑天鹅——这是归纳。

### 第二步：认识归纳的几种形态

- **枚举归纳**：见过的都如此，所以全都如此。
- **统计归纳**：样本中占比多少，总体大致也是这个比例。
- **类比推理**：若干方面相似，所以在另一方面也相似。
- **因果归纳**：由相关或干预结果推断因果。

它们的共同点是：结论超出了前提所断定的范围。归纳强度是程度问题，不是开关——九十九次观测一致，和只见过一次，支持力差得很远。

### 第三步：注意「演绎外壳的归纳」

$$99\\%\\ \\text{的}\\ A\\ \\text{是}\\ B,\\ x\\ \\text{是}\\ A \\therefore x\\ \\text{是}\\ B$$

形式上有「所有」的气势，结论却只是「很可能」。判断方法是看结论的强度：结论里带「必然」「一定」，前提只给概率，它就是伪装成演绎的归纳。

## 例题与分析

**例 1（易）** 判断下列两个论证的类型。

甲：所有鸟都有羽毛，麻雀是鸟，所以麻雀有羽毛。
乙：我见过的麻雀都会飞，所以麻雀都会飞。

**分析**：甲是演绎，前提真则结论不可能假。乙是归纳，可以设想一只受伤的麻雀——前提真而结论假。区别不在话题，而在支持强度。

**例 2（中）** 「这项药在三千人临床试验中有效率为 78%，所以它对你也大概率有效。」这是演绎还是归纳？

**分析**：归纳。前提是关于样本的统计事实，结论是关于个体的概率判断，中间隔着「你与样本人群相似」这一未经保证的假设。

**例 3（难）** 数学家证明「素数有无穷多个」，与气象学家预测「明天降雨概率 70%」，差别仅仅在确定性吗？

**分析**：不只是程度差别，而是**种类差别**。数学证明的前提一旦成立，结论被完全锁定，否认结论就要否认前提；天气预报的结论被证伪，并不构成对前提的反驳。前者接受有效性的评价，后者接受强度的评价。

## 反例训练

> 我见过的三十只天鹅都是白的，所以所有天鹅都是白的。

**问题所在**：这是枚举归纳。前提全真时结论仍可能假——黑天鹅在澳大利亚被发现，正是这句话的下场。它不是无效，而是**强度不足**：样本再多只提高概率，不产生必然。何况它没交代样本是否随机，三十只可能全在同一片湖区。

**形式化说明**：

$$W(a_1) \\land W(a_2) \\land \\dots \\land W(a_{30}) \\therefore \\forall x\\, W(x)$$

前提是一组合取命题，结论是全称命题，前提并不蕴含结论。存在一个模型使前提真而结论假，故不能作为演绎成立。

## 现实应用

- **法庭**：DNA 比对、目击证词多为归纳，只能给出概率；口供与物证的矛盾则可能构成演绎式排除。所谓「证据链完整」，实际是说归纳强度足够高。
- **医学**：随机对照试验是归纳的典范，能说「大概率有效」，不能说「对这位病人必然有效」。
- **机器学习**：训练集规律外推到新数据，本质是归纳。模型表现好说明强度高，不说明规律必然成立。

## 本节总结

**核心概念**：演绎论证、归纳论证、决定性支持、或然支持、归纳强度、反例。

**关键规则**

1. 演绎声称前提真则结论必然真；归纳只声称很可能真。
2. 判断类型看支持强度，不看「一般/个别」的方向。
3. 归纳的结论永远保留被反例推翻的可能。
4. 演绎不产生新信息，归纳才扩展知识，也才承担风险。

**常见错误**：用「从一般到个别」套所有演绎；把强归纳当成演绎；因为归纳不是必然就贬低它；看到「所有」就认定是演绎。

**需要掌握的能力**：读完一个论证，能说出它承诺了多大的确定性，以及这个承诺是否兑现。
`,quiz:[{id:"s1-05-q1",type:"single",stem:"区分演绎论证与归纳论证的正确标准是：",options:["前提是一般命题还是个别命题","结论出现在开头还是结尾","前提是否声称给结论提供了决定性支持","论证的长度与复杂程度"],answer:"C",explanation:"类型取决于支持强度：声称前提真则结论必然真的是演绎，只给或然支持的是归纳。A 是已被淘汰的旧定义，会误判许多论证；B、D 与结构性质无关。",skill:"演绎与归纳的区分标准"},{id:"s1-05-q2",type:"judge",stem:"一个归纳论证的强度很高，就意味着它的结论必然为真。",answer:!1,explanation:"强度高只说明前提让结论更可信，例外空间依然存在。黑天鹅的例子就是这样：此前所有观测都支持「天鹅皆白」，强度极高，结论仍然被推翻。必然性只有演绎才提供。",skill:"归纳强度"},{id:"s1-05-q3",type:"single",stem:"「99% 的出租车是绿色的，这辆车是出租车，所以这辆车是绿色的。」这个论证：",options:["是有效演绎，因为前提几乎必然推出结论","实质是归纳，前提只给结论很强的或然支持","无效，因为结论可能是假的","既不是演绎也不是归纳"],answer:"B",explanation:"它可以设想前提真而结论假（这辆车属于那 1%），所以不构成决定性支持，实质是归纳。C 的表述混淆了「无效」与「可能假」：归纳不按有效/无效评价，而按强度评价。",skill:"伪装成演绎的归纳"},{id:"s1-05-q4",type:"multi",stem:"下列哪些属于归纳论证的典型形态？（多选）",options:["见过的样本都如此，所以总体都如此","两事物在多个方面相似，所以另一方面也相似","所有 A 是 B，x 是 A，所以 x 是 B","样本中某比例如此，所以总体大致如此"],answer:["A","B","D"],explanation:"A 是枚举归纳，B 是类比，D 是统计归纳。C 是典型的三段论演绎：前提若真，结论没有任何例外空间，属于决定性支持。",skill:"归纳的类型"},{id:"s1-05-q5",type:"short",stem:"为什么不能用「从一般到个别是演绎、从个别到一般是归纳」来区分两类论证？请举例说明。",keywords:[["支持强度","必然","决定性"],["反例","一般到一般","个别到个别"],["误判","不准确"]],answer:"这个旧定义按推理方向分类，与支持强度无关。比如「所有 A 是 B，所有 B 是 C，所以所有 A 是 C」是从一般到一般，却是标准演绎；而统计外推是从样本推总体，两头都不是个别，却是归纳。正确的标准是前提是否声称给出决定性支持。",explanation:"关键是给出反例证明旧定义既漏又错，再点明正确标准。只说「旧定义不好」而不举例，说明不了它在哪些情形失效。",skill:"演绎与归纳的旧定义"}]},{id:"s1-06",no:6,code:"1.6",title:"有效性与真实性",stage:1,chapter:"第1章 逻辑学的基本概念",minutes:16,lead:"有个论证，前提全真，结论也真，逻辑学家却说它「无效」。这是在吹毛求疵，还是我们平时把两件根本不同的事，硬塞进了同一个评价词里？",objectives:["能准确复述有效性的定义并用它判定论证","能区分论证的有效性与命题的真实性","能列出前提真假与有效性的四种组合，并认出可靠论证"],concepts:["有效性","真实性","可靠性","反例模型","形式","必然"],body:`
## 核心定义

**专业定义**：一个演绎论证是**有效的**，当且仅当不可能出现「前提全真而结论假」的情况。有效性说的是形式上的保证，与前提实际上真假无关。**真实的**说的是一个命题符合事实。

**通俗解释**：有效是「这台机器不会出次品」，真是「原料是好的」。机器好、原料好，产品才好，这才叫可靠。机器好但原料烂，产品照样可能坏。

**关键术语**

- **有效性**：不可能前提真而结论假。
- **真实性**：命题与事实相符。
- **可靠性（sound）**：既有效，前提又全真。
- **反例模型**：一种让前提全真、结论为假的具体设想。

**容易混淆的概念**

> 有效 ≠ 真。有效性属于**论证**，真属于**命题**。说「这个论证是真的」是范畴错误，就像说「这把尺子是蓝色的重量」。同理，说「这个命题很有效」也不通。

> 无效 ≠ 结论假。无效只是说这个论证没把结论撑住，结论本身可能完全正确。你猜对了答案，不代表你的推导成立。

## 理论讲解

### 第一步：只做一种想象

判断有效性时，**暂时忘掉前提实际上是不是真的**，只做一件事：设想一个世界，在那里所有前提都成立，然后看结论能不能是假。

- 找不到这样的世界：有效。
- 找到了：无效，而且这个设想就是反例模型。

### 第二步：理解「有效」为什么与内容无关

看这个形式：

$$\\forall x (P(x) \\to Q(x)),\\ P(a) \\therefore Q(a)$$

不管 $P$、$Q$ 是什么意思，只要前提真，结论就真。有效性是**形式**的性质，正因为如此，它才能被普遍地传授和检查。

### 第三步：把四种组合摆开

| 前提 | 论证 | 结论 | 评价 |
| --- | --- | --- | --- |
| 全真 | 有效 | 必真 | 可靠（sound） |
| 有假 | 有效 | 真假不定 | 形式对，材料错 |
| 全真 | 无效 | 真假不定 | 未被支持 |
| 有假 | 无效 | 真假不定 | 双重失败 |

第三行最容易被忽视：前提全真、论证无效，结论仍可能碰巧为真。这时结论对了，理由却立不住。所以检查要分两步走，先查形式，再查前提，不能混着来。

## 例题与分析

**例 1（易）** 「所有猫都是动物，所有狗都是动物，所以所有狗都是猫。」这个论证有效吗？

**分析**：无效。设想一个世界：猫和狗都是动物，但狗不是猫——这个设想成立，前提全真而结论假。两个前提事实上都为真，形式却不成立。这是**中项不周延**的典型。

**例 2（中）** 「所有鱼都会飞，鲤鱼是鱼，所以鲤鱼会飞。」评价这个论证。

**分析**：形式有效。「所有 $F$ 是 $G$，$x$ 是 $F$，所以 $x$ 是 $G$」是合格形式，前提真则结论必真。但它**不可靠**，因为第一个前提是假的。这个例子说明：有效性可以是「空转」的——机器没问题，原料是假的。

**例 3（难）** 「巴黎在法国，所以 2 + 2 = 4。」前提真，结论真，这个论证有效吗？

**分析**：无效。两个命题之间没有任何支持关系，结论的真与前提的真只是碰巧并存。可以设想一个世界，巴黎在法国而 2 + 2 = 5——数学上不可能，但那是因为数学，不是因为这段推理。它最清楚地表明：**结论为真，不能反过来证明论证有效**。

## 反例训练

> 这个方案一定可行。你想，提这个方案的人在公司干了十五年，从来没判断错过。

**问题所在**：即便前提全真（他确实干了十五年、确实没判断错过），也推不出「方案可行」。过去没出错不蕴含这次不会出错，何况「没判断错过」本身多半是夸张。这是把「人可靠」偷换成「结论可靠」。

**形式化说明**：

$$E \\therefore V$$

从「此人经验丰富」到「方案可行」，缺少一座桥：$E \\to V$（经验丰富者的判断在本案中可靠）。补上这座桥后，桥本身又需要独立支持，否则论证仍然悬空。

## 现实应用

- **评审意见**：把「结论我同意」和「理由站得住」分开写，两栏合并会放过真正的漏洞。
- **投资决策**：「这家公司过去五年增长很好，所以值得买」——即便数据全真，也依赖「增长可以延续」，那是需要单独论证的一步。
- **法庭**：辩护律师攻击的常常不是结论，而是从证据到结论的那一步。

## 本节总结

**核心概念**：有效性、真实性、可靠性、反例模型、形式。

**关键规则**

1. 有效 = 不可能前提真而结论假，这是形式的性质。
2. 真 = 命题符合事实，这是内容的性质。
3. 有效且前提全真 = 可靠，此时结论必真。
4. 无效论证可以有真结论；有效论证可以有假前提。

**常见错误**：用结论的正确性为论证背书；把「前提真」当成「推理对」；认为无效就意味着结论错；把「可靠」与「有效」当同义词。

**需要掌握的能力**：面对任何论证，能分别给出两个独立判断——形式是否有效、前提是否真实——并且不把两者互相替代。
`,quiz:[{id:"s1-06-q1",type:"single",stem:"一个演绎论证是有效的，意思是：",options:["它的前提在事实上全部为真","它的结论在事实上为真","不可能出现前提全真而结论假的情况","大多数人都接受它的结论"],answer:"C",explanation:"有效性是形式性质，与前提实际真假无关。A、B 说的是真实性，D 说的是接受度。有效性只承诺一件事：前提真时，结论不会假。",skill:"有效性的定义"},{id:"s1-06-q2",type:"judge",stem:"一个无效的论证，其结论也可能是真的。",answer:!0,explanation:"无效只说明前提没有撑住结论，结论本身的真假是另一回事。比如「巴黎在法国，所以 2+2=4」，推理毫无支持关系，结论却是真的。这正是不能由结论真反推论证有效的理由。",skill:"有效性与真实性"},{id:"s1-06-q3",type:"single",stem:"「所有鱼都会飞，鲤鱼是鱼，所以鲤鱼会飞。」对这个论证的准确评价是：",options:["有效但不可靠，因为前提有假","无效，因为前提是假的","有效且可靠，因为形式正确","无效，因为结论荒谬"],answer:"A",explanation:"形式是「所有 F 是 G，x 是 F，所以 x 是 G」，有效；但第一个前提为假，所以不可靠。B 混淆了前提假与形式无效，D 用结论的荒谬代替结构分析，都是典型错误。",skill:"有效与可靠"},{id:"s1-06-q4",type:"multi",stem:"关于有效性与真实性，下列说法正确的有：（多选）",options:["有效且前提全真的论证，结论必然为真","前提全真但论证无效时，结论仍可能为真","论证有效，就说明它的前提一定为真","结论为真，就说明论证一定有效"],answer:["A","B"],explanation:"A 是可靠论证的定义性结论，B 是「碰巧猜对」的情形。C 把形式与材料混为一谈，有效论证完全可以建立在假前提上；D 是反向推理，结论真可能来自运气而非论证。",skill:"四种组合"},{id:"s1-06-q5",type:"short",stem:"有人反驳说：「这个论证的结论明明是对的，你怎么能说它无效？」请解释这句话混淆了什么。",keywords:[["有效性","形式"],["真实性","结论为真"],["独立","两件事"]],answer:"它把结论的真实性与论证的有效性混为一谈。有效性看的是前提能否撑住结论，结论的真假则取决于事实；一个结论为真的判断，完全可能出自一条断裂的推理。两者需要分别检查，不能用其中一个替代另一个。",explanation:"答题要点是明确指出两个评价对象不同：有效性属于论证，真实性属于命题。能补一句「结论真可能只是碰巧」更完整。",skill:"混淆有效与真实"}]},{id:"s1-07",no:7,code:"2.1",title:"论证的重塑",stage:1,chapter:"第2章 论证的分析",minutes:15,lead:"真实的争论从不工整：三句抱怨、两句题外话、一个反问，重点藏在最后半句。你要怎样把它整理成能检查的样子，又不至于整理成另一个人的观点？",objectives:["能删去冗余成分并保留原论证的核心意思","能把一段自然语言整理成前提与结论分明的标准形式","能补出必要的隐含前提，同时不偷偷加强或削弱原论证"],concepts:["重塑","标准形式","冗余","隐含前提","善意原则","保真"],body:`
## 核心定义

**专业定义**：论证的重塑（reconstruction）是把自然语言中的论证整理成前提与结论分明的标准形式，使支持关系可以被逐条检查。它要求**保真**：整理后的论证必须与原话表达同一个论证。

**通俗解释**：重塑像给口述录音做文字稿：可以去掉「嗯」「那个」、调整语序、补上省略的主语，但不能替说话人改口。

**关键术语**

- **标准形式**：把前提逐条列出，最后一行写结论，中间用「所以」隔开。
- **冗余**：重复、修饰、举例、情绪表达等不影响推理的部分。
- **隐含前提**：没有明说，但结论要成立就必须默认的命题。
- **善意原则**：在多种读法中，优先选择最合理的那一种。

**容易混淆的概念**

> 重塑 ≠ 改写观点。重塑只改**表达方式**，不改**主张内容**。整理后比原话更强、更弱，或变成另一个结论，那就不是重塑，是替换。

> 补隐含前提 ≠ 补一个更有力的理由。补的必须是原作者显然默认的东西。补强了，你打的是稻草人；补弱了，你替他找台阶。

## 理论讲解

### 第一步：通读一遍，先标结论

不要边读边拆。整段读完，问「他到底想让我信什么」，把那一句圈出来。结论可能在开头、中间或结尾。

### 第二步：删掉冗余，但留住限定词

重复表述、情绪词、客套、与推理无关的举例都可以删。「大多数」「通常」这类限定词不能删，它们决定了论证的强弱。

### 第三步：按逻辑顺序重排前提

原话的顺序常是修辞顺序：先讲最打动人的，再补最硬的。重塑要改成逻辑顺序，先放最基础的，再放依赖它的。

### 第四步：补隐含前提，用最小补充

问自己：还差哪一句，结论才被撑住？只补那一句。

> 小张是学生会主席，他肯定认识校长。

缺的是「学生会主席通常认识校长」。补这一句就够；若补成「必然认识，且私交甚好」，就加了原话没有的东西。补完再读一遍，看原作者会不会认账。

## 例题与分析

**例 1（易）** 重塑下面这段话。

> 说实话，我真觉得这事儿不该这么办。你想啊，咱们预算就那么点，人手还少了两个，硬上不是找麻烦吗？

**分析**：结论是「现在不该这么办」，前提两条：预算有限；人手减少。「说实话」「你想啊」「不是找麻烦吗」都是语气成分，可删。重塑为：

$$P_1:\\ \\text{预算有限}。\\quad P_2:\\ \\text{人手减少}。\\quad \\therefore C:\\ \\text{现在不宜推进}。$$

「硬上不是找麻烦吗」是反问，功能上等于复述结论，不算额外前提。

**例 2（中）** 重塑这段话，并指出补了什么。

> 这家供应商的报价比别家低两成，交期还短一周，选他们没错。

**分析**：结论「应选这家供应商」，前提「报价低两成」「交期短一周」。这两条只说明价格与交期占优，还得补：**本次采购主要按价格与交期评判，质量与服务没有实质差异**。这条一补上，薄弱处立刻暴露。

**例 3（难）** 下面两个重塑，哪个更保真？

原文：「这个政策推出后投诉变多了，可见它有问题。」

重塑甲：投诉增多说明政策损害了市民利益，所以政策有问题。
重塑乙：政策推出后投诉数量上升，所以政策存在需要检讨之处。

**分析**：乙更保真。甲加进了「损害市民利益」这个因果断言，原话没有；投诉变多也可能因为宣传到位。「有问题」在原话里是模糊的，乙保留了这份模糊，甲把它精确化，属于**偷偷加强**。

## 反例训练

> 他说：「你们这个系统老是崩，我同事都遇到过。」
> 有人重塑成：「这个系统每周至少崩一次，所以完全不可用。」

**问题所在**：「老是崩」不等于「每周至少崩一次」，「同事都遇到过」也不等于「所有用户都遇到」，更推不出「完全不可用」。这是把模糊量词精确化、把局部推成整体，属于**偷偷加强**。保真的说法是：「系统多次崩溃，且不止一人遇到，稳定性有问题。」

**形式化说明**：设原话为 $S$，重塑结果为 $S'$。保真要求 $S \\equiv S'$，而上述重塑只做到 $S' \\to S$（重塑版更强，能推出原话），反方向不成立，因此不等价。

## 现实应用

- **辩论赛**：把对手的话重塑后念给他听，问「这是你的意思吗」，多数误解在这一步澄清。
- **写文献综述**：引用前先重塑，避免把「作者认为可能」写成「作者证明」。
- **会议记录**：整理成「前提—结论」清单，比逐字记录更容易看清分歧。

## 本节总结

**核心概念**：重塑、标准形式、冗余、隐含前提、善意原则、保真。

**关键规则**

1. 只改表达，不改主张。
2. 冗余可删，限定词不可删。
3. 隐含前提按最小补充，补到「刚好够用」为止。
4. 重塑后的论证必须与原话等价，能互相推出。

**常见错误**：把模糊的量词精确化；把自己的理由塞给对方；删掉「通常」「可能」导致论证变强。

**需要掌握的能力**：把一段口语化的议论，改写成五行以内的标准形式，并且让原作者点头认可。
`,quiz:[{id:"s1-07-q1",type:"single",stem:"论证重塑的首要要求是：",options:["让论证变得更强、更容易被接受","保留原论证的意思，只改表达形式","删去所有修辞，只留下事实","把结论改写成更精确的命题"],answer:"B",explanation:"重塑的底线是保真：整理前后必须是同一个论证。A 是加强，C 会删掉起限定作用的词，D 常常把模糊主张精确化，三者都改变了原意。",skill:"重塑的保真要求"},{id:"s1-07-q2",type:"judge",stem:"重塑论证时，为了让推理成立，可以补上任何使结论成立的隐含前提。",answer:!1,explanation:"补隐含前提必须遵循最小补充，只补原作者显然默认的那一句。补上过强的前提，论证就不再是他的了，你反驳的只是自己造的版本。",skill:"隐含前提的补充"},{id:"s1-07-q3",type:"single",stem:"原文：「他在这行干了二十年，这活儿交给他准没错。」下列重塑中最保真的是：",options:["他经验丰富，所以这活儿一定能做成","他干了二十年，所以他的判断在本案中可靠，所以可以交给他","他干了二十年，经验丰富，所以交给他比较稳妥","他是行业专家，所以没有人比他更合适"],answer:"C",explanation:"C 保留了原话的模糊与强度，「比较稳妥」对应「准没错」的口语夸张。A、D 把结论加强为绝对判断，B 多补了一条明确的中间前提，都超出了原意。",skill:"重塑中的强度保持"},{id:"s1-07-q4",type:"multi",stem:"下列哪些内容在重塑时应当保留？（多选）",options:["「大多数情况下」这类限定词","「可想而知」「说白了」这类语气词","结论的具体范围与条件","同一意思的第三次重复表述"],answer:["A","C"],explanation:"限定词和结论的范围条件决定了论证的强弱，删掉就改变了原意。B、D 属于冗余，删去不影响推理结构，反而让骨架更清楚。",skill:"冗余与限定的区分"},{id:"s1-07-q5",type:"short",stem:"把「这书评分高、卖得好，肯定值得读」重塑为标准形式，并指出它需要补的隐含前提。",keywords:[["评分","销量","前提"],["值得读","结论"],["大众品味","评分可靠","隐含前提"]],answer:"前提：这本书评分高；这本书销量好。结论：这本书值得读。隐含前提：评分与销量能可靠反映一本书的阅读价值，且读者的品味与判断标准与评价者相近。这一条恰恰最需要检验。",explanation:"评分要点是前提两条、结论一条、隐含前提一条。隐含前提要写具体，只说「缺一个前提」不给分，因为它正是整段论证最脆弱的地方。",skill:"标准形式与隐含前提"}]},{id:"s1-08",no:8,code:"2.2",title:"论证的图示",stage:1,chapter:"第2章 论证的分析",minutes:14,lead:"「他工作努力，能力又强，还是本地人，所以这岗位非他莫属。」三个理由是在同一层托着结论，还是其中两个先合成一个理由？画出来，答案立刻不一样。",objectives:["能区分独立前提、依赖前提与联合前提","能用箭头画出简单论证的结构图","能根据结构图定位论证最薄弱的一环"],concepts:["独立前提","依赖前提","联合前提","支持箭头","论证结构图","薄弱环节"],body:`
## 核心定义

**专业定义**：论证图示是用带箭头的图表示命题之间的支持关系，箭头由前提指向被支持的命题。按前提之间的协作方式，分为独立前提、依赖前提与联合前提。

**通俗解释**：

- **独立前提**：几条理由各说各的。一条倒了，别的还站着。
- **依赖前提**：一条为另一条作证，串成链子，断一环就断整条。
- **联合前提**：缺一条就全垮，像桌子的四条腿，抽掉一条桌面就塌。

**关键术语**

- **支持箭头**：从前提指向结论（或指向中间结论）的连线。
- **中间结论**：既被支持、又去支持别人的命题。

**容易混淆的概念**

> 联合前提最容易被看成独立前提。单看每一条都很弱，合起来才有力量。判断方法：给每条前面加一句「假如只有这一条」，如果结论立刻失去支持，它多半是联合前提的一部分。

> 「理由多」不等于「理由强」。三条联合前提只算一条证据；两条独立前提只要各自成立，反而更稳。

## 理论讲解

### 第一步：给每个命题编号

把前提与结论依次编号 $P_1, P_2, \\dots, C$，编号是为了画箭头时不被文字绕晕。

### 第二步：先连直接支持结论的

问：哪几条是**直接**让结论可信的？先把这些箭头画到 $C$ 上。不要急着考虑它们之间有没有关系。

### 第三步：再连支持中间命题的

有些前提并不直接支持 $C$，而是支持另一条前提。把它画成指向那条前提的箭头。这一步常能发现「二级证据」——用来证明理由的理由。

### 第四步：判定三类型

- 各条都能**单独**支持结论：独立。
- 一条支持另一条，成串：依赖。
- 必须**合起来**才支持：联合。

### 第五步：读图找弱点

结构图画完，弱点往往自己跳出来：联合前提里最不可靠的那一条、依赖链上最松的一环、以及所有箭头都必须经过的那个中间结论。**攻击一个必经节点，比逐条反驳十条理由有效得多。**

## 例题与分析

**例 1（易）** 画出下面论证的结构。

> 这个方案成本低。它实施起来也快。所以值得采用。

**分析**：两条前提各自独立地支持结论：

$$P_1 \\to C,\\quad P_2 \\to C$$

即使成本优势被推翻，「实施快」仍然成立。这种结构比较抗打，但每一条的支持力通常较弱。

**例 2（中）** 画出下面论证的结构。

> 这支球队最近十场全胜，而且对手都是联赛前四的强队，所以他们状态确实好。

**分析**：「对手强」并不独立支持「状态好」，它的作用是让「十场全胜」这条证据变得更有分量。所以是联合前提：

$$(P_1 \\land P_2) \\to C$$

如果对手全是弱队，十连胜的说服力会大幅下降。这就是联合关系的标志：抽掉任何一条，另一条的支持力就缩水。

**例 3（难）** 画出下面这段的结构。

> 小李熟悉本地情况，因为他在这儿长大。这次调研要派一个熟悉本地情况的人去，所以应该派小李。

**分析**：这是依赖结构。「他在这儿长大」支持「熟悉本地情况」，而「熟悉本地情况」与「调研需要本地人」联合支持结论：

$$P_1 \\to P_2,\\quad (P_2 \\land P_3) \\to C$$

注意 $P_2$ 是中间结论，它同时被支持和支持别人。整条链的弱点在 $P_3$——「调研需要本地人」这条往往没人论证，却承担了关键重量。

## 反例训练

> 这个项目肯定能成。团队有经验，预算充足，领导也支持。

**问题所在**：看起来是三条独立理由，其实「有经验」「有预算」「有支持」都只是必要条件，单看任一条都推不出「肯定能成」，三条合起来也只够说「具备基本条件」。把联合前提误画成三条独立箭头，会严重高估论证的稳固度。

**形式化说明**：设三条前提分别为 $P_1, P_2, P_3$。若没有任何一条单独蕴含 $C$，而 $(P_1 \\land P_2 \\land P_3)$ 才勉强支持 $C$，正确画法是

$$(P_1 \\land P_2 \\land P_3) \\to C$$

而不是 $P_1 \\to C$、$P_2 \\to C$、$P_3 \\to C$ 三条平行箭头。前者是一张缺腿的桌子，后者看着像三脚架。

## 现实应用

- **写论文**：把章节论证画成图，能看出哪一节是孤立的、哪一节其实是另一节的下游。
- **项目评审**：评审意见常各说各的。画成图后能看出它们攻击的是同一节点还是不同环节，从而决定先补哪块。
- **准备辩论**：把正反两方的图并排比较，谁更依赖某个未论证的前提，一目了然。

## 本节总结

**核心概念**：独立前提、依赖前提、联合前提、支持箭头、中间结论、薄弱环节。

**关键规则**

1. 先编号，再画箭头，最后判类型。
2. 联合前提必须整体画，不能拆成平行箭头。
3. 中间结论既是靶子也是支点，要单独标出。
4. 找弱点优先找必经节点，而不是理由最多的那一堆。

**常见错误**：把联合前提当独立前提；漏掉中间结论，以为所有箭头都指向最终结论；用理由条数代替结构分析。

**需要掌握的能力**：读完一段话，能在纸上画出三到五个节点的结构图，并指着某一处说「这里最脆」。
`,quiz:[{id:"s1-08-q1",type:"single",stem:"如果几条前提必须合起来才能支持结论，单独任何一条都不够，它们属于：",options:["独立前提","依赖前提","联合前提","隐含前提"],answer:"C",explanation:"联合前提的特点是「合则有力，分则无力」，画图时要整体画成一个合取再指向结论。独立前提各自单独支持结论，依赖前提是一条支持另一条，隐含前提是没说出来的前提。",skill:"联合前提"},{id:"s1-08-q2",type:"judge",stem:"论证中前提的数量越多，论证就越稳固。",answer:!1,explanation:"稳固程度取决于结构，不取决于条数。三条联合前提其实只算一条证据，抽掉任何一条都会整体垮掉；而两条各自成立的独立前提，抗打击能力反而更强。",skill:"结构与数量"},{id:"s1-08-q3",type:"single",stem:"「他在这座城市长大，所以熟悉本地情况；调研需要熟悉本地情况的人，所以该派他去。」这个论证的结构是：",options:["三条独立前提共同支持结论","一条前提支持中间结论，中间结论再与另一条前提联合支持结论","两条前提联合直接支持结论，没有中间层","循环支持"],answer:"B",explanation:"「在这座城市长大」支持「熟悉本地情况」，后者是中间结论，又与「调研需要本地人」联合支持最终结论。识别中间结论是读图的关键，漏掉它会把结构看平。",skill:"依赖结构与中间结论"},{id:"s1-08-q4",type:"multi",stem:"画论证结构图的主要用处包括：（多选）",options:["看清哪些前提是联合起作用，哪些各自独立","找出所有箭头都必须经过的必经节点","判断结论在事实上是否为真","发现被省略的中间结论"],answer:["A","B","D"],explanation:"图示处理的是结构关系，能揭示联合、依赖与中间层。C 属于事实核查，图示对此无能为力——结构再清楚，也不能告诉你前提是否成立。",skill:"图示的功能"},{id:"s1-08-q5",type:"short",stem:"怎样判断几条前提是独立关系还是联合关系？请给出一个可操作的检验方法。",keywords:[["单独","只有这一条"],["失去支持","支持力下降"],["合起来","联合"]],answer:"给每条前提加一句「假如只有这一条」，看结论还能不能得到支持。若每条单独都能支持结论，是独立关系；若单独任一条都撑不住，合起来才有力量，是联合关系；若抽掉一条后另一条的支持力明显缩水，也说明它们相互依赖。",explanation:"核心是「逐条抽离」这个操作。只说「看它们有没有关系」太空泛，必须给出可重复执行的检验动作，才能算掌握。",skill:"独立与联合的判定"}]},{id:"s1-09",no:9,code:"2.3–2.4",title:"复杂论证与推理的陷阱",stage:1,chapter:"第2章 论证的分析",minutes:17,lead:"一篇社论读下来，你觉得「说得挺有道理」，可让你复述它的推理，却卡在第二步。这种「被说服却复述不出」的经验，通常暴露了什么？",objectives:["能拆分含多个论证的语段，并标出中间结论与最终结论","能识别结论嵌套与论证链的结构","能认出把说明当论证、遗漏隐含前提、词义漂移、循环支持四类陷阱"],concepts:["复合论证","中间结论","论证链","词义漂移","循环支持","隐含前提"],body:`
## 核心定义

**专业定义**：复杂语段（complex passage）指包含两个以上论证、且其中一个论证的结论充当另一个论证前提的语段，结构是链或树。

**通俗解释**：一段话里还套着一段话，一个结论还能当另一个结论的理由。像搭脚手架，横杆既是上一层的支撑，又要靠下层托着。

**关键术语**

- **中间结论**：由前面的前提推出，又被用来支持后面结论的命题。
- **最终结论**：整段话真正想让你接受的那一句。
- **论证链**：$P \\to C_1 \\to C_2 \\to C$ 式的串联结构。
- **循环支持**：两个命题互为理由，谁也没有得到独立支持。

**容易混淆的概念**

> 中间结论 ≠ 隐含前提。中间结论是作者**说出来了**的，只是位置在中间；隐含前提是作者**没说**、但必须默认的。把说出来的当没说会读乱结构，把没说的当说了会替作者加料。

> 论证长 ≠ 论证强。链条越长，断的概率越大。

## 理论讲解

### 第一步：切段，一段一个论证

先按意思把整段切成小块，每块内部只有一个推出关系。切分标志是话题转换，以及「因此」「更重要的是」这类推进词。

### 第二步：给每个结论编号，认出最终结论

$C_1, C_2, C_3$ 依次编号，再问：哪一句是整段真正要立的？其余都只是台阶。

### 第三步：把中间结论接到下一环

$C_1$ 若同时是下一个论证的前提，就画一条从 $C_1$ 到 $C_2$ 的箭头。做完这一步，结构图就有骨架了。

### 第四步：逐环排查四类陷阱

1. **把说明当论证**：作者在解释已知事实，读者却以为他在证明主张。
2. **遗漏隐含前提**：链条少了一环，作者跳过去了。
3. **词义漂移**：同一个词在前后两句里含义悄悄变了。
4. **循环支持**：$A$ 因为 $B$，$B$ 又因为 $A$，绕回原点。

排完再找最脆的一环：把每一环单独问「这一句凭什么」，最先答不上来的那个就是命门。

## 例题与分析

**例 1（易）** 拆解下面的论证链。

> 这个片区的房租三年涨了四成，所以年轻人正在搬走。年轻人搬走会让商铺客流下降，所以这里的商铺租金也会跌。

**分析**：这是标准的两环链：

$$P_1 \\to C_1,\\quad (C_1 \\land P_2) \\to C_2$$

$C_1$ 既是第一环的结论，又是第二环的前提。两环要分别检查：房租上涨是否真的导致搬走？搬走是否真的导致客流下降？

**例 2（中）** 找出下面这段话的最终结论。

> 有人说线上课效果不如线下。可我们学校去年的线上课，期末平均分比前年还高两分。可见效果好坏不在形式，而在教学设计。

**分析**：中间结论是「线上课效果不比线下差」，最终结论是「效果好坏不在形式，而在教学设计」。但最后一步跨得很大：平均分高两分只说明这门课没变差，推不出「形式不重要」这样的一般论断，是从个案跳到通则。

**例 3（难）** 下面这段话有几处问题？

> 这家公司的管理是高效的，因为它的人员流动率低。人员流动率低说明员工满意，员工满意又说明管理得当。所以，管理高效的公司都应该追求低流动率。

**分析**：三处问题叠在一起。其一，**循环支持**：「管理高效」与「流动率低」反复互证，没有独立支点。其二，**词义漂移**：开头指运转效率，结尾变成「让员工满意」。其三，**从个案跳到规范**：即便这家公司管理得好，也推不出所有高效公司都该追求低流动率。

## 反例训练

> 这本书值得一读，因为它内容精彩；它内容精彩，是因为它值得一读。

**问题所在**：这是**循环支持**。两个命题互为理由，谁也没有被独立支持，听上去像两条理由，实际在原地打转。要打破循环，必须引入外部支点。

**形式化说明**：

$$A \\to B,\\quad B \\to A \\quad \\text{（无外部支点）}$$

只要 $A$ 与 $B$ 同真同假，两个条件句都成立，因此无法区分「都真」与「都假」。要确定 $A$，需要一条循环之外的命题 $E$，使 $E \\to A$。

## 现实应用

- **读社论**：先画链条，再看每一环的支撑。多数社论只有第一环是实的，后面几环靠语气带过。
- **听演讲**：掌声密集处往往是修辞高潮，不是论证最硬的地方。
- **面试追问**：候选人说「我带过团队，所以能管好这个部门」，中间缺的正是「带团队的经验可迁移到本部门」。

## 本节总结

**核心概念**：复合论证、中间结论、最终结论、论证链、词义漂移、循环支持。

**关键规则**

1. 一段话可以含多个论证，先切段再画链。
2. 中间结论要单独标出，它既是结论也是前提。
3. 链条越长越脆，逐环检查比整体感觉可靠。
4. 四类陷阱按顺序排查：说明/论证、隐含前提、词义、循环。

**常见错误**：把整段当成一个论证；把中间结论当成最终结论；被关键词的重复骗过，没注意含义已变。

**需要掌握的能力**：读完一篇千字议论，能用三五行的链条复述它的推理，并指出哪一环最站不住。
`,quiz:[{id:"s1-09-q1",type:"single",stem:"在复杂语段中，中间结论指的是：",options:["作者没有明说、需要读者补出的前提","由前面前提推出、又被用来支持后续结论的命题","整段话最终想确立的那一句","与最终结论相矛盾的那一句"],answer:"B",explanation:"中间结论身兼两职：它是上一环的结论，又是下一环的前提。A 是隐含前提，C 是最终结论。把三者分清，是拆解复杂语段的第一步。",skill:"中间结论"},{id:"s1-09-q2",type:"judge",stem:"「这本书值得读，因为它内容精彩；它内容精彩，因为值得读。」这个论证虽然绕，但仍然提供了有效支持。",answer:!1,explanation:"这是循环支持，两个命题互为理由，没有引入任何外部支点。结构上 $A \\to B$ 且 $B \\to A$，无法确定任一为真。听上去像两条理由，实际在原地打转。",skill:"循环支持"},{id:"s1-09-q3",type:"single",stem:"「这家店管理得好，因为员工流动率低；流动率低说明员工满意，员工满意说明管理好。」这段话最主要的问题是：",options:["前提在事实上可能为假","存在循环支持，且「管理得好」的含义前后不一致","结论与前提无关","把论证写得太长"],answer:"B",explanation:"「管理好」与「流动率低」互相作证，形成闭环；同时开头的「管理好」指运转效率，结尾偏向员工满意，属于词义漂移。A 是另一层问题，但不是这段话最核心的结构缺陷。",skill:"词义漂移与循环"},{id:"s1-09-q4",type:"multi",stem:"下列哪些属于本课列出的常见推理陷阱？（多选）",options:["把对一个已知事实的解释当成论证","论证中遗漏了必要的隐含前提","关键词在前后文中含义悄悄改变","用具体数据支持一个统计结论"],answer:["A","B","C"],explanation:"A 是说明与论证的混淆，B 是链条断裂，C 是词义漂移，三者都会让论证看似成立实则不成立。D 是正当的支持方式，只要数据真实且相关，就不算陷阱。",skill:"常见推理陷阱"},{id:"s1-09-q5",type:"short",stem:"拿到一篇含多个论证的长文，你会按什么顺序拆解？请写出三个以上的步骤。",keywords:[["切分","分段","一个论证"],["中间结论","编号"],["最终结论"],["隐含前提","循环","词义","检查"]],answer:"先按推出关系把长文切成若干小段，每段一个论证；再给每个结论编号，区分中间结论与最终结论；然后把中间结论接到下一环，画出链或树；最后逐环检查是否遗漏隐含前提、是否词义漂移、是否循环支持，并找出最脆弱的一环。",explanation:"评分看步骤是否成体系：切分、编号、连接、检查，四步缺一不可。只答「找结论和理由」是单论证的做法，应付不了复杂语段。",skill:"复杂语段的拆解"}]}],H3=[{id:"s2-01",no:10,code:"3.1",title:"语言的功能",stage:2,chapter:"第3章 语言与定义",minutes:12,lead:"医生说「你需要休息」，朋友说「加油」，士兵答「到」。三句都在用语言做事，做的事却不一样。不分清语言在干什么，会不会把一句命令当成论断来反驳？",objectives:["区分信息性、表达性、指令性三种用法，并各举一例","判断同一句话在不同语境中承担的真实功能","说明为什么逻辑学把注意力放在信息性用法上"],concepts:["语言功能","信息性用法","表达性用法","指令性用法","仪式性用法"],body:`
## 核心定义

**专业定义**：语言的功能，指一句话在实际交际中承担的作用。通行分法为三类：**信息性用法**（informative）陈述世界的样子，有真假可言；**表达性用法**（expressive）倾泻或唤起情感，本身无真假；**指令性用法**（directive）试图让人做或不做某事，只论恰当与否。此外还有**仪式性用法**（ceremonial），如宣誓、致谢、命名，成败取决于程序是否合规。

**通俗解释**：同一串词，可以当报告用，可以当叹气用，也可以当命令用。逻辑学只对第一种感兴趣，因为只有它谈得上真假，而真假是推理的原料。

**关键术语**

- **信息性用法**：说话人在报告世界，例「水在标准气压下 100 摄氏度沸腾」。
- **表达性用法**：说话人在倾倒情绪，例「真见鬼」。
- **指令性用法**：说话人想改变世界，例「把窗户关上」。
- **仪式性用法**：说话人完成一个制度动作，例「我宣布会议开始」。

**容易混淆的概念**

> 表达性 ≠ 无意义。一声叹息传达了态度，这态度可能很要紧，只是它不构成可真可假的命题。

> 指令性 ≠ 判断的否定形式。有人以为「你应该戒烟」等于「你抽烟是错的」。前者是劝告，后者才是判断；把劝告翻译成判断，会凭空多出一个前提。

## 理论讲解

### 第一步：问这句话在报告还是在做事

「外面在下雨」，可以是气象员在报告天气，也可以是有人想让你带伞。前一种情况下它可能为假；后一种情况下它的重点不在真假，而在它想推动什么。判断功能的第一问是：说话人希望这句话在听者那儿产生什么效果？

### 第二步：用真假当试纸

能问「这是真的吗」并且问得有意义的，多半是信息性用法。「请关门」问真假就很别扭，问「合不合理」才顺口。这张试纸不完美，但过滤效率很高。

### 第三步：接受功能叠加

「这里太吵了」既报告一个事实，又隐含一个请求。功能不是互斥的标签，而是一束可以同时亮起的灯。硬要给它贴单一标签，反而会读错话。

### 第四步：把功能错配的地方标出来

论证要求前提是命题。若一个前提实际是指令或抒情，它就不能直接当理由用。写作时把「我认为这不对」换成「这个做法导致了什么后果」，就是把表达性改写成信息性。

## 例题与分析

**例 1（易）** 「请把这份材料复印两份。」

**分析**：典型指令性用法。它没有真假，只有是否被执行的分别。若有人回一句「假的」，那是答错了问题。

**例 2（中）** 「这汤真难喝。」

**分析**：主语看起来是汤，实际说的是说话者的感受。它接近表达性用法，同时夹带一条信息（此人不喜欢这汤）。若把它当作对汤的客观鉴定，就会把口味之争升级成事实之争。**这正是许多饭桌争论的起点。**

**例 3（难）** 「公司章程规定，员工须在九点前打卡，所以迟到者应当受罚。」

**分析**：第一句表面在陈述规则，属于信息性用法；但「须」字里藏着指令。整段推理真正缺的一环是「违反规定应当受罚」这条规范性前提，而它从未被说出。把规范句当纯描述句用，是论证里最常见的偷渡。

## 反例训练

> 他说「你应该多读书」，这句话是假的，因为我认识一个不读书也很成功的人。

**问题所在**：把劝告当成命题去判真假。「应该」句没有真值，只有理由是否充分。退一步说，即便把它读成「读书有利于成功」，一个反例也不足以推翻「多数情况下有益」这类概括。**用真假去回应劝告，是功能错配。**

## 现实应用

- **读广告**：「限时特惠」在报告事实，也在下指令，还在制造情绪。三者混在一句里，删掉情绪词再看还剩什么。
- **开会记录**：把「我们必须重视这个问题」改写成「问题造成了三重后果」，纪要才具备可核查性。
- **合同审阅**：「及时通知」是指令，但它含混，日后必起争议；能改成「三日内书面通知」就改成这样。
- **自我复述**：争论时先问对方「你这句话是在陈述，还是在要求」，一半的火气会降下来。

## 本节总结

**核心概念**：信息性用法、表达性用法、指令性用法、仪式性用法、功能叠加。

**关键规则**

1. 有真假的句子才可能做前提，「应该」句与感叹句不能直接当理由。
2. 一句话可以同时承担多种功能，判断功能要看语境而非词形。
3. 逻辑学的加工对象是信息性用法，其余用法需先改写再入论证。

**常见错误**：拿真假去反驳劝告；把感叹当成事实断言；把规范句当成描述句，从而漏掉一个规范前提。

**需要掌握的能力**：听到一句话，先分辨它在报告、在抒情还是在推动，再决定用什么标准评价它。
`,quiz:[{id:"s2-01-q1",type:"single",stem:"下面哪一句最典型地属于语言的指令性用法？",options:["这本书一共三百页","请把这份文件复印两份","太棒了","我宣布会议现在开始"],answer:"B",explanation:"B 试图让对方产生一个行为，是标准指令。A 在报告事实，有真假；C 在表达情绪；D 是通过说话完成制度动作的仪式性用法，并非要求谁去做事。",skill:"语言的功能"},{id:"s2-01-q2",type:"judge",stem:"同一句话在一次交谈中只能承担一种语言功能。",answer:!1,explanation:"功能常叠加。「这里太吵了」既报告事实，又隐含请求。若按单一标签切分，会漏掉说话人真正的意图，也会误判哪些内容可以作为论证的前提。",skill:"功能叠加"},{id:"s2-01-q3",type:"single",stem:"「你最好别再迟到。」若被当成命题去判断真假，毛病出在哪？",options:["它事实上是假的，因为有人从不迟到","它是劝告或警告，本身没有真值","它是仪式性用法，不涉及行为","它是表达性用法，只在发泄情绪"],answer:"B",explanation:"这句的核心是影响对方行为，属于指令性用法。用真假去衡量它属于评价标准错配；A 把无真值的句子强行判假，C、D 也误判了它的功能类型。",skill:"指令性用法"},{id:"s2-01-q4",type:"multi",stem:"下列哪些句子具有真假可言，因而可以直接充当论证的前提？（多选）",options:["这座桥全长一千二百米","快点走","所有哺乳动物都用肺呼吸","啊，太美了"],answer:["A","C"],explanation:"A、C 是陈述句，可判真假。B 是指令，D 是感叹，二者都没有真值，若硬塞进论证，前提这一环就失效了，推理再漂亮也撑不住结论。",skill:"信息性用法"},{id:"s2-01-q5",type:"short",stem:"为什么逻辑学主要处理信息性用法？请结合真值与推理的关系，用两三句话说明。",keywords:[["真假","真值","有真假"],["前提","结论","推理"],["有效","必然","支撑"]],answer:"推理的有效性说的是前提为真时结论能否为真，这套评价只对能判真假的句子成立。指令、感叹、仪式用语没有真值，无法进入前提与结论的位置。所以逻辑学必须先做功能识别，把非信息性用法改写成命题，才能开始评价论证。",explanation:"要点有三：真值是推理评价的入场券；非信息性用法缺这张券；因此功能识别是逻辑分析的前置工序，改写则是把话送进入口的手段。",skill:"信息性用法与推理"}]},{id:"s2-02",no:11,code:"3.2",title:"情感语言、中性语言与论争",stage:2,chapter:"第3章 语言与定义",minutes:13,lead:"同一件事，说成「裁员」和说成「人员优化」，听众的反应差得很远。词自带的温度从哪来？带着温度的词，还能用来做冷静的推理吗？",objectives:["识别一段话中的情感负载词，并指出它偏向哪一方","把带褒贬的表述改写为中性表述，同时不丢失事实","说明情感语言如何把事实分歧伪装成价值分歧"],concepts:["情感语言","中性语言","情感负载","褒贬色彩","论争"],body:`
## 核心定义

**专业定义**：**情感语言**（emotive language）是除字面意义之外还携带褒贬态度、能唤起听者情绪的语词；**中性语言**（neutral language）则尽量只保留描述成分，把评价剥离出去。同一事实往往可以用褒义、贬义、中性三套词去说，这就是语言的**情感负载**。

**通俗解释**：词像杯子，有的杯子是干净的，有的杯子预先装了一层糖或一层苦。倒进去的水一样，喝起来不一样。中性语言不是把水倒掉，而是换一个没预装味道的杯子。

**关键术语**

- **情感负载**：词在指称对象之外附带的评价色彩。
- **中性改写**：用描述性表述替换评价性表述，事实不变。
- **论争**：双方以为在争事实，实际在争用词所预设的态度。

**容易混淆的概念**

> 中性 ≠ 冷漠，也 ≠ 没有立场。中性语言只是把「发生了什么」与「这好不好」分开写。你仍然可以反对，只是反对的理由要另外给。

> 情感语言 ≠ 错误语言。情感本身是信息，它告诉你说话者的态度。问题出在它冒充理由，而不在它存在。

## 理论讲解

### 第一步：圈出温度词

一段话里，形容词和名词最容易藏态度。「固执」与「坚定」指同一行为倾向，「纠缠」与「追问」指同一动作，差别全在评价。先圈，再判断这段话的倾向。

### 第二步：做三列对照

把句子拆成三列：中性描述、褒义版本、贬义版本。例如中性写「他在会上反复提出同一问题」，褒义写「他坚持追问」，贬义写「他死缠烂打」。三列都成立，说明你抓住了事实核。

### 第三步：用中性版本重跑论证

把情感词换掉，再读一遍论证。若结论突然站不住，那原来的说服力来自情绪而不是理由。**这一步是本节的技术核心。**

### 第四步：把评价还原成理由

「这是赤裸裸的掠夺」若要有说服力，必须补上「它未经同意转移了他人财产」这类可检验的判断。评价句只是结论，不是理由。

## 例题与分析

**例 1（易）** 把「那个记者像鬣狗一样围堵当事人」改为中性表述。

**分析**：可写为「那名记者在当事人住所外持续等候并要求采访」。事实保留，动物比喻与贬义去掉。改完再问：这种行为是否越界？这才是真正要讨论的问题。

**例 2（中）** 甲说「这家企业暴力裁员」，乙说「这家企业依法解除劳动合同」。两人吵得不可开交，他们真的在吵同一件事吗？

**分析**：两人的描述可能指向同一批事实，分歧在于用词预设了合法性判断。「暴力」预设违法，「依法」预设合规。先把事实摊开：多少人、什么理由、有没有补偿、程序如何。事实清楚后，法律判断才有落点，否则只是两个标签对撞。

**例 3（难）** 某评论：「这项规定是懒政。懒政就是不作为，所以这项规定就是不作为。」

**分析**：这是**劝导性定义**的典型手法：把结论偷偷塞进定义。「懒政」本就是个评价词，用它给对象归类，等于先判了罪。推理形式没问题，问题在前提把评价当成了分类标准。识别方法是问：这个词能不能换成一个中性的分类词？

## 反例训练

> 他是保守派，保守派都反对变革，所以他一定反对这项改革。

**问题所在**：「保守派」既是分类词，也是标签。即便按某种分类他属于该群体，也不等于他在每一个具体议题上都持反对态度。这里**用一个带态度的群体标签替换了对具体立场的事实描述**，结论看似被推出，其实是被词义拽出来的。

## 现实应用

- **读报道**：把标题里的形容词全部划掉，看剩下的主干还能不能成立。若不能，标题在卖情绪。
- **写反馈**：把「这个方案很糟糕」改成「这个方案在三处缺少数据支持」，对方才知道怎么改。
- **谈判**：双方各用中性语言复述对方诉求一遍，常会发现争的是措辞而非利益。
- **自查**：写完一段批评，数一数有几个评价词。超过三个，通常说明理由不够。

## 本节总结

**核心概念**：情感语言、中性语言、情感负载、褒贬色彩、劝导性定义。

**关键规则**

1. 每个评价词背后都该有一条可检验的描述句。
2. 中性改写要保住事实，只剥掉态度，不能连事实一起删。
3. 换词之后论证仍成立，才说明理由真的在起作用。

**常见错误**：把「我讨厌这个说法」当成「这个说法是假的」；用定义把结论预先塞进去；以为中性化就是放弃立场。

**需要掌握的能力**：在一段激烈的话里，迅速分出哪部分是事实，哪部分是态度，并把二者分别处理。
`,quiz:[{id:"s2-02-q1",type:"single",stem:"「他一再纠缠，浪费了大家的时间。」改成中性表述，最合适的是：",options:["他一再坚持，体现了可贵的执着","他多次就同一问题要求发言","他无理取闹，扰乱会议","他的行为令人厌烦"],answer:"B",explanation:"B 只保留可核查的行为描述，去掉「纠缠」的贬义。A 换成了褒义，仍带态度；C 贬义更重；D 直接陈述听者情绪，都不是中性改写。",skill:"中性改写"},{id:"s2-02-q2",type:"judge",stem:"中性语言意味着说话人不能对任何事情持有立场。",answer:!1,explanation:"中性化处理的是表述方式，不是立场本身。你可以明确反对某事，同时用可核查的描述给出理由。把二者混为一谈，会让人误以为讲理就必须没有态度。",skill:"中性语言"},{id:"s2-02-q3",type:"single",stem:"「所谓有魄力，就是不听取别人意见就拍板。」这句话的主要问题是：",options:["推理形式无效，属于否定前件","用定义把贬义评价包装成中性分类","前提事实不真实，缺乏数据","结论超出了前提的范围"],answer:"B",explanation:"「有魄力」本是褒词，定义却塞进了「不听意见」的贬义内容，属于劝导性定义。听众接受这个定义，就等于接受了评价，推理尚未开始结论已定。",skill:"劝导性定义"},{id:"s2-02-q4",type:"multi",stem:"下列哪些做法有助于把情绪之争转成事实之争？（多选）",options:["把对方的评价词换成描述句再复述一遍","追问对方所用标签的具体所指","用更强烈的词压过对方的措辞","先确认双方对事实的认定是否一致"],answer:["A","B","D"],explanation:"A、B、D 都在把模糊的态度还原为可核查的内容。C 只会加码情绪，让双方在措辞上继续对撞，离事实越来越远。",skill:"情感语言的处理"},{id:"s2-02-q5",type:"short",stem:"简述情感语言为什么容易制造「假论争」，并举一个改写思路。",keywords:[["态度","评价","褒贬"],["事实","描述","同一"],["改写","中性","还原"]],answer:"情感词在描述事实的同时预设了评价，双方各用一套词，就会以为在争事实，实际在争态度。处理办法是做中性改写：把评价句换成可核查的描述句，再看分歧究竟落在哪个具体事实上。若改写后分歧消失，原来的争论就是措辞之争。",explanation:"要点是：情感负载使事实与评价捆绑；捆绑导致分歧定位错误；中性改写把两者拆开，使争论回到可检验的层面。",skill:"情感语言与论争"}]},{id:"s2-03",no:12,code:"3.3",title:"含混、歧义与论争",stage:2,chapter:"第3章 语言与定义",minutes:14,lead:"一个从不剪头发的人算不算秃？界线究竟在哪？还有那句「他连警察都不怕」——是说他胆子大，还是说他心里有鬼？",objectives:["分辨含混与歧义这两种不同的意义问题","指出歧义句属于词义、语法还是指代层面的问题","用加限定、补省略、明指代的方式消除歧义"],concepts:["含混","歧义","词义歧义","语法歧义","指代不明"],body:`
## 核心定义

**专业定义**：**含混**（vagueness）指一个词的适用边界不清晰，存在大量既不典型属于、也不典型不属于的中间情形，如「秃」「高」「红」。**歧义**（ambiguity）指一个词或一句话有不止一种确定的意义，听者必须在若干读法中选一个，如「轻」可指重量小、程度浅、不庄重。

**通俗解释**：含混是「边界糊」，歧义是「岔路口」。糊的地方你找不到那条线；岔路口线很清楚，只是有两条。

**关键术语**

- **含混**：边界区域宽，判定的分歧来自程度而非意义。
- **词义歧义**：同一个词有多个义项，如「银行」指河岸或金融机构。
- **语法歧义**：句子结构可以有两种切分，如「咬死了猎人的狗」。
- **指代不明**：代词或省略成分的所指不确定。

**容易混淆的概念**

> 含混 ≠ 歧义。含混的句子只有一种读法，只是这条读法在边缘地带说不清；歧义的句子有几种读法，每种读法本身可能都很清楚。

> 有歧义 ≠ 使用错误。日常交流靠语境自动消歧，很少出问题；一旦进入论证、合同、考题，语境变弱，歧义立刻变成漏洞。

## 理论讲解

### 第一步：先分清是糊还是岔

拿一个中间案例去试。「这辆车是红的」——暗红算不算？这是糊。「他去银行了」——河岸还是机构？这是岔。糊要靠划线解决，岔要靠选路解决，两者药方不同。

### 第二步：按三个层面找歧义

词义层面查多义词；语法层面看修饰关系与并列范围；指代层面找代词、省略主语、隐性指称。三处都过一遍，多数歧义现形。

### 第三步：用括号标结构

「三个学校的学生」可以读作「三所学校的学生」，也可以读作「三个（学校的）学生」。加括号、换语序、补量词，结构立刻锁死。这一步是把自然语言翻译成逻辑式的前置训练。

### 第四步：给含混词划线

划线要给出可操作的标准。「未成年人」按年龄划在十八岁，「高温」按温度划在三十五摄氏度。划线未必完美，但必须公开、统一、可复核。

## 例题与分析

**例 1（易）** 「他是中国人，所以他很会做中餐。」问题在哪？

**分析**：把国籍当成一项技能的保证。这不是歧义，是**概念偷换**：把「中国人」这个身份概念悄悄换成「熟悉中餐烹饪的人」。两个概念外延大不相同。

**例 2（中）** 「张三告诉李四，他的方案没通过。」这句话的问题属于哪一类？

**分析**：指代不明。「他」可以指张三，也可以指李四，甚至第三人。补成「张三的方案」或「李四的方案」，句子才可评价。在转述会议内容时，这类句子造成的误会最多。

**例 3（难）** 合同写「甲方应在合理期限内答复」。三个月后甲方仍未答复，乙方主张违约。谁会赢？

**分析**：「合理期限」是含混词，双方各有读法。合同的功能是消灭含混，所以这类条款通常会被认定为需要补充解释。解决路径不是争语义，而是找行业惯例、交易习惯、此前履约记录来划定实际边界。

## 反例训练

> 这家餐厅分量很足，因为很多人都吃不完。

**问题所在**：「分量足」与「吃不完」之间靠一个未言明的标准连着。多少人算「很多人」？吃不完是吃不下还是不想吃？**两个含混词相加，不会得到清楚结论。** 看似在论证，实际是把一个模糊印象换了个说法。

## 现实应用

- **签合同**：把「尽快」「适当」「重大」逐一改成数字与清单，含混条款就是未来的争议。
- **读调查**：「多数受访者支持」要看样本量与问法，问题措辞的歧义常决定答案。
- **写需求文档**：「界面要简洁」改成「一屏不超过三个主按钮」，团队才不会各做一套。
- **听争论**：双方吵得凶时，先问「我们说的是同一个意思吗」，很多分歧在此消解。

## 本节总结

**核心概念**：含混、歧义、词义歧义、语法歧义、指代不明。

**关键规则**

1. 含混靠划线，歧义靠选路，两者不可混用同一种办法。
2. 一句多解时，先列出所有读法，再判断哪一种在语境中成立。
3. 论证里出现含混关键词，结论的强度不能超过该词的清晰度。

**常见错误**：把程度之争当成事实之争；用模糊词掩盖没有标准；在关键位置使用代词而不明所指。

**需要掌握的能力**：读到一句话能立刻问「这里有没有第二种读法」，并动手把它改写成只有一种读法的形式。
`,quiz:[{id:"s2-03-q1",type:"single",stem:"下面哪一项属于含混而非歧义？",options:["他去银行了","这个箱子很重","咬死了猎人的狗","他的书出版了"],answer:"B",explanation:"「重」只有一种意义方向，只是到多少公斤算重说不清，属于边界模糊。A 有河岸与机构两义，C 有结构两解，D 有「他写的」与「他拥有的」两解，都是歧义。",skill:"含混与歧义的区别"},{id:"s2-03-q2",type:"judge",stem:"一个含混的词只要使用时双方都不追究，就不会影响论证的正确性。",answer:!1,explanation:"含混词在前提里会削弱推理的传递力。即便当下无人追究，只要结论依赖该词的边界，结论的可靠性就随之浮动。合同与标准文件中的模糊表述正是因此反复引发争议。",skill:"含混的影响"},{id:"s2-03-q3",type:"single",stem:"「反对的是少数人」这句话的歧义属于：",options:["词义歧义，因为「反对」有多义","语法歧义，因为修饰关系可以有两种切分","指代不明，因为缺少代词","含混，因为「少数」没有精确边界"],answer:"B",explanation:"这句可读作「反对者属于少数人」，也可读作「被反对的是少数人」，差别来自句法成分的挂靠位置。词义与指代都清楚，问题出在结构切分。",skill:"语法歧义"},{id:"s2-03-q4",type:"multi",stem:"下列哪些是消除歧义的有效手段？（多选）",options:["补全省略的主语或宾语","调整语序并加上量词","提高音量重复一遍原句","把代词换成具体的名词"],answer:["A","B","D"],explanation:"A 解决省略造成的空位，B 锁死结构切分，D 消除指代不明。C 只是重复同一个多解形式，听者仍要在几种读法之间猜，声音再大也不解决意义问题。",skill:"消除歧义的方法"},{id:"s2-03-q5",type:"short",stem:"用两三句话说明含混与歧义的区别，并各举一例。",keywords:[["边界","模糊","说不清"],["多义","多种读法","两种解释"],["例子","举例"]],answer:"含混是边界不清，词义方向唯一，只是到某处算不算说不明白，如「秃」「高」。歧义是一个形式对应多种确定读法，听者必须选一种，如「他去银行了」。前者要划线，后者要选路。",explanation:"区分的关键在「不确定的程度」还是「不确定的选项」。含混是一个连续区间没有切口，歧义是几个离散意义同时可用，处理手段因此不同。",skill:"含混与歧义"}]},{id:"s2-04",no:13,code:"3.5",title:"概念：内涵与外延",stage:2,chapter:"第3章 语言与定义",minutes:15,lead:"「人」这个说法能装下七十多亿个对象，「唐代写格律诗的中国诗人」只装得下几十个。为什么加的限制越多，能装的东西反而越少？",objectives:["分别说出一个概念的内涵与外延，并给出实例","运用反变关系解释限制与概括的运作方向","识别空概念与单独概念在外延上的特殊性"],concepts:["概念","内涵","外延","限制","概括","空概念"],body:`
## 核心定义

**专业定义**：概念是反映对象特有属性的思维形式。**内涵**（connotation）是概念所反映的特有属性集合，也就是判定一个对象是否属于该概念的依据；**外延**（denotation）是具有这些属性的对象所组成的类。

**通俗解释**：内涵是「入场条件」，外延是「凭票入场的那群人」。条件越苛刻，符合的人越少。

**关键术语**

- **内涵**：决定归属的特征集合。如「三角形」的内涵是「三条直线围成的平面封闭图形」。
- **外延**：概念所指对象的全体。如「三角形」的外延是全部三角形。
- **限制**：增加内涵，缩小外延。如由「人」到「中国的大学生」。
- **概括**：减少内涵，扩大外延。如由「大学生」到「人」。
- **空概念**：外延为空，如「永动机」「方的圆」。

**容易混淆的概念**

> 内涵 ≠ 字典释义的措辞。内涵是判定归属的属性，不是解释这句话本身。定义是表达内涵的语言手段，内涵是语言背后的东西。

> 外延 ≠ 举例。举例是外延的样本，不是外延本身。举三个例子不等于穷尽了该类。

## 理论讲解

### 第一步：先问「凭什么算」

面对一个概念，先找它的入场条件。「鸟」的入场条件通常列：有羽毛、卵生、恒温、脊椎动物。这些条件合起来就是内涵。条件定得准，判断归属才有依据。

### 第二步：再问「都有谁」

把符合条件的东西点一遍，得到外延。「鸟」的外延包括麻雀、鹰、企鹅、鸵鸟。点到企鹅时会发现一个陷阱：若内涵里写了「会飞」，企鹅就被排除，外延立刻出错。

### 第三步：抓住反变关系

内涵与外延方向相反：

$$\\text{内涵增加} \\Rightarrow \\text{外延缩小}, \\qquad \\text{内涵减少} \\Rightarrow \\text{外延扩大}$$

由「学生」到「大学生」再到「中文系大学生」，每加一层限制，范围就收一圈。反过来做就是概括。这条规律是后面学定义与划分的地基。

### 第四步：注意两个端点

外延缩到只剩一个对象，叫**单独概念**，如「长江」。外延缩到零，叫**空概念**，如「永动机」。空概念不是无意义的词，它在理论中扮演边界角色，只是它不能用来做存在性断定的主词。

## 例题与分析

**例 1（易）** 说出「等边三角形」的内涵与外延。

**分析**：内涵是「三条边长度相等的三角形」，外延是全部等边三角形。注意它与「等角三角形」外延完全相同，内涵表述不同——这说明内涵与外延不是一一对应的。

**例 2（中）** 「学生」增加内涵「全日制」之后，外延发生了什么变化？

**分析**：外延缩小，把在职进修、业余学习者排除出去。这就是限制。若再加「在读」与「本科」，范围继续收窄。每一次限制都必须确认新外延确实被旧外延包含，否则不是限制而是换概念。

**例 3（难）** 有人说：「鲸鱼是鱼，因为它生活在海里，形状像鱼。」请从内涵角度分析。

**分析**：这段话用表面特征充当内涵。概念的入场条件应取本质属性——鲸用肺呼吸、胎生、哺乳，属于哺乳动物。若把「生活在海里」写进「鱼」的内涵，海豚、海豹也会被卷进来，外延立刻失控。**内涵选错，外延必然错。**

## 反例训练

> 给「鸟」下定义时，条件写得越全越好：有羽毛、会飞、会下蛋、体型小、叫声清脆。

**问题所在**：条件越多，外延越窄。「体型小」排除鹰，「叫声清脆」排除鸵鸟，「会飞」排除企鹅。定义者以为在求精确，实际在**把外延切掉一大块**。内涵不是越多越好，够用且能覆盖全部对象才好。

## 现实应用

- **查资料**：看到「贫困人口」这类统计词，先问内涵按什么标准划，再问外延覆盖哪些人群，数字才有意义。
- **写方案**：给项目范围下定义，等于给内涵划线。划线模糊，后期需求就会无限膨胀。
- **学新知**：新概念先记内涵（判定条件），再靠举例扩充外延，两条腿走路比死记定义管用。
- **辨争论**：两人为「某行为算不算作弊」争得面红耳赤，往往是一个盯内涵、一个盯外延，需要先对齐标准。

## 本节总结

**核心概念**：概念、内涵、外延、限制、概括、空概念、单独概念。

**关键规则**

1. 内涵定条件，外延定范围，二者共同构成一个概念。
2. 内涵增加外延缩小，内涵减少外延扩大，方向永远相反。
3. 内涵必须能覆盖全部应属对象，否则外延会出现漏洞。

**常见错误**：把表面特征当本质属性；以为内涵越多越精确；把举例当成穷尽外延；把空概念当作有指称的词使用。

**需要掌握的能力**：给任意一个概念，都能列出它的判定条件与所指范围，并检验二者是否匹配。
`,quiz:[{id:"s2-04-q1",type:"single",stem:"「等边三角形」的内涵是「三条边相等的三角形」，它的外延是：",options:["某一个具体的等边三角形","全部等边三角形组成的类","三角形这个概念本身","等边三角形这个词语"],answer:"B",explanation:"外延是概念所指对象的全体，不是单个样本，也不是词或概念本身。A 是举例，C 混淆了层次，D 把语言符号当成了所指对象。",skill:"外延"},{id:"s2-04-q2",type:"judge",stem:"一个概念的内涵越丰富，它的外延就越大。",answer:!1,explanation:"方向恰好相反。内涵增加意味着入场条件变严，符合的对象减少，外延缩小。如由「人」到「中国的大学生」，条件多了，范围小了。记反这条规律，定义与划分都会跟着错。",skill:"内涵与外延的反变关系"},{id:"s2-04-q3",type:"single",stem:"由「大学生」到「学生」的思维操作属于：",options:["限制","概括","划分","定义"],answer:"B",explanation:"减少内涵、扩大外延叫概括。反过来由「学生」到「大学生」才是限制。划分是把一个属分成若干种，定义是揭示内涵，都不是这里发生的操作。",skill:"限制与概括"},{id:"s2-04-q4",type:"multi",stem:"关于空概念，下列说法正确的有：（多选）",options:["空概念的外延为零","空概念没有任何意义，应当禁止使用","「永动机」是空概念的典型例子","空概念不能用来做存在性断定"],answer:["A","C","D"],explanation:"空概念外延为空，但仍有确定内涵，在理论表述中常用。「永动机」即典型。因为所指为空，说「存在某物是永动机」必然假，故 D 成立。B 错在把外延为空等同于无意义。",skill:"空概念"},{id:"s2-04-q5",type:"short",stem:"用内涵与外延的框架，说明为什么「会飞」不适合写进「鸟」的内涵。",keywords:[["外延","范围"],["企鹅","鸵鸟","不会飞"],["内涵","条件","本质"]],answer:"内涵是判定归属的条件，写进去的条件必须覆盖全部应属对象。企鹅与鸵鸟是鸟却不会飞，一旦把「会飞」列为条件，它们就被排除，外延出现缺口。所以内涵应取本质属性如有羽毛、卵生，而非偶然特征。",explanation:"要点是：内涵决定外延；条件过严会使外延缩小到漏掉合法成员；因此要选能覆盖全类的本质属性，而非个别成员的表面特征。",skill:"内涵的选择"}]},{id:"s2-05",no:14,code:"3.5",title:"概念之间的五种关系",stage:2,chapter:"第3章 语言与定义",minutes:12,lead:"如果一次表决只有赞成和反对两个选项，弃权的人算哪一边？把「反对」的外延想得太宽，会让多少论证在不知不觉中出错？",objectives:["用外延是否重合判断两个概念属于哪一种关系","区分矛盾关系与反对关系，并指出中间项是否存在","在论证中识别由关系误判造成的推理错误"],concepts:["全同关系","真包含于","真包含","交叉关系","全异关系","矛盾与反对"],body:`
## 核心定义

**专业定义**：概念之间的关系，指两个概念外延之间的集合关系。用欧拉图看，只有五种：**全同**（外延完全重合）、**真包含于**（S 的外延真包含于 P，S 是 P 的种）、**真包含**（S 真包含 P，S 是 P 的属）、**交叉**（外延部分重合）、**全异**（外延无重合）。全异再分两种：**矛盾关系**指两概念外延之和等于邻近属概念，无中间项；**反对关系**指外延之和小于邻近属概念，有中间项。

**通俗解释**：两个圈，要么完全重叠，要么一小一大套着，要么部分叠加，要么完全不碰。不碰的还分两种：把地盘占满的，和中间留着空地的。

**关键术语**

- **全同**：「等边三角形」与「等角三角形」，外延一致。
- **真包含于**：「麻雀」与「鸟」，前者是后者的种。
- **交叉**：「教师」与「党员」，有人两者都是。
- **矛盾**：「有理数」与「无理数」，实数范围内无第三项。
- **反对**：「黑」与「白」，中间还有灰。

**容易混淆的概念**

> 矛盾 ≠ 反对。判别只看一件事：在邻近属概念范围内，有没有第三个对象既不属甲也不属乙。没有是矛盾，有是反对。

> 全同 ≠ 同义。两个词外延一致，内涵表述可以不同。「土豆」与「马铃薯」指同一类，语体色彩却不同。

## 理论讲解

### 第一步：画出两个圈

不必真画，心里过一遍即可：甲的所有对象，乙的所有对象，两堆有没有重叠？重叠是一部分还是全部？这一步把语言问题转成集合问题，判断立刻变简单。

### 第二步：判断包含方向

若甲全部落在乙里面且乙还有别的成员，则甲真包含于乙。方向不能反：「麻雀」真包含于「鸟」，不能说「鸟真包含于麻雀」。方向错了，后面所有推理都会倒着走。

### 第三步：给全异关系找邻近属

「红」与「蓝」全异，它们的邻近属是颜色。在颜色范围内，还有黄绿紫，所以是反对关系。「奇数」与「偶数」的邻近属是整数，整数非奇即偶，所以是矛盾关系。**找对属概念，才能判中间项有无。**

### 第四步：把关系用到推理上

若甲与乙是矛盾关系，则 $\\neg A \\to B$ 成立。若只是反对关系，则 $\\neg A \\to B$ 无效。这一步是从概念关系通向逻辑推理的关键接口。

## 例题与分析

**例 1（易）** 「中学生」与「学生」是什么关系？

**分析**：所有中学生都是学生，且有学生不是中学生，故前者真包含于后者。注意方向：说「学生真包含于中学生」就错了。

**例 2（中）** 「医生」与「女性」是什么关系？

**分析**：交叉。有女医生，有男医生，也有不是医生的女性。交叉关系的推理特点是：由「某人是医生」推不出其性别，也推不出其不是女性。

**例 3（难）** 某次会议表决，公告写「无人反对，方案获得通过」。有人据此断定「全体赞成」。这个断定成立吗？

**分析**：不成立。「反对」与「赞成」在表决范围内并非矛盾关系，中间还有弃权与未出席。除非明确规定只有两个选项且必须二选一，「无人反对」才等价于「全体赞成」。**把反对关系当矛盾关系，是这类推断的通用病根。**

## 反例训练

> 这次考试要么及格要么不及格。小王没及格，所以他一定很差。

**问题所在**：前半句的「要么…要么…」在此确实是矛盾关系，二分本身没问题；错在后半句把「不及格」等同于「很差」。这是**在矛盾关系之外又偷偷加了一层评价阶梯**，而「很差」与「不及格」并非同一划分下的两个子项。前一句的关系判断是对的，后一句换了概念。

## 现实应用

- **看统计**：「支持率 40%，反对率 35%」剩下的 25% 是什么，决定这两个选项是矛盾还是反对。
- **写选项**：问卷设计若把选项设成互斥且穷尽，回答才能直接比较；漏掉「说不清」，数据就失真。
- **读法律**：条文里「应当」与「可以」的关系不是矛盾，中间还有大量裁量空间。
- **日常推理**：听到「不是朋友就是敌人」，先问中间有没有陌生人。

## 本节总结

**核心概念**：全同、真包含于、真包含、交叉、全异、矛盾关系、反对关系。

**关键规则**

1. 判断关系先看外延，不看词形，也不看语感。
2. 包含关系有方向，方向反了推理就废。
3. 矛盾关系可支持「非此即彼」，反对关系不可以。

**常见错误**：把反对当矛盾；把包含方向说反；把全同当成同义；在交叉关系上强行二分。

**需要掌握的能力**：给定任意两个概念，能立刻判定五种关系中的哪一种，并说出它允许什么样的推理。
`,quiz:[{id:"s2-05-q1",type:"single",stem:"「青年教师」与「教师」的关系是：",options:["全同","真包含于","真包含","交叉"],answer:"B",explanation:"所有青年教师都是教师，但有教师不是青年教师，故前者真包含于后者。若说成真包含就把方向弄反了；两者外延显然不等，也不是交叉。",skill:"概念间的五种关系"},{id:"s2-05-q2",type:"judge",stem:"「奇数」与「偶数」是反对关系。",answer:!1,explanation:"在整数范围内，一个数非奇即偶，没有第三项，所以是矛盾关系。反对关系要求中间存在既不属甲也不属乙的对象，如黑与白之间的灰。判错这一条会导致「非此即彼」的误用。",skill:"矛盾关系与反对关系"},{id:"s2-05-q3",type:"single",stem:"已知「甲」与「乙」是交叉关系，下列推理一定成立的是：",options:["某对象是甲，所以它不是乙","某对象是甲，所以它是乙","存在对象既是甲又是乙","所有甲都是乙"],answer:"C",explanation:"交叉的定义就是外延有重合，故必然存在兼属两者的对象。A、B 把交叉误当全异或全同，D 把交叉误当包含，三种读法都与交叉关系不相容。",skill:"交叉关系"},{id:"s2-05-q4",type:"multi",stem:"下列各组概念中，属于全异关系的有：（多选）",options:["猫与狗","等边三角形与等角三角形","成年人 与 未成年人","铅笔与钢笔"],answer:["A","C","D"],explanation:"A、D 外延完全不重合，属反对关系。C 在人的年龄划分下非此即彼，属矛盾关系，仍是全异。B 外延完全相同，是全同关系，不属于全异。",skill:"全异关系"},{id:"s2-05-q5",type:"short",stem:"用矛盾关系与反对关系的区别，解释「不赞成就是反对」这句话在什么条件下才成立。",keywords:[["矛盾","中间项","第三项"],["穷尽","二分","只有两个选项"],["反对","弃权","中立"]],answer:"只有当「赞成」与「反对」构成矛盾关系，即在该议题上二者穷尽了全部可能、不存在弃权或中立时，否定一方才能推出另一方。若中间还有弃权者，二者只是反对关系，此时「不赞成」可能意味着保留意见，推不出反对。",explanation:"关键在于中间项有无。矛盾关系外延之和等于属概念，可以非此即彼；反对关系留有空白，否定一方不能锁定另一方，弃权与中立就是这片空白。",skill:"矛盾与反对的推理差异"}]},{id:"s2-06",no:15,code:"3.4",title:"定义的结构与用途",stage:2,chapter:"第3章 语言与定义",minutes:14,lead:"字典给「猫」下的定义，和合同里给「不可抗力」下的定义，是同一种东西吗？下定义这件事，究竟在解决什么问题？",objectives:["拆解一个定义，指出被定义项、定义项与定义联项","区分约定、词典、精确化、理论、劝导五种定义用途","判断某个定义在具体场景中承担的是哪一种功能"],concepts:["定义的结构","约定定义","词典定义","精确化定义","理论定义","劝导性定义"],body:`
## 核心定义

**专业定义**：定义是揭示概念内涵、明确概念界限的语言操作。结构上分三部分：**被定义项**（definiendum）是被说明的语词；**定义项**（definiens）是用来说明它的语词；**定义联项**是连接二者的部分，如「就是」「是指」「所谓……即……」。

**通俗解释**：定义就是给一个词发身份证——说清它指什么、不指什么。身份证的用途不止一种：有的是新发的，有的是补办的，有的是为了堵住冒用。

**关键术语**

- **被定义项**：待说明的语词，如「三角形」。
- **定义项**：用来说明它的表述，如「由三条直线围成的平面封闭图形」。
- **定义联项**：连接符号，如「就是」。
- **约定定义**：给新词或新符号规定意义，无真假，只有合用与否。
- **词典定义**：报告一个词在语言共同体中已有的意义。
- **精确化定义**：为消除含混而划定可操作边界，如按年龄界定「未成年人」。
- **理论定义**：在理论体系中赋予概念特定角色，如物理学中的「质量」。
- **劝导性定义**：借定义把评价塞进词义，从而影响态度。

**容易混淆的概念**

> 词典定义 ≠ 唯一正确。词典报告的是通行用法，用法变了，词条也要改。它描述事实，不颁布法令。

> 精确化定义 ≠ 随意划线。划线需要公开、统一、能处理边界案例，否则只是把含混挪了个位置。

## 理论讲解

### 第一步：先拆结构

拿到一个定义，用联项切开。左边是被定义项，右边是定义项。若切不开，说明这句话不是定义，而是在描述或评论。这一步能过滤掉大量伪定义。

### 第二步：问它想干什么

同一条定义在不同场合功能不同。给新造词下定义是约定；查字典是词典定义；写标准、写合同多是精确化；在学科里建立体系是理论定义；在辩论里争夺话语权是劝导性定义。**先定用途，再谈对错。**

### 第三步：按用途换标准

约定定义只要求不矛盾、不引起混淆，无所谓真假。词典定义要求符合通行用法，错了叫「释义失当」。精确化定义要求边界清晰且可执行。理论定义要求与体系内其他概念自洽。劝导性定义则要警惕：它把结论藏进了前提。

### 第四步：检验是否越界

一个常见的越界是：把一个约定定义当成事实断言去反驳，或把一个劝导性定义当成中性分类去接受。判断标准很简单——问这个定义有没有偷偷替你做评价。

## 例题与分析

**例 1（易）** 「所谓三角形，就是由三条直线围成的平面封闭图形。」请指出三要素。

**分析**：被定义项「三角形」，定义联项「就是」，定义项「由三条直线围成的平面封闭图形」。典型的属加种差定义。

**例 2（中）** 某游戏说明书开头写：「本规则中『回合』指从一名玩家行动开始到其行动结束的时段。」这是哪种定义？

**分析**：约定定义。它不报告日常用法，而是为新语境规定一个精确含义。这类定义没有真假，只有是否好用；只要全文一致，就算合格。

**例 3（难）** 法律条文规定：「本法所称未成年人，指未满十八周岁的公民。」有人批评这个定义「不准确，因为有些人十七岁就很成熟了」。这个批评成立吗？

**分析**：不成立。这是精确化定义，目的是给执法提供可操作的界线，不承担刻画心理成熟度的任务。用「成熟度」要求它，是拿错了尺子。

## 反例训练

> 「所谓创新，就是不按常理出牌。」按这个定义，胡乱闯红灯也算创新。

**问题所在**：定义项过窄且带褒义，把「创新」压缩成一种行为姿态，又借褒词给它镀了光。它更接近**劝导性定义**：先让你对词生出好感，再让你接受被它套住的行为。

## 现实应用

- **读合同**：先找「定义」条款。争议解决的一半功夫，在确认关键词当初是怎么被划线的。
- **写论文**：核心概念首次出现时给出精确化定义，后面才能反复使用而不走样。
- **学新课**：遇到新术语，分清它是约定还是理论定义，能避免用日常语感去反驳专业用法。
- **识辩论**：对方一开口就重新定义关键词，多半是在为结论铺路，先拦住这一步。

## 本节总结

**核心概念**：被定义项、定义项、定义联项；约定、词典、精确化、理论、劝导五种用途。

**关键规则**

1. 定义有三段结构，联项是切分点。
2. 用途决定评价标准，先定用途再判对错。
3. 定义可以规定，不可以偷偷评价。

**常见错误**：拿词典标准要求约定定义；用日常语感否定精确化定义；接受劝导性定义而不自知；把描述句误当定义。

**需要掌握的能力**：看到一个定义，能拆结构、判用途、选标准，三步走完再下结论。
`,quiz:[{id:"s2-06-q1",type:"single",stem:"「所谓印花税，是指对书立应税凭证的行为征收的一种税。」其中的定义项是：",options:["印花税","是指","对书立应税凭证的行为征收的一种税","税"],answer:"C",explanation:"定义项是联项右边用来说明被定义项的那一整段表述。A 是被定义项，B 是定义联项，D 只是定义项中的属概念，单独一个词不构成完整说明。",skill:"定义的结构"},{id:"s2-06-q2",type:"judge",stem:"约定定义有真假之分，说错了就是假定义。",answer:!1,explanation:"约定定义是为新词或新符号规定用法，属于规定而非描述，因此无所谓真假，只看是否清楚、是否前后一致、是否引起混淆。用真假去评价它，是把规定当成了断言。",skill:"约定定义"},{id:"s2-06-q3",type:"single",stem:"把「未成年人」界定为「未满十八周岁的公民」，这种定义的主要用途是：",options:["约定一个新符号的含义","报告词典中的通行释义","精确化一个含混概念以便执行","通过定义影响听众态度"],answer:"C",explanation:"「未成年」在日常语感中边界模糊，法律需要一个可统一执行的界线，故用年龄划线。它不是新造符号，也不是照抄词典，更不承担劝导功能。",skill:"精确化定义"},{id:"s2-06-q4",type:"multi",stem:"下列哪些属于定义的常见用途？（多选）",options:["为消除含混而划定可操作边界","在理论体系中确定概念的角色","通过定义把评价塞进词义","用定义证明被定义对象确实存在"],answer:["A","B","C"],explanation:"A 是精确化，B 是理论定义，C 是劝导性定义，三者都是通行用途。D 不成立：定义说明一个词怎么用，不能证明所指对象在现实中存在，那是事实问题。",skill:"定义的用途"},{id:"s2-06-q5",type:"short",stem:"为什么评价一个定义之前，要先确定它的用途？请举例说明。",keywords:[["用途","功能","场合"],["标准","要求"],["约定","精确化","词典"]],answer:"不同用途的定义遵循不同标准。约定定义只看是否清楚一致，词典定义看是否符合通行用法，精确化定义看边界能否统一执行，理论定义看体系内是否自洽。用词典标准去否定合同里的精确化定义，或用真假去评价约定定义，都是用错了尺子。",explanation:"核心是标准随功能变化。定义不是单一类型的语言活动，混用标准会产生大量伪批评，也会放过真正的问题，如劝导性定义偷塞评价。",skill:"定义用途与评价标准"}]},{id:"s2-07",no:16,code:"3.6",title:"属加种差定义与常用定义方法",stage:2,chapter:"第3章 语言与定义",minutes:15,lead:"给一个词下定义，最省力的办法是先说它属于哪一类，再说它和同类其他成员差在哪。这个套路为什么几乎万能，又在哪里失灵？",objectives:["按「属加种差」的步骤构造一个合格定义","在同一属概念下找出真正的种差","根据对象特点选用同义、操作、列举、例证等方法"],concepts:["属加种差定义","邻近属概念","种差","操作定义","列举定义","例证定义"],body:`
## 核心定义

**专业定义**：**属加种差定义**是最常用的实质定义方法，形式为：被定义项 ＝ 种差 ＋ 邻近属概念。先指出对象所属的较大的类（属），再指出它与同属其他种之间的差别（种差）。此外还有**同义定义**（用同义词替换）、**操作定义**（用检验程序说明）、**列举定义**（列出外延成员）、**例证定义**（举典型例子）、**词源定义**（追溯语词来源）、**类比定义**（借相似关系说明）。

**通俗解释**：先报家门，再说特色。报家门让你知道它归哪一类，说特色让你把它和同门兄弟分开。

**关键术语**

- **邻近属概念**：离被定义项最近的那个上位概念。给「正方形」下定义，属应是「矩形」而不是「图形」。
- **种差**：同一属之下，本种区别于其他种的属性。
- **操作定义**：用可观察的检验步骤界定，如「酸性」用试纸变色来界定。
- **列举与例证**：前者穷举成员，后者只给样本，二者都不能替代内涵说明。

**容易混淆的概念**

> 属加种差 ≠ 随便找个大类加个特点。「属于动物，有四条腿」不是定义，因为种差没有把对象与同属其他种区分开。

> 例证定义 ≠ 定义。举例能帮助理解，但例子之外还有成员，靠例子无法划定边界。

## 理论讲解

### 第一步：找邻近属

一路往上问「它是什么的一种」，停在最近的那一层。「钢笔」往上依次是文具、日用品、人造物。选「文具」作属，种差才好写；选「人造物」，种差就得写一大串。

### 第二步：找种差

在同一属里横向比较。文具之下有铅笔、圆珠笔、毛笔，钢笔的差别在于笔尖结构与供墨方式。种差要选那些**真正决定分类**的属性，而不是颜色、价格这类偶然特征。

### 第三步：组合并回代检验

把「种差 + 属」写成一句话，再反问：符合这个表述的对象，是不是恰好就是被定义项的全部外延？若有多余，说明种差太松；若有遗漏，说明种差太紧。

### 第四步：按对象换方法

抽象概念难找种差，可用操作定义；外延成员有限的概念可用列举；日常交流中一时说不清，可用例证先建立直觉。方法服从目的，不必死守一种。

## 例题与分析

**例 1（易）** 用属加种差给「三角形」下定义。

**分析**：属是「平面图形」，种差是「由三条直线围成」。合起来即「三角形就是由三条直线围成的平面图形」。回代检验：所有三角形符合，符合的都是三角形，合格。

**例 2（中）** 给「词典」下定义：「词典是收录词语、按一定方式编排、供人查阅释义的工具书。」

**分析**：属是「工具书」，种差包含三项：收录对象、编排方式、用途。三项共同把它与年鉴、手册区分开。若只写「收录词语的书」，就与词语表难以区分，种差不足。

**例 3（难）** 「智力就是智力测验所测到的东西。」这个定义怎么样？

**分析**：这是操作定义的极端形式，也叫循环操作定义。它把概念等同于测量它的工具，导致无法用测验之外的方式讨论智力，也无法批评测验本身是否测到了该测的东西。操作定义在科学中有用，但必须保留独立的理论说明，否则会把工具当成对象。

## 反例训练

> 蝙蝠是一种鸟，因为它有翅膀，能在天上飞。

**问题所在**：**属概念选错**。会飞不是分类依据，蝙蝠胎生、哺乳、体表有毛，属哺乳动物。定义者拿表面相似性代替了本质属性，等于按「像不像」归类。这类错误在生物学史上持续了很久，鲸鱼被当成鱼也是同一个毛病。

## 现实应用

- **写产品文档**：给功能下定义时先归入模块（属），再写它与同模块其他功能的差异（种差），开发与测试才有共同语言。
- **出考题**：让学生给概念下定义，能迅速暴露他是否真的抓住了本质属性。
- **做科普**：遇到抽象术语，先用例证建立直觉，再补属加种差，理解效率高得多。
- **辨概念营销**：商家常自造新词并附一个模糊定义，看清它的属与种差，就能判断是不是旧瓶新酒。

## 本节总结

**核心概念**：属加种差定义、邻近属概念、种差、操作定义、列举定义、例证定义。

**关键规则**

1. 属要选最近的上一层，种差要能区分同属其他种。
2. 定义写成后必须回代检验，看外延是否恰好吻合。
3. 方法随对象变，操作、列举、例证各有用武之地，但都不能替代内涵说明。

**常见错误**：属选得太远导致种差冗长；拿偶然特征当种差；把举例当成定义；用测量工具代替概念本身。

**需要掌握的能力**：给任意一个具体概念，能在三十秒内写出「属 + 种差」的定义，并做一次回代检验。
`,quiz:[{id:"s2-07-q1",type:"single",stem:"用属加种差给「正方形」下定义，最合适的邻近属概念是：",options:["图形","四边形","矩形","平面"],answer:"C",explanation:"邻近属应取最近的上位概念。正方形是矩形的一种，选矩形后种差只需写「四边相等」，简洁且能区分。选四边形或图形会使种差过长，失去定义的经济性。",skill:"邻近属概念"},{id:"s2-07-q2",type:"judge",stem:"「椅子就是供人坐的家具。」这是一个合格的属加种差定义。",answer:!1,explanation:"种差过松。床、沙发、台阶也能供人坐，符合该表述的对象多于椅子的外延，属定义过宽。合格的种差应能把椅子与同属其他家具区分开，如强调单人、有靠背、有支撑腿等结构特征。",skill:"种差的选择"},{id:"s2-07-q3",type:"single",stem:"「酸性溶液就是能使蓝色石蕊试纸变红的溶液。」这属于哪种定义方法？",options:["同义定义","操作定义","词源定义","类比定义"],answer:"B",explanation:"它用一套可观察的检验程序来界定概念，是操作定义。同义定义靠同义词替换，词源定义追溯语词来源，类比定义借相似关系说明，都与这里的检验步骤不同。",skill:"操作定义"},{id:"s2-07-q4",type:"multi",stem:"关于列举定义与例证定义，说法正确的有：（多选）",options:["列举定义穷举外延成员","例证定义只给出部分样本","两者都能完整揭示概念内涵","外延成员有限时列举定义较可行"],answer:["A","B","D"],explanation:"A、B、D 都符合两者特征。C 错在夸大功能：列举与例证处理的是外延，不能说明判定归属的属性，因而无法替代内涵定义，成员很多时尤其无力。",skill:"列举与例证定义"},{id:"s2-07-q5",type:"short",stem:"用属加种差的方法给「铅笔」下一个定义，并说明你选的属与种差分别是什么。",keywords:[["文具","书写工具","笔"],["石墨","笔芯","木质"],["种差","属"]],answer:"铅笔是以石墨与黏土制成的笔芯、外裹木质笔杆的书写工具。属概念取「书写工具」，种差是笔芯材料与笔杆结构。回代检验：所有铅笔符合该表述，符合该表述的也都是铅笔，外延吻合。",explanation:"要点是属要近、种差要能区分。若只写「写字的工具」，就与钢笔毛笔混同，属过远、种差不足，定义失去分类功能。",skill:"属加种差定义"}]},{id:"s2-08",no:17,code:"3.6",title:"定义的规则与常见错误",stage:2,chapter:"第3章 语言与定义",minutes:13,lead:"「人就是没有羽毛的两足动物」——把一只鸡的毛拔光，它就成人了吗？一条定义要合格，究竟得闯过几道关？",objectives:["复述定义的几条基本规则，并说明每条规则防止什么错误","诊断一段定义中的具体毛病，指出它违反了哪条规则","改写不合格的定义，使其通过回代检验"],concepts:["循环定义","定义过宽","定义过窄","否定定义","比喻定义","含混定义"],body:`
## 核心定义

**专业定义**：定义要合格，需满足几条基本规则：定义项与被定义项**外延全同**；定义**不得循环**；在可以正面定义时**不得用否定形式**；定义**不得使用含混、歧义或比喻的语言**。违反这些规则，就产生对应的错误：定义过宽、定义过窄、循环定义、否定定义、含混定义、比喻定义。

**通俗解释**：定义是把一个词的范围圈准。圈大了，别人家的东西被圈进来；圈小了，自家的成员被漏在外；圈线画成虚线，边界又糊了；用「它不是别的什么」来圈，等于没说圈在哪。

**关键术语**

- **定义过宽**：定义项外延大于被定义项，如「椅子是供人坐的家具」。
- **定义过窄**：定义项外延小于被定义项，如「鸟是会飞的动物」。
- **循环定义**：定义项直接或间接包含被定义项。
- **否定定义**：用「不是……」代替正面说明。
- **比喻定义**：用形象比方代替属性描述，如「儿童是祖国的花朵」。

**容易混淆的概念**

> 定义过宽与过窄常同时出现。改一处往往牵动另一处，所以不要只做局部修补，要重新回代检验整个定义。

> 否定定义并非一律禁止。当被定义项本身就是否定性概念时，如「孤儿指失去父母的儿童」，用否定表述反而清楚。

## 理论讲解

### 第一步：先做外延比对

把定义项覆盖的对象与被定义项的对象各列一批，看两边是否重合。多出来的部分指向过宽，缺掉的部分指向过窄。这一步最实在，比凭语感判断可靠得多。

### 第二步：查循环

看定义项里有没有出现被定义项本身，或它的同根词、同义词。「原因就是引起结果的东西，结果就是由原因引起的东西」是间接循环：要懂一个必须先懂另一个，结果两个都没懂。判定标准是：理解定义项是否需要预先理解被定义项。

### 第三步：查否定与比喻

定义的任务是说明「是什么」，通篇说「不是什么」，听者仍不知边界在哪。「自由就是不受任何约束」看似清楚，其实只排除了约束，没说明自由的正面内容，还顺手把评价塞了进来。

### 第四步：查含混与歧义

定义项里若出现比被定义项更模糊的词，等于用更暗的比喻去解释暗。「公平就是合理的分配」中「合理」比「公平」更难把握，属于以模糊释模糊。

## 例题与分析

**例 1（易）** 「正方形就是四边相等的四边形。」这个定义有什么问题？

**分析**：过宽。菱形也四边相等，却不一定是正方形。补上「四个角都是直角」，外延才对得上。这是漏掉关键种差的典型。

**例 2（中）** 「逻辑学就是研究逻辑的科学。」问题在哪？

**分析**：循环定义。定义项里出现了「逻辑」这一同根词，等于用自己解释自己。改法是把研究对象说清楚：研究区分正确推理与错误推理的方法和原则。

**例 3（难）** 「所谓幸福，就是没有痛苦的状态。」请从两条规则同时分析。

**分析**：一是**否定定义**，只说了不是什么，没说什么；二是**过宽**，深度睡眠、麻木状态也符合「没有痛苦」，却通常不算幸福。第三层问题是它把幸福压成消极条件，回避了积极内容。三重毛病叠在一句话里，正说明短定义也躲不过回代检验。

## 反例训练

> 什么是正义？正义就是正义的行为所具有的性质。

**问题所在**：彻底的循环定义。定义项没有提供任何新信息，只是把被定义项换了个语序，读起来庄重，实际零推进。**检验办法很简单：遮住定义项，问自己是否比读之前多知道了什么。**

## 现实应用

- **审条款**：合同里的定义条款若出现「重大影响指影响重大的情形」，等于没定义，日后必生争议。
- **写作业**：交定义类答案前，做一次回代：举三个该概念的例子，看是否都符合；再举三个不该属于的，看是否都被排除。
- **听演讲**：演讲者用比喻给关键词下定义时，多半在煽情而非说明，先要求一个可检验的表述。
- **教孩子**：孩子问「什么是勇敢」，与其说「勇敢就是不怕困难」，不如给出行为标准，避免空洞。

## 本节总结

**核心概念**：定义过宽、定义过窄、循环定义、否定定义、含混定义、比喻定义。

**关键规则**

1. 定义项与被定义项外延必须全同，多一分少一分都不行。
2. 定义不得依赖被定义项本身，否则等于没定义。
3. 能正面说明就不用否定，能说清属性就不用比喻。

**常见错误**：用同根词解释原词；用「不是」代替「是」；用比被定义项更模糊的词；把励志格言当成定义。

**需要掌握的能力**：拿到一条定义，按外延、循环、否定、含混四道关口依次检查，并动手改到合格。
`,quiz:[{id:"s2-08-q1",type:"single",stem:"「鸟就是会飞的动物。」这个定义的主要错误是：",options:["循环定义","定义过窄","否定定义","比喻定义"],answer:"B",explanation:"企鹅、鸵鸟是鸟却不会飞，被这个定义排除在外，外延小于被定义项，属过窄。它没有用同根词，也不是否定或比喻。改成「体表有羽毛的卵生脊椎动物」才覆盖全类。",skill:"定义过窄"},{id:"s2-08-q2",type:"judge",stem:"任何情况下，定义都不能使用否定形式。",answer:!1,explanation:"当被定义项本身是否定性的，正面说明反而别扭。「孤儿指父母双亡或失踪的儿童」用否定表述更清楚。规则的原意是禁止用否定回避正面说明，而非绝对禁用否定词。",skill:"否定定义"},{id:"s2-08-q3",type:"single",stem:"「所谓耐心，就是一个人所具有的耐心的品质。」违反的规则是：",options:["定义项与被定义项外延不同","定义不得循环","定义不得使用比喻","定义不得含混"],answer:"B",explanation:"定义项直接搬用了被定义项「耐心」，理解它仍要先理解「耐心」，属直接循环。外延表述看似一致，问题不在此；也没有比喻或明显的模糊词。",skill:"循环定义"},{id:"s2-08-q4",type:"multi",stem:"下列定义中，存在问题的有：（多选）",options:["教师是教书育人的人","儿童是祖国的花朵","商品是用来交换的劳动产品","自由就是不受任何限制"],answer:["A","B","D"],explanation:"A 用同根词「教书」解释教师，接近循环。B 是比喻定义，未给出属性。D 是否定定义且过宽。C 是通行的属加种差定义，外延吻合，没有明显毛病。",skill:"定义的常见错误"},{id:"s2-08-q5",type:"short",stem:"指出「正方形就是四边相等的四边形」错在哪，并给出修改后的定义。",keywords:[["过宽","菱形","多出"],["直角","四个角"],["修改","定义"]],answer:"错在定义过宽：菱形四边也相等，却不必是正方形，定义项外延大于被定义项。修改为「正方形就是四边相等且四个角都是直角的四边形」，加上直角这一种差后，两边外延吻合。",explanation:"关键在回代检验时发现多余成员。补种差要选能排除多余对象的属性，直角正是菱形与正方形的分界，加上它，定义才既不过宽也不过窄。",skill:"定义过宽与修正"}]},{id:"s2-09",no:18,code:"3.5",title:"划分、分类与概念澄清",stage:2,chapter:"第3章 语言与定义",minutes:12,lead:"把书分成中文书、外文书、小说、教材，看着挺整齐，为什么一用就乱？分类这件小事，藏着哪些看不见的规矩？",objectives:["说出划分的三要素，并指出一次划分的标准","检验一组子项是否互斥、是否穷尽母项","区分划分与分解，避免把部分当成种类"],concepts:["划分","划分标准","子项互斥","划分不全","子项交叉","分解"],body:`
## 核心定义

**专业定义**：**划分**是把一个属概念按一定标准分成若干种概念，以明确其外延的逻辑操作。三要素为：**划分母项**（被分的外延整体）、**子项**（分出的各个种）、**划分标准**（据以划分的属性）。规则有四条：标准必须同一；子项必须互斥；子项之和必须等于母项；每次划分应在同一层次进行。

**通俗解释**：划分就是拿一把刀把一个整体切开，切口要按同一把尺子量，切出来的块不能互相压着，也不能剩下一块没被切到。

**关键术语**

- **划分标准**：划分所依据的属性，如按性别、按年龄、按用途。
- **划分不全**：子项之和小于母项，有成员无处安放。
- **多出子项**：子项里混进了不属于母项的对象。
- **子项交叉**：两个子项的外延有重合，同一对象可归入两类。
- **分解**：把整体拆成部分，部分不具有整体的属性。

**容易混淆的概念**

> 划分 ≠ 分解。「人分为头、躯干、四肢」是分解，因为手不是人的一种；「人分为成年人、未成年人」是划分，因为每一类都是人。

> 划分 ≠ 列举。列举可以只举几个成员，划分要求把母项分尽，且子项之间地位对等。

## 理论讲解

### 第一步：先说清母项与标准

动刀之前先确认切的是什么，用什么切。「人分为男人、女人、儿童」之所以乱，是因为母项是「人」，标准却一会儿性别一会儿年龄，两把刀同时下去，必然切出重叠。

### 第二步：查互斥

把任意一个对象拿去试：它能不能同时落进两个子项？能，就说明子项交叉。「学生分为三好学生、优秀学生、普通学生」就属于交叉，因为一个人可以既是三好学生又是优秀学生。

### 第三步：查穷尽

把所有成员数一遍，看有没有落空的。按「赞成、反对」划分表决意见，弃权者无处可去，这就是划分不全。补一个「弃权」子项，母项才被盖满。

### 第四步：查层次与性质

每次只切一层，不要一步跳两级。「商品分为国产商品、进口商品、合格商品」把两种标准混在一起。同时确认每个子项都继承母项属性，否则那是分解而非划分。

## 例题与分析

**例 1（易）** 「图书馆的书分为中文书和外文书。」这个划分怎么样？

**分析**：标准单一（语种），子项互斥，且在语种这个维度上大致穷尽。合格。若再加上「小说」，就变成标准混淆，因为小说可以同时是中文书。

**例 2（中）** 「人分为老年人、中年人、青年人。」问题在哪？

**分析**：划分不全。少年儿童没有位置。而且三个子项之间年龄界限含混，交界处的人归哪一类并不清楚。合格的做法是先按年龄划定区间，再保证区间覆盖全域。

**例 3（难）** 「本次比赛的参赛者分为专业组、业余组、学生组。」这个划分能用吗？

**分析**：不能。学生可以是专业选手也可以业余，子项交叉。表面看它按身份划分，实际混了两种标准：水平与身份。修改方式是二选一，或改为交叉分类：先按水平分组，再在组内标注身份，两套标准分开使用，不做一次划分。

## 反例训练

> 会议代表分为正式代表、列席代表、女性代表。

**问题所在**：三重毛病叠加。标准混淆，前两项按参会资格，第三项按性别；子项交叉，女性可以是正式代表；划分不全的隐患也在，因为性别并非会议角色的维度。**一次划分只能用一把刀**，混用两把，结果既重叠又漏空。

## 现实应用

- **做问卷**：选项必须互斥且穷尽，否则受访者无从选择，统计结果也无法解释。
- **建目录**：文件夹按用途分还是按年份分，只能选一套做主结构，另一套做标签，否则文件到处重复。
- **写报告**：给问题分类时先声明分类标准，读者才知道你的分类不是随手拼的。
- **理生活**：整理衣柜若同时按季节和场合分，必然打结；先定主维度，其余降为次级标签。

## 本节总结

**核心概念**：划分、划分母项、子项、划分标准、划分不全、子项交叉、分解。

**关键规则**

1. 一次划分只用一套标准，标准必须在开头说明。
2. 子项互斥，任一对象只能落入一类。
3. 子项之和等于母项，不能漏也不能多；每次只切一层。

**常见错误**：把分解当划分；混用两套标准；子项交叉；遗漏成员；越级划分。

**需要掌握的能力**：看到一组分类，能立刻检验它是否互斥、是否穷尽、标准是否唯一，并动手改到合格。
`,quiz:[{id:"s2-09-q1",type:"single",stem:"「人分为头、躯干和四肢。」这属于：",options:["一次合格的划分","划分不全","分解","子项交叉"],answer:"C",explanation:"头、躯干、四肢是人的组成部分，不是人的种类，手并不具有「人」这个属性，故为分解。划分的每个子项都必须是母项的种，这条界限正是本题的考点。",skill:"划分与分解"},{id:"s2-09-q2",type:"judge",stem:"划分的子项之间可以有部分重合，只要大体清楚就不影响使用。",answer:!1,explanation:"子项交叉会使同一对象归入两类，统计时重复计算，归类时无从取舍。问卷选项、文件目录、报表科目一旦交叉，后续数据全部失真，不能以「大体清楚」搪塞。",skill:"子项互斥"},{id:"s2-09-q3",type:"single",stem:"「商品分为国产商品、进口商品、优质商品。」这个划分的主要错误是：",options:["划分标准混淆，且子项交叉","多出子项，混进了非商品","划分不全，遗漏了部分商品","把划分做成了分解"],answer:"A",explanation:"前两项按产地分，第三项按质量分，两套标准混用；优质商品可以是国产也可以是进口，子项交叉。三个子项都是商品，没有多出，也非分解。",skill:"划分标准与交叉"},{id:"s2-09-q4",type:"multi",stem:"一个合格的划分应当满足：（多选）",options:["各子项外延互不重合","子项外延之和等于母项外延","同一次划分只用一个标准","子项数量越多越细致"],answer:["A","B","C"],explanation:"A、B、C 是划分的三条基本要求。D 不成立：子项多不等于划分好，层次过细会造成标准混乱与使用困难，划分的深度应服务实际需要。",skill:"划分的规则"},{id:"s2-09-q5",type:"short",stem:"指出「学生分为三好学生、优秀学生和普通学生」的问题，并给出一种修改思路。",keywords:[["交叉","重合","同时"],["标准","统一"],["互斥","穷尽"]],answer:"三个子项存在交叉：一名学生可以既是三好学生又是优秀学生，归类时无法唯一确定，统计也会重复。修改思路是统一标准，例如按综合素质评定等级划为优秀、良好、合格，并确保各等级互斥且覆盖全体学生。",explanation:"病根是一次划分里混入了重叠的评价口径。修法不是增删子项，而是把标准统一成一套可判定的等级，再检验互斥与穷尽这两项。",skill:"子项交叉与修正"}]}],_3=[{id:"s3-01",no:19,code:"8.1",title:"现代逻辑与符号语言",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:14,lead:"同一个「或者」，在「你可以选咖啡或者茶」里允许两个都要，在「要么生要么死」里却只能选一个。既然日常语言这么滑，逻辑学家凭什么敢用它来判定论证对错？",objectives:["说明符号语言解决的两个具体麻烦：歧义与形式被淹没","把含有「并且」「或者」「如果」「只有」的句子写成合式公式","辨认「除非…否则…」与「只有…才…」的符号化方向"],concepts:["命题变项","真值函项","符号化","合式公式","必要条件"],body:`
## 核心定义

**专业定义**：现代命题逻辑把自然语言论证翻译成由**命题变项**与**真值函项连接词**组成的符号表达式，再依固定的真值规则计算与检验。符号化承担两项工作：消除自然语言的歧义，让论证的形式结构显露出来。

**通俗解释**：日常说话像手写草稿，符号化像把草稿誊进标准表格。表格里每格只填「真」或「假」，于是「你这话到底什么意思」的争论被挤到表格外面去了。

**关键术语**

- **命题（proposition）**：有真假可言的陈述句。
- **命题变项（statement variable）**：$p, q, r, s$ 这类字母，代表任意一个命题，是占位符，本身没有真假。
- **真值函项连接词**：$\\neg, \\land, \\lor, \\to, \\leftrightarrow$。由它们构成的复合命题，真值完全由支命题的真值决定。
- **合式公式（wff）**：按语法规则造出来的符号串，不是随便一堆符号。

**容易混淆的概念**

> 命题变项 ≠ 命题。$p$ 是个空位，指派了具体内容或真值之后才有真假。

> 符号化 ≠ 翻译。翻译求「意思接近」，符号化求「真值条件一致」。判定标准只有一条：在一切可能情况下，原句与公式的真假是否同步。

## 理论讲解

### 第一步：先确认它是不是命题

「北京是中国的首都」有真假；「请把门关上」没有真假；「你为什么不说话」也没有。疑问句、祈使句、感叹句通常不做命题处理。这一步不做，后面全白做。

### 第二步：抓连接词，而不是拆掉所有词

「小王不但聪明而且勤奋」里真正起作用的是「不但…而且…」，符号化为 $p \\land q$，其中 $p$ 代「小王聪明」，$q$ 代「小王勤奋」。「聪明」「勤奋」的内部结构被整体打包，不再拆开。这是命题逻辑与词项逻辑的分界线。

### 第三步：按语法写公式

符号化示范：「如果下雨并且刮风，比赛就取消。」

设 $p$：下雨；$q$：刮风；$r$：比赛取消。

$$(p \\land q) \\to r$$

括号不能省。若写成 $p \\land q \\to r$，按优先级通常读成 $p \\land (q \\to r)$，意思从「下雨就够取消」变成「下雨，而且刮风才取消」。一个括号，两种承诺。

## 例题与分析

**例 1（易）**「小李既会弹琴又会画画。」

**分析**：$p \\land q$。「既…又…」是合取的标准说法，两项必须同时成立。若有人说「小李会弹琴，但他不会画画」，第一项仍真，整体为假——合取只要求有一项假就整体假。

**例 2（中）**「除非你道歉，否则我不原谅你。」

**分析**：「除非 $A$，否则 $B$」等于「如果不 $A$ 则 $B$」，即 $\\neg A \\to B$，也等值于 $A \\lor B$。这里 $A$ 是「你道歉」，$B$ 是「我不原谅你」。很多人写成 $A \\to B$，那变成「你一道歉我就不原谅你」，方向完全反了。

**例 3（难）**「只有年满十八岁的人，才有投票权。」

**分析**：「只有 $A$ 才 $B$」表示 $A$ 是 $B$ 的**必要条件**，即 $B \\to A$：有投票权 → 年满十八岁。若写成 $A \\to B$，就凭空断言「满十八岁就有投票权」。符号化的功夫，一大半用在辨认「如果」「只有」「除非」这几个词的方向上。

## 反例训练

> 只有努力才能成功。小王很努力，所以小王会成功。

**问题所在**：这是肯定后件。「只有 $A$ 才 $B$」是 $B \\to A$，加上「小王努力（$A$）」推不出 $B$。

$$B \\to A,\\ A \\therefore B$$

取 $A$ 真、$B$ 假：小王努力但没成功，完全可能。前提全真而结论假，形式无效。这类错误之所以常见，是因为「只有努力才能成功」听起来像在保证「努力就成功」，其实它只承诺反方向。

## 现实应用

- **读合同**：把「除非…否则…」逐条符号化，免责条款的方向写没写反，一眼可见。
- **写需求文档**：把「当 A 且 B 时执行 C」写成 $(A \\land B) \\to C$，开发和测试不会再对同一句话各有理解。
- **排查故障**：运维手册里「只有重启后才生效」写成「生效 → 已重启」，就不会误以为重启必然生效。
- **日常争论**：把对方的话写成公式，常发现双方其实在同一条公式上争括号的位置。

## 本节总结

**核心概念**：命题、命题变项、真值函项连接词、合式公式、符号化。

**关键规则**

1. 先判断是不是命题，再谈真假。
2. 括号决定承诺的范围，不能省。
3. 「只有 $A$ 才 $B$」是 $B \\to A$；「除非 $A$ 否则 $B$」是 $\\neg A \\to B$。

**常见错误**：把变项当成命题；漏写括号；把必要条件写成充分条件。

**需要掌握的能力**：把一句自然语言拆成「支命题 + 连接词」，并写出真值条件完全一致的公式。
`,quiz:[{id:"s3-01-q1",type:"single",stem:"在命题逻辑中，采用符号语言的两个主要好处是：",options:["让论证读起来更优美、更有说服力","消除自然语言的歧义，使论证的形式结构显露出来","代替事实核查，直接判定前提是否为真","省去对词义的分析，任何句子都能直接翻译"],answer:"B",explanation:"符号化的价值在于把模糊的自然语言固定成真假明确的公式，从而看清形式。它不负责判定前提真假，也不能跳过词义分析，更与说服力无关。",skill:"符号化的目的"},{id:"s3-01-q2",type:"judge",stem:"命题变项 $p$ 本身就是一个有真假的命题。",answer:!1,explanation:"命题变项是占位符，只有被指派具体命题或真值之后才有真假。把它当成一条断言，会导致「$p$ 是真的吗」这种无意义的问题。",skill:"命题变项"},{id:"s3-01-q3",type:"single",stem:"设 $R$ 表示「下雨」，$M$ 表示「比赛照常进行」。「除非下雨，否则比赛照常进行」应符号化为：",options:["$R \\to M$","$\\neg R \\to M$","$M \\to \\neg R$","$\\neg M \\to R$"],answer:"B",explanation:"「除非 A 否则 B」的含义是「若不 A 则 B」，即 $\\neg R \\to M$。把它读成「下雨才照常」的选项，与另外两个把充分必要方向整体颠倒的选项，都是同一个错误：没有先把「除非」改写成「如果不…就…」。遇到「除非」句先改写成「如果不…就…」，方向就不容易错。",skill:"除非否则的符号化"},{id:"s3-01-q4",type:"multi",stem:"设 $C$ 表示「拿到证书」，$E$ 表示「通过考试」。「只有通过考试，才能拿到证书」的等值符号化有哪些？（多选）",options:["$C \\to E$","$E \\to C$","$\\neg E \\to \\neg C$","$\\neg C \\to \\neg E$"],answer:["A","C"],explanation:"「只有 E 才 C」即 $C \\to E$；它的逆否命题 $\\neg E \\to \\neg C$ 与之等值。B 把必要条件当充分条件，D 是原命题的否前式，都不等值。做这类题先定箭头，再看能否取逆否，两步就能排除干扰项。",skill:"必要条件与逆否"},{id:"s3-01-q5",type:"short",stem:"为什么符号化时括号不能随便省略？请用一个例子说明省略括号会怎样改变原句的承诺。",keywords:[["括号","范围","辖域"],["真值条件","意思不同","承诺"],["例如","举例","下雨"]],answer:"括号划定连接词的作用范围，也就是公式的辖域。省略后按优先级重新结合，真值条件随之改变。例如「下雨并且刮风就取消比赛」，写成 $(p \\land q) \\to r$ 表示两项同时成立才取消，写成 $p \\land (q \\to r)$ 则表示「下雨，且刮风就取消」，即使不下雨也可能为真。",explanation:"要点是括号决定辖域，辖域决定真值条件，真值条件变了公式就不再是原句的符号化。举例说明两种读法在何种情况下真值不同即可。",skill:"括号与辖域"}]},{id:"s3-02",no:20,code:"8.2",title:"真值函项：简单陈述与复合陈述",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:13,lead:"「他没来，因为他病了」和「他没来，并且他病了」，两句话的真假条件一样吗？如果前者多说了点什么，那多出来的部分能不能塞进真值表？",objectives:["用「固定支命题真值看整体真值」的办法判断一个复合陈述是否真值函项","区分简单陈述与复合陈述，并指出复合陈述的支命题","解释为什么「因为…所以…」不能按合取处理"],concepts:["简单陈述","复合陈述","真值函项","支命题","非真值函项"],body:`
## 核心定义

**专业定义**：一个复合陈述是真值函项（truth-functional compound），当且仅当它的真值完全由它的支命题的真值决定——支命题的真值一旦确定，整体真值不可能有两种结果。

**通俗解释**：真值函项是一台只认真假、不认内容的机器。你把几个「真」「假」投进去，它吐出一个「真」或「假」，中间不问这些真假从哪来。

**关键术语**

- **简单陈述**：不含命题连接词的陈述，如「水在零度结冰」。
- **复合陈述**：含有至少一个连接词，且能分析出支命题的陈述。
- **支命题**：复合陈述里被连接词连接的那几个陈述。
- **真值函项**：整体真值被支命题真值完全决定的复合陈述。

**容易混淆的概念**

> 「复合」≠「真值函项」。所有真值函项都是复合陈述，但并非所有复合陈述都是真值函项。「因为…所以…」「…之后…」「必然…」「老王相信…」都是复合的，却不是真值函项的。

> 「支命题都真」≠「整体真」。在真值函项里，支命题真值组合决定整体真值，但具体怎么决定要看连接词，不是简单相加。

## 理论讲解

### 第一步：做一次「真值固定测试」

判断一个复合陈述是不是真值函项，用这个测试：把支命题的真值固定住，看整体真值是否还有两种可能。

「小王聪明并且勤奋」：两支都真，整体必真；没有第二种可能。是真值函项。

「小王没来，因为他病了」：假设「他没来」真、「他病了」真，整体仍可能假——也许他病得不重，也许他根本没打算来，那个「因为」说的因果关系不成立。整体真值超出了支命题真值，不是真值函项。

### 第二步：只保留真假层面的信息

对于非真值函项的连接词，命题逻辑的处理办法是：**降级处理**。做论证分析时，只保留它在真假上说得通的那一部分，其余（因果、时序、解释力）交给别的学科。

「他没来，因为他病了」在真假层面最接近 $p \\land q$：两句都真时整句为真，有一句假时整句为假。但这不是等值翻译，只是「取其在真假上最保守的读法」。教材的符号化题默认如此处理。

### 第三步：符号化示范

「如果下雨，那么地湿；但今天没下雨，所以地没湿。」

设 $p$：下雨；$q$：地湿。

前提一：$p \\to q$
前提二：$\\neg p$
结论：$\\neg q$

整体形式：$p \\to q,\\ \\neg p \\therefore \\neg q$

这个形式是否有效，是下一节之后要反复练的事；此处只需注意，符号化把「但」「所以」这些词全部剥掉，留下的只有 $\\to, \\neg$ 和三个位置。

## 例题与分析

**例 1（易）**「小张是医生，而且他姐姐是律师。」是不是真值函项？

**分析**：是。两个支命题真值一定，整体真值只能是：两者都真则真，否则假。合取是标准的真值函项。

**例 2（中）**「老王知道门锁了。」是不是真值函项？

**分析**：不是。「知道」包含两层：门确实锁了，且老王确信门锁了。若门其实没锁，这句为假；若门锁了而老王根本不知道，这句也为假。整体真假还取决于老王的心理状态，「老王认为门锁了」在门没锁时甚至可以为真。这类「命题态度」动词都不按真值表走。

**例 3（难）**「如果当时多等五分钟，就赶上那班车了。」这个反事实条件句能用真值表处理吗？

**分析**：不能。前件「当时多等五分钟」事实上为假。按实质蕴涵，前件假则整句真；可我们明明会用这句话表达遗憾与判断，它显然不靠「前件假」而自动为真。这类句子的真值取决于「与现实最接近的可能世界」，真值表接不住。命题逻辑只负责实质蕴涵，反事实条件句另作讨论。

## 反例训练

> 如果吸烟导致肺癌，那么吸烟者会得肺癌。老李得了肺癌，所以吸烟导致肺癌。

**问题所在**：把「$p \\to q$」与「$q \\to p$」混为一谈，即肯定后件。

$$p \\to q,\\ q \\therefore p$$

取 $p$ 假、$q$ 真：吸烟并不导致肺癌，但老李因其他原因得了肺癌。前提一为真（假前件使条件句为真），前提二为真，结论为假——反例行成立。注意这个反例还顺带说明：条件句为真不代表前后件之间有因果联系。

## 现实应用

- **数据库查询**：WHERE 子句只认真值函项，「AND / OR / NOT」可以任意组合并优化，而「因为」写不进 SQL。
- **法律要件**：侵权责任里的因果要件不是真值函项，所以法庭不能只看「有行为、有损害」两条都为真就判赔。
- **产品文案**：「因为专业，所以值得信赖」在真假层面只是两个断言并列，广告法查的也正是这两个断言各自是否可证。
- **写提示词**：指令若含「因为」，模型可能当作解释而非条件，改成明确的「若…则…」会稳定得多。

## 本节总结

**核心概念**：简单陈述、复合陈述、支命题、真值函项、非真值函项。

**关键规则**

1. 真值函项的判据是：支命题真值固定，整体真值唯一。
2. 合取、否定、析取、实质蕴涵、实质等值都是真值函项。
3. 因果、时序、模态、命题态度不是真值函项，符号化时只保留真假层面的部分。

**常见错误**：见到「复合」就当成真值函项；把「因为」直接等同于「并且」；把反事实条件句按实质蕴涵判真。

**需要掌握的能力**：拿到一句话，能判断它在真假层面归哪个连接词管，并说清这样处理丢了什么。
`,quiz:[{id:"s3-02-q1",type:"single",stem:"判断一个复合陈述是否为真值函项，最可靠的标准是：",options:["它是否含有「如果」「或者」这类连接词","支命题的真值确定后，整体真值是否只有一种可能","它是否在事实上为真","它是否由两个以上的简单陈述组成"],answer:"B",explanation:"真值函项的核心是整体真值被支命题真值完全决定。含连接词、由多句组成只是复合陈述的特征，不保证是真值函项；整体是否为真则与定义无关。",skill:"真值函项的判据"},{id:"s3-02-q2",type:"judge",stem:"「他没来，因为他病了」与「他没来，并且他病了」在真假条件上完全等同。",answer:!1,explanation:"前者断言因果关系，两句都真时仍可能因因果不成立而为假；后者只要求两支都真。命题逻辑可以把前者在真假层面按合取近似处理，但两者并不等值。",skill:"因果连接词"},{id:"s3-02-q3",type:"single",stem:"下列哪一句**不是**真值函项？",options:["小王既会游泳又会下棋","如果明天下雨，运动会就延期","老张相信小李已经到家了","小李没来，或者小王没来"],answer:"C",explanation:"「相信」是命题态度动词，其真假取决于老张的心理状态，而非「小李到家」的真值。其余三项分别由合取、蕴涵、析取决定，都是真值函项。",skill:"非真值函项"},{id:"s3-02-q4",type:"multi",stem:"关于「因为…所以…」，下列说法正确的有：（多选）",options:["它断言两个陈述之间有因果关系或解释关系","它的真值完全由前后两个支命题的真值决定","在真假层面可以用合取作近似处理","只要前后件都真，整句就一定为真"],answer:["A","C"],explanation:"「因为」表达因果或解释，这部分信息超出真假范围，因此 B、D 错。做命题逻辑分析时通常只保留其在真假上最保守的合取读法，故 C 对。",skill:"因果连接词"},{id:"s3-02-q5",type:"short",stem:"用「真值固定测试」说明「老王知道门锁了」为什么不是真值函项。",keywords:[["知道","心理状态","确信"],["门锁了","支命题","真值"],["整体真值","两种可能","不唯一"]],answer:"把支命题「门锁了」的真值固定为真，整句仍可能为假——老王也许根本不知道。若固定为假，整句也为假。可见整体真值还取决于老王是否确信，不只听支命题的，所以不是真值函项。",explanation:"关键是固定支命题真值后整体真值仍有两种可能，多出来的决定因素是主体的心理状态。答出这一点并具体说明两种情形即可。",skill:"命题态度动词"}]},{id:"s3-03",no:21,code:"8.3",title:"合取、否定与析取",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:15,lead:"妈妈出门前说：「你可以吃蛋糕或者冰淇淋。」你两样都拿了，妈妈说你不听话。她说的「或者」和逻辑学里的「或者」，到底差在哪里？",objectives:["写出 $\\neg$、$\\land$、$\\lor$ 的完整真值表并说明每一行的理由","把「但是」「然而」「既不…也不…」这类说法正确符号化","区分相容析取与排斥析取，并写出排斥析取的公式"],concepts:["否定","合取","析取","相容析取","排斥析取"],body:`
## 核心定义

**专业定义**：否定（negation）是一元连接词，$\\neg p$ 与 $p$ 真值相反。合取（conjunction）$p \\land q$ 在两支全真时为真，其余为假。析取（disjunction）$p \\lor q$ 在至少一支为真时为真，两支全假时为假。

**通俗解释**：否定是「翻面」，合取是「两个都得有」，析取是「有一个就行」。逻辑学的析取默认是「有一个就行」，不排除两个都有。

**关键术语**

- **否定词**：不、并非、没有、…是假的。
- **合取词**：并且、而且、但是、然而、虽然、同时、也。
- **析取词**：或者、或、要么（需看语境）。
- **相容析取**：允许两支同真，$p \\lor q$。
- **排斥析取**：恰有一支为真，$(p \\lor q) \\land \\neg(p \\land q)$。

**容易混淆的概念**

> 「或者」的两种用法必须分清。「你可以加糖或者加奶」通常是相容的，两样都加也行；「要么通过要么淘汰」是排斥的。命题逻辑的 $\\lor$ 只表示前者，后者要另外写出「不能两者兼有」。

> 否定 ≠ 反对。「我不赞成这个方案」不等于「我反对这个方案」，中间还有中立。$\\neg p$ 只否定 $p$ 本身，不额外断言相反的强主张。

## 理论讲解

### 第一步：否定的真值表

| $p$ | $\\neg p$ |
| --- | --- |
| 真 | 假 |
| 假 | 真 |

只有两行，因为否定只作用于一个支命题。双重否定 $\\neg\\neg p$ 与 $p$ 同真同假，这是后面替换规则里的双否律。

### 第二步：合取与析取的真值表

| $p$ | $q$ | $p \\land q$ | $p \\lor q$ |
| --- | --- | --- | --- |
| 真 | 真 | 真 | 真 |
| 真 | 假 | 假 | 真 |
| 假 | 真 | 假 | 真 |
| 假 | 假 | 假 | 假 |

合取只有第一行为真：要求两条同时成立。析取只有最后一行为假：只要求不是两条都落空。记住这两行，后面所有真值表都靠它们搭起来。

### 第三步：符号化示范

「小王不但会英语，而且会法语，但他不会德语。」

设 $p$：会英语；$q$：会法语；$r$：会德语。

$$(p \\land q) \\land \\neg r$$

「但」在真假上就是「并且」，它表达的是说话人的对比语气，不改变真值条件。这类词叫合取的修辞变体：但是、然而、却、虽然、尽管，符号化时一律写 $\\land$。

若要表达排斥析取，例如「要么小王去，要么小李去，不能都去」：

$$(p \\lor q) \\land \\neg(p \\land q)$$

## 例题与分析

**例 1（易）**「小张没来，小王也没来。」

**分析**：$\\neg p \\land \\neg q$。注意它不等值于 $\\neg(p \\land q)$——后者只说「不是两个都来」，允许来一个。这是德摩根律要处理的地方。

**例 2（中）**「并非小王既会弹琴又会画画。」

**分析**：$\\neg(p \\land q)$。按德摩根律等值于 $\\neg p \\lor \\neg q$：或者不会弹琴，或者不会画画。日常听感容易读成「两样都不会」，那是 $\\neg p \\land \\neg q$，比原句强得多。

**例 3（难）**「甲：这次考试要么题难，要么我没复习好。乙：不对。请问乙否定了什么？」

**分析**：「要么…要么…」在排斥读法下是 $(p \\lor q) \\land \\neg(p \\land q)$。乙说「不对」，否定的是整个式子，等值于「要么两样都成立，要么两样都不成立」。若按相容析取理解，否定只是 $\\neg p \\land \\neg q$。乙的否定内容取决于甲的「要么」取哪种读法——歧义就在这里，符号化的第一项任务正是把它固定下来。

## 反例训练

> 小王会英语或者会法语。小王会英语，所以他不会法语。

**问题所在**：把相容析取当成了排斥析取。

$$p \\lor q,\\ p \\therefore \\neg q$$

取 $p$ 真、$q$ 真：小王两样都会。两个前提都真，结论假。反例行成立。

要救这个推理，必须把前提一改成排斥析取 $(p \\lor q) \\land \\neg(p \\land q)$，此时结论才被推出。日常对话里「或者」常被听成排斥的，这正是许多「你怎么两样都要」式争执的逻辑根源。

## 现实应用

- **搜索结果**：搜索引擎的 OR 是相容析取，输入「律师 OR 教师」会同时返回两类人，想让结果互斥得另加排除条件。
- **电路设计**：与门、或门、非门就是 $\\land, \\lor, \\neg$ 的物理实现，真值表直接对应电平高低。
- **合同条款**：「甲方或乙方有权解除」若按相容读法，双方可同时行使；律师会补一句「但不得双方同时行使」来改成排斥析取。
- **保险理赔**：条款里「意外或者疾病导致」通常按相容处理，但赔付上限往往另有约定，读条款时要分开看。

## 本节总结

**核心概念**：否定、合取、析取、相容析取、排斥析取。

**关键规则**

1. $\\neg$ 翻面；$\\land$ 两支全真才真；$\\lor$ 两支全假才假。
2. 「但是」「然而」在真假上是合取，只带语气不带逻辑。
3. $\\lor$ 默认相容；要排斥必须另加 $\\neg(p \\land q)$。

**常见错误**：把「或者」一律读成排斥；把 $\\neg(p \\land q)$ 读成「两个都不」；忽略「但」也是合取。

**需要掌握的能力**：看到含「并且/或者/不」的句子，立刻写出公式并能列出对应真值行。
`,quiz:[{id:"s3-03-q1",type:"single",stem:"$p \\lor q$ 为假的唯一情形是：",options:["$p$ 真 $q$ 假","$p$ 假 $q$ 真","$p$ 假 $q$ 假","$p$ 真 $q$ 真"],answer:"C",explanation:"相容析取只要求至少一支为真，因此只有两支全假时才为假。前三种情形都至少有一支真，析取式为真。",skill:"析取真值表"},{id:"s3-03-q2",type:"judge",stem:"「小张没来，小王也没来」与「并非小张和小王都来了」意思相同。",answer:!1,explanation:"前者是 $\\neg p \\land \\neg q$，两个都没来；后者是 $\\neg(p \\land q)$，只否认两人同来，允许来一个。否定移到括号外，作用范围变大，断言反而变弱，二者并不等值。",skill:"否定的辖域"},{id:"s3-03-q3",type:"single",stem:"「要么你去，要么我去，不能都去」的正确符号化是：",options:["$p \\lor q$","$p \\land q$","$(p \\lor q) \\land \\neg(p \\land q)$","$\\neg p \\land \\neg q$"],answer:"C",explanation:"排斥析取要求恰有一真：至少一个去，且不能都去。A 是相容析取，B 是都去，D 是都不去，三者都与原句不符。",skill:"排斥析取"},{id:"s3-03-q4",type:"multi",stem:"下列哪些说法可符号化为合取？（多选）",options:["他虽然累，但还在坚持","他累了，或者他在偷懒","他既当教练，又当队员","他不是不想去"],answer:["A","C"],explanation:"「虽然…但…」「既…又…」在真假条件上都是两支同时成立，属合取。B 是析取；D 是双重否定，等值于「他想去」，不是合取。",skill:"合取的修辞变体"},{id:"s3-03-q5",type:"short",stem:"「小王会英语或者会法语。小王会英语，所以他不会法语。」为什么无效？请写出形式并用反例指派说明。",keywords:[["相容析取","析取","或者"],["两个都真","同真","都会"],["前提真结论假","反例","无效"]],answer:"形式是 $p \\lor q,\\ p \\therefore \\neg q$。$\\lor$ 是相容析取，允许两支同真；取 $p$ 真 $q$ 真，即小王两样都会，两个前提都真而结论假，所以无效。只有把前提改成排斥析取才能推出结论。",explanation:"要点是识破把相容析取读成排斥析取，并给出两支同真的反例指派。仅说「或者有两种意思」而不给指派，说明还不完整。",skill:"相容析取与排斥析取"}]},{id:"s3-04",no:22,code:"8.4",title:"条件陈述与实质蕴涵",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:16,lead:"「如果地球是方的，那么 2 加 2 等于 4。」这句话算真还是算假？前件荒唐透顶，后件千真万确。逻辑学给出的答案，可能会让你不太舒服。",objectives:["写出 $p \\to q$ 的真值表并说明为什么只有一行是假","解释空真现象，并说明它不是日常用语的直觉","区分充分条件与必要条件，正确读「如果」与「只有」"],concepts:["实质蕴涵","前件","后件","空真","充分条件","必要条件"],body:`
## 核心定义

**专业定义**：实质蕴涵（material implication）$p \\to q$ 只在一种情形下为假——前件 $p$ 真而后件 $q$ 假。其余三种情形一律为真。

**通俗解释**：条件句是一张「空头支票」。它承诺：只要前件兑现，后件一定兑现。唯一算违约的情形，就是前件兑现了、后件没兑现。

**关键术语**

- **前件（antecedent）**：箭头左边的陈述。
- **后件（consequent）**：箭头右边的陈述。
- **空真（vacuous truth）**：前件为假时，整个条件句按定义为真。
- **充分条件**：$p$ 足以保证 $q$，即 $p \\to q$。
- **必要条件**：$q$ 是 $p$ 成立所必需的，即 $p \\to q$ 中 $q$ 的地位。

**容易混淆的概念**

> 实质蕴涵 ≠ 日常「如果…那么…」。日常条件句常带因果、推断、反事实的意味，实质蕴涵只保留真假关系。教材明确把这一层剥掉，是为了让真值表能算。

> 空真 ≠ 胡说。空真不是说这句话有意义或有信息量，只是说它没有被前件兑现、因而没有违约。真假与信息量是两件事。

## 理论讲解

### 第一步：列出四行，只留一行假

| $p$ | $q$ | $p \\to q$ |
| --- | --- | --- |
| 真 | 真 | 真 |
| 真 | 假 | 假 |
| 假 | 真 | 真 |
| 假 | 假 | 真 |

第二行是唯一的违约情形。第三、四行前件没兑现，承诺没有被检验，按定义算真。

### 第二步：理解为什么这样定义

若把前件假的情形判为假，那么「如果明天下雨，运动会就延期」在明天没下雨时就成了假话，等于说天气预报错了。这显然不合理：说话人并没有承诺明天一定下雨。为了让条件句在「前件未发生」时不被冤枉，逻辑学选择让它为真。

这也带来一个结果：前件假时，$p \\to q$ 与 $p \\to \\neg q$ 同时为真。空真不区分后件内容，这是实质蕴涵的代价，也是它的可用之处。

### 第三步：符号化示范

「如果一个人是北京人，那么他是中国人。」

设 $p$：是北京人；$q$：是中国人。

$$p \\to q$$

反过来，「只有是北京人，才是中国人」是 $q \\to p$，现实为假。同一对支命题，箭头方向不同，真假完全不同。写条件句的第一件事，是确定箭头从谁指向谁：**充分条件放左边，必要条件放右边**。

## 例题与分析

**例 1（易）**「如果 1 加 1 等于 3，那么雪是黑的。」真值如何？

**分析**：前件假，按实质蕴涵为真。这句话在逻辑上为真，尽管它毫无信息量、也谈不上什么道理。练习题常在这里设陷阱：问「真假」答「真」，问「有没有意义」才是另一回事。

**例 2（中）**「除非你提交申请，否则不予受理。」

**分析**：$\\neg A \\to \\neg B$，其中 $A$ 提交申请，$B$ 予以受理。等值于 $B \\to A$：被受理了，就说明提交了申请。注意「否则」提供的是否定后的前件，漏掉否定是高频错误。

**例 3（难）**「如果得了肺炎，就会发烧。」医生说这话，能否推出「没得肺炎就不会发烧」？

**分析**：不能。原句是 $p \\to q$，后者是 $\\neg p \\to \\neg q$，属否定前件。发烧的原因很多。原句只说明肺炎是发烧的充分条件，没有说它是必要条件。要表达「没得肺炎就不发烧」，得写成 $\\neg p \\to \\neg q$，而这是另一个更强的主张，需要另行论证。

## 反例训练

> 如果他是北京人，那么他是中国人。他不是北京人，所以他不是中国人。

**问题所在**：否定前件。

$$p \\to q,\\ \\neg p \\therefore \\neg q$$

取 $p$ 假、$q$ 真：他是上海人，仍是中国公民。前提一为真（前件假），前提二为真，结论为假。反例行成立。

这个错误的迷惑性在于前提一确实为真、结论在多数场合也确实为真。但「多数场合为真」不是有效性，有效性要求的是没有任何一行能让前提真结论假——这里恰好有一行。

## 现实应用

- **写代码**：if 语句就是 $p \\to q$，前件不成立时分支不执行，程序并不因此出错，这与空真同构。
- **签合同**：「若甲方逾期，则按日万分之五支付违约金」只在逾期且未付时才构成违约，未逾期时条款不被触发。
- **医学筛查**：「若感染，则抗原阳性」不能反推「阳性一定感染」，还要看假阳性率，这正是肯定后件的现实版本。
- **承诺管理**：别人说「如果我到得早，就帮你占座」，他没到早并不算失信；失信只在到了早却没占座时发生。

## 本节总结

**核心概念**：实质蕴涵、前件、后件、空真、充分条件、必要条件。

**关键规则**

1. $p \\to q$ 只在 $p$ 真 $q$ 假时为假。
2. 前件假则整句真，这叫空真，不是错误。
3. 充分条件在左，必要条件在右；「只有 $A$ 才 $B$」是 $B \\to A$。

**常见错误**：把条件句读成因果句；由 $p \\to q$ 推 $q \\to p$；由 $p \\to q$ 与 $\\neg p$ 推 $\\neg q$；把空真当成「这句话没意义」。

**需要掌握的能力**：给任意条件句快速定箭头方向，并用真值表判定它在各种情形下的真假。
`,quiz:[{id:"s3-04-q1",type:"single",stem:"$p \\to q$ 为假的情形是：",options:["$p$ 真 $q$ 真","$p$ 真 $q$ 假","$p$ 假 $q$ 真","$p$ 假 $q$ 假"],answer:"B",explanation:"实质蕴涵只在前件真、后件假时算违约，即整句为假。前件为假时承诺未被检验，无论后件真假整句都为真。",skill:"实质蕴涵真值表"},{id:"s3-04-q2",type:"judge",stem:"前件为假时，条件句 $p \\to q$ 一定为假，因为这句话没有兑现。",answer:!1,explanation:"恰好相反，前件假时 $p \\to q$ 为真，这叫空真。承诺只在被触发时才谈得上兑现与否，前件未成立就没有违约，故不能判假。",skill:"空真"},{id:"s3-04-q3",type:"single",stem:"「只有年满十八岁，才有选举权」的正确符号化是（$E$：年满十八岁，$V$：有选举权）：",options:["$E \\to V$","$V \\to E$","$\\neg E \\to V$","$\\neg V \\to \\neg E$"],answer:"B",explanation:"「只有 E 才 V」表示 E 是 V 的必要条件，即 $V \\to E$。A 把它读成充分条件；C 方向与否定都用错；D 与否前式同形，并不等值于原句。",skill:"必要条件"},{id:"s3-04-q4",type:"multi",stem:"下列哪些与 $p \\to q$ 等值？（多选）",options:["$\\neg p \\lor q$","$\\neg q \\to \\neg p$","$q \\to p$","$\\neg(p \\land \\neg q)$"],answer:["A","B","D"],explanation:"蕴涵律给出 $\\neg p \\lor q$，假言易位给出 $\\neg q \\to \\neg p$，D 是同一意思的合取否定写法。C 是逆命题，与原句不等值。把四个选项统统化成析取式再比对，最不容易看走眼。",skill:"条件句的等值式"},{id:"s3-04-q5",type:"short",stem:"「如果得了肺炎，就会发烧」能否推出「没得肺炎就不会发烧」？请写出两个形式并说明理由。",keywords:[["否定前件","逆命题","方向"],["充分条件","必要条件","不必要"],["反例","其他原因","无效"]],answer:"不能。原句是 $p \\to q$，后者是 $\\neg p \\to \\neg q$，属否定前件。肺炎只是发烧的充分条件而非必要条件，其他疾病也会引起发烧，取 $p$ 假 $q$ 真即可让前提真而结论假。",explanation:"要点是指出这是否定前件，并说明充分条件不蕴含必要条件。能给出「没得肺炎但因别的病发烧」这一反例指派，说明掌握到位。",skill:"否定前件谬误"}]},{id:"s3-05",no:23,code:"8.5",title:"论证形式与逻辑类推的反驳",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:15,lead:"有人对你说：「这家公司需要忠诚的员工，你很忠诚，所以公司需要你。」听起来挺顺，可哪里不对劲？如果换成一个更荒唐的例子，毛病会不会自己跳出来？",objectives:["从一段具体论证中抽取它的形式骨架","用逻辑类推构造同形式的反例，反驳一个无效论证","分清「反驳论证形式」与「反驳结论内容」两件事"],concepts:["论证形式","代入实例","逻辑类推","反例","形式谬误"],body:`
## 核心定义

**专业定义**：论证形式是从具体论证中抽去具体词项、只留下连接词与变项位置的骨架。逻辑类推（logical analogy）指用同一形式、换一套词项构造新论证；若新论证前提全真而结论明显为假，原形式即被证明无效。

**通俗解释**：要检验一件衣服的版型有没有问题，最好的办法是换个人来试穿。逻辑类推就是「换个人试穿」：形式不变，内容换成一眼能看出真假的东西。

**关键术语**

- **论证形式**：如 $p \\to q,\\ p \\therefore q$ 这样的骨架。
- **代入实例**：把变项换成具体陈述后得到的论证。
- **反例**：前提真、结论假的代入实例。
- **形式谬误**：形式本身无效，无论内容怎么换都救不回来。

**容易混淆的概念**

> 反驳论证 ≠ 反驳结论。「你这话推不出来」与「你的结论是假的」是两句话。推不出来时，结论仍可能碰巧为真。

> 指出形式无效 ≠ 说明前提假。二者是两条独立的检查线，混在一起就会互相掩护。

## 理论讲解

### 第一步：把具体词项挖空

原话：「这家公司需要忠诚的员工，你很忠诚，所以公司需要你。」

挖空：这家公司需要 $F$；$x$ 是 $F$；所以这家公司需要 $x$。

骨架：$R(F),\\ F(x) \\therefore R(x)$

注意「需要忠诚的员工」与「需要你」里的「需要」被当成同一个谓词保留下来 —— 这恰恰是问题埋藏的地方。

### 第二步：换一套词项，造类推

同一骨架，换成另一个场景：

> 这支球队需要高大的中锋；姚明高大；所以这支球队需要姚明。

前提一看就真，前提二也真，结论荒唐：球队需要的是「一个高大的中锋」这个位置，不是姚明这个人。原论证的毛病因此暴露。

### 第三步：判定并说明理由

类推成功，说明原形式无效。失效的根源是**偷换论域**：前提一说的是「需要某一类人」，结论说的是「需要某个个体」。类与个体不能这样直接过渡。

再看一个命题逻辑层面的例子：

> 如果下雨，地就湿；地湿了；所以下雨了。

形式 $p \\to q,\\ q \\therefore p$。类推：「如果他是北京人，他就是中国人；他是中国人；所以他是北京人。」前提全真、结论假，形式无效。

## 例题与分析

**例 1（易）**「所有金属都导电，铁是金属，所以铁导电。」请写出形式。

**分析**：所有 $M$ 是 $P$；$x$ 是 $M$；所以 $x$ 是 $P$。这是典型的三段论第一格，形式有效，与内容无关。换成「所有猫是动物，橘猫是猫，所以橘猫是动物」，同样成立。

**例 2（中）**「他一定很有钱，因为他开豪车。」这个论证缺了什么？

**分析**：省略了一个前提：「开豪车的人一定很有钱」。补全后形式为 $p \\to q,\\ p \\therefore q$，形式有效。问题回到那个被省略的前提上——它是否为真，是另一项检查。这类论证叫省略论证，考试里要先把省略部分补出来再评价。

**例 3（难）**「说这种话的人不可信，因为说谎的人不可信，而他说的正是谎话。」这个论证哪里出了问题？

**分析**：表面形式是「说谎者不可信；他是说谎者；所以他不可信」，看似有效。但第一个前提实际需要的是「他是说谎者」这一断定，而论证给出的理由只是「他说的是谎话」。「说了一句谎话」与「是说谎者（惯于说谎）」不是一回事，中间偷换了概念。用逻辑类推检验：「偷东西的人该受罚；他偷过一次东西；所以他该受罚」——结论能否成立取决于「偷过一次」是否足以构成「偷东西的人」，而这正是需要论证的地方。这是**偷换概念**，属实质谬误，形式上看不出来。

## 反例训练

> 公司需要忠诚的员工；小张很忠诚；所以公司需要小张。

**问题所在**：把「需要某一类」偷换成「需要某一个」。

用类推固定形式：

$$R(\\text{忠诚的员工}),\\ F(\\text{小张}) \\therefore R(\\text{小张})$$

换成「这支球队需要高大的中锋；姚明高大；所以球队需要姚明」，前提真而结论假，反例成立。若强行写成 $p \\to q,\\ p \\therefore q$，反倒看不出毛病，因为真正的病灶在「忠诚的员工」与「小张」这两个词项的错位，而不在连接词。

## 现实应用

- **拆穿广告**：「医生推荐这个品牌」推出的往往是「医生推荐某一类成分」，逻辑类推一换就露馅。
- **评估管理话术**：「团队需要敢于直言的人，你很敢说，所以团队需要你」——团队需要的是角色，不是任意一个符合标签的人。
- **学术审稿**：把论文的推理抽成形式，再找同形式的荒谬类推，比逐句读更快发现漏洞。
- **自我检查**：写完论证后自己造一个同形式的笑话版，若笑话版成立，原论证就危险了。

## 本节总结

**核心概念**：论证形式、代入实例、逻辑类推、反例、形式谬误。

**关键规则**

1. 评价论证先抽形式，再看形式是否允许前提真结论假。
2. 逻辑类推必须保持形式不变，只换词项。
3. 类推出的反例要满足两个条件：前提确实为真，结论确实为假。

**常见错误**：换词项时顺手把形式也改了；把「结论荒谬」当成「形式无效」；忽略省略前提。

**需要掌握的能力**：三十秒内给一段自然语言论证画出骨架，并造出一个有力的类推反例。
`,quiz:[{id:"s3-05-q1",type:"single",stem:"用逻辑类推反驳一个论证，正确的做法是：",options:["指出结论与常识不符","保持论证形式不变，替换词项造出前提真结论假的例子","证明该论证的某个前提为假","找出一段结论相同的权威论述"],answer:"B",explanation:"逻辑类推针对的是形式：形式不变、内容替换，若能得到前提全真结论假，形式即无效。指出结论荒谬或前提为假，都没有触及形式本身。",skill:"逻辑类推"},{id:"s3-05-q2",type:"judge",stem:"只要能说明一个论证的结论是假的，就足以证明它的形式无效。",answer:!1,explanation:"结论假可能源于前提假，形式仍可能有效。有效性只关心「前提真时结论会不会假」；要证明无效，必须给出前提全真而结论假的反例。",skill:"有效性与结论真假"},{id:"s3-05-q3",type:"single",stem:"「这支球队需要高大的中锋；姚明高大；所以球队需要姚明」这一类推用来说明原论证：",options:["前提为假","结论为真但推理跳跃","形式无效，把「需要某一类」偷换成「需要某个个体」","形式有效，只是内容不妥"],answer:"C",explanation:"类推的前提显然为真、结论显然为假，因此同形式的原论证无效。病灶在类与个体的偷换，属于词项层面的错位，不在连接词。",skill:"偷换概念的谬误"},{id:"s3-05-q4",type:"multi",stem:"评价一个论证时，下列哪些属于彼此独立的检查项？（多选）",options:["前提在事实上是否为真","形式是否允许前提真而结论假","结论是否符合多数人的看法","是否有省略的前提需要补全"],answer:["A","B","D"],explanation:"前提真假、形式有效性、省略前提的补全，是三项独立工作。多数人的看法与论证好坏无关，诉诸众意本身也是一种谬误。",skill:"论证评价的维度"},{id:"s3-05-q5",type:"short",stem:"请为形式「如果 $p$ 则 $q$；$q$；所以 $p$」造一个逻辑类推反例，并说明它证明了什么。",keywords:[["前提真","结论假","反例"],["肯定后件","形式无效"],["例如","北京人","中国人"]],answer:"例：如果他是北京人，那么他是中国人；他是中国人；所以他是北京人。前提一为真，前提二为真，结论却可能为假（他可以是上海人）。这说明该形式无效，属于肯定后件的谬误。",explanation:"反例必须同时满足两个条件：两个前提确实为真，结论确实为假。答出「肯定后件」这一谬误名称，说明能把具体例子归入已有类型。",skill:"肯定后件谬误"}]},{id:"s3-06",no:24,code:"8.6",title:"「有效」与「无效」的精确含义",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:14,lead:"一个论证前提全是假的，它还有可能有效吗？反过来，一个论证前提全真、结论也真，它一定有效吗？这两个问题的答案，会推翻很多人的直觉。",objectives:["用「是否存在反例行」给出有效与无效的精确判据","说明有效性、真实性、健全性三者的关系","举出前提假而形式有效、结论真而形式无效的例子"],concepts:["有效性","无效性","反例行","健全性","形式属性"],body:`
## 核心定义

**专业定义**：一个演绎论证是有效的（valid），当且仅当不可能出现前提全真而结论假的情形。换言之，在一切使前提为真的真值指派下，结论都为真。无效（invalid）则相反：至少存在一种指派，使全部前提为真而结论为假，这一行叫**反例行**。

**通俗解释**：有效说的是「前提真时结论跑不掉」。它是一句关于可能性的断言，不是关于现实世界的断言，更不是关于说话人诚意的断言。

**关键术语**

- **反例行**：真值表中前提全真、结论为假的那一行。
- **健全（sound）**：论证有效，且所有前提事实上为真。
- **形式属性**：有效性只取决于形式，不取决于具体内容。

**容易混淆的概念**

> 有效 ≠ 真。有效性属于论证，真假属于陈述。说「这个论证是真的」是范畴错误。

> 无效 ≠ 结论假。无效只说明前提没锁住结论，结论可能碰巧为真。

> 有效 + 前提假 = 仍然有效。前提假只影响健全性，不影响有效性。

## 理论讲解

### 第一步：把定义换成可操作的判据

有效性不能用「我觉得推得通」来判断，只能用「能不能找到反例行」来判断。找不到反例行，并且能证明找不到，才算有效。

$$\\text{有效} \\iff \\text{不存在「前提全真、结论假」的指派}$$

### 第二步：看清有效性与事实的分离

看这个论证：

> 所有鱼都会飞；鲸是鱼；所以鲸会飞。

前提一假、前提二假、结论也假。但形式是「所有 $M$ 是 $P$；$x$ 是 $M$；所以 $x$ 是 $P$」，这个形式没有任何一行能让前提真而结论假。因此它**有效**。有效性管的是「如果前提真，结论会不会真」，这里的前提实际上没真过，条件句空真。

再看反方向：

> 今天是星期三；所以 2 加 2 等于 4。

前提可能真，结论也真，但两者毫无形式联系。换一天，前提真而结论假（若 2 加 2 不等于 4）是可能的，所以无效。

### 第三步：符号化示范与判定

「如果下雨，地就湿；如果地湿，路就滑；所以如果路滑，就下雨。」

设 $p$：下雨；$q$：地湿；$r$：路滑。

$$(p \\to q) \\land (q \\to r) \\therefore r \\to p$$

取 $p$ 假、$q$ 真、$r$ 真：不下雨，但地湿（洒水车），路滑。两个前提都真，结论「路滑就下雨」为假。反例行存在，论证无效。

## 例题与分析

**例 1（易）**「所有猫都是动物，所有狗都是猫，所以所有狗都是动物。」有效吗？健全吗？

**分析**：形式有效（三段论第一格）。前提二「所有狗都是猫」为假，所以不健全。这个例子说明：有效性与健全性必须分开报，混着说会让人以为你在批评形式。

**例 2（中）**「小王住在北京，所以小王住在中国。」有效吗？

**分析**：表面上只有两个陈述，实际省略了前提「北京在中国」。补全后是 $p \\to q,\\ p \\therefore q$，有效。评估自然语言论证时，补全省略前提是常规操作；补完之后再看形式。

**例 3（难）**某数学家证明了一个定理，其证明长达百页。我们能说「这个定理为真，所以证明有效」吗？

**分析**：不能。定理为真与证明有效是两件事：证明可能在某个引理处用了未被证明的假设，也可能整体有效但因为排版错误读起来跳跃。反方向同样不成立：一个无效证明碰巧导出真结论，在数学实践中并不罕见。逻辑学只评价「前提（公理与已证定理）到结论的这一步是否被锁住」。

## 反例训练

> 如果下雨，地就湿；如果地湿，路就滑；所以如果路滑，就下雨。

**问题所在**：把「$p \\to r$」偷换成「$r \\to p$」，即把充分条件当成必要条件。

$$p \\to q,\\ q \\to r \\therefore r \\to p$$

反例指派：$p$ 假、$q$ 真、$r$ 真。前提一真（假前件），前提二真，结论假。反例行存在，形式无效。

请注意，原论证的两个前提本身都为真，结论在现实中往往也为真——这正是它骗人的地方。有效性问的是「能不能有一行让结论翻车」，而这一行确实存在。

## 现实应用

- **读判决书**：法院说「证据不足，不予采信」，说的是证明没达到标准，不等于事实没发生。这与「无效不等于结论假」同构。
- **代码评审**：测试全绿（结论真）不代表测试覆盖了所有分支（形式有效）。覆盖率报告就是找反例行的工程版本。
- **数据论证**：「样本平均值上升，所以总体上升」——只要能构造一个抽样偏差的反例场景，这个推理就无效。
- **自我复盘**：把「我说得对」与「我论证得对」分开写两栏，能有效减少争论中的自我辩护。

## 本节总结

**核心概念**：有效性、无效性、反例行、健全性。

**关键规则**

1. 有效 = 不存在前提真结论假的行；无效 = 存在这样的行。
2. 有效性与前提真假无关，健全性才要求前提为真。
3. 判定无效最省力的办法是给出一行反例指派。

**常见错误**：把结论假当作无效的证据；把前提真当作有效的证据；把「有道理」当成「有效」。

**需要掌握的能力**：对任一论证，能明确回答「有效吗」「健全吗」两个独立问题，并为无效论证指出具体反例行。
`,quiz:[{id:"s3-06-q1",type:"single",stem:"一个演绎论证有效，意味着：",options:["它的前提和结论在事实上都为真","不可能出现前提全真而结论假的情形","它的结论被多数人接受","它的前提能够推出结论的部分内容"],answer:"B",explanation:"有效性是关于可能性的断言：没有任何真值指派能让前提全真而结论假。它与事实真假、公众接受度都无关，也不允许只推出部分内容。",skill:"有效性的定义"},{id:"s3-06-q2",type:"judge",stem:"前提全部为假的论证一定无效。",answer:!1,explanation:"有效性只看形式。「所有鱼会飞；鲸是鱼；所以鲸会飞」前提全假，形式却有效。前提假影响的是健全性，不影响有效性。",skill:"有效性与前提真假"},{id:"s3-06-q3",type:"single",stem:"「今天是星期三，所以 2 加 2 等于 4」这一论证属于：",options:["有效且健全","有效但不健全","无效，尽管前提与结论都真","无法判断，因为涉及数学"],answer:"C",explanation:"前提与结论之间没有任何形式联系，可以设想前提真而结论假的指派，因此无效。结论碰巧为真不能挽救形式，这正是「无效不等于结论假」。",skill:"无效性的判定"},{id:"s3-06-q4",type:"multi",stem:"关于健全性，下列说法正确的有：（多选）",options:["健全的论证一定有效","有效的论证一定健全","健全的论证所有前提事实上为真","前提全真且形式有效的论证是健全的"],answer:["A","C","D"],explanation:"健全 = 有效 + 前提全真，三者说法一致。B 错在有效论证可能有假前提，例如前提全假的那些有效形式实例。",skill:"健全性"},{id:"s3-06-q5",type:"short",stem:"为什么「前提全假但形式有效」的论证仍然算有效？请结合有效性的定义说明。",keywords:[["前提真","结论假","不存在"],["形式","真值指派","反例行"],["空真","条件","不冲突"]],answer:"有效性说的是：不存在使前提全真而结论假的指派。前提全假时，这个条件从未被触发，因此不构成反例。就像一张从未被兑现的支票谈不上违约，论证仍算有效，只是不健全。",explanation:"关键是把有效性理解为关于所有可能指派的否定性断言，而不是对现实前提的描述。答出「不存在反例行」并举支票或空真类比即可。",skill:"有效性与空真"}]},{id:"s3-07",no:25,code:"8.7",title:"完备真值表方法",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:17,lead:"两个变项的真值表只有四行，三个变项八行，四个变项十六行。行数这样翻倍下去，为什么逻辑学家还认为这是一套「一劳永逸」的判定办法？",objectives:["按 $2^n$ 规则为标准真值表列出全部真值指派","按「先支命题、后整体」的顺序填表并判定论证有效性","在无效时准确指出反例行所在的整行"],concepts:["完备真值表","真值指派","支命题列","反例行","判定程序"],body:`
## 核心定义

**专业定义**：完备真值表方法把一个论证中所有变项的全部真值组合穷举出来，逐行计算每个支命题与整个前提、结论的真值。若存在一行使全部前提真而结论假，论证无效；若不存在这样的行，论证有效。

**通俗解释**：这是最笨也最可靠的办法——把所有可能性排成一张表，一行一行查，查到「前提真、结论假」就判无效，查完全表都没有就判有效。

**关键术语**

- **真值指派**：给每个变项指定真或假的一种组合。
- **$2^n$ 规则**：$n$ 个变项共有 $2^n$ 种指派，即表格有 $2^n$ 行。
- **支命题列**：为便于计算而增设的中间列。
- **反例行**：前提全真、结论假的那一行。

**容易混淆的概念**

> 行数按变项个数算，不按陈述个数算。同一个变项在论证里出现五次，仍只算一个变项。看到 $p, q, r$ 就是八行，不是按句子数乘。

> 完备真值表判定的是形式有效性，与前提在现实中真假无关。表中那些前提为假的行，照样要算进去。

## 理论讲解

### 第一步：数变项，定行数

变项集合是 $\\{p, q, r\\}$，$n = 3$，共 $2^3 = 8$ 行。

列指派的规矩是二分法：第一列前四行真、后四行假；第二列两真两假交替；第三列逐行交替。这样既不重复也不遗漏。

### 第二步：先算支命题，再算整体

以论证 $p \\to q,\\ q \\to r \\therefore p \\to r$ 为例，先列 $p \\to q$ 与 $q \\to r$ 两列，最后才列结论列。中间列写清楚，出错时能一眼定位在哪一步算错。

### 第三步：读表判定

| $p$ | $q$ | $r$ | $p \\to q$ | $q \\to r$ | $p \\to r$ |
| --- | --- | --- | --- | --- | --- |
| 真 | 真 | 真 | 真 | 真 | 真 |
| 真 | 真 | 假 | 真 | 假 | 假 |
| 真 | 假 | 真 | 假 | 真 | 真 |
| 真 | 假 | 假 | 假 | 真 | 假 |
| 假 | 真 | 真 | 真 | 真 | 真 |
| 假 | 真 | 假 | 真 | 假 | 真 |
| 假 | 假 | 真 | 真 | 真 | 真 |
| 假 | 假 | 假 | 真 | 真 | 真 |

逐行找「两个前提都真、结论假」：第一行结论真，第二行前提二假，第三行前提一假……八行查完，没有一行符合。判定：有效。

### 第四步：写出结论的规范说法

判定为有效时，标准表述是「不存在前提全真而结论假的行」；判定为无效时，必须指名道姓：「第某行，$p$ 假 $q$ 真 $r$ 真，前提全真而结论假。」只写「无效」而不给行，等于没做完。

## 例题与分析

**例 1（易）**用真值表判定 $p \\land q \\therefore p$。

**分析**：

| $p$ | $q$ | $p \\land q$ | $p$ |
| --- | --- | --- | --- |
| 真 | 真 | 真 | 真 |
| 真 | 假 | 假 | 真 |
| 假 | 真 | 假 | 假 |
| 假 | 假 | 假 | 假 |

只有第一行前提为真，结论也为真。无反例行，有效。这正是简化式。

**例 2（中）**判定 $p \\lor q,\\ p \\to r,\\ q \\to r \\therefore r$。

**分析**：三变项八行。凡是 $p \\lor q$ 为真的行，$p$ 或 $q$ 至少一真；再由相应条件句得 $r$ 真。逐一检查可知没有一行能让三个前提全真而 $r$ 假，故有效。这个形式叫构造性二难的一个变体，后面会作为规则背下来。

**例 3（难）**判定 $(p \\land q) \\to r,\\ \\neg r \\therefore \\neg p \\lor \\neg q$。

**分析**：前件真时结论才受考验。$\\neg r$ 为真即 $r$ 假，此时若 $p \\land q$ 真，则前提一假，不构成反例；故前提全真时必有 $p \\land q$ 假，即 $\\neg p \\lor \\neg q$ 真。八行检查无反例，有效。这条形式其实是德摩根律与否定后件式的合用，熟练后可不列表直接看出。

## 反例训练

> 如果下雨，地就湿；如果地湿，路就滑；所以如果路滑，就下雨。

**问题所在**：把链条的末端当起点，属肯定后件的变体。

$$p \\to q,\\ q \\to r \\therefore r \\to p$$

反例行：$p$ 假、$q$ 真、$r$ 真。此时 $p \\to q$ 真（假前件），$q \\to r$ 真，结论 $r \\to p$ 为假（前件真后件假）。这一行在真值表里清清楚楚，写判定时必须指名它。

## 现实应用

- **硬件验证**：芯片设计用穷举真值表验证组合逻辑，$2^n$ 行就是测试向量的理论上限。
- **权限配置**：三个开关控制一个门禁，八种组合逐一试过，才不会漏掉「都关却放行」的致命行。
- **合同审查**：把三个关键条件写成 $p, q, r$，列出八种情形，能发现某些组合下双方都没义务的漏洞。
- **教学自查**：学生做错真值表题，九成错在行数或列序，而不是逻辑本身。

## 本节总结

**核心概念**：完备真值表、真值指派、支命题列、反例行。

**关键规则**

1. $n$ 个变项 $2^n$ 行，按二分法列指派。
2. 先列支命题，后列整体，中间列不省。
3. 有效：无前提真结论假的行；无效：指出具体哪一行。

**常见错误**：按句子数而非变项数算行；漏掉重复变项只算一次；判定无效却不给反例行。

**需要掌握的能力**：独立画出一张三变项真值表，并在两分钟内给出有效性判定与理由。
`,quiz:[{id:"s3-07-q1",type:"single",stem:"一个含 $p, q, r, s$ 四个变项的论证，其完备真值表共有多少行？",options:["4 行","8 行","16 行","32 行"],answer:"C",explanation:"行数由变项个数决定，为 $2^n$。四个变项即 $2^4 = 16$ 行。按陈述句数量计算是常见错误，同一变项重复出现不增加行数。",skill:"真值表行数"},{id:"s3-07-q2",type:"judge",stem:"用完备真值表判定论证无效时，只要结论列出现「假」就可以下结论。",answer:!1,explanation:"必须找到同一行中全部前提为真且结论为假。结论假但某前提也假的行不构成反例，不能据此判无效。",skill:"反例行的条件"},{id:"s3-07-q3",type:"single",stem:"画真值表时正确的列序是：",options:["先列结论，再列前提，最后列支命题","先列支命题，再列整个前提与结论","只列前提与结论，支命题在草稿上算","按句子在原文中出现的顺序列"],answer:"B",explanation:"先算支命题可以分步降低出错率，也便于复核。先列结论容易受预期影响而算错，只列整体则一旦出错无法定位。",skill:"真值表列序"},{id:"s3-07-q4",type:"single",stem:"某真值表中，第三行为 $p$ 真、$q$ 假，前提 $p \\to q$ 与结论 $q$ 均为假。这一行能否证明论证无效？",options:["能，因为结论为假","能，因为前提与结论一真一假","不能，因为前提并非为真","不能，因为还缺少第三个变项"],answer:"C",explanation:"反例行要求全部前提为真、结论为假。该行前提 $p \\to q$ 为假，不满足条件，因此不能作为无效的证据。真值表里结论为假的行常常不止一行，逐行核对前提才是关键。",skill:"反例行的条件"},{id:"s3-07-q5",type:"short",stem:"简述用完备真值表判定论证有效性的四个步骤。",keywords:[["变项","2 的 n 次方","行数"],["支命题","中间列","计算"],["前提全真","结论假","反例行"]],answer:"第一步数出变项个数 $n$，按 $2^n$ 确定行数并用二分法列出全部指派；第二步增设支命题列，逐行计算；第三步列出各前提与结论的整体真值；第四步查找是否有前提全真而结论假的行，有则无效并指出该行，无则有效。",explanation:"四步的核心是穷举、分步计算、整体判定、给出理由。漏掉「指出反例行」这一步，判定在格式上就不完整。",skill:"真值表判定程序"}]},{id:"s3-08",no:26,code:"8.8",title:"常见有效论证形式",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:16,lead:"为什么「如果下雨就延期，现在下雨了，所以延期」人人觉得对，而「如果下雨就延期，现在延期了，所以下雨了」人人觉得怪？这两种推理的差别，能被九条规则一网打尽吗？",objectives:["默写九条基本有效论证形式及其符号表达式","在自然语言论证中辨认出对应的形式并判定有效性","识别肯定后件与否定前件这两种高频无效形式"],concepts:["肯定前件式","否定后件式","选言三段论","假言三段论","二难推理"],body:`
## 核心定义

**专业定义**：基本有效论证形式是无需再用真值表检验、可直接使用的推理模式。命题逻辑常用九条：肯定前件式（MP）、否定后件式（MT）、选言三段论（DS）、假言三段论（HS）、简化式（Simp）、合取式（Conj）、附加式（Add）、构造性二难（CD）、破坏性二难（DD）。

**通俗解释**：这九条是逻辑学的乘法口诀。背熟之后，看到「如果…就…」加一个前件，立刻知道能推什么；看到「或者」加一个否定，立刻知道能剩下什么。

**关键术语**

- **MP**：$p \\to q,\\ p \\therefore q$
- **MT**：$p \\to q,\\ \\neg q \\therefore \\neg p$
- **DS**：$p \\lor q,\\ \\neg p \\therefore q$
- **HS**：$p \\to q,\\ q \\to r \\therefore p \\to r$
- **Simp**：$p \\land q \\therefore p$
- **Conj**：$p,\\ q \\therefore p \\land q$
- **Add**：$p \\therefore p \\lor q$
- **CD**：$(p \\to q) \\land (r \\to s),\\ p \\lor r \\therefore q \\lor s$
- **DD**：$(p \\to q) \\land (r \\to s),\\ \\neg q \\lor \\neg s \\therefore \\neg p \\lor \\neg r$

**容易混淆的概念**

> MP 与 MT 方向相反，都要记牢：MP 从肯定前件到肯定后件；MT 从否定后件到否定前件。

> 肯定后件与否定前件都是无效的，但它们长得极像 MT 与 MP，是考试丢分的头号地带。

## 理论讲解

### 第一步：把九条按「管什么」分组

- 管条件句：MP、MT、HS。
- 管析取：DS、Add。
- 管合取：Simp、Conj。
- 管组合：CD、DD。

分组之后不必死记序号，忘了哪条就想「它管哪种连接词」。

### 第二步：用真值表为每条背书

以 MT 为例：$p \\to q$ 与 $\\neg q$ 同时为真，则 $q$ 假，而 $p \\to q$ 在前件真后件假时为假，故 $p$ 不能真，只能假。所以 $\\neg p$ 成立。九条都能这样逐条验证，验证过一次，用起来才踏实。

### 第三步：在自然语言里认出它们

「除非你道歉，否则我不原谅你。你已经道歉了。所以我会原谅你。」

设 $A$：你道歉；$B$：我原谅你。前提一是 $\\neg A \\to \\neg B$，取逆否得 $B \\to A$——原谅你，说明你道过歉。前提二给的是 $A$，从这个位置出发，无论 MP 还是 MT 都走不到 $B$。把 $B \\to A$ 与 $A$ 摆在一起看，正是肯定后件。符号化方向对了，规则自然用得对；方向弄反，九条背得再熟也救不回来。

## 例题与分析

**例 1（易）**「如果停电，电梯就停运。现在停电了，所以电梯停运。」

**分析**：$p \\to q,\\ p \\therefore q$，标准 MP，有效。

**例 2（中）**「或者小张去，或者小李去。小张没去，所以小李去了。」

**分析**：$p \\lor q,\\ \\neg p \\therefore q$，DS，有效。注意此处析取必须是相容读法；若是排斥读法，结论依然成立，但推理要多一步。

**例 3（难）**「如果下雨，运动会就在室内举行；如果天晴，运动会就在操场举行。或者下雨，或者天晴。所以，运动会或者在室内举行，或者在操场举行。」

**分析**：设 $p$ 下雨，$q$ 室内，$r$ 天晴，$s$ 操场。形式为 $(p \\to q) \\land (r \\to s),\\ p \\lor r \\therefore q \\lor s$，正是 CD，有效。二难的名字来自「两条路都通向一个结果」的辩论场景，考试里常把两支写成同一后件，那时结论可简化为单个 $q$。

## 反例训练

> 如果下雨，运动会就在室内举行；如果天晴，运动会就在操场举行。或者在室内举行，或者在操场举行。所以，或者下雨，或者天晴。

**问题所在**：把 CD 的后件当成了前件的证据，等于在两个条件句上同时肯定后件。

$$(p \\to q) \\land (r \\to s),\\ q \\lor s \\therefore p \\lor r$$

反例指派：$p$ 假、$q$ 真、$r$ 假、$s$ 真。两个条件句都真（前件假），前提三真，结论「下雨或天晴」假——也许是因为雾霾。反例行成立，形式无效。

## 现实应用

- **故障排查**：现场「没电且有异响」，用 Conj 合并观察，再用 MT 逐条排除假设，是排障的标准节奏。
- **法律推理**：构成要件常写成合取，Simp 可用于从「既遂且主观故意」中抽出任一要件单独论证。
- **方案比较**：两个方案各自推出代价，用 CD 合成「无论选哪个都要付代价」，是决策文书常见结构。
- **辩论训练**：对方用二难时，检查他是否偷偷把后件当前件，这一招能拆掉大半「两难」话术。

## 本节总结

**核心概念**：MP、MT、DS、HS、Simp、Conj、Add、CD、DD。

**关键规则**

1. 九条规则都是「整行使用」的推论规则，不能钻进公式内部改子公式。
2. MP 向前，MT 向后，方向不能倒。
3. 肯定后件与否定前件永远无效，看到就要警觉。

**常见错误**：把 MT 做成否定前件；把 DS 用在排斥析取上却不说明；用 CD 时把后件当前件。

**需要掌握的能力**：听到一段论证，能报出它用的是哪条规则；报不出时，能用真值表兜底。
`,quiz:[{id:"s3-08-q1",type:"single",stem:"「如果价格上涨，需求就下降。需求没有下降。所以价格上涨的说法不成立。」这一推理的形式是：",options:["肯定前件式","否定后件式","否定前件式","选言三段论"],answer:"B",explanation:"由 $p \\to q$ 与 $\\neg q$ 推出 $\\neg p$，是否定后件式，有效。若从 $\\neg p$ 推 $\\neg q$ 才是否定前件，那是无效的。口诀：否定落在后件上，结论就否定前件。",skill:"否定后件式"},{id:"s3-08-q2",type:"judge",stem:"从 $p \\to q$ 和 $q$ 可以有效地推出 $p$。",answer:!1,explanation:"这是肯定后件，形式无效。$q$ 真时 $p$ 可能假，例如「如果他是北京人则是中国人」配合「他是中国人」，推不出他是北京人。",skill:"肯定后件谬误"},{id:"s3-08-q3",type:"single",stem:"「小王要么在家，要么在公司。他不在家。所以他一定在公司。」这一推理若按相容析取理解，属于：",options:["MP","DS","HS","无效，因为析取不能否定一支"],answer:"B",explanation:"$p \\lor q$ 与 $\\neg p$ 推出 $q$，是选言三段论。相容析取允许两支同真，但否定一支后另一支必真，推理仍然有效。真正失效的情形，是把「或者」读成排斥却又要由一真推另一假。",skill:"选言三段论"},{id:"s3-08-q4",type:"multi",stem:"下列哪些形式是有效的？（多选）",options:["$p \\to q,\\ \\neg q \\therefore \\neg p$","$p \\land q \\therefore p$","$p \\therefore p \\lor q$","$p \\to q,\\ q \\therefore p$"],answer:["A","B","C"],explanation:"A 是 MT，B 是 Simp，C 是 Add，均有效。D 是肯定后件，属无效形式，是九条规则之外最常被误用的一个。四个选项都只涉及一两个连接词，拿规则表逐条对照即可。",skill:"九条推论规则"},{id:"s3-08-q5",type:"short",stem:"请写出构造性二难（CD）的形式，并举一个自然语言例子。",keywords:[["p 蕴含 q","两个条件句","合取"],["p 或 r","选言前提"],["q 或 s","结论"]],answer:"形式为 $(p \\to q) \\land (r \\to s),\\ p \\lor r \\therefore q \\lor s$。例：如果下雨则在室内举行，如果天晴则在操场举行；或者下雨，或者天晴；所以或者在室内举行，或者在操场举行。",explanation:"CD 的要点是两个条件句、一个选言前提、一个选言结论。写形式时两条件句要用合取连起来，漏掉合取是最常见的失分点。",skill:"构造性二难"}]},{id:"s3-09",no:27,code:"8.9–8.10",title:"实质等值与逻辑等价",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:16,lead:"「当且仅当」这四个字，为什么在数学定义里出现得那么频繁？如果两个公式在一切情况下真值都相同，我们凭什么可以拿一个去换另一个？",objectives:["写出 $p \\leftrightarrow q$ 的真值表并说明它与双向蕴涵的关系","区分公式内部的 $\\leftrightarrow$ 与元语言层面的「逻辑等价」","用等值式链把复杂公式逐步化简为指定形式"],concepts:["实质等值","逻辑等价","德摩根律","假言易位","输出律"],body:`
## 核心定义

**专业定义**：实质等值 $p \\leftrightarrow q$ 在两支真值相同时为真，真值不同时为假——换句话说，只有一真一假时才为假。逻辑等价指两个公式在一切真值指派下真值完全相同，记作 $p \\equiv q$。

**通俗解释**：等值就是「同进同退」。两个陈述要么一起真，要么一起假，不允许一个真一个假。逻辑等价则是说两个公式在任何情形下都同进同退，因此可以互相替换。

**关键术语**

- **实质等值**：$p \\leftrightarrow q$，对象语言里的连接词。
- **逻辑等价**：$p \\equiv q$，元语言里的断言，说的是两个公式的关系。
- **双向蕴涵**：$p \\leftrightarrow q$ 等值于 $(p \\to q) \\land (q \\to p)$。

**容易混淆的概念**

> $\\leftrightarrow$ 与 $\\equiv$ 不在同一层。前者是公式里的一个符号，后者是我们在讨论公式时说的话。「$p \\leftrightarrow q$」是一个公式；「$p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p)$」是一条关于公式的断言。

> 等值 ≠ 同义。$p \\land q$ 与 $q \\land p$ 逻辑等价，但「并且」的两种语序在修辞上并不相同。逻辑等价只管真值。

## 理论讲解

### 第一步：等值的真值表

| $p$ | $q$ | $p \\leftrightarrow q$ |
| --- | --- | --- |
| 真 | 真 | 真 |
| 真 | 假 | 假 |
| 假 | 真 | 假 |
| 假 | 假 | 真 |

第一、四行两支同真同假，整句为真；中间两行一真一假，整句为假。

### 第二步：用真值表验证等值

要证 $p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p)$，只需在同一张表里把两列都算出来，逐行比对。

| $p$ | $q$ | $p \\to q$ | $q \\to p$ | 两者合取 | $p \\leftrightarrow q$ |
| --- | --- | --- | --- | --- | --- |
| 真 | 真 | 真 | 真 | 真 | 真 |
| 真 | 假 | 假 | 真 | 假 | 假 |
| 假 | 真 | 真 | 假 | 假 | 假 |
| 假 | 假 | 真 | 真 | 真 | 真 |

两列完全一致，等值成立。这张表也解释了「当且仅当」为什么读作「充分且必要」。

### 第三步：背下九组等值式，学会链式改写

- 德摩根律：$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$；$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$
- 双重否定：$p \\equiv \\neg\\neg p$
- 假言易位：$p \\to q \\equiv \\neg q \\to \\neg p$
- 蕴涵律：$p \\to q \\equiv \\neg p \\lor q$
- 交换律：$p \\land q \\equiv q \\land p$；$p \\lor q \\equiv q \\lor p$
- 结合律：$(p \\land q) \\land r \\equiv p \\land (q \\land r)$
- 分配律：$p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$
- 输出律：$(p \\land q) \\to r \\equiv p \\to (q \\to r)$
- 重言律：$p \\equiv p \\land p$；$p \\equiv p \\lor p$

链式改写示范：证明 $\\neg(p \\land \\neg q) \\equiv p \\to q$。

$$\\neg(p \\land \\neg q) \\equiv \\neg p \\lor \\neg\\neg q \\equiv \\neg p \\lor q \\equiv p \\to q$$

第一步用德摩根律，第二步用双重否定，第三步反向用蕴涵律。每一步都要注明依据，这是后面形式证明的基本功。

## 例题与分析

**例 1（易）**「小明及格当且仅当分数不低于 60。」写出它的两个方向。

**分析**：$p \\leftrightarrow q$ 拆成 $p \\to q$（及格则不低于 60）与 $q \\to p$（不低于 60 则及格）。两句话都得成立，等值才成立。只证一个方向，是证明「当且仅当」时最常见的漏项。

**例 2（中）**用等值式说明 $p \\to (q \\to r)$ 与 $(p \\land q) \\to r$ 等价。

**分析**：$p \\to (q \\to r) \\equiv \\neg p \\lor (\\neg q \\lor r)$，再用结合律得 $(\\neg p \\lor \\neg q) \\lor r$，用德摩根得 $\\neg(p \\land q) \\lor r$，最后反向用蕴涵律得 $(p \\land q) \\to r$。这条链正是输出律的证明。

**例 3（难）**$\\neg(p \\leftrightarrow q)$ 等值于什么？

**分析**：$p \\leftrightarrow q$ 是「同真同假」，它的否定就是「一真一假」，即 $(p \\land \\neg q) \\lor (\\neg p \\land q)$。也可写成 $p \\leftrightarrow \\neg q$。这个结果在电路里就是异或门，在日常语言里就是排斥析取。

## 反例训练

> 如果努力就能通过考试。所以，努力与通过考试是等值的。

**问题所在**：把单向蕴涵当成双向蕴涵。

$$p \\to q \\therefore p \\leftrightarrow q$$

反例指派：$p$ 真、$q$ 假——努力了但没通过（题目太难）。前提真，结论假，形式无效。要得到等值，必须再补一个方向 $q \\to p$。

## 现实应用

- **数学定义**：「函数连续当且仅当……」必须两个方向都证，只证一半的定义是残缺的。
- **合同对价**：「甲方付款当且仅当乙方交付」意味着两者互为条件，任一方未履行都可抗辩。
- **代码断言**：单元测试里的 assert equivalence 就是检查两个表达式在所有输入下同真同假。
- **谈判**：把对方的「只要…就…」改写成「当且仅当」，往往能立刻看出他其实没承诺那么多。

## 本节总结

**核心概念**：实质等值、逻辑等价、德摩根律、假言易位、输出律。

**关键规则**

1. $p \\leftrightarrow q$ 在两支同真值时真，一真一假时假。
2. $p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p)$。
3. 等值式可以双向使用，且能作用于子公式；改写时每步注明依据。

**常见错误**：把 $\\leftrightarrow$ 与 $\\equiv$ 混为一层；证明「当且仅当」只证一个方向；由 $p \\to q$ 直接得 $p \\leftrightarrow q$。

**需要掌握的能力**：用真值表或等值式链证明两个公式等价，并把自然语言的「当且仅当」拆成两个方向。
`,quiz:[{id:"s3-09-q1",type:"single",stem:"$p \\leftrightarrow q$ 为真的情形是：",options:["$p$ 真 $q$ 假","$p$ 假 $q$ 真","$p$ 与 $q$ 真值相同","$p$ 与 $q$ 至少一真"],answer:"C",explanation:"实质等值要求两支同进同退：同真或同假都为真，一真一假为假。A、B 恰是它为假的两行，D 描述的是析取。",skill:"实质等值真值表"},{id:"s3-09-q2",type:"judge",stem:"$\\leftrightarrow$ 与 $\\equiv$ 是同一个符号的两种写法，可以互相替换。",answer:!1,explanation:"$\\leftrightarrow$ 是对象语言里的连接词，构成公式；$\\equiv$ 是元语言记号，用来断言两个公式在一切指派下真值相同。层次不同，不能互换。",skill:"对象语言与元语言"},{id:"s3-09-q3",type:"single",stem:"$\\neg(p \\lor q)$ 等值于：",options:["$\\neg p \\lor \\neg q$","$\\neg p \\land \\neg q$","$p \\land q$","$\\neg p \\to q$"],answer:"B",explanation:"德摩根律指出，析取的否定等于两个否定的合取。A 是否定合取的结果，C 漏掉否定，D 与蕴涵律有关但不等值。",skill:"德摩根律"},{id:"s3-09-q4",type:"multi",stem:"下列哪些等值式成立？（多选）",options:["$p \\to q \\equiv \\neg q \\to \\neg p$","$p \\to q \\equiv q \\to p$","$(p \\land q) \\to r \\equiv p \\to (q \\to r)$","$p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$"],answer:["A","C","D"],explanation:"A 是假言易位，C 是输出律，D 是分配律，三者都成立。B 是逆命题，与原式不等值，只有原式与逆否式才等价。凡看到「交换前后件」的选项，先怀疑它是否偷偷换成了逆命题。",skill:"基本等值式"},{id:"s3-09-q5",type:"short",stem:"用等值式链证明 $\\neg(p \\land \\neg q) \\equiv p \\to q$，并注明每一步依据。",keywords:[["德摩根","否定合取"],["双重否定"],["蕴涵律","析取","否定前件"]],answer:"$\\neg(p \\land \\neg q) \\equiv \\neg p \\lor \\neg\\neg q$（德摩根律）$\\equiv \\neg p \\lor q$（双重否定）$\\equiv p \\to q$（蕴涵律）。三步都作用于子公式，方向可以反向使用。",explanation:"关键在于先拆外层否定，再消去双重否定，最后把析取收回成蕴涵。漏注依据或把德摩根用成 $\\neg p \\land \\neg\\neg q$ 都会导致链条断裂。",skill:"等值式链"}]},{id:"s3-10",no:28,code:"8.11",title:"重言式、矛盾式与三大思想法则",stage:3,chapter:"第8章 命题逻辑Ⅰ：真值函项陈述与论证",minutes:15,lead:"「明天要么下雨要么不下雨」，这句话有没有告诉你任何天气信息？如果没有，为什么它又被认为是逻辑上最可靠的句子？",objectives:["用真值表区分重言式、矛盾式与偶真式","写出同一律、矛盾律、排中律的公式并说明各自的针对性","解释为什么重言式没有信息量却在推理中极其有用"],concepts:["重言式","矛盾式","偶真式","同一律","矛盾律","排中律"],body:`
## 核心定义

**专业定义**：重言式（tautology）是在一切真值指派下都为真的公式；矛盾式（contradiction）是在一切指派下都为假的公式；偶真式（contingent）在某些指派下真、另一些指派下假。

**通俗解释**：重言式是「怎么算都真」，矛盾式是「怎么算都假」，偶真式是「看情况」。前两种不含关于世界的信息，第三种才有。

**关键术语**

- **重言式**：$p \\lor \\neg p$、$p \\to p$。
- **矛盾式**：$p \\land \\neg p$、$\\neg(p \\lor \\neg p)$。
- **偶真式**：$p$、$p \\land q$。
- **三大思想法则**：同一律、矛盾律、排中律。

**容易混淆的概念**

> 矛盾式 ≠ 矛盾律。矛盾律是一条重言式 $\\neg(p \\land \\neg p)$，说的是「矛盾不会成立」；矛盾式是那种永远为假的公式，如 $p \\land \\neg p$。一个在说「不许」，一个本身就是「不许」的对象。

> 重言式 ≠ 显而易见。$((p \\to q) \\land (q \\to r)) \\to (p \\to r)$ 是重言式，但没人一眼看得出来，得算。

## 理论讲解

### 第一步：看真值表最后一列

| $p$ | $\\neg p$ | $p \\lor \\neg p$ | $p \\land \\neg p$ |
| --- | --- | --- | --- |
| 真 | 假 | 真 | 假 |
| 假 | 真 | 真 | 假 |

第三列全真，是重言式；第四列全假，是矛盾式。判定三类公式，只看最终那一列有没有「全真」「全假」「混合」三种形态。

### 第二步：理解三大法则各管什么

- **同一律**：$p \\to p$，或 $p \\equiv p$。一个东西在同一个讨论中保持自身同一，概念不能中途变形。
- **矛盾律**：$\\neg(p \\land \\neg p)$。同一陈述不能同时为真又为假，它禁止「既真又假」。
- **排中律**：$p \\lor \\neg p$。同一陈述要么真要么假，它禁止「既不真也不假」。

矛盾律与排中律合起来，正好刻画二值原则：每句话恰有一个真值。

### 第三步：符号化示范与推导

「这句话不可能既是真的又是假的，也不可能既不是真的又不是假的。」

设 $p$ 表示该陈述。

$$\\neg(p \\land \\neg p) \\land \\neg(\\neg p \\land \\neg\\neg p)$$

第一部分是矛盾律，第二部分是「既不真也不假」的否定，等价于排中律 $p \\lor \\neg p$。三式之间的关系还能这样看：对排中律取否定，用德摩根律得 $\\neg p \\land \\neg\\neg p$，正是矛盾律所禁止的那一行。

## 例题与分析

**例 1（易）**$p \\to (q \\to p)$ 是重言式吗？

**分析**：是。$q \\to p$ 等价于 $\\neg q \\lor p$，故原式为 $\\neg p \\lor \\neg q \\lor p$，含 $p \\lor \\neg p$，恒真。这类「结论重复前提」的公式都是重言式，它们有效但毫无信息量。

**例 2（中）**$(p \\land \\neg p) \\to q$ 是重言式吗？它说明了什么？

**分析**：是。前件恒假，条件句恒真，称为「爆炸原理」：从矛盾可以推出任何结论。它的现实意义是提醒我们，一旦论证的前提自相矛盾，这个论证虽然有效，却毫无价值——因为它什么都能证。

**例 3（难）**$p \\land (q \\lor \\neg q)$ 属于哪一类？

**分析**：$q \\lor \\neg q$ 恒真，故整体等值于 $p$，是偶真式：$p$ 真时真，$p$ 假时假。判断这类公式，先把恒真或恒假的子公式替换掉再定性，比列表快得多。

## 反例训练

> 你既然不赞成这个方案，那就是反对它。

**问题所在**：把「反对」当成了「赞成」的逻辑否定，于是从 $\\neg S$ 直接推出 $O$，中间偷偷用掉了「要么赞成要么反对」这条本身不成立的二分前提。

$$\\neg S \\therefore O$$

反例指派：$S$ 假、$O$ 假——他既不赞成也不反对，只是中立。前提为真，结论为假，推理无效。

排中律的形式是 $p \\lor \\neg p$，只适用于「$p$」与「非 $p$」。而「反对」与「不赞成」并非矛盾关系，中间还有中立、弃权、有保留地接受。要让这个推理有效，必须补上 $S \\lor O$，可这条前提本身就不真。

真正符合排中的说法是「你要么赞成，要么不赞成」——后半句是前半句的否定，同义反复，必然为真，也正因如此什么信息都没说。

## 现实应用

- **辩论**：对方逼你二选一时，先检查他的两个选项是否真的互为否定。多数「二难」都藏着一个被抹掉的中间项。
- **问卷设计**：选项必须满足「互斥且穷尽」，否则就违反了矛盾律与排中律的工程版要求。
- **程序断言**：恒真断言（如 $x = x$）对测试毫无价值，好的断言必须可能为假。
- **概念澄清**：讨论前先约定关键词的同一含义，这是同一律最实用的落地方式。

## 本节总结

**核心概念**：重言式、矛盾式、偶真式、同一律、矛盾律、排中律。

**关键规则**

1. 三类公式看真值表最后一列：全真、全假、混合。
2. 矛盾律禁「既真又假」，排中律禁「不真不假」。
3. 排中律只适用于 $p$ 与 $\\neg p$，不能套到任意一对反义词上。

**常见错误**：把矛盾式与矛盾律混为一谈；把「赞成/反对」当成 $p$ 与 $\\neg p$；以为重言式因为恒真所以特别有说服力。

**需要掌握的能力**：快速判定任一公式属于三类中的哪一类，并识别日常话语里被滥用的排中律。
`,quiz:[{id:"s3-10-q1",type:"single",stem:"一个公式在真值表最后一列全部为假，它属于：",options:["重言式","矛盾式","偶真式","无法判定"],answer:"B",explanation:"全部指派下都为假即矛盾式。重言式恰好相反，最后一列全真；偶真式则是真假混合。三者依最后一列的形态区分。",skill:"三类公式的判定"},{id:"s3-10-q2",type:"judge",stem:"排中律 $p \\lor \\neg p$ 说明任何两个互相反对的陈述必有一个为真。",answer:!1,explanation:"排中律只涉及 $p$ 与它的否定 $\\neg p$。像「赞成」与「反对」并不互为否定，中间还有中立，$p \\lor q$ 不构成排中律，也不能保证必有一真。",skill:"排中律的适用范围"},{id:"s3-10-q3",type:"single",stem:"「这句话不可能既是真的又是假的」表达的是：",options:["同一律","矛盾律","排中律","蕴涵律"],answer:"B",explanation:"禁止同一陈述同时为真又为假，即 $\\neg(p \\land \\neg p)$，是矛盾律。同一律管概念同一，排中律管不许既不真也不假。题干里出现「既…又…」的句式，多半指向矛盾律。",skill:"矛盾律"},{id:"s3-10-q4",type:"multi",stem:"下列哪些是重言式？（多选）",options:["$p \\lor \\neg p$","$p \\land \\neg p$","$p \\to (q \\to p)$","$(p \\land \\neg p) \\to q$"],answer:["A","C","D"],explanation:"A 是排中律；C 结论重复前提，恒真；D 前件恒假，条件句恒真。B 是矛盾式，全部指派下为假。识别重言式的捷径是找「前件恒假」或「后件被前件包含」这两种结构。",skill:"重言式的识别"},{id:"s3-10-q5",type:"short",stem:"「你要么赞成要么反对，没有第三种可能」错在哪里？请用公式说明。",keywords:[["排中律","p 或非 p","否定"],["赞成","反对","不是矛盾关系"],["中立","第三项","无效"]],answer:"排中律的形式是 $p \\lor \\neg p$，只适用于一个陈述及其否定。「反对」不等于「不赞成」，中间还有中立。原句实际是 $p \\lor q$，取 $p$ 假 $q$ 假（中立）即可使其为假，故不成立。",explanation:"要点是区分逻辑否定与语义反对，并指出被抹掉的中间项。仅说「太绝对」而不指出 $p \\lor q$ 与 $p \\lor \\neg p$ 的差别，说明还没抓住要害。",skill:"排中律的误用"}]},{id:"s3-11",no:29,code:"9.1–9.3",title:"形式证明与九条推论规则",stage:3,chapter:"第9章 命题逻辑Ⅱ：演绎方法",minutes:18,lead:"真值表能判定一切，可当变项有六个时就要画六十四行。有没有一种办法，像解方程那样一步一步推，既短又能被检查？",objectives:["按规范格式写出形式证明的每一行及其理由","在证明中正确调用九条推论规则，并注明规则名与行号","辨认一处「看似推得出、其实没有规则支持」的证明步骤"],concepts:["形式证明","自然演绎","推论规则","前提","证明序列"],body:`
## 核心定义

**专业定义**：形式证明是从前提出发，依据推论规则逐步推出结论的有限公式序列。每一行要么是前提，要么由前面的行按某条规则得到，最后一行即结论。

**通俗解释**：形式证明像一份记账单。每一笔支出都得说明来源和凭证，不能凭空多出一行。审核的人只要逐行核对规则，就能确认整份账没有造假。

**关键术语**

- **前提**：证明开始时列出的公式，标 P。
- **推论规则**：允许从整行公式推出新整行公式的规则，共九条。
- **证明序列**：编号的公式列表，每行附理由。
- **结论标记**：通常写作「$\\therefore$」或 C，表示要推出的目标。

**容易混淆的概念**

> 证明 ≠ 真值表。真值表是判定程序，能回答有效或无效；证明只能证明有效，证不出无效——推不出来不等于无效，可能只是你没想到。

> 规则名与行号缺一不可。只写「由前提得」不算证明，因为无法核对。

## 理论讲解

### 第一步：抄前提，标目标

把前提按原顺序编号列出，末尾写出目标结论。目标最好单独标记，推导时随时对照，避免推着推着忘了要去哪。

### 第二步：从「能立刻用的」开始

找那些与已有行形状匹配的规则。看到 $p \\to q$ 与 $p$，就用 MP；看到 $p \\land q$，就用 Simp 拆开；看到 $p \\lor q$ 与 $\\neg p$，就用 DS。规则的使用是模式匹配，不是灵感。

### 第三步：写出完整证明

论证：$P \\to Q,\\ Q \\to R,\\ \\neg R,\\ P \\lor S \\therefore S$。

1. $P \\to Q$　　　P
2. $Q \\to R$　　　P
3. $\\neg R$　　　　P
4. $P \\lor S$　　　P　　$\\therefore S$
5. $\\neg Q$　　　　2, 3 MT
6. $\\neg P$　　　　1, 5 MT
7. $S$　　　　　　4, 6 DS

第 5 行由 2、3 用否定后件式得到；第 6 行由 1、5 再用一次；第 7 行由 4、6 用选言三段论。三步行号都可回溯，证明成立。

再示范一例：$(P \\land Q) \\to R,\\ P,\\ Q \\therefore R$。

1. $(P \\land Q) \\to R$　　P
2. $P$　　　　　　　　　P
3. $Q$　　　　　　　　　P　　$\\therefore R$
4. $P \\land Q$　　　　　2, 3 Conj
5. $R$　　　　　　　　　1, 4 MP

## 例题与分析

**例 1（易）**前提 $A \\land B$，求证 $B \\land A$。

**分析**：1. $A \\land B$　P；2. $B$　1 Simp；3. $A$　1 Simp；4. $B \\land A$　2, 3 Conj。注意 Simp 可以从同一个合取式里拆两次，行号相同没问题。

**例 2（中）**前提 $A \\to B,\\ \\neg B \\lor C,\\ A$，求证 $C$。

**分析**：1. $A \\to B$ P；2. $\\neg B \\lor C$ P；3. $A$ P；4. $B$ 1,3 MP；5. $C$ 2,4 DS。第 5 步把第 2 行读成 $\\neg B \\lor C$，第 4 行给出 $B$，正好否定掉析取的第一支，于是剩下 $C$。

**例 3（难）**前提 $A \\lor B,\\ A \\to C,\\ B \\to D,\\ \\neg C$，求证 $D$。

**分析**：1. $A \\lor B$ P；2. $A \\to C$ P；3. $B \\to D$ P；4. $\\neg C$ P；5. $\\neg A$ 2,4 MT；6. $B$ 1,5 DS；7. $D$ 3,6 MP。这条链的难点在第 5 步：多数人想先拆析取，但 $A \\lor B$ 无法直接拆，必须先由条件句拿到 $\\neg A$，才能用 DS。证明的顺序感就体现在这里。

## 反例训练

> 前提：如果你复习了，就能通过。你没有复习。所以你不能通过。

**问题所在**：有人会把它写成证明的一行，注明「1, 2 否定前件」。可是九条规则里没有这一条。

$$P \\to Q,\\ \\neg P \\therefore \\neg Q$$

这里的问题不在手法生疏，「否定前件」压根不在九条规则之列。反例指派：$P$ 假、$Q$ 真——没复习但押中了题，通过了。前提全真，结论假。

形式证明的每一步都必须有规则背书。凡是在九条里找不到依据的步骤，即使结论碰巧为真，这一步也是非法的。这也说明：证明能证有效，不能凭「推不出来」证无效。

## 现实应用

- **数学作业**：每步注明依据，老师才能判断你是真懂还是凑答案；这与你未来写代码要写注释同理。
- **故障复盘**：从「日志显示超时」「超时源于连接池耗尽」一步步推到根因，每一步都要有证据，不能跳步。
- **法律论证**：判决书的说理部分本质上是形式证明，事实认定是前提，法条适用是规则。
- **技术面试**：面试官追问「这一步为什么成立」，考的就是能否给出规则与依据。

## 本节总结

**核心概念**：形式证明、自然演绎、推论规则、前提、证明序列。

**关键规则**

1. 每行三要素：编号、公式、理由（规则名 + 行号）。
2. 九条推论规则：MP、MT、DS、HS、Simp、Conj、Add、CD、DD。
3. 推论规则只能整行使用，不能钻进括号改子公式。

**常见错误**：编造规则（否定前件、肯定后件）；漏写行号；把目标结论当已知条件抄进证明。

**需要掌握的能力**：给一组前提和一个结论，独立写出五到八行的规范证明，并逐行自检。
`,quiz:[{id:"s3-11-q1",type:"single",stem:"形式证明中每一行必须包含的三项是：",options:["编号、公式、真值","编号、公式、理由","前提、结论、规则名","公式、变项、行数"],answer:"B",explanation:"规范证明要求每行有序号、公式，以及得到该行的依据（规则名加行号）。真值不在证明中标注，前提与结论只是部分行的身份。",skill:"证明的书写规范"},{id:"s3-11-q2",type:"judge",stem:"若一个论证的结论推不出来，就说明该论证无效。",answer:!1,explanation:"推不出来可能只是没想到合适的路径。形式证明只能证有效，要证无效必须给出真值表反例行。把「没证出来」当成「无效」，是混淆了证明与判定。",skill:"证明与判定"},{id:"s3-11-q3",type:"single",stem:"已知第 3 行为 $P \\to Q$，第 4 行为 $\\neg Q$，可推出：",options:["$P$","$\\neg P$","$Q$","$P \\lor Q$"],answer:"B",explanation:"由 $P \\to Q$ 与 $\\neg Q$ 得 $\\neg P$，是否定后件式。A 需要 MP，C 与第 4 行冲突，D 虽由 Add 可得但不是这里的标准结论。看箭头方向：后件被否定，结论就否定前件。",skill:"否定后件式"},{id:"s3-11-q4",type:"multi",stem:"下列关于形式证明的说法，正确的有：（多选）",options:["前提行通常标记为 P","同一条规则可以在证明中使用多次","可以由同一个合取式两次使用 Simp 拆出不同支","为了让证明更短，可以跳过中间步骤直接写结论"],answer:["A","B","C"],explanation:"前提标 P、规则可重复使用、Simp 可对同一行反复使用，都符合规范。D 错：每一步都必须有规则支撑，跳步等于无依据。",skill:"证明的规范"},{id:"s3-11-q5",type:"short",stem:"以 $P \\to Q,\\ Q \\to R,\\ P$ 为前提，写出推出 $R$ 的证明，并注明每步依据。",keywords:[["MP","肯定前件"],["Q","中间结论"],["行号","依据"]],answer:"1. $P \\to Q$ P；2. $Q \\to R$ P；3. $P$ P；4. $Q$ 1,3 MP；5. $R$ 2,4 MP。先用第一个条件句与前件得 $Q$，再用第二个条件句与 $Q$ 得 $R$。",explanation:"这是 HS 的展开证明：两步 MP 合起来等于一次假言三段论。答出中间结论 $Q$ 并注明行号，说明掌握了证明的链式结构。",skill:"肯定前件式"}]},{id:"s3-12",no:30,code:"9.6–9.8",title:"替换规则与自然演绎系统",stage:3,chapter:"第9章 命题逻辑Ⅱ：演绎方法",minutes:17,lead:"「并且」可以前后调换，「如果…那么…」却不能。同样是交换，为什么一条能当规则用，另一条一用就出错？规则到底允许我们动公式的哪个部位？",objectives:["说出十条替换规则的名称与公式，并说明它们与推论规则的分工","在公式的子公式内部使用替换规则完成化简","判断某个替换是否越界，例如对 $\\to$ 误用交换律"],concepts:["替换规则","推论规则","德摩根律","输出律","子公式"],body:`
## 核心定义

**专业定义**：替换规则（rule of replacement）允许把公式中的某个子公式替换为与它逻辑等值的公式，整行公式随之改变。命题逻辑常用十条：德摩根律（DeM）、交换律（Comm）、结合律（Assoc）、分配律（Dist）、双重否定（DN）、假言易位（Contra）、蕴涵律（Impl）、等值律（Equiv）、输出律（Export）、重言律（Taut）。

**通俗解释**：推论规则管「整行怎么推」，替换规则管「公式内部怎么换零件」。前者像换整条轮胎，后者像拧下螺丝换垫片。

**关键术语**

- **推论规则**：只作用于整行，九条。
- **替换规则**：可作用于整行，也可作用于子公式，十条。
- **子公式**：公式内部任意一个完整的公式片段。
- **自然演绎**：以规则逐步推导、不依赖真值表的证明系统。

**容易混淆的概念**

> 推论规则只能整行用，替换规则可以进入括号内部。这是两套规则最本质的区别，考试反复考。

> 等值替换 ≠ 任意改写。替换的依据必须是逻辑等值；$p \\to q$ 与 $q \\to p$ 不等值，所以不能换。

## 理论讲解

### 第一步：记住十条，按用途分组

- 拆否定：DeM、DN。
- 调结构：Comm、Assoc、Dist。
- 变条件：Contra、Impl、Export。
- 换等值：Equiv。
- 去重复：Taut。

### 第二步：在子公式里动手

示范：把 $\\neg(R \\lor S) \\to T$ 化简。

$$\\neg(R \\lor S) \\to T \\equiv (\\neg R \\land \\neg S) \\to T$$

这里 DeM 只作用于箭头左边的子公式 $\\neg(R \\lor S)$，整行随之等值改变。若换成推论规则，就没有这种「局部手术」的能力。

### 第三步：写出带替换的完整证明

论证：$P \\to (Q \\land R),\\ \\neg R \\lor \\neg Q \\therefore \\neg P$。

1. $P \\to (Q \\land R)$　　P
2. $\\neg R \\lor \\neg Q$　　P　　$\\therefore \\neg P$
3. $\\neg(R \\land Q)$　　　2 DeM
4. $\\neg(Q \\land R)$　　　3 Comm
5. $\\neg P$　　　　　　　1, 4 MT

第 3 步用德摩根把析取的否定转成合取的否定，第 4 步用交换律把 $R \\land Q$ 调成 $Q \\land R$，才能与第 1 行的后件对上。这两步都在子公式内部完成，正是替换规则的用武之地。

再示范输出律的用法：$P \\to (Q \\to R) \\therefore (P \\land Q) \\to R$。

1. $P \\to (Q \\to R)$　　P
2. $(P \\land Q) \\to R$　　1 Export

一步到位。若不用替换规则，就得绕一大圈。

## 例题与分析

**例 1（易）**把 $\\neg\\neg(P \\lor Q)$ 化简。

**分析**：用 DN 得 $P \\lor Q$。双重否定可以连续消去，也可以反向添加，方向自由，这是替换规则与推论规则的一大差别。

**例 2（中）**证明 $P \\to Q,\\ \\neg Q \\therefore \\neg P \\lor R$。

**分析**：1. $P \\to Q$ P；2. $\\neg Q$ P；3. $\\neg P$ 1,2 MT；4. $\\neg P \\lor R$ 3 Add。第 4 步用的是推论规则 Add，不是替换规则——因为我们要得到的是一个更弱的新陈述，而非等值改写。两套规则常常交替使用。

**例 3（难）**证明 $\\neg(P \\land Q) \\lor R \\therefore P \\to (Q \\to R)$。

**分析**：1. $\\neg(P \\land Q) \\lor R$ P；2. $(P \\land Q) \\to R$ 1 Impl；3. $P \\to (Q \\to R)$ 2 Export。第 2 步把析取式收回条件句，第 3 步用输出律整理括号。整个过程没有引入新信息，只是换说法，这正是替换规则的特点。

## 反例训练

> 如果下雨，地就湿。所以，如果地湿，就下雨。

**问题所在**：有人把它标成「交换律」。可交换律只适用于 $\\land$ 与 $\\lor$，对 $\\to$ 无效。

$$p \\to q \\therefore q \\to p$$

反例指派：$p$ 假、$q$ 真。前提真而结论假，形式无效。合法的「调头」只有假言易位：$p \\to q \\equiv \\neg q \\to \\neg p$，两个位置都要加否定。

这条反例说明，替换规则的合法性来自等值式，而不是来自「看起来对称」。把 $\\land$ 的对称性套到 $\\to$ 上，是把两类连接词混为一谈。

## 现实应用

- **电路化简**：用 DeM 与 Dist 把布尔表达式化成标准形，直接减少门电路数量。
- **SQL 优化**：查询条件里 $\\neg(a \\land b)$ 改成 $\\neg a \\lor \\neg b$，可能命中不同索引。
- **合同改写**：把「除非 A 否则不 B」用 Impl 转成析取式，条款的例外情形会更清楚。
- **讲解技巧**：向别人解释复杂条件时，用 Export 把 $(A \\land B) \\to C$ 拆成「如果 A，那么只要 B 就 C」，听者更容易跟上。

## 本节总结

**核心概念**：替换规则、推论规则、子公式、德摩根律、输出律。

**关键规则**

1. 十条替换规则：DeM、Comm、Assoc、Dist、DN、Contra、Impl、Equiv、Export、Taut。
2. 推论规则只整行用，替换规则可进子公式。
3. 替换的依据是逻辑等值，不是语感上的对称。

**常见错误**：对 $\\to$ 用交换律；把 Impl 写成 $p \\to q \\equiv p \\lor \\neg q$；替换后忘记整行都要跟着改。

**需要掌握的能力**：看到复杂公式能判断「哪一块可以换、换成什么」，并把替换与推论交替编排成可核查的证明。
`,quiz:[{id:"s3-12-q1",type:"single",stem:"推论规则与替换规则最本质的区别是：",options:["推论规则有九条，替换规则有十条","推论规则只能作用于整行，替换规则可作用于子公式","推论规则用于命题逻辑，替换规则用于谓词逻辑","推论规则需要真值表支持，替换规则不需要"],answer:"B",explanation:"数量差别只是表象。关键在于作用范围：推论规则整行使用，替换规则因依据等值式，可以进入括号内部替换子公式。",skill:"两类规则的区别"},{id:"s3-12-q2",type:"judge",stem:"因为「并且」可以交换位置，所以「如果…那么…」也可以交换前后件。",answer:!1,explanation:"交换律只适用于合取与析取。条件句交换前后件得到的是逆命题，与原式不等值；合法的变形是假言易位，需同时对两支取否定。",skill:"交换律的适用范围"},{id:"s3-12-q3",type:"single",stem:"$\\neg(A \\lor B)$ 用德摩根律可替换为：",options:["$\\neg A \\lor \\neg B$","$\\neg A \\land \\neg B$","$A \\land B$","$A \\to B$"],answer:"B",explanation:"析取的否定等于两个否定的合取。A 是错误地把连接词照抄，C 漏掉否定，D 与本式无关。口诀：否定进去，连接词翻面；否定出来，连接词也翻面。",skill:"德摩根律"},{id:"s3-12-q4",type:"multi",stem:"下列替换中，哪些是合法的？（多选）",options:["把 $P \\to Q$ 换成 $\\neg P \\lor Q$","把 $P \\to Q$ 换成 $Q \\to P$","把 $(P \\land Q) \\to R$ 换成 $P \\to (Q \\to R)$","把 $\\neg\\neg P$ 换成 $P$"],answer:["A","C","D"],explanation:"A 用蕴涵律，C 用输出律，D 用双重否定，都依据等值式。B 是逆命题，与原式只在一部分指派下同真，不能替换。",skill:"替换规则的运用"},{id:"s3-12-q5",type:"short",stem:"为什么推论规则不能像替换规则那样进入括号内部使用？请举例说明。",keywords:[["整行","子公式","范围"],["等值","替换","依据"],["反例","无效","例如"]],answer:"推论规则的作用单位是整行，只能看主连接词。例如有人从 $(P \\land Q) \\to R$ 用 Simp 得 $P \\to R$，这一步非法：该行主连接词是 $\\to$，$P \\land Q$ 只是前件里的子公式，Simp 管不到它。取 $P$ 真、$Q$ 假、$R$ 假，前提真而结论假，可见结果也不成立。",explanation:"要点是推论规则只看整行的主连接词，替换规则才允许进入子公式。举例须说明子公式位置缺乏规则支撑，并最好给出反例指派确认结果不成立。",skill:"规则的作用范围"}]},{id:"s3-13",no:31,code:"9.9–9.10",title:"简化真值表与不相容性",stage:3,chapter:"第9章 命题逻辑Ⅱ：演绎方法",minutes:15,lead:"要证明一个论证有效，得查完全部行；可要证明它无效，只需要找到一行。既然找一行更省力，能不能反过来用：先假定它无效，看看会不会自相矛盾？",objectives:["用「假定结论为假」的反证程序判定论证有效性","在赋值过程中识别矛盾并据此宣布有效","说明前提集不相容与论证有效之间的关系"],concepts:["简化真值表","反证法","赋值","不相容性","一致指派"],body:`
## 核心定义

**专业定义**：简化真值表方法（又称间接真值表）先假定论证无效，即假定全部前提为真而结论为假，然后按连接词的真值条件逐步推出各变项的值。若推出矛盾，假定不成立，论证有效；若得到一组一致的赋值，该赋值就是反例，论证无效。

**通俗解释**：这是「假设它是错的，看会不会露馅」。露馅了就说明它错不了；没露馅，那副「错的样子」本身就是反例。

**关键术语**

- **反证假定**：假定结论为假（同时前提为真）。
- **强制赋值**：某个连接词的真值条件逼出的唯一取值。
- **矛盾**：同一变项被逼出既真又假。
- **不相容**：一组公式没有任何一行能同时为真。

**容易混淆的概念**

> 简化真值表证「有效」靠矛盾，证「无效」靠一致赋值。两条出口都要写清，不能只说「假设不成立」。

> 前提不相容 ≠ 论证无效。恰恰相反，前提永不同真时，反例行根本不存在，论证必然有效，只是这种有效毫无价值。

## 理论讲解

### 第一步：写出反证假定

要判定 $P \\to Q,\\ Q \\to R,\\ \\neg R \\therefore \\neg P$，先假定前提全真、结论为假：

$$P \\to Q = \\text{真},\\quad Q \\to R = \\text{真},\\quad \\neg R = \\text{真},\\quad \\neg P = \\text{假}$$

### 第二步：顺着连接词往下逼

结论假即 $P$ 真。由 $P$ 真与 $P \\to Q$ 真，逼出 $Q$ 真。由 $Q$ 真与 $Q \\to R$ 真，逼出 $R$ 真。而前提三要求 $R$ 假。同一变项 $R$ 既真又假，矛盾。

### 第三步：宣布结果

矛盾说明反证假定不可能成立，即不存在前提真结论假的行，论证有效。

反过来看无效的情形：判定 $P \\to Q,\\ Q \\therefore P$。假定 $P$ 假、$Q$ 真，则 $P \\to Q$ 为真，两个前提都满足，结论为假，没有任何冲突。这组赋值就是反例，论证无效。

### 第四步：处理不相容前提

若假定前提全真就已经导致矛盾，说明前提集不相容。例如 $P \\to Q,\\ P,\\ \\neg Q$：由 $P$ 与 $P \\to Q$ 得 $Q$，与 $\\neg Q$ 冲突。此时任何结论都「有效」，因为前提永远不可能同时为真。

## 例题与分析

**例 1（易）**判定 $P \\land Q \\therefore P$。

**分析**：假定 $P \\land Q$ 真、$P$ 假，则合取为真要求 $P$ 真，矛盾。有效。整个过程只用了两步，比画四行表快得多。

**例 2（中）**判定 $P \\lor Q,\\ \\neg P \\therefore Q$。

**分析**：假定两前提真、结论 $Q$ 假。$\\neg P$ 真给 $P$ 假。$P \\lor Q$ 真而 $P$ 假，逼出 $Q$ 真，与假定冲突。有效，这就是 DS。

**例 3（难）**判定 $(P \\lor Q) \\to R,\\ \\neg R \\therefore \\neg P \\land \\neg Q$。

**分析**：假定前提真、结论假。结论是合取，为假有两种可能：$P$ 真或 $Q$ 真。分别试：若 $P$ 真，则 $P \\lor Q$ 真，由第一个条件句得 $R$ 真，与 $\\neg R$ 冲突；若 $Q$ 真，同理冲突。两支都矛盾，故有效。这里要注意：结论为假时要分情况讨论，不能只试一支就下结论。

## 反例训练

> 前提：如果复习了就能通过，而且确实通过了。结论：复习了。

**问题所在**：这是肯定后件，但用简化真值表的错误用法会被「证成」有效。

$$P \\to Q,\\ Q \\therefore P$$

正确做法是假定结论假：$P$ 假、$Q$ 真。此时 $P \\to Q$ 为真，两前提都真，毫无矛盾——一致赋值存在，反例成立，论证无效。

常见的错误做法是假定**结论为真**去检查前提能否同真：$P$ 真、$Q$ 真，一切顺利，于是误判为有效。方向一反，任何论证都能「通过检验」。反证法的第一步永远是否定结论。

## 现实应用

- **故障定位**：假定「不是电源问题」，看是否推出与现象冲突的结论，这与简化真值表同构。
- **SAT 求解器**：工业级可满足性求解器本质就是带高效剪枝的赋值搜索，找一致赋值等价于找反例。
- **法律质证**：假定对方版本为真，推出与在案证据冲突之处，即完成一次归谬。
- **需求评审**：假定某条需求可满足，逐条检查约束，冲突处往往就是需求文档的自相矛盾。

## 本节总结

**核心概念**：简化真值表、反证假定、强制赋值、不相容性。

**关键规则**

1. 第一步永远是否定结论，同时让前提全真。
2. 推出矛盾则有效；得到一致赋值则无效，该赋值即反例。
3. 结论为合取时，其假有多种情形，需逐一排除。

**常见错误**：假定结论为真；只讨论一种情况就宣布矛盾；把前提不相容误判为论证无效。

**需要掌握的能力**：不画完整真值表，用三五步赋值判定常见论证的有效性，并规范写出结论依据。
`,quiz:[{id:"s3-13-q1",type:"single",stem:"简化真值表方法的第一步是：",options:["假定结论为真，检查前提是否都为真","假定前提全真、结论为假","列出所有变项的全部真值组合","假定前提全假，检查结论是否为假"],answer:"B",explanation:"该方法是反证法：先构造「论证无效」的情形，即前提全真而结论假，再看这一假定能否成立。假定结论为真是最常见的致命错误。",skill:"反证假定的写法"},{id:"s3-13-q2",type:"judge",stem:"在赋值过程中推出矛盾，说明论证无效。",answer:!1,explanation:"推出矛盾说明「前提真结论假」的假定不成立，即不存在反例行，论证有效。得到一致赋值才说明无效。方向记反会导致全盘判断相反。",skill:"矛盾与有效性的关系"},{id:"s3-13-q3",type:"single",stem:"若一个论证的前提集不相容，则该论证：",options:["一定无效，因为前提有矛盾","一定有效，因为不存在前提全真的行","无法判定","有效性取决于结论是否为真"],answer:"B",explanation:"前提集无任何一行同时为真，反例行自然不存在，按定义论证有效。这种有效是空真的，没有实际论证价值，但逻辑判定仍是有效。",skill:"不相容前提"},{id:"s3-13-q4",type:"multi",stem:"用简化真值表判定 $(P \\lor Q) \\to R,\\ \\neg R \\therefore \\neg P \\land \\neg Q$ 时，需要注意：（多选）",options:["结论是合取，为假有两种可能","需要对 $P$ 真与 $Q$ 真分别讨论","只要一种情况推出矛盾即可判定有效","两种可能都矛盾才能判定有效"],answer:["A","B","D"],explanation:"合取为假意味着至少一支为假，有 $P$ 真、$Q$ 真两种情形。必须把两种都排除，才能断定不存在反例；只排除一种不足以判有效。",skill:"分情况讨论"},{id:"s3-13-q5",type:"short",stem:"用简化真值表判定 $P \\to Q,\\ Q \\to R,\\ \\neg R \\therefore \\neg P$ 是否有效，写出关键步骤。",keywords:[["假定","结论假","前提真"],["P 真","Q 真","R 真"],["矛盾","有效"]],answer:"假定结论 $\\neg P$ 假，则 $P$ 真；由 $P \\to Q$ 得 $Q$ 真；由 $Q \\to R$ 得 $R$ 真；但前提 $\\neg R$ 要求 $R$ 假。$R$ 既真又假，矛盾，故假定不成立，论证有效。",explanation:"关键是按连接词逐步强制赋值，直到同一变项出现两个值。能指出矛盾所在的具体变项，说明程序执行到位。",skill:"简化真值表"}]},{id:"s3-14",no:32,code:"9.11–9.12",title:"条件证明与间接证明",stage:3,chapter:"第9章 命题逻辑Ⅱ：演绎方法",minutes:18,lead:"要证明「如果 A 那么 B」，最自然的办法是什么？先假设 A 成立，看看能不能走到 B。这个日常思路，凭什么能变成一条严格的证明规则？",objectives:["用条件证明（CP）推出形如 $p \\to q$ 的结论，并正确解除假定","用间接证明（IP）从结论的否定推出矛盾","说明假定行的作用范围，避免把未解除的假定当结论"],concepts:["条件证明","间接证明","假定","解除假定","归谬"],body:`
## 核心定义

**专业定义**：条件证明（CP）为推出 $p \\to q$，先引入 $p$ 作为假定，在假定有效范围内推出 $q$，然后解除假定，得到 $p \\to q$。间接证明（IP）为推出任一结论 $p$，先假定 $\\neg p$，推出矛盾，从而得 $p$。

**通俗解释**：CP 是「先借后还」：借一个前提用几行，用完还掉，账上多了「如果…那么…」这条结论。IP 是「假设对方错，逼出荒唐」，荒唐一出，原结论就站住了。

**关键术语**

- **假定（AP）**：临时引入的公式，必须被解除。
- **子证明**：假定管辖的那几行，通常用缩进或竖线标出。
- **解除**：假定关闭，结论写成条件句或原结论。
- **归谬**：由假定推出矛盾，从而否定假定。

**容易混淆的概念**

> CP 的结论是条件句，IP 的结论可以是任意公式。要证 $p \\to q$，优先考虑 CP；要证原子公式或否定式，优先考虑 IP。

> 假定 ≠ 前提。假定只是临时借用，不能在被解除后继续引用；前提则全程可用。

## 理论讲解

### 第一步：看清 CP 的写法

论证：$P \\to Q \\therefore P \\to (P \\land Q)$。

1. $P \\to Q$　　　　P
2. $\\mid P$　　　　　AP（CP 假定）
3. $\\mid Q$　　　　　1, 2 MP
4. $\\mid P \\land Q$　　2, 3 Conj
5. $P \\to (P \\land Q)$　2–4 CP

第 2 行的竖线表示假定开始，第 5 行把 2 到 4 的整段收成条件句。收的时候前件是假定，后件是子证明的最后一行。

### 第二步：看清 IP 的写法

论证：$P \\to Q,\\ P \\to \\neg Q \\therefore \\neg P$。

1. $P \\to Q$　　　P
2. $P \\to \\neg Q$　　P
3. $\\mid P$　　　　AP（IP 假定 $\\neg\\neg P$，用 DN 写作 $P$）
4. $\\mid Q$　　　　1, 3 MP
5. $\\mid \\neg Q$　　2, 3 MP
6. $\\mid Q \\land \\neg Q$　4, 5 Conj
7. $\\neg P$　　　　3–6 IP

第 6 行是矛盾式，出现它，假定就必须被否决，结论为假定的否定。

### 第三步：掌握解除的三条纪律

- 假定必须解除，证明的最后一行不能落在子证明内部。
- 解除后不能引用子证明里的行，因为那些行依赖假定。
- CP 的结论必须写成「假定 $\\to$ 子证明末行」；IP 的结论是假定的否定。

违反任何一条，证明就不合法，即使结论碰巧为真。

## 例题与分析

**例 1（易）**用 CP 证明 $P \\therefore Q \\to P$。

**分析**：1. $P$ P；2. $\\mid Q$ AP；3. $\\mid P$ 1 重述；4. $Q \\to P$ 2–3 CP。第 3 行看似多余，却是必需的：子证明的末行必须是后件。这类「重复前提」的证明在逻辑上有效，也说明重言式为何没有信息量。

**例 2（中）**用 CP 证明 $(P \\land Q) \\to R \\therefore P \\to (Q \\to R)$。

**分析**：1. $(P \\land Q) \\to R$ P；2. $\\mid P$ AP；3. $\\mid\\mid Q$ AP；4. $\\mid\\mid P \\land Q$ 2, 3 Conj；5. $\\mid\\mid R$ 1, 4 MP；6. $\\mid Q \\to R$ 3–5 CP；7. $P \\to (Q \\to R)$ 2–6 CP。CP 可以嵌套，每层各解除一次，缩进层级必须对齐。

**例 3（难）**用 IP 证明 $P \\lor Q,\\ P \\to R,\\ Q \\to R \\therefore R$。

**分析**：1. $P \\lor Q$ P；2. $P \\to R$ P；3. $Q \\to R$ P；4. $\\mid \\neg R$ AP；5. $\\mid \\neg P$ 2, 4 MT；6. $\\mid \\neg Q$ 3, 4 MT；7. $\\mid \\neg P \\land \\neg Q$ 5, 6 Conj；8. $\\mid \\neg(P \\lor Q)$ 7 DeM；9. $\\mid (P \\lor Q) \\land \\neg(P \\lor Q)$ 1, 8 Conj；10. $R$ 4–9 IP。这条证明漂亮之处在第 8 步：用德摩根把两个否定合成对析取的否定，正面对撞前提一。

## 反例训练

> 假定张三是作案人。由现场痕迹可知他熟悉仓库。所以，张三是作案人。

**问题所在**：假定从未解除，却被当成结论使用。这在证明里等于把 AP 行直接抄到最后。

形式化：1. $\\mid P$ AP；2. $\\mid Q$ ……；3. 宣布 $P$。

$$\\text{合法结论只能是}\\ P \\to Q,\\ \\text{不能是}\\ P$$

反例指派：$P$ 假、$Q$ 真——张三不是作案人，但他熟悉仓库（他是仓库管理员）。此时子证明里的两步都成立，而「张三是作案人」为假。可见未解除的假定不能当结论。

要救这个论证，只能把结论改写成「如果张三是作案人，那么他熟悉仓库」，而这就成了另一个（且更弱的）主张。

## 现实应用

- **数学证明**：几乎所有「若…则…」的定理都用 CP，「反证法」用 IP，两种写法贯穿分析学与代数。
- **算法正确性**：证明「若输入满足前置条件，则输出满足后置条件」，标准做法就是假定前置条件成立再推后置条件。
- **谈判预案**：「假设对方拒绝降价，我们还有哪些牌」——先假定再推演，正是 CP 的思维形态。
- **排查故障**：假定某部件正常，若推出与现象冲突，则该部件可疑，这是 IP 的工程版。

## 本节总结

**核心概念**：条件证明、间接证明、假定、解除、归谬。

**关键规则**

1. CP：假定前件，推出后件，解除后得条件句。
2. IP：假定结论的否定，推出矛盾，得结论。
3. 假定必须解除，解除后其内部行不得再引用。

**常见错误**：假定当结论；CP 收尾时忘写箭头；IP 假定成结论本身；嵌套 CP 缩进错层。

**需要掌握的能力**：看到条件句结论就用 CP，看到否定式或原子结论就试 IP，并写出层级清晰的子证明。
`,quiz:[{id:"s3-14-q1",type:"single",stem:"要用条件证明（CP）推出 $P \\to Q$，应当：",options:["假定 $P$，推出 $Q$，解除假定","假定 $\\neg P$，推出矛盾","假定 $Q$，推出 $P$","直接由前提用 MP 得 $Q$"],answer:"A",explanation:"CP 的固定套路是假定前件、导出后件、解除假定。B 是 IP 的做法，C 会证成逆命题，D 忽略了对条件句结论的需要。",skill:"条件证明的步骤"},{id:"s3-14-q2",type:"judge",stem:"子证明中被解除的假定行，在解除之后仍然可以被后面的行引用。",answer:!1,explanation:"解除后那些行依赖临时假定，不再无条件成立，因此不得再引用。引用它们等于偷偷把假定当前提，是最典型的一类非法证明。",skill:"解除假定的纪律"},{id:"s3-14-q3",type:"single",stem:"间接证明（IP）最后一步得到的结论是：",options:["假定本身","假定的否定","一个条件句","任意一个重言式"],answer:"B",explanation:"IP 假定 $\\neg p$ 并推出矛盾，矛盾否定假定，故得 $\\neg\\neg p$，即 $p$，也就是假定的否定。C 描述的是 CP 的结果形态。收尾公式与假定正好相反，写错方向等于白证。",skill:"间接证明的结论"},{id:"s3-14-q4",type:"multi",stem:"下列关于 CP 与 IP 的说法，正确的有：（多选）",options:["CP 适合结论为条件句的情形","IP 适合结论为原子公式或否定式的情形","两种证明都可以嵌套使用","CP 的假定不需要解除"],answer:["A","B","C"],explanation:"结论形态决定策略选择，二者都可嵌套，每层各自解除。D 错：任何假定都必须解除，否则证明不合法。实战里先看结论的主连接词，是箭头就用 CP，其他形状先试 IP。",skill:"CP 与 IP 的选择"},{id:"s3-14-q5",type:"short",stem:"为什么「假定 $P$，推出 $Q$，所以 $P$」不是合法证明？请说明并给出正确结论。",keywords:[["假定","未解除","依赖"],["条件句","P 蕴含 Q","结论"],["反例","前提真结论假"]],answer:"第 3 行仍处于假定管辖范围内，$Q$ 依赖 $P$，不能把 $P$ 当作无条件成立的结论。合法的收尾是解除假定，写成 $P \\to Q$。若直接宣布 $P$，取 $P$ 假 $Q$ 真即可构成反例。",explanation:"要点是假定必须在解除后才能产生结论，且结论形态由解除方式决定：CP 得条件句，IP 得否定式。只指出「不严谨」而不说明依赖关系，理由不充分。",skill:"解除假定"}]}],Q3=[{id:"s4-01",no:33,code:"5.1–5.3",title:"直言命题与四种形式",stage:4,chapter:"第5章 直言命题",minutes:16,lead:"「所有闪光的东西都不是金子」和「有的金子不闪光」，这两句话到底哪句更强？再想想，「所有 S 是 P」有没有顺带说过「世界上有 S」？",objectives:["拆出任意一句标准直言命题的量项、主项、联项、谓项","按质与量的交叉，把命题归入 A、E、I、O 四种形式","说明「有的」在逻辑中的确切含义，并纠正日常理解"],concepts:["直言命题","主项与谓项","量项与联项","A/E/I/O 命题","标准形式"],body:`
## 核心定义

**专业定义**：直言命题（categorical proposition）是直接断定两类对象之间包含或排斥关系的命题。它不附加条件、不做假设，只说明 S 这一类与 P 这一类的关系。

**通俗解释**：一句话，把一堆东西装进另一个框里，或者把它们挡在框外。「所有猫都是哺乳动物」是把猫装进哺乳动物的框；「没有猫是爬行动物」是把猫挡在爬行动物的框外。

**关键术语**

- **主项（subject term，记作 S）**：被断定的那一类对象。
- **谓项（predicate term，记作 P）**：用来断定主项的那一类对象。
- **量项（quantifier）**：说明主项外延被涉及多少，分全称（所有、一切、凡）与特称（有的、有些、至少有一个）。
- **联项（copula）**：肯定（是）或否定（不是）。
- **A/E/I/O**：四种标准形式的传统代号，取自拉丁语 AffIrmo（我肯定）与 nEgO（我否定）里的元音。

**容易混淆的概念**

> 「所有 S 是 P」不等于「所有 P 是 S」。前者说 S 落在 P 里面，后者说 P 落在 S 里面，方向一反，意思全变。

> 「有的」在逻辑里是「至少有一个」，不是「只有一部分」。说「有的 S 是 P」时，即使实际上所有 S 都是 P，这句话照样为真——它没有排除全部。

## 理论讲解

### 第一步：拆开一句话的四个零件

「所有 金属 都是 导电的」——量项「所有」、主项「金属」、联项「都是」、谓项「导电的」。

任何标准直言命题都由这四个零件拼成。拆不出来，通常说明这句话不是直言命题，或者需要先改写。

### 第二步：质与量交叉，得到四种形式

质分肯定、否定；量分全称、特称。两两交叉，正好四种：

| 代号 | 名称 | 形式 | 例子 |
| A | 全称肯定 | 所有 S 是 P | 所有哺乳动物都是脊椎动物 |
| E | 全称否定 | 所有 S 不是 P | 没有哺乳动物是卵生的 |
| I | 特称肯定 | 有的 S 是 P | 有的哺乳动物是水生动物 |
| O | 特称否定 | 有的 S 不是 P | 有的哺乳动物不是陆生的 |

注意 E 的两种说法——「所有 S 不是 P」与「没有 S 是 P」——是同一个命题，不要当成两类。

### 第三步：写成符号形式

$$A:\\ \\text{所有 } S \\text{ 是 } P \\qquad E:\\ \\text{所有 } S \\text{ 不是 } P$$

$$I:\\ \\text{有的 } S \\text{ 是 } P \\qquad O:\\ \\text{有的 } S \\text{ 不是 } P$$

记忆顺序：先看量（A、E 全称，I、O 特称），再看质（A、I 肯定，E、O 否定）。四个字母不是随意排的，它正好把「全称肯定、全称否定、特称肯定、特称否定」按这个次序锁死。

### 第四步：判断一句话是不是直言命题

三个检验点：有没有明确的主项类、有没有明确的谓项类、有没有断定包含或排斥。三者齐全才是直言命题。

「如果下雨，地就湿」不是——它有条件，不是直接断定两类对象的包含关系。「今天真冷」也不是——它没有谓项类，只是感叹。

## 例题与分析

**例 1（易）**「有些鸟不会飞」属于哪一种？

**分析**：量项「有些」是特称，联项「不会」是否定，所以是 O 命题。主项「鸟」，谓项「会飞的（东西）」。注意否定词挂在谓项上，不是否定整句。

**例 2（中）**「没有无神论者是教徒」——指出主项、谓项、量项、联项，并写出代号。

**分析**：这句话等于「所有无神论者都不是教徒」。量项是全称（藏在「没有…是」里），联项「不是」，主项「无神论者」，谓项「教徒」。这是 E 命题。

易错点：看到「没有」就以为是否定特称命题。其实「没有 S 是 P」是彻底的全称否定，它把 S 的每一个成员都排除出 P。

**例 3（难）**「只有会员才能进入」是不是直言命题？如何改写？

**分析**：直接看不是——没有明显的量项，也不是简单的「S 是 P」。「只有 A 才 B」的意思是「B 蕴含 A」，改写成标准形式是「所有 B 都是 A」，即「所有能进入的人都是会员」。

这个改写方向极易搞反。它的意思是「所有能进入的人都是会员」。很多人会读成「所有会员都能进入」，方向正好相反：前者给会员发通行证，后者只给入场者验身份。第 7 章会专门练这类改写，这里先记住方向。

## 反例训练

> 所有参加考试的人都带了准考证，小李带了准考证，所以小李参加了考试。

**问题所在**：中项「带准考证的人」在两个前提里都是肯定命题的谓项，一次也没有被断定涉及全部外延。带准考证的人可能远多于考生——监考老师也带证。

形式上：

$$P-M,\\ S-M\\ \\therefore\\ S-P$$

这是第二格的 AII 式。第二格 AII 不在有效形式表里，无效。

## 现实应用

- **读合同**：「乙方应在收到货物后十日内付款」不是「所有付款都在收货后十日内」。前者是义务，后者是描述。先改写成「所有…都…」的骨架，歧义会立刻现形。
- **写论文**：把「研究表明」改写成「所有 X 都是 Y」或「有的 X 是 Y」，你会马上发现自己的样本撑不起全称。
- **听汇报**：「有的客户不满意」和「所有客户都不满意」在情绪上差得很远，在逻辑上只差一个量项。
- **辨别广告**：「用过的人都说好」与「有人说好」，前者要对全体举证，后者只需举证一人。

## 本节总结

**核心概念**：直言命题、主项、谓项、量项、联项、A/E/I/O 四种形式。

**关键规则**

1. 标准直言命题＝量项＋主项＋联项＋谓项。
2. A 全称肯定、E 全称否定、I 特称肯定、O 特称否定。
3. 「有的」＝至少有一个，不排除全部。
4. 「没有 S 是 P」＝「所有 S 不是 P」，是 E 不是 O。

**常见错误**：把「有的」理解成「只有一部分」；把「没有…是」当成特称命题；把 A 命题的方向颠倒成「所有 P 是 S」。

**需要掌握的能力**：拿到任意一句中文，能判断它是不是直言命题，能拆出四个零件，能写出代号。
`,quiz:[{id:"s4-01-q1",type:"single",stem:"「有的学生不是团员」属于哪一种直言命题？",options:["A 全称肯定","E 全称否定","I 特称肯定","O 特称否定"],answer:"D",explanation:"量项「有的」是特称，联项「不是」是否定，所以是 O 命题。A 与 E 是全称，I 是特称肯定，都不符合。",skill:"A/E/I/O 四种形式"},{id:"s4-01-q2",type:"judge",stem:"「有的 S 是 P」意味着「并非所有 S 都是 P」。",answer:!1,explanation:"「有的」在逻辑里是「至少有一个」，不排除全部。即使所有 S 都是 P，「有的 S 是 P」仍然为真。要表达「并非所有」，必须说「有的 S 不是 P」。",skill:"「有的」的逻辑含义"},{id:"s4-01-q3",type:"single",stem:"「没有哺乳动物是卵生的」应写作哪种形式？",options:["A：所有哺乳动物都是卵生的","E：所有哺乳动物都不是卵生的","I：有的哺乳动物是卵生的","O：有的哺乳动物不是卵生的"],answer:"B",explanation:"「没有 S 是 P」等于「所有 S 都不是 P」，是全称否定即 E 命题，不是特称否定。看到「没有」就归为 O 是最常见的误判。",skill:"否定命题的归属"},{id:"s4-01-q4",type:"multi",stem:"关于 A 命题「所有 S 是 P」，下列说法正确的有：（多选）",options:["它断定 S 的全体都落在 P 之内","它断定 P 的全体都落在 S 之内","它没有排除 P 中还有 S 之外的东西","它本身没有断定 S 这一类一定有成员"],answer:["A","C","D"],explanation:"A 命题只说 S 包含于 P，不反过来说 P 包含于 S，所以 B 错。C 正是谓项不周延的意思。D 也对：全称命题只表达条件关系，不承诺主项类存在。",skill:"A 命题的含义"},{id:"s4-01-q5",type:"short",stem:"为什么「没有 S 是 P」应当归为全称否定命题，而不是特称否定命题？请结合量项说明。",keywords:[["全称","所有","每一个"],["排除","都不是","无一"],["不是特称","不是有的","不涉及部分"]],answer:"「没有 S 是 P」的意思是 S 的每一个成员都被排除在 P 之外，量上覆盖了 S 的全部，所以是全称；联项是否定，所以是 E 命题。它不等同于「有的 S 不是 P」，后者只涉及部分 S，是 O 命题。",explanation:"关键在于量项：主项外延被全部涉及就是全称，被部分涉及才是特称。「没有」在语义上等于「所有都不」，因此归入 E。",skill:"量项的判定"}]},{id:"s4-02",no:34,code:"5.4",title:"质、量与周延性",stage:4,chapter:"第5章 直言命题",minutes:15,lead:"「所有参加会议的人都签了到」，能不能反过来推出「所有签到的人都参加了会议」？如果不能，究竟是哪个词「越界」了？",objectives:["区分命题的质与量，并说明二者如何组合成四种形式","判定任意直言命题中主项与谓项是否周延","用周延性解释换位推理为什么会失效"],concepts:["质","量","周延","不周延","补类"],body:`
## 核心定义

**专业定义**：质（quality）指命题的联项是肯定还是否定；量（quantity）指量项涉及主项的全部还是部分。周延性（distribution）指一个词项在命题中是否被断定了其全部外延。

**通俗解释**：周延就是「这句话有没有把这类东西一个个都点到」。点到了全部，就周延；只点到一部分，或者压根没点全，就不周延。

**关键术语**

- **周延（distributed）**：词项的全部外延都落在命题的断定范围之内。
- **不周延（undistributed）**：命题只涉及该词项外延的一部分。
- **补类（complement）**：相对于论域的剩余部分，记作非 P。
- **周延性标记**：常用 $S^{+}$ 表示主项周延，$P^{-}$ 表示谓项不周延。

**容易混淆的概念**

> 周延不是「词项重要不重要」，也不是「词项指的东西多不多」。它只看这句话有没有对这类东西的每一个成员作出断定。

> 周延属于「词项在某个特定命题中」的属性，离开具体命题就无从谈起。同一个词「学生」，在「所有学生都及格了」里周延，在「有的学生及格了」里不周延。

## 理论讲解

### 第一步：先分清质与量

「所有 S 不是 P」——量是全称，质是否定。「有的 S 是 P」——量是特称，质是肯定。质与量各两种，交叉正好四种，这就是 A/E/I/O 的来源。

判断顺序建议固定：先看量项定全称还是特称，再看联项定肯定还是否定。顺序一乱就容易把 E 和 O 搞混。

### 第二步：判断主项是否周延

拿主项 S 逐条看，问一句话：这句话有没有对 S 的每一个成员都说了点什么？

- A：所有 S 是 P。每个 S 都被说成 P，S 全部点到，**S 周延**。
- E：所有 S 不是 P。每个 S 都被排除出 P，S 全部点到，**S 周延**。
- I：有的 S 是 P。只说了部分 S，**S 不周延**。
- O：有的 S 不是 P。只说了部分 S，**S 不周延**。

规律很干净：全称命题的主项都周延，特称命题的主项都不周延。

### 第三步：判断谓项是否周延

谓项要看联项。这一步是全部周延判断里最容易记反的地方。

- A：所有 S 是 P。这句话没说 P 里只有 S，P 可能还有别的成员，**P 不周延**。
- E：所有 S 不是 P。这句话把 P 的每一个成员都排除在 S 之外，**P 周延**。
- I：有的 S 是 P。只涉及 P 的一部分，**P 不周延**。
- O：有的 S 不是 P。这句话说的是「有的 S 落在 P 的整个范围之外」，它把 P 全体当成一条边界来排除，**P 周延**。

规律同样干净：否定命题的谓项都周延，肯定命题的谓项都不周延。

### 第四步：汇总成表与口诀

| 命题 | 形式 | 主项 | 谓项 |
| A | 所有 S 是 P | 周延 | 不周延 |
| E | 所有 S 不是 P | 周延 | 周延 |
| I | 有的 S 是 P | 不周延 | 不周延 |
| O | 有的 S 不是 P | 不周延 | 周延 |

$$A:\\ S^{+}P^{-} \\qquad E:\\ S^{+}P^{+} \\qquad I:\\ S^{-}P^{-} \\qquad O:\\ S^{-}P^{+}$$

口诀：主项看量，全称周延；谓项看质，否定周延。

### 第五步：周延性到底有什么用

周延性不是背了好看，它是后面所有换位、三段论规则的计量单位。三段论的「中项至少周延一次」「前提中不周延的词项结论中不得周延」，说的都是这个词。现在把四张周延表记牢，第 6 章会省一半力气。

## 例题与分析

**例 1（易）**「所有法官都受过法律训练」中，哪个词项周延？

**分析**：A 命题。主项「法官」周延，谓项「受过法律训练的人」不周延。因为这句话没有排除「受过法律训练的人」里还有非法官。

**例 2（中）**「有的证人没有说实话」——主项与谓项的周延情况？

**分析**：O 命题。主项「证人」不周延，只涉及部分证人；谓项「说实话的人」周延，因为这部分证人被排除在全部「说实话的人」之外。

这是四种形式里唯一「主项不周延而谓项周延」的情形，最容易被记反。记住它的办法：O 是「部分 S 完全在 P 外面」，P 被整体推开，所以 P 周延。

**例 3（难）**「所有不诚实的人都不是可信的证人」——请指出两个词项并判断周延。

**分析**：主项是「不诚实的人」，一个负词项；谓项是「可信的证人」。E 命题，主项周延、谓项周延。

注意：负词项不改变周延规则。周延只看量项与联项，不看词项本身是正是负。有人看到「不诚实」里的「不」就以为联项变了，其实那个「不」长在词项内部，是词项的一部分。

## 反例训练

> 所有参加会议的人都签了到，所以所有签到的人都参加了会议。

**问题所在**：这是把 A 命题直接换位。前提里「签到的人」是 A 命题的谓项，不周延；结论里它成了主项，周延。前提没说「签到的人」的全部，结论却对它全体下了判断。

形式上：

$$A:\\ S^{+}P^{-}\\ \\therefore\\ A:\\ P^{+}S^{-}$$

从「不周延」跳到「周延」，越界了。有效的形式只能是 $A \\to I$：所有参加会议的人都签了到，所以有的签到的人参加了会议，而且这一步还得假定确实有人参会。

## 现实应用

- **写定义**：定义要求「所有 A 都是 B，且所有 B 都是 A」。只说「所有 A 都是 B」，B 不周延，定义就漏了。
- **看统计**：「所有受访者都支持」与「所有支持者都是受访者」，前者说受访者全支持，后者说支持者全在受访者里，样本代表性完全不同。
- **审反驳**：对方说「所有 X 都是 Y」，你只要举出一个「X 但不是 Y」就能推翻；举出「Y 但不是 X」则毫无作用。知道谓项不周延，就知道该往哪个方向找反例。
- **做分类**：给事物归类时先问「这个类是被全部断定还是被部分断定」，能避免把「有的」当「所有」用。

## 本节总结

**核心概念**：质、量、周延、不周延、补类。

**关键规则**

1. 主项周延看量：全称周延，特称不周延。
2. 谓项周延看质：否定周延，肯定不周延。
3. A 主周谓不周，E 主谓都周，I 都不周，O 主不周谓周。
4. 周延是词项在命题中的性质，不是词项本身的性质。

**常见错误**：把 O 命题的谓项记成不周延；以为「所有 S 是 P」也断定了 P 的全部；把词项的重要性当成周延。

**需要掌握的能力**：看到任何一个标准直言命题，能立刻说出两个词项各自是否周延，并用它判断换位是否越界。
`,quiz:[{id:"s4-02-q1",type:"single",stem:"「有的金属不是固体」中，周延的词项是：",options:["只有主项","只有谓项","主项和谓项都周延","两个都不周延"],answer:"B",explanation:"这是 O 命题，主项「金属」是特称主项不周延，谓项「固体」是否定谓项，周延。O 是唯一主项不周延而谓项周延的形式。",skill:"O 命题的周延性"},{id:"s4-02-q2",type:"judge",stem:"全称命题的谓项一定周延。",answer:!1,explanation:"周延与否要看质，不看量。A 命题虽是全称，谓项却不周延，因为「所有 S 是 P」没排除 P 里还有非 S。只有否定命题的谓项才周延。",skill:"谓项周延规则"},{id:"s4-02-q3",type:"single",stem:"下列命题中，主项与谓项都周延的是：",options:["所有诗人都是敏感的","没有诗人是富翁","有的诗人是富翁","有的诗人不是富翁"],answer:"B",explanation:"B 是 E 命题，全称否定，主项周延、谓项周延。A 是 A 命题谓项不周延，C 是 I 命题都不周延，D 是 O 命题主项不周延。",skill:"四种形式的周延表"},{id:"s4-02-q4",type:"multi",stem:"下列命题中，主项周延的有：（多选）",options:["所有 S 是 P","所有 S 不是 P","有的 S 是 P","有的 S 不是 P"],answer:["A","B"],explanation:"主项是否周延只看量：全称命题的主项周延，特称命题的主项不周延。A 与 B 都是全称，C 与 D 都是特称。",skill:"主项周延规则"},{id:"s4-02-q5",type:"short",stem:"说明为什么 O 命题「有的 S 不是 P」的谓项 P 是周延的。",keywords:[["全部","整个","全体"],["排除","之外","不属于"],["否定","谓项周延"]],answer:"O 命题断定「至少有一个 S 落在 P 的全部范围之外」，也就是把这个 S 与 P 的每一个成员都隔开。既然 P 的全体都被当作边界来排除，P 的外延就被完整涉及，所以周延。",explanation:"关键在于 O 命题断定「有的 S 完全不在 P 里」，P 的全体被当作边界推开，因而周延。若读成「有的 S 是 P 的一部分」，就会误判为不周延。",skill:"O 命题谓项周延的理由"}]},{id:"s4-03",no:35,code:"5.5–5.6",title:"对当方阵与其他直接推论",stage:4,chapter:"第5章 直言命题",minutes:17,lead:"「所有玫瑰都是植物」和「有的玫瑰不是植物」，这两句话能不能同时为真？四句关于同一对概念的话，真假之间到底被什么锁住了？",objectives:["画出对当方阵，说明矛盾、反对、下反对、差等四种关系的真假约束","运用换质法、换位法、换质位法改写命题并判断是否等值","识别 A 命题换位与 O 命题换位中的越界错误"],concepts:["对当关系","矛盾关系","反对与下反对","差等关系","换质法","换位法","换质位法"],body:`
## 核心定义

**专业定义**：对当关系指主项与谓项都相同的 A、E、I、O 四种命题之间，由其中一个的真假可以推出另一个真假的固定关系。直接推论指只用一个前提就能推出结论的推理，包括换质法、换位法、换质位法。

**通俗解释**：四句话说的是同一对概念，只是说法不同。既然说的是同一件事，真假就互相牵制——知道一句的真假，往往就知道另外三句。

**关键术语**

- **矛盾关系（contradictory）**：A 与 O、E 与 I，必一真一假。
- **反对关系（contrary）**：A 与 E，不可同真，可以同假。
- **下反对关系（subcontrary）**：I 与 O，不可同假，可以同真。
- **差等关系（subalternation）**：A 与 I、E 与 O，全称真则特称真。
- **换质法（obversion）**：改联项，谓项换成补类。
- **换位法（conversion）**：交换主项与谓项。
- **换质位法（contraposition）**：先换质，再换位。

**容易混淆的概念**

> 反对关系的准确含义是「不能同时为真」，与日常说的「互相反对」无关。两句不能同真，但可以同时为假。比如「所有学生都及格」和「所有学生都没及格」，若实际只有一半及格，两句都假。

> 换位不是把句子倒过来念。「所有 S 是 P」换位得「有的 P 是 S」，不是「所有 P 是 S」。

## 理论讲解

### 第一步：把四种命题摆成方阵

|  | 肯定 | 否定 |
| 全称 | A | E |
| 特称 | I | O |

方阵的四组关系按位置记：

- 上排 A 与 E 横向相对：**反对**。
- 下排 I 与 O 横向相对：**下反对**。
- 上下 A 与 I、E 与 O 纵向相对：**差等**。
- 对角线 A 与 O、E 与 I：**矛盾**。

### 第二步：四种关系各自的真假约束

- **矛盾（A-O、E-I）**：必一真一假。这是最强的关系，两种解释下都成立。
- **反对（A-E）**：不能同真，因为「所有 S 是 P」与「所有 S 不是 P」不可能同时对每个 S 都成立；但可以同假。
- **下反对（I-O）**：不能同假。两个都假就意味着既没有 S 是 P 也没有 S 不是 P，这只有在 S 不存在时才可能。
- **差等（A-I、E-O）**：全称真则特称真，特称假则全称假。反向不成立——从「有的 S 是 P」推不出「所有 S 是 P」。

### 第三步：换质法——改质加补类

规则：联项反转，谓项换成补类，量项与主项都不动。四种命题全部适用，而且是等值变换。

$$A:\\ \\text{所有 } S \\text{ 是 } P \\ \\equiv\\ E:\\ \\text{所有 } S \\text{ 不是非}P$$

$$E:\\ \\text{所有 } S \\text{ 不是 } P \\ \\equiv\\ A:\\ \\text{所有 } S \\text{ 是非}P$$

$$I:\\ \\text{有的 } S \\text{ 是 } P \\ \\equiv\\ O:\\ \\text{有的 } S \\text{ 不是非}P$$

$$O:\\ \\text{有的 } S \\text{ 不是 } P \\ \\equiv\\ I:\\ \\text{有的 } S \\text{ 是非}P$$

口诀：换质不换量，肯定变否定，谓项加个「非」。因为只是换了说法，所以真假完全不变。

### 第四步：换位法——交换主谓项

规则：主谓互换，质不变。能不能换，要看周延性。

- E 与 I：直接换，形式不变，这叫**简单换位**，是等值变换。
  - 所有 S 不是 P ≡ 所有 P 不是 S
  - 有的 S 是 P ≡ 有的 P 是 S
- A：不能直接换成 A，只能**限制换位**为 I。
  - 所有 S 是 P ∴ 有的 P 是 S
  - 这一步要求 S 存在，第 36 课会讲。
- O：**不能换位**。「有的 S 不是 P」换成「有的 P 不是 S」不成立。反例：有的动物不是狗，推不出有的狗不是动物。

为什么 A 只能降为 I？因为 A 的谓项不周延，换位后成了主项会变周延，只能靠把结论降成特称（特称主项不周延）来避免越界。

### 第五步：换质位法——先换质再换位

对 A 和 O 是等值变换：

$$A:\\ \\text{所有 } S \\text{ 是 } P \\ \\equiv\\ \\text{所有非}P \\text{ 是非}S$$

$$O:\\ \\text{有的 } S \\text{ 不是 } P \\ \\equiv\\ \\text{有的非}P \\text{ 是非}S$$

E 做换质位会得到 O，有效但方向单向，不等值。I 不能做换质位。

## 例题与分析

**例 1（易）**「所有玫瑰都是植物」的矛盾命题是什么？

**分析**：矛盾是 O：「有的玫瑰不是植物」。不是 E——E 与 A 是反对关系，可以同假。

**例 2（中）**已知「有的学生不是党员」为真，能推出「所有学生都是党员」的真假吗？

**分析**：O 真，则 A 必假，这是矛盾关系唯一确定的结论。E 与 I 的真假不能确定：O 真时 I 可真可假，E 也可真可假。所以只答「A 假」是完整的，多答就超范围了。

**例 3（难）**把「所有不守时的人都是不可靠的」做换质位。

**分析**：设 S＝不守时的人，P＝不可靠的。换质位的结果应是「所有非 P 是非 S」，即「所有可靠的人都是守时的人」。

逐步验证：先换质，A 变 E——「所有不守时的人都不是可靠的」；再换位，E 换 E——「所有可靠的都不是不守时的人」；最后再换质，E 变 A——「所有可靠的人都是守时的」。三步走完，与公式一致。

## 反例训练

> 所有金属都导电，所以所有导电的都是金属。

**问题所在**：把 A 命题直接换位成 A。A 的谓项「导电的」在前提中不周延，换位后成了主项，周延了。前提没说导电的东西只有金属，结论却这么断言。

形式上：

$$A:\\ \\text{所有 } S \\text{ 是 } P\\ \\therefore\\ A:\\ \\text{所有 } P \\text{ 是 } S$$

正确做法只能降为 I：所有金属都导电，所以有的导电的是金属。

反例：盐水导电，但盐水不是金属。前提真、结论假，形式无效。

## 现实应用

- **辩论**：对方说「所有 A 都是 B」，你若反驳「所有 B 都是 A」，攻击就落空了。先做换位，才知道对方到底承诺了什么。
- **法律条文**：「所有违反第 3 条的行为都应处罚」不能换位成「所有应处罚的行为都违反第 3 条」，后者会凭空扩大条文适用范围。
- **考试复习**：把四句话写成方阵，记住「矛盾最强、反对次之、差等单向」，比死背十二句推断省力得多。
- **日常推断**：从「有的同学没交作业」只能推出「并非所有人都交了」，推不出「所有人都不交」。这两步之间隔着整个方阵。

## 本节总结

**核心概念**：对当关系（矛盾、反对、下反对、差等）、换质法、换位法、换质位法。

**关键规则**

1. 矛盾必一真一假：A-O、E-I。
2. 反对不可同真：A-E。下反对不可同假：I-O。
3. 差等单向：全称真推特称真，特称假推全称假。
4. 换质四种都行；换位只有 E、I 可直接换，A 降为 I，O 不行。
5. 换质位对 A、O 等值。

**常见错误**：把 A 换位成 A；以为 O 能换位；把「反对」当成「一定一真一假」。

**需要掌握的能力**：给出一个命题，能写出它的矛盾、反对、换质、换位、换质位形式，并分清哪些是等值、哪些只是单向蕴含。
`,quiz:[{id:"s4-03-q1",type:"single",stem:"与「所有鲸都是哺乳动物」构成矛盾关系的是：",options:["所有鲸都不是哺乳动物","有的鲸是哺乳动物","有的鲸不是哺乳动物","没有鲸是哺乳动物"],answer:"C",explanation:"A 命题的矛盾是 O 命题「有的鲸不是哺乳动物」，二者必一真一假。A 与 E 是反对关系，E 与 I 才是矛盾。",skill:"矛盾关系"},{id:"s4-03-q2",type:"judge",stem:"「所有 S 是 P」可以换位为「所有 P 是 S」。",answer:!1,explanation:"A 命题只能限制换位为 I，即「有的 P 是 S」。直接换成 A 会让原本不周延的谓项在结论中变成周延的主项，属越界。",skill:"A 命题的限制换位"},{id:"s4-03-q3",type:"single",stem:"「有的鸟不会飞」做换质法，得到：",options:["有的鸟会飞","有的鸟不是不会飞的","所有鸟都不会飞","有的不会飞的是鸟"],answer:"B",explanation:"换质法是改联项、谓项取补类，原命题是 O，换质后变 I：「有的鸟是不会飞的（东西）的否定」即「有的鸟不是不会飞的」。D 是换位，不是换质。",skill:"换质法"},{id:"s4-03-q4",type:"multi",stem:"下列直接推论中，属于等值变换的有：（多选）",options:["A 命题换质为 E 命题","E 命题换位为 E 命题","I 命题换位为 I 命题","A 命题换位为 I 命题"],answer:["A","B","C"],explanation:"换质对四种命题都是等值；E 与 I 的换位是简单换位，也等值。A 换位为 I 只是单向蕴含，还需要主项存在，不等值。",skill:"等值与蕴含的区分"},{id:"s4-03-q5",type:"short",stem:"为什么 O 命题不能换位？请举一个反例说明。",keywords:[["不能换位","不成立","无效"],["反例","有的动物不是狗"],["狗","动物"],["主项","不周延"]],answer:"O 命题换位会把不周延的主项变成周延的主项，越界。反例：从「有的动物不是狗」推不出「有的狗不是动物」——前提真而结论假，因为所有狗都是动物。",explanation:"O 的主项是特称主项，不周延；换位后它成了否定命题的谓项，变成周延。这一步周延性升级，形式无效。",skill:"O 命题不能换位"}]},{id:"s4-04",no:36,code:"5.7",title:"存在含义与现代解释",stage:4,chapter:"第5章 直言命题",minutes:16,lead:"「所有独角兽都有角」这句话是真的还是假的？如果世界上根本没有独角兽，它是在说谎，还是在说一句没法被推翻的话？",objectives:["说明存在含义在传统解释与现代解释中的不同约定","列出主项为空时 A/E/I/O 在两种解释下的真值","指出哪些三段论形式因存在假定而在现代解释下失效"],concepts:["存在含义","传统解释","现代解释","空真","存在谬误"],body:`
## 核心定义

**专业定义**：存在含义（existential import）指一个命题是否断定了主项所指的类至少有一个成员。传统解释（亚里士多德）认为全称命题有存在含义；现代解释（布尔）认为全称命题没有存在含义。

**通俗解释**：「所有独角兽都有角」到底有没有说过「世界上有独角兽」？传统逻辑说：说了。现代逻辑说：没说，它只说「如果有独角兽，那它就有角」。

**关键术语**

- **传统解释**：假定主项类非空，A 命题蕴含 I 命题。
- **现代解释**：不假定主项存在，A 命题是条件命题，主项为空时为真。
- **空真（vacuously true）**：因为主项类为空，命题没有被违反的机会，所以为真。
- **存在谬误（existential fallacy）**：从没有存在含义的全称前提推出有存在含义的特称结论。

**容易混淆的概念**

> 「所有 S 是 P」为真，不等于「有 S」。现代解释下主项为空时 A 命题为真，但它什么存在也没断定。

> 两种解释是两套不同的约定，谈不上谁对谁错。选哪套，取决于你愿不愿意承担存在承诺。

## 理论讲解

### 第一步：看主项为空时会发生什么

设 S＝独角兽（不存在），P＝有角的动物。

- 「所有独角兽都是有角的」：现代解释下为真，因为找不到反例。
- 「有的独角兽是有角的」：两种解释下都为假，因为一个独角兽也找不到。

如果坚持「A 真则 I 真」，就会从「所有独角兽有角」推出「有独角兽有角」——凭空造出了存在。这正是传统解释要付的代价。

### 第二步：列出主项为空时的真值表

| 命题 | 传统解释 | 现代解释 |
| A 所有 S 是 P | 假 | 真 |
| E 所有 S 不是 P | 假 | 真 |
| I 有的 S 是 P | 假 | 假 |
| O 有的 S 不是 P | 假 | 假 |

传统解释下 A、E 同时为假，因为它们都预设 S 存在，而预设落空。现代解释下 A、E 同时为真，因为都是空真。

这张表是整个第 5 章最容易考、也最容易记混的地方。记法：传统解释「要真就得真有」，现代解释「没反例就算真」。

### 第三步：看四种对当关系哪些还站得住

- **矛盾（A-O、E-I）**：两种解释下都成立。因为 O 恰恰就是 A 的否定，与主项是否存在无关。
- **反对（A-E）**：传统下成立，现代下不成立（S 空时两句都真）。
- **下反对（I-O）**：传统下成立，现代下不成立（S 空时两句都假）。
- **差等（A-I、E-O）**：传统下成立，现代下不成立。

结论：**现代解释下只剩矛盾关系是普遍有效的**。上一课画的完整方阵，在现代解释里要拆掉三条边，只留两条对角线。

### 第四步：看三段论受到什么影响

十五个有效形式里，有四个依赖存在含义：

| 形式 | 格 | 依赖点 |
| Darapti（AAI-3） | 第 3 格 | 两个全称前提推出特称结论 |
| Felapton（EAO-3） | 第 3 格 | 同上 |
| Bramantip（AAI-4） | 第 4 格 | 同上 |
| Fesapo（EAO-4） | 第 4 格 | 同上 |

再加上 A 命题的限制换位（A 换 I），一共五处。它们在传统解释下有效，现代解释下失效。

原因统一：两个全称前提不保证任何类非空，特称结论却要求有成员。中间那道「存在」是白拿的。

## 例题与分析

**例 1（易）**「所有火星人都是绿色的」在主项不存在时是真是假？

**分析**：现代解释下为真——没有火星人来违反这句话。传统解释下为假——预设落空。答题时必须先说清采用哪种解释，否则这个问题没有唯一答案。

**例 2（中）**从「所有鸟都会飞」能否推出「有的鸟会飞」？

**分析**：传统解释能，现代解释不能。现代解释不保证「鸟」这个类非空。现实中鸟当然存在，所以日常语境下这个推论可用；但形式上它多了一个没写出来的前提「有鸟存在」。

**例 3（难）**某教材说「所有 S 是 P」与「有的 S 是 P」是差等关系，因此前者真则后者真。这句话在什么条件下成立？

**分析**：只在传统解释且 S 非空的条件下成立。现代解释下若 S 为空，「所有 S 是 P」真而「有的 S 是 P」假，差等关系断裂。教材这样写，是采用了传统解释的约定，读者需要知道这个约定，否则会在空类问题上翻车。

## 反例训练

> 所有独角兽都是哺乳动物，所有独角兽都是白色的，所以有的白色动物是哺乳动物。

**问题所在**：这是第三格的 AAI 式（Darapti）。两个前提都是全称，都没有断定「有独角兽」。结论却是特称，要求存在。在独角兽不存在的情形下，两个前提都真（空真），结论假。

形式上：

$$A:\\ M^{+}P^{-},\\ A:\\ M^{+}S^{-}\\ \\therefore\\ I:\\ S^{-}P^{-}$$

结论要求 S 与 P 的交集非空，前提只说了 M 包含于两者，没说 M 非空。传统解释偷偷补上「M 存在」，现代解释不补。

## 现实应用

- **法律推理**：「所有违反本条例的行为都应受处罚」本身不保证有人违反过，从它推不出「有人应受处罚」。
- **科学假说**：「所有暗物质粒子都不发光」不承诺暗物质存在，只承诺「若存在则不发光」。这是假说的标准写法。
- **数据库查询**：SQL 对空表做全称检查总是通过，与现代解释的空真一致。写业务规则时要特别小心这个陷阱。
- **哲学讨论**：本体论论证常被批评为从概念推出存在，其逻辑症结正是把全称命题的存在含义当成了免费赠品。

## 本节总结

**核心概念**：存在含义、传统解释、现代解释、空真、存在谬误。

**关键规则**

1. 传统解释：全称命题有存在含义，A 蕴含 I。
2. 现代解释：全称命题无存在含义，主项空时 A、E 为真。
3. 现代解释下只有矛盾关系普遍成立。
4. Darapti、Felapton、Bramantip、Fesapo 以及 A 的限制换位在现代解释下失效。

**常见错误**：不声明解释就混用两套规则；从全称命题直接推出特称命题；把「所有 S 是 P」当成「有 S 且 S 是 P」。

**需要掌握的能力**：判断一个推论是否偷用了存在假定，并说明它在哪种解释下成立、在哪种解释下失效。
`,quiz:[{id:"s4-04-q1",type:"single",stem:"在现代（布尔）解释下，当主项类为空时，「所有 S 是 P」的真值是：",options:["真","假","真假不定","没有真值"],answer:"A",explanation:"现代解释把 A 命题看作条件命题，主项为空时找不到反例，所以为真，这叫空真。传统解释下则因预设落空而判为假。",skill:"空真"},{id:"s4-04-q2",type:"judge",stem:"在现代解释下，从「所有 S 是 P」可以推出「有的 S 是 P」。",answer:!1,explanation:"现代解释不假定主项类非空，所以全称命题没有存在含义。若 S 为空，前提真而结论假，这个推论无效。这正是存在谬误。",skill:"存在谬误"},{id:"s4-04-q3",type:"single",stem:"下列三段论形式中，传统解释下有效而现代解释下无效的是：",options:["AAA-1","EAE-2","AAI-3","EIO-1"],answer:"C",explanation:"AAI-3 即 Darapti，两个全称前提推出特称结论，依赖中项类非空。AAA-1、EAE-2、EIO-1 在两个全称前提之外都有一特称或否定前提，不依赖存在。",skill:"存在谬误形式"},{id:"s4-04-q4",type:"multi",stem:"现代解释下，当主项类为空时，下列说法正确的有：（多选）",options:["A 命题与 E 命题可以同时为真","I 命题与 O 命题可以同时为假","A 命题与 O 命题仍然一真一假","A 命题真则 I 命题真"],answer:["A","B","C"],explanation:"主项为空时 A、E 都空真，所以可以同真；I、O 都假，所以可以同假。矛盾关系与主项存在无关，仍然成立。差等关系则断裂，故 D 错。",skill:"两种解释下的对当关系"},{id:"s4-04-q5",type:"short",stem:"为什么「所有独角兽都是哺乳动物，所有独角兽都是白色的，所以有的白色动物是哺乳动物」在现代解释下无效？",keywords:[["Darapti","AAI-3","第三格"],["全称","没有断定存在","不保证非空"],["特称","存在","要求有成员"]],answer:"这是第三格 AAI 式。两个前提都是全称，只说明独角兽包含于哺乳动物和白色动物，没有断定独角兽存在。结论是特称，要求至少有一个白色动物是哺乳动物。独角兽不存在时前提都真而结论假，所以无效。",explanation:"核心是存在含义的落差：前提不承担存在承诺，结论却要求存在。传统解释默认主项非空，才使这个形式成立。",skill:"Darapti 的存在问题"}]},{id:"s4-05",no:37,code:"5.8",title:"文恩图与直言命题图解",stage:4,chapter:"第5章 直言命题",minutes:18,lead:"两个相交的圆、一片阴影、一个叉号，凭什么就能判定一段三段论有效还是无效？这套图形方法到底把「空」和「有」画成了什么？",objectives:["用阴影与叉号表示四种直言命题","按「先全称后特称」的顺序完成三圆图解","依据图示判断三段论是否有效，并说明依据"],concepts:["文恩图","阴影","叉号","区域","论域"],body:`
## 核心定义

**专业定义**：文恩图（Venn diagram）是用相交的圆表示类的外延、用阴影表示空类、用叉号表示非空类的图形方法，用来判定直言命题的真假与三段论的有效性。

**通俗解释**：画两个圈，一个代表 S 一个代表 P。哪块区域被涂黑，就是「这里什么都没有」；哪块画了叉，就是「这里至少有一个」。

**关键术语**

- **阴影（shading）**：该区域为空。
- **叉号（×）**：该区域至少有一个成员。
- **边界叉**：叉画在两个区域的交界线上，表示「至少有一个，但不确定在哪一边」。
- **论域（universe of discourse）**：所有被讨论对象构成的矩形。
- **区域**：两个圆把矩形切成四块，每块对应一种成员组合。

**容易混淆的概念**

> 阴影表示「没有东西」。日常直觉容易把它读成「有东西但是暗的」，正好相反。画图时嘴里要念「这块是空的」。

> 叉在边界上不等于两个区域各有一个。它表示「有一个，位置未定」，信息量比一个明确的叉少。

## 理论讲解

### 第一步：画出基本结构

一个矩形代表论域，里面两个相交的圆 S 与 P，把矩形分成四块：

- 区域 1：S 内、P 外——是 S 但不是 P
- 区域 2：S 与 P 的交——既是 S 又是 P
- 区域 3：P 内、S 外——是 P 但不是 S
- 区域 4：两者之外——既不是 S 也不是 P

### 第二步：四种命题的画法

| 命题 | 操作 | 读法 |
| A 所有 S 是 P | 区域 1 涂阴影 | S 中不属于 P 的部分为空 |
| E 所有 S 不是 P | 区域 2 涂阴影 | S 与 P 的交为空 |
| I 有的 S 是 P | 区域 2 画叉 | 交集中至少有一个 |
| O 有的 S 不是 P | 区域 1 画叉 | S 中不属于 P 的部分至少有一个 |

记忆方法：**全称涂阴影，特称画叉**。涂哪里看命题说的是哪块该空；画哪里看命题说的是哪块有东西。

### 第三步：判定单个命题的真假

先画出已知事实，比如「所有猫是动物」。再看待判命题要求的图形是否已经出现：

- 已出现 → 该命题为真
- 与已有图形冲突 → 该命题为假
- 既没出现也没冲突 → 真假不定

### 第四步：判定三段论

用三个圆 S、P、M。**只画两个前提，绝不画结论**。画完再看结论要求的信息是否已经在图中。

- 结论要求某区域为空，而该区域已被涂阴影 → 有效
- 结论要求某区域有叉，而该区域已有明确的叉 → 有效
- 否则无效

### 第五步：先全称，后特称

这是画图顺序的铁律。原因很实在：阴影可能把叉的活动范围逼到一个区域里。反过来先画叉，叉只能落在边界上，信息就丢了。

举例：已知「没有 M 是 P」和「有的 S 是 M」。先涂 M 与 P 的交，再在 S 与 M 的交画叉——叉被迫落到「S 且 M 且非 P」那一块，位置明确。若先画叉再涂阴影，叉就废了。

## 例题与分析

**例 1（易）**用文恩图表示「有的学生不是团员」。

**分析**：S 圆（学生）内、P 圆（团员）外的区域画叉。注意不是交集画叉——交集画叉表示「有的学生是团员」，那是 I 命题。

**例 2（中）**已知「所有诗人都是穷人」，问「有的诗人是穷人」真假？

**分析**：图中只有阴影，没有叉。A 命题不保证存在。所以现代解释下真假不定：若诗人存在则为真，若诗人不存在则这句话为假。这正好把上一课的存在含义画成了看得见的东西——阴影不等于叉。

**例 3（难）**检验 EIO-1（Ferio）：没有 M 是 P，有的 S 是 M，所以有的 S 不是 P。

**分析**：先把 M 与 P 的交涂阴影；再在 S 与 M 的交画叉。由于这块交集中属于 P 的部分已被涂黑，叉只能落在「S 且 M 且非 P」的区域，也就是 S 但非 P 的那块里。

结论「有的 S 不是 P」要求 S 但非 P 的区域有叉——已经有了。有效。

## 反例训练

> 所有 M 是 P，所有 M 是 S，所以所有 S 是 P。

**问题所在**：这是 AAA-3。画图：先涂 M 在 P 外的部分，再涂 M 在 S 外的部分。结论要求「S 在 P 外的部分」为空，但 S 中不属于 M 的那一块完全没有被涂黑——那里可能有东西。图上缺这块阴影，所以无效。

形式上：

$$A:\\ M^{+}P^{-},\\ A:\\ M^{+}S^{-}\\ \\therefore\\ A:\\ S^{+}P^{-}$$

反例：M＝猫，P＝哺乳动物，S＝宠物。所有猫是哺乳动物，所有猫是宠物，但并非所有宠物都是哺乳动物——鸟也是宠物。

## 现实应用

- **整理分类**：把「所有 A 都是 B」「有的 A 是 C」画成图，一眼就能看出哪些结论被支持、哪些是硬凑的。
- **排查规则冲突**：产品规则常是一堆「所有 X 都必须 Y」。画图能发现某区域既被要求为空又被要求非空，那就是死锁。
- **教学演示**：文恩图把抽象的周延规则变成空间关系，是手工检查三段论最快的方法。
- **数据库设计**：实体之间的全集、交集、空集约束与文恩图同构，画图有助于发现遗漏的约束。

## 本节总结

**核心概念**：文恩图、阴影、叉号、区域、论域。

**关键规则**

1. 阴影＝空，叉＝非空。
2. A 涂 S 在 P 外的部分；E 涂交集；I 交集画叉；O 在 S 在 P 外的部分画叉。
3. 判定三段论只画前提，看结论是否已被蕴含。
4. 先画全称，再画特称。

**常见错误**：把阴影理解成「有东西」；I 与 O 的叉画错区域；先画特称导致叉落在边界上、信息丢失。

**需要掌握的能力**：给任意直言命题画出文恩图，并用三圆图判定三段论是否有效。
`,quiz:[{id:"s4-05-q1",type:"single",stem:"在文恩图中，阴影表示该区域：",options:["至少有一个成员","一个成员也没有","成员数量不确定","成员全部属于另一个类"],answer:"B",explanation:"阴影表示该区域为空，即没有任何成员。表示非空的是叉号。这个约定与日常「阴影＝暗＝有东西」的直觉相反，需要专门记。",skill:"阴影的含义"},{id:"s4-05-q2",type:"judge",stem:"画文恩图检验三段论时，应当把前提和结论一起画出来。",answer:!1,explanation:"只能画前提。若把结论也画上，图必然包含结论的信息，检验就变成自证。正确做法是只看前提图是否已经蕴含结论。",skill:"文恩图的检验方法"},{id:"s4-05-q3",type:"single",stem:"「有的 S 是 P」在文恩图上的画法是：",options:["S 与 P 的交集涂阴影","S 在 P 外的区域画叉","S 与 P 的交集画叉","S 在 P 外的区域涂阴影"],answer:"C",explanation:"I 命题断定至少有一个东西既是 S 又是 P，所以在交集画叉。A 与 E 才是涂阴影，O 是在 S 在 P 外的区域画叉。",skill:"I 命题的画法"},{id:"s4-05-q4",type:"multi",stem:"关于文恩图检验三段论，下列说法正确的有：（多选）",options:["结论要求为空的区域已被涂阴影，则论证有效","结论要求有叉的区域已有明确的叉，则论证有效","应当先画全称前提，再画特称前提","若结论要求的叉落在边界上，也算有效"],answer:["A","B","C"],explanation:"A、B 是有效性的两条判据，C 是画图顺序的要求。D 错：边界叉表示位置不确定，不能断定该区域非空，因此不能支持结论。",skill:"文恩图的有效性判据"},{id:"s4-05-q5",type:"short",stem:"为什么画三圆图时要先画全称前提、后画特称前提？",keywords:[["阴影","全称","空"],["叉","特称","非空"],["边界","位置","不确定"]],answer:"全称前提画的是阴影，会把某个区域排除掉。先涂阴影，特称的叉就被迫落进剩下唯一可能的位置，信息明确。若先画叉，叉只能落在尚未被排除的边界上，位置不确定，后续阴影会把它废掉。",explanation:"本质是信息先后：阴影缩小可能性，叉在其中定位。顺序反了，定位就失效。",skill:"文恩图的画图顺序"}]},{id:"s4-06",no:38,code:"6.1–6.2",title:"直言三段论的标准形式",stage:4,chapter:"第6章 直言三段论",minutes:16,lead:"为什么「所有狗是哺乳动物，所有哺乳动物是动物，所以所有狗是动物」一眼就可信，而换几个词之后就未必？三段论的可靠性到底藏在哪个位置？",objectives:["指出任意三段论的大项、小项、中项，并说明各自的判定依据","按中项位置判定四个格，写出式并合成格式编号","把顺序混乱的日常三段论整理成标准形式后再判定"],concepts:["大项与小项","中项","大前提与小前提","格","式","标准形式"],body:`
## 核心定义

**专业定义**：直言三段论（categorical syllogism）是由三个直言命题组成的演绎论证，其中两个是前提、一个是结论，共含三个词项，每个词项出现两次。

**通俗解释**：三段论就是搭桥。大项和小项本来不挨着，靠中项这座桥把它们连起来。桥搭稳了，结论就稳。

**关键术语**

- **大项（major term，记作 P）**：结论的谓项。
- **小项（minor term，记作 S）**：结论的主项。
- **中项（middle term，记作 M）**：只在两个前提中出现、不在结论中出现的词项。
- **大前提（major premise）**：含大项的那条前提。
- **小前提（minor premise）**：含小项的那条前提。
- **格（figure）**：中项在两个前提中的位置。
- **式（mood）**：三个命题的 A/E/I/O 代号连写。

**容易混淆的概念**

> 大前提指的是「含结论谓项的那句」，跟长短、先后都无关。标准形式里它排第一，日常语言里常排最后。

> 中项指的是「结论里不出现的那个词项」。名称里的「中」跟位置无关。

## 理论讲解

### 第一步：找出结论，定下 S 与 P

结论是唯一由「所以」「因此」「可见」引出的命题。它的主项就是小项 S，谓项就是大项 P。

这一步定错，后面全错。所以永远先找结论，不要从句首开始读。

### 第二步：找出中项，确认只有三个词项

剩下那个在前提里反复出现、结论里不出现的词，就是中项 M。若数出四个词项，说明有歧义或同义未合并，需要先做词项归约。

### 第三步：按中项位置定格

| 格 | 大前提 | 小前提 | 结论 |
| 第 1 格 | M–P | S–M | S–P |
| 第 2 格 | P–M | S–M | S–P |
| 第 3 格 | M–P | M–S | S–P |
| 第 4 格 | P–M | M–S | S–P |

记忆方法：只看中项。

- 中项在大前提左、小前提右 → 第 1 格
- 中项两个都在右 → 第 2 格
- 中项两个都在左 → 第 3 格
- 中项在大前提右、小前提左 → 第 4 格

### 第四步：写出式

按大前提、小前提、结论的次序，把三个代号连写，再附格号。比如 EAE-1、AII-3。

$$EAE\\text{-}1:\\ \\text{没有 } M \\text{ 是 } P,\\ \\text{所有 } S \\text{ 是 } M\\ \\therefore\\ \\text{没有 } S \\text{ 是 } P$$

### 第五步：明白有效性只看形式

把词换掉，只要格式相同，有效性不变。这就是为什么可以查表：4 个格各配 64 种式，共 256 种组合，其中只有 15 种有效。第 40 课会给出完整表格。

## 例题与分析

**例 1（易）**「所有狗是哺乳动物，所有哺乳动物是动物，所以所有狗是动物。」指出三项与格式。

**分析**：结论主项「狗」＝S，谓项「动物」＝P，中项「哺乳动物」＝M。大前提「所有 M 是 P」，小前提「所有 S 是 M」，中项第 1 格。三个都是 A，所以是 AAA-1（Barbara），有效。

**例 2（中）**「没有爬行动物是恒温的，所有鸟类都是恒温的，所以没有鸟类是爬行动物。」

**分析**：结论主项「鸟类」＝S，谓项「爬行动物」＝P，中项「恒温的」＝M。大前提「没有 P 是 M」＝E，小前提「所有 S 是 M」＝A，结论「没有 S 是 P」＝E。中项两个都在右，第 2 格。式 EAE-2（Cesare），有效。

**例 3（难）**「有的政治家是诚实的人，所有诚实的人都是勇敢的，所以有的政治家是勇敢的。」判断它是否标准形式，若不是如何调整。

**分析**：结论主项「政治家」＝S，谓项「勇敢的」＝P，中项「诚实的人」＝M。给出的顺序是先小前提（含 S）后大前提（含 P），不符合标准形式。

调整后：大前提「所有 M 是 P」，小前提「有的 S 是 M」，结论「有的 S 是 P」。第 1 格，AII-1（Darii），有效。

要点：调整顺序不改变有效性，但会改变格号。所以判格必须在调整之后做，不能拿原始语序去数位置。

## 反例训练

> 所有苹果都是水果，所有水果都含维生素，所以所有苹果都含维生素 C。

**问题所在**：这里出现了四个词项，已经超出三段论的范围。前提里的谓项是「含维生素的东西」，结论里的谓项是「含维生素 C 的东西」，两者外延不同。三个词项变成了四个：

$$S=\\text{苹果},\\ M=\\text{水果},\\ P_1=\\text{含维生素的},\\ P_2=\\text{含维生素C的}$$

形式上看像 AAA-1，实际上结论里的 P 与前提里的 P 不是同一个词项，桥在中间断了。这类错误叫四词项谬误，多由偷换概念或省略限定语造成。

## 现实应用

- **写论证**：先写结论，再倒推需要什么中项，比想到哪写到哪更不容易跑题。
- **读社论**：把长句压成 S–M–P 骨架，很多「看起来严密」的评论会露出中项不周延的破绽。
- **法律意见书**：大前提是法条，小前提是事实，结论是判决。三段论结构就是司法推理的标准写法。
- **编程**：类型系统的传递性——A 是 B 的子类型，B 是 C 的子类型，则 A 是 C 的子类型——与第一格 AAA 完全同构。

## 本节总结

**核心概念**：大项、小项、中项、大前提、小前提、格、式。

**关键规则**

1. 三个词项，各出现两次。
2. 大项是结论谓项，小项是结论主项，中项不出现在结论里。
3. 格由中项位置决定，式由三个字母连写。
4. 有效性只取决于格式，与内容无关。

**常见错误**：把先出现的命题当大前提；数错词项（同义词未合并）；没调整成标准顺序就判格。

**需要掌握的能力**：把任意三段论整理成标准形式，写出格与式，并判断它是否落在有效形式表里。
`,quiz:[{id:"s4-06-q1",type:"single",stem:"在一个三段论中，大项是指：",options:["第一个出现的前提的主项","结论的谓项","结论的主项","两个前提共有的词项"],answer:"B",explanation:"大项按定义是结论的谓项，与它在文本中出现的先后无关。结论的主项是小项，两前提共有的词项是中项。",skill:"大项的定义"},{id:"s4-06-q2",type:"judge",stem:"中项必须在两个前提中都出现，并且也要在结论中出现一次。",answer:!1,explanation:"中项只在两个前提中出现，结论里不出现。它正是那个把大小项连起来、然后退场的词项。若结论里也出现，就会有词项出现三次。",skill:"中项的定义"},{id:"s4-06-q3",type:"single",stem:"若某三段论的中项在两个前提中都位于谓项位置，它属于：",options:["第 1 格","第 2 格","第 3 格","第 4 格"],answer:"B",explanation:"第 2 格的格式是 P–M、S–M，中项在两个前提里都是谓项，也就是都在右边。第 1 格中项在左、右各一次。",skill:"格的判定"},{id:"s4-06-q4",type:"multi",stem:"把日常论证整理成标准形式时，必须满足的要求有：（多选）",options:["三个命题都是标准直言命题","恰好三个词项，每个出现两次","大前提在前、小前提在后、结论最后","前提必须事实上为真"],answer:["A","B","C"],explanation:"A、B、C 都是标准形式的结构要求。D 不是：标准形式只管结构，前提真假属于另一项检查，与形式是否规范无关。",skill:"标准形式的要求"},{id:"s4-06-q5",type:"short",stem:"「所有诗人都是穷人，所有穷人都是不幸的，所以所有诗人都是不幸的」——写出大项、小项、中项，并说明它的格与式。",keywords:[["不幸","大项"],["诗人","小项"],["穷人","中项"],["第一格","AAA-1","Barbara"]],answer:"结论谓项「不幸的」是大项 P，结论主项「诗人」是小项 S，只在前提出现的「穷人」是中项 M。大前提为 M–P，小前提为 S–M，属第一格，三个命题都是 A，故为 AAA-1。",explanation:"先由结论定大小项，再由剩余词项定中项，最后看中项位置定格。三步顺序不能颠倒。",skill:"标准形式的整理"}]},{id:"s4-07",no:39,code:"6.4",title:"三段论的规则与谬误",stage:4,chapter:"第6章 直言三段论",minutes:17,lead:"「所有狗是哺乳动物，所有猫是哺乳动物，所以所有猫是狗」——前提全真、结论荒谬，可到底是哪一步塌了？有没有一套关卡，一撞就知道错在哪？",objectives:["复述三段论的五条基本规则，并说明每条规则的理由","对任意三段论逐条检验，指出违反的是哪一条","准确叫出中项不周延、大项不当周延、小项不当周延等谬误名称"],concepts:["中项不周延","大项不当周延","小项不当周延","否定前提谬误","存在谬误"],body:`
## 核心定义

**专业定义**：三段论规则是判定一个直言三段论是否有效的形式条件，违反任何一条即为无效，并对应一个传统命名的谬误。

**通俗解释**：这五条规则像五道关卡。任何一段推理，只要撞上其中一道，就一定有问题，不必再逐字推敲。

**关键术语**

- **中项不周延（undistributed middle）**：中项在两个前提中都不周延。
- **大项不当周延（illicit major）**：大项在前提中不周延，在结论中周延。
- **小项不当周延（illicit minor）**：小项在前提中不周延，在结论中周延。
- **否定前提谬误**：从两个否定前提得出结论，或结论的质与前提不一致。
- **存在谬误**：从两个全称前提推出特称结论。

**容易混淆的概念**

> 「大项不当周延」与「小项不当周延」不是同一回事，要看越界的是结论的谓项还是主项。名字里的「大」「小」对应的是大项、小项，不是错误的大小。

> 「两个否定前提不能得结论」说的是前提的质，不是结论的质。有一前提否定时，结论可以也应该是否定的。

## 理论讲解

### 第一步：中项至少周延一次

中项的任务是搭桥。它必须至少有一次覆盖自己的全部外延，才能保证大项与小项说的是同一批东西。若两次都只覆盖一部分，两段可能各说各的一半，永远接不上。

这是五条规则里最常被违反的一条，也是商业话术、伪科学论证最爱的破口。

### 第二步：前提中不周延的词项，结论中不得周延

结论不能比前提说得更多。前提只涉及某词项的一部分，结论却对它的全体下判断，就是越界。

这条规则同时管大项和小项，对应两个谬误名。判断方法是：先算出三个词项在前提中的周延情况，再对照结论。

### 第三步：两个否定前提不能得结论

若两个前提都是否定，S 被排除出 M，P 也被排除出 M，那么 S 与 P 相对 M 都在外面。它们之间可能有任何关系，推不出确定结论。

举例：没有猫是鱼，没有狗是鱼。猫和狗什么关系？推不出来。

### 第四步：前提有一否定，结论必否定；两前提肯定，结论必肯定

否定前提的作用是把某个类排除出去。只要有一个前提在排除，结论就必须带着这个排除；反之，两个肯定前提只建立包含关系，推不出排除。

违反这条，就是否定前提谬误的另一副面孔。

### 第五步：两条导出规则

- 两个特称前提不能得结论。
- 前提有一特称，结论必特称。

这两条可以从前面四条推出来，考试时用来快速排除，省时间。

汇总对照：

| 违反的规则 | 谬误名 | 典型症状 |
| 规则 1 | 中项不周延 | 中项两次都在肯定命题的谓项位置 |
| 规则 2（大项） | 大项不当周延 | 大项在前提是肯定谓项，结论成了全称主项 |
| 规则 2（小项） | 小项不当周延 | 小项在前提是特称主项，结论成了全称主项 |
| 规则 3、4 | 否定前提谬误 | 两前提皆否定，或结论的质与前提不一致 |
| 现代解释额外 | 存在谬误 | 两全称前提推出特称结论 |

## 例题与分析

**例 1（易）**「所有狗是哺乳动物，所有猫是哺乳动物，所以所有猫是狗。」

**分析**：中项「哺乳动物」在两个前提中都是 A 命题的谓项，都不周延。违反规则 1，中项不周延。第二格 AAA，无效。

**例 2（中）**「没有鱼是哺乳动物，有的水生动物是哺乳动物，所以有的水生动物不是鱼。」

**分析**：结论主项「水生动物」＝S，谓项「鱼」＝P，中项「哺乳动物」＝M。大前提「没有 P 是 M」＝E，小前提「有的 S 是 M」＝I，结论「有的 S 不是 P」＝O。式 EIO-2（Festino）。

逐条检验：中项在大前提 E 的谓项位置，周延 ✓；大项 P 在前提 E 中周延，结论 O 谓项也周延，没越界 ✓；一前提否定，结论否定 ✓。有效。

**例 3（难）**「所有艺术家都是敏感的人，有的敏感的人不是富人，所以有的艺术家不是富人。」

**分析**：结论主项「艺术家」＝S，谓项「富的」＝P，中项「敏感的人」＝M。含 P 的前提是「有的 M 不是 P」（O），含 S 的是「所有 S 是 M」（A），所以大前提 O、小前提 A，属第一格，式 OAO-1。

检验：中项在大前提 O 中作主项，特称主项不周延；在小前提 A 中作谓项，也不周延。两次都不周延，违反规则 1。OAO-1 不在有效表里，病因就是中项不周延。

**例 4（易）**「没有哺乳动物是冷血的，没有鲸是冷血的，所以没有鲸是哺乳动物。」

**分析**：两个前提都是 E，都是否定。违反规则 3，第二格 EEE，无效。

## 反例训练

> 所有科学家都受过训练，所有受过训练的人都善于推理，所以所有善于推理的人都是科学家。

**问题所在**：结论主项「善于推理的人」＝S，谓项「科学家」＝P，中项「受过训练的人」＝M。大前提「所有 P 是 M」（A），小前提「所有 M 是 S」（A），结论「所有 S 是 P」（A）。第四格 AAA。

检验：小项 S 在小前提中是 A 命题的谓项，不周延；在结论中成了 A 命题的主项，周延。违反规则 2，小项不当周延。第四格 AAA 不在有效表里。

反例：所有医生都学过解剖，所有学过解剖的人都了解人体，所以所有了解人体的人都是医生。两个前提都真，结论假——护士也了解人体。

## 现实应用

- **拆穿诡辩**：听到「所有 A 都是 B，所有 C 都是 B，所以所有 C 都是 A」，立刻识别为中项不周延。
- **自查论文**：把论证写成标准形式，逐条对五道关卡，比反复读顺不顺有效。
- **法条适用**：中项（构成要件）至少周延一次，否则定性不成立。
- **产品归因**：「留存高的产品都有推送，我们有推送，所以留存会高」——中项不周延的商业版。

## 本节总结

**核心概念**：中项不周延、大项不当周延、小项不当周延、否定前提谬误、存在谬误。

**关键规则**

1. 中项至少周延一次。
2. 前提中不周延的词项，结论中不得周延。
3. 两个否定前提不能得结论。
4. 前提否定则结论否定，前提全肯定则结论肯定。
5. 两特称前提不能得结论；前提特称则结论特称。

**常见错误**：只查中项不查大小项；把「两前提否定」与「结论否定」混为一谈；忘记现代解释下还有存在谬误。

**需要掌握的能力**：拿到一个三段论，能按五条规则逐条检验，并在无效时准确叫出谬误名称。
`,quiz:[{id:"s4-07-q1",type:"single",stem:"「所有 A 是 B，所有 C 是 B，所以所有 C 是 A」违反的规则是：",options:["中项至少周延一次","前提中不周延的词项结论中不得周延","两个否定前提不能得结论","前提特称则结论特称"],answer:"A",explanation:"中项 B 在两个前提中都是 A 命题的谓项，都不周延，违反「中项至少周延一次」，属中项不周延谬误。这个形式是第二格 AAA，无效。",skill:"中项不周延"},{id:"s4-07-q2",type:"judge",stem:"若一个三段论的两个前提都是否定命题，它仍然可能有效。",answer:!1,explanation:"两个否定前提把 S 和 P 都排除在中项之外，二者相对中项都「在外面」，关系无法确定，推不出结论。这是规则 3。",skill:"否定前提规则"},{id:"s4-07-q3",type:"single",stem:"大项在前提中不周延、在结论中周延，这种错误叫：",options:["中项不周延","大项不当周延","小项不当周延","存在谬误"],answer:"B",explanation:"越界的是结论的谓项即大项，所以叫大项不当周延。若越界的是结论的主项即小项，则叫小项不当周延。",skill:"大项不当周延"},{id:"s4-07-q4",type:"multi",stem:"下列哪些是判定三段论有效性的基本规则？（多选）",options:["中项至少周延一次","前提中不周延的词项，结论中不得周延","两个否定前提不能得结论","两个特称前提不能得结论"],answer:["A","B","C","D"],explanation:"A、B、C 是三条基本规则，D 是由它们导出的规则，同样可用于判定。四条都是有效的排除工具，只是 A、B、C 更根本。",skill:"三段论规则体系"},{id:"s4-07-q5",type:"short",stem:"「所有诗人都是穷人，有的穷人不是乐观的，所以有的诗人不是乐观的」是否有效？请说明理由。",keywords:[["中项","穷人"],["不周延","两次"],["特称","主项"],["无效","OAO-1"]],answer:"无效。中项「穷人」在大前提中是 A 命题的谓项，不周延；在小前提中是 O 命题的主项（特称主项），也不周延。中项两次都不周延，违反第一条规则，属中项不周延谬误。",explanation:"这个论证是 OAO-1，不在十五个有效形式内。表面看两个前提都与「穷人」有关，但都没有覆盖穷人的全部，桥没搭上。",skill:"规则逐条检验"}]},{id:"s4-08",no:40,code:"6.3、6.5",title:"十五个有效形式与有效性检验",stage:4,chapter:"第6章 直言三段论",minutes:18,lead:"256 种格式里只有 15 种靠得住。这 15 个到底怎么排？为什么另外 4 个古人用了两千年、现代逻辑一上来就说它们无效？",objectives:["默写四个格的有效形式表，并能由格式编号反推拉丁名","用查表法、规则法、文恩图法三种方式检验同一论证","说明四个存在谬误形式为何在现代解释下失效"],concepts:["有效形式表","拉丁名","查表法","规则法","文恩图法","存在谬误形式"],body:`
## 核心定义

**专业定义**：有效的直言三段论形式共十五个（现代解释），每个都有传统拉丁名，便于记忆与查对。传统解释另加四个，共十九个。

**通俗解释**：这是一张三段论的「标准答案表」。256 种组合里，只有这 15 种保证前提真则结论真。

**关键术语**

- **Barbara、Celarent、Darii、Ferio**：第一格四式。
- **Cesare、Camestres、Festino、Baroco**：第二格四式。
- **Disamis、Datisi、Bocardo、Ferison**：第三格四式。
- **Camenes、Dimaris、Fresison**：第四格三式。
- **存在谬误形式**：Darapti、Felapton、Bramantip、Fesapo，传统有效、现代无效。

**容易混淆的概念**

> 「有 15 个有效形式」说的是形式，不是论证。一个论证可以形式有效而前提为假，也可以形式无效而结论碰巧为真。数量只统计形式。

> 第 4 格只有 3 个有效式，不是 4 个。数错的人通常是把它和第 3 格记混了。

## 理论讲解

### 第一步：先记住总数与分布

| 格 | 有效式 | 数量 |
| 第 1 格 | AAA、EAE、AII、EIO | 4 |
| 第 2 格 | EAE、AEE、EIO、AOO | 4 |
| 第 3 格 | IAI、AII、OAO、EIO | 4 |
| 第 4 格 | AEE、IAI、EIO | 3 |

合计 15。传统解释再加 AAI-3、EAO-3、AAI-4、EAO-4 四个，共 19。

### 第二步：用拉丁名记

| 形式 | 拉丁名 | 首字母归属 |
| AAA-1 | Barbara | B |
| EAE-1 | Celarent | C |
| AII-1 | Darii | D |
| EIO-1 | Ferio | F |
| EAE-2 | Cesare | C |
| AEE-2 | Camestres | C |
| EIO-2 | Festino | F |
| AOO-2 | Baroco | B |
| IAI-3 | Disamis | D |
| AII-3 | Datisi | D |
| OAO-3 | Bocardo | B |
| EIO-3 | Ferison | F |
| AEE-4 | Camenes | C |
| IAI-4 | Dimaris | D |
| EIO-4 | Fresison | F |

首字母是传统助记诗留下的线索：C 归 Celarent（EAE-1），B 归 Barbara（AAA-1），D 归 Darii（AII-1），F 归 Ferio（EIO-1）。也就是说，每个非第一格的形式都能通过换位、换质追溯到某个第一格形式。名字里的其余字母还标注了变换方式，这里不展开，知道首字母的作用就够用了。

### 第三步：三种检验方法

1. **查表法**：化标准形式，读格与式，查表。最快，但要背表。
2. **规则法**：五条规则逐条过。稳，不依赖记忆，适合考场兜底。
3. **文恩图法**：画图看结论是否被蕴含。最直观，适合复杂或可疑的情形。

三种方法的结论必须一致。若不一致，九成是化标准形式时把项定错了。

### 第四步：弄清四个存在谬误形式

| 形式 | 拉丁名 | 共同问题 |
| AAI-3 | Darapti | 两个全称前提推出特称结论 |
| EAO-3 | Felapton | 同上 |
| AAI-4 | Bramantip | 同上 |
| EAO-4 | Fesapo | 同上 |

它们的结论都是 I 或 O，都要求至少存在一个成员；前提却全是全称，不承担存在承诺。现代解释不补这个承诺，于是结论可能假而前提全真。

看到这四个形式，追问一句「你凭什么假定这个类非空」，问题就露出来了。

## 例题与分析

**例 1（易）**「所有哺乳动物是脊椎动物，所有狗是哺乳动物，所以所有狗是脊椎动物。」查表。

**分析**：结论主项「狗」＝S，谓项「脊椎动物」＝P，中项「哺乳动物」＝M。大前提 M–P，小前提 S–M，第 1 格，AAA-1（Barbara）。在表内，有效。

**例 2（中）**「所有鸟类都是卵生的，没有蝙蝠是卵生的，所以没有蝙蝠是鸟类。」

**分析**：结论主项「蝙蝠」＝S，谓项「鸟类」＝P，中项「卵生的」＝M。大前提「所有 P 是 M」（A），小前提「没有 S 是 M」（E），结论「没有 S 是 P」（E）。中项都在右，第 2 格，AEE-2（Camestres）。有效。

**例 3（难）**「所有学生都是人，有的学生是运动员，所以有的人是运动员。」

**分析**：这里最反直觉的是结论。「人」是结论的主项，所以「人」是小项 S；「运动员」是结论的谓项，所以是大项 P。中项是「学生」M。

于是大前提是「所有 M 是 S」，小前提是「有的 M 是 P」，结论「有的 S 是 P」。中项两个都在左，第 3 格，AII-3（Datisi）。有效。

要点：判格之前必须先按结论定好 S 与 P。凭语感把「学生」当小项，就会判成第一格，然后怎么查都查不到。

## 反例训练

> 所有独角兽都是哺乳动物，所有独角兽都是白色的，所以有的白色动物是哺乳动物。

**问题所在**：这是 AAI-3，即 Darapti。看上去两个前提都成立，结论也「似乎」跟着来，但两个前提都是全称，谁也没说世上有独角兽。

形式上：

$$A:\\ M^{+}P^{-},\\ A:\\ M^{+}S^{-}\\ \\therefore\\ I:\\ S^{-}P^{-}$$

结论要求 S 与 P 的交非空，前提只保证 M 落在这个交里。M 为空时，前提全真空真，结论假。传统解释默认 M 非空，才让这个形式成立。

## 现实应用

- **考试答题**：先查表，表里没有再用规则，最后用文恩图复核。三层保险，几乎不会误判。
- **写代码**：把 15 个格式写成查表函数，就是一个简易论证检查器，几十行就够。
- **辩论准备**：预判对方会用哪一格，提前准备该格的反例。第 2 格最容易出中项不周延，第 3 格最容易出小项越界。
- **逻辑教学**：拉丁名把形式串成可背诵的歌词，比死记 15 组字母省力得多。

## 本节总结

**核心概念**：十五个有效形式、拉丁名、查表法、规则法、文恩图法、存在谬误形式。

**关键规则**

1. 第一格 4 个、第二格 4 个、第三格 4 个、第四格 3 个。
2. 传统解释多出 4 个，都以「两全称前提推特称结论」为特征。
3. 三种检验方法结论应一致。
4. 判格前必须依据结论确定大小项。

**常见错误**：把 AAI-3 当成现代有效；记混第 2 格与第 3 格；没调整顺序就判格。

**需要掌握的能力**：背下 15 个形式，能查表，能说明另外 4 个在现代解释下为何失效。
`,quiz:[{id:"s4-08-q1",type:"single",stem:"第四格共有几个有效形式？",options:["2 个","3 个","4 个","5 个"],answer:"B",explanation:"第四格的有效式是 AEE-4、IAI-4、EIO-4，共 3 个。第一、二、三格各 4 个，合计 15 个。",skill:"有效形式的分布"},{id:"s4-08-q2",type:"judge",stem:"Darapti（AAI-3）在现代解释下是有效形式。",answer:!1,explanation:"Darapti 的两个前提都是全称，不保证中项类非空，结论却是特称，要求存在。现代解释不补存在承诺，所以它无效，属存在谬误。",skill:"存在谬误形式"},{id:"s4-08-q3",type:"single",stem:"「没有 M 是 P，所有 S 是 M，所以没有 S 是 P」属于：",options:["AAA-1","EAE-1","EIO-1","AEE-2"],answer:"B",explanation:"大前提 E（M–P），小前提 A（S–M），结论 E，中项第 1 格，所以是 EAE-1（Celarent），有效。EIO-1 的中项位置相同但式不对。",skill:"格式的读取"},{id:"s4-08-q4",type:"multi",stem:"下列形式中，传统解释下有效而现代解释下无效的有：（多选）",options:["AAI-3","EAO-3","AAI-4","EAO-4"],answer:["A","B","C","D"],explanation:"这四个分别是 Darapti、Felapton、Bramantip、Fesapo，都以「两个全称前提推出特称结论」为特征，都依赖中项类非空，因此在现代解释下全部失效。",skill:"四个存在谬误形式"},{id:"s4-08-q5",type:"short",stem:"为什么 AAI-3 在传统解释下有效、在现代解释下无效？请从中项的存在含义说明。",keywords:[["两个全称","不保证","非空"],["特称结论","要求存在","至少一个"],["传统","预设","亚里士多德"]],answer:"AAI-3 的两个前提都是全称，只说明 M 包含于 P 和 S，没有断定 M 有成员。结论是特称，要求至少有一个 S 是 P。传统解释预设主项类非空，等于补上「M 存在」，形式就成立了；现代解释不补这个预设，M 为空时前提真而结论假。",explanation:"差别不在推理步骤，而在是否默认类非空。传统解释承担存在承诺，现代解释不承担。",skill:"存在谬误的机制"}]},{id:"s4-09",no:41,code:"7.1–7.5",title:"日常语言中的三段论：标准化与省略式",stage:4,chapter:"第7章 日常语言中的论证",minutes:18,lead:"没人会在饭桌上说「所有哺乳动物都是脊椎动物」。可日常论证照样能成立。那些省略的话、倒装的句子，怎么才能塞进三段论的框子里？",objectives:["按五步流程把一段日常论证改写成标准直言三段论","处理「只有」「除非」「除了」等特殊句式的改写方向","为省略式三段论补出缺失的前提，并检查补得对不对"],concepts:["标准化","词项归约","省略式","改写规则","单称命题"],body:`
## 核心定义

**专业定义**：标准化（standardization）是把日常语言中的论证改写成标准直言三段论形式的过程；省略式（enthymeme）是省略了一个前提或结论的三段论。

**通俗解释**：日常说话不按 A/E/I/O 的格式来。标准化就是翻译——把口语翻成逻辑的标准句式，再拿去检验。

**关键术语**

- **标准化**：找结论、定三项、改写命题、排列顺序。
- **省略式**：省掉一个前提（最常见）或结论的论证。
- **词项归约**：把同义表达合并，使词项数降为三个。
- **单称命题处理**：把「苏格拉底」这类个体词当作只含一个成员的类，按全称处理。

**容易混淆的概念**

> 「标准化」指的是「把话说成 A/E/I/O」，跟文雅无关。改完可能更拗口，但结构清楚了。

> 补全省略式不等于替对方补一个他不同意的观点。补进去的前提必须是说话人自己会接受的，否则就是稻草人。

## 理论讲解

### 第一步：找结论

看结论指示词：所以、因此、可见、由此可知、总之。结论常在句首，不一定在最后。

找不到指示词时，问一句「这段话想让我相信什么」，答案通常就是结论。

### 第二步：由结论定 S 与 P

结论的主项是小项，谓项是大项。这两个一定下来，剩下那个反复出现的词就是中项。

这一步与第 38 课完全一致，是全流程的地基。

### 第三步：改写每个命题

常见改写对照：

| 日常说法 | 标准形式 |
| 狗都是哺乳动物 | 所有狗都是哺乳动物 |
| 人非圣贤 | 没有人是圣贤 |
| 只有会员才能进入 | 所有能进入的人都是会员 |
| 除非下雨，否则比赛照常 | 所有非下雨的情况都是比赛照常的情况 |
| 除了小明，所有人都到了 | 所有不是小明的人都是到了的人 |
| 没有无因之果 | 所有事件都是有原因的事件 |

四条要点：

- 「只有 A 才 B」→「所有 B 都是 A」。方向千万别反。
- 「除非 A，否则 B」→「所有非 A 都是 B」。
- 「除了 X 都 Y」→「所有非 X 都是 Y」，并且通常还隐含「X 不 Y」。
- 双重否定要化掉：「无不」＝「所有都」。

### 第四步：归约词项

同义合并（「医生」「大夫」算一个词项），去掉修辞性修饰，理清代词指代。最终必须正好三个词项。

数出四个，多半是自己没认出同义表达，论证本身并没那么复杂。

### 第五步：排列并检验

大前提在前，小前提在后，结论最后。然后查表或用规则。若结论是单称命题，把个体当作单元类，转成全称处理。

### 第六步：补全省略式

方法很直接：看结论与已有前提缺哪个词项。缺的那个词，就是被省略的前提要连接的对象。

补完之后要做两项检查：形式是否有效、补进来的前提说话人是否真的接受。两项都过，论证才算站得住。

## 例题与分析

**例 1（易）**「只有年满十八岁的人才有选举权，所以小明没有选举权，因为小明不满十八岁。」

**分析**：结论「小明没有选举权」。大前提按「只有 A 才 B」改写为「所有有选举权的人都是年满十八岁的人」，即 P–M。小前提「小明不满十八岁」，把小明视为单元类，写成 S–M（否定）。结论 S–P（否定）。

第二格 EAE（Cesare），有效。注意大小项的位置：结论谓项「有选举权」是大项，所以大前提含它。

**例 2（中）**「他不是党员，党员都要参加会议，所以他不用参加会议。」请补全省略部分并检验。

**分析**：结论「他不用参加会议」。已有的「党员都要参加会议」是 M–P 方向。要从小前提「他不是党员」（S–M，否定）推到「他不是要参加会议的人」（S–P，否定），形式上属第二格 AEE（Camestres），有效。

但这个有效的形式用的是「所有要参加会议的人都是党员」，而原句给的是「所有党员都要参加会议」——方向相反。也就是说，原论证实际依赖的是一个被偷偷换掉的前提：只有党员才要参加会议。

这正是省略式最常见的毛病：补进去的前提与说话人明说的前提不是一回事。

**例 3（难）**「没有一条狗是冷血动物，所有狗都是陆地动物，所以没有冷血动物是陆地动物。」判断是否有效。

**分析**：结论主项「冷血动物」＝S，谓项「陆地动物」＝P，中项「狗」＝M。大前提「所有 M 是 P」（A），小前提「没有 M 是 S」（E），结论「没有 S 是 P」（E）。中项都在左，第 3 格，AEE-3。

第 3 格只有 IAI、AII、OAO、EIO 四个有效式，AEE 不在其中。检验规则：大项 P 在大前提 A 中是谓项，不周延；结论 E 的谓项周延。大项不当周延，无效。

反例：蛇是冷血动物，也是陆地动物。前提真而结论假。

## 反例训练

> 他不是律师，所以他不懂法律。

**问题所在**：这句话省掉了一个前提。若补「所有律师都懂法律」，得到：所有 M 是 P，S 不是 M，所以 S 不是 P。这是第一格 AEE。

第一格 AEE 不在有效表里。检验：大项「懂法律的人」在大前提 A 中作谓项，不周延；在结论 E 中作谓项，周延。大项不当周延，无效。

形式上：

$$A:\\ M^{+}P^{-},\\ E:\\ S^{+}M^{+}\\ \\therefore\\ E:\\ S^{+}P^{+}$$

若改补「所有懂法律的人都是律师」，形式上变成第二格 AEE，有效——但这个前提明显为假，因为法官、法学教师也懂法律。

两种补法各坏一头：补得自然则形式无效，补得有效则前提荒谬。这就是省略式的真实处境——它靠模糊掩盖了这个两难。

## 现实应用

- **读论文摘要**：把摘要里的论证标准化，能快速判断结论是否真被支撑，还是只是被语气撑着。
- **写申论**：先写结论，再补两条前提，最后检查三项是否齐、格式是否有效。三步下来，文章骨架就硬了。
- **谈判**：对方省略的前提往往才是关键。追问「你假设了什么」，比直接反驳结论有效得多。
- **法律文书**：判决书的三段论结构要求大前提（法条）与小前提（事实）都明示，正是为了禁止这种偷偷补前提。

## 本节总结

**核心概念**：标准化、省略式、词项归约、单称命题、改写规则。

**关键规则**

1. 先找结论，再由结论定 S 与 P。
2. 「只有 A 才 B」→「所有 B 都是 A」。
3. 「除非 A，否则 B」→「所有非 A 都是 B」。
4. 词项必须归约到三个。
5. 省略式补全后要同时检查形式与前提真假。

**常见错误**：把「只有」的方向搞反；补全时补了说话人没承诺的前提；同义词没合并导致四词项。

**需要掌握的能力**：把一段口语论证完整改写成标准形式，并指出它省略了什么、省略得是否合理。
`,quiz:[{id:"s4-09-q1",type:"single",stem:"「只有党员才能参加」改写成标准直言命题是：",options:["所有党员都是能参加的人","所有能参加的人都是党员","有的党员是能参加的人","有的能参加的人不是党员"],answer:"B",explanation:"「只有 A 才 B」表达的是「B 蕴含 A」，即所有 B 都是 A。所以是「所有能参加的人都是党员」。把方向弄反就会得到「所有党员都能参加」，那已经是另一个命题了。",skill:"「只有」的改写"},{id:"s4-09-q2",type:"judge",stem:"省略式三段论只要补全后形式有效，论证就成立。",answer:!1,explanation:"还要检查补进去的前提是否为真、是否为说话人真正承诺的。形式有效只保证「前提真则结论真」，前提本身可疑时论证仍然不成立。",skill:"省略式的双重检查"},{id:"s4-09-q3",type:"single",stem:"「除非下雨，否则比赛照常进行」改写成标准形式是：",options:["所有下雨的情况都是比赛照常进行的情况","所有非下雨的情况都是比赛照常进行的情况","所有比赛照常进行的情况都是非下雨的情况","有的非下雨的情况是比赛照常进行的情况"],answer:"B",explanation:"「除非 A，否则 B」等于「如果不是 A，那么 B」，所以是「所有非 A 都是 B」。把条件弄反的选项得到「所有 A 都是非 B」，方向整体反过来的选项则把主谓倒置了，两者都不等价于原句。",skill:"「除非」的改写"},{id:"s4-09-q4",type:"multi",stem:"标准化一段日常论证时，需要完成的步骤有：（多选）",options:["找出结论并据此确定大项与小项","把每个命题改写成 A/E/I/O 之一","把词项归约到恰好三个","证明前提在事实上为真"],answer:["A","B","C"],explanation:"A、B、C 是标准化的核心步骤。D 属于事实核查，不是标准化的任务；标准化只管把结构摆正，前提真假另行检查。",skill:"标准化的步骤"},{id:"s4-09-q5",type:"short",stem:"「他不是律师，所以他不懂法律」省略了什么前提？补全后是否有效？",keywords:[["所有律师都懂法律","律师","懂法律"],["第一格","AEE","大项不当周延"],["无效","不成立"]],answer:"省略的前提是「所有律师都懂法律」。补全后为：所有律师都懂法律，他不是律师，所以他不懂法律。这是第一格 AEE 式，大项「懂法律的人」在前提中不周延、在结论中周延，属大项不当周延，无效。",explanation:"若改补「所有懂法律的人都是律师」，形式变成第二格 AEE 有效，但该前提明显为假。两条路都不通，说明原论证靠省略掩盖了漏洞。",skill:"省略式的补全与检验"}]},{id:"s4-10",no:42,code:"7.6–7.8",title:"连锁三段论、析取与假言三段论、二难",stage:4,chapter:"第7章 日常语言中的论证",minutes:18,lead:"「你要么支持，要么就是反对进步」——这句话为什么让人无从反驳？它到底是真的二选一，还是把第三条路悄悄藏起来了？",objectives:["把多个三段论串成连锁式，并检查中间结论是否合格","区分析取三段论的有效式与无效式","识别四种二难推论，并用「逃出两角」「抓住两角」提出反驳"],concepts:["连锁三段论","析取三段论","假言三段论","二难推论","逃出两角"],body:`
## 核心定义

**专业定义**：连锁三段论是由多个直言三段论串联而成的论证；析取三段论与假言三段论是命题逻辑中的两种基本有效形式；二难推论是由两个条件命题加一个析取命题推出结论的论证。

**通俗解释**：连锁是接力，一个结论当下一个前提；析取是二选一、排除一个；假言是链条传递；二难是两条路都通向同一个坑。

**关键术语**

- **连锁三段论（sorites）**：多个直言命题首尾相接，中间结论被省略。
- **析取三段论**：$p \\lor q,\\ \\neg p\\ \\therefore\\ q$。
- **假言三段论**：$p \\to q,\\ q \\to r\\ \\therefore\\ p \\to r$。
- **二难推论**：构造式与破坏式，各分简单、复杂。
- **逃出两角**：指出析取前提没有穷尽所有可能。

**容易混淆的概念**

> 析取三段论只有「否定肯定式」有效。「肯定否定式」把相容或当成了排斥或，是常见错误。

> 二难指的是一种固定形式：两个条件句加一个二选一。名字里的「难」跟难度无关，它可能有效，也可能前提虚假。

## 理论讲解

### 第一步：连锁三段论的两条要求

把多个三段论串起来，前一个的结论作后一个的前提。要求有两条：

1. 每个中间结论必须是全称命题，否则下一段接不上。
2. 每个中项至少周延一次。

例：所有 A 是 B，所有 B 是 C，所有 C 是 D，所以所有 A 是 D。拆开就是两个 AAA-1，接得严丝合缝。

### 第二步：析取三段论

$$p \\lor q,\\ \\neg p\\ \\therefore\\ q$$

这叫否定肯定式，有效。因为两个选项中排除了一个，只能剩另一个。

反过来：

$$p \\lor q,\\ p\\ \\therefore\\ \\neg q$$

这叫肯定否定式，**无效**。日常的「或」通常是相容或，p 真时 q 也可以真。

### 第三步：假言三段论

$$p \\to q,\\ q \\to r\\ \\therefore\\ p \\to r$$

有效，这就是链条传递。注意它与「肯定后件」「否定前件」的区别：那两个是把箭头倒过来用，这个是顺着箭头接下去。

### 第四步：二难的四种形式

| 类型 | 形式 |
| 简单构造式 | $p \\to q,\\ r \\to q,\\ p \\lor r\\ \\therefore\\ q$ |
| 复杂构造式 | $p \\to q,\\ r \\to s,\\ p \\lor r\\ \\therefore\\ q \\lor s$ |
| 简单破坏式 | $p \\to q,\\ p \\to r,\\ \\neg q \\lor \\neg r\\ \\therefore\\ \\neg p$ |
| 复杂破坏式 | $p \\to q,\\ r \\to s,\\ \\neg q \\lor \\neg s\\ \\therefore\\ \\neg p \\lor \\neg r$ |

四个都是有效形式。它们的共同结构是：两条路分别通向两个结果，已知结果的状态，反推路的状态。

### 第五步：如何反驳二难

两条路，对应两个传统说法：

1. **逃出两角**：指出析取前提没穷尽可能，还有第三条路。这攻击的是选言前提。
2. **抓住两角**：接受二选一，但否认某个条件句——「如果 p 则 q」其实不成立。这攻击的是条件前提。

实务上，逃出两角通常更有力，因为它不要求你证明对方错，只要求你指出还有别的选项。

## 例题与分析

**例 1（易）**「要么是甲干的，要么是乙干的。不是甲干的。所以是乙干的。」

**分析**：析取三段论，否定肯定式，有效。前提里「要么…要么」若理解为排斥或，结论更稳；即便按相容或理解，否定一支也能推出另一支。

**例 2（中）**「如果下雨，地就湿；如果地湿，路就滑。所以如果下雨，路就滑。」

**分析**：假言三段论，有效。两个条件句首尾相接，中间项「地湿」被消去。

**例 3（难）**某公司说：「如果你重视隐私，就该支持我们的加密方案；如果你重视便利，也该支持我们的加密方案。你要么重视隐私，要么重视便利。所以你都该支持我们的加密方案。」

**分析**：这是简单构造式二难：$p \\to q,\\ r \\to q,\\ p \\lor r\\ \\therefore\\ q$。

两条反驳路径：

一是逃出两角。人可能既重视隐私也重视便利，也可能两者都不特别重视，选言前提不穷尽。指出这一点，整个二难就塌了一角。

二是抓住两角。可以否认「重视便利就该支持加密方案」——加密可能牺牲便利。这个反驳要求你拿出具体理由。

哪个更好用？如果对方的选言确实漏了明显的第三种情况，逃出两角更干净；如果二选一没问题但条件句牵强，就抓角。

## 反例训练

> 有的同学参加了社团，所有参加社团的人都能认识新朋友，所有能认识新朋友的人都会变得开朗，所以所有同学都会变得开朗。

**问题所在**：这是连锁三段论，但第一步的结论是特称。

第一步：有的 S 是 M，所有 M 是 P，所以有的 S 是 P（IAI-1，有效但结论是 I）。

第二步只能接：「有的同学能认识新朋友」加「所有能认识新朋友的人都变得开朗」，得「有的同学会变得开朗」，仍然是 I。

结论却写成了「所有同学都会变得开朗」，量被非法放大。小项 S 在前提中不周延，在结论中周延，属小项不当周延。

形式上：

$$I + A\\ \\therefore\\ I,\\qquad I + A\\ \\therefore\\ I$$

绝不是 $A$。

## 现实应用

- **政策辩论**：二难是最常见的修辞武器。听到「要么…要么…」，第一反应应该是「还有没有第三种」。
- **产品决策**：「要么做低价要么做高端」常是假二难，中间还有细分市场、区域市场、B 端市场。
- **合同条款**：连锁式的条件嵌套（若 A 则 B，若 B 则 C）要逐环检查，任何一环断了，整条链就断。
- **日常说服**：识别排中预设，是最实用的逻辑防身术。多数让人「无从反驳」的话，破口都在那个没被说出的第三选项上。

## 本节总结

**核心概念**：连锁三段论、析取三段论、假言三段论、二难推论、逃出两角、抓住两角。

**关键规则**

1. 连锁的中间结论必须全称，中项至少周延一次。
2. 析取三段论只有否定肯定式有效。
3. 假言三段论是顺箭头传递。
4. 二难分简单/复杂、构造/破坏四种，都是有效形式。
5. 反驳二难：指出选言不穷尽，或否定条件前提。

**常见错误**：把肯定否定式当成有效；连锁中让特称结论承接；把假二难当成真二难，直接接受对方划定的选项。

**需要掌握的能力**：识别这四种论证形式，写出符号式，并对二难提出两条可操作的反驳路径。
`,quiz:[{id:"s4-10-q1",type:"single",stem:"「p 或 q；p；所以非 q」这个推理：",options:["有效，是否定肯定式","无效，是肯定否定式","有效，是假言三段论","无效，是否定前件"],answer:"B",explanation:"这是析取三段论的肯定否定式。相容或下 p 与 q 可以同真，肯定一支推不出否定另一支，因此无效。有效的只有否定肯定式。",skill:"析取三段论的有效式"},{id:"s4-10-q2",type:"judge",stem:"连锁三段论中，每个中间结论都必须是全称命题。",answer:!0,explanation:"中间结论要充当下一段的前提。若它是特称，下一段只能接出特称结论，最终结论的量会被限制，无法得到全称结论。要让链条一路走到全称，中间环节必须都是全称。",skill:"连锁三段论的规则"},{id:"s4-10-q3",type:"single",stem:"「如果 A 则 C，如果 B 则 C，A 或 B，所以 C」属于：",options:["简单构造式二难","复杂构造式二难","简单破坏式二难","复杂破坏式二难"],answer:"A",explanation:"两个条件句通向同一个结论 C，析取前提是 A 或 B，结论是单个命题 C，这是简单构造式。复杂构造式的两个后件不同，结论是析取。",skill:"二难的形式"},{id:"s4-10-q4",type:"multi",stem:"反驳一个二难推论，可行的做法有：（多选）",options:["指出析取前提没有穷尽所有可能","否认其中一个条件命题","指出结论的措辞不够激烈","证明两个选言支可以同时成立"],answer:["A","B","D"],explanation:"A 是逃出两角，B 是抓住两角，D 指出析取前提其实是相容或、并未真正二选一，也能瓦解论证。C 与逻辑无关。",skill:"反驳二难的方法"},{id:"s4-10-q5",type:"short",stem:"「如果你说真话，神会恨你；如果你说假话，人会恨你；你只能说真话或假话；所以你不是被神恨就是被人恨。」请指出形式，并给出一种反驳。",keywords:[["复杂构造","简单构造","二难"],["选言","不穷尽","第三种"],["条件","不成立","沉默"]],answer:"这是简单构造式二难：两个条件句通向「被恨」这一结果，析取前提是「说真话或说假话」。反驳可走逃出两角：还有沉默、含糊其辞、拒绝回答等第三种可能，选言前提不穷尽。也可抓住两角，否认「说真话神必恨你」。",explanation:"二难的力量来自「选项已穷尽」这个隐含假设。一旦指出还有第三条路，两个条件句再真也无法把人逼到角落。",skill:"二难的反驳"}]},{id:"s4-11",no:43,code:"10.1–10.2",title:"个体与谓词：为什么需要量化",stage:4,chapter:"第10章 谓词逻辑：量化理论",minutes:16,lead:"「所有人都会死，苏格拉底是人，所以苏格拉底会死。」这个论证显然成立，可命题逻辑一算就说它无效。问题出在论证，还是出在工具？",objectives:["说明命题逻辑为何无法处理带内部结构的推理","把单称命题分解为个体常项与谓词，写成 Sa 的形式","用二元谓词符号化关系命题，并说明顺序为何不能颠倒"],concepts:["个体常项","个体变项","谓词","单称命题","二元关系"],body:`
## 核心定义

**专业定义**：谓词逻辑把命题分解为个体词、谓词和量词，从而刻画命题的内部结构。单称命题由一个个体常项和一个谓词构成，记作 $Sa$。

**通俗解释**：命题逻辑把「苏格拉底会死」整句当成一个不可拆的黑箱。谓词逻辑把箱子打开，看见里面有一个「苏格拉底」和一个「会死」。

**关键术语**

- **个体常项（individual constant）**：指称特定对象的符号，如 $a$、$b$、$c$。
- **个体变项（individual variable）**：表示任意对象的符号，如 $x$、$y$、$z$。
- **谓词（predicate）**：表示对象性质或对象间关系的符号，如 $S$、$P$、$L$。
- **一元谓词**：只带一个个体，表示性质。
- **二元谓词**：带两个个体，表示关系，如 $Lab$。
- **单称命题**：$Sa$，断言个体 $a$ 具有性质 $S$。

**容易混淆的概念**

> 谓词不是语法上的谓语。语法谓语可以是一长串动作，逻辑谓词只是一个性质或关系的符号。

> 个体常项不是「永远不变的量」。它指称一个具体对象，但对象本身当然可以变；「常项」说的是符号的解释固定，不是对象固定。

## 理论讲解

### 第一步：看命题逻辑卡在哪里

考虑这个论证：

> 所有人都会死。苏格拉底是人。所以苏格拉底会死。

在命题逻辑里，三句话分别是 $p$、$q$、$r$，形式是 $p, q \\therefore r$，无效。

可直觉上它显然有效。问题不在推理，而在工具：命题逻辑看不到「所有人」「人」「苏格拉底」之间的内部联系，它只看见三个互不相干的整体。

### 第二步：把句子拆成个体与谓词

- 「苏格拉底是人」：个体 $a$＝苏格拉底，谓词 $H$＝是人，记作 $Ha$。
- 「苏格拉底会死」：谓词 $M$＝会死，记作 $Ma$。
- 「所有人都会死」：这不是单称命题，它说的是「对任意 x，若 x 是人则 x 会死」，需要量词，下一课处理。

### 第三步：写出单称命题

$$Ha:\\ \\text{苏格拉底是人} \\qquad Ma:\\ \\text{苏格拉底会死}$$

谓词在前，个体在后。这个次序是约定，但必须一致——写反了就成了「会死是人」，语义不通。

有了这两个符号，论证可以写成：

$$Ha \\to Ma,\\ Ha\\ \\therefore\\ Ma$$

这就是命题逻辑里的肯定前件式，有效。有效性来自内部结构，不来自联结词。

### 第四步：用二元谓词写关系

「小明爱小红」：$Lxy$，其中 $x$＝小明，$y$＝小红。

二元谓词的顺序有语义：$Lab$ 与 $Lba$ 是不同的命题，前者是 a 爱 b，后者是 b 爱 a。这一点与一元谓词不同，写的时候要盯住谁在前谁在后。

### 第五步：为什么这一步是必要的

命题逻辑的有效性只依赖联结词。凡是不靠联结词、而靠「所有」「有的」「是」这些内部结构支撑的推理，命题逻辑都无能为力。

谓词逻辑补上了这块。代价是符号变复杂，收获是能处理数学、法律、科学里绝大多数真正的推理。

## 例题与分析

**例 1（易）**把「北京是首都」符号化。

**分析**：$a$＝北京，$C$＝是首都，写作 $Ca$。这是一元谓词加个体常项的标准单称命题。

**例 2（中）**把「张三比李四高」符号化。

**分析**：$a$＝张三，$b$＝李四，$H$＝比…高（二元谓词），写作 $Hab$。注意不是 $Hba$——那成了李四比张三高。二元关系的顺序就是语义，不能随手换。

**例 3（难）**为什么「所有人都会死，苏格拉底是人，所以苏格拉底会死」在命题逻辑里无效，在谓词逻辑里有效？

**分析**：命题逻辑把它切成三个原子命题，看不出「苏格拉底是人」与「所有人都会死」共享「人」这个概念，于是三句互不相干，推不出东西。

谓词逻辑把第一句写成 $\\forall x(Hx \\to Mx)$，第二句 $Ha$，第三句 $Ma$。通过全称例示从第一句得到 $Ha \\to Ma$，再用肯定前件得到 $Ma$。

关键在于：有效性来自「人」这个谓词在两句话里的同一性，而这个同一性只有拆开句子才能看见。

## 反例训练

> 所有学生都读了这本书。小张读了这本书。所以小张是学生。

符号化：

$$\\forall x(Sx \\to Rx),\\ Ra\\ \\therefore\\ Sa$$

**问题所在**：这是肯定后件的量化版。$Ra$ 只说明 $a$ 具有性质 $R$，没有说明 $a$ 具有性质 $S$。

前提真而结论假的情形很容易构造：小张是老师，也读了这本书。

符号化之后，错误变得一目了然——原来「所有学生都读了」并不能反推「读了的就是学生」。这一步在自然语言里常被「都」字掩盖，写成公式就藏不住了。

## 现实应用

- **写程序**：类型声明就是把个体与谓词分开——变量是个体，类型是谓词，赋值检查就是判断个体是否落入谓词的外延。
- **数据库**：主键是个体常项，字段是谓词。「所有员工都签了合同」与「签了合同的是员工」方向不同，写成查询也完全不同。
- **法律**：「所有 A 情形适用 B 条」与「适用 B 条的都是 A 情形」是两种主张，前者是法律解释，后者是适用范围的反向限定，不能混。
- **数学**：函数、集合、关系都可以还原为个体与谓词，这正是谓词逻辑能成为数学基础的原因。

## 本节总结

**核心概念**：个体常项、个体变项、谓词、一元谓词、二元谓词、单称命题。

**关键规则**

1. 单称命题记作 $Sa$，谓词在前，个体在后。
2. 二元谓词的顺序有语义，不能随意交换。
3. 命题逻辑管联结词，谓词逻辑管内部结构。
4. 全称命题需要量词，单称命题不需要。

**常见错误**：把谓词当成语法谓语；二元关系写反；以为符号化之后就自动有效——符号化只是翻译，有效性还要另行检验。

**需要掌握的能力**：把含个体词和性质、关系的句子翻译成谓词逻辑公式，并解释为什么命题逻辑处理不了这类推理。
`,quiz:[{id:"s4-11-q1",type:"single",stem:"「苏格拉底会死」在谓词逻辑中应写作：",options:["Sa","aM","MS","S(a)"],answer:"A",explanation:"谓词在前、个体常项在后。设 M 为「会死」，a 为苏格拉底，写作 Ma。aM 把顺序写反，S(a) 是函数写法，不是标准记法。",skill:"单称命题的符号化"},{id:"s4-11-q2",type:"judge",stem:"命题逻辑能够证明「所有人都会死，苏格拉底是人，所以苏格拉底会死」是有效的。",answer:!1,explanation:"命题逻辑把它切成三个原子命题 p、q、r，形式为 p, q 所以 r，无效。这个论证的有效性依赖句子内部的主谓结构，必须用谓词逻辑才能刻画。",skill:"命题逻辑的局限"},{id:"s4-11-q3",type:"single",stem:"「小明爱小红」若记作 Lab，其中 a 为小明、b 为小红，则 Lba 表示：",options:["小红爱小明","小明爱小红","小明不爱小红","有人爱小明"],answer:"A",explanation:"二元谓词的第一个位置是主语，第二个是宾语。Lba 意为 b 爱 a，即小红爱小明。顺序换了，命题就换了。",skill:"二元关系的顺序"},{id:"s4-11-q4",type:"multi",stem:"下列属于谓词逻辑而不属于命题逻辑的处理对象的有：（多选）",options:["句子的主谓内部结构","「所有」与「有的」这类量词","否定、合取、蕴含等联结词","个体与个体之间的关系"],answer:["A","B","D"],explanation:"A、B、D 都是谓词逻辑新增的处理能力。C 是两种逻辑共有的部分，命题逻辑的核心正是联结词的真值行为。",skill:"两种逻辑的分工"},{id:"s4-11-q5",type:"short",stem:"为什么命题逻辑无法处理「所有人都会死，苏格拉底是人，所以苏格拉底会死」？请从句子结构说明。",keywords:[["原子命题","整体","不可分"],["内部结构","主项","谓词"],["人","共同词项","联系"]],answer:"命题逻辑把每个简单句当作不可再分的原子命题，三句话变成三个互不相干的符号，看不到它们共享「人」这个谓词，也看不到「苏格拉底」是个体。因此它只能得到 p、q 所以 r 这样的无效形式。谓词逻辑拆开句子，才能显示三句之间的结构联系。",explanation:"关键在于命题逻辑的分析粒度太粗，它本身并没有算错。分辨率不够，就看不见支撑有效性的那层结构。",skill:"量化的必要性"}]},{id:"s4-12",no:44,code:"10.3",title:"全称量词与存在量词",stage:4,chapter:"第10章 谓词逻辑：量化理论",minutes:18,lead:"为什么「所有学生都用功」要写成蕴含，而「有的学生用功」必须写成合取？把这两个符号用反，句子会变成什么意思？",objectives:["写出全称量词与存在量词的符号形式，并说明辖域的作用","把 A/E/I/O 四种直言命题准确翻译成量化公式","说明全称用蕴含、特称用合取的理由，并识别用反后的错误"],concepts:["全称量词","存在量词","辖域","约束变项","自由变项","闭公式"],body:`
## 核心定义

**专业定义**：全称量词 $\\forall x$ 表示「对所有 x」，存在量词 $\\exists x$ 表示「存在至少一个 x」。量词后面跟一个公式，量词的作用范围称为辖域。

**通俗解释**：$\\forall$ 是「挨个都」，$\\exists$ 是「至少逮着一个」。这两个符号把「所有」「有的」变成了可以计算的东西。

**关键术语**

- **全称量词**：$\\forall x$，读作「对所有 x」。
- **存在量词**：$\\exists x$，读作「存在 x」。
- **辖域**：量词后面紧跟的那个公式，量词只在这个范围内起作用。
- **约束变项**：落在量词辖域内、被该量词管住的变项。
- **自由变项**：不在任何量词辖域内的变项。
- **闭公式**：没有自由变项的公式，有确定真值；含自由变项的叫开公式。

**容易混淆的概念**

> 全称量词用蕴含，存在量词配「且」（合取）。这是翻译里最容易错的地方，用反了句子意思会完全走样。

> 「所有 S 是 P」不是 $\\forall x(Sx \\land Px)$。后者说的是「一切都是 S，且一切都是 P」，比原句强得多。

## 理论讲解

### 第一步：认识两个量词

$$\\forall x\\, Px:\\ \\text{对所有 x，x 是 P}$$

$$\\exists x\\, Px:\\ \\text{存在 x，x 是 P}$$

前者要求论域里每个对象都满足 P，后者只要求至少一个。

### 第二步：翻译 A 命题

「所有学生都是用功的」：

$$\\forall x(Sx \\to Px)$$

为什么用蕴含？因为这句话并不保证世上有学生，它只说「一旦你是学生，你就用功」。

蕴含正好表达这个条件关系：前件假时整个蕴含为真。所以一块石头（不是学生）不会让这句话变假——这正符合直觉。

### 第三步：翻译 I 命题

「有的学生是用功的」：

$$\\exists x(Sx \\land Px)$$

为什么用合取？因为这句话要求存在一个东西，它**同时**是学生和用功的。合取正好要求两项都成立。

若写成 $\\exists x(Sx \\to Px)$，只要找到一个不是学生的东西（比如一块石头），蕴含就为真，整句就真了——这显然荒唐。一块石头怎么能证明「有的学生用功」？

### 第四步：翻译 E 与 O

「没有学生是用功的」有两种等价写法：

$$\\forall x(Sx \\to \\neg Px)\\ \\equiv\\ \\neg\\exists x(Sx \\land Px)$$

前者贴近中文语序，后者在做否定运算时更方便。

「有的学生不是用功的」：

$$\\exists x(Sx \\land \\neg Px)$$

注意否定加在谓词上，不是加在整个量词上。$\\neg\\exists x(Sx \\land Px)$ 是 E 命题，不是 O 命题，两者正好矛盾。

### 第五步：检查辖域

$$\\forall x(Sx \\to Px) \\land Qx$$

这个式子里最后的 $x$ 是自由的，因为它不在 $\\forall x$ 的辖域内。这样的公式是开公式，本身不表达命题。

正确写法要看原意：若想说「所有 S 都是 P，并且某个东西是 Q」，应写 $\\forall x(Sx \\to Px) \\land \\exists x Qx$；若想说「所有 S 都是 P 且 Q」，则写 $\\forall x((Sx \\to Px) \\land Qx)$。

括号的位置决定辖域，辖域决定意思。这一步最枯燥，也最容易出错。

## 例题与分析

**例 1（易）**「所有猫都是动物」符号化。

**分析**：$\\forall x(Cx \\to Ax)$。全称用蕴含。

**例 2（中）**「有的鸟不会飞」符号化。

**分析**：$\\exists x(Bx \\land \\neg Fx)$。特称用合取，否定加在谓词上。

若写成 $\\exists x(Bx \\land Fx)$，意思就变成了「有的鸟会飞」，与原句相反。

**例 3（难）**「只有会员才能进入」符号化。

**分析**：「只有 A 才 B」等于「所有 B 都是 A」。设 $M$＝会员，$E$＝能进入，写作：

$$\\forall x(Ex \\to Mx)$$

易错写法是 $\\forall x(Mx \\to Ex)$，那成了「所有会员都能进入」，把必要条件说成了充分条件。这两句话在合同、规章里差别巨大。

## 反例训练

> 把「所有玫瑰都是花」写成 $\\forall x(Rx \\land Fx)$。

**问题所在**：$\\forall x(Rx \\land Fx)$ 说的是「论域里每个东西都是玫瑰，而且每个东西都是花」。它断定了世界上所有对象都是玫瑰——石头、月亮、你的左手，全是玫瑰。

这比原句强得多，而且明显为假。

正确写法：

$$\\forall x(Rx \\to Fx)$$

这个式子只对玫瑰提出要求，对非玫瑰不作任何断言。全称命题用蕴含，正是为了不让主项之外的对象被牵连进来。用合取，等于把整个论域都拖进了主项。

## 现实应用

- **写规格说明**：「所有请求都必须带令牌」写成 $\\forall x(Rx \\to Tx)$，可以直接对照实现检查，也能自动生成测试用例。
- **数据库约束**：全称约束（每个订单都有客户）与存在约束（至少有一个订单）在 SQL 里写法完全不同，混淆会导致约束形同虚设。
- **合同解释**：「所有附件都是合同的一部分」与「存在附件是合同的一部分」，一字之差，义务范围天差地别。
- **算法正确性**：循环不变式常用全称量词表述，程序验证的本质就是把 $\\forall$ 变成归纳步骤。

## 本节总结

**核心概念**：全称量词、存在量词、辖域、约束变项、自由变项、闭公式。

**关键规则**

1. 所有 S 是 P：$\\forall x(Sx \\to Px)$。
2. 有的 S 是 P：$\\exists x(Sx \\land Px)$。
3. 没有 S 是 P：$\\forall x(Sx \\to \\neg Px) \\equiv \\neg\\exists x(Sx \\land Px)$。
4. 有的 S 不是 P：$\\exists x(Sx \\land \\neg Px)$。
5. 量词只约束其辖域内的变项。

**常见错误**：全称用合取、特称用蕴含，两个都错；「只有」的方向搞反；忘记检查辖域，导致变项游离。

**需要掌握的能力**：把四种直言命题准确翻译成量化公式，并说明为什么全称用蕴含、特称用合取。
`,quiz:[{id:"s4-12-q1",type:"single",stem:"「有的学生是党员」的正确符号化是：",options:["∃x(Sx → Px)","∃x(Sx ∧ Px)","∀x(Sx → Px)","∀x(Sx ∧ Px)"],answer:"B",explanation:"特称命题要求存在一个东西同时具有两个性质，所以用合取。写成蕴含 ∃x(Sx → Px) 时，一个非学生就能使整个式子为真，语义错误。",skill:"I 命题的翻译"},{id:"s4-12-q2",type:"judge",stem:"∀x(Sx ∧ Px) 是「所有 S 是 P」的正确翻译。",answer:!1,explanation:"∀x(Sx ∧ Px) 断定论域中每个对象既是 S 又是 P，比「所有 S 是 P」强得多，通常为假。正确形式是 ∀x(Sx → Px)，用蕴含限定主项范围。",skill:"全称命题的翻译"},{id:"s4-12-q3",type:"single",stem:"「没有学生是懒的」可以写作：",options:["∃x(Sx ∧ ¬Lx)","∀x(Sx → ¬Lx)","¬∀x(Sx → Lx)","∃x(Sx → Lx)"],answer:"B",explanation:"「没有 S 是 P」等于「所有 S 都不是 P」，即 ∀x(Sx → ¬Lx)。它与 ¬∃x(Sx ∧ Lx) 等价。A 是 O 命题，C 是 O 命题的等价式。",skill:"E 命题的翻译"},{id:"s4-12-q4",type:"multi",stem:"关于量词的辖域，下列说法正确的有：（多选）",options:["量词只约束其辖域内出现的同类变项","辖域外的同名变项是自由的","含自由变项的公式不表达确定的命题","括号的位置不影响公式的意思"],answer:["A","B","C"],explanation:"A、B 是辖域的定义，C 是开公式的性质。D 错：括号决定辖域范围，进而决定哪些变项被约束，意思可能完全不同。",skill:"辖域与约束"},{id:"s4-12-q5",type:"short",stem:"为什么全称命题用蕴含、特称命题用合取？请各举一个用反后出错的例子。",keywords:[["所有","蕴含","一旦是"],["存在","合取","同时"],["石头","非学生","反例"]],answer:"全称命题只对主项范围内的对象作断言，蕴含的前件正好起限定作用，非主项对象不使句子为假。特称命题要求存在一个同时满足两个性质的对象，合取正好表达「同时」。若全称用合取，会断言论域中一切都是 S；若特称用蕴含，一块石头就能让「有的学生用功」为真。",explanation:"两个符号的选择出于语义要求：蕴含负责限定范围，合取负责同时成立。用反了，量词的约束力就丢了。",skill:"量词与联结词的搭配"}]},{id:"s4-13",no:45,code:"10.4–10.5",title:"量词的否定与量化证明",stage:4,chapter:"第10章 谓词逻辑：量化理论",minutes:18,lead:"「并非所有人都及格」为什么等于「有人没及格」，而不等于「所有人都没及格」？否定号穿过量词时，到底发生了什么？",objectives:["运用量词否定律改写含否定号的量化公式","正确使用 UI、UG、EI、EG 四条规则构造量化证明","说明 EI 与 UG 各自的使用限制及其理由"],concepts:["量词否定律","全称例示","全称概括","存在例示","存在概括"],body:`
## 核心定义

**专业定义**：量词否定律说明否定号穿过量词时量词要翻转；量化证明是使用四条量词规则（UI、UG、EI、EG）从前提推出结论的形式证明。

**通俗解释**：「并非所有人及格」等于「有人没及格」；「并非有人及格」等于「所有人都没及格」。否定一个「所有」，就得到一个「有的」；否定一个「有的」，就得到一个「所有」。

**关键术语**

- **量词否定律**：$\\neg\\forall x Px \\equiv \\exists x \\neg Px$；$\\neg\\exists x Px \\equiv \\forall x \\neg Px$。
- **UI（全称例示）**：从 $\\forall x \\Phi x$ 推出 $\\Phi a$ 或 $\\Phi y$。
- **UG（全称概括）**：从 $\\Phi y$（y 任意）推出 $\\forall x \\Phi x$。
- **EI（存在例示）**：从 $\\exists x \\Phi x$ 推出 $\\Phi y$，y 必须是新的。
- **EG（存在概括）**：从 $\\Phi a$ 推出 $\\exists x \\Phi x$。

**容易混淆的概念**

> 否定号穿过量词时，量词必须翻转。$\\neg\\forall x Px$ 不是 $\\forall x \\neg Px$——前者是「并非所有」，后者是「所有都非」。

> UI 可以用于任何个体，EI 只能用于全新的变项。这是两条规则最大的区别，也是考试最爱设陷阱的地方。

## 理论讲解

### 第一步：量词否定律

$$\\neg\\forall x Px \\equiv \\exists x \\neg Px$$

$$\\neg\\exists x Px \\equiv \\forall x \\neg Px$$

直观检验：说「不是所有人都及格」，等于说「有人没及格」。说「不存在及格的人」，等于说「所有人都不及格」。

两条定律可以记成一句：否定穿过量词，量词翻个身。

### 第二步：把否定律用到直言命题上

A 命题的否定：

$$\\neg\\forall x(Sx \\to Px) \\equiv \\exists x(Sx \\land \\neg Px)$$

右边正是 O 命题。所以 A 与 O 矛盾——这个在第 5 章用方阵讲过的事实，在量化层面得到了独立验证。

I 命题的否定：

$$\\neg\\exists x(Sx \\land Px) \\equiv \\forall x(Sx \\to \\neg Px)$$

右边正是 E 命题。

注意推导中间用了「蕴含的否定是合取」这一等价：$\\neg(A \\to B) \\equiv A \\land \\neg B$。这是量化否定里最容易漏的一步。

### 第三步：四条证明规则

**UI**：$\\forall x \\Phi x \\therefore \\Phi a$。全称命题对每个个体都成立，所以可以挑任何一个。

**UG**：$\\Phi y \\therefore \\forall x \\Phi x$。前提是 y 必须「任意」——它不能是某个特定个体，也不能来自 EI。

**EI**：$\\exists x \\Phi x \\therefore \\Phi y$。既然存在，就给它起个名字。但这个名字必须是新的，不能与已有名称冲突。

**EG**：$\\Phi a \\therefore \\exists x \\Phi x$。有一个具体的，就存在。

### 第四步：一个完整证明

证明：$\\forall x(Sx \\to Mx),\\ \\exists x(Sx)\\ \\therefore\\ \\exists x(Mx)$

1. $\\forall x(Sx \\to Mx)$　前提
2. $\\exists x(Sx)$　前提
3. $Sa$　2，EI（a 是新常项）
4. $Sa \\to Ma$　1，UI
5. $Ma$　3、4，肯定前件
6. $\\exists x(Mx)$　5，EG

每一步都标注规则与依据，这是形式证明的规范写法。

### 第五步：EI 与 UG 的限制

- **EI 的常项必须此前未出现**。否则会把两个不同的存在混为同一个体。
- **UG 概括的变项必须是任意的**。若它来自 EI，说明它代表某个特定个体，不能推广到所有。

两条限制的理由相同：都存在「名字」上。EI 是给未知者起名，UG 是对任意者概括。一旦名字混淆，证明就悄悄多假设了东西。

## 例题与分析

**例 1（易）**写出「并非所有学生都及格」的等价式。

**分析**：$\\neg\\forall x(Sx \\to Px) \\equiv \\exists x(Sx \\land \\neg Px)$，即「有的学生没及格」。

**例 2（中）**写出「不存在会飞的猪」的两种等价写法。

**分析**：$\\neg\\exists x(Px \\land Fx) \\equiv \\forall x(Px \\to \\neg Fx)$。前者读作「没有会飞的猪」，后者读作「所有猪都不会飞」。两句意思相同。

**例 3（难）**证明 $\\neg\\exists x(Sx \\land Px) \\therefore \\forall x(Sx \\to \\neg Px)$。

**分析**：

1. $\\neg\\exists x(Sx \\land Px)$　前提
2. $\\forall x\\neg(Sx \\land Px)$　1，量词否定
3. $\\neg(Sa \\land Pa)$　2，UI
4. $Sa \\to \\neg Pa$　3，德摩根
5. $\\forall x(Sx \\to \\neg Px)$　4，UG

第 5 步的 UG 合法，因为 $a$ 是任意选取的——第 3 步用的是 UI，不是 EI。若第 3 步来自 EI，这一步就非法了。

## 反例训练

> 已知 $\\exists x(Sx \\land Px)$，所以 $Sa \\land Pa$。

**问题所在**：EI 不能凭空指定一个具体的 $a$。若 $a$ 已经在前提中出现过，这个推理就把「存在某个既是 S 又是 P 的东西」偷换成了「这个特定的 a 既是 S 又是 P」。

形式上：

$$\\exists x \\Phi x\\ \\therefore\\ \\Phi a\\quad (a\\ \\text{已在前提中出现})$$

正确用法是引入一个全新的常项，并且这个常项不能在最终结论里出现。EI 的作用是「给它起个临时的名字」，不是「指认它是谁」。

举个例子：已知「有人偷了文件」，不能推出「张三偷了文件」——哪怕张三确实在场。

## 现实应用

- **数学证明**：几乎所有存在性证明都先用 EI 取出一个对象，做完推导再用 EG 收尾。这一步的合法性靠「新名字」保证。
- **法律事实认定**：「存在一个人实施了该行为」不能直接推出「被告实施了该行为」。这是 EI 误用的司法版，也是无罪推定的逻辑根据。
- **调试程序**：「存在一个输入导致崩溃」可以先假定某个输入 i 导致崩溃，但 i 必须是未用过的符号，否则会与其他约束冲突。
- **哲学分析**：否定存在命题（「不存在上帝」）与全称命题（「一切都非上帝」）的等价，是本体论讨论的语法基础。

## 本节总结

**核心概念**：量词否定律、UI、UG、EI、EG、任意个体、新常项。

**关键规则**

1. $\\neg\\forall \\equiv \\exists\\neg$；$\\neg\\exists \\equiv \\forall\\neg$。
2. UI 可用于任何个体，EG 可用于任何常项。
3. EI 的常项必须是新的。
4. UG 的变项必须是任意的。

**常见错误**：否定号穿过量词时不翻转量词；EI 复用已有常项；UG 概括由 EI 得到的个体。

**需要掌握的能力**：熟练运用量词否定律改写公式，写出含四条规则的完整证明，并说明每一步的限制。
`,quiz:[{id:"s4-13-q1",type:"single",stem:"¬∀xPx 等价于：",options:["∀x¬Px","∃x¬Px","¬∃xPx","∃xPx"],answer:"B",explanation:"否定号穿过全称量词时，量词翻转为存在量词，否定留给谓词，所以是 ∃x¬Px。∀x¬Px 是「所有都非」，意思完全不同。",skill:"量词否定律"},{id:"s4-13-q2",type:"judge",stem:"存在例示（EI）可以把 ∃xΦx 例示为任何已有的个体常项。",answer:!1,explanation:"EI 必须使用此前未出现过的新常项。若复用已有常项，就把两个不同的存在混为同一个体，等于凭空增加了同一性假设。",skill:"EI 的使用限制"},{id:"s4-13-q3",type:"single",stem:"「并非有的学生作弊」等价于：",options:["有的学生没作弊","所有学生都没作弊","所有学生都作弊","并非所有学生都作弊"],answer:"B",explanation:"¬∃x(Sx ∧ Cx) 等价于 ∀x(Sx → ¬Cx)，即所有学生都没作弊。A 是 O 命题，D 是 A 命题的否定。",skill:"存在量词的否定"},{id:"s4-13-q4",type:"multi",stem:"关于 UG（全称概括），下列说法正确的有：（多选）",options:["被概括的变项必须是任意选取的","由 EI 得到的个体不能用于 UG","被概括的变项不能在前提中自由出现","UG 可以从任何常项推出全称命题"],answer:["A","B","C"],explanation:"A、B、C 都是「任意性」要求的不同说法。D 错：从特定常项只能做 EG，不能做 UG，否则会把一个个体的性质推广到全体。",skill:"UG 的使用限制"},{id:"s4-13-q5",type:"short",stem:"用四条规则证明：∀x(Sx → Mx)，∃x(Sx)，所以 ∃x(Mx)。",keywords:[["EI","存在例示","新常项"],["UI","全称例示"],["肯定前件","分离"],["EG","存在概括"]],answer:"第一步，由 ∃x(Sx) 用 EI 得到 Sa，a 为新常项。第二步，由 ∀x(Sx → Mx) 用 UI 得到 Sa → Ma。第三步，由 Sa 与 Sa → Ma 用肯定前件得 Ma。第四步，由 Ma 用 EG 得 ∃x(Mx)。",explanation:"顺序不能颠倒：必须先 EI 取得个体，再 UI 得到该个体的条件句，否则无法做肯定前件。EG 放最后，把具体个体收回存在。",skill:"量化证明的构造"}]},{id:"s4-14",no:46,code:"10.6–10.7",title:"无效性证明与常见量化错误",stage:4,chapter:"第10章 谓词逻辑：量化理论",minutes:17,lead:"要证明一个论证有效，得写完整证明；要证明它无效，只要造一个小世界——在那个世界里，前提全真，结论偏偏是假。这个小世界怎么造？",objectives:["用解释法为无效的量化论证构造反模型","列出量化翻译与证明中的六类常见错误并给出纠正","区分「证明有效」与「构造反例证无效」两种方法的适用范围"],concepts:["解释法","论域","外延","反模型","存在谬误","EI 与 UG 误用"],body:`
## 核心定义

**专业定义**：解释法（interpretation）是构造一个论域并为每个谓词指派外延，使所有前提为真而结论为假，从而证明论证形式无效的方法。

**通俗解释**：要说一个论证形式靠不住，最狠的办法是给它编一个「反例世界」——在这个世界里，前提全成立，结论却塌了。

**关键术语**

- **论域（domain）**：解释里所有对象的集合，通常取很小的集合。
- **外延（extension）**：谓词所指的那批对象。
- **反模型（countermodel）**：使前提真、结论假的解释。
- **存在谬误**：从全称前提推出存在结论。
- **EI 误用**：用已出现的常项做存在例示。
- **UG 误用**：对非任意个体做全称概括。

**容易混淆的概念**

> 解释法只能用来证明无效，不能用来证明有效。造不出反例不等于有效——可能只是你没想到。

> 论域不是「越大越有说服力」。反例世界的要诀是越小越好，一两个对象就够，对象一多反而容易算错。

## 理论讲解

### 第一步：为什么要用解释法

有些形式一看就无效；有些形式很复杂，规则检查容易漏。解释法给出的是构造性反驳：只要你能造出一个反例世界，无效就板上钉钉，不依赖任何规则清单。

### 第二步：解释的四个要素

1. 选一个论域 D，越小越好，通常一两个对象。
2. 为每个个体常项指派 D 中的一个对象。
3. 为每个谓词指派 D 的一个子集（一元）或子集之间的关系（二元）。
4. 逐一计算前提与结论的真值。

### 第三步：一个完整的例子

要证 $\\forall x(Sx \\to Px)\\ \\therefore\\ \\forall x(Px \\to Sx)$ 无效。

取 $D=\\{1\\}$，$S=\\varnothing$，$P=\\{1\\}$。

- 前提：对 1 而言 $S1$ 假，蕴含为真。所以前提真。
- 结论：$P1$ 真而 $S1$ 假，蕴含为假。所以结论假。

前提真、结论假，无效得证。

这个例子还顺带说明：论域里只有一个对象，也完全够用。造反例不需要宏大设定。

### 第四步：常见错误清单

| 错误 | 表现 | 纠正 |
| 全称用合取 | $\\forall x(Sx \\land Px)$ 译「所有 S 是 P」 | 改为 $\\forall x(Sx \\to Px)$ |
| 特称用蕴含 | $\\exists x(Sx \\to Px)$ 译「有的 S 是 P」 | 改为 $\\exists x(Sx \\land Px)$ |
| 否定不换量词 | $\\neg\\forall x Px$ 写成 $\\forall x \\neg Px$ | 量词必须翻转 |
| EI 复用常项 | 两个存在命题用同一个 a | 第二个用新的 b |
| UG 概括 EI 个体 | 从 $Sa$（a 由 EI 得）推 $\\forall x Sx$ | 改用任意变项 y |
| 从全称推存在 | $\\forall x Sx \\therefore \\exists x Sx$ | 需补前提「存在 x」 |

六条里有三条关于量词与联结词的搭配，两条关于证明规则的限制，一条关于存在含义。这三块正是谓词逻辑的全部雷区。

### 第五步：检查顺序

1. 先看形式。若明显是肯定后件、否定前件之类的结构，直接构造反例。
2. 若形式复杂，先试最小论域（一个对象），往往就够。
3. 逐一核验：前提是否为真，结论是否为假。两步都成立才算反模型。

若结论在前提为真时被迫为真，那就找不到反模型——但这时你需要的是证明，不是继续找。

## 例题与分析

**例 1（易）**证明 $\\exists x Sx \\therefore \\forall x Sx$ 无效。

**分析**：取 $D=\\{1,2\\}$，$S=\\{1\\}$。前提真（存在一个 S），结论假（2 不是 S）。无效。

这个反例说明：存在推不出全称，这是量化里最基本的非对称性。

**例 2（中）**证明 $\\forall x(Sx \\to Px),\\ \\exists x Px \\therefore \\exists x Sx$ 无效。

**分析**：取 $D=\\{1\\}$，$S=\\varnothing$，$P=\\{1\\}$。

前提一「所有 S 是 P」空真；前提二「存在 P」真，因为 1 是 P；结论「存在 S」假。

两条前提都真，结论假，无效。这就是「所有学生都读了书，有人读了书，所以有学生」的量化版——错在把「有人」偷换成「有学生」。

**例 3（难）**判断 $\\forall x(Sx \\to Px),\\ \\forall x(Px \\to Qx)\\ \\therefore\\ \\forall x(Sx \\to Qx)$ 是否有效。

**分析**：有效。这是假言三段论的量化版。

理由：任取 D 中一个对象 d。若 $Sd$ 真，由第一前提得 $Pd$，再由第二前提得 $Qd$。所以 $Sd \\to Qd$ 对任意 d 成立，全称概括得结论。

注意方法上的区别：这里不能用解释法，解释法只能证无效。要证有效，得给出证明或语义论证。

## 反例训练

> 所有哲学家都是会思考的人，所以所有会思考的人都是哲学家。

**问题所在**：这是 A 命题的非法换位，从 A 直接跳到 A。用解释法一击即破：取 $D=\\{1\\}$，哲学家为空，会思考的人为 $\\{1\\}$。前提空真，结论假。

形式上：

$$\\forall x(Sx \\to Px)\\ \\therefore\\ \\forall x(Px \\to Sx)$$

这正是「肯定后件」的量化版。谓项在前提中不周延，在结论中成了全称主项，周延性越界。

有趣的是，同一句话在第 5 章用对当方阵看，是换位错误；在第 10 章用量词看，是肯定后件。两种分析指向同一个病灶——这说明两套工具是相通的。

## 现实应用

- **反驳谬论**：给对方一个反例世界，比讲一堆道理更有力。一个对象、两个外延，三十秒讲完。
- **测试业务规则**：新设计的规则先用一个最小案例跑一遍，看是否会推出荒谬结论，这就是工程上的反模型思维。
- **教学**：解释法把「无效」变成可以演示的东西。学生看着那个小世界，一下就懂为什么推不出来。
- **形式化验证**：模型检验（model checking）就是大规模的解释法——枚举状态，自动找反例。

## 本节总结

**核心概念**：解释法、论域、外延、反模型、存在谬误、EI 与 UG 误用。

**关键规则**

1. 证无效：构造使前提真、结论假的解释。
2. 证有效：用证明或语义论证，不能用解释法。
3. 论域越小越好，通常一两个对象足够。
4. 全称用蕴含，特称用合取，否定换量词。

**常见错误**：拿解释法去证有效；论域选得过大导致计算混乱；忘记检查空类情形。

**需要掌握的能力**：为任意无效形式构造反模型，能列出并纠正六类常见量化错误。
`,quiz:[{id:"s4-14-q1",type:"single",stem:"要证明一个量化论证形式无效，最直接的方法是：",options:["写出完整的形式证明","构造一个使前提真、结论假的解释","说明它的结论不符合常识","指出它的前提在现实中为假"],answer:"B",explanation:"解释法通过构造反模型来证明无效：论域、外延都给定，前提真而结论假。A 是证有效的方法，C、D 都不构成形式上的反驳。",skill:"解释法"},{id:"s4-14-q2",type:"judge",stem:"如果找不到一个使前提真、结论假的解释，就说明该论证有效。",answer:!1,explanation:"找不到不等于不存在，可能只是没想到。证有效必须给出形式证明或语义论证。解释法只能证无效，不能证有效，这是方法上的单向性。",skill:"两种证明方法的分工"},{id:"s4-14-q3",type:"single",stem:"∀xSx 所以 ∃xSx 这个推理：",options:["有效，全称蕴含存在","无效，缺少「存在至少一个对象」的前提","有效，只要论域非空","无效，因为全称命题总是假的"],answer:"B",explanation:"现代解释下全称命题没有存在含义。若论域为空，∀xSx 空真而 ∃xSx 假，所以形式无效。要让它有效，必须补上「论域非空」或「存在 x」这一前提。",skill:"存在谬误"},{id:"s4-14-q4",type:"multi",stem:"下列属于常见量化错误的有：（多选）",options:["把「所有 S 是 P」写成 ∀x(Sx ∧ Px)","把「有的 S 是 P」写成 ∃x(Sx → Px)","否定 ∀xPx 时写成 ∀x¬Px","用 EI 时引入全新的常项"],answer:["A","B","C"],explanation:"A 把范围扩大到整个论域，B 让非主项对象也能满足公式，C 忘了翻转量词，三者都是典型错误。D 恰恰是正确做法，不是错误。",skill:"常见量化错误"},{id:"s4-14-q5",type:"short",stem:"用解释法证明 ∀x(Sx → Px) 所以 ∀x(Px → Sx) 无效，写出论域与外延指派。",keywords:[["论域","D","一个对象"],["S","空集","空"],["P","非空","包含"],["前提真","结论假"]],answer:"取论域 D＝{1}，令 S 的外延为空集，P 的外延为 {1}。此时前提「对所有 x，若 x 是 S 则 x 是 P」为真，因为没有任何对象是 S，蕴含空真；结论「对所有 x，若 x 是 P 则 x 是 S」为假，因为 1 是 P 却不是 S。前提真而结论假，故无效。",explanation:"关键在于让 S 为空。空外延使全称前提自动为真，而结论要求 P 包含于 S，只要 P 非空就必然为假。一个对象就足够。",skill:"反模型的构造"}]}],U3=[{id:"s5-01",no:47,code:"11.1",title:"归纳与演绎再探",stage:5,chapter:"第11章 类比推理",minutes:14,lead:"我们见过的每一只天鹅都是白的，能否因此断定天鹅都是白的？如果不能，那是因为证据还不够多，还是因为这种推理从根上就给不出「必然」？",objectives:["说清归纳论证与演绎论证在结论强度上的根本差别","用样本量、代表性、反例、结论野心四个维度给归纳强度定级","解释归纳结论为何总带着「超出前提」的跳跃"],concepts:["归纳论证","归纳强度","或然性","结论的超越性","演绎有效性"],body:`
## 核心定义

**专业定义**：归纳论证是前提只对结论提供**或然性支持**的论证。前提为真时，结论可能真、也可能假，支持力度可强可弱，称为归纳强度。演绎论证则承诺前提真则结论必然真，只有有效与无效，没有强弱之分。

**通俗解释**：演绎像算账，前提一给，答案被锁死；归纳像押注，前提给了你下注的理由，却不保证开奖。见过一万只白天鹅，你对「天鹅都是白的」的信心会上升，这份信心始终到不了「必然」那一格。

**关键术语**

- **归纳强度**：前提对结论的支持力度，可强可弱，是个连续量。
- **或然性结论**：结论为真的概率落在零与一之间。
- **结论的超越性**：归纳结论所断定的范围超出了前提所断定的范围。

**容易混淆的概念**

> 归纳强 ≠ 结论真。强归纳也会翻车，前提全真而结论假并不稀奇，这只说明或然性支持本来就不保证结果。

> 归纳 ≠ 不严谨。归纳有严格的评价标准，只是它的结论形态是概率性的，评价方式也因此从「对错」变成「强弱」。

## 理论讲解

### 第一步：看结论有没有被前提锁死

把「所有金属都导电，铜是金属，所以铜导电」里的词换成字母，结构照样成立，任何替换都造不出反例。这种锁死就是演绎有效性。

再看「我见过的乌鸦都是黑的，所以乌鸦都是黑的」，换成「我见过的 A 都是 B，所以所有 A 都是 B」。这个结构允许反例：只要有一只非黑的乌鸦，前提仍可全真而结论假。这就是归纳。

### 第二步：承认强度是一个刻度

归纳没有「有效／无效」的二分，只有强弱。判断强弱要看四件事，缺一条就要打折：

1. **样本量**：观察得越多，支持越强。
2. **样本代表性**：样本是否覆盖了总体的各种情形。
3. **有无反例**：出现一个反例，强度可能骤降。
4. **结论的野心**：结论越笼统、越绝对，同样的证据就越撑不住。

| 证据情况 | 结论 | 强度 |
|---|---|---|
| 见过 3 只白天鹅 | 下一只天鹅是白的 | 弱 |
| 见过 3 万只白天鹅，覆盖多个地区 | 下一只天鹅是白的 | 较强 |
| 见过 3 万只白天鹅，覆盖多个地区 | 所有天鹅都是白的 | 强，但永远敞开 |

### 第三步：看清结论往外跳了多远

归纳的每一步都在往外跳：从过去跳到未来，从个体跳到整体，从观察跳到规律。跳跃带来信息增量，也带来风险。休谟的老问题就在这里——我们凭什么相信未来像过去？用归纳证明归纳会循环，用演绎证明归纳又推不出来。

$$\\text{过去如此} \\not\\Rightarrow \\text{未来如此（演绎意义上）}$$

逻辑学不解决这个哲学难题，但它给了你一把尺子：跳跃无法取消，那就衡量跳得稳不稳。

### 第四步：区分两条归纳路线

- **枚举归纳**：看到一个又一个例子，推广到全体。
- **类比归纳**：两个对象在某些方面相似，推出在另一方面也相似。

后面几节会把这两条线分别展开，再进入因果与概率。

## 例题与分析

**例 1（易）** 判断：「所有哺乳动物都用肺呼吸，鲸是哺乳动物，所以鲸用肺呼吸。」

**分析**：这是演绎。前提真则结论必然真，没有「可能不成立」的空间。它的前提在事实上是否准确是另一回事，与形式无关。

**例 2（中）** 比较两句话的强度。

(a)「我采访了三位同事，他们都支持这个方案，所以全公司多数人支持。」
(b)「随机抽取 1200 名员工，其中 58% 支持，所以全公司约六成支持。」

**分析**：(b) 明显更强。差别不在措辞，而在样本——(a) 只有三人，且同事多半与你同部门，代表性差；(b) 有随机抽样和足够样本量，还用了「约」这种克制的结论。归纳的强弱由证据结构决定，与说话人的语气无关。

**例 3（难）**「归纳法靠不住，因为过去有很多归纳结论后来被推翻了。」这句话有什么毛病？

**分析**：它自己就是归纳——「过去的归纳失败过，所以归纳不可靠」。用归纳否定归纳不算逻辑矛盾，但它混淆了两件事：归纳**不保证**结论为真，与归纳**没有价值**。天气预报、药物试验都靠归纳推进，出错时我们修的是方法与样本，不会因此宣布归纳作废。

## 反例训练

> 这只基金过去 12 个月每月都涨，可见下个月一定还会涨。

**问题所在**：把「过去持续」直接当成「未来必然」，还把归纳结论说成了必然结论。涨跌受政策、估值、资金面影响，历史序列本身不构成对下月的支持。更麻烦的是「一定」二字——即便归纳很强，也只能说「较可能」。

**改法**：结论改成概率形式，并补机制理由。过去 12 个月的上涨若有可解释的原因（盈利持续改善），且这些原因仍在，那么继续上涨的可能性较高；若无机制支持，历史涨幅甚至可能是均值回归的信号。

## 现实应用

- **医疗**：新药在三期试验中对 3000 名患者有效，这是强归纳，但说明书仍要标注适用人群与不良反应率。
- **新闻**：看到「调查显示 87% 的人认为……」，先问样本怎么抽的、题目原文是什么、多少人拒答。
- **投资**：「过去十年年化 12%」是可以参考的区间，不能当成承诺。
- **日常判断**：连续三次在这家店吃到不新鲜的海鲜，足够让你降低期待，还不够断定这家店永远不行。

## 本节总结

**核心概念**：归纳论证、归纳强度、或然性、结论的超越性、演绎有效性。

**关键规则**

1. 演绎看有效／无效，归纳看强／弱。
2. 归纳结论永远带概率，说「一定」就已经越界。
3. 强弱由样本量、代表性、反例、结论野心共同决定。

**常见错误**：把强归纳当证明；用一个反例否定整个归纳方向；用「归纳曾出错」推出「归纳无用」。

**需要掌握的能力**：拿到一段推广性论断，能立刻指出它的样本是什么、结论跳了多远、中间缺哪块支撑。
`,quiz:[{id:"s5-01-q1",type:"single",stem:"关于归纳强度，下列说法正确的是：",options:["归纳强度只有「强」与「弱」两种取值","归纳强度是程度问题，前提真时结论只是可能真","归纳强度足够高时，结论就变成必然为真","归纳强度与样本量无关，只与结论的措辞有关"],answer:"B",explanation:"归纳强度是连续的刻度，前提真只让结论更可能真。A 把它误当成二分，C 混淆了或然与必然，D 忽略了样本量这一核心因素。",skill:"归纳强度"},{id:"s5-01-q2",type:"judge",stem:"演绎论证有效时，前提为真则结论必然为真；归纳论证再强，也不能给出这种保证。",answer:!0,explanation:"这正是两者的分界。演绎的有效性是一个封闭承诺，归纳只提供或然性支持，无论样本多大，结论都保留为假的可能性。",skill:"归纳与演绎的区别"},{id:"s5-01-q3",type:"single",stem:"下列四个归纳中，强度最高的是：",options:["我见过的三只猫都怕水，所以猫都怕水","我们宿舍六个人都熬夜，所以大学生普遍熬夜","从全国随机抽取 5000 名成年人，其中 31% 有熬夜习惯，所以全国约三成成年人熬夜","我认识的医生都说这种药有效，所以这种药对所有人有效"],answer:"C",explanation:"C 有随机抽样、样本量大、结论克制（「约三成」）。A 样本极小，B 与 D 的样本都是同质小圈子，代表性差，且 D 的结论过于绝对。",skill:"归纳强度的评价"},{id:"s5-01-q4",type:"multi",stem:"判断一个归纳论证的强弱，通常要考虑哪些因素？（多选）",options:["样本的数量","样本对总体的代表性","是否出现过反例","结论说得有多绝对"],answer:["A","B","C","D"],explanation:"四项都影响支持力度。样本越多越稳，代表性越强越可靠，反例直接削弱结论，结论越绝对就越难被有限的证据撑住。",skill:"归纳强度的评价"},{id:"s5-01-q5",type:"short",stem:"为什么说归纳结论总是「超出前提」的？请举一个例子说明这种超出带来的风险。",keywords:[["超出","范围","跳跃"],["样本","观察","个别"],["全体","未来","规律"],["风险","可能假","反例"]],answer:"归纳从有限观察推到全体或未来，结论断定的对象多于前提所断定的对象，因此前提无法覆盖结论的所有情形。例如见过一千只白天鹅就断言天鹅皆白，一旦在澳洲发现黑天鹅，前提仍真而结论已假，风险正来自这次跳跃。",explanation:"关键在两点：一是前提与结论的适用范围不等，二是这种不等使结论永远保留被反例推翻的可能。能举出具体反例即算达标。",skill:"结论的超越性"}]},{id:"s5-02",no:48,code:"11.2–11.3",title:"类比论证及其评价",stage:5,chapter:"第11章 类比推理",minutes:16,lead:"老鼠身上有效的药，为什么在人身上常常失败？既然失败这么常见，动物实验凭什么还能作为上市前的关键一环？",objectives:["把任意一段类比论证拆成类比项、相似点与结论属性","用相关性与反相似点判断一个类比的强弱","说明多源类比为什么比单一类比更可靠"],concepts:["类比论证","类比项","相似点","结论属性","反相似点"],body:`
## 核心定义

**专业定义**：类比论证是由两个（或两类）对象在某些方面相似，推出它们在另一方面也相似的论证。标准形式为：A 与 B 在性质 a、b、c 上相似；A 具有 d；所以 B 也具有 d。

**通俗解释**：没法把每种情况都试一遍，于是找一个「差不多的」先例照着推。医生拿老鼠试药，法官拿旧判例断新案，工程师拿旧桥的数据估新桥，用的都是这一招。

**关键术语**

- **类比项**：被比较的两个对象 A 与 B。
- **相似点**：作为依据的 a、b、c。
- **结论属性**：想推出的 d。
- **反相似点**：A 与 B 在某方面明显不同，且这个不同恰好与 d 相关。

**容易混淆的概念**

> 类比论证 ≠ 比喻。比喻是修辞，为了让话好听；类比是推理，为了让结论有据。说「时间像流水」是比喻，说「这条河与那条河流速相近，含沙量应该也接近」才是类比论证。

> 类比 ≠ 举例。举例是「A 有 d，所以并非所有 A 都非 d」；类比是「A 与 B 相似，所以 B 也有 d」。方向完全不同。

## 理论讲解

### 第一步：把类比拆成四个位置

$$\\text{A、B 在 } a,b,c \\text{ 上相似；A 有 } d \\text{；故 B 有 } d$$

任何像样的类比都能塞进这个模子。塞不进去的，多半只是形容词的堆砌。

### 第二步：数相似点，更要看相关性

相似点多通常是好事，可数量能被凑。真正决定强度的是：相似点与结论属性之间有没有**因果或结构上的联系**。

| 类比 | 相似点 | 与结论的关系 | 强度 |
|---|---|---|---|
| 老鼠与人在心脏结构、血液循环上相似 | 生理机制 | 直接相关 | 强 |
| 老鼠与人都用四肢行走 | 体态 | 基本无关 | 弱 |

第一条能支持「在老鼠身上测心血管药有参考价值」，第二条支持不了任何药理结论。

### 第三步：主动搜反相似点

一个好类比要经得起「哪里不一样」的追问。火星与地球都有大气、有水、有昼夜，于是有人推「火星有生命」。反相似点立刻出现：大气稀薄、无磁场保护、表面辐射强、液态水难以长期存在。这些差异恰好打击结论，类比随之走弱。

判断反相似点的分量，只看一件事：它是否落在结论所依赖的那条机制上。落在机制上，类比重伤；落在无关处（比如两颗行星的名字都好听），可以忽略。

### 第四步：多源类比比单一类比稳

一个先例可能纯属巧合，多个独立来源都指向同一结论，支持力会叠加。药物要跨物种、跨中心验证，判例要多个法院一致，道理相同。

## 例题与分析

**例 1（易）**「这辆车和那辆车同平台、同发动机、同变速箱，那辆油耗 7 升，这辆应该也差不多。」拆出结构。

**分析**：A 是那辆车，B 是这辆车，相似点是平台、发动机、变速箱，结论属性是油耗。相似点与油耗直接相关，属于强类比。唯一的弱点是车重与调校，若两车重量差得远，强度要打折。

**例 2（中）** 两段类比哪段更强？

(a)「公司像军队，军队讲服从，所以公司也该讲绝对服从。」
(b)「两家医院规模、科室设置、患者结构都相似，A 院的分诊流程把等待时间降了三成，B 院可以试同样的流程。」

**分析**：(b) 强。(a) 的相似点「有组织、有层级」太笼统，反相似点却致命——军队的目标是执行命令，公司的目标是创造价值，绝对服从会掐死创新。(b) 的相似点具体可核，结论也克制，用了「可以试」而非「一定有效」。

**例 3（难）** 达尔文用人工选择类比自然选择：育种者挑选变异，几代就能造出新品种；自然界同样有变异和大量淘汰，所以也能造出新物种。这个类比强在哪，弱在哪？

**分析**：强在机制相似——变异、遗传、差异繁殖三件事两边都有，且与「性状改变」直接相关。弱在一个关键反相似点：人工选择有明确目标，育种者朝一个方向挑；自然界没有目标，淘汰是局部的、随环境漂移。达尔文自己清楚这点，所以他强调「自然选择」里的选择并无选择者。这个反相似点不足以推翻类比，却要求补上独立证据——化石序列、地理分布、人工育种中可观察的变化。

## 反例训练

> 公司就是一个大家庭，家里再难也不会赶人走，所以公司再难也不该裁员。

**问题所在**：相似点「有情感纽带、长期共处」确实与结论相关，可反相似点更硬——家庭不以盈利为目标，成员无法替换，也没有契约期限；公司要面对现金流与市场竞争，成员可以流动。用家庭作类比，会把「道义期待」偷偷搬进「经营决策」，结论因此得不到支持。

**说明**：类比失效有两种方式，相似点不相关，或者反相似点太关键。这里属于后者。它能支持「裁员时应当体面」，撑不住「不能裁员」。分辨这两句话的差别，就是类比评价的基本功。

## 现实应用

- **医疗**：动物实验、同类药物跨适应证使用都靠类比推进，也都要求标注物种差异带来的风险。
- **法律**：判例类推是普通法的核心工作，律师的功夫在于论证「同案」而非「不同案」。
- **产品设计**：把成熟领域的交互模式搬到新场景能省成本，前提是先检查用户与任务是否真相似。
- **日常**：「我朋友这么干成了」是类比，接着该问的是：你和他在资源、时机、能力上有多少相似点。

## 本节总结

**核心概念**：类比论证、类比项、相似点、结论属性、反相似点。

**关键规则**

1. 类比的形式是「相似推出更相似」，结论永远是或然的。
2. 先看相似点是否与结论相关，再谈数量。
3. 主动找反相似点，它往往决定类比的生死。

**常见错误**：把比喻当论证；只数相似点不看相关性；忽略体量、目标、环境上的关键差异。

**需要掌握的能力**：把一个类比拆成四段，指出相似点与反相似点，并给它的强度定级。
`,quiz:[{id:"s5-02-q1",type:"single",stem:"类比论证的标准形式是：",options:["A 有性质 d，B 也有性质 d，所以 A 与 B 相似","A 与 B 在 a、b、c 上相似，A 有 d，所以 B 有 d","大多数 A 有 d，所以 B 也有 d","A 与 B 在一切方面相同，所以结论必然成立"],answer:"B",explanation:"类比的方向是从已知相似推出新的相似。A 把方向弄反了，C 是枚举归纳，D 描述的是同一对象而非类比。",skill:"类比论证的形式"},{id:"s5-02-q2",type:"judge",stem:"两个对象之间的相似点越多，类比论证就一定越强。",answer:!1,explanation:"数量只在相似点与结论相关时才有意义。堆一堆无关的相似点（都用中文名、都在南方），对结论毫无支持。相关性优先于数量。",skill:"类比强度的评价"},{id:"s5-02-q3",type:"single",stem:"「这两款手机屏幕、电池、处理器都一样，A 款续航十小时，B 款应该也差不多。」这个类比最强的地方在于：",options:["两款手机都是同一个品牌","相似点与续航直接相关，且属于决定续航的核心部件","结论用了「应该」这种谨慎说法","A 款的销量很好"],answer:"B",explanation:"屏幕、电池、处理器正是决定续航的部件，相似点与结论属性落在同一条机制上。品牌与销量属于无关信息，措辞谨慎只是加分项。",skill:"相似点的相关性"},{id:"s5-02-q4",type:"multi",stem:"评价一个类比论证时，下列哪些属于应当考察的要点？（多选）",options:["相似点的数量","相似点与结论属性的关联程度","是否存在与结论相关的反相似点","类比来源是否多样、彼此独立"],answer:["A","B","C","D"],explanation:"四项都在评价清单上。数量提供基础支持，相关性决定这些支持是否落在点上，反相似点可能一票否决，多源独立则降低巧合的可能。",skill:"类比强度的评价"},{id:"s5-02-q5",type:"short",stem:"有人说「既然飞机能自动驾驶，汽车当然也能很快实现完全自动驾驶」。请指出这个类比最需要检查的一处反相似点，并说明它如何影响结论。",keywords:[["反相似点","不同","差异"],["环境","道路","空中","行人"],["复杂度","突发","不可预测"],["削弱","打折","不能直接推出"]],answer:"空中航路相对空旷、规则统一、障碍少；地面道路有行人、非机动车、施工与突发状况，感知与决策的复杂度高出一个量级。这一反相似点正落在「自动驾驶难度」所依赖的机制上，因此类比只能说明技术有迁移可能，推不出「很快实现」。",explanation:"要点是找到落在关键机制上的差异（环境复杂度），并说清它削弱的是结论的强度而非全部可能性。只写「情况不同」不得分。",skill:"反相似点"}]},{id:"s5-03",no:49,code:"11.4",title:"通过逻辑类推的反驳",stage:5,chapter:"第11章 类比推理",minutes:14,lead:"「既然你选择了这里，就该接受这里的一切。」这句话听起来天经地义。可如果有人把它套到餐厅、婚姻、手机上，为什么立刻变得荒唐？",objectives:["从对方的论证中抽出可复用的形式骨架","构造结构严格相同、结论明显荒谬的平行论证","区分「打掉论证」与「证明结论为假」两件事"],concepts:["逻辑类推","论证形式","平行论证","假平行","归谬"],body:`
## 核心定义

**专业定义**：逻辑类推是一种反驳技术：保留对方论证的**形式**，替换其中的内容，构造出一个形式相同而结论明显荒谬的论证，以此表明原形式不可靠。

**通俗解释**：你说「照这个理儿，那下面这事也该成立吧？」把对方的道理原封不动挪到另一件事上，让他自己看看结果有多离谱。

**关键术语**

- **论证形式**：前提与结论之间的连接骨架。
- **平行论证**：形式相同、内容不同的另一个论证。
- **假平行**：看似结构相同，实则偷改了限定条件。

**容易混淆的概念**

> 逻辑类推 ≠ 归谬法。归谬法先**接受**对方结论，推出矛盾；逻辑类推**保留形式、换掉内容**，让同一形式产出荒谬结论。

> 逻辑类推 ≠ 举例反驳。举例反驳要给反例——同一前提下结论为假；逻辑类推不碰前提真假，只碰推理形式。

## 理论讲解

### 第一步：把原论证的骨架抽出来

原话：「既然你选择住在这个小区，就得接受物业的所有规定。」

骨架：既然你自愿选择 X，就得无条件接受 X 的全部条款。

抽骨架时要盯住三类词：条件词（既然、只要）、范围词（所有、全部）、程度词（必须、无条件）。它们构成形式的承重墙，抽的时候一个都不能丢。

### 第二步：保持骨架，只换内容

「既然你自愿选择在这家餐厅吃饭，就得接受菜里有头发。」

结构一模一样，荒谬立刻显形。这一步的关键是**不许偷偷改结构**。很多人做逻辑类推时顺手加了「程度」「例外」，那就成了打稻草人。

### 第三步：并排呈现，指出形式本身的毛病

并排之后要说明问题出在形式上：「自愿选择」只承诺你接受了这个安排，并不承诺你放弃一切异议权。原论证与类推论证一起倒掉。

$$\\text{形式 } F \\text{ 用在情形 } X \\text{ 上荒谬} \\Rightarrow F \\text{ 不可靠}$$

### 第四步：说清打击范围

逻辑类推证明的是「这个论证不成立」，未必是「这个结论为假」。结论可能仍然正确，只是这条理由撑不住它。这个区分极其重要，否则你会以为反驳成功就等于对方错了。

## 例题与分析

**例 1（易）** 有人说：「电子游戏让人分心，所以应该禁止。」用逻辑类推回应。

**分析**：「小说让人分心，所以该禁小说；音乐让人分心，所以该禁音乐。」骨架是「X 导致分心，所以应禁 X」。同类事物一摆，荒谬自明，说明这个形式太粗——它没有区分分心的程度、替代方案、禁止的代价。

**例 2（中）**「人工智能能战胜围棋冠军，说明它比人更聪明。」如何拆？

**分析**：「计算器算得比人快，说明计算器比人更会算账。」原论证把「某一专项能力强」直接等同于「整体智能更高」，类推显示这个跳跃在任何工具上都站不住。注意它证明的是这条理由不足，AI 是否更聪明仍要另找论据。

**例 3（难）** 逻辑类推什么时候会失手？

**分析**：当两个情形在关键处并不平行时。有人用「允许医生在紧急情况下不经同意施救，所以也该允许任何人在任何情况下替别人做医疗决定」来反驳紧急救治条款。「紧急」是原条款的核心限定，替换时被抹掉了，形式其实不同，属于假平行。判断标准是：替换后的论证是否保持了原来的全部结构要素，尤其是限定条件。

## 反例训练

> 你不能因为有人用菜刀伤人就把菜刀禁了，所以也不能因为有人用枪伤人就禁枪。

**问题所在**：这叫假平行。菜刀的主要用途是切菜，伤人是滥用；枪的设计目的就是杀伤，两者在「日常用途占比」这个关键点上不平行。关键点不同，类推就不成立，原论证没有被打中。

**说明**：评价一个逻辑类推，先问「这两个情形在决定结论的那一点上是否相同」。相同，类推有力；不同，类推只是修辞。这也是它危险的地方，用得不好会反弹到自己身上。

## 现实应用

- **辩论**：把对方的原则推到极端情形，看他自己是否接受，是现场最高效的反驳。
- **法律**：律师区分「同案同判」与「错误类推」，靠的正是关键点是否平行。
- **伦理讨论**：电车难题的各种变体，本质是不断做逻辑类推，逼出直觉背后的原则。
- **日常**：「按你这逻辑，那我也可以……」用得好是澄清，用不好是抬杠，分界线在于是否保住结构。

## 本节总结

**核心概念**：逻辑类推、论证形式、平行论证、假平行、打击范围。

**关键规则**

1. 逻辑类推只换内容，不换结构。
2. 目标是让原形式产出荒谬结论，从而否定这个形式。
3. 它打掉的是论证，未必是结论。

**常见错误**：替换时偷改限定条件造成假平行；以为反驳成功等于结论为假；用情绪化的极端例子代替结构相同的例子。

**需要掌握的能力**：从一段话里抽出可复用的形式，并造出结构严格相同、结论不能接受的平行论证。
`,quiz:[{id:"s5-03-q1",type:"single",stem:"逻辑类推反驳的核心做法是：",options:["指出对方的前提在事实上是假的","保留对方论证的形式，替换内容，造出荒谬结论","举出一个反例，说明对方结论为假","说明对方的结论与自己观点不同"],answer:"B",explanation:"逻辑类推攻击的是形式，靠同构的荒谬论证显示该形式不可靠。A 属事实核查，C 是举例反驳，D 与论证评价无关。",skill:"逻辑类推"},{id:"s5-03-q2",type:"judge",stem:"成功构造出一个荒谬的平行论证，就证明对方的结论一定是假的。",answer:!1,explanation:"它证明的是对方的论证不成立，结论本身可能仍然为真，只是需要别的理由来支持。混淆这两件事是这一节最常见的错误。",skill:"打击范围"},{id:"s5-03-q3",type:"single",stem:"「既然你买了这本书，就该接受书里所有观点。」用逻辑类推反驳，最恰当的一项是：",options:["这本书的作者并不可靠","既然你买了这张车票，就该接受列车晚点三小时","很多人买了书也不看完","书里的观点本来就值得商榷"],answer:"B",explanation:"B 保住了「自愿购买即全盘接受」的骨架，换成车票后荒谬立现。A、D 在谈事实，C 在谈统计，都没触及形式。",skill:"构造平行论证"},{id:"s5-03-q4",type:"multi",stem:"下列哪些情况会让一个逻辑类推失效？（多选）",options:["替换内容时抹掉了原论证的关键限定条件","两个情形在决定结论的那一点上并不相同","平行论证的结论只是不太讨喜，并无荒谬之处","原论证本身的前提为真"],answer:["A","B","C"],explanation:"A 造成假平行，B 说明类比不成立，C 说明没有打到痛处。D 与类推无关——逻辑类推本就不否认前提，前提为真反而更凸显形式的毛病。",skill:"假平行"},{id:"s5-03-q5",type:"short",stem:"「凡是承诺过的事就必须做到，所以他答应了朋友陪打球，哪怕孩子发烧也得去。」请用逻辑类推反驳，并说明你打掉的是什么。",keywords:[["平行","同样形式","类推"],["承诺","更重要","冲突","例外"],["打掉","论证","形式","不成立"],["结论未必假","另找理由"]],answer:"可构造：凡是答应过的事就必须做到，所以他答应了借同事一支笔，哪怕手术正在进行也得立刻送去。两者同构，都无视承诺之间的轻重冲突。这打掉的是「承诺必须无条件履行」这一形式，而非「承诺应当被重视」这个结论，后者仍可用别的理由支持。",explanation:"评分看两点：平行论证是否保住结构（无条件履行承诺），以及是否说清打击范围只到论证、不到结论。",skill:"逻辑类推的应用"}]},{id:"s5-04",no:50,code:"12.1–12.2",title:"原因与结果",stage:5,chapter:"第12章 因果推理",minutes:16,lead:"一场车祸发生了，路面结冰、司机超速、刹车片磨损、路灯太暗。交警写报告时必须挑一个写进「事故原因」栏。他凭什么挑那一个？",objectives:["区分充分条件原因与必要条件原因，并识别日常话语中的混用","沿因果链辨别远因与近因，说明选择依据是干预目的","解释自然齐一性这一预设为何是因果推理的地基"],concepts:["充分条件原因","必要条件原因","远因与近因","因果链","自然齐一性"],body:`
## 核心定义

**专业定义**：原因是引起某一现象（结果）的现象。按条件角色分，**充分条件原因**指它的出现足以带来结果，**必要条件原因**指缺了它结果不会发生。按距离分**远因**与**近因**，多个原因首尾相接构成**因果链**。

**通俗解释**：找原因就是回答「为什么会这样」。有时你找的是「有它就够」的那一下，点火是燃烧的充分原因；有时找的是「没它就不行」的那一样，氧气是燃烧的必要条件。日常说「原因」时，这两种常常搅在一起。

**关键术语**

- **充分条件**：有之必然，无之未必不然。
- **必要条件**：无之必不然，有之未必然。
- **因果链**：A 致 B、B 致 C 的传递序列。
- **自然齐一性**：同样的原因在同样条件下产生同样的结果。

**容易混淆的概念**

> 原因 ≠ 责任。「谁的责任」是规范判断，「什么导致了它」是事实判断，二者常指向不同环节。司机超速是近因，排班制度导致疲劳驾驶可能是远因。

> 必要条件 ≠ 充分条件。氧气是燃烧的必要条件，往纸堆里灌氧气并不会自动起火。

## 理论讲解

### 第一步：分清充分与必要

| 关系 | 说法 | 例子 |
|---|---|---|
| 充分 | 有它一定出结果 | 短路是这场火灾的充分原因 |
| 必要 | 没它一定不出结果 | 氧气是燃烧的必要条件 |
| 充分必要 | 有则必有、无则必无 | 理想条件下的某些物理触发 |

日常争论常在这里打滑。有人说「他就是熬夜才病的」，把熬夜当成了充分原因；实际上熬夜只是提高了风险，属于**部分原因**。把它说成充分原因，会推出「只要不熬夜就不会病」这种明显过头的结论。

### 第二步：沿因果链分清远因与近因

一场车祸：路面结冰（远因）→ 刹车距离变长（中间环节）→ 司机未减速（近因）→ 追尾。

$$\\text{远因} \\to \\text{中间环节} \\to \\text{近因} \\to \\text{结果}$$

问「原因是什么」，答案取决于你打算干预哪一环。想减少事故，可以撒盐除冰（改远因），也可以加装自动刹车（改近因）。同一件事，两种答案都对，因为服务于两个不同的目的。

### 第三步：承认自然齐一性的预设

所有因果推理都默认「未来像过去」：既然过去加热水会沸腾，明天也会。这个预设无法被证明，只能被使用。它一旦动摇，任何从经验出发的因果判断都失去地基。

科学的工作是用受控实验把这个预设压到最小——在同样条件下反复重做，看结果是否稳定复现。重复实验之所以重要，就是在给「同因同果」做压力测试。

### 第四步：先立一条规矩

两个现象一起出现，可能因为 A 导致 B，可能因为 B 导致 A，可能因为 C 同时导致两者，也可能纯属巧合。找到时间先后只是线索，远不是证据。这一层下一节细讲。

## 例题与分析

**例 1（易）**「播种前必须浸种，否则出芽率低。」浸种是出芽的什么条件？

**分析**：必要条件。缺了它出芽率显著下降，有它也不保证一定出芽，还得看温度、水分、种子活力。

**例 2（中）** 某地肺癌高发，居民归因于附近工厂。调查发现该厂排放达标，而当地吸烟率是全国平均的两倍。怎么分析？

**分析**：至少有三条候选路径：工厂的隐性暴露、吸烟（强证据的部分原因）、以及二者的交互（吸烟叠加污染，风险可能相乘）。仅凭「住在附近」定不了因果。要做的是估计各因素的**相对贡献**，这需要对照数据，不能靠地理接近。

**例 3（难）** 一位老人跌倒骨折，医生说：骨质疏松、地面湿滑、降压药引起体位性低血压、夜间照明不足。

**分析**：这是典型的**多重原因**结构。骨质疏松是背景条件，使骨骼脆弱；湿滑与照明是环境诱因；药物是生理诱因。四者共同构成原因集，追问「唯一原因」在这里没有答案，也不该有。合理的问法是：哪一环最容易干预？答案可能是夜灯与防滑垫，成本最低、收益最直接。因果分析真正的用途是服务于干预，而非服务于归咎。

## 反例训练

> 我们小区去年装了监控，今年盗窃案少了一半，可见监控是盗窃减少的原因。

**问题所在**：三个漏洞。其一，同期可能还有别的变化——保安增加、门禁改造、周边整治，这些是**混淆因素**；其二，可能全市盗窃案整体下降；其三，一年数据太少，正常波动就足以解释一半的差异。

**说明**：要坐实这条因果，需要对照组——没装监控的相似小区同期变化如何。这正是求异法的思路，下一节展开。

## 现实应用

- **医疗**：诊断时同时考虑必要（感染、梗阻）与充分（明确致病机制）两类因素，避免只盯一个指标。
- **事故调查**：区分远因近因，既追制度也追操作。只罚最后一环，同类事故往往复发。
- **政策评估**：政策实施后指标改善，先找同期其他变化，再谈效果。
- **日常归因**：孩子成绩下滑，先列原因清单，再逐条找证据，别抓一个就下结论。

## 本节总结

**核心概念**：充分条件原因、必要条件原因、远因、近因、因果链、自然齐一性。

**关键规则**

1. 说「原因」前，先问自己指充分、必要，还是其中之一。
2. 因果链上每一环都可作为干预点，选哪个取决于目的。
3. 一切因果推理都依赖「同因同果」的预设。

**常见错误**：把必要条件当充分条件；把时间先后当因果；满足于找到单一原因而忽略多重因素。

**需要掌握的能力**：拿到一个因果主张，能画出它的链条、标出条件类型，并指出还缺哪种证据。
`,quiz:[{id:"s5-04-q1",type:"single",stem:"关于「氧气是燃烧的必要条件」，理解正确的是：",options:["只要提供氧气，物体就一定会燃烧","没有氧气燃烧不会发生，但仅有氧气并不必然燃烧","氧气是燃烧的充分原因","氧气与燃烧之间没有因果关系"],answer:"B",explanation:"必要条件的特征是「无之必不然，有之未必然」。A 与 C 把必要误当充分，D 否认了明确的条件关系。",skill:"必要条件原因"},{id:"s5-04-q2",type:"judge",stem:"一起事故的远因和近因都可以成为有效的干预点，选哪一个取决于我们希望改变什么。",answer:!0,explanation:"远因与近因之争关乎在哪里干预，与真假无关。改制度与改操作针对不同环节，各有成本与效果，都可能是合理选择。",skill:"远因与近因"},{id:"s5-04-q3",type:"single",stem:"「他从没去过健身房，所以身体一定很好。」这句话的问题在于：",options:["把「去健身房」当成了健康的充分条件","把「去健身房」当成了健康的必要条件","混淆了远因与近因","否认了自然齐一性"],answer:"B",explanation:"原句假定「没去健身房就不健康」的反面，即把去健身房视为健康的必要条件，忽略了遗传、饮食、日常活动等其他途径。",skill:"充分与必要的混淆"},{id:"s5-04-q4",type:"multi",stem:"下列关于因果链的说法，正确的有哪些？（多选）",options:["同一结果可以同时有多条因果链汇入","因果链条越长，中间环节越可能引入其他因素","找到近因就等于找到了全部原因","干预远因往往影响面更大，但见效更慢"],answer:["A","B","D"],explanation:"C 错在把近因当成全部。多因汇入很常见，链条拉长会带来更多干扰变量，远因影响面大而见效慢，这三条都成立。",skill:"因果链"},{id:"s5-04-q5",type:"short",stem:"一位患者术后感染，家属认为是医生操作失误。请列出至少三个可能的因果环节，并说明为什么不能立刻断定是操作失误。",keywords:[["器械","消毒","环境","病房"],["患者","免疫","基础病","体质"],["抗生素","用药","护理"],["多重原因","同时存在","不能断定"]],answer:"可能环节包括：术中无菌操作、器械与手术室消毒、患者自身免疫状态与基础病、术后护理与抗生素使用、病房内交叉感染。这些环节任一处出问题都能导致感染，属于多重原因并存，仅凭结果无法锁定某一环，需要培养结果、器械记录与对照数据来排查。",explanation:"关键是体现多因结构，并指出「有结果推不出唯一原因」。能给出三个以上不同环节且说明证据缺口，即可视为达标。",skill:"多重原因"}]},{id:"s5-05",no:51,code:"12.3",title:"简单枚举归纳法",stage:5,chapter:"第12章 因果推理",minutes:13,lead:"欧洲人相信「天鹅都是白的」，信了上千年，理由是他们见到的每一只天鹅都是白的。这个理由在当时算不算好理由？它后来是怎么垮的？",objectives:["写出简单枚举归纳的标准结构并指出它的消极证据","解释为什么一个反例足以击穿全称结论","识别样本偏倚与幸存者偏差在这类归纳中的破坏力"],concepts:["简单枚举归纳","反例","样本偏倚","幸存者偏差","全称命题"],body:`
## 核心定义

**专业定义**：简单枚举归纳法是通过列举若干 A 都是 B，且在此过程中未遇到反例，从而推出所有（或大多数）A 都是 B 的推理。

**通俗解释**：见一个记一个，一直没见到例外，就下结论说「都这样」。它是最朴素的归纳，也是日常用得最多的一种。

**关键术语**

- **枚举**：逐个列举支持结论的实例。
- **无反例**：到目前为止没有遇到相反的例子，属于消极证据。
- **样本偏倚**：样本的选取方式让某些情形系统性地进不来。
- **全称命题**：断定一类事物的全部成员都具有某性质的命题。

**容易混淆的概念**

> 简单枚举 ≠ 统计归纳。统计归纳要说清比例与误差（「约六成」），简单枚举直接跳到「所有」，跨度大得多。

> 没遇到反例 ≠ 已经查遍。前者是「我不知道有」，后者是「我知道没有」，两者之间隔着整片未知。

## 理论讲解

### 第一步：把结构写出来

$$A_1 \\text{ 是 } B,\\ A_2 \\text{ 是 } B,\\ \\dots,\\ A_n \\text{ 是 } B,\\ \\text{未遇反例} \\therefore \\text{所有 } A \\text{ 都是 } B$$

结构里有一句容易被忽略的话：**未遇反例**。它不提供任何正面信息，只是「还没被推翻」。整条推理的力量，全押在这句消极陈述上。

### 第二步：看样本增大的边际效应

枚举的强度随样本数上升，但上升得越来越慢。第一只天鹅带来全新的信息，第一万只带来的只是确认。真正拉开差距的是**覆盖度**：样本是否跨越了地区、季节、品种、年代。

数到一万只，如果都在同一个湖里，覆盖度依然很低；数到三百只，如果分布在南极、非洲、西伯利亚，覆盖度就高得多。

### 第三步：理解它为什么一碰就碎

全称命题的软肋在于：它要覆盖无穷多的实例，却只能靠有限次观察来支持。逻辑上，再多的正面例子也无法把它证成必然；一个反例却足以把它推翻。

$$\\text{一万个 } A \\text{ 是 } B \\not\\Rightarrow \\text{所有 } A \\text{ 都是 } B$$

这就是「黑天鹅」这个说法的由来。十七世纪的欧洲人凭数千年的观察断定天鹅皆白，直到在澳大利亚见到黑天鹅，整个结论当场作废。注意：他们的观察没有错，错在把「未遇反例」当成了「不会再有反例」。

### 第四步：警惕样本进不来

有些样本的缺失并非随机，它们被结构性地挡在门外。二战期间，军方统计返航飞机的弹孔分布，发现机翼和机尾中弹最多，主张加固这两处。统计学家沃德指出该加固的恰恰是弹孔最少的发动机与座舱——中弹在那里的飞机根本没能飞回来。

这一类错误叫**幸存者偏差**：你看到的样本，是筛选之后剩下的那一批，而筛选过程本身就是信息。

## 例题与分析

**例 1（易）**「我见过的猫都怕水，所以猫都怕水。」

**分析**：标准的简单枚举。见过的猫可能有几十只，且多是家猫、多在洗澡场景下观察。结论下得太满，反例（土耳其梵猫喜欢水）随时可能出现。

**例 2（中）** 欧洲人「天鹅皆白」的结论错在哪一步？

**分析**：不在观察，而在推广。他们的样本全部来自欧亚大陆，覆盖度存在系统性缺口；同时把「未遇反例」升级成了「不存在反例」。这是简单枚举最典型的失手方式：结论的野心超过了样本的疆域。

**例 3（难）** 一家公司调查了 500 名离职员工，其中 78% 说「主要原因是薪资」，于是认定薪资是离职主因。这个枚举有什么问题？

**分析**：样本只包含**已经离职且愿意填问卷**的人。那些因为管理、通勤、家庭原因离职却没填问卷的人被系统性排除了；在职但想走的人也不在样本里。这正是幸存者偏差的镜像——**被淘汰者偏差**。要修正，得拿到全体离职者的名单与离职面谈记录，并比较应答者与未应答者的特征。

## 反例训练

> 我问了十个朋友，他们公司都没裁员，可见经济没什么问题。

**问题所在**：十个朋友极可能同城、同行业、同年龄段，属于同温层样本。他们的「没被裁」既不能代表本行业，更不能代表全国。样本量为十，覆盖度为一条朋友圈。

**说明**：简单枚举的强弱点都在同一处——它便宜、快速、直觉友好，也正因如此容易被当成「我身边就是这样」的直觉放大器。判断它是否可用的最低标准是：样本有没有跨越至少一个可能造成差异的维度。

## 现实应用

- **质检**：抽检一批零件，抽到的都不合格就判整批不合格，这是枚举的反向使用，风险由抽样方案控制。
- **用户调研**：五个用户都说好用，只说明这五个人的场景被覆盖了，不说明产品普适。
- **医疗个案**：连续几例同样的症状提示可能有共同原因，但不能直接定病因，需要对照。
- **日常**：「我认识的人里没人炒股亏钱」这类话，通常只反映社交圈的构成。

## 本节总结

**核心概念**：简单枚举归纳、反例、样本偏倚、幸存者偏差、全称命题。

**关键规则**

1. 枚举的力量来自覆盖度，不只来自数量。
2. 「未遇反例」只是消极证据，别当成正面证明。
3. 一个反例即可推翻全称结论，这是它的结构决定的。

**常见错误**：把身边的样本当成总体；忽略样本如何被筛选出来；结论用「所有」「必然」这类词，超出证据能承担的范围。

**需要掌握的能力**：看到一句「全都是这样」，能追问样本从哪来、覆盖了哪些情形、有没有被筛掉的那部分。
`,quiz:[{id:"s5-05-q1",type:"single",stem:"简单枚举归纳的结论之所以脆弱，根本原因是：",options:["它列举的实例太少","全称结论要覆盖无穷实例，而证据总是有限的","它从不考虑反例","它只能用于日常经验，不能用于科学"],answer:"B",explanation:"样本少只是程度问题，结构问题在于有限证据去支持无限范围的全称命题，因此一个反例就能推翻。C 与 D 都不成立。",skill:"简单枚举的结构"},{id:"s5-05-q2",type:"judge",stem:"在简单枚举归纳中，观察到的正面实例越多，结论就被证明得越牢靠，最终可以变成必然结论。",answer:!1,explanation:"正面实例只能提高强度，永远无法把或然变成必然。归纳不提供这种保证，这正是它与演绎的分界。",skill:"归纳的或然性"},{id:"s5-05-q3",type:"single",stem:"二战时统计返航飞机的弹孔分布，据此决定加固部位。沃德认为应当加固弹孔最少的部位，理由是：",options:["弹孔少的部位结构更脆弱","中弹在关键部位的飞机没能返航，因此不在样本中","弹孔多的部位本来就很结实","弹孔分布与飞机结构无关"],answer:"B",explanation:"这是幸存者偏差：样本只包含返航者，被击落者被筛掉了。弹孔少不等于不易中弹，而可能是中弹即坠毁。",skill:"幸存者偏差"},{id:"s5-05-q4",type:"multi",stem:"下列哪些做法能提高简单枚举归纳的可靠性？（多选）",options:["让样本跨越不同地区、时间与类型","把结论从「所有」改为「大多数」","主动去寻找可能存在的反例","只在自己熟悉的圈子里多问几个人"],answer:["A","B","C"],explanation:"扩大覆盖、弱化结论、主动找反例都是在给结论减负或给证据加码。D 只是在同温层里增加数量，无法弥补代表性缺陷。",skill:"提高归纳可靠性"},{id:"s5-05-q5",type:"short",stem:"某连锁店统计了十家门店的顾客评价，全是好评，于是宣布「我们的服务在所有门店都令人满意」。请指出这个枚举至少两处问题。",keywords:[["样本","十家","覆盖","代表性"],["门店","地区","差异"],["差评","未填","筛掉","沉默"],["所有","结论","过头","改"]],answer:"一是覆盖不足，十家门店若集中在同一城市或同一类型商圈，无法代表全国门店；二是应答偏差，给出评价的顾客多半是满意者，不满者往往沉默或直接流失，评价样本被自我筛选。结论还用了「所有」，超出了证据能承担的范围，应改为在抽检范围内的大多数。",explanation:"评分看两点：指出样本覆盖问题，指出应答者被筛选的问题，并说明结论措辞过满。三点齐备为满分。",skill:"枚举归纳的偏差"}]},{id:"s5-06",no:52,code:"12.4",title:"求同法、求异法与并用法",stage:5,chapter:"第12章 因果推理",minutes:18,lead:"同一条街上，三家餐馆都用了同一批海鲜，三家都有人腹泻。是海鲜的问题吗？如果不是，你还得再找什么？",objectives:["用表格写出求同法与求异法的推理结构","说明这两种方法各自依赖什么假设，又在什么情况下失效","说明求同求异并用法为什么比单用一种更可靠"],concepts:["求同法","求异法","求同求异并用法","对照","混淆因素"],body:`
## 核心定义

**专业定义**：求同法（契合法）指在被研究现象出现的若干场合中，若只有一个先行情况是共同的，则该情况与该现象有因果联系。求异法（差异法）指在两个场合中，若除一个情况外其余都相同，而现象在一场出现、另一场不出现，则该情况是现象的原因或原因的必要部分。求同求异并用法先用求同法在正例组内找共同点，再用求异法在正例组与反例组之间对比。

**通俗解释**：求同法是「同中找同」——凡出事的都有这一样，那就盯住它。求异法是「异中找异」——一个有一个没有，别处都一样，那差别就出在这一点上。

**关键术语**

- **先行情况**：现象出现之前存在的各种条件。
- **正例组／反例组**：出现该现象的场合集合，与不出现的场合集合。
- **对照**：为保证「其余相同」而刻意设置的比较对象。

**容易混淆的概念**

> 求同法 ≠ 找共同点。找共同点只是描述，求同法要求「只有一个」共同点，否则无法定位。

> 求异法 ≠ 前后对比。「吃药前难受、吃药后好了」不是求异法，缺少同期对照，自愈、季节、心理预期都在变。

## 理论讲解

### 第一步：求同法，同中求同

| 场合 | 先行情况 | 现象 |
|---|---|---|
| 1 | A、B、C | e |
| 2 | A、D、E | e |
| 3 | A、F、G | e |

三场里唯一共同的先行情况是 A，于是推断 A 与 e 有因果联系。

它的命门写在自己的名字里：**只有一个共同点**。现实中很难保证这点。三个人都腹泻，共同点是「吃了同一家店的沙拉」，共同点也可能是「都是同事」「都点了冰饮」「都在同一时段用餐」。共同点越多，定位越虚。

### 第二步：求异法，异中求异

| 场合 | 先行情况 | 现象 |
|---|---|---|
| 1 | A、B、C | e |
| 2 | 无 A、B、C | 无 e |

两场只差一个 A，结果就有无之别，于是推断 A 是 e 的原因，或至少是必要环节。

它依赖一个很强的假设：**其余一切相同**。这个假设在自然观察中几乎不可能满足，所以求异法最可靠的形态是**对照实验**——随机分组、控制变量、双盲，都是在人工制造「其余相同」。

### 第三步：并用法，两轮夹击

第一步，在正例组内用求同法找出共同点 A；第二步，在反例组内确认没有 A；第三步，比较两组，A 的有无与 e 的有无对应。

| 组别 | 场合 | A 是否存在 | 现象 e |
|---|---|---|---|
| 正例组 | 1、2、3 | 有 | 有 |
| 反例组 | 4、5、6 | 无 | 无 |

比单用求同法多了一道排除：不仅「出事的都有 A」，而且「没出事的都没有 A」。这一正一反，把「A 只是伴随现象」的可能性压下去不少。

### 第四步：知道它们共同的边界

三种方法都只处理**现象层面的共现关系**，不揭示机制。它们能告诉你「A 与 e 稳定地一起出现」，说不出「A 通过什么途径产生 e」。缺了机制，遇到第三个变量同时影响两者时，方法本身无法自救。这一点下一节展开。

## 例题与分析

**例 1（易）** 三名顾客在不同时间到同一家店吃了同一批生蚝，随后都出现腹泻。用求同法分析。

**分析**：正例组三人，共同点是「吃了该批生蚝」。共同点还可能包括「都吃了生食」「都在同一天到店」。若要坐实，得看没吃生蚝的顾客是否也腹泻——这就需要进入求异法。

**例 2（中）** 农技站想验证一种叶面肥的效果。A 田施肥，B 田不施，两田品种、播期、灌溉、土壤相同，A 田增产 12%。

**分析**：这是求异法的标准用法，关键是「其余相同」被认真对待了。仍有两个漏洞：两田是否真的同质（地力差异）、增产是否在误差范围内（需要重复与统计检验）。单块田的对照只能算初步证据。

**例 3（难）** 1854 年伦敦霍乱，斯诺医生注意到疫情集中在某些街区。他比较了不同供水公司的用户：使用 A 公司（取水口受污染）的住户发病率极高，使用 B 公司的住户发病率低得多，而两群人在收入、职业、居住条件上高度相似。他还推动了拆除宽街水泵的手柄。

**分析**：这是求同求异并用法的经典范例。组内求同——高发病街区共享同一水源；组间求异——供水公司不同而其他条件相似，发病率随之分化。斯诺并未掌握霍乱弧菌，他确立的是**恒定联系**，机制要等几十年后微生物学补上。这也说明：方法能定因果方向，机制可以由后人补。

## 反例训练

> 办公室三个人同时感冒，他们都在同一栋楼上班，可见是楼里的空调系统传播了病毒。

**问题所在**：求同法用得太松。三人的共同点远不止「同一栋楼」——可能同部门、同食堂、同一次聚餐、同一趟出差。共同点未被收敛到唯一，结论就只是挑了一个最有画面感的。

**说明**：更严重的是，求同法在这里只能提示方向。要验证空调假设，需要看楼内其他区域（不用该空调）的发病率，以及空调滤网的检测结果——也就是补上求异与机制证据。

## 现实应用

- **医疗**：食物中毒溯源先求同（吃过什么），再用病例对照研究求异（吃与没吃的人发病率差异）。
- **产品质量**：同一批次出问题，先锁定批次共性，再与正常批次对比工艺参数。
- **教育**：两个班用了不同教法，成绩有差，须先确认生源、师资、课时相同，否则差异无意义。
- **日常**：家里只有开加湿器的房间墙面发霉，关掉后不再发霉，这已经是相当干净的求异结构。

## 本节总结

**核心概念**：求同法、求异法、求同求异并用法、先行情况、对照。

**关键规则**

1. 求同法要求共同点唯一，共同点越多，结论越虚。
2. 求异法要求其余相同，天然观察几乎做不到，所以要靠对照实验。
3. 并用法一正一反，排除力强于单用一种。

**常见错误**：把「共同点之一」当成「唯一共同点」；用前后对比冒充对照；只做一次比较就下结论。

**需要掌握的能力**：把一个真实场景整理成场合表，判断该用哪一种方法，并指出还缺哪一组对照。
`,quiz:[{id:"s5-06-q1",type:"single",stem:"求同法要能成立，最关键的条件是：",options:["被研究现象出现的场合足够多","各场合中只有一个先行情况是共同的","两个场合除一点外完全相同","现象的程度随条件程度而变化"],answer:"B",explanation:"只有共同点唯一，才能把它锁定为候选原因。A 只影响强度，C 是求异法的条件，D 是共变法。",skill:"求同法"},{id:"s5-06-q2",type:"judge",stem:"在自然环境中进行求异法推理，通常很难满足「其余情况都相同」这一要求，因此对照实验才显得重要。",answer:!0,explanation:"自然环境里无数因素同时在变，无法保证只差一个变量。随机分组与变量控制是人为制造「其余相同」的手段，这也是实验方法的价值所在。",skill:"求异法与对照"},{id:"s5-06-q3",type:"single",stem:"斯诺的霍乱调查中，比较不同供水公司用户发病率这一步，主要体现了：",options:["求同法","求异法","剩余法","简单枚举"],answer:"B",explanation:"两群人在收入、职业、居住条件上相似，差别在供水来源，发病率随之分化，正是求异结构。整项研究则是并用法。",skill:"求异法的应用"},{id:"s5-06-q4",type:"multi",stem:"关于求同求异并用法，下列说法正确的有：（多选）",options:["它先在正例组内找共同点，再与反例组对比","它比单用求同法多排除了「共同点只是伴随现象」的可能","它同样无法直接揭示因果机制","它不需要任何对照即可成立"],answer:["A","B","C"],explanation:"D 错得明显：并用法的后半段本身就是对照。A、B 描述其结构优势，C 指出所有密尔方法共有的局限。",skill:"求同求异并用法"},{id:"s5-06-q5",type:"short",stem:"某学校发现四个班成绩下滑，四个班都换了新教材。校长据此认定新教材是原因。请指出这个求同法推理的两处薄弱环节，并说明如何补强。",keywords:[["共同点","唯一","其他","教师","生源"],["反例","没换教材","对照"],["同时","其他变化","考试难度"],["补强","对照班","比较"]],answer:"一是共同点不唯一，四个班可能同时换了老师、改了课时、遇到更难的试卷；二是缺少反例组，未换教材的班级成绩如何并不清楚。补强办法是设置对照：比较未换教材的平行班，并核对教师、生源、试卷难度是否可比。",explanation:"两个薄弱点分别对应求同法的「唯一性」要求与并用法所需的「反例组」。能提出对照班方案即视为掌握。",skill:"求同法的局限"}]},{id:"s5-07",no:53,code:"12.4–12.5",title:"共变法、剩余法与归纳技术的局限",stage:5,chapter:"第12章 因果推理",minutes:17,lead:"冰淇淋卖得越多，溺水的人越多。数据严丝合缝地同向变动，可谁也不会说冰淇淋会淹死人。那么「一起变」到底证明了什么？",objectives:["用共变法描述两个变量的同向或反向变动关系","用剩余法把无法解释的部分归给未知因素","说明密尔五法为何只能确立恒定联系，不能给出机制"],concepts:["共变法","剩余法","混淆变量","恒定联系","相关与因果"],body:`
## 核心定义

**专业定义**：共变法指当某一先行情况在程度上发生变化时，被研究现象也随之发生程度上的变化，则该情况与该现象有因果联系。剩余法指从已知现象中扣除已由已知原因解释的部分，剩余部分归因于尚未发现的先行情况。

**通俗解释**：共变法是「一起动」——剂量加一点，反应强一点，两者像被同一根轴连着。剩余法是「排除法」——账单上的大头都算清了，还剩一笔对不上，那一定有个没找到的支出。

**关键术语**

- **共变关系**：两个量同时增减，分同向与反向。
- **混淆变量**：同时影响自变量与因变量的第三因素。
- **恒定联系**：两类现象稳定地一起出现，但不涉及作用途径。

**容易混淆的概念**

> 共变 ≠ 因果。共变只是相关性的一种形态，第三变量可以让两个毫无关系的东西同步起伏。

> 剩余法的「剩余」≠ 误差。它指的是在已知原因都已充分利用后仍无法解释的那部分，不能把测量误差一股脑塞进去。

## 理论讲解

### 第一步：共变法的表格形态

| 场合 | 先行情况 A | 其余情况 | 现象 e |
|---|---|---|---|
| 1 | A 很弱 | 相同 | e 很弱 |
| 2 | A 中等 | 相同 | e 中等 |
| 3 | A 很强 | 相同 | e 很强 |

A 的强度与 e 的强度同步升降，推断二者有因果联系。医学上的剂量-反应关系、经济学中的收入-消费关系，都是这个形状。

### 第二步：先怀疑第三变量

冰淇淋销量与溺水人数在整个夏天同步上升，共变关系成立得漂亮。原因却是气温：天热让人买冰淇淋，也让人下水游泳。气温是**混淆变量**，它同时在推两个指针。

排除办法有三种：控制（只比较气温相同的日子）、分层（按气温分组后再看）、随机化（随机决定谁吃冰淇淋，现实不可行）。前两种是观察研究的常用手段，第三种才是实验。

### 第三步：剩余法的结构

设有现象 e1、e2、e3、e4。已知 A 解释 e1，B 解释 e2，C 解释 e3，而 e4 无法由 A、B、C 说明。于是推断存在未知因素 D 导致 e4。

$$e_4 = e_{总} - (e_1 + e_2 + e_3) \\Rightarrow \\text{存在未知因素 } D$$

历史上最著名的应用是天文学：天王星的实测轨道与牛顿理论的计算值有微小偏差，已知行星的摄动都算过仍对不上，于是推断还有一颗未知行星。1846 年，海王星在预测位置附近被找到。

### 第四步：承认这套技术的天花板

密尔五法处理的都是**现象之间的恒定联系**。它们能回答「哪个条件与结果稳定地共同出现」，回答不了「通过什么途径」。休谟早就指出，我们能观察到的只有先后与共现，观察不到「必然联系」本身。

这不是说方法无用。流行病学靠它们找出了霍乱的水源、肺癌与吸烟的关联，这些都是实打实的成果。但每一项成果后面，都跟着一句「机制待查明」。相关给出线索，机制给出解释。混为一谈，就会把「一起变」读成「因为所以」。

## 例题与分析

**例 1（易）** 某厂发现车间温度越高，产品次品率越高。用共变法分析。

**分析**：温度与次品率同向共变，符合共变法结构。但要注意：高温时段往往也是用电高峰、人员疲劳、原料批次切换的时段。先把这些因素固定，共变才干净。

**例 2（中）** 一款 App 改版后，用户停留时长上升，同时客服投诉也上升。产品经理认为是新版内容更吸引人。

**分析**：这更像剩余法的问题——停留时长的上升或许能用「内容更吸引人」解释一部分，但投诉上升解释不了。剩余部分提示另一个因素：可能是改版后操作路径变复杂，用户找不到功能，既停留更久又更烦躁。要把「变复杂」作为候选提出来并单独检验。

**例 3（难）** 某地推行补贴后，登记失业率下降。如何判断补贴是否真的起作用？

**分析**：共变成立，但至少三类干扰：其一，经济周期同期回暖；其二，登记口径变化，部分人因手续简化而登记；其三，补贴吸引原本不登记的人进入统计，分母变化。要拆开，需要与未推行补贴的相似地区比较（求异），并核对口径与劳动参与率。这就是为什么政策评估总要找对照组，单看一条曲线永远说不清。

## 反例训练

> 每次考试前我都喝同一款咖啡，成绩都不错，可见这款咖啡提升了我的成绩。

**问题所在**：典型的共变误读。考试前你还会复习、早睡、减少娱乐，这些才是更可能的有效因素；咖啡只是这些行为的固定搭档，因此总是同时出现。咖啡因的提神效果在特定任务上或许有微弱作用，但撑不起「成绩提升」这个结论。

**说明**：共变法要成立，得让其他一切都保持不变，只让目标变量动。现实里做不到，就要用随机分组来近似——让一半人喝含咖啡因的咖啡、一半人喝低因咖啡，双盲，再看成绩差异。

## 现实应用

- **医疗**：剂量-反应曲线是新药爬坡试验的核心依据，但必须排除病程自然波动。
- **经济**：两个指标同向变动，先查是否有共同的驱动因素（货币供应、季节、统计口径）。
- **工程**：设备振动幅度随转速上升，可据此定位共振区间，这是共变法的正面用法。
- **日常**：孩子看电视时间越长成绩越差，也可能是家庭辅导时间被挤占，别急着归因于电视本身。

## 本节总结

**核心概念**：共变法、剩余法、混淆变量、恒定联系、相关与因果。

**关键规则**

1. 共变只说明同向或反向，不说明谁导致谁。
2. 看到共变，第一个动作是找第三变量。
3. 剩余法要求已知原因被充分计算，剩余才可信。

**常见错误**：把共变当因果；把剩余归给测量误差；用「机制以后会有人研究」敷衍掉当前的证据缺口。

**需要掌握的能力**：面对一条「越……越……」的论断，能列出至少两个可能的第三变量，并说明怎样设计对照把它们排除。
`,quiz:[{id:"s5-07-q1",type:"single",stem:"冰淇淋销量与溺水人数同步上升，最合理的解释是：",options:["冰淇淋导致溺水","溺水事件促使人们买冰淇淋","气温升高同时导致两者上升","两个数据都是伪造的"],answer:"C",explanation:"气温是典型的混淆变量，同时推动两个指针。A 与 B 都强行设定因果方向，D 在无证据的情况下否定数据。",skill:"混淆变量"},{id:"s5-07-q2",type:"judge",stem:"剩余法中的「剩余」，指的是把测量误差与随机波动扣除之后剩下的部分。",answer:!1,explanation:"剩余指已知原因解释不了的现象部分，它提示存在未知因素。把误差塞进剩余，会让真正的因素被掩盖，这是对剩余法的误用。",skill:"剩余法"},{id:"s5-07-q3",type:"single",stem:"天王星轨道偏差最终导致海王星被发现，这一过程主要用了：",options:["求同法","求异法","共变法","剩余法"],answer:"D",explanation:"已知行星的摄动都计算过，仍有一小段偏差无法解释，剩余部分被归给一颗未知行星，随后在预测位置被观测证实。",skill:"剩余法"},{id:"s5-07-q4",type:"multi",stem:"密尔五法共同的局限包括：（多选）",options:["只能确立现象间的恒定联系，不揭示机制","无法自动排除未纳入考虑的混淆变量","结论通常是或然的，需要理论与实验补充","完全没有任何科学价值"],answer:["A","B","C"],explanation:"D 是夸大其词。五法在流行病学、工程诊断中有大量成功应用，它们的局限在于层次而非价值。",skill:"归纳技术的局限"},{id:"s5-07-q5",type:"short",stem:"某城市发现「地铁客流越大，便利店销售额越高」，管理者打算在冷清线路加开列车以拉动消费。请指出这一推断的风险，并给出一个更稳妥的判断方式。",keywords:[["第三变量","商圈","人口","就业"],["因果方向","客流","消费"],["不必然","共变"],["对照","自然实验","分区比较"]],answer:"共变可能由第三变量造成，例如沿线商圈成熟度、办公人口密度、换乘枢纽地位，这些既带来客流也带来消费。加开列车未必能把客流转化为购买力。更稳妥的做法是找自然实验：比较新开线路前后、或与客流相近但未加开班次的线路对照，观察销售额是否随之变化。",explanation:"两个要点：识别第三变量与因果方向的不确定，以及提出对照或自然实验的设计。只说「相关不等于因果」不够具体。",skill:"相关与因果"}]},{id:"s5-08",no:54,code:"13.1–13.2",title:"科学说明与假说",stage:5,chapter:"第13章 科学与假说",minutes:18,lead:"为什么冰会浮在水上？你回答「因为冰的密度比水小」，这算是说明，还是把问题换了个说法？科学要求的「说明」到底要满足什么条件？",objectives:["区分被说明项与说明者，并把一个日常解释整理成演绎-律则结构","用假说-演绎法描述一次检验的完整流程","说明确证为何不等于证明，以及辅助假说在其中的作用"],concepts:["被说明项","说明者","演绎-律则模型","假说-演绎法","确证","辅助假说"],body:`
## 核心定义

**专业定义**：科学说明由**被说明项**（explanandum，待解释的现象）与**说明者**（explanans，用来说明的东西）构成。演绎-律则模型要求说明者中包含至少一条普遍规律与若干初始条件，从二者可以演绎出被说明项。

**通俗解释**：说明就是回答「为什么会这样」。科学的回答方式有个固定套路：把这件事套进一条规律里，再补上它当时的具体条件。

**关键术语**

- **被说明项**：那个等着被解释的现象。
- **说明者**：规律加初始条件。
- **覆盖律模型**：把现象「覆盖」在规律之下的说明方式。
- **假说-演绎法**：从假说推出可观察的推论，再用观察来检验。
- **辅助假说**：为保住主假说而补充的额外假设。

**容易混淆的概念**

> 说明 ≠ 描述。描述回答「是什么样」，说明回答「为什么」。列出症状是描述，指出病因才是说明。

> 确证 ≠ 证明。一次成功的预言只提高假说的可信度，不能把它变成定论。

## 理论讲解

### 第一步：把说明拆成两半

「这根管子冻裂了，因为里面的水结了冰，而水结冰时体积会膨胀。」

被说明项：管子冻裂。说明者：水在低温下结冰（初始条件）＋水结冰体积膨胀（普遍规律）。

拆不开这两半，说明就容易含糊。很多人只给条件不给规律（「因为昨天气温零下十度」），或者只给规律不给条件（「热胀冷缩嘛」），两样都缺一不可。

### 第二步：套进演绎结构

$$\\text{普遍规律} + \\text{初始条件} \\Rightarrow \\text{被说明项}$$

形式上，这是一个演绎论证：前提真则结论必然真。所以说明的强弱可以直接借用演绎的标准来检查——规律是否为真、条件是否成立、推导是否有效。

### 第三步：注意说明与预测的对称性及其麻烦

同一组规律与条件，如果先知道条件、推出结果，叫**预测**；先知道结果、回溯条件，叫**说明**。逻辑结构完全一样，这是亨佩尔所说的对称性。

麻烦出在反例上。阳光下的旗杆：已知杆高与太阳角度，可以算出影长，这既是预测也是说明——杆高解释了影长。反过来，已知影长与太阳角度，也能算出杆高，形式上同样合法，可谁会觉得「影子长所以杆子高」是一个说明？影长并不导致杆高。

$$\\text{影长} + \\text{角度} \\Rightarrow \\text{杆高（形式合法，却不像说明）}$$

这类反例提示：光有演绎结构不够，还得有因果方向。对称性因此只是部分成立。

### 第四步：用假说-演绎法检验

流程四步：

1. 提出假说 H。
2. 从 H 加上已知条件，推出可观察的蕴含 O。
3. 设计实验或观察，看 O 是否出现。
4. O 出现，H 获得确证；O 不出现，H 受挫。

第三步的结果要小心解读。O 出现时，我们做的是「若 H 则 O；O；故 H」——这是肯定后件，逻辑上无效。所以确证只能提高可信度，不能证明。这也是为什么科学要求**可检验的预言越冒险越好**：一个必然出现的 O，无论 H 真假都会出现，它对 H 毫无支持。

O 不出现时，也未必立刻判 H 死刑。你可以修改**辅助假说**：仪器失灵、样本污染、附加条件未满足。这在科学史上屡见不鲜，代价是假说变得越来越难被否证。

## 例题与分析

**例 1（易）**「为什么这只气球在冰箱里变小了？」给出说明并拆出两半。

**分析**：被说明项是体积变小。说明者是「气体在恒压下体积随温度下降而减小」（规律）＋「冰箱温度低、气球未漏气」（条件）。这个说明同时也是一个预测：把气球放进冰箱，体积会缩小。

**例 2（中）** 某新药临床试验：假说「药物能降低血压」。研究者预测用药组四周后平均收缩压比对照组低 5 毫米汞柱以上。结果符合预测。

**分析**：这是标准的假说-演绎检验。要注意「5 毫米汞柱」这个具体数值——它让预测变得冒险，若真出现这种差异，随机波动很难解释。若结果只是「略低一点」，确证力就弱得多。还有一层：预测符合也可能因为安慰剂效应或分组偏差，所以需要随机、双盲、对照。

**例 3（难）** 十九世纪，天王星的实际轨道与牛顿理论的计算有微小偏差。有人主张牛顿理论被否证了，也有人主张还存在一颗未发现的行星。后来海王星被发现，偏差得到解释。这件事说明了什么？

**分析**：它展示了辅助假说的双重作用。把「存在未知行星」作为辅助假说加进来，主假说（牛顿理论）得以保全，并且这个辅助假说给出了一个**冒险的新预言**——行星应该在某个具体位置。预言被证实，辅助假说与主假说同时获得强确证。反过来说，若始终找不到那颗行星，辅助假说就成了专门消化反例的补丁，理论的信誉会持续流失。判断一个辅助假说是合理还是敷衍，标准是它能否带来新的、独立的可检验预言。

## 反例训练

> 我吃了这个保健品，三天后感冒好了，可见它确实有效。

**问题所在**：把「先后发生」当成「被说明项得到说明」。普通感冒多在数天内自愈，这叫自然病程；同时还有安慰剂效应与回归均值（症状本来就在最难受的那天开始缓解）。这三者都能解释「三天后好了」，原论证没有排除任何一个。

**说明**：要让这个说明站得住，需要对照：同样症状的人随机分成两组，一组吃保健品一组吃安慰剂，双盲观察。没有对照，单一案例几乎不构成确证。

## 现实应用

- **医疗诊断**：把症状当被说明项，把病理机制当规律，把检查结果当初始条件，三者齐备才叫诊断成立。
- **司法鉴定**：解释现场痕迹需要规律（DNA 匹配概率）加条件（样本来源、保管链）。
- **产品实验**：A/B 测试就是假说-演绎法的工程化，事先定好指标与阈值，避免事后挑数据。
- **日常**：听到一个解释，先问它用了哪条规律、依据了哪些条件，两样缺一就还只是猜测。

## 本节总结

**核心概念**：被说明项、说明者、演绎-律则模型、假说-演绎法、确证、辅助假说。

**关键规则**

1. 一个完整说明 = 普遍规律 + 初始条件。
2. 说明与预测共享同一逻辑结构，但因果方向不可省。
3. 确证只提高可信度，否定后件才是否证的正规形式。

**常见错误**：用重述现象冒充说明；把确证当证明；用无限追加的辅助假说保住一个已被削弱的理论。

**需要掌握的能力**：把任意一个「因为」句拆成规律与条件，并判断它是否构成真正的说明。
`,quiz:[{id:"s5-08-q1",type:"single",stem:"在演绎-律则模型中，说明者必须包含：",options:["至少一条普遍规律与若干初始条件","仅若干初始条件","仅一条统计规律","被说明项本身"],answer:"A",explanation:"规律提供「为什么这类事会这样」，条件提供「这次为什么符合」。只给条件推不出结论，只给规律也无法确定具体情形。",skill:"演绎-律则模型"},{id:"s5-08-q2",type:"judge",stem:"一个假说作出的预言被实验证实，该假说就被证明了。",answer:!1,explanation:"这属于肯定后件：若 H 则 O，O 成立，推不出 H 必然成立。证实只提高可信度，还可能有别的假说也蕴含同一预言。",skill:"确证与证明"},{id:"s5-08-q3",type:"single",stem:"「影子长所以旗杆高」在形式上可由影长与太阳角度推出杆高，却不像一个说明。这说明：",options:["演绎-律则模型完全错误","仅有演绎结构不足，还需要因果方向的约束","影长与杆高没有数学关系","所有说明都必须能预测"],answer:"B",explanation:"影子不导致杆高，因果方向反了。该反例针对的是说明与预测的对称性，提示覆盖律模型需要补充因果条件，而非整体推翻。",skill:"说明与预测的对称性"},{id:"s5-08-q4",type:"multi",stem:"关于辅助假说，下列说法正确的有：（多选）",options:["它可以暂时保住主假说，使其免于被否证","好的辅助假说会带来新的、独立的可检验预言","只用来消化反例、不提新预言的辅助假说容易沦为敷衍","辅助假说一旦提出就永远不能被检验"],answer:["A","B","C"],explanation:"D 与科学实践相反。辅助假说本身也要接受检验，海王星的预言被证实，正是辅助假说可检验的范例。",skill:"辅助假说"},{id:"s5-08-q5",type:"short",stem:"请把一个日常解释「昨晚没睡好，所以今天考试发挥失常」整理成假说-演绎结构，并指出它需要什么证据才更有说服力。",keywords:[["假说","睡眠不足","影响","认知"],["预言","可观察","反应时","错误率"],["对照","睡眠正常","比较"],["其他因素","焦虑","题目","排除"]],answer:"假说：睡眠不足会降低注意力与工作记忆，从而影响解题表现。由此推出可观察蕴含：睡眠不足者的反应时更长、粗心错误更多，且这种差异在需要持续注意的题目上更明显。要增强说服力，需比较睡眠时长不同的两组，控制复习时间与焦虑水平，并看错误类型是否符合注意力缺损的模式，而非笼统的「考砸了」。",explanation:"关键是推出具体的、可证伪的蕴含，而不是停留在「状态不好」这种事后描述。能提出对照组与控制变量即可。",skill:"假说-演绎法"}]},{id:"s5-09",no:55,code:"13.3–13.4",title:"竞争性说明的评价",stage:5,chapter:"第13章 科学与假说",minutes:17,lead:"两套理论都能解释眼前所有的数据，谁也不比谁少解释一件事。这时候科学家凭什么选其中一个？「更简单」算不算一个正当理由？",objectives:["列举评价竞争性说明的五条标准并说明各自的份量","区分「简单」与「听起来顺耳」，说明奥卡姆剃刀的正确用法","解释为什么把一个现象归入某个类别本身就是可检验的假说"],concepts:["解释力","预言力","简单性","可检验性","分类假说"],body:`
## 核心定义

**专业定义**：当多个说明都能容纳同一批现象时，需要借助一组元标准来比较：解释力（覆盖面与精确度）、预言力（能否推出新的、可检验的预言）、简单性（独立假设与特设补丁的数量）、与既有知识的一致程度、可检验性（能否被观察否证）。

**通俗解释**：两个人都能对上账，那就看谁能提前算出下个月的账、谁的算法步骤更少、谁的假设不跟已经确证的东西打架。

**关键术语**

- **解释力**：能说明的现象范围有多大，细节对得上多少。
- **预言力**：能否推出当时还不知道的新事实。
- **简单性**：假设更少、补丁更少、自由参数更少。
- **特设补丁**：只为消化某个反例而添加、不产生新预言的假设。

**容易混淆的概念**

> 简单 ≠ 通俗。简单性说的是理论结构，与讲解是否易懂无关。广义相对论的数学比地心说复杂得多，但它的独立假设更少。

> 竞争 ≠ 互斥。有些说明可以同时成立（近因与远因并存），先要确认它们真的在解释同一件事，再谈取舍。

## 理论讲解

### 第一步：确认它们真的在竞争

两个说明若解释的是不同现象，就不构成竞争。医生说是病毒感染，工程师说是空调滤网积尘，这两句可以同时为真。只有当它们对**同一批现象**给出不相容的断言时，比较才有意义。

### 第二步：五条标准逐条过

| 标准 | 问什么 | 份量 |
|---|---|---|
| 解释力 | 能覆盖多少现象，细节对得上吗 | 高 |
| 预言力 | 有没有推出当时未知的新事实 | 很高 |
| 简单性 | 假设与补丁多不多 | 中，作平局时的裁决 |
| 与既有知识一致 | 是否与已确证的理论冲突 | 中，冲突不必然是错，但要付举证成本 |
| 可检验性 | 原则上能否被观察否证 | 门槛条件 |

预言力之所以份量最高，是因为它最难伪造。事后能解释一切的理论往往事前什么也说不出来。

### 第三步：正确使用简单性

奥卡姆剃刀的原意是「如无必要，勿增实体」。判断标准是**独立假设的数目**与**特设补丁的数目**，不是文字是否简短。

一个理论若每遇到一个反例就加一条「在某种特殊条件下例外」，补丁越堆越多，它的简单性就在流失，可检验性也在流失。反过来，一个理论若用一个统一机制消化了大量看似无关的现象，那是真正的简单。

### 第四步：分类也是假说

把某种疾病归入「自身免疫病」，不只是贴标签。它断言该病由免疫系统攻击自身组织引起，由此推出：免疫抑制治疗应当有效、患者体内应当能找到自身抗体。这些推论都可检验。

分类错了，治疗方案就会跟着错。所以分类从来不是中性的描述，它是带着预言的假说。

## 例题与分析

**例 1（易）** 地心说与日心说都能大致解释行星的位置。伽利略观测到金星有类似月相的盈亏变化，为什么这被认为是支持日心说的证据？

**分析**：日心说自然推出金星绕太阳运行、其被照亮的一面朝向地球的角度会周期变化，因此应当出现相位。地心说要把这点容纳进来，需要给金星安排相当特殊的本轮。同一个观测，一个理论能自然导出，另一个要靠特设安排，这就是预言力与简单性的双重差别。

**例 2（中）** 燃素说认为燃烧是物质释放燃素的过程。金属煅烧后变重，燃素说只好假设燃素具有负重量。如何评价这一步？

**分析**：这是典型的特设补丁。它唯一的作用是消化「变重」这个反例，本身不产生任何新的、独立的可检验预言。氧化说则统一解释了重量增加、气体消耗与还原反应，并预言了后续可测的气体体积关系。补丁与统一机制的区别，就在这里。

**例 3（难）** 两个假说都能解释现有全部数据，如何设计实验来区分？

**分析**：要找的是两者预言不同的地方——现有数据之外，尚未观察的情形。若找不到任何情形能让两者给出不同预测，那么它们在经验上等价，此时选择哪个只影响表述方式，不影响预测。要注意迪昂-奎因式的困难：任何检验都同时依赖辅助假说，实验结果与预测不符时，你无法仅凭逻辑判定是主假说错了还是辅助假说错了。这解释了「判决性实验」在历史上为何比教科书描述的更稀有。

## 反例训练

> 这些古代建筑的石块搬运技术失传了，是因为外星人来帮忙，后来他们离开了。

**问题所在**：三条硬伤。其一，不可检验——「他们离开了」使任何反证都无法落地；其二，零预言力，事前说不出任何可验证的细节；其三，每遇到一个难题就加一个补丁（他们用了反重力、他们只在夜间工作），简单性彻底崩掉。

**说明**：对比一下考古学的解释：斜坡、滚木、人力组织、季节性用工。这些解释会预言在采石场附近应当能找到运输通道遗迹、工具磨损模式、工人聚落的遗存。可检验、可证伪、可被新证据修正，这才是说明应有的样子。

## 现实应用

- **医疗**：两种诊断都能解释症状时，选那个能预测额外检查结果、且不需要假设罕见病的。
- **司法**：控辩双方的叙事都能容纳证据，陪审团实际在比较解释力与简单性。
- **技术排障**：系统偶发崩溃，先试假设少、可复现验证的方案，别一上来就假设硬件随机故障。
- **日常**：朋友突然冷淡，别急着选「他讨厌我」这个解释，先找那个能预测更多细节（他最近在忙什么）的版本。

## 本节总结

**核心概念**：解释力、预言力、简单性、可检验性、分类假说。

**关键规则**

1. 先确认多个说明在解释同一批现象，再谈竞争。
2. 预言力是最硬的指标，事后圆说最软。
3. 简单性看假设与补丁的数量，与文字长短无关。

**常见错误**：用不可检验的补丁保住理论；把分类当纯描述，忘了它自带预言；以为判决性实验随手可得。

**需要掌握的能力**：为两个竞争说明列一张评分表，并指出哪一条标准在这里起决定作用。
`,quiz:[{id:"s5-09-q1",type:"single",stem:"在评价竞争性说明时，通常被认为份量最重的标准是：",options:["说明的表述是否通俗易懂","能否推出当时未知的新事实并被证实","提出者的学术声望","说明是否符合大多数人的直觉"],answer:"B",explanation:"预言力最难伪造，事后能圆说一切的理论往往事前什么也说不出来。通俗性、声望、直觉都不构成证据。",skill:"预言力"},{id:"s5-09-q2",type:"judge",stem:"奥卡姆剃刀所说的「简单」，指的是理论表述越简短越好。",answer:!1,explanation:"简单性指独立假设与特设补丁更少，自由参数更少。一个数学复杂但假设统一的理论，可能比一个表述简短却到处打补丁的理论更简单。",skill:"简单性"},{id:"s5-09-q3",type:"single",stem:"把某疾病归入「自身免疫病」之所以是一个假说而非单纯命名，是因为：",options:["它由权威机构发布","它断言了病因机制，并推出可检验的治疗与检测后果","它使用了专业术语","它与其他疾病并列"],answer:"B",explanation:"分类携带机制断言与预言：若成立，免疫抑制应有效、应能检出自身抗体。这些都可被检验，也可能被推翻。",skill:"分类假说"},{id:"s5-09-q4",type:"multi",stem:"下列哪些迹象表明一个说明正在靠特设补丁维持？（多选）",options:["每遇到一个反例就新增一条例外条款","新增假设不产生任何新的可检验预言","理论的核心机制不断被修改以避开否证","理论能统一解释此前互不相关的多类现象"],answer:["A","B","C"],explanation:"D 恰好相反，是理论具有解释力的表现。A、B、C 描述的都是补丁化过程，其后果是可检验性持续下降。",skill:"特设补丁"},{id:"s5-09-q5",type:"short",stem:"两种解释都能说明「某小区儿童哮喘高发」：一是附近工厂排放，二是家长吸烟率高。请说明你会收集哪些证据来比较这两种说明。",keywords:[["对照","周边","比较","梯度"],["剂量","距离","暴露"],["吸烟","家庭","问卷"],["交互","同时","分别"]],answer:"可比较三条线索：一看空间梯度，哮喘率是否随距工厂距离递减，周边对照小区如何；二看暴露剂量，排放监测数据与儿童个体暴露估算是否对应；三看家庭吸烟调查，控制吸烟后工厂效应是否仍在。若两者都有效应，还要检验交互作用。谁的预言更具体、更能被数据推翻，谁就更可信。",explanation:"核心是把两个说明转成不同的可观察预言，再用对照与剂量关系去区分。只泛泛说「做调查」不得分。",skill:"竞争性说明的评价"}]},{id:"s5-10",no:56,code:"14.1",title:"关于概率的几种观点",stage:5,chapter:"第14章 概率",minutes:15,lead:"「明天下雨的概率是 70%」这句话里，70% 到底在描述什么？是天上有个随机装置，是过去同类天气的统计，还是预报员心里的把握？",objectives:["说出古典、相对频率、主观三种概率观各自的主张与适用条件","判断一个具体场景该用哪一种解释更合适","指出「结果只有两种所以概率各半」这类说法的错误"],concepts:["古典概率","相对频率","主观概率","等可能","信念度"],body:`
## 核心定义

**专业定义**：古典观点把概率定义为有利结果数与全部**等可能**结果数之比。相对频率观点把概率视为长期重复试验中事件出现频率的稳定值。主观观点把概率视为某个人对事件发生的**相信程度**，要求这组信念满足概率公理。

**通俗解释**：三种说法回答的是同一个问题——「概率这个东西，到底附着在哪儿」。古典说附着在对称的结果结构上，频率说附着在长跑的统计里，主观说附着在你心里的把握上。

**关键术语**

- **等可能**：每个基本结果出现的机会相同。
- **相对频率**：n 次试验中事件出现次数与 n 之比。
- **信念度**：个人对命题为真的相信强度，可用愿意接受的赌率测量。

**容易混淆的概念**

> 三种观点 ≠ 三种算法。它们常常算出同一个数，差别在于**这个数指的是什么**，以及在什么场合才有意义。

> 主观概率 ≠ 随便猜。它必须满足概率公理，否则会被一套组合下注稳赚，这套组合叫荷兰赌。

## 理论讲解

### 第一步：古典观点，靠对称性

掷一枚均匀骰子，六个面等可能，出现 3 的概率是 $1/6$。一副洗好的牌，抽到红桃的概率是 $13/52$。

$$P(A) = \\frac{\\text{有利结果数}}{\\text{全部等可能结果数}}$$

它要求两个条件：结果有限，且等可能。麻烦在于「等可能」本身要用概率来定义，容易绕圈。所以古典观点真正的靠山是**对称性**——骰子形状对称、牌堆充分洗匀，我们才敢说等可能。

### 第二步：相对频率，靠长期重复

投一万次硬币，正面出现 5012 次，频率 0.5012。次数越多，频率越稳定地贴近某个值，这个稳定值就是频率观点下的概率。

它适合可重复的事件：新生儿性别比、某型号零件的次品率、某年龄段人群的年度死亡率。保险公司定价靠的就是这类数据。

局限也很清楚：单次事件没有频率。「这颗小行星 2036 年撞地球的概率」没法靠重复试验得到，因为只有一颗小行星、只有一次 2036 年。

### 第三步：主观观点，靠信念的约束

「这个项目明年能成的概率，我给 0.6。」这句话不描述任何客观频率，它描述的是说话人的相信程度。

主观概率听上去很随意，其实有硬约束：一组信念必须满足概率公理（非负、全空间为 1、互斥可加）。若不满足，别人就能设计一组下注，让你无论结果如何都亏钱。所以主观概率可以是「个人的」，却不能是「任意的」。

它还有个好处：能把专家判断、历史类比、模型输出综合成一个可比较、可更新的数。贝叶斯方法正是建立在这个观点上。

### 第四步：看场合挑观点

| 场景 | 更合适的观点 |
|---|---|
| 掷骰子、抽牌、轮盘 | 古典 |
| 出生性别、零件次品率、保险费率 | 相对频率 |
| 明年某公司是否违约、某项目能否成功 | 主观 |

三者并非水火不容。很多实际问题会用频率数据去校准主观判断，这叫「用客观证据约束主观信念」。

## 例题与分析

**例 1（易）** 掷两枚均匀骰子，点数和为 7 的概率是多少？

**分析**：古典观点。样本空间 36 个等可能结果，和为 7 的有 (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) 共 6 个，概率 $6/36 = 1/6$。注意不能按「和从 2 到 12 共 11 种」来算，那些和并不等可能。

**例 2（中）** 气象台发布「明天降水概率 70%」。这 70% 属于哪一种？

**分析**：现代预报多用集合预报——让多个数值模式在略不同的初始条件下各跑一次，100 个成员里 70 个算出有雨。这更接近相对频率，只不过样本来自模型集合，而非真实世界的重复。对公众而言，把它理解成「预报员的主观把握」也无妨，两种解读给出的行动建议基本一致：带伞。

**例 3（难）**「某小行星 2036 年撞击地球的概率约为四万五千分之一」，这句话在频率观点下几乎无法解释，它还有意义吗？

**分析**：有意义，但要换一种读法。可以把它理解为一组同类天体轨道的不确定性分布：在数十万条可能的轨道里，约有一条与地球相交。这仍带频率色彩，只是频率来自**可能轨道的集合**，不是历次试验。也可以视为主观信念度，由轨道测量误差与模型不确定性合成。关键不在于贴上哪个标签，而在于说清这个数是怎么算出来的、会随哪些新观测更新。

## 反例训练

> 这个彩票只有中奖和不中奖两种结果，所以中奖概率是 50%。

**问题所在**：把「结果二分」偷换成「结果等可能」。古典观点要求的是等可能，不是结果数目为二。一张彩票的中奖概率取决于发行量、奖项设置，可能是千万分之一。

**说明**：这类错误在生活里很常见——「要么成功要么失败，所以五五开」「要么下雨要么不下，所以一半一半」。判断等可能，看的是结构上的对称性，不是选项的个数。

## 现实应用

- **保险**：用分年龄、分职业的死亡率数据定价，这是相对频率的典型应用。
- **医疗**：把「五年生存率 80%」理解为同类患者群体的频率，而非对你个人的保证。
- **投资**：对单个项目给出概率区间，属于主观概率，但要用可比项目的历史数据校准。
- **日常**：听到一个百分比，先问它的分母是谁、样本从哪来，再决定要不要当真。

## 本节总结

**核心概念**：古典概率、相对频率、主观概率、等可能、信念度。

**关键规则**

1. 古典靠对称，频率靠重复，主观靠一致的信念。
2. 单次事件没有频率，只能借主观或模型集合。
3. 等可能是一个实质条件，不能靠结果个数推出来。

**常见错误**：结果二分就认为各半；把群体频率当成个体保证；把主观概率当成无从讨论的猜测。

**需要掌握的能力**：拿到一个概率陈述，能判断它在哪种观点下有意义，并追问这个数是怎么得到的。
`,quiz:[{id:"s5-10-q1",type:"single",stem:"「这枚硬币抛出正面的概率是 1/2」，最贴近哪种观点？",options:["古典观点，依据是对称性与等可能","相对频率观点，依据是历史投掷数据","主观观点，依据是说话人的信念","以上都不适用"],answer:"A",explanation:"均匀硬币的对称性使两个结果等可能，这是古典定义的标准场景。频率数据可以印证它，但定义依据在对称性。",skill:"古典概率"},{id:"s5-10-q2",type:"judge",stem:"主观概率因为是个人判断，所以可以任意取值，不受任何约束。",answer:!1,explanation:"主观概率必须满足概率公理，否则会被一套组合下注稳赚（荷兰赌）。它可以因人而异，但不能自相矛盾。",skill:"主观概率"},{id:"s5-10-q3",type:"single",stem:"「这个结果要么发生要么不发生，所以概率各是 50%」，这个推理的错误在于：",options:["把结果数目为二当成了结果等可能","忽略了概率总和必须为 1","混淆了频率与信念度","样本量太小"],answer:"A",explanation:"古典定义要的是等可能，而非二分。选项数量与可能性是否相等是两件事，彩票中奖与不中奖显然不等可能。",skill:"等可能条件"},{id:"s5-10-q4",type:"multi",stem:"相对频率观点在应用中会遇到哪些困难？（多选）",options:["单次事件无法通过重复试验获得频率","需要足够多的试验才能稳定","试验条件必须保持可比","它完全无法用于保险定价"],answer:["A","B","C"],explanation:"D 与事实相反，保险精算正是频率观点的成功应用。A、B、C 都是该方法的内在限制。",skill:"相对频率"},{id:"s5-10-q5",type:"short",stem:"请判断「某位专家说明年经济衰退的概率是 35%」属于哪种概率观点，并说明这个数字应当满足什么约束、可以怎样校准。",keywords:[["主观","信念度","判断"],["公理","一致","荷兰赌"],["历史","同类","数据","校准"],["更新","新信息"]],answer:"属于主观概率，表达的是专家对单一事件的相信程度。它必须与专家的其他判断保持概率上的一致，否则会被组合下注套利。校准方式是拿同类预测的历史记录对照实际发生率，例如他过去给出 35% 的判断中是否约有三成五成真，并随新数据更新。",explanation:"两个得分点：识别为主观概率并指出公理约束；提出用历史命中率做校准。只说「是主观的」不够。",skill:"主观概率"}]},{id:"s5-11",no:57,code:"14.2",title:"概率演算",stage:5,chapter:"第14章 概率",minutes:18,lead:"一种病的检出准确率是 99%，你测出阳性。你真正得病的概率是 99% 吗？如果我说可能只有 17%，你会不会觉得哪里算错了？",objectives:["熟练运用补规则、加法规则与乘法规则计算复合事件的概率","区分互斥与独立，说明二者为何不能互相替代","用四格表计算条件概率，并解释结果为何常与直觉相反"],concepts:["补事件","互斥事件","独立事件","条件概率","乘法规则"],body:`
## 核心定义

**专业定义**：概率演算建立在三条公理之上，由此导出常用规则：补规则 $P(\\neg A) = 1 - P(A)$；互斥事件的加法规则 $P(A \\cup B) = P(A) + P(B)$；一般加法规则 $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$；独立事件的乘法规则 $P(A \\cap B) = P(A) \\times P(B)$；条件概率 $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$。

**通俗解释**：这几条规则管的都是「或者」和「并且」。或者就把概率加起来，重复的部分要减掉；并且就把概率乘起来，前提是两件事互不影响。

**关键术语**

- **补事件**：A 不发生，记作 $\\neg A$。
- **互斥**：两件事不能同时发生，$A \\cap B = \\varnothing$。
- **独立**：一件事发生与否不改变另一件的概率。
- **条件概率**：在已知 B 发生的条件下 A 的概率。

**容易混淆的概念**

> 互斥 ≠ 独立。互斥是「不能同时发生」，独立是「互不影响」。恰恰相反，两个非零概率的互斥事件一定**不**独立——一个发生，另一个就被排除了。

> $P(A \\mid B)$ ≠ $P(B \\mid A)$。「阳性者中患病的比例」与「患病者中阳性的比例」是两个完全不同的数。

## 理论讲解

### 第一步：先把样本空间画出来

算概率的第一步永远是列清楚所有可能结果，再圈出你关心的那部分。掷两枚骰子共有 36 个结果，不是 11 个「点数和」；一副牌有 52 张，不是 4 种花色。

跳过这一步，后面所有公式都会算错，而且错得很自信。

### 第二步：补事件常常是最省力的路

「至少一次」这类问题，正面算要分很多情况，反面只有一种：一次都没有。

$$P(\\text{至少一次}) = 1 - P(\\text{一次都没有})$$

抛三次硬币至少一次正面：$1 - (1/2)^3 = 7/8$。三步就算完了。

### 第三步：加法规则，注意重不漏

两件事互斥时，概率直接相加：

$$P(A \\cup B) = P(A) + P(B) \\quad (A \\cap B = \\varnothing)$$

不互斥时，直接相加会把交集算两遍，必须减掉一次：

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

掷一枚骰子，求「偶数或大于 4」。偶数有 3 个，大于 4 有 2 个，交集是「6」这 1 个，于是 $3/6 + 2/6 - 1/6 = 4/6$。

### 第四步：乘法规则，独立才相乘

$$P(A \\cap B) = P(A) \\times P(B) \\quad (A, B \\text{ 独立})$$

两次抛硬币都是正面：$1/2 \\times 1/2 = 1/4$。

不独立时不能直接乘，要用条件概率：$P(A \\cap B) = P(A) \\times P(B \\mid A)$。一副牌连抽两张都是红桃，第二张的概率受第一张影响，是 $13/52 \\times 12/51$。

### 第五步：条件概率与四格表

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$

这类问题最稳妥的算法是画四格表，把人数（不是概率）填进去，再读比例。

| | 检出阳性 | 检出阴性 | 合计 |
|---|---|---|---|
| 患病 | 990 | 10 | 1000 |
| 未患病 | 4950 | 94050 | 99000 |
| 合计 | 5940 | 94060 | 100000 |

假设十万人，患病率 1%，灵敏度 99%，特异度 95%。阳性者共 5940 人，其中真患病 990 人，于是 $P(\\text{病} \\mid \\text{阳性}) = 990/5940 \\approx 16.7\\%$。

这个结果让很多人吃惊。原因不在公式，在于**基数**：健康人太多，5% 的误报率乘上九万九千人，就是将近五千个假阳性，把一千个真患者淹没了。

## 例题与分析

**例 1（易）** 掷一枚骰子，求出现偶数或 5 的概率。

**分析**：偶数 {2,4,6} 与 {5} 互斥，直接相加：$3/6 + 1/6 = 4/6 = 2/3$。若题目改成「偶数或大于 4」，就要减交集。

**例 2（中）** 某系统由三个独立部件串联，各自正常工作的概率为 0.9。系统正常工作的概率是多少？

**分析**：串联要求三个都正常，独立故相乘：$0.9^3 = 0.729$。这里用乘法是合法的，因为「独立」是题设。若部件共用同一电源，独立性就不成立，得改用条件概率。

**例 3（难）** 沿用上面的检测数据。若一个人连续两次检测都是阳性，且两次检测相互独立，他患病的概率是多少？

**分析**：用贝叶斯更新。第一次阳性后，患病的后验几率从 $1:99$ 变为 $990:4950$，约 $1:5$。再做一次，患病的阳性率 0.99、未患病的阳性率 0.05，几率乘以 $0.99/0.05 = 19.8$，得到约 $19.8:5$，即约 80%。两次检测的价值远大于一次，因为它把「偶然误报」这个解释压得很低。这也是复查的统计学理由。

## 反例训练

> 明天下雨的概率是 0.3，刮风的概率是 0.4，所以下雨或刮风的概率是 0.7。

**问题所在**：直接相加，默认了两件事互斥。可下雨天常常也刮风，交集不为零。正确写法是 $0.3 + 0.4 - P(\\text{雨} \\cap \\text{风})$，若交集为 0.15，答案应是 0.55。

**说明**：加法规则的两种形态，区别只在一个减法。凡是「或者」，先问一句：这两件事能同时发生吗？能，就必须减掉重复计算的部分。

## 现实应用

- **医疗**：理解假阳性，能避免不必要的恐慌与过度检查，也能解释为什么筛查要针对高危人群。
- **工程**：冗余设计的可靠性计算全靠乘法与补规则，串联与并联的公式完全不同。
- **风控**：两笔贷款同时违约的概率，只有在违约事件近似独立时才能相乘；经济下行时它们往往同向变动。
- **日常**：「至少一个人记得带钥匙」这类问题，用补事件算最快。

## 本节总结

**核心概念**：补事件、互斥事件、独立事件、条件概率、加法与乘法规则。

**关键规则**

1. 「或者」用加法，交集要减；「并且」用乘法，先确认独立。
2. 互斥与独立是两件事，非零概率的互斥事件一定不独立。
3. 条件概率的分母是条件事件，不是全样本。

**常见错误**：不互斥却直接相加；不独立却直接相乘；把 $P(A \\mid B)$ 与 $P(B \\mid A)$ 混为一谈。

**需要掌握的能力**：把一个复合事件拆成「或」「且」「非」的组合，选对规则，并用四格表核对结果。
`,quiz:[{id:"s5-11-q1",type:"single",stem:"若 $P(A) = 0.4$，$P(B) = 0.5$，且 A 与 B 互斥，则 $P(A \\cup B)$ 等于：",options:["0.2","0.7","0.9","0.1"],answer:"C",explanation:"互斥时交集为空，直接相加：0.4 + 0.5 = 0.9。若误用乘法得 0.2，那是把互斥当成独立了。",skill:"互斥事件的加法规则"},{id:"s5-11-q2",type:"judge",stem:"两个事件互斥，就意味着它们相互独立。",answer:!1,explanation:"恰恰相反。互斥且概率非零时，一个发生就排除了另一个，二者强烈相关。独立意味着互不影响，与互斥不相容。",skill:"互斥与独立"},{id:"s5-11-q3",type:"single",stem:"某病患病率 1%，检测灵敏度 99%、特异度 95%。一个人检测阳性，他患病的概率约为：",options:["99%","50%","17%","5%"],answer:"C",explanation:"十万人中真患者 1000 人、检出 990 人；健康人 99000 人、误报约 4950 人。阳性共 5940 人，真患者占 990，约 16.7%。",skill:"条件概率"},{id:"s5-11-q4",type:"multi",stem:"下列关于概率规则的说法，正确的有：（多选）",options:["$P(\\neg A) = 1 - P(A)$","A 与 B 独立时 $P(A \\cap B) = P(A)P(B)$","任何情况下 $P(A \\cup B) = P(A) + P(B)$","$P(A \\mid B) = P(A \\cap B) / P(B)$，要求 $P(B) > 0$"],answer:["A","B","D"],explanation:"关键是互斥才可直接相加。A 与 B 能同时发生，直接相加会把交集算两遍，必须减去 $P(A \\cap B)$。",skill:"概率演算规则"},{id:"s5-11-q5",type:"short",stem:"某系统有两个独立的安全装置，各自失效概率为 0.1。求「至少一个装置正常工作」的概率，并说明为什么这里可以相乘。",keywords:[["补事件","同时失效","0.01"],["0.99","至少一个","1 减"],["独立","互不影响","相乘"],["不能相加","不互斥"]],answer:"两个都失效的概率为 0.1 × 0.1 = 0.01，故至少一个正常的概率为 1 − 0.01 = 0.99。可以相乘是因为题设两装置独立失效，互不影响。注意不能用 0.9 + 0.9，那会超过 1，原因是「至少一个正常」的两个情形并不互斥。",explanation:"关键是用补事件绕开「至少」的复杂性，并说明独立性是相乘的前提。指出相加会超过 1，是判断是否真懂的好标志。",skill:"补事件与乘法规则"}]},{id:"s5-12",no:58,code:"14.3",title:"日常生活中的概率与证据强度",stage:5,chapter:"第14章 概率",minutes:16,lead:"轮盘连开五次红，第六次押黑的赌客觉得自己胜算更大了。同一张彩票，中奖概率千万分之一，买十张是不是就变成了百万分之一？",objectives:["识别赌徒谬误与热手谬误在独立事件上的误用","用合取规则说明「更具体的故事」为何不可能更可能","计算期望值，并用基础比率解释检测结果为何常被高估"],concepts:["赌徒谬误","合取谬误","基础比率忽视","期望值","证据强度"],body:`
## 核心定义

**专业定义**：赌徒谬误指错误地认为独立事件的历史结果会改变下一次的概率。合取谬误指认为两个事件同时发生比其中任一单独发生更可能，违反 $P(A \\cap B) \\le P(A)$。基础比率忽视指在评估条件概率时忽略先验的群体比例。期望值指随机变量各取值与其概率乘积之和。

**通俗解释**：赌徒谬误是「该轮到我了」，合取谬误是「故事越细越像真的」，基础比率忽视是「只看检测准确率，忘了这病本来就少见」。

**关键术语**

- **独立事件**：前一次结果不改变后一次的概率。
- **合取**：两件事同时发生。
- **基础比率**：事件在总体中原本的比例。
- **期望值**：长期平均每次的得失。

**容易混淆的概念**

> 赌徒谬误 ≠ 大数定律。大数定律说的是长期频率趋于稳定，它不承诺「短期会自我纠正」，更不会给某一次下注补偿。

> 合取谬误 ≠ 概率判断偏差的统称。它特指「细节越多越可信」这种直觉，与代表性启发式密切相关。

## 理论讲解

### 第一步：独立事件没有记忆

公平轮盘每次开红概率 18/37 左右，与前面开过什么无关。连开五次红之后，第六次开红的概率还是那个数。轮盘不会觉得「欠」你一个黑。

反过来，篮球里的「热手」信念也在犯同类错误：连续命中之后，下一次命中率并不显著升高。这两者方向相反，根子相同——都以为独立事件带着记忆。

### 第二步：合取不可能比部分更可能

琳达三十一岁，单身，直率，学生时代主修哲学，关心歧视与社会公正，参加过反核游行。问：她更可能是 (A) 银行出纳员，还是 (B) 银行出纳员且积极参与女权运动？

多数人选 B，因为故事更贴合。可逻辑上 B 是 A 的子集：

$$P(A \\cap B) \\le P(A)$$

一个更细的描述，覆盖的情形只会更少，概率只会更低。故事越具体越好听，这恰恰是它更容易出错的信号。

### 第三步：基础比率不能丢

前面的检测例子已经说明：患病率 1% 时，阳性者中真正患病的只有约 17%。把患病率换成 30%，同一个检测的阳性预测值会跳到九成左右。

检测的准确率描述的是「给定状态下的检出率」，而我们想知道的是「给定结果下的状态概率」。这两者之间隔着基础比率。

$$P(\\text{病} \\mid +) = \\frac{P(+ \\mid \\text{病})P(\\text{病})}{P(+ \\mid \\text{病})P(\\text{病}) + P(+ \\mid \\text{无病})P(\\text{无病})}$$

### 第四步：用期望值算长期账

$$E = \\sum p_i \\cdot v_i$$

一张 2 元的彩票，中奖概率千万分之一，奖金 500 万，期望回报是 0.5 元，期望净值是 −1.5 元。买十张，期望净值是 −15 元，中奖概率变成约百万分之一——两件事同时发生，别把它们混起来。

保险的期望值对你通常是负的（否则公司无法运营），但人们仍会买，因为大额损失的边际效用远高于小额保费的边际效用。期望值不是唯一的决策标准，可它是最基本的起点。

## 例题与分析

**例 1（易）** 硬币连出七次正面，第八次出正面的概率是多少？

**分析**：仍是 1/2，前提是硬币公平且各次独立。「连出七次正面」这件事本身的概率很低（1/128），但那是七次整体的概率，与第八次无关。

**例 2（中）** 两个候选人：A 是「有犯罪前科的人」，B 是「有犯罪前科且最近在社区做义工」。哪个更可能是凶手？多数人直觉选 B。

**分析**：这是合取谬误的经典变体。B 是 A 的子集，概率必然不大于 A。故事里加了「做义工」，让形象更立体，却让概率严格下降。这正是「细节增加可信度」这种直觉的漏洞。

**例 3（难）** 某药厂宣传：服用者中 80% 症状缓解，安慰剂组 60% 缓解。这个数据能说明药有效吗？还差什么？

**分析**：20 个百分点的差异看起来可观，但要判断它是否真实，需要三样东西：样本量与置信区间（差异是否超出随机波动）、随机化与盲法（分组是否无偏）、以及**绝对风险**的解读——从 60% 到 80%，每五人中多一人缓解，即需治疗人数为 5。若症状本身有自愈倾向，两组的差值才是药物的净效应，这正是设安慰剂组的意义。宣传语里的「80% 有效」，把相对数字说成了绝对效果。

## 反例训练

> 这个检测准确率 99%，我测出阳性，那我基本就是得病了。

**问题所在**：忽略了基础比率。若该病在人群中只有 1%，十万人里真患者一千、健康人九万九千；检测会把近五千名健康人误判为阳性，阳性者中真患者只占约六分之一。

**说明**：准确率是两个条件概率的混合说法，不能直接当成「阳性即患病」的概率。正确的做法是先问患病率，再算阳性预测值。这也是为什么筛查项目通常先针对高危人群——提高基础比率，阳性结果才有意义。

## 现实应用

- **医疗**：拿到阳性报告，先问这个病在同类人群中的发生率，再决定要不要慌。
- **投资**：连续三年跑赢基准的基金经理，可能只是运气；判断能力要看更长周期与样本外表现。
- **新闻**：看到「风险增加一倍」，追问基线风险是多少——从万分之一到万分之二也是一倍。
- **日常**：彩票、抽奖、保险，用期望值算一遍，很多冲动会消退。

## 本节总结

**核心概念**：赌徒谬误、合取谬误、基础比率忽视、期望值、证据强度。

**关键规则**

1. 独立事件没有记忆，历史不补偿未来。
2. 加细节只会降低概率，故事越细越要小心。
3. 条件概率必须带上基础比率，否则数会大得离谱。

**常见错误**：把长期频率当成短期纠正机制；被具体叙事说服而忽略概率结构；用相对风险替代绝对风险。

**需要掌握的能力**：听到一个概率或风险数字，能追问分母、基础比率与时间尺度，并把期望值算出来。
`,quiz:[{id:"s5-12-q1",type:"single",stem:"轮盘连开五次红，赌客认为下一次开黑的概率更大。这属于：",options:["合取谬误","赌徒谬误","基础比率忽视","幸存者偏差"],answer:"B",explanation:"赌徒谬误的核心是认为独立事件的历史会影响下一次。轮盘每次独立，连开五次红不改变第六次的概率分布。",skill:"赌徒谬误"},{id:"s5-12-q2",type:"judge",stem:"「银行出纳员且是女权主义者」的概率，不可能高于「银行出纳员」的概率。",answer:!0,explanation:"前者是后者的子集，合取事件的概率必然不大于其中任一事件的概率。直觉觉得前者更可信，是代表性启发式在起作用。",skill:"合取谬误"},{id:"s5-12-q3",type:"single",stem:"某检测灵敏度 99%、特异度 95%，疾病患病率 1%。若一个人阳性，其真正患病的概率大约为：",options:["99%","约 17%","约 50%","约 95%"],answer:"B",explanation:"阳性者中大量是假阳性：十万人的例子里，真患者 990 人，健康人误报约 4950 人。990/5940 约 16.7%，基础比率是关键。",skill:"基础比率忽视"},{id:"s5-12-q4",type:"multi",stem:"下列关于期望值的说法，正确的有：（多选）",options:["期望值是各结果取值与概率乘积之和","期望值为负的彩票，长期大量购买必然亏损","买十张彩票可以让中奖概率与期望值同时提高十倍","人们愿意买期望值为负的保险，可能与效用非线性有关"],answer:["A","B","D"],explanation:"C 混淆了两件事：中奖概率约提高十倍，但每张票的期望值不变，总期望净值仍随张数线性下降。",skill:"期望值"},{id:"s5-12-q5",type:"short",stem:"某新闻标题称「常喝某饮料的人患病风险提高 50%」。请列出三个你应当追问的问题，并说明理由。",keywords:[["基线","绝对风险","多少"],["样本","研究设计","对照","因果"],["相关","混淆","生活方式"],["剂量","人群","适用"]],answer:"一是基线风险是多少，从万分之一到万分之一点五也是提高五成，绝对影响可能极小；二是研究设计，是队列、病例对照还是横断面，能否支持因果；三是有没有控制混淆因素，喝这种饮料的人可能同时有别的习惯。还应追问剂量与适用人群。",explanation:"三个问题分别对应绝对风险、研究设计与混淆控制。能指出相对风险与绝对风险的区别，是这一题的核心得分点。",skill:"证据强度"}]}],W3=[{id:"s6-01",no:59,code:"4.1–4.2",title:"什么是谬误",stage:6,chapter:"第4章 谬误",minutes:14,lead:"有些话你听完就是觉得不对劲，可一时说不出哪里不对。对方每句话单看都没错，连起来却让你莫名其妙地接受了某个结论。这种「说不出哪里不对」的感觉，能不能变成一套可以逐条检查的方法？",objectives:["用「看似有效、实则无效」这一标准判断一段论证是否构成谬误","把常见的谬误论证归入相干、不当归纳、预设、含混四大类","区分「论证有谬误」与「结论是错的」这两件不同的事"],concepts:["谬误","相干谬误","不当归纳谬误","预设谬误","含混谬误","论证形式"],body:`
## 核心定义

**专业定义**：谬误指论证中一种**看似有效、实则无效**的推理缺陷。它骗过的是你的审查，而非你的知识——你以为理由已经托住了结论，实际中间那段是空的。

**通俗解释**：谬误是讲理时的假动作。球看着传到位了，其实出界了。判断有没有谬误，看理由与结论之间的连接，不看结论是否顺耳。

**典型结构**

$$\\text{前提} \\to \\text{（暗中插入一座不存在的桥）} \\to \\text{结论}$$

日常版骨架：如果 $A$，那么 $B$；现在出现了 $A$ 的某种迹象，所以 $B$。中间那一步从未被论证，却承担了全部重量。

**四大类**（柯匹《逻辑学导论》的分类）

- **相干谬误**：前提与结论不相干，靠心理联想把结论推进去。
- **不当归纳**：前提相干，但支持力不足，样本、类比、因果出了毛病。
- **预设谬误**：前提里已经偷偷塞进了要证明的东西。
- **含混谬误**：词句中途换了意思，或把部分与整体的属性乱搬。

> 谬误 ≠ 结论错误。结论可能真，论证依然是谬误；结论可能假，论证也可能毫无毛病，只是前提假。逻辑只审理由到结论这一段路。

## 理论讲解

### 第一步：先看它表面在做什么

任何谬误都先伪装成一次正常论证：给出前提，摆出「所以」，读起来连贯。你要先描述它在拿什么换什么。

### 第二步：再问它实际错在哪一步

缺陷只可能落在四个位置。桥不存在（前提与结论不相干）；桥太窄，撑不住重量（样本太小、类比太远）；材料是从对岸拆来的（结论已藏在前提里）；桥的名字中途换了意思（同一个词两处含义不同）。定位到这四类之一，你就知道该问什么问题。

### 第三步：用信号词和清单识别

信号词：『大家都』『专家说』『你不也』『一旦……就会』『要么……要么』『说白了就是』。它们本身不是错误，但都是需要停一下的地方。

提问清单：理由是哪几句，结论是哪一句？把理由单独拎出来，它还撑得住结论吗？有没有哪一句既是理由又是结论？

## 例题与分析

**例 1（易）** 某博主：「这个方案反对的人不少，可见它肯定有问题。」

**分析**：错误发生在「可见」这一步。「反对的人多」是关于人心的事实，与「方案本身有缺陷」之间没有推理通道。这属于诉诸大众。

**例 2（中）** 某公司 HR 在评审会上说：「这个建议是小张提的，他去年那个项目就砸了，不用细看了。」

**分析**：错误发生在「不用细看了」。他给了一条关于人的信息，却用它替代了对内容的审查。去年的失败与这份建议是否可行之间，缺一座桥。

**例 3（难）** 某亲戚说：「读书没什么用。你看隔壁那个老板，小学都没毕业，现在开三家公司，我们厂里几个大学生还在给他打工。」

**分析**：三处断裂。用单个成功者推普遍结论，样本为一且不随机；「大学生给他打工」把论题从「读书无用」换成了学历与收入的比较；他还完全没提那些没读书也没成功的人，属于忽视基础比率。

## 反例训练

> 我不反对讨论这件事，只是觉得现在讨论的时机还不成熟。等条件具备了，大家自然会讨论，没必要现在硬推。

**问题所在**：它没有给出任何可检验的标准。「时机不成熟」听上去像理由，实际是「现在不要讨论」的换词。这类论证把不作为包装成安排，属于预设谬误的变体，也叫移动球门。

**如何反驳**：不要争「成不成熟」，直接要标准。『请给我三个可观察的指标，说明什么状态算条件具备。如果指标达到了而讨论仍被推迟，我们按什么规则处理？』

## 现实应用

- **看广告**：『九成人选择』先问它在提供理由，还是在制造情绪。
- **读新闻**：标题给结论，正文给个案。个案能说明「有这种事」，说明不了「这种事很普遍」。
- **职场沟通**：『大家都觉得你这个方案有问题』。追问具体是谁、具体哪一条、有没有数据。

## 本节总结

**核心概念**：谬误、相干谬误、不当归纳谬误、预设谬误、含混谬误。

**关键规则**

1. 谬误是形式缺陷，判断依据是理由能否撑住结论，与结论真假无关。
2. 四类缺陷对应四个提问方向：相干吗、够不够、是不是循环、词有没有变。
3. 先还原结构，再做评价。跳过还原，评价一定走偏。

**常见错误**：把「我不同意这个结论」当成「这个论证有谬误」；把「说得动人」当成「说得有理」。

**需要掌握的能力**：剥出前提与结论，指出断裂发生在哪一句，并说出它属于哪一类缺陷。
`,quiz:[{id:"s6-01-q1",type:"single",stem:"根据本节的界定，一个论证构成谬误，最关键的标志是：",options:["它的结论在事实上是假的","它的前提中有一句是假的","它看起来有效，实际上前提并不足以支持结论","它的说法让人听了不舒服"],answer:"C",explanation:"谬误是推理层面的缺陷，核心是「看似有效、实则无效」。结论假属于事实问题，前提假属于证据问题，听着不舒服属于感受问题，都不能单独构成谬误。",skill:"谬误的定义"},{id:"s6-01-q2",type:"judge",stem:"如果一个论证的结论恰好是真的，那么这个论证就不算谬误。",answer:!1,explanation:"结论真与推理好是两件事。有人靠「大家都这么说」恰好推出了正确结论，论证依然是诉诸大众。逻辑审查针对的是理由与结论之间的连接，不针对结论本身的真假。",skill:"谬误与结论真假"},{id:"s6-01-q3",type:"single",stem:"「这个提议是老李提的，他上次的判断就错了，所以这次也不用听。」这属于哪一类谬误？",options:["不当归纳谬误","预设谬误","含混谬误","相干谬误"],answer:"D",explanation:"它用人格与履历替代了对提议内容的审查，前提与结论之间没有推理通道，属于相干谬误中的人身攻击。注意区分：若争论的正是「老李这次判断是否可靠」，攻击其可靠性才是相干的。",skill:"相干谬误"},{id:"s6-01-q4",type:"multi",stem:"下列哪些属于柯匹所分的谬误大类？（多选）",options:["相干谬误","不当归纳谬误","统计谬误","含混谬误"],answer:["A","B","D"],explanation:"四大类是相干、不当归纳、预设、含混。统计方面的毛病（样本太小、忽视基础比率）被归入不当归纳，并非独立的一大类。",skill:"谬误的分类"},{id:"s6-01-q5",type:"short",stem:"有人把「论证有谬误」直接等同于「结论是错的」。请说明这两者的区别，并举一个结论为真但论证有谬误的情形。",keywords:[["推理","形式","论证过程"],["结论真假","两件事","独立"],["例子","例如","比如"]],answer:"谬误评价的是理由到结论的连接，结论真假是另一个问题，两者彼此独立。例如某人说「这条路上出过车祸，所以这条路不安全」，实际这条路确实事故多发——结论真，但他给出的那一次事故并不足以支持「不安全」，论证仍有以偏概全的毛病。",explanation:"要点是：审查对象是推理关系而非结论；一个论证可以结论真而推理坏，也可以推理好而前提假。承认这一点，才能把「我不同意」和「你论证有问题」分开说。",skill:"谬误与结论真假"}]},{id:"s6-02",no:60,code:"4.3",title:"人身攻击",stage:6,chapter:"第4章 谬误",minutes:13,lead:"一场关于方案的讨论，十分钟后变成了对提案人性格的审判。奇怪的是，围观的人往往觉得讨论已经有了结果。为什么把矛头从话转向人，会让人觉得问题被解决了？",objectives:["辨认人身攻击的三种形态：攻击人格、攻击处境、你也一样","说明「质疑说话人可信度」在什么条件下是相干的，什么条件下是谬误","在被人身攻击时，把讨论拉回论题的具体反驳话术"],concepts:["人身攻击","攻击人格","攻击处境","你也一样","相干性"],body:`
## 核心定义

**专业定义**：人身攻击谬误指不针对论证的内容作评价，转而攻击提出论证的人，并据此断定其论证不成立。

**通俗解释**：不去拆桥，去拆造桥的人。造桥的人品行如何，与这座桥能不能承重，本来是两件事。

**典型结构**

$$\\text{甲主张 } P \\quad \\text{甲具有缺陷 } D \\quad \\therefore P \\text{ 不成立}$$

**三种形态**

- **攻击人格**：愚蠢、虚伪、品行不端。『这种话也说得出来，可见他没什么判断力。』
- **攻击处境**：你是既得利益者，所以你的话不可信。『你主张延长产假，你自己就靠这个拿工资。』
- **你也一样**：你自己都做不到，凭什么说。『你说熬夜伤身，你自己不也天天熬夜？』

> 与「诉诸权威」的区别：诉诸权威借人的身份给结论加分，人身攻击借人的身份给结论减分。方向相反，毛病相同——都用「人」替换了「论证」。

## 理论讲解

### 第一步：看它表面在做什么

它在提供一条关于人的理由，读起来像在评估信息源的可靠性。评估信息源本身是理性的——我们确实不会随便相信路人的医学建议。这类论证因此有很强的迷惑性。

### 第二步：找出它实际错在哪一步

错在从「这个人的可信度低」跳到「这个结论为假」。这中间缺一步：可信度低的人也可能碰巧说对。命题的真假不随说话人的品德、处境、是否言行一致而变化。

它实际主张的是：甲不可信，所以 $P$ 假。这条推理要成立，需要补上一个明显为假的前提——凡不可信的人所说的话皆假。

### 第三步：识别与应对

信号词：『你这种人』『你自己不也』『你拿了谁的钱』『就你这水平』『你没经历过，你不懂』。

提问：他到底说了什么？那句话本身有没有理由？把说话人换成我尊敬的人，同样的论证还成立吗？

应对方式：不辩解人格，把话头扳回命题。『我是否言行一致，可以另开一个话题。现在这条规则该不该改，请针对我给的两条数据回应。』

## 例题与分析

**例 1（易）** 某公司评审会上，一位主管说：「这个流程优化建议是小周提的，他去年那个项目就砸了，不用细看了。」

**分析**：错误发生在「不用细看了」。前半句是一条关于人的信息，后半句却直接取消了审查。哪怕小周确实能力不足，这份建议也可能恰好指出了真正的瓶颈。

**例 2（中）** 某评论区：「你主张提高加班补贴，可你自己就是管理层，你当然这么说。」

**分析**：错误发生在「你当然这么说」。动机可以解释一个人为什么提出某个主张，不能证明这个主张是错的。这里还把论题换成了「你的动机纯不纯」。

**例 3（难）** 某亲戚劝人戒烟，对方回：「你说抽烟有害，你自己不也抽了三十年？等你戒了再来管我。」

**分析**：错误发生在「等你戒了再来管我」。抽烟有害的依据是医学证据，与劝说者是否践行无关。这段还叠了一层转移：把「这个说法对不对」换成了「你有没有资格说」。值得留意的是，如果对方原话是「戒烟很容易，我现在就能戒」这类自我标榜，指出其言行不一才是相干的。

## 反例训练

> 我不是针对他的人品。我只是提醒各位，这位顾问过去在三个项目上判断失误，所以他对这次风险的评估，大家可以先放一放。

**问题所在**：前半句确实在做相干的事——评估信息源的可靠性。问题出在「所以……先放一放」：它用笼统的履历污点替代了对本次判断的检查，也没说明过去的失误与本次议题是否同类。

**如何反驳**：承认前半句的合理性，切断后半句的跳跃。『过去的失误可以参考，但它不能替代这次的审查。请告诉我，他这次给的数据和推理，具体哪一步有问题？如果指不出来，我们就得按内容判断。』

## 现实应用

- **广告**：不比较参数，转而暗示对手「老板人品有问题」。参数可查，人品难查，转移话题的成本由此降低。
- **新闻评论区**：不问数字是否准确，先查记者立场。立场可以解释倾向，不能证明数字造假。
- **职场**：提案被否时听到「你还没做过这块业务」。可以回应：『我经验有限，所以把依据写成了三条可验证的假设，请逐条指出哪条不成立。』

## 本节总结

**核心概念**：人身攻击、攻击人格、攻击处境、你也一样、相干性。

**关键规则**

1. 争论命题真假时，说话人的品格、处境、是否言行一致，都不构成反驳。
2. 只有当争论的对象本身就是「此人是否可信」时，攻击可信度才是相干的。
3. 被攻击时不辩解人格，把话题扳回命题，要求对方指出具体的错误步骤。

**常见错误**：把「指出对方动机」当成「驳倒了对方观点」；把「你没资格说」当成「你说错了」。

**需要掌握的能力**：听到关于人的评价时，立刻判断这句话是在评估信息源，还是在替代论证。
`,quiz:[{id:"s6-02-q1",type:"single",stem:"「你主张公司该公开财务，可你自己拿着高薪，你当然这么说。」这属于人身攻击的哪一种形态？",options:["攻击人格","攻击处境","你也一样","诉诸权威"],answer:"B",explanation:"它攻击的是发言者的立场与利益位置，属于攻击处境。攻击人格针对品行能力，你也一样针对言行不一，诉诸权威是借身份加分，方向都不同。",skill:"攻击处境"},{id:"s6-02-q2",type:"judge",stem:"在法庭上，辩护方指出证人与被告有利益关系，这构成人身攻击谬误。",answer:!1,explanation:"法庭争论的对象本身就包含「此人的证言是否可信」。指出利益关系是在评估信息源，与论题相干，不构成谬误。相干与否取决于论题是什么，不取决于是否提到了人。",skill:"相干性的判断"},{id:"s6-02-q3",type:"single",stem:"「你说熬夜伤身，你自己不也天天熬夜？」这句话的推理错在哪一步？",options:["错在「熬夜伤身」这个前提是假的","错在从「劝说者言行不一」推出「熬夜不伤身」","错在使用了「伤身」这个含混的词","错在样本太小，不能代表所有熬夜的人"],answer:"B",explanation:"言行不一可以说明这个人自我管理差，与「熬夜是否伤身」这一医学判断无关。要接受结论，需要补上「言行不一者所说的话皆假」这个明显不成立的前提。",skill:"你也一样"},{id:"s6-02-q4",type:"multi",stem:"面对人身攻击，下列哪些回应有助于把讨论拉回论题？（多选）",options:["反问对方：我这条论证具体哪一步不成立","先证明自己人品没有问题，再继续讨论","承认自己处境特殊，然后把话题落到可验证的数据上","要求对方给出比「他有问题」更具体的反驳"],answer:["A","C","D"],explanation:"B 会把战场固定在人格上，越辩解越偏离论题。A、D 要求对方指出具体错误步骤，C 承认部分事实但不让出论题，都是有效的做法。",skill:"应对人身攻击"},{id:"s6-02-q5",type:"short",stem:"请说明：为什么「指出对方动机」通常不能驳倒对方的观点？在什么情况下它才是相干的？",keywords:[["动机","为什么说","解释"],["真假","成立与否","无关"],["可信度","证人","利益关系"]],answer:"动机只能解释一个人为什么提出这个主张，不能决定这个主张的真假。有私心的人也可能说出正确的话。只有当争论的对象本身就是「此人是否可信」时，比如评估证人证言、判断推荐是否有利益输送，指出动机才是相干的。",explanation:"关键在于区分「解释」与「反驳」。解释一个观点的来源，不等于否定它的内容。相干性由论题决定：论题是人是否可信时动机相干，论题是事对不对时动机不相干。",skill:"动机与相干性"}]},{id:"s6-03",no:61,code:"4.3",title:"稻草人",stage:6,chapter:"第4章 谬误",minutes:13,lead:"有些争论越吵越顺，因为双方打的根本不是同一个对手。你说了句温和的话，对方复述出来却变成了极端主张，然后他轻松取胜。这种胜利是怎么被制造出来的？",objectives:["识别人物论证中被改写、被极端化的对手观点","区分无意的误解与有意的稻草人，并说明判断依据","用「请用我自己的话复述」这一动作，当场拆掉稻草人"],concepts:["稻草人","观点重述","归谬法","偷换论题"],body:`
## 核心定义

**专业定义**：稻草人谬误指先把对方的观点改写成更弱、更极端或更容易被驳倒的版本，然后攻击这个版本，并宣称已经驳倒了对方的原观点。

**通俗解释**：真对手站得稳，就扎一个草人替他上场，一拳打倒，然后宣布赢了。观众看到的是倒下的草人，不是被打败的对手。

**典型结构**

$$\\text{对方主张 } P \\quad \\text{重述为 } P' \\text{（更弱或更极端）} \\quad \\text{驳倒 } P' \\quad \\therefore P \\text{ 错}$$

**三种改写手法**

- **极端化**：把「减少」改成「取消」，把「有条件支持」改成「无条件拥护」。
- **荒谬化**：给对方的观点配一个荒唐的理由，然后攻击这个理由。
- **选择性摘取**：只取最容易被误解的半句，丢掉限定条件。

> 与「误解」的区别：误解是无意的偏差，方向随机；稻草人的偏差总朝「更容易被打倒」的方向走。判断依据有两条——复述是否比原话更极端；被纠正后是否仍重复那个已被否认的版本。

## 理论讲解

### 第一步：它表面在做什么

它在做一件很正当的事：复述对方观点，然后给出反驳。复述加反驳，正是高质量讨论的标准动作。所以稻草人出现时，旁观者往往以为讨论在推进。

### 第二步：找出它实际错在哪一步

错在复述这一步。被反驳的命题 $P'$ 与对方实际主张的 $P$ 不是同一个命题。既然 $P'$ 不是对方说的，驳倒 $P'$ 对 $P$ 是否成立毫无影响，结论「$P$ 错」因此没有得到任何支持。

$$\\neg P' \\quad P' \\neq P \\quad \\therefore \\neg P \\text{（无效）}$$

### 第三步：识别与当场拆解

信号词：『你的意思就是』『说白了就是』『按你的逻辑』『照你这么说』『无非是想』。这些短语后面紧跟的内容，通常就是替身出场的位置。

提问：这是他的原话吗？他有没有加限定条件？把这段话拿给他本人看，他会认吗？

拆解动作只有一个：要求用对方自己的话复述，并当场校正。『等一下，我说的不是取消这条规则，我说的是把审批环节从五道减到两道。请针对这个主张回应。』

## 例题与分析

**例 1（易）** 「他说考试次数应该减少，意思就是不用学习了。」

**分析**：错误发生在「意思就是」。减少考试次数与取消学习之间隔得很远，前者是关于评价方式的建议，后者是关于教育目的的指控。

**例 2（中）** 某会议上：「你反对这个方案，那你就是希望公司继续亏下去。」

**分析**：错误发生在「那你就是」。反对某个方案，可能是认为有更好的方案，可能是认为时机不对。这里把「反对此案」直接等同于「接受最坏结果」，属于极端化改写。

**例 3（难）** 某博主发视频：「最近有人说要限制未成年人使用手机。说白了，这些人就是想让孩子跟社会脱节，最好回到没有网络的年代。这种想法对孩子有什么好处？一点都没有。」

**分析**：整段推理建立在「说白了」之后的那句改写上。原主张（限制使用时长）与改写版（切断网络、回到前互联网时代）差别极大。后面所有反问，针对的都是改写版。这段的说服力来自改写版足够荒谬。

## 反例训练

> 我完全理解你的意思，你是说我们应该把所有规则都取消，让每个人凭良心做事。这个想法很美好，但人性经不起这样的信任，所以我不能同意。

**问题所在**：『我完全理解』这四个字是包装。对方从未主张取消所有规则，也从未提到良心。友善的语气让人放松警惕，改写却在暗处完成。这属于稻草人的高级版：用体谅的姿态完成极端化。

**如何反驳**：不接受对方代拟的版本，把原话重新放回桌上。『我主张的是把这条流程从五道审批减到两道，其余规则不变。你刚才反驳的是「取消所有规则」，那不是我的观点。请针对「减到两道」说说你的顾虑。』

## 现实应用

- **广告**：把竞品的定位描述成极端版本，再攻击这个版本，从而回避正面比较价格与功能。
- **新闻评论**：标题用『某方要求全面放开』概括一份措辞谨慎的报告，读者记住的是标题。
- **职场**：『你的意思是领导的决策都错了？』一条技术意见被升级为对权威的挑战，讨论从此变成态度问题。

## 本节总结

**核心概念**：稻草人、观点重述、归谬法、偷换论题。

**关键规则**

1. 反驳之前先复述，复述必须能被对方认可。对方不认，说明打的是替身。
2. 判断标准：改写方向是否朝「更易打倒」偏；被纠正后是否仍重复旧版本。
3. 拆稻草人只用一个动作——把原话放回桌面。

**常见错误**：把「我理解为」当成「你就是这个意思」；为了赢而故意拔高对方主张；反过来，用「你在扎稻草人」躲避真正的反驳。

**需要掌握的能力**：在争论中随时分清「对方说的」与「我听到的」，并把这个差别说出来。
`,quiz:[{id:"s6-03-q1",type:"single",stem:"稻草人谬误的缺陷主要发生在论证的哪一环？",options:["在给出前提的环节，前提是假的","在复述对方观点的环节，被反驳的不是对方的主张","在推出结论的环节，犯了肯定后件","在用词的环节，同一个词出现了两种含义"],answer:"B",explanation:"稻草人的问题出在「重述」这一步。被驳倒的命题与对方实际主张的命题不同，因此驳倒替身对原主张毫无影响。其余选项描述的是前提虚假、形式无效与含混，各有各的位置。",skill:"稻草人的结构"},{id:"s6-03-q2",type:"judge",stem:"只要一个人在复述对手观点时出现了偏差，就构成稻草人谬误。",answer:!1,explanation:"偏差可能只是无意的误解。判断稻草人要看两点：偏差是否稳定地朝「更容易被打倒」的方向走；被纠正后是否仍重复那个已被否认的版本。误解会随纠正而修正，稻草人不会。",skill:"稻草人与误解"},{id:"s6-03-q3",type:"single",stem:"「照你这么说，动物也该有投票权了？」这句话最可能犯的谬误是：",options:["滑坡","稻草人","循环论证","诉诸情感"],answer:"B",explanation:"「照你这么说」是从对方的温和主张推出一个荒谬的极端结论，并把该极端结论归给对方。它与滑坡的区别在于：滑坡讲的是后果链条，稻草人讲的是观点被改写。",skill:"稻草人"},{id:"s6-03-q4",type:"multi",stem:"下列哪些做法可以有效防止自己在争论中扎稻草人？（多选）",options:["先用自己的话复述对方观点，并请对方确认","只引用对方最容易被误解的半句话","区分对方的主张与对方给出的理由","在反驳前标出对方原话中的限定条件"],answer:["A","C","D"],explanation:"B 恰恰是制造稻草人的常见手法。A 通过确认复述消除偏差，C 避免把「理由荒谬」误当成「主张荒谬」，D 保住限定条件不被抹掉。",skill:"避免稻草人"},{id:"s6-03-q5",type:"short",stem:"请说明稻草人与归谬法的区别，并指出为什么一个有效、一个无效。",keywords:[["原观点","原前提","原主张"],["改写","替换","极端化"],["推出荒谬","严格推出","接受前提"]],answer:"归谬法接受对方的原前提，严格推出一个荒谬结论，因此若推理无误，对方必须面对这个后果，反驳有效。稻草人先把对方观点替换成更极端的版本，再攻击这个替身，被驳倒的不是原主张，所以无效。",explanation:"两者的分水岭是「有没有换掉对手」。归谬法保留对手的全部前提，代价自负；稻草人换掉了前提，胜利是借来的。判断时只问一句：被反驳的那句话，是对方真的说过的吗？",skill:"稻草人与归谬法"}]},{id:"s6-04",no:62,code:"4.3",title:"滑坡",stage:6,chapter:"第4章 谬误",minutes:13,lead:"「今天让他多看十分钟动画片，明天他就要看一小时，后天就通宵，最后这孩子就废了。」很多家长真心相信这条链条。可如果每一环都只是「可能」，整条链的尽头为什么会被说成「必然」？",objectives:["写出滑坡论证的链条结构，并指出每一环缺失的论证","用「要中间环节、要概率、要刹车机制」三步检验滑坡","区分真实的风险预警与滑坡谬误"],concepts:["滑坡","后果链条","概率累积","刹车机制","连锁推理"],body:`
## 核心定义

**专业定义**：滑坡谬误指断言从某个起点出发会一路滑向某个可怕终点，却不给中间每一环提供论证，最后用终点的可怕来否定起点。

**通俗解释**：站在坡顶说，只要迈出第一步，就一定会滚到崖底。它把「可能」一路累加成「必然」，再用终点的惨状吓退第一步。

**典型结构**

$$A \\to B \\to C \\to \\cdots \\to Z \\quad Z \\text{ 极坏} \\quad \\therefore \\neg A$$

**三处可疑**

- 环节可疑：从 $A$ 到 $B$ 的机制从未说明，只靠「会」「必然」「迟早」连接。
- 概率可疑：即使每环有七成把握，五环之后也不到两成。
- 单向可疑：链条假设没有刹车、没有反馈、没有中途纠错。

> 与「连锁推理」的区别：连锁推理的每一环都有独立理由，允许逐段检验与逐段阻断；滑坡的关键缺陷正是每一环都空着，只靠终点吓人。

## 理论讲解

### 第一步：它表面在做什么

它在做风险提示。预测后果本来是论证的正当功能——很多决策确实要看长远影响。滑坡借用了这份正当性，所以听起来像负责任。

### 第二步：找出它实际错在哪一步

错在把链条的每一环都当成已经成立。要让它有效，必须补上一串条件句：$A \\to B$、$B \\to C$、$C \\to D$……这些条件句一个都没被论证。

更麻烦的是概率。即便每一环有 $0.8$ 的把握，五环之后终点出现的概率也只有 $0.8^{5}\\approx 0.33$。把五环的「可能」直接说成终点的「必然」，是这条论证最要命的地方。

### 第三步：三步检验法

第一，要中间环节。『请把从第一步到最后一步的每一环写出来，一共几环？』多数滑坡在这一问上就散了。

第二，要概率。『每一环发生的可能性大概多少，依据是什么？』答不出，说明这不是预测，是想象。

第三，要刹车。『有没有已经走过这条路的例子？他们滑到底了吗？中间有没有阻止它的机制？』现实中通常存在纠错机制：舆论反弹、成本上升、规则修补。

## 例题与分析

**例 1（易）** 「如果允许员工每周居家办公一天，下一步就会有人要求整周不来，最后公司就没人干活了。」

**分析**：错误发生在「下一步就会」。居家一天与整周不来之间没有机制说明，而「没人干活」更没有依据。中间至少缺两环：管理者为何无法设边界，考核为何无法衡量产出。

**例 2（中）** 某家长：「今天让他玩半小时游戏，明天他就要一小时，后天就通宵，最后就废了。」

**分析**：错误发生在「最后就废了」这一跳。它把时间延长等同于自控力持续下降，且忽略了家长本身可以在每一环设边界。这里还埋了事后归因的隐患：日后成绩下滑，这段预言会被当成先见之明。

**例 3（难）** 某评论文章：「只要允许一次例外，例外就会变成常态，规则就失去意义，最后谁都不再遵守规则。」

**分析**：错误发生在「例外就会变成常态」。它把「一次例外」与「常态化例外」当成同一件事，中间缺了三个条件：例外是否公开、是否有期限、是否需重新审议。这段还带预设色彩——它默认任何让步都是无底线让步。

## 反例训练

> A 市三年前放开路边摊，第一年摊贩数量增加四成，第二年占道投诉翻倍，第三年主干道通行效率下降一成二。所以我们这里绝不能放开。

**问题所在**：它有了链条和数据，比空口滑坡强得多，但每一环的因果归属仍未证明。投诉翻倍可能来自举报渠道变多，通行效率下降可能来自同期车辆增长。更关键的是，它把 A 市的结果直接搬到本地，忽略了人口密度与执法能力的差异。数据把滑坡包装成了研究。

**如何反驳**：不否认数据，只追问归属与外推。『这三年的变化里，有多少能归因于路边摊？同期还有哪些变量在变？本地与 A 市在人口密度和路网结构上差多少？如果限定经营时段和区域，中间那几环还成立吗？』

## 现实应用

- **广告**：『现在不买，明年价格翻倍』『不给孩子报班，将来考不上大学』。用终点施压，跳过中间所有环节。
- **新闻**：政策讨论里常见的『一旦开了这个口子』。看到这四个字，就要问口子有多大、谁在把门。
- **职场**：『这次让一步，下次就没底线了。』可以回应：『我们让的是交付时间，不是验收标准。要不要把不可让的条款先写下来？』

## 本节总结

**核心概念**：滑坡、后果链条、概率累积、刹车机制、连锁推理。

**关键规则**

1. 每一步都要有机制，没有机制的链条只是想象。
2. 概率不会自动累加成必然，多环之后反而会衰减。
3. 检验滑坡只问三件事：中间环节、每环概率、有没有刹车。

**常见错误**：把「有可能」当成「一定会」；把「已经有人这样滑下去」当成「所有人都会」。

**需要掌握的能力**：听到长链条预测时，能把它拆成环节，并判断哪一环最脆弱。
`,quiz:[{id:"s6-04-q1",type:"single",stem:"滑坡谬误最关键的技术缺陷是：",options:["终点的后果被夸大了","中间每一环的推导都没有给出论证，却被当成已成立","起点本身就是一个假命题","使用了太多专业术语，普通人无法理解"],answer:"B",explanation:"终点是否夸大是另一个问题，滑坡的结构性毛病在于链条中间空着。即使终点确实可怕，只要中间环节没被论证，也无法从起点推出终点。",skill:"滑坡的结构"},{id:"s6-04-q2",type:"judge",stem:"只要一个论证提到了未来的严重后果，它就构成滑坡谬误。",answer:!1,explanation:"预测后果是论证的正当功能。区分标准在于是否给出机制、概率与可观测指标。给出机制并承认存在刹车机制的预警是合理推论；只靠「一旦……最终必然……」连接的才是滑坡。",skill:"滑坡与风险预警"},{id:"s6-04-q3",type:"single",stem:"「今天允许带宠物进办公室，明天就会有人带羊进来，后天办公室就成农场了。」这段话的主要问题是：",options:["把「允许带宠物」这一起点说错了","缺少从「带宠物」到「带羊」的机制论证，属于滑坡","犯了循环论证，结论已含在前提里","犯了合成谬误，把部分属性推给整体"],answer:"B",explanation:"它靠夸张的链条制造荒谬感，每一环都没有机制说明。这不是合成谬误：合成是把部分的属性推给整体，这里是一条时间上的后果链。",skill:"滑坡"},{id:"s6-04-q4",type:"multi",stem:"检验一个滑坡论证时，应当追问哪些问题？（多选）",options:["从第一步到最后一步，中间有哪几环","每一环发生的可能性有多大，依据是什么","说话人是不是一个诚实的人","这条路上有没有出现过的刹车或纠错机制"],answer:["A","B","D"],explanation:"C 属于人身攻击的思路，与链条是否成立无关。A 要环节，B 要概率，D 要反例与纠错机制，这三问能把绝大多数滑坡拆开。",skill:"检验滑坡"},{id:"s6-04-q5",type:"short",stem:"某主管说：「这次要是同意弹性打卡，下周就有人十点才来，下个月整个团队就散了。」请指出这段话的问题，并写出两句你的回应。",keywords:[["中间环节","机制","没有论证"],["概率","可能","必然"],["边界","考核","规则"]],answer:"它把「同意弹性打卡」到「团队散掉」之间的每一环都当成必然，既没给机制也没给概率。可以回应：请说明从弹性打卡到十点才来之间的具体机制是什么；如果我们同时规定核心时段必须在岗，并按产出考核，中间那两环还成立吗。",explanation:"要点是识别链条空缺与概率跳跃，并用「要机制、要边界」的方式把讨论拉回可操作的层面。给出边界条件，往往就能让滑坡失去着力点。",skill:"滑坡的应对"}]},{id:"s6-05",no:63,code:"4.3",title:"虚假两难",stage:6,chapter:"第4章 谬误",minutes:12,lead:"「要么全力支持，要么就是反对。」这句话为什么会让人闭嘴？明明心里还有第三种态度——支持目标但不认同做法。是什么把一个本来宽阔的选择空间，压成了窄窄的两条缝？",objectives:["写出虚假两难的析取结构，并指出被隐去的第三选项","用「举出可实际选择的第三项」这一动作检验两难是否真实","在谈判与争论中，把被压缩的选项重新摊开"],concepts:["虚假两难","析取前提","穷尽性","互斥性","中间地带"],body:`
## 核心定义

**专业定义**：虚假两难指把一个存在多种可能的处境，描述成只有两个互斥选项，并要求在其中作出选择，从而逼出说话人想要的答案。

**通俗解释**：把一条宽路画成两道窄门，告诉你只能进左边或右边。你忙着选门，忘了墙是可以绕过去的。

**典型结构**

$$P \\lor Q \\quad \\neg P \\quad \\therefore Q$$

这个推理形式本身有效——否定析取的一支，可以推出另一支。问题全在第一个前提 $P \\lor Q$：它悄悄声称只有两个选项。真实选项集往往是 $P \\lor Q \\lor R \\lor \\cdots$。只要存在一个可实际选择的 $R$，从 $\\neg P$ 就推不出 $Q$。

> 与「真实两难」的区别：真实两难的两个选项确实互斥且穷尽，比如「这份申请要么被批准，要么不被批准」，没有第三种可能。判断方法很朴素：能不能举出一个既不属于 $P$ 也不属于 $Q$、且现实可选项。

## 理论讲解

### 第一步：它表面在做什么

它在帮助决策。面对复杂局面，压缩选项、逼出立场，本来是管理者的常用手段。很多真实决策确实需要在两个方案中择一，所以这种句式有很强的正当性外观。

### 第二步：找出它实际错在哪一步

错在析取前提的穷尽性。说话人完成了两件事：把选项减到两个；把两个都设成极端，让其中一个明显不可接受。一旦你接受这个框架，结论就是被安排好的。

值得注意的是，虚假两难常与恐惧诉求联手。先强调时间紧迫、后果严重，再压缩选项，让人来不及问「还有没有别的办法」。

### 第三步：识别与拆解

信号词：『要么……要么』『只有两条路』『你不……就是……』『没有中间地带』。

提问：这两项真的互斥吗？能不能两者都要？能不能只要一部分？谁规定了只能二选一？

拆解动作：不要在接受框架后再选，先在框架上开口子。『我先不接受这个二选一。除了全撤和加倍投入，还有缩范围、延周期、换供应商三条路，我们先用十分钟过一遍。』

## 例题与分析

**例 1（易）** 「这个项目要么现在全撤，要么加倍投入，没有第三条路。」

**分析**：错误发生在「没有第三条路」。实际至少有三条：缩小范围先做核心模块、延长周期分摊成本、更换合作方重谈价格。

**例 2（中）** 「你不支持这个方案，就是反对改革。」

**分析**：错误发生在「就是反对改革」。「支持改革」与「支持这个方案」是两个层次的命题。一个人完全可以支持改革而反对这份方案，甚至正因支持改革才反对它。这里把对手段的分歧升级为对目标的分歧。

**例 3（难）** 某公司内部信：「面对市场变化，我们只有两个选择：要么全员降薪两成，要么裁员三成。」

**分析**：错误发生在「只有两个选择」。可选项还包括管理层先降薪、暂停招聘与差旅、缩减非核心业务。这段的说服机制值得注意——它先用「市场变化」制造紧迫，再把两个都很痛的选项摆出来，让员工在恐惧中接受一个，而不去追问是否还有成本更低的办法。

## 反例训练

> 我不是让你二选一。你可以继续用现在这套流程，也可以换成我们的系统。区别只是你愿意每天多花两小时，还是每天多花十分钟。

**问题所在**：它口头否认二选一，实际做了更隐蔽的压缩——把「保持现状」重新定义成「每天多花两小时」。真实选项（继续用现有流程、不做那些额外报表）被偷换掉了。这类手法比直接的『要么……要么』更难察觉，因为它先拆掉了你的防备。

**如何反驳**：把被改写的选项还原。『第三个选项是继续用现有流程，但不做那些重复录入。这个选项你为什么没算进去？另外，两小时这个数字是怎么测出来的，样本是几个团队？』

## 现实应用

- **广告**：『要么现在下单，要么明年再等一年。』真实选项里有「不买」「买个更便宜的」。
- **新闻**：国际报道中的『只有两条路』句式，通常省略了谈判、拖延、局部妥协这些灰色路径。
- **职场**：『你要么接受这个排期，要么这个项目就别做了。』可以回应：『我接受目标，但不接受这个排期。能不能先砍掉两个次要功能？』

## 本节总结

**核心概念**：虚假两难、析取前提、穷尽性、互斥性、中间地带。

**关键规则**

1. 两难是否成立，只看两项是否互斥且穷尽，与语气强不强硬无关。
2. 破解的位置在前提，不在结论。先开框架，再谈选择。
3. 选项越极端，越要怀疑中间地带被抹掉了。

**常见错误**：接受对方给的框架后再争论；把「我不同意这个方案」听成「我反对这个目标」。

**需要掌握的能力**：在任何「要么……要么」出现时，先花十秒找第三项。
`,quiz:[{id:"s6-05-q1",type:"single",stem:"虚假两难的问题出在论证的哪一部分？",options:["析取前提不穷尽，漏掉了其他可选项","否定前件，形式无效","结论超出了前提的范围","使用了含义不明的词"],answer:"A",explanation:"从「非 P 即 Q」加「非 P」推出「Q」，形式是有效的。毛病在前提：它声称只有两项，实际还有第三项。前提不穷尽，整个两难就塌了。",skill:"虚假两难的结构"},{id:"s6-05-q2",type:"judge",stem:"「这份申请要么被批准，要么不被批准」也是虚假两难。",answer:!1,explanation:"这是一个真实的两难，两项互斥且穷尽，没有第三种可能。虚假两难的判定标准是能否举出可实际选择的第三项，而不是句式里有没有「要么」。",skill:"真实两难"},{id:"s6-05-q3",type:"single",stem:"「你不支持这个方案，就是反对改革。」这句话最主要的毛病是：",options:["把「反对某方案」与「反对改革」当成同一件事","样本太小，不能代表全部员工","结论已经包含在前提之中","用词含混，读者无法理解"],answer:"A",explanation:"它把对具体手段的分歧升级为对目标的分歧，从而取消了「支持改革但反对此方案」这一实际存在的立场。这既像虚假两难，也带有道德绑架的成分。",skill:"虚假两难"},{id:"s6-05-q4",type:"multi",stem:"破解虚假两难，下列哪些做法是有效的？（多选）",options:["举出一个既不属于 A 也不属于 B 的可选方案","先在两个选项里挑一个不那么坏的","追问这两个选项是否真的互斥","指出「必须现在决定」这一时间压力是人为设置的"],answer:["A","C","D"],explanation:"B 等于接受框架，之后所有讨论都在对方设定的空间里进行。A 直接攻击穷尽性，C 攻击互斥性，D 拆掉紧迫感，三者都能把框架打开。",skill:"破解虚假两难"},{id:"s6-05-q5",type:"short",stem:"某主管说：「这个季度只有两个选择：要么全员加班，要么接受业绩不达标。」请指出其中的谬误，并写出你的回应。",keywords:[["虚假两难","两难","只有两个"],["第三","其他选项","中间"],["优先","砍功能","外包","延期"]],answer:"这是虚假两难，它把「加班」与「不达标」设为仅有的两项，漏掉了缩减范围、调整目标、临时外包、延期交付等选项。可以回应：我们先把目标拆开，看哪些是必须保的、哪些可以放到下季度，再算需要多少人力。",explanation:"关键是先指出选项不穷尽，再给出至少一个具体可行的第三项。只喊「你这是虚假两难」而不给替代方案，通常无法说服对方。",skill:"虚假两难"}]},{id:"s6-06",no:64,code:"4.3",title:"诉诸权威",stage:6,chapter:"第4章 谬误",minutes:13,lead:"一位拿过奖的演员说这款奶粉更安全，一位经济学家谈起了养生，一位院士为某款算法背书。名头是真的，话也可能是真的，可为什么把这些话当理由，仍然可能什么都没证明？",objectives:["用相关性、共识、专业范围三条标准检验一次权威引用","区分合理引用专家意见与诉诸权威谬误","在软文与公关稿中定位权威被滥用的具体位置"],concepts:["诉诸权威","专业相关性","学界共识","越界发言","可验证性"],body:`
## 核心定义

**专业定义**：诉诸权威指用某位权威人士的意见替代论证本身，并据此断定结论为真，而未检验该权威与议题是否相关、该领域是否有共识。

**通俗解释**：因为是他说的，所以是真的。这句话省略了最关键的一环——他说的这件事，他懂吗，别人同意吗。

**典型结构**

$$\\text{专家 } X \\text{ 断言 } P \\quad X \\text{ 有威望} \\quad \\therefore P$$

要让这个推理成立，需要补上两个隐含前提：$X$ 在该议题上具备专业资格；$X$ 的判断代表该领域的可靠结论。这两个前提通常都没被检验。

> 与「诉诸大众」的区别：一个借少数人的头衔，一个借多数人的人头。相同之处在于，都用「谁相信」替换了「凭什么」。

## 理论讲解

### 第一步：它表面在做什么

它在借用专业分工。现代社会里，每个人都必须依赖专家——你不会自己去验证疫苗的临床试验。所以「专家说」本身是一种合理的信息获取方式，这也是诉诸权威难以被识破的原因。

### 第二步：找出它实际错在哪一步

错在从「某人说 $P$」直接跳到「$P$ 为真」，跳过了三项检查。

第一，相关性。他的专业与议题对得上吗？营养学家谈食品成分是相干的，演员谈奶粉安全性则不相干。

第二，共识。该领域内部是否真有共识？很多议题存在激烈分歧，只引一方等于筛选证据。一项研究不等于共识。

第三，范围。他是否在自己专业范围内发言？一位院士在自己领域内是权威，跨到别的领域就只是普通人。

### 第三步：识别与追问

信号词：『专家表示』『权威认证』『某大学研究证明』『业内公认』『院士领衔』。

提问：这位专家的专业是什么？这句话是在哪个场合、对谁说的？该领域的主流意见是什么，有没有相反研究？这个结论有没有可独立复核的数据？

一句好用的追问：『除了他说的，还有别的证据吗？』如果答案是「没有，就是他说的」，权威就已在替代论证。

## 例题与分析

**例 1（易）** 「这款奶粉是某明星推荐的，肯定安全。」

**分析**：错误发生在「肯定安全」。明星的专业是表演，与配方安全无关，相关性这一关就没过。个体经验也无法证明产品对所有人安全。

**例 2（中）** 某公司宣传稿：「我们的风控算法由三位院士鉴定通过。」后文提到，三位院士的研究方向是材料科学。

**分析**：错误发生在「由三位院士鉴定」被当作有效性证明。头衔为真，专业不对口。这类宣传的高明之处在于，它说的每个事实都真，误导只发生在读者的推论里——读者自动补上了「院士懂算法」这个前提。

**例 3（难）** 某健康类软文：「某高校一项研究指出，每天一杯红酒有益心脏，所以你也应该每天喝一杯。」

**分析**：这里叠了两层。第一层，把单一研究当成学界共识——该领域后续结论并不一致，文章只引了支持自己的一方。第二层，从「观察性研究显示相关」跳到「所以你应该喝」，缺了因果证据与剂量讨论。第二层其实是混淆相关与因果，与诉诸权威叠在一起用。

## 反例训练

> 这不是我个人意见。国内五位三甲医院主任医师联合署名的一份文件里写得很清楚，第几条你可以自己查。

**问题所在**：形式上它做对了——给了可查的出处。伪装藏在细节里：那份文件是某品牌资助的圆桌纪要，不是学会发布的诊疗共识；署名专家中三位已退休；文件发布于八年前，现行指南已经修改。每个事实都真，只有「共识」这两个字被偷偷放大了。

**如何反驳**：不问人名，问文件的身份。『这份文件由哪个机构发布，是否经过同行评议？现在是第几版，最近一次修订是什么时候？现行指南在这一条上怎么说？』

## 现实应用

- **广告**：白大褂、实验室、『诺贝尔奖团队研发』。看它有没有给出发言者的姓名、机构与具体结论。
- **新闻**：健康版与科技版最爱用『研究显示』。负责任的报道会写样本量、研究类型与局限，软文只写结论。
- **职场**：『这是行业惯例，某大厂就这么做。』可以回应：『他们这么做的背景是什么？我们的规模与约束一样吗？』

## 本节总结

**核心概念**：诉诸权威、专业相关性、学界共识、越界发言、可验证性。

**关键规则**

1. 权威只在相关领域内、且该领域有共识时，才构成理由。
2. 单一研究不是共识，一个专家不是学界。
3. 最后一道保险，是问「除了他说的，还有没有独立证据」。

**常见错误**：看到头衔就停止思考；把有分歧的议题说成「学界公认」；反过来，用「你这是诉诸权威」拒绝一切自己不爱听的结论。

**需要掌握的能力**：拿到一条专家意见，三十秒内判断它属于合理引用还是权威替代。
`,quiz:[{id:"s6-06-q1",type:"single",stem:"判断一次权威引用是否构成谬误，最核心的检查是：",options:["这位专家的知名度高不高","这位专家的专业与议题是否相关，该领域是否有共识","专家的年龄与资历","专家本人是否受过高等教育"],answer:"B",explanation:"名气、年纪、学历都不能替代相关性判断。一个不出名的研究者在其领域内的结论，比一位名人跨界的表态更可信。共识这一关同样关键，因为存在分歧的领域不能只引一方。",skill:"诉诸权威的检验"},{id:"s6-06-q2",type:"judge",stem:"在论文里引用本领域的权威研究，也属于诉诸权威谬误。",answer:!1,explanation:"合理引用要过三关：专业相关、领域内有共识、未越界。满足条件的引用是理性做法，因为个人无法亲自验证所有结论。只有把「某人说」直接当成「所以为真」，才构成谬误。",skill:"合理引用与诉诸权威"},{id:"s6-06-q3",type:"single",stem:"「这款学习机由某奥运冠军推荐，对提高成绩一定有帮助。」这段话的问题在于：",options:["奥运冠军的专业与学习机效果不相关","结论超出了前提的统计范围","把整体属性推给了部分","同一个词出现了两种含义"],answer:"A",explanation:"运动成绩与教育产品的效果之间没有专业关联，相关性这一关未过。推荐可能出于商业合作，也可能是真实体验，但个体体验无法支持「一定有帮助」这一普遍结论。",skill:"诉诸权威"},{id:"s6-06-q4",type:"multi",stem:"看到「某大学研究证明」这类说法，应当追问哪些信息？（多选）",options:["研究的样本量与研究对象是谁","这是单项研究还是已有共识","研究者的个人品行如何","研究是否有利益相关方资助"],answer:["A","B","D"],explanation:"C 属于人身攻击的思路，与结论成立与否无关。样本决定结论的适用范围，共识决定它能否代表领域意见，资助方关系到潜在偏向，这三项都直接影响可信度。",skill:"检验权威引用"},{id:"s6-06-q5",type:"short",stem:"请写出检验一条「专家说」的三条标准，并说明为什么满足这三条的引用不算谬误。",keywords:[["相关","专业","领域"],["共识","分歧","主流"],["范围","越界","本行"]],answer:"三条标准是：专家专业与议题相关；该领域内存在共识而非仅有少数派意见；专家在自己专业范围内发言。三条都满足时，引用专家是合理的信息获取方式，因为个人无法亲自验证所有专业结论，社会必须依赖专业分工。",explanation:"这三条分别对应相关、共识、范围。它们的共同作用是保证「专家说」真的能提高结论为真的概率。缺任何一条，头衔就会替代论证。",skill:"诉诸权威的检验"}]},{id:"s6-07",no:65,code:"4.3",title:"诉诸大众与诉诸情感",stage:6,chapter:"第4章 谬误",minutes:13,lead:"十万盒的销量、刷屏的热搜、满屏的「所有人都知道」。人数多到这个程度，好像就已经证明了什么。可历史上多数人相信过的事情，后来被推翻的还少吗？",objectives:["区分诉诸大众与诉诸情感各自的推理结构","说明「多数人相信」在什么意义上可以作为证据，在什么意义上不能","辨认怜悯、恐惧、仇恨三种情感诉求的触发点与替代对象"],concepts:["诉诸大众","诉诸情感","社会证明","恐惧诉求","道德绑架"],body:`
## 核心定义

**专业定义**：诉诸大众指以「多数人相信或都在做」作为结论成立的依据；诉诸情感指以怜悯、恐惧、仇恨等情绪反应替代对论证的审查。

**通俗解释**：一个借人数，一个借情绪。前者说「这么多人都信，不会错」，后者说「你这么想，还是人吗」。

**典型结构**

$$\\text{多数人相信 } P \\quad \\therefore P \\text{ 为真}$$

$$\\text{情绪 } E \\text{ 被激起} \\quad \\therefore P \\text{ 成立}$$

两个形式都缺同一座桥：相信的人数与情绪强度，都不改变命题的真假。

> 与「诉诸权威」的区别：诉诸权威借少数人的头衔，诉诸大众借多数人的数量。前者说「他懂」，后者说「大家都懂」。两者都绕开了论证。

## 理论讲解

### 第一步：它们表面在做什么

诉诸大众提供的是社会证明：信息不足时，跟随多数是一种省力的策略，很多时候也确实有效。诉诸情感提供的是道德反应：看到孩子受苦而心软，本身就是正常的道德能力。

### 第二步：找出它们实际错在哪一步

诉诸大众错在把「相信的人数」当成了「为真的概率」。多数人可能基于同样的错误信息，也可能只是随大流。人数只说明这个说法传播得广。

诉诸情感错在让情绪替代了审查。情绪本身没有错，问题是一旦被点燃，人就不再追问理由。恐惧让人高估风险，怜悯让人跳过可行性，仇恨让人接受任何指向敌人的结论。

### 第三步：识别与拆解

诉诸大众的信号词：『大家都在』『所有人都知道』『销量第一』『有良知的人都会』。

诉诸情感分三种触发点。怜悯：『你忍心吗』『他们那么可怜』。恐惧：『不买就完了』『再不管就来不及了』。仇恨：『都是他们害的』。

通用提问：如果所有人都错了呢？把情绪拿掉，这段话还剩下什么理由？

## 例题与分析

**例 1（易）** 「这款面膜卖了十万盒，肯定好用。」

**分析**：错误发生在「肯定好用」。销量反映营销能力与价格策略，与产品效果只有很弱的关联。十万个买家可能都在试用，也可能都在重复购买，这两种情况对「好用」的支持力差别很大。

**例 2（中）** 「你忍心看着这些孩子在危房里上课吗？所以这个改造方案必须通过。」

**分析**：错误发生在「所以必须通过」。前半句唤起怜悯，它支持的结论最多是「应当尽快改善校舍」。而「这个方案必须通过」是关于造价、工期、招标程序的技术判断。情绪把这两件事缝在了一起。

**例 3（难）** 某自媒体：「所有有良知的人都应该支持这项倡议。反对的人，不是蠢就是坏。」

**分析**：这句叠了三层。第一层诉诸大众——用「所有有良知的人」制造人数压力；第二层诉诸情感——用道德身份唤起认同与羞耻；第三层人身攻击——把反对者预先定性。最关键的错误在「所有有良知的人」这个限定上：它把支持与有良知绑定，取消了反对的合法空间。

## 反例训练

> 我们的用户调研显示，87% 的受访者认为这项功能很重要。所以我们应该优先开发它。

**问题所在**：三层问题。第一，「认为重要」与「应当优先」之间隔着紧迫性、可行性、成本。第二，87% 是受访者的比例，如果问卷只投放在老用户社群里，这个数字反映的是老用户偏好。第三，没有与其他需求比较——所有功能可能都有八成以上的人说重要。

**如何反驳**：『这个 87% 是怎么抽样的，样本里新用户占比多少？如果把另外五个需求一起列出来让人排序，它排第几？愿意为此付费的比例是多少？』把「多少人认为重要」换成「相对优先级」，数据才会说话。

## 现实应用

- **广告**：『销量领先』『百万家庭的选择』。看它有没有说明统计口径与比较对象。
- **新闻**：热搜是注意力指标，不是重要性指标，更不是真实性指标。
- **职场**：『团队里大家都觉得你沟通有问题。』可以回应：『具体是哪几位，在哪些事上？能不能把最近三次协作记录过一遍？』

## 本节总结

**核心概念**：诉诸大众、诉诸情感、社会证明、恐惧诉求、道德绑架。

**关键规则**

1. 相信的人数不改变命题真假，只改变它传播的广度。
2. 民意可以证明「人们想要什么」，不能证明「什么是真的」。
3. 情绪的出现不是错误，让情绪替代审查才是错误。

**常见错误**：把销量、热搜、点赞当成质量证明；把「你忍心吗」当成论据；反过来，扣一顶「诉诸情感」的帽子否认对方的一切表达。

**需要掌握的能力**：在情绪被点燃的瞬间，仍能问出「把情绪拿掉，还剩什么理由」。
`,quiz:[{id:"s6-07-q1",type:"single",stem:"「这款课程有五十万人报名，肯定值得学。」这句话的推理缺陷是：",options:["把报名人数当成了课程质量的证据","结论超出了前提的时间范围","把整体的属性推给了部分","同一个词在两处含义不同"],answer:"A",explanation:"报名人数受价格、推广、从众心理影响，与课程质量只有弱关联。这是诉诸大众。要判断质量，得看完成率、学习效果、内容是否可验证。",skill:"诉诸大众"},{id:"s6-07-q2",type:"judge",stem:"在论证中使用情绪化的语言，就一定构成诉诸情感谬误。",answer:!1,explanation:"情绪表达本身不是谬误。受害者陈述痛苦、医生描述风险，都合理地带有情绪。构成谬误的是用情绪替代理由——当被问到依据时，只剩下情绪。",skill:"诉诸情感"},{id:"s6-07-q3",type:"single",stem:"「你忍心看着这些孩子继续在危房里上课吗？所以这笔预算必须批给我们部门。」主要问题在于：",options:["怜悯被用来替代对具体方案的论证","样本太小，无法代表所有学校","结论已经包含在前提里","论证形式无效，犯了否定前件"],answer:"A",explanation:"怜悯支持的结论是「应当尽快改善校舍」，而「预算必须批给这个部门」是关于具体方案的技术判断，需要造价、工期、资质等论证。情绪把两个层次的结论缝在了一起。",skill:"诉诸情感"},{id:"s6-07-q4",type:"multi",stem:"下列哪些属于诉诸大众的典型表达？（多选）",options:["大家都在用，你还犹豫什么","有良知的人都应该支持","这位专家在这个领域研究了三十年","这是今年的流行趋势，跟不上就落伍了"],answer:["A","B","D"],explanation:"C 借的是头衔与资历，属于诉诸权威。A、D 借人数与潮流，B 借「有良知的人」这一想象共同体，都是诉诸大众的变体。",skill:"诉诸大众的识别"},{id:"s6-07-q5",type:"short",stem:"请说明：民意调查结果在什么意义上可以支持一个决策，在什么意义上不能？",keywords:[["想要","偏好","需求"],["真假","正确","质量"],["不能替代","区分","两件事"]],answer:"民意可以证明人们想要什么、偏好什么，这对资源分配和优先级很有价值。它不能证明某个判断是真的、某个产品是好的。多数人可能基于同样的错误信息作判断，也可能只是随大流。所以民意是需求的证据，不是质量的证据。",explanation:"核心是区分「人们想要」与「事情为真」。前者是偏好事实，后者是命题真假。把偏好当成真理，就是诉诸大众；把两者分开，民意调查才是有用的工具。",skill:"民意与真理"}]},{id:"s6-08",no:66,code:"4.5",title:"循环论证与预设结论",stage:6,chapter:"第4章 谬误",minutes:14,lead:"「这本书最可靠，因为书里写的都是真的。」听起来像给了理由，可你再念一遍，会发现理由和结论是同一句话。为什么有些论证转了一圈，只是把结论换了件衣服又带回来？",objectives:["识别直接循环、间接循环与预设结论三种形态","用「假设结论为假，前提还站得住吗」这一测试检验乞题","指出复杂问句中已被偷偷塞进去的预设"],concepts:["循环论证","乞题","预设结论","复杂问句","独立支持"],body:`
## 核心定义

**专业定义**：循环论证指前提的真依赖于结论的真，或以结论的改写形式充当前提，因而没有为结论提供任何独立支持。

**通俗解释**：拿结论给自己作证。看起来走了一圈，其实原地没动。

**典型结构**

$$P \\therefore P$$

更常见的是伪装版：

$$P' \\therefore P \\quad \\text{其中 } P' \\text{ 只是 } P \\text{ 的换词说法}$$

**三种形态**

- **直接循环**：『这本书可靠，因为它说的都是真的。』
- **间接循环**：$A$ 因为 $B$，$B$ 因为 $A$。『他值得信任，因为他不撒谎；你怎么知道他不撒谎？因为他值得信任。』
- **预设结论**：把待证的东西塞进前提。『既然大家都承认这个方案有缺陷，我们今天只讨论怎么补救。』——「有缺陷」本身还没被证明。

> 与「有效但琐碎的推理」的区别：$P \\therefore P$ 在形式上有效——前提真则结论真，这一点无可指摘。它的问题不在形式，在于毫无信息量：不提供独立支持的论证，无法增加结论的可信度。

## 理论讲解

### 第一步：它表面在做什么

它在履行论证的基本义务：给出理由。而且理由往往听起来很贴切，与结论高度一致——正因为它就是结论本身，所以看起来特别「对题」。

### 第二步：找出它实际错在哪一步

错在独立性的缺失。论证之所以能提升结论的可信度，靠的是前提提供了结论之外的信息。若前提为真只能靠结论为真来保证，整段话就在原地打转。

一个可靠的测试：**假设结论为假，前提还站得住吗？**

以「这本书可靠，因为书里写的都是真的」为例。假设这本书不可靠，那么「书里写的都是真的」这句也就不能成立了。前提随结论一起倒，说明它没有独立支撑。

### 第三步：识别与拆解

信号词：『众所周知』『不言而喻』『既然……当然』『正如……所表明的』『本来就是』。

提问：这个前提需要什么来支持？它的支持会不会又回到结论？这句话是在陈述事实，还是在重复立场？

拆解动作：把结论和前提并排写下来，让重复暴露。『你说这个方案可行，因为它是可执行的。可行与可执行是同一件事。请给我一个不依赖「可行」二字的理由。』

## 例题与分析

**例 1（易）** 「这本书最可靠，因为书里说的都是真的。」

**分析**：错误发生在「因为」后面。「书里说的都是真的」与「这本书可靠」是同义反复。整句话相当于说「这本书可靠，因为它可靠」。

**例 2（中）** 「他说自己没撒谎，因为他从不撒谎。」

**分析**：错误发生在「因为他从不撒谎」。这个前提本身就需要「他这次没撒谎」来支撑。间接循环的特点是两头互相担保，任何一头都不落地。

**例 3（难）** 某公司内部论证：「这个岗位必须加班，因为这个岗位的工作量需要加班才能完成。」

**分析**：错误发生在「因为」之后。「工作量需要加班才能完成」听起来是客观陈述，实际是「必须加班」的改写。它没有回答真正的问题：工作量为什么这么大，能不能减，能不能加人。这类循环在职场很常见，因为换词之后听起来像在陈述客观约束。

## 反例训练

> 我们之所以相信这份报告，是因为它出自独立第三方；它之所以算独立第三方，是因为不受任何利益方影响；这一点报告开头的声明里已经写明了。

**问题所在**：声明的可信度依赖报告本身，报告的可信度又依赖声明。三段话首尾相接，形成一个闭环，闭环里没有任何外部证据。它比直接循环更难识破，因为每一环看起来都在引入新信息。

**如何反驳**：从闭环上找一个出口。『这份声明的核实途径是什么？有没有外部审计、公开的资助方名单、可查的注册信息？如果没有，那「独立第三方」目前只是一个自我描述。』

## 现实应用

- **广告**：『我们的效果好，因为用户都说效果好。』用户说好，可能因为广告告诉他们效果好。看有没有独立测评。
- **新闻**：『据知情人士透露，此事性质严重。』知情人士是谁，如何得知，往往正是需要证明的部分。
- **职场**：绩效评估里的循环——『你不够主动』『怎么算主动』『像小张那样』。把标准写下来，循环就现形了。

## 本节总结

**核心概念**：循环论证、乞题、预设结论、复杂问句、独立支持。

**关键规则**

1. 前提必须提供结论之外的信息，否则论证不增加任何可信度。
2. 检验方法只有一个：假设结论为假，看前提是否还站得住。
3. 遇到问题先看它预设了什么，再决定要不要回答。

**常见错误**：把同义反复当成理由充分；被复杂问句带走，忙着解释时间与程度，忘了否认那个预设。

**需要掌握的能力**：把一段论证压缩成「A 因为 B」，然后判断 B 是否只是 A 的另一种说法。
`,quiz:[{id:"s6-08-q1",type:"single",stem:"循环论证最核心的缺陷是：",options:["前提是假的","前提没有为结论提供独立于结论的支持","结论超出了前提的范围","论证形式无效"],answer:"B",explanation:"循环论证的形式往往有效（P 所以 P 在形式上无可指摘），前提也未必假。它的问题是没有增加任何信息，因此无法提升结论的可信度。这与前提虚假、形式无效都不同。",skill:"循环论证的结构"},{id:"s6-08-q2",type:"judge",stem:"「你最近还在偷税吗？」这个问题本身构成了预设结论的谬误。",answer:!0,explanation:"这是典型的复杂问句。无论回答「还在」还是「不了」，都承认了曾经偷税。正确处理是先拆预设：我没有偷税，这个问题不成立。",skill:"复杂问句"},{id:"s6-08-q3",type:"single",stem:"「他值得信任，因为他从不撒谎；他不撒谎，因为他值得信任。」这属于：",options:["直接循环","间接循环","复杂问句","以偏概全"],answer:"B",explanation:"两句互相担保，A 靠 B 支持，B 靠 A 支持，任何一头都没有独立依据。直接循环是一句话内重复，间接循环是两句互证。",skill:"间接循环"},{id:"s6-08-q4",type:"multi",stem:"检验一段论证是否循环，可以用哪些方法？（多选）",options:["假设结论为假，看前提是否还成立","把结论与前提并排写出，看是否只是换词","看说话人的态度是否真诚","追问前提本身依赖什么来支持"],answer:["A","B","D"],explanation:"C 与论证结构无关，真诚的人也会循环。A 测试独立性，B 让重复显形，D 顺着支持链条追下去，三者都能暴露闭环。",skill:"检验循环论证"},{id:"s6-08-q5",type:"short",stem:"有人说：「这个方案是可行的，因为它具备可执行性。」请指出问题，并写出一句追问。",keywords:[["同义","换词","循环"],["独立","没有新信息","原地"],["依据","证据","具体"]],answer:"「可行」与「具备可执行性」是同一个意思，前提只是结论的换词说法，没有提供独立支持，属于循环论证。可以追问：具体是哪几项条件让它可执行，预算、人手、时间各是什么情况，有没有已经做过的小规模验证。",explanation:"识别循环的关键是看两句话是否在说同一件事。破解的办法是把抽象形容词换成可检验的具体条件，一旦要求具体化，循环就没有藏身之处。",skill:"循环论证"}]},{id:"s6-09",no:67,code:"4.4",title:"以偏概全与不当归纳",stage:6,chapter:"第4章 谬误",minutes:13,lead:"「我认识的三个做这行的都赚了，这行肯定赚钱。」三个人的经验，凭什么能代表一个行业？更奇怪的是，这句话听上去不像胡说，甚至有点像经验之谈。经验的边界到底在哪里？",objectives:["写出以偏概全的推论结构，并指出样本在数量、随机性上的缺陷","区分全称命题与统计命题，说明举反例在两种命题上的不同作用","辨认诉诸无知、轻率概括、忽视基础比率这几个同族谬误"],concepts:["以偏概全","样本代表性","随机抽样","诉诸无知","基础比率"],body:`
## 核心定义

**专业定义**：以偏概全指从过小、不随机或与总体不匹配的样本推出关于总体的结论。

**通俗解释**：尝了一口汤就说整锅都咸，可这一口是从锅底舀的。

**典型结构**

$$\\text{样本 } S \\text{ 中有 } x\\% \\text{ 具有 } F \\quad \\therefore \\text{总体中约有 } x\\% \\text{ 具有 } F$$

要让这个推论成立，需要三个条件：样本足够大、随机抽取、能代表总体。三者缺一，结论就失去支撑。

**同族的几种不当归纳**

- **轻率概括**：样本极少就下普遍结论。『我遇到的两个客服都很凶，这家公司服务很差。』
- **诉诸无知**：没有证据证明 $P$ 为假，就断定 $P$ 为真。
- **忽视基础比率**：只看个案命中率，忘了总体中该现象本来就罕见。

> 与「合理的统计推断」的区别：合理的归纳会报告样本量、抽样方式与误差范围，把结论说成「大约」「在某个区间内」。以偏概全则把样本结论直接当成总体定论，且常常不交代样本是怎么来的。

## 理论讲解

### 第一步：它表面在做什么

它在做经验总结。人本来就靠个案积累判断，这是必要的认知方式——你不可能亲自统计所有行业。所以以偏概全借用了「经验之谈」的可信外观。

### 第二步：找出它实际错在哪一步

错在从样本跳到总体的那一步。这一步需要一座桥，桥的名字叫代表性。

样本可能有三种毛病。太小：三个人的经历可能全是特例。不随机：你认识的人往往和你同圈层、同城市，这本身就是筛选过的。不匹配：用老用户评价新产品，用一线城市数据推断全国。

还有一个隐蔽的问题：**幸存者偏差**。你看到的成功者，是筛选之后留在视野里的那部分；失败者已经退出，不在你的样本里。

### 第三步：识别与追问

信号词：『我认识的都』『我们那边都』『普遍来说』『调查显示』（未说明样本）『好评率 99%』。

提问：样本有多少？怎么抽的？总体是谁？没被抽到的那些人是什么情况？这个比例有没有误差范围？

一个通用追问：『那些不这样的人，去哪儿了？』

## 例题与分析

**例 1（易）** 「我认识的三个做这行的都赚了，这行肯定赚钱。」

**分析**：错误发生在「这行肯定赚钱」。样本量为三，且来自同一个社交圈，属于双重缺陷：太小、不随机。更关键的是，亏钱退出的人已经不在他的交际圈里了。

**例 2（中）** 某门店挂出海报：「本店满意度 98%。」后来发现，问卷只发给扫码领礼品的人。

**分析**：错误发生在「98%」这个数字的适用范围。填问卷的人本身更愿意配合，不满意的顾客大概率不会为了礼品填表。样本是自选择的，98% 反映的是「愿意扫码的人」的满意度。

**例 3（难）** 某报道标题：「今年毕业生平均起薪一万二。」正文提到，数据来自一线城市互联网与金融岗位的抽样。

**分析**：错误有两层。第一层，样本只覆盖两个行业与一类城市，却被用来代表「今年毕业生」。第二层，报道用的是平均数，而薪资分布严重右偏——少数高薪会把平均数拉高，中位数可能只有六七千。读者得到的是一个既不代表总体、也不代表典型个体的数字。

## 反例训练

> 我们跟踪了一个用户群，问大家这个方法有没有效，20 个人里有 18 个说有效。所以这个方法的有效率是 90%。

**问题所在**：第一，这个群是自选择加入的，进群的人本来就关注这个方法。第二，20 人里只有愿意回复的人被统计到，沉默的多数被抹掉了。第三，「有效率」需要对照组——不采用这个方法的人，可能也有相近比例的好转。

**如何反驳**：『这 20 人是怎么进群的，群总人数多少，没回复的有几位？有没有一组人用别的方法做对比？如果只是「用了之后感觉好」，那只能说明主观感受。』

## 现实应用

- **广告**：『好评率 99%』。看它有没有说明样本来源、是否只展示好评、有没有删除差评。
- **新闻**：『调查显示七成受访者支持』。先找样本量与抽样机构，再看问题怎么问——问法不同，答案能差三十个百分点。
- **职场**：『我面过的候选人都这样。』面试样本本来就经过筛选，用它推断就业市场，误差会很大。

## 本节总结

**核心概念**：以偏概全、样本代表性、随机抽样、诉诸无知、基础比率。

**关键规则**

1. 样本要够大、随机、与总体匹配，三条缺一，结论就要打折。
2. 个案能推翻全称命题，推不翻统计命题。
3. 别忘了问：那些不符合结论的人，去哪儿了。

**常见错误**：把亲身经历当成普遍规律；把「没人证明是假的」当成「就是真的」；用平均数描述分布极不均匀的群体。

**需要掌握的能力**：看到任何百分比，先问分母是谁、样本怎么来的。
`,quiz:[{id:"s6-09-q1",type:"single",stem:"以偏概全的核心缺陷是：",options:["样本太小、不随机，无法代表总体","结论与前提完全不相干","结论已经包含在前提里","同一个词出现了两种含义"],answer:"A",explanation:"不当归纳的前提通常与结论相干，只是支持力不足。样本的数量、随机性与匹配度决定了结论能推多远。B 是相干谬误，C 是预设谬误，D 是含混谬误。",skill:"以偏概全"},{id:"s6-09-q2",type:"judge",stem:"发现一只黑天鹅，就可以推翻「多数天鹅是白的」这一统计命题。",answer:!1,explanation:"一只黑天鹅足以推翻「所有天鹅都是白的」这一全称命题，但推不翻统计命题。统计命题允许例外存在，要反驳它，需要证明黑天鹅的比例高到使「多数」不成立。",skill:"全称命题与统计命题"},{id:"s6-09-q3",type:"single",stem:"「没人能证明这种保健品无效，所以它是有效的。」这属于：",options:["诉诸无知","错误类比","滑坡","合成谬误"],answer:"A",explanation:"它把「缺乏反证」当成「存在正证」。举证责任在主张有效的一方，缺少证据既不能证明真，也不能证明假，只能说明尚无结论。",skill:"诉诸无知"},{id:"s6-09-q4",type:"multi",stem:"看到「某某比例的用户满意」这类说法时，应当追问哪些信息？（多选）",options:["样本有多少人，怎么抽的","没被统计到的人是什么情况","发布这个数字的机构是否盈利","问题是怎么问的，选项有哪些"],answer:["A","B","D"],explanation:"C 属于对动机的猜测，不能直接判定数字无效。A 决定样本代表性，B 关系到幸存者偏差与沉默多数，D 关系到引导性提问，三者都直接影响结论。",skill:"样本审查"},{id:"s6-09-q5",type:"short",stem:"某店主说：「我这个月问了二十个老顾客，十九个说我们服务好，所以我们的服务在同行里算优秀。」请指出至少两个问题。",keywords:[["老顾客","自选择","筛选"],["同行","比较","没有对照"],["样本","二十","太小"]],answer:"第一，样本全是老顾客，本来就是对服务满意才留下来的，属于自选择偏差。第二，结论说的是「在同行里算优秀」，却没有与任何同行比较，也没有同行数据。此外二十人的样本量太小，不足以支持行业内的比较判断。",explanation:"这段的问题不在数字本身，而在样本来源与结论范围不匹配。要支持「同行里优秀」，必须有可比的同行基准，而不只是自家老顾客的评价。",skill:"以偏概全"}]},{id:"s6-10",no:68,code:"4.4",title:"错误类比",stage:6,chapter:"第4章 谬误",minutes:12,lead:"「管公司就像管家，所以员工该像家人一样忠诚。」这句话有画面、有温度，也很容易让人点头。可家庭和公司，真的能在关键处相提并论吗？一个漂亮的类比，什么时候算论证，什么时候只是修辞？",objectives:["写出类比论证的结构，并定位相似点与结论之间的关系","用「相似点是否相关」「关键差异是否致命」两条标准检验类比","区分类比论证与比喻，判断何时类比只起说明作用"],concepts:["错误类比","相似性","关键差异","类比论证","比喻"],body:`
## 核心定义

**专业定义**：错误类比指依据两个事物在某些方面的相似，推出它们在另一个相关方面也相似，而所依据的相似点与结论无关，或两者存在影响结论的关键差异。

**通俗解释**：因为两样东西都是圆的，就说它们都能吃。相似的地方找对了才有用，找错了就是瞎比。

**典型结构**

$$A \\text{ 与 } B \\text{ 在 } x \\text{ 上相似} \\quad A \\text{ 具有 } y \\quad \\therefore B \\text{ 也具有 } y$$

这个推论要成立，需要两件事：$x$ 与 $y$ 之间有关联；$A$ 与 $B$ 在影响 $y$ 的其他方面没有重大差异。

> 与「比喻」的区别：比喻是修辞，不承担举证责任。『时间是一条河』没人会去论证。类比论证则声称支持某个结论，因此必须接受相似性的审查。

## 理论讲解

### 第一步：它表面在做什么

它在用熟悉解释陌生。人类理解新事物，几乎都要靠类比：把心脏比作泵，把免疫系统比作军队。所以类比天然带有说服力，它让结论变得可感。

### 第二步：找出它实际错在哪一步

错在把「某个方面的相似」扩大成「相关方面的相似」。这一步需要论证，而论证通常缺席。

具体有两个漏洞。其一，相似点不相干。两家公司都用蓝色标志，推不出管理水平相近。其二，关键差异被隐藏。家庭与公司在退出成本、报酬性质、权力结构上差别巨大，而这些差异恰恰决定了「忠诚」是否适用。

### 第三步：识别与追问

信号词：『就像』『好比』『跟……一样』『同样是』『既然……那么』。

提问：相似的是哪一点，这一点与结论有关系吗？两者在哪些关键处不同？这些不同会不会让结论失效？有没有同一类中更贴近的例子？

一句有效的追问：『如果这个类比成立，它还能推出什么？』把类比推到底，常常会推出荒谬结论。

## 例题与分析

**例 1（易）** 「公司就像家庭，所以员工应该无条件忠诚。」

**分析**：错误发生在「所以应该」。家庭与公司在三处关键差异上不同：退出成本、报酬性质、权力结构。这些差异正好关系到「忠诚」是否适用。

**例 2（中）** 「管国家就像管公司，公司要盈利，国家也该盈利。」

**分析**：错误发生在「国家也该盈利」。国家的目标函数包含公共服务、分配公平、外部性治理，与公司利润最大化不同。这个类比把「都要算账」这一层相似，扩大成了「目标相同」。

**例 3（难）** 某学习类广告：「大脑就像肌肉，越练越发达。所以多做难题，就能变聪明。」

**分析**：两处问题。第一处，大脑确实有可塑性，但肌肉的疲劳与恢复机制、训练迁移规律与认知训练并不相同。第二处更关键：「变聪明」是个笼统说法，认知训练的效果通常局限于所练的任务类型，跨领域迁移在研究中相当有限。这是错误类比叠加以偏概全。

## 反例训练

> 我们不赞成给宠物单独立法保护。道理很简单：你不能立法要求一个人必须对自己的车好一点，车是财产，宠物也是财产。

**问题所在**：整个论证依赖「宠物是财产」这个前提，而这恰恰是需要论证的部分。类比把宠物与车在法律地位上划了等号，抹掉了关键差异：宠物有痛觉、有依附行为、能承受可观测的伤害，而车没有。这个差异正好与「是否需要特别保护」直接相关，类比的根基因此被抽掉。

**如何反驳**：不争论车，先拆等号。『这个类比成立的前提是宠物与车在相关属性上相同，但它们的差别恰恰在于是否具有感知能力。请论证：为什么有感知能力的生命，应当与无感知的财物适用同一套规则？』

## 现实应用

- **广告**：『给发动机加好机油，就像给身体补充营养。』它有画面感，但没有说明两者的作用机制是否可比。
- **新闻**：国际比较里的『某国这样做，我们也该这样』。先看两国在人口、制度、发展阶段上的关键差异。
- **职场**：『别的公司都搞末位淘汰，我们也该搞。』行业周期、人才市场、薪酬结构都可能完全不同。

## 本节总结

**核心概念**：错误类比、相似性、关键差异、类比论证、比喻。

**关键规则**

1. 类比的强度取决于相似点与结论的相关性，与画面感无关。
2. 找关键差异，比找相似点更重要。
3. 类比可以启发思考，很难单独证明结论。

**常见错误**：被生动的意象说服；把「都是同一类东西」当成「在这一点上也一样」；反过来，在类比确实贴切时用「你这是类比」一笔抹掉。

**需要掌握的能力**：听到类比，先问「像在哪」，再问「差在哪」，最后问「差的地方影响结论吗」。
`,quiz:[{id:"s6-10-q1",type:"single",stem:"判定一个类比论证是否成立，最关键的是：",options:["两个事物是否属于同一类别","相似点是否与结论相关，关键差异是否影响结论","类比是否生动形象","说话人是否熟悉这两个事物"],answer:"B",explanation:"同类事物也可能在关键处不同，异类事物也可能在相关点上高度相似。相关性比同类性重要。生动与否影响说服力，不影响有效性。",skill:"类比论证的检验"},{id:"s6-10-q2",type:"judge",stem:"任何使用「就像」的句子都构成错误类比。",answer:!1,explanation:"「就像」也可能只是比喻或说明，例如「心脏就像一个泵」，它帮助理解，不承担举证责任。只有当类比被用来支持一个结论、且相似点与结论无关时，才构成错误类比。",skill:"类比与比喻"},{id:"s6-10-q3",type:"single",stem:"「网络就像公路，既然公路要限速，网络也该限速。」这个论证的主要问题是：",options:["把「都需要管理」扩大成「管理方式应当相同」","样本太小，不能代表所有网络用户","结论已经包含在前提中","使用了含义不明的词"],answer:"A",explanation:"公路与网络在「公共性」上相似，但在传播机制、执法可行性、对表达的影响上差异巨大。类比把「需要管理」这一层相似，直接推成了「同样的限速手段适用」。",skill:"错误类比"},{id:"s6-10-q4",type:"multi",stem:"检验类比论证时，下列哪些问题是有用的？（多选）",options:["相似的是哪一点，与结论有关吗","两者在哪些关键处不同","提出类比的人是不是专业人士","把这个类比推到底，会推出什么"],answer:["A","B","D"],explanation:"C 是诉诸权威的思路，与类比本身是否成立无关。A 查相关性，B 查关键差异，D 用归谬检验类比的延伸后果，都是有效方法。",skill:"检验类比"},{id:"s6-10-q5",type:"short",stem:"有人说：「团队就像一支球队，所以必须有一个绝对权威的教练，队员只能服从。」请指出这个类比的问题。",keywords:[["相似","相关","哪一点"],["差异","不同","自主"],["服从","专业判断","成员"]],answer:"球队与团队在「需要协作」上相似，但结论要求的是「绝对服从」，这需要相似点在「专业知识集中于一人」上也成立。实际团队里成员各有专业判断，信息分散，与球员的技能结构不同。这个类比把协作的必要性推成了服从的必要性。",explanation:"关键是找出类比支撑的结论超出了相似点能覆盖的范围。协作需要分工与配合，不等于需要绝对权威，两者之间还缺一步论证。",skill:"错误类比"}]},{id:"s6-11",no:69,code:"4.4",title:"混淆相关与因果、事后归因",stage:6,chapter:"第4章 谬误",minutes:14,lead:"换了头像之后运气变好了，装了新系统之后业绩上涨了，吃了某种保健品之后精神好了。这些事确实先后发生。可「之后」这两个字，凭什么能变成「因为」？",objectives:["列出两件事相关时的四种可能解释，并说明为何不能直接断定因果","区分共时的相关混淆与历时的事后归因","用机制、时间顺序、共同原因、对照组四项检验因果主张"],concepts:["相关","因果","事后归因","共同原因","对照组"],body:`
## 核心定义

**专业定义**：混淆相关与因果指从两件事同时出现推出其中一件导致另一件；事后归因指从两件事先后发生推出在先者是原因。

**通俗解释**：公鸡打鸣之后太阳升起，于是公鸡认为是他把太阳叫出来的。

**典型结构**

$$A \\text{ 与 } B \\text{ 相关} \\quad \\therefore A \\text{ 导致 } B$$

$$A \\text{ 先于 } B \\quad \\therefore A \\text{ 导致 } B$$

两件事相关，至少有四种解释：$A$ 导致 $B$；$B$ 导致 $A$；某个 $C$ 同时导致两者；纯属巧合。

> 与「事后归因」的区别：混淆相关与因果讲的是共时关系，两件事同时出现；事后归因讲的是历时关系，一件事在另一件之前。事后归因是相关混淆的时间版，也是日常中最常见的一种。

## 理论讲解

### 第一步：它表面在做什么

它在做解释。人天生要给事情找原因，找到原因才有掌控感。先后顺序又确实是最容易被观察到的线索，所以「自从……就……」几乎自动被当成因果。

### 第二步：找出它实际错在哪一步

错在从时间或统计上的伴随，跳到因果。这个跳跃忽略了三种替代解释。

**反向因果**：可能是 $B$ 导致 $A$，而非 $A$ 导致 $B$。喝咖啡的人更长寿，可能是健康的人才有精力喝咖啡。

**共同原因**：某个 $C$ 同时导致两者。冰淇淋销量与溺水人数同步上升，共同原因是气温。

**巧合与选择效应**：样本本身就经过了筛选。

### 第三步：识别与追问

信号词：『自从』『一……就』『都是因为』『用了之后』『调查发现……的人更……』。

提问：有没有第三因素同时影响两者？会不会是反向？有没有对照组？机制是什么？时间顺序确定吗？

一个通用追问：『如果不做这件事，结果会不一样吗？』这个问题指向的就是对照组。

## 例题与分析

**例 1（易）** 「自从我换了头像，运气就变好了，看来头像有讲究。」

**分析**：错误发生在「看来头像有讲究」。这属于事后归因，且连基本的机制都提不出来。运气本身模糊，好转的判断也缺少标准，很可能只是注意力的选择性：换头像后更留意好事，忽略坏事。

**例 2（中）** 某公司宣布：「上线新考核系统后，季度业绩上升 20%，证明新系统有效。」

**分析**：错误发生在「证明新系统有效」。同期至少还有两个变量在变：市场需求回升、公司裁掉了两个亏损部门。业绩上升可能主要来自这两个因素。要证明系统有效，需要可比对照组。

**例 3（难）** 某健康报道：「研究显示，常喝咖啡的人寿命更长，所以喝咖啡能延年益寿。」

**分析**：这是观察性研究，问题有三层。第一层，无法排除反向因果——身体好的人才能经常喝咖啡。第二层，无法排除共同原因——收入较高、医疗条件较好的人，喝咖啡的比例也更高。第三层，「延年益寿」是干预性说法，而研究只提供了相关性。媒体用一个动词，把相关偷换成了因果。

## 反例训练

> 我们在门店门口摆了两个玩偶，那个月客流涨了三成。数据很清楚，玩偶带来了客流。

**问题所在**：它给了数字，却没给归因。同期可能做了促销、赶上节假日、天气转好，甚至隔壁新开了地铁站。「那个月」是一个没有对照的时段，任何同期变化都能造成同样的结果。数字只证明两件事同时发生，没有证明谁导致谁。

**如何反驳**：『这个月除了玩偶，还有什么变化？去年同期是多少？能不能把玩偶撤掉一个月，看客流是否回落？』最后这一问就是最朴素的干预检验。

## 现实应用

- **广告**：『用了两周，皮肤明显改善』。没有对照，也无法排除季节、作息、其他护肤品的影响。
- **新闻**：『调查发现，常做某件事的人收入更高。』这类标题几乎总把相关写成因果，正文里通常藏着「观察性研究」。
- **职场**：『自从换了这个流程，效率就上来了。』可以回应：『同期还改了什么？能不能找一个没改的团队做对比？』

## 本节总结

**核心概念**：相关、因果、事后归因、共同原因、对照组。

**关键规则**

1. 相关有四种解释，因果只是其中一种，且需要额外证据。
2. 先后发生不构成因果，时间顺序只是必要条件之一。
3. 想证明因果，至少要过四关：机制、顺序、排除共同原因、对照。

**常见错误**：把「同期发生」当成「因此发生」；忽略反向因果；用一个个案的时间顺序代替统计证据。

**需要掌握的能力**：听到「自从」二字，条件反射地追问「同期还变了什么」。
`,quiz:[{id:"s6-11-q1",type:"single",stem:"两件事统计上相关，下列哪种解释不属于需要排除的可能？",options:["A 导致 B","B 导致 A","某个 C 同时导致 A 和 B","两者毫无关系"],answer:"A",explanation:"A 导致 B 正是想要证明的那个结论，不属于需要排除的替代解释。需要排除的是反向因果、共同原因与巧合。只有把这些都排除后，才能较有把握地说 A 导致 B。",skill:"相关的多种解释"},{id:"s6-11-q2",type:"judge",stem:"只要 A 在 B 之前发生，就可以认为 A 是 B 的原因。",answer:!1,explanation:"时间先后只是因果的必要条件之一，远不是充分条件。公鸡先打鸣、太阳后升起，但公鸡不是原因。还需排除共同原因与巧合，并给出机制说明。",skill:"事后归因"},{id:"s6-11-q3",type:"single",stem:"冰淇淋销量上升时，溺水人数也上升。最合理的解释是：",options:["吃冰淇淋导致溺水","溺水事件导致人们买冰淇淋","气温升高同时导致两者上升","两者毫无关系，纯属巧合"],answer:"C",explanation:"这是共同原因的经典案例：天气炎热既让人想吃冰淇淋，也让更多人下水游泳。两者相关，但彼此之间没有因果。混淆相关与因果时，共同原因是最常被忽略的一种解释。",skill:"共同原因"},{id:"s6-11-q4",type:"multi",stem:"要支持「某措施导致某结果」这一主张，需要哪些证据？（多选）",options:["可说明的作用机制","排除同期其他重要变化","提出主张的人是否有相关学历","有可比对照组或干预前后的对照数据"],answer:["A","B","D"],explanation:"C 属于诉诸权威的思路。机制解释「为什么会有影响」，排除同期变化处理共同原因，对照组处理巧合与自然波动，这三项是因果推断的基本支撑。",skill:"因果推断的条件"},{id:"s6-11-q5",type:"short",stem:"某店主说：「上个月我在门口放了音乐，营业额涨了两成，所以音乐能吸引顾客。」请指出问题并给出一条验证方法。",keywords:[["同期","其他变化","共同原因"],["对照","撤掉","A/B"],["相关","因果","不能证明"]],answer:"营业额上涨可能来自促销、节假日、天气或其他同期变化，放音乐与营业额上涨只是同时发生，不能证明因果。验证方法是做对照：隔周交替播放与不播放，或选两家条件相近的门店同时对比，看差异是否稳定出现。",explanation:"要点是先指出共同原因与巧合的可能，再给出可操作的对照方案。能设计对照，说明你理解了因果推断需要排除替代解释。",skill:"事后归因"}]},{id:"s6-12",no:70,code:"4.4",title:"选择性证据与确认偏误",stage:6,chapter:"第4章 谬误",minutes:13,lead:"同一件事，支持的人能找到十篇研究，反对的人也能找到十篇。两边引用的都是真论文，可结论完全相反。问题出在论文上，还是出在「找」这个动作上？",objectives:["辨认樱桃挑选的结构：证据被筛选过，但筛选规则从未公开","说明确认偏误如何在搜寻、注意、记忆三个环节上起作用","用「检索规则是否事先设定、是否对双方一致适用」检验一份证据清单"],concepts:["选择性证据","樱桃挑选","确认偏误","幸存者偏差","检索规则"],body:`
## 核心定义

**专业定义**：选择性证据指在支持与反对某结论的证据并存时，只呈现支持方、隐去或贬低反对方，从而使论证看起来证据充分。确认偏误指人倾向于搜寻、注意和记住与既有信念一致的信息。

**通俗解释**：先有了答案，再去题库里挑几道自己会做的题，然后宣布自己考得不错。

**典型结构**

$$E^{+} \\subset E \\quad E^{-} \\text{ 被省略} \\quad \\therefore P$$

其中 $E$ 是全部相关证据，$E^{+}$ 是被挑出来的支持性证据，$E^{-}$ 是被隐去的反对证据。论证看起来有据可依，实际只展示了半个证据集。

> 与「合理筛选」的区别：筛选本身是必要的——你会排除方法有严重缺陷的研究。判断标准有两条：筛选规则是否在检索之前就已设定；这套规则是否对正反双方一致适用。先定规则再检索，是研究；先定结论再检索，是挑选。

## 理论讲解

### 第一步：它表面在做什么

它在做文献综述。罗列证据、逐条引用，是严谨论证的标准外观。读者看到出处、年份、期刊名，很容易认为审查已经完成。

### 第二步：找出它实际错在哪一步

错在证据集的构造。任何一份证据清单都经过了选择，问题在于选择是否公平。

确认偏误在三个环节上运作。搜寻环节：你用的关键词本身就带倾向，搜「某添加剂 危害」和搜「某添加剂 安全性评估」，出来的东西完全不同。注意环节：同一篇文章里，支持你的段落你记得住，反驳的段落你跳过去。记忆环节：多年之后，你只留下印象最深的那几条。

三个环节加起来，会让人真诚地相信自己在客观研究，实际上只走完了半个流程。

### 第三步：识别与追问

信号词：『有研究表明』『多项研究证实』『业内普遍认为』。

提问：这份清单是怎么检索出来的？用了哪些关键词、哪些数据库？排除了什么？如果换一个人带着相反立场去检索，他会找到什么？反对方的最强证据是什么，为什么被排除？

一句有效的追问：『请告诉我，最支持相反结论的那三项证据是什么。』能答出来的人，通常真的查过。

## 例题与分析

**例 1（易）** 「我爷爷抽了一辈子烟，活到九十二，所以抽烟没那么大危害。」

**分析**：错误发生在「所以」这一步。这是幸存者样本——活到九十二的吸烟者能被你看见，那些没活到的人已经不在你的视野里。用一个个案去对冲大规模统计，本身就取消了统计的意义。

**例 2（中）** 某公司发布年度报告：「用户满意度 96%。」三个月后，有媒体发现报告删除了 300 条投诉记录，且统计口径改成了「完成三次以上购买的用户」。

**分析**：错误发生在「96%」这个数字的构造过程。口径一改，分母就变了，投诉被移出样本，剩下的自然是满意的人。每个数字都算得没错，错在谁被算进去了。

**例 3（难）** 某博主做了一期视频，论证某类食品有害。他逐条引用了七项研究，全部支持自己的结论。后来有人指出，同一领域还有三项样本量更大的队列研究，结论是「在正常摄入量下未见显著风险」，视频里一次都没提。

**分析**：错误发生在证据的取舍，而非某一条引用。七项研究可能是真的，结论也可能对，但论证过程没有展示证据全貌。这类内容最危险的地方在于它极为可信——每条引用都能查证，读者很难发现缺失的那部分。

## 反例训练

> 我不看立场，只看数据。这三篇论文都指出 A 有效，这是我能找到的全部文献。

**问题所在**：『我能找到的全部』不等于「全部」。检索范围可能只有一个数据库、一种语言、最近三年。检索词可能只包含正面表述。更关键的是，「我能找到」把检索能力的局限，包装成了证据的边界。

**如何反驳**：不问结论，问方法。『你用了哪几个数据库和什么检索词？有没有设定纳入与排除标准，是在检索前定的还是检索后定的？如果把检索词换成「A 无效」或「A 副作用」，会出来什么？』

## 现实应用

- **广告**：『临床验证』往往只公布显著的那一组指标，次要指标与不良反应放在附录第 47 页。
- **新闻**：单一信源的报道细节丰富，实际只有一个角度。看它有没有联系被指控方。
- **职场**：汇报时只挑上升的曲线。可以主动问：『还有哪些指标在下降？要不要一起看？』

## 本节总结

**核心概念**：选择性证据、樱桃挑选、确认偏误、幸存者偏差、检索规则。

**关键规则**

1. 证据清单永远是被构造出来的，要审的是构造规则，不只是条目。
2. 先定标准再找证据，是研究；先定结论再找证据，是挑选。
3. 检验一份论证的最好问题：反方最强的证据是什么。

**常见错误**：把「有出处」当成「已审查」；把「我搜过了」当成「已经搜全」；反过来，在证据确实一边倒时用「选择性引用」制造虚假的对等。

**需要掌握的能力**：拿到一份证据清单，先问它缺了什么，而不是它列了什么。
`,quiz:[{id:"s6-12-q1",type:"single",stem:"樱桃挑选（选择性证据）的核心问题是：",options:["引用的证据都是假的","只呈现支持性证据，隐去相反证据，且筛选规则不公开","证据与结论完全不相干","结论已经包含在前提中"],answer:"B",explanation:"被引用的证据往往真实可查，问题在于证据集的构造不公平。判断要点是筛选规则是否事先设定、是否对正反双方一致适用。这与引用假证据是两回事。",skill:"选择性证据"},{id:"s6-12-q2",type:"judge",stem:"在研究中设定纳入与排除标准，本身就是一种选择性证据谬误。",answer:!1,explanation:"筛选是必要的，因为要排除方法有严重缺陷的研究。判断标准是：规则是否在检索前设定，是否对正反双方一致适用。事先定规则、一致适用，是方法；事后按结论取舍，才是谬误。",skill:"筛选与挑选"},{id:"s6-12-q3",type:"single",stem:"「我爷爷抽烟活到九十二，所以抽烟没那么大危害。」这句话的推理缺陷是：",options:["用幸存者个案对冲统计结论，忽略了没活到高龄的吸烟者","把整体的属性推给了部分","犯了循环论证","结论超出了前提的时间范围"],answer:"A",explanation:"能被你看见的长寿吸烟者，是筛选后的样本；大量因吸烟早逝的人不在视野里。用一个幸存者个案否定统计结论，既是以偏概全，也是选择性证据。",skill:"幸存者偏差"},{id:"s6-12-q4",type:"multi",stem:"下列哪些做法有助于对抗确认偏误？（多选）",options:["检索前先写下纳入与排除标准","主动搜索与自己结论相反的关键词","只看自己信任的几位作者","请一位持相反立场的人找出最强反证"],answer:["A","B","D"],explanation:"C 会强化回音室效应，让确认偏误更难被发现。A 把规则前置，B 主动引入反面信息，D 借助他人视角，都是有效的外部校正手段。",skill:"对抗确认偏误"},{id:"s6-12-q5",type:"short",stem:"有人给你一份「十项研究证明 A 有效」的清单。请写出你会追问的三个问题。",keywords:[["检索","数据库","关键词"],["相反","反证","无效"],["标准","纳入","排除"]],answer:"可以问：这份清单是用哪些数据库和关键词检索出来的？有没有同样有力、结论相反的研究，为什么没有列入？纳入与排除标准是在检索之前定的，还是看到结果之后定的？",explanation:"三个问题分别针对检索范围、反面证据与规则时序。它们共同检验的是证据集的构造是否公平，而不是某一条引用是否真实。",skill:"审查证据清单"}]},{id:"s6-13",no:71,code:"4.6",title:"含混谬误：歧义、合成与分割",stage:6,chapter:"第4章 谬误",minutes:13,lead:"「这家店每道菜分量都小，所以整桌菜肯定吃不饱。」「球队每个位置都是最好的球员，所以这是最好的球队。」这两句话听起来都顺，可它们犯的错刚好相反。一个词、一个整体，究竟能推出什么？",objectives:["识别歧义谬误中同一个词在两处的含义切换","区分合成谬误与分割谬误的推理方向，并说明属性是否可分配","在广告与统计表述中定位含混发生的那一句"],concepts:["歧义","合成谬误","分割谬误","属性分配","语义转换"],body:`
## 核心定义

**专业定义**：含混谬误指论证因词句含义不确定而失效，包括同一词在两处含义不同（歧义），以及把部分与整体的属性互相搬运（合成、分割）。

**通俗解释**：话说到一半，词偷偷换了意思；或者把一块砖的性质，安到整面墙上。

**三种形态**

- **歧义**：同一个词在前提与结论中含义不同。自由、天然、保障，都是常被换手的词。
- **合成**：由部分属性推整体属性。每块砖很轻，所以整面墙很轻。
- **分割**：由整体属性推部分属性。这家公司很赚钱，所以它的每个部门都赚钱。

$$\\text{合成：} F(a_1) \\land F(a_2) \\land \\cdots \\therefore F(\\text{整体})$$

$$\\text{分割：} F(\\text{整体}) \\therefore F(a_1) \\land F(a_2) \\land \\cdots$$

> 与「双关」的区别：双关是有意玩味语言，不承担举证责任。歧义谬误的关键在于论证依赖了词义切换——把两处不同的意思当成同一个意思来推。

## 理论讲解

### 第一步：它们表面在做什么

它们在处理「整体」与「部分」的常识关系，或者在做词义推理。日常语言里，我们确实经常从部分推整体（每个零件合格，产品大概合格），这一步在很多场合是合理的，所以谬误有了掩护。

### 第二步：找出它们实际错在哪一步

歧义错在词义不稳定。前提里的「自由」指「不受外力强制」，结论里的「自由」指「不受任何规则约束」，两处不是同一个概念，推理的链条就断了。

合成与分割错在属性分配。判断某种属性能否传递，要看它是不是结构性属性。重量、面积、体积这类属性，整体由部分累加，不能简单搬运；「由水泥制成」这类属性则可以传递。忽略这个区别，就会出现「每块砖很小所以墙很小」这种结论。

### 第三步：识别与追问

歧义的信号：同一个词在一段话里出现两次以上，且两次的搭配不同。追问：这两个「自由」「天然」，是同一个意思吗？各自换一个精确的词，论证是否还成立？

合成与分割的信号：『每个……都……所以整体……』『整体……所以每个……』。追问：这个属性能从部分传到整体吗？整体还有部分没有的性质吗（比如配合、结构、规模效应）？

## 例题与分析

**例 1（易）** 「这家店每道菜分量都小，所以整桌菜肯定吃不饱。」

**分析**：错误发生在「所以整桌菜肯定吃不饱」。这是合成谬误：单道菜的分量是部分属性，整桌总量与饱腹感取决于道数与搭配。十道小份菜加起来可能远超一大份。

**例 2（中）** 「自由是人类追求的目标。自由就是不受任何限制。所以人类追求不受任何限制。」

**分析**：错误发生在第二个「自由」。第一处指免于强制与压迫，第二处被换成了「不受任何限制」，包括不受交通规则限制。同一个词换了含义，论证从一个可辩护的理想，变成了一个荒谬的主张。

**例 3（难）** 某公司宣传：「我们每个岗位都配备了行业顶尖的人才，所以我们是最顶尖的团队。」

**分析**：这是合成谬误的高级版。个体的优秀不能自动累加为团队优秀，中间还隔着配合、流程、目标一致性、激励结构。五个顶级前锋组成的球队未必能赢球——这个反例正好说明结构性属性不可分配。宣传的高明之处在于，每个事实可能都真，误导只发生在「所以」之后。

## 反例训练

> 公司规定，每个员工都可以申请远程办公。所以公司完全可以整体远程办公。

**问题所在**：从「每个员工可以申请」到「公司可以整体远程运作」，是合成谬误。前一句说的是个体权利，后一句说的是组织能力。中间缺的正是那些不可分配的东西：业务连续性、跨部门协同、客户现场服务、保密要求。个体的可行，不等于系统的可行。

**如何反驳**：把「可以申请」与「可以运转」分开。『每个员工可以申请，这是权利；公司能否整体远程，取决于哪些岗位必须到场、哪些流程必须当面交接。请先把这两类岗位列出来，再谈整体。』

## 现实应用

- **广告**：『天然成分』——可以指原料来自自然，也可以指未经化学处理。同一个词，两种承诺。
- **新闻**：『大幅增长』不给基数。从 10 到 30 是增长两倍，从一万到一万二只是小幅波动。
- **职场**：『我们团队很强。』可能在说成员个人能力强，也可能在说协作效果好。谈绩效时要把这两层拆开。

## 本节总结

**核心概念**：歧义、合成谬误、分割谬误、属性分配、语义转换。

**关键规则**

1. 同一个词在一段论证里出现两次，就要检查是不是同一个意思。
2. 部分到整体、整体到部分，都要先问属性是否可分配。
3. 结构性属性（配合、规模、协同）最容易被非法搬运。

**常见错误**：把「每个都很好」当成「整体很好」；把「公司很强」当成「每个人都很强」；用一个模糊的褒义词承接两种含义。

**需要掌握的能力**：在长句里锁定那个被换了意思的词，换成精确说法，看论证是否还站得住。
`,quiz:[{id:"s6-13-q1",type:"single",stem:"「每块砖都很轻，所以这面墙很轻。」这属于：",options:["合成谬误","分割谬误","歧义","循环论证"],answer:"A",explanation:"它把部分的属性（轻）推给整体（墙）。重量这类属性由部分累加而成，不能简单传递，所以结论不成立。分割谬误的方向相反，是从整体推部分。",skill:"合成谬误"},{id:"s6-13-q2",type:"judge",stem:"从「这家公司很赚钱」推出「它的每个部门都赚钱」，属于合成谬误。",answer:!1,explanation:"这个方向是从整体推部分，属于分割谬误。合成是部分推整体，分割是整体推部分。两者都假设属性可以无条件转移，但方向相反。",skill:"分割谬误"},{id:"s6-13-q3",type:"single",stem:"「这款食品是天然原料，所以它对身体一定无害。」这里最主要的问题是：",options:["「天然」在两处含义不同，从「来自自然」滑到了「安全无害」","样本太小，不能代表所有食品","结论已经包含在前提中","把整体属性推给了部分"],answer:"A",explanation:"「天然」只说明来源，不说明安全性——许多天然物质有剧毒。论证靠一个词的模糊性完成了从来源到安全的跳跃，属于歧义谬误。",skill:"歧义"},{id:"s6-13-q4",type:"multi",stem:"判断某个属性能否从部分传到整体，应当考虑哪些因素？（多选）",options:["该属性是否由部分累加而成","整体的结构、配合是否产生新性质","提出主张的人是否有相关专业背景","该属性是否依赖部分之间的关系"],answer:["A","B","D"],explanation:"C 是诉诸权威的思路，与属性是否可分配无关。重量、面积由部分累加，配合与协同产生新性质，依赖关系的属性（如「配合默契」）无法由单个部分拥有，这三项决定能否传递。",skill:"属性分配"},{id:"s6-13-q5",type:"short",stem:"请各举一个合成谬误与分割谬误的例子，并说明两者的区别。",keywords:[["部分","整体","方向"],["每个","都","相加"],["配合","结构","不可分配"]],answer:"合成：每个队员个人能力都很强，所以这支队伍一定最强，忽略了配合。分割：这家公司利润很高，所以它的每个部门利润都高，忽略了部门之间的差异。区别在方向：合成从部分推整体，分割从整体推部分，共同点是都假设属性可无条件转移。",explanation:"两者的对称性最好用方向来记。真正的判断点是属性是否可分配：累加型属性可以，结构性、关系型属性不行。",skill:"合成与分割"}]},{id:"s6-14",no:72,code:"4.6",title:"情绪操纵与论证的伦理",stage:6,chapter:"第4章 谬误",minutes:14,lead:"有些话没有一句是假的，却让你在十分钟内做了一个本该想三天的决定。它没有伪造事实，只调整了你的心跳。当情绪被刻意安排成论证的替代品，我们该用什么标准来分辨提醒与操纵？",objectives:["辨认恐惧诉求、诉诸厌恶、道德绑架三种操纵手法的结构","用「情绪是否替代了信息」「是否阻断核查」两条标准区分警示与操纵","说出论证伦理的三条原则：诚实、可反驳、不操纵"],concepts:["情绪操纵","恐惧诉求","诉诸厌恶","道德绑架","论证伦理"],body:`
## 核心定义

**专业定义**：情绪操纵指有意利用恐惧、厌恶、羞耻、愧疚等情绪反应，绕过听者的判断，使其接受某个结论或做出某个决定。

**通俗解释**：不去说服你的脑子，直接拨动你的神经。

**典型结构**

$$\\text{激起情绪 } E \\quad E \\text{ 与论题无实质关联} \\quad \\therefore \\text{接受 } P$$

**三种常见手法**

- **恐惧诉求**：放大威胁、制造紧迫、不给替代方案。『再不管，就来不及了。』
- **诉诸厌恶**：用生理性的反感替代判断。『看到这个画面，你还吃得下吗？』
- **道德绑架**：把不接受结论等同于道德缺陷。『你还有良心吗？』

> 与「合理的情感表达」的区别：合理表达让情绪成为信息的补充——受害者陈述痛苦、医生说明风险，情绪与事实指向同一件事。操纵让情绪替代信息，并且刻意阻断核查：不给数据、不给时间、不给替代方案。

## 理论讲解

### 第一步：它表面在做什么

它在履行两种正当功能：提醒风险，维护价值。提醒风险需要让人感到紧迫，维护价值需要唤起道德感。这两种功能都是社会运转必需的，所以操纵有了极好的伪装。

### 第二步：找出它实际错在哪一步

错在让情绪承担了论证的职责，并且封住了核查的出口。

判断一段话是否构成操纵，可以看四个特征：只给结论不给依据；制造时间压力，让你来不及查；不给替代方案，仿佛只有服从一条路；把不接受等同于道德缺陷。四条中占了两条以上，就值得停下来。

### 第三步：伦理的三条原则

**诚实**：不隐瞒关键证据，不篡改数据，不省略能让结论翻转的信息。

**可反驳**：主张必须可检验、可查证，允许对方提出反证。一个不允许被反驳的主张，已经算不上论证，只能算宣告。

**不操纵**：不用与论题无关的情绪压力替代理由。可以动情，但不能把动情当成论据。

这三条算不上法律条文，它们是讨论得以继续的前提。破坏它们的人，短期可能赢得争论，长期会失去被认真对待的资格。

## 例题与分析

**例 1（易）** 某广告：「现在不买，孩子将来会怪你一辈子。」

**分析**：错误发生在「会怪你一辈子」。它把一次消费决策与亲子关系的长期后果绑定，用愧疚感替代产品效果的论证。整句话没有任何关于产品本身的信息，也没有给出「不买」的替代方案。

**例 2（中）** 某短视频：「看到这个画面，你还吃得下吗？所以这个品牌的原料一定有问题。」

**分析**：错误发生在「所以……一定有问题」。画面引起的是厌恶，厌恶是生理反应，与原料是否合规之间没有推理通道。这类内容常用特写、慢镜头、低沉配乐强化反应，视听手段本身就在替代论证。

**例 3（难）** 某公司内部信：「我们是一家人，家人不会在困难的时候谈条件。所以这个月工资延后发放，大家应该理解。」

**分析**：这里有两层问题。第一层是道德绑架：把雇佣关系重新定义为家庭，从而把「谈条件」变成「不念亲情」。第二层是预设：它默认工资延后是唯一选项，而实际还有管理层先降薪、缩短工时、分批发放等方案。这封信没有一句假话，杀伤力全部来自关系的重新定义。

## 反例训练

> 我不是要吓你。数据在这里：这个路段夜间事故率是白天的三倍，上个月刚出过事。你今晚就走，别拖，绕行多花二十分钟。

**问题所在**：它确实给了数据，伪装很高级。要检查三处。第一，事故率的基数——白天车流量远大于夜间，比率与绝对数说的不是一件事。第二，「上个月刚出过事」是个案，用个案给统计加温，是操纵的常用手法。第三，「今晚就走，别拖」制造时间压力，恰好让你来不及核对这些。

**如何反驳**：接受提醒，拒绝催促。『我接受这个风险提示，也会考虑绕行。但我想先看清楚：这个比率的分母是什么，夜间绝对事故数是多少？如果风险确实高，我明天改路线也一样，为什么必须今晚决定？』

## 现实应用

- **广告**：限时、限量、倒计时。看它是否在制造与产品价值无关的紧迫感。
- **新闻**：灾难报道中的配乐与慢镜头，会改变你对同一组事实的判断。读文字版往往更冷静。
- **职场**：『大家都留下来加班，你先走合适吗？』这是用归属感施压。可以回应：『我今天的工作已经完成，明天早到我补上交接。』

## 本节总结

**核心概念**：情绪操纵、恐惧诉求、诉诸厌恶、道德绑架、论证伦理。

**关键规则**

1. 情绪可以是信息的一部分，不能是信息的替代品。
2. 判断操纵看四条：无依据、有时间压力、无替代方案、道德定罪。
3. 论证伦理三原则：诚实、可反驳、不操纵。

**常见错误**：把所有带情绪的表述都指认为操纵，从而否认合理的情感表达；被「我是为你好」卸下防备；自己说服别人时用了同一套手法而不自知。

**需要掌握的能力**：在被情绪推动的那一刻，能问出一句——如果给我三天时间核查，这个结论还站得住吗。
`,quiz:[{id:"s6-14-q1",type:"single",stem:"区分「合理的风险警示」与「恐惧诉求」的关键是：",options:["语气是否强烈","是否给出可核查的依据、替代方案，并允许对方自行判断","说话人是否也感到害怕","结论是否让人不舒服"],answer:"B",explanation:"语气强烈与否不是标准，医生也可以大声提醒。关键在于信息是否可核查、是否给出替代路径、是否把决定权留给对方。恐惧诉求靠的是阻断核查与压缩选择。",skill:"恐惧诉求"},{id:"s6-14-q2",type:"judge",stem:"一段论证只要带有强烈的情绪色彩，就构成情绪操纵。",answer:!1,explanation:"情绪表达本身不是操纵。受害者陈述、医生说明风险，都合理地带有情绪。构成操纵的是用情绪替代信息，并刻意阻断核查。判断要看手法与意图，不看音量。",skill:"情绪操纵与情感表达"},{id:"s6-14-q3",type:"single",stem:"「我们是一家人，家人不会在困难时谈条件，所以工资延后发放大家应该理解。」主要问题在于：",options:["用「家庭」重新定义雇佣关系，把谈判变成不念亲情","样本太小，不能代表所有员工","结论已经包含在前提中","把整体属性推给了部分"],answer:"A",explanation:"这是道德绑架：先把关系定义为家庭，再把「谈条件」定性为道德缺陷，从而取消协商空间。它同时预设了「延后发放」是唯一选项，掩盖了其他方案。",skill:"道德绑架"},{id:"s6-14-q4",type:"multi",stem:"下列哪些是判断「情绪操纵」的可用特征？（多选）",options:["只给结论，不给可核查的依据","制造时间压力，让人来不及查证","不给任何替代方案，仿佛只有一条路","说话人自己在表达时很激动"],answer:["A","B","C"],explanation:"D 不是可靠特征，真诚而激动的人也可能在做合理表达。操纵的判据是信息结构：依据缺失、时间压迫、选项被抹掉，以及把不接受等同于道德缺陷。",skill:"识别情绪操纵"},{id:"s6-14-q5",type:"short",stem:"请写出论证伦理的三条原则，并各用一句话说明它在防止什么。",keywords:[["诚实","不隐瞒","证据"],["可反驳","可检验","反证"],["不操纵","情绪","压力"]],answer:"诚实：不隐瞒关键证据、不篡改数据，防止用半个证据集骗取信任。可反驳：主张要可检验、允许对方提出反证，防止把宣告当成论证。不操纵：不用与论题无关的情绪压力替代理由，防止绕过对方的判断。",explanation:"三条原则对应三种失效方式：信息不全、不可检验、绕过理性。它们的共同目标是让讨论可以继续，而不是让某一方赢。",skill:"论证伦理"}]}],Bt={title:"逻辑学导论",edition:"第 15 版",authors:"欧文·M. 柯匹（Irving M. Copi）、卡尔·科恩（Carl Cohen）、维克多·罗迪奇（Victor Rodych）",publisher:"中国人民大学出版社（中译本）",note:"课程按该版三篇十四章的结构编排，逐节对应原书小节号；讲解文字全部重新撰写，不复制教材原文。"},V3=[{id:1,title:"逻辑学基础",en:"Foundations",chapters:"第 1–2 章",summary:"先把「论证」这件事看清：前提、结论、有效性、演绎与归纳，以及如何把一段杂乱的话整理成标准论证。"},{id:2,title:"语言与定义",en:"Language & Definition",chapters:"第 3 章",summary:"论证是用语言做的。含混、歧义、情感语言会悄悄改写前提；定义则是把词钉死在某个含义上的工具。"},{id:3,title:"命题逻辑",en:"Propositional Logic",chapters:"第 8–9 章",summary:"用符号把「并且、或者、如果」写成公式，用真值表判定有效性，再学会用十九条规则一步步做形式证明。"},{id:4,title:"谓词逻辑与直言三段论",en:"Predicate Logic & Syllogism",chapters:"第 5–7 章、第 10 章",summary:"从「所有 S 是 P」出发，走完亚里士多德三段论的老路，再进入量词与谓词，处理命题逻辑吃不下的内部结构。"},{id:5,title:"归纳、类比与因果",en:"Induction, Analogy & Causation",chapters:"第 11–14 章",summary:"前提不保证结论时，推理还剩下什么价值？类比、因果五法、假说与概率，构成日常判断的真实战场。"},{id:6,title:"谬误与批判性思维",en:"Fallacies & Critical Thinking",chapters:"第 4 章",summary:"把前五个阶段的工具合成一张谬误地图：相干谬误、不当归纳、预设谬误、含混谬误，逐一拆解并学会反驳。"}],G3=[F3,H3,_3,Q3,U3,W3].map(e=>e.map(t=>({...t,quiz:t.quiz.map(L3)}))),mr=V3.map(e=>({...e,lessons:(G3[e.id-1]??[]).slice().sort((t,r)=>t.no-r.no)})),yt=mr.flatMap(e=>e.lessons),hl=e=>yt.find(t=>t.id===e),rm=e=>yt.findIndex(t=>t.id===e),Ws=yt.length;yt.reduce((e,t)=>e+t.quiz.length,0);Array.from(new Set(yt.flatMap(e=>e.concepts)));function X3(e){return mr.find(t=>t.lessons.some(r=>r.id===e))}function Y3(e){const t=rm(e);return t>=0?yt[t+1]:void 0}function K3(e){const t=rm(e);return t>0?yt[t-1]:void 0}const Z3=Object.fromEntries(yt.flatMap(e=>e.quiz.map(t=>[t.id,{lesson:e,quiz:t}]))),Kt=[{id:"c01",domain:"新闻报道中的逻辑问题",title:"一份问卷怎么就成了「业主的意愿」",summary:"报道把「回收问卷中的八成」读成「全体业主的八成」，样本与总体之间少了一座桥。",background:"某市一份社区报的民生版面，报道了老旧小区加装电梯的推进情况。报道依据的是业委会自行组织的一次问卷调查，记者没有追问发放范围与回收率。",passage:"本报讯 记者昨日从某小区了解到，该小区业主委员会就加装电梯一事开展问卷调查。此次调查共回收问卷 120 份，其中 96 份表示支持，占比八成。业委会负责人表示，问卷是发在业主群里的，大家都很关心这件事。他说，小区业主的意愿已经很清楚，加装电梯获得绝大多数业主支持，下一步将按此推进。",premises:["共回收问卷 120 份，其中 96 份表示支持","问卷通过业主群发放","96 份占回收问卷的八成"],conclusion:"该小区绝大多数业主支持加装电梯",hidden:["填答的业主与没填答的业主，在意见上没有系统性差别"],structure:"P1 + P2 + P3 →（隐含 P4：回收样本可代表全体业主）→ C",check:"用样本代表性标准检验。先问三件事：总体有多大、抽样方式是什么、回收率多少。120 份这个数字本身说明不了代表性，因为八成这个比例的分母是「回收问卷」，不是「全体业主」。凡是在业主群里发问卷，活跃发言的那批人天然被放大。",error:"问题出在第二句和第四句。第二句的「占比八成」，分母是 120 份回收问卷；第四句把它直接读成「小区业主的意愿」，分母悄悄换成了全体业主。第三句「发在业主群里」正好暴露了取样偏差——不在群里、不常看群的业主，根本没进入样本。全篇没有交代发放总数与回收率。",rewrite:"该小区业委会就加装电梯发放问卷 300 份，回收 120 份，回收率 40%。回收问卷中 96 份表示支持，占 80%。由于未填答者的意见尚不清楚，这一结果只反映参与者的倾向，不足以代表全体业主。业委会将补充入户走访，并把两类结果一并公布。",lessonRef:"s6-09"},{id:"c02",domain:"新闻报道中的逻辑问题",title:"溺水与冰淇淋一起上升，谁该负责",summary:"两个变量五年同步上升，评论直接点名前者的「刺激作用」，把共同原因当成了因果链。",background:"某市一份都市报做了一组夏季安全专题，记者调取了公共卫生与消费两组年度数据，配发了一篇评论。数据本身没有问题，问题出在评论的解读方式上。",passage:"本报统计发现，过去五年里，某市连续高温天数逐年增加，冰淇淋销量与泳池溺水送医人数同步上升。有评论认为，冰淇淋消费的快速增长刺激了市民下水消暑的意愿。该评论据此提出，冰淇淋是溺水事件增多的重要原因，建议对冷饮促销加以限制。",premises:["过去五年，连续高温天数逐年增加","冰淇淋销量与溺水送医人数同步上升","两者在时间上高度共变"],conclusion:"冰淇淋消费是溺水事件增多的重要原因，应限制冷饮促销",hidden:["共变的两个变量之间，存在一条由前者指向后者的作用机制"],structure:"P1 + P2 + P3 →（隐含 P4：共变由前者引起后者）→ C",check:"用因果五法里的共变法检验。共变法只能提出候选原因，不能定因果，因为它默认排除了第三变量。这里第一句已经把第三变量写在纸面上了：连续高温天数增加。高温同时推高冰淇淋销量和下水人数，两条曲线一起动，源头在气温。",error:"第二句「刺激了市民下水消暑的意愿」把一个从未观测过的心理机制当成已确认的事实，这是全段最关键的跳跃。第三句「重要原因」四个字直接给了因果结论。其实第一句自己就交出了答案：高温既让人买冰淇淋，也让人下水。同因共变，被写成了因果。",rewrite:"过去五年，某市连续高温天数逐年增加，冰淇淋销量与泳池溺水送医人数同步上升。两组数据更可能同时受高温推动，彼此之间是否另有因果联系，现有统计无法判断。要把这个问题做实，需要比较气温相近、冰淇淋销量差异较大的两个夏季，看溺水率是否随之变化。",lessonRef:"s6-11"},{id:"c03",domain:"商业广告中的论证",title:"主任医师站台，手表就成了医疗级",summary:"把一位专家的个人佩戴感受，升格为「达到医疗级」的机构结论，中间跳过全部检测环节。",background:"某智能手表品牌召开新品发布会，主打血压监测功能。品牌方邀请了一位心内科医师出镜，拍摄了一支体验短片，发布会在短片播放后进入价格环节。",passage:"某智能手表品牌在新品发布会上介绍，这款手表的血压功能邀请到某三甲医院心内科主任医师参与体验。短片里，这位医师说，佩戴一个月，数据看着挺准。主持人随即总结：连主任医师都认可，说明这款手表的血压监测已经达到医疗级水准。他补充说，日常健康管理完全可以放心交给它。",premises:["一位心内科主任医师参与了产品体验","该医师说「佩戴一个月，数据看着挺准」","这位医师是三甲医院的心内科专家"],conclusion:"这款手表的血压监测达到医疗级水准，可放心用于日常健康管理",hidden:["专家的个人观感可以代替测量学验证","心内科的专业身份，能覆盖他对消费电子产品的判断"],structure:"P1 + P2 + P3 →（隐含 P4：专家认可即达到医疗级）→ C",check:"先做形式检验：如果「专家认可」真能推出「达到医疗级」，这个推理是有效的，所以毛病不在形式，在隐含前提。再查前提真实性：第二句的原话是「看着挺准」，这是主观感受；「医疗级」是一个有明确检测标准的说法，需要精度、误差范围、临床比对数据。诉诸权威的检验有三条：专业是否对口、该领域是否有共识、有没有利益关系。",error:"第三句「连主任医师都认可」是全段的转换器，它把第二句的「看着挺准」升级成了「认可」，再从「认可」跳到「达到医疗级」。这个「医疗级」没有任何检测报告支撑。第一句的「参与体验」也说明这是体验，不是临床试验。专家的身份是真的，可他的专业管的是血压病的诊断，不管一块光电传感器的测量误差。",rewrite:"这款手表邀请一位心内科医师参与一个月佩戴体验，他反馈读数与家用血压计接近。第三方报告显示：静坐状态下与标准血压计相比，收缩压平均误差 ±5 mmHg。产品定位为日常趋势参考，不用于诊断，读数异常时以医疗设备为准。",lessonRef:"s6-06"},{id:"c04",domain:"商业广告中的论证",title:"「不报名就是不爱孩子」的促销话术",summary:"全篇靠焦虑与时间压迫推进，从头到尾没有一句说明课程本身有没有效果。",background:"某在线教育机构在暑期前投放了一轮信息流广告，主打AI辅导。广告没有介绍师资与课程结构，用一位家长的自述和一句倒计时文案收尾。",passage:"某在线教育机构的广告写道：别的孩子已经在用AI辅导，你的孩子还在自己啃课本。一位妈妈说，她咬咬牙报了名，因为「我不想十年后孩子问我，当年你为什么没帮我一把」。广告最后说：现在下单，就是给孩子一个更好的未来。犹豫的每一分钟，都是在对孩子的将来打折。",premises:["其他家庭已经在使用AI辅导","一位家长报名后感到心安","现在下单有价格优惠，且名额有限"],conclusion:"你应该立刻下单购买这门课程",hidden:["报名与孩子未来变好之间存在确定的因果关系","家长的焦虑强度，等于这个决定正确的程度"],structure:"P1 + P2 + P3 →（隐含 P4：用了就更好，不用就落后）→ C",check:"结论是一个行动指令，前提是情绪唤起加未经支持的因果断言。按有效性检验，从「别人在用」推「你该买」，必须补上「用了就更好」这一条，而广告恰恰把它省略了。再查归纳：全篇没有样本、没有效果数据，连一句「提分多少」都没有。",error:"第三句「现在下单，就是给孩子一个更好的未来」把购买行为和孩子的未来直接画等号，中间那句「辅导确实有效」被整段跳过。第四句「犹豫的每一分钟……打折」用时间压力替代理由，这是诉诸情感的标准动作。第二句「咬咬牙」把支付时的痛苦当成必要性的证据，读者被引导去佩服这份牺牲，而不是去核对课程。",rewrite:"这门课程提供 12 周分层练习，每周一份学情报告。上一期 800 名学员中，完成全部练习的 610 人平均提高 8.3 分，未完成者提高 1.1 分。前两周可无理由退款，是否适合，先做一次免费学情诊断。",lessonRef:"s6-07"},{id:"c05",domain:"公共演讲中的论证结构",title:"演讲里的「一步退，步步退」",summary:"三个「就会」把可能性写成必然性，终点是「什么都推不动」，起点只是改个交周报的时间。",background:"某公司部门例会上，主管针对员工提出的「周报时间从周五放宽到周一」做回应。这段发言被同事录下来，后来成了内部培训里讲滑坡谬误的例子。",passage:"某位部门主管在全员会上说，这次如果同意把提交周报的时间从周五放宽到周一，下周就会有人要求改成周二，再下周就会有人说干脆两周一次。规矩一旦松动，团队的执行力就会一点点散掉。到最后什么任务都推不动。所以，周报时间一天都不能改。",premises:["如果同意放宽到周一，随后会有人要求继续放宽","规矩一旦松动，执行力会逐渐下降","执行力下降最终导致任务推不动"],conclusion:"周报提交时间一天都不能改",hidden:["每一步放宽都必然引发下一步，中间不存在可以停下的机制"],structure:"P1 → P2 → P3 → C（每一步都按「必然」传递）",check:"滑坡论证的评价标准有三条：每一环的概率是否独立成立、环节之间是否真有推动机制、链条上有没有刹车。这里三环全靠第一句的三个「就会」串起来，「就会」是必然性的词，实际只是可能性。把每环概率乘起来，终点那个「什么都推不动」几乎不会发生。",error:"第一句三个「就会」把可能发生的事写成必然发生的连锁，这是全段的承重墙，也是最脆的一环。第二句「一点点散掉」没有给出任何机制、先例或数据，属于用画面代替论证。第四句「一天都不能改」的强度远超前提：前提就算全部成立，也只支持「谨慎试点、设复核点」，推不出「一天都不能改」。",rewrite:"放宽周报时间，后续可能带来松动要求。建议先试行三个月：只放宽这一项，其他节点不变。三个月后看按时提交率与内容完整度，任一项下降超过 10 个百分点就恢复原时间。这样既回应困难，也留了闸门。",lessonRef:"s6-04"},{id:"c06",domain:"公共演讲中的论证结构",title:"一段把话说得刚刚好的动员讲话",summary:"数字可核对、结论有限定、请求与风险相称，是一段结构干净、值得模仿的实践推理。",background:"某社区在暑运高峰前组织志愿者值守公交站台。动员会上，负责人的发言只有五句话，会后两小时内报名时段就被填满。这段讲话后来被街道当作动员模板。",passage:"某社区负责人在志愿者动员会上说，去年我们 60 位志愿者承担了 12 个点位的值守，全年没有出现一次漏岗。今年点位增加到 18 个，报名的人还是 60 位左右。人没多，点位多了五成。如果不提前排班、不设替补，今年很可能有地方会空着。所以我请大家今天就把能来的时段报上来。",premises:["去年 60 位志愿者覆盖 12 个点位，全年没有漏岗","今年点位增至 18 个，报名人数仍在 60 位左右","若不提前排班并设置替补，覆盖会出现缺口"],conclusion:"请大家当场报出自己能来的时段",hidden:["每个点位的值守强度与去年大致相当","去年的零漏岗有一部分来自排班与替补机制"],structure:"P1 + P2 + P3 →（隐含 P4：单人可承担的班次与去年相当）→ C",check:"这是带数字的实践推理：资源不变、需求上升五成，覆盖风险随之上升。形式上是「供给固定、需求增加 → 缺口风险」，有效性成立。归纳部分强度也高，因为基数小（60 人、18 个点位），可以直接核算，不必依赖抽样。结论只要求「报时段」，属于低成本的试探性行动，与前提强度相称。",error:"这里没有问题，值得学的是它为何成立。三点做得好：一是给的全是可核对的具体数字（60、12、18），听众可以自己算；二是结论限定在「很可能有地方会空着」这种可检验的风险判断上，没有升级成「大家都不负责」；三是请求的动作很小，只要求报时段。硬要挑，「点位多了五成」默认了人力需求随点位线性增长，如果新点位更密集、单人可兼顾，实际缺口会小于五成。这一点会让估算偏保守，不影响结论方向。",rewrite:"去年 60 位志愿者守住 12 个点位，全年零漏岗。今年点位增到 18 个，报名仍是 60 位左右，人均覆盖多了五成。若新点位距离较近，实际压力会小些，但仍需提前排班、设置替补，否则很可能有站点空着。请大家今天报时段，我们按距离重新编组。",lessonRef:"s1-06"},{id:"c07",domain:"商业谈判中的逻辑策略",title:"谈判桌上那句「要么……要么……」",summary:"把四五个现成方案压成两个极端，再用「你们应该清楚」把压力包装成理由。",background:"某公司采购部门与一家合作三年的包装供应商谈年度续约。供应商报价上涨 8%，采购主管需要在当天的会议上给出答复，他选择了一个强硬的开场。",passage:"某公司采购主管与某包装供应商谈价时说，你们的报价比去年高了 8%。我们只有两个选择，要么你们按原价续签，要么我们这次就换供应商。市场竞争这么激烈，你们应该清楚该怎么选。",premises:["供应商报价比去年高 8%","摆在桌上只有「原价续签」和「换供应商」两个选项"],conclusion:"供应商应按原价续签",hidden:["换供应商对采购方也不产生额外成本","任何中间方案都不可行"],structure:"P1 + P2 →（隐含 P3：只存在两个选项）→ C",check:"虚假两难的检验很直接：把被排除的选项一条条列出来，看它们是否真实可行。这一步不需要任何形式工具，只需要把谈判桌上的备选方案摊开。这里至少有三条中间路线：分批锁价、调整规格降克重、延长账期换价格。选项一旦多于两个，「只有两个」这个前提就假了，整个论证随之失效。",error:"第二句「我们只有两个选择」是全段的支点，也是唯一需要被验证的一句，而它明显不成立。第三句「你们应该清楚」用压力代替论证：它既没说清换供应商对采购方意味着多少切换成本，也把「我方不怕换」这个没说的前提当成了共识。真正有力的做法是把成本摊开算，而不是把选项砍到两个。",rewrite:"你们报价比去年高 8%，超出我们的预算区间。有三种可能：分两季锁价，先按 4% 执行；维持原价，外箱克重下调一档；延长账期到 90 天换价格。这三条哪条能接受，今天就可以定。换供应商是兜底方案，不是首选。",lessonRef:"s6-05"},{id:"c08",domain:"商业谈判中的逻辑策略",title:"用一张成本清单撑起来的涨价理由",summary:"四步算术可以复核，报出的涨幅还低于测算值，属于结论弱于前提的稳妥写法。",background:"某汽车零部件供应商与主机厂续约，原材料与能源价格在过去一年明显上行。供应商没有诉苦，直接提交了一页成本拆解表，谈判因此在一小时内结束。",passage:"某零部件供应商在续约谈判中提交了一份成本说明。过去 12 个月，主要原材料的采购均价上涨 14%，能源单价上涨 9%。这两项合计占其出厂成本的 61%。按加权计算，仅这两项就推高总成本约 10.6%。供应商据此提出涨价 8%，理由是「我们把一部分涨幅自己消化了」。",premises:["原材料均价上涨 14%，能源单价上涨 9%","两项合计占出厂成本的 61%","加权计算后，两项合计推高总成本约 10.6%"],conclusion:"本轮续约价格上调 8% 是合理的",hidden:["人工、折旧等其他成本项与产量在同期没有显著变化","该成本结构在同行业中具有可比性"],structure:"P1 + P2 → P3（算术）→（隐含 P4：其他成本项稳定）→ C",check:"先把算术复核一遍：两项合计占成本 61%，涨幅在 9% 到 14% 之间，加权后落在 10% 出头，与 10.6% 相符。推理形式上没有问题。再看结论强度：报出 8%，低于测算的 10.6%，属于「结论弱于前提」的写法，天然留了议价空间，也给对方留下了核查余地。这是谈判里少见的、可以被对方验证的论证。",error:"这里基本成立。可取之处有三：数字给到具体百分比、把口径写明是「出厂成本」、报出的涨幅低于自己算出的涨幅。瑕疵在第五句的措辞——「我们把一部分涨幅自己消化了」把「没有全额转嫁」说成一种让利，这是立场包装，对方完全可以回一句「那你为什么不消化全部」。另外第二句的「均价」没交代采购批次与锁价比例，信息不全，但不影响推理骨架。",rewrite:"过去 12 个月，原材料采购均价涨 14%，能源单价涨 9%，两项占出厂成本 61%，加权推高总成本约 10.6%（附发票与能耗单）。人工与折旧同期持平。按成本传导应涨 10.6%，我们提出 8%，差额由内部效率承担，也可分两步执行。",lessonRef:"s5-06"},{id:"c09",domain:"日常争论中的常见谬误",title:"争到一半，开始查对方的房本",summary:"三组数据摆在那里没人回应，回应的是一句「你一个租户」，话题从方案换成了人。",background:"某小区业主群讨论绿化带改停车位。一位租户业主先发了统计，随后被另一位业主用身份问题打断，讨论自此偏航了三十多条消息。",passage:"小区群里讨论要不要把绿化带改成停车位。一位业主列了三组数据：现有车位 210 个、登记车辆 340 辆、晚高峰绕行平均 11 分钟。另一位业主回复：你一个租户，房子都不是你的，也好意思在这谈小区规划？等你买了房再说吧。",premises:["发言者是小区的租户","租户对小区的长期利益关联较弱"],conclusion:"这位租户关于停车位的数据和主张不值得考虑",hidden:["只有产权人才能对公共空间发表有效意见","发言者的身份决定其论据的质量"],structure:"P1 + P2 →（隐含 P3：身份决定论据质量）→ C",check:"用相干性检验：把前提与结论之间的连接词找出来。P1、P2 讲的是「谁在说」，C 讲的是「说得对不对」，两者之间那条线本来就接不上。再做一个删除测试：把「你一个租户」整句拿掉，剩下的内容对那三组数据构成任何反驳吗？一句也没有。",error:"第三句「你一个租户」把讨论对象从方案换成了人，「也好意思」是情绪词，不承担论证功能。第四句「等你买了房再说」设置了一个与论据质量无关的准入门槛。真正的缺口在第二句：210 个车位对 340 辆车、绕行 11 分钟，这组数据从头到尾没被回应，而它恰恰是唯一值得争的东西。",rewrite:"你给的三个数我看到了：210 个车位、340 辆车、绕行 11 分钟。缺口确实存在。我想追问的是，改造能增加多少车位，绿化带减少后老人和孩子的活动空间怎么补。至于谁有没有房本，跟这两笔账没关系，我们按数据谈。",lessonRef:"s6-02"},{id:"c10",domain:"日常争论中的常见谬误",title:"把「少开一半灯」听成「全小区摸黑」",summary:"提议是关一半照明、保留主通道，被复述成「全关」，然后用这个版本驳了整整一段。",background:"某小区物业与业主代表就地下车库能耗开会。业主代表带着一份电费单到场，物业经理在听完第一句后就开始回应。",passage:"业主代表提议，地下车库夜里 12 点后可以关掉一半照明，保留主通道，一年能省下不少电费。物业经理回应：你的意思是要把车库的灯全关了？业主晚上回来摔一跤谁负责？为了省那点钱，让整个小区摸黑走路，这种提议我们不能接受。",premises:["提议的内容是深夜关闭一半照明、保留主通道","回应者把该提议理解为关闭全部照明","全部关闭会造成安全隐患"],conclusion:"这个提议不可接受",hidden:["关掉一半照明等同于全部关闭","节省电费与夜间安全无法兼顾"],structure:"P1 →（改写为 P1′：关闭全部照明）+ P2 → C（驳倒的是 P1′）",check:"把原命题与回应里的命题并排放，逐字比对是否同一。原命题含两个限定词「一半」「保留主通道」，回应里的版本把两个限定词都删了，命题强度被抬高。这是稻草人的判定方法：被驳倒的命题，是不是对方真的主张过的那个。",error:"第二句「你的意思是要把车库的灯全关了」是一次明显的加码改写，全段的分量都压在这个改写上。第三句接着追问被改写后的版本要谁负责，第四句「摸黑走路」继续沿用这个版本，「为了省那点钱」还把成本考虑贬成动机。整段驳倒的是一个没人提过的主张，原提议里的「保留主通道」一次也没被讨论。",rewrite:"你的提议是关掉一半照明、保留主通道。我需要确认两点：一是这一半具体怎么分，主通道和拐角的照度能否维持；二是应急照明的线路是否独立。如果这两点能保证，可以先在一个区域试一个月，看电费降多少、有没有投诉，再决定是否推开。",lessonRef:"s6-03"},{id:"c11",domain:"社交媒体中的错误推理",title:"「没人证明是假的」就值得转发",summary:"把「官方没辟谣」当成「消息为真」的证据，缺证据被读成了有证据。",background:"一条关于蔬菜保鲜剂的短视频在某平台获得百万播放。视频没有标注拍摄时间与地点，评论区最高赞是一条关于「官方没辟谣」的推断，随后被截图转到了多个家庭群。",passage:"一条短视频称某地产蔬菜喷洒了工业保鲜剂，画面里有浑浊的水池。评论区最高赞写道：官方到现在都没出来辟谣，说明这事八成是真的。要是假的，早就有人管了。转发给你家里人，宁可信其有。",premises:["该说法流传了一段时间，官方尚未公开回应","如果说法为假，官方会很快回应"],conclusion:"这个说法大概率为真，应当转发提醒家人",hidden:["监管部门的响应速度足以覆盖所有网络传言","未回应等同于默认"],structure:"P1 + P2 →（隐含 P3：未回应即默认）→ C",check:"这是诉诸无知：从「没有反证」推「命题成立」。逻辑上，缺证据只让我们悬置判断，不能给任何一方加分。再看第二句那个假设本身：监管回应需要检测、取样、走流程，几天内没有公开表态是常态，把它当成默认，等于给「没说话」赋了一个它承担不起的含义。",error:"第二句「没出来辟谣，说明……是真的」把举证责任空缺当成了正面证据，这是全段的核心错误。第三句「要是假的，早就有人管了」是第二个未经支持的假设，它默认了监管的响应速度与覆盖面。第四句「宁可信其有」干脆放弃了判断，把一个待查证的问题转成了行动指令。第一句里「某地」这个模糊限定，也从未被追问。",rewrite:"这条视频没有标注拍摄时间和地点，画面里的水池与所称的保鲜剂之间也没有直接关联。目前无法确认它说的是哪一批蔬菜。合理的做法是等市场监管部门的抽检结果，同时把视频提交给平台核查来源。在结果出来之前，不必转发，也不必据此改变购买习惯。",lessonRef:"s6-09"},{id:"c12",domain:"社交媒体中的错误推理",title:"九张关店照片拼出的「全面衰退」",summary:"三个老商圈的九家店，被当成整个行业的切片；唯一一份全行业统计，被一句「平均数骗人」打掉。",background:"某财经博主以实地走访为卖点，长期发布行业观察。这一期他走了三个老城区，拍下九家关门店面，配文断言行业进入全面衰退，阅读量远超他平时的数据贴。",passage:"某财经博主发文称某行业正在全面衰退，配了九张门店照片：卷帘门拉下、货架清空、门口贴着转租。文中说，我跑了三个城区，看到的都是这个样子。至于行业协会公布的季度营业额微增 1.2%，博主解释说，那只是头部几家在撑，平均数骗人。",premises:["在三个城区拍到的九家门店均已关闭","这三个城区的门店状况看起来一致","行业协会统计的季度营业额微增 1.2%"],conclusion:"该行业正在全面衰退",hidden:["三个城区的九家门店能代表整个行业","关店数量多于同期新开店数量"],structure:"P1 + P2 →（隐含 P3：样本可代表全行业）→ C；对不利证据 E 只作口头否定",check:"两项检查。样本代表性：三个老城区、高租金地段，本来就是关店最集中的地方，选址自带偏差，属于便利样本。证据完整性：唯一覆盖全行业的统计被一句话打掉，却没有给出中位数、门店净增数、单店坪效等任何替代指标。用不利证据的处理方式，比用有利证据更能看出一个论证的成色。",error:"第二句「我跑了三个城区」把便利样本当成了全域样本，九家店的分母也没交代：同期这三个城区新开了多少家？第三句对 1.2% 的处理只有「平均数骗人」五个字，没有给任何替代数据。这句反驳本身可能是对的——平均数确实会被头部拉高——但它需要中位数来支撑，而博主跳过了这一步，直接用它保住了结论。取证的取舍标准由结论倒推，这就是选择性证据。",rewrite:"我在三个老城区记录九家关门店面，多位于高租金临街位置，同期同区域新开四家，净减五家。协会数据显示全行业季度营业额微增 1.2%，其中头部五家贡献 3.4 个百分点，其余企业合计下降。两组数据指向门店结构向头部集中。",lessonRef:"s6-12"},{id:"c13",domain:"科学研究中的证据与推论",title:"一项对照试验能说明到哪一步",summary:"随机、双盲、对照三件套齐全，结论还主动加了两道限定，是一段教科书式的推断。",background:"某研究团队完成了一项为期 12 周的随机对照试验，论文发表在一份同行评议期刊上。摘要里没有出现「治愈」「显著改善生活质量」这类词，只有一句范围明确的结论。",passage:"某研究团队招募 480 名受试者，随机分为两组。一组每天服用受试制剂，另一组服用外观相同的安慰剂，为期 12 周，受试者与评估者均不知分组。结果显示，干预组某项指标平均改善 6.4%，对照组改善 1.1%，差异在统计上显著（p<0.01）。论文结论写道：该制剂在 12 周内可改善该指标。",premises:["480 名受试者随机分为干预组与对照组","试验采用双盲设计，为期 12 周","干预组改善 6.4%，对照组改善 1.1%，差异 p<0.01"],conclusion:"该制剂在 12 周内可以改善该指标",hidden:["试验人群与目标人群的基线特征相近","12 周内没有严重不良反应影响依从性"],structure:"P1 + P2 + P3 →（隐含 P4：组间差异由制剂引起）→ C",check:"这是因果推断里最强的设计之一：随机化消除了选择性偏差，双盲压住了期望效应，对照组排除了自然波动。内部效度好。归纳强度取决于效应量、样本量与可重复性——样本 480 人、效应量约 5 个百分点、p<0.01，属于中等偏强的证据。结论本身做了两处限定，没有越界。",error:"这里没有问题。它值得学的地方有三处：结论只说「12 周内」，交代了时间边界；只说「该指标」，没有外推到整体健康；没有写「治愈」。可挑的瑕疵在第三句：只报了统计显著性，没讨论 6.4% 这个效应量在临床上算不算有意义。显著性回答的是「差异是否可能来自偶然」，不回答「这点改善值不值得用」。这属于解释层面的补充，不影响推论骨架。",rewrite:"480 名受试者随机分组，双盲，为期 12 周。干预组目标指标改善 6.4%，对照组 1.1%，差异具统计显著性（p<0.01），效应量约 0.4 个标准差。该幅度是否有临床意义，尚需更长周期验证。结论限于 12 周内的该指标变化。",lessonRef:"s5-04"},{id:"c14",domain:"科学研究中的证据与推论",title:"小鼠身上的结果，能不能直接搬给人",summary:"肌肉结构相似被当成通行证，剂量、代谢、菌群这些真正决定口服效果的因素全被略过。",background:"某保健品在电商详情页引用了一项动物实验。实验本身设计规范，问题出在详情页把实验结果转成人体功效的那一段，文案写得比论文大胆得多。",passage:"某保健品宣传称，在一项实验中，喂食该成分的小鼠运动耐力比对照组提高了 40%。宣传页写道：小鼠和人的肌肉结构高度相似，既然小鼠吃了有用，人吃了当然也有用。每天两粒，让你也拥有实验鼠的耐力。",premises:["喂食该成分的小鼠，运动耐力提高 40%","小鼠与人的肌肉结构高度相似"],conclusion:"人服用该成分也会获得同样的耐力提升",hidden:["按体重换算的剂量在人体内仍然安全有效","该成分在人与小鼠体内的吸收与代谢路径可比"],structure:"P1 + P2 →（隐含 P3：相似点覆盖了差异点）→ C",check:"类比评价标准三条：相似点是否与结论相关、差异点是否更关键、能否构造出反向类比。肌肉结构相似与「口服成分能否在人体内达到有效浓度」相关性很弱；而剂量换算、代谢酶、肠道菌群、半衰期这几项差异，恰恰决定口服成分的效果。第一条就没过，后面不必再算。",error:"第二句「当然也有用」把类比结论写成了演绎结论，「当然」两个字省掉了全部验证环节。「高度相似」只点了肌肉结构这一处，刻意绕开了真正决定结果的三处差异：剂量按体重换算后是否还安全、代谢路径是否一致、小鼠与人的肠道菌群差异。第三句「实验鼠的耐力」把实验条件下的指标直接搬到消费者身上，属于修辞滑移。",rewrite:"一项小鼠实验显示，在每日每公斤体重 200 毫克的剂量下，实验组小鼠的力竭游泳时间比对照组延长 40%。这一结果只说明该成分值得进一步研究。人体等效剂量、长期安全性、能否复现同等效果，都要靠临床试验回答，目前没有人体验证数据。",lessonRef:"s6-10"},{id:"c15",domain:"历史事件中的因果分析",title:"招牌新政之后，空置率上去了",summary:"半年、8% 到 13%、全市只涨 1 个点，这组数据很有力，可惜中间缺了干扰因素的排查。",background:"某地一份评论刊物就老城区商铺空置问题刊发短文，把原因归到半年前实施的招牌统一管理上。编辑部配了一张对比图，没有采访商户与地产中介。",passage:"某地一份评论文章写道，去年 3 月本地出台严格的商铺招牌管理办法，要求统一尺寸与色调。此后半年，老城区的商铺空置率从 8% 上升到 13%，同期全市平均只上升了 1 个百分点。可见，招牌新政吓跑了商户，是空置率上升的主要原因。",premises:["去年 3 月出台招牌管理办法，要求统一尺寸与色调","此后半年，老城区空置率从 8% 升到 13%","同期全市平均空置率只上升 1 个百分点"],conclusion:"招牌新政是空置率上升的主要原因",hidden:["这半年内，老城区没有发生其他足以影响空置率的特殊变化"],structure:"P1 + P2 + P3 →（隐含 P4：无其他干扰因素）→ C",check:"这段其实用了一个不错的因果设计：有处理组（老城区）、有对照（全市平均），属于差异法的雏形。但差异法的前提是「其他条件相同」，而全市对照只能排掉全市共性因素（比如整体消费下行），排不掉老城区特有的因素。要补这一步，得看这半年里老城区有没有地铁施工、租金调整、大型商场开业或搬迁。",error:"第二句「此后半年」把时间先后当成了因果线索，第三句的「可见」一步跨过了干扰因素排查，这是事后归因的加强版——它多了一个对照，所以看起来更硬，实际只排掉了一半干扰。数据本身是有价值的线索，问题在于把它当成了结论的全部依据。",rewrite:"去年 3 月招牌办法实施后半年，老城区空置率从 8% 升到 13%，全市平均升 1 个百分点。同期老城区还有两项变化：地铁施工围挡占用两条主街，两家大商场在新城区开业。可比较老城区内未受施工影响的路段，看空置率是否同样上升。",lessonRef:"s6-11"},{id:"c16",domain:"历史事件中的因果分析",title:"三种证据咬合出来的一条因果链",summary:"空间梯度、上下游对照、改水前后比较，三条独立线索指向同一个原因，还主动交代了干扰项。",background:"某史学研究者考察一次十九世纪港口城市的霍乱流行，论文用三组彼此独立的材料重建了传播路径。这类研究没有实验可做，全靠史料之间的交叉印证。",passage:"某史学研究者考察一次十九世纪港口城市的霍乱流行，提出水源污染是主因。证据有三：死亡病例在空间上沿同一家水厂的供水管网分布，越往管网末端死亡率越高。该水厂取水口位于城市下游排污区，同期另一家取水上游的水厂用户死亡率明显较低。水厂改用上游水源后，该区域死亡率在两个月内回落。作者同时说明，当时的气候与人口流动未见异常。",premises:["死亡病例沿同一家水厂的管网分布，越往末端死亡率越高","取水下游的水厂用户死亡率，明显高于取水上游的水厂用户","该水厂改用上游水源后，区域死亡率在两个月内回落","同期气候与人口流动未见异常"],conclusion:"水源污染是这次霍乱流行的主因",hidden:["这期间的诊断标准与死亡登记口径保持一致","不存在与供水管网重合的其他暴露途径"],structure:"P1（共变）+ P2（差异）+ P3（干预前后）+ P4（排除干扰）→ C",check:"三条证据分别对应因果五法里的共变法、差异法、干预前后比较，第四句补上了对干扰因素的排查。这已经是历史因果分析能达到的较高强度：三种互相独立的证据指向同一结论，任何单一替代解释都要同时解释这三条，难度很高。",error:"这里没有问题。它的强处在于把「相关」「对照」「干预」三种证据交叉起来用，并且主动交代了自己没有看到的干扰项——第五句那句「气候与人口流动未见异常」，是很多同类研究省略掉的部分。真要挑，只能说「主因」的排序还需要与水源性食物等其他途径做定量比较，那属于可以继续补强的地方，不属于谬误。",rewrite:"死亡分布沿同一水厂管网呈梯度，管网末端最高；取水下游的水厂用户死亡率显著高于取水上游者；该厂改用上游水源两个月后，死亡率回落；同期气候与人口流动无异常。三组证据指向水源污染，它在各途径中的比重仍需与食物、接触途径比较。",lessonRef:"s5-03"}],z1=[{id:"ch01",question:"所有的 A 都是 B，所有的 B 都是 C。那么所有的 A 都是 C 吗？",hint:"先别急着答「是」，试着把 A、B、C 换成三个具体的类。",analysis:"是。这是三段论第一格的 AAA 式（Barbara），形式为：$A \\subseteq B$，$B \\subseteq C$，故 $A \\subseteq C$。集合的包含关系具有传递性。注意它成立的条件是「所有」——一旦换成「有些 A 是 B」，传递就断了。",tag:"三段论"},{id:"ch02",question:"如果一个人说的话是真的，那么这个人一定诚实吗？",hint:"区分「这句话为真」与「这个人一贯说真话」。",analysis:"不一定。命题的真假与说话者的品格是两件事。一个惯于撒谎的人可能碰巧说出真话；一个诚实的人也可能因为信息错误而说错。把「话真」推成「人诚实」，是把论证的对象从命题偷换成了人。",tag:"人身与品格"},{id:"ch03",question:"一个论点的结论正确，是否意味着论证有效？",hint:"回想有效性的定义：它说的是前提与结论之间的哪种关系？",analysis:"不意味着。有效性说的是「前提真时结论不可能假」，与结论实际上真假无关。一个人可以「碰巧说对」，理由却完全不成立。反过来，一个有效论证也可能因为前提假而得出假结论。结论正确只是结果，有效是结构。",tag:"有效性"},{id:"ch04",question:"如果两件事情同时发生，是否意味着其中一件导致了另一件？",hint:"除了 A 导致 B、B 导致 A，还有第三种可能吗？",analysis:"不意味着。至少有五种解释：A 导致 B、B 导致 A、C 同时导致 A 和 B（共同原因）、纯属巧合、以及两者通过更长的因果链相连。相关性只说明两件事在同一批样本里同向变动，因果需要额外证据。",tag:"因果"},{id:"ch05",question:"为什么一个看似合理的论证可能存在逻辑错误？",hint:"想想「合理」是靠什么骗过我们的：是结构，还是语气？",analysis:"因为人的「合理感」由很多与逻辑无关的因素触发：熟悉感、押韵、权威腔调、情绪共鸣、以及结论符合我们已有的立场。论证的错误往往藏在一个没被说出的前提里，而省略恰恰让它躲过了检查。拆解论证的目的，就是把省略的那一步摆到桌面上。",tag:"批判性思维"},{id:"ch06",question:"「没有人能证明上帝不存在，所以上帝存在。」这句话的问题在哪？",hint:"把「没有证据反对」当成「证据支持」，会推出什么荒唐结论？",analysis:"这是诉诸无知。缺少反证不等于有正证。同一形式可以推出「没有人能证明外星人不存在，所以外星人存在」，还可以推出无数互相矛盾的结论。举证责任在提出主张的一方。",tag:"诉诸无知"},{id:"ch07",question:"「这家餐厅人这么多，一定好吃。」这个推理可靠吗？",hint:"排队的人多，可能说明哪些与味道无关的事情？",analysis:"不可靠，但也不是全无信息量。人多可能与味道相关，也可能与位置、价格、网红营销、旅行团合作有关。这是一个归纳论证：结论有或然支持，强度取决于「人多」与「好吃」之间的关联有多紧密。说它「错」不准确，说它「弱」才准确。",tag:"归纳强度"},{id:"ch08",question:"如果「所有天鹅都是白的」被一只黑天鹅推翻，那「所有金属都导电」为什么可以成立？",hint:"一个靠枚举，一个靠什么？",analysis:"「天鹅是白的」靠简单枚举归纳，样本再多也只是或然；「金属导电」背后有导电机制的理论解释（自由电子），属于有理论支撑的归纳，且「金属」本身是按结构定义的。归纳结论永远可被修正，但理论支撑越强，结论越稳固。",tag:"归纳"},{id:"ch09",question:"「你要么支持我，要么反对我。」这句话漏掉了什么？",hint:"数一数，除了支持和反对，还有几种态度？",analysis:"漏掉了第三种乃至更多选项：不表态、部分支持、支持目标但反对手段、需要更多信息再决定。这是虚假两难（排中谬误的滥用）。真实的排中只适用于「P 或非 P」这种矛盾关系，不适用于人为压缩的立场光谱。",tag:"虚假两难"},{id:"ch10",question:"一段论证里，前提和结论调换位置，还成立吗？",hint:"试一个具体例子：MP 与肯定后件。",analysis:"通常不成立。$p \\to q$ 与 $p$ 可推出 $q$，但 $p \\to q$ 与 $q$ 推不出 $p$。推理的方向性来自条件句的逻辑性质，不是对称的。日常争论中大量错误，就是把「A 推出 B」悄悄当成了「B 推出 A」。",tag:"条件推理"},{id:"ch11",question:"为什么「专家说的」有时可以当成理由，有时不行？",hint:"列出三个条件，检验一次专家意见是否可信。",analysis:"诉诸权威在满足以下条件时是合理的归纳论证：①权威的专长与当前议题直接相关；②该领域内存在共识，或至少这位专家能给出可核查的理由；③专家的意见在其专业范围内，且没有明显的利益冲突。缺一条，权威就只是一个名字。",tag:"诉诸权威"},{id:"ch12",question:"「他去年买了这只基金，赚了 40%，所以你也可以。」问题在哪？",hint:"一个人的结果，能代表多少人？",analysis:"两处问题：样本量为 1（以偏概全），以及幸存者偏差——你只看到赚钱的人，没看到同样操作亏钱的人。要评估策略，需要看全部参与者的分布，而不是最显眼的那个成功案例。",tag:"以偏概全"},{id:"ch13",question:"一个论证的每个前提都真，结论有可能假吗？",hint:"这取决于论证的哪一种性质？",analysis:"可能，只要论证无效。例如「所有猫是动物，所有狗是动物，所以所有狗是猫」——前提都真，结论假。前提真只排除了一种情况之外的所有情况：它保证结论真，需要「有效」这个额外条件。有效 + 前提真 = 可靠（sound）。",tag:"可靠论证"},{id:"ch14",question:"为什么「你说的话有逻辑错误」不等于「你说的话是错的」？",hint:"论证的缺陷与结论的真假，是两个独立的评价。",analysis:"论证有缺陷只说明「这个理由没能支持这个结论」，不说明结论本身假。一个结论可能为真却论证拙劣，也可能为假却论证精巧。正确的反应是：指出论证的问题，同时保留「结论也许另有理由支持」的空间。",tag:"批判性思维"}],U0=[{id:"q1",stem:"「所有 A 都是 B，有的 C 是 A」，能推出什么？",options:["有的 C 是 B","所有 C 都是 B","有的 B 不是 A","推不出任何结论"],answer:"A",explanation:"存在一个 C 是 A，而所有 A 都是 B，故这个 C 也是 B。第二格之外的模式，靠集合包含传递即可。"},{id:"q2",stem:"「如果 P 则 Q」为真，且 Q 为假，那么：",options:["P 真","P 假","P 真假不定","该条件句无效"],answer:"B",explanation:"否定后件式（MT）：$P \\to Q$，$\\neg Q$，故 $\\neg P$。若 P 真则 Q 必真，与 $\\neg Q$ 矛盾。"},{id:"q3",stem:"「没有一个合格的程序员不懂算法。」等价于：",options:["所有懂算法的都是合格程序员","所有合格程序员都懂算法","有的合格程序员不懂算法","不懂算法的人都不是程序员"],answer:"B",explanation:"「没有 S 不是 P」= 所有 S 都是 P。注意 A 项把主谓颠倒了，属于换位不当。"},{id:"q4",stem:"「他不是好人，因为他上次没帮我。」属于：",options:["稻草人","人身攻击","以偏概全","滑坡"],answer:"B",explanation:"用一次具体行为否定整体品格，进而否定其言论，是人身攻击的处境/行为变体。"},{id:"q5",stem:"若「所有 S 是 P」为假，则一定为真的是：",options:["所有 S 不是 P","有的 S 不是 P","有的 S 是 P","所有 P 都是 S"],answer:"B",explanation:"A 与 O 是矛盾关系，必一真一假。所以 A 假则 O 真。「有的 S 不是 P」正是 O。"},{id:"q6",stem:"$\\neg(P \\land Q)$ 等值于：",options:["$\\neg P \\land \\neg Q$","$\\neg P \\lor \\neg Q$","$P \\to Q$","$\\neg P \\to Q$"],answer:"B",explanation:"德摩根律：否定合取等于各支否定的析取。A 是「否定析取」的形式，容易混。"},{id:"q7",stem:"「打碎玻璃的人赔了钱，所以打碎玻璃是违法的。」问题在于：",options:["前提假","把赔偿习惯当成法律义务","循环论证","歧义"],answer:"B",explanation:"从「事实上要赔」推「法律上违法」，中间缺一个前提：所有要赔的行为都违法。这个隐含前提不成立。"},{id:"q8",stem:"「这个班平均分 90，所以我儿子至少 85。」错在：",options:["平均数不能推个体","样本太小","循环论证","没有错"],answer:"A",explanation:"平均数是集中趋势，个体可以远低于均值。要判断个体，需要分布或个体信息。"},{id:"q9",stem:"「A 说 B 撒谎，B 说 A 撒谎，所以两人都在撒谎。」这是：",options:["有效推理","虚假两难","合成谬误","否定前件"],answer:"B",explanation:"两人的话可以一真一假，也可以都真（各自误会），把「互相指责」压缩成「都撒谎」，遗漏了其他可能。"},{id:"q10",stem:"「所有会飞的都是鸟」为假，最好的反例是：",options:["企鹅不会飞","蝙蝠会飞但不是鸟","鸵鸟不会飞","飞机不会飞"],answer:"B",explanation:"要推翻全称肯定，需要「是前者但不是后者」的实例。A、C 只说明有鸟不会飞，D 不是「会飞的」。"},{id:"q11",stem:"「既然允许学生带水，就该允许带饮料。」这属于：",options:["滑坡","错误类比（把水与含糖饮料视为同类）","诉诸大众","循环论证"],answer:"B",explanation:"水与含糖饮料在学校管理语境下并非同类，从「允许水」推到「允许一切饮料」，依赖一个不成立的相似性假设。"},{id:"q12",stem:"演绎论证与归纳论证最关键的区别是：",options:["前提数量","结论是否超出前提所断定的范围","是否使用符号","结论是否为真"],answer:"B",explanation:"演绎结论不超出前提（前提真则结论必然真）；归纳结论超出前提，只能获得或然支持。"},{id:"q13",stem:"「他反对这个方案，因为他去年也反对过类似方案。」这是：",options:["有效反驳","诉诸人身（处境/历史）","归谬法","类比论证"],answer:"B",explanation:"用提出者的历史行为代替对方案本身的评价，属于人身攻击的「你也一样」变体。"},{id:"q14",stem:"「如果下雨，比赛就取消。比赛没有取消。」能推出：",options:["没下雨","下雨了","比赛照常进行且下雨","无法推出"],answer:"A",explanation:"MT：$R \\to C$，$\\neg C$，故 $\\neg R$。这是否定后件式的正确使用。"},{id:"q15",stem:"「这支球队赢了所有主场，所以下一场必胜。」最需要补充的信息是：",options:["下一场是否主场","球员姓名","票价","教练年龄"],answer:"A",explanation:"结论依赖「主场优势」这一规律。若下一场是客场，原论证的前提就与结论无关。"}],Wn=[{id:"d1",text:"我们公司应该允许远程办公。过去两年，两个试点部门的离职率下降了三分之一，而他们的产出并没有减少。既然离职和产出是管理者最关心的两件事，远程办公至少值得在全公司推广。",conclusion:"公司应该允许（至少试行）全员远程办公。",premises:["两个试点部门离职率下降三分之一","两个试点部门产出没有减少"],hidden:["离职率与产出是衡量管理效果的关键指标","试点部门的经验可以推广到其他部门"],note:"这是一个归纳论证，结论强度取决于试点是否有代表性。若试点部门本来就更自律，推广就会失败。"},{id:"d2",text:"你不能说这个方案不好，因为你根本没有参与设计。当初征求意见的时候你在休假，现在跳出来反对，这不合适。",conclusion:"你对方案的反对意见不成立。",premises:["你没有参与设计","征求意见时你在休假"],hidden:["只有参与设计的人才有资格评价方案"],note:"典型的人身攻击（处境型）。评价方案好坏靠的是理由，不是提出者的参与记录。"},{id:"d3",text:"这款面霜含有玻尿酸。玻尿酸在皮肤里含量高的人显得更年轻。所以用这款面霜能让你显得更年轻。",conclusion:"用这款面霜能让人显得更年轻。",premises:["面霜含玻尿酸","皮肤中玻尿酸含量高的人显得更年轻"],hidden:["涂抹玻尿酸能提高皮肤中的玻尿酸含量","提高含量就能改变外观"],note:"相关被当成因果，而且中间跳过了「吸收率」「分子量」等关键环节。属于混淆相关与因果 + 隐含前提不成立。"},{id:"d4",text:"如果提高最低工资，小企业成本就上升；成本上升就会裁员；裁员之后消费下降；消费下降又会让更多企业倒闭。所以提高最低工资会摧毁经济。",conclusion:"提高最低工资会摧毁经济。",premises:["提高最低工资 → 小企业成本上升","成本上升 → 裁员","裁员 → 消费下降","消费下降 → 更多企业倒闭"],hidden:["每一环的传导都是必然且无缓冲的（忽略了成本转嫁、生产率提升、需求效应）"],note:"典型的滑坡。每一环都是可能性而非必然性，且没有给出概率与缓冲机制。"},{id:"d5",text:"我们调查了 1200 名使用本产品的用户，其中 87% 表示满意。因此，本产品的用户满意度为 87%。",conclusion:"本产品用户满意度约 87%。",premises:["1200 名受访用户中 87% 表示满意"],hidden:["受访者是从全部用户中随机抽取的","满意的人不比不满意的人更愿意填问卷"],note:"样本量不算小，但抽样方式决定成败。自愿填答会系统性高估满意度。"}],M1=[{id:"t1",text:"我们店里三个销售都说这款吸尘器好用，所以它一定是市面上最好的吸尘器。",answer:"以偏概全 / 诉诸不当权威",why:"样本是自家销售，与「市面上最好」这个范围完全不匹配；而且销售有利益相关。",fix:"把结论降级为「我们店三位销售认为它好用」，或引入独立测评与竞品对比。"},{id:"t2",text:"他提倡节约用水，可他自己家有游泳池。所以节约用水这件事不必当真。",answer:"人身攻击（你也一样）",why:"用提倡者的行为否定主张本身。即使他虚伪，水资源短缺的事实与节水建议的有效性也不受影响。",fix:"把注意力拉回主张：本地水资源数据是否支持节水？他的行为可以作为「说服力」的批评，不能作为「主张为假」的证据。"},{id:"t3",text:"你要么现在签字，要么就等着项目彻底失败。",answer:"虚假两难",why:"遗漏了修改条款、延期决策、部分采纳等选项。",fix:"要求列出全部选项：除了签与不签，还有什么？延期一周的代价具体是多少？"},{id:"t4",text:"自从换了新 CEO，公司股价涨了 30%。新 CEO 就是股价上涨的原因。",answer:"事后归因",why:"时间先后不等于因果。同期可能有行业复苏、政策利好、财报超预期。",fix:"找对照组：同行业其他公司同期涨幅多少？有没有其他变量同时变化？"},{id:"t5",text:"这个政策不能取消，因为一旦取消，整个体系就会崩溃。",answer:"预设结论 / 滑坡",why:"「不能取消」已经是结论，理由只是把结论换了个说法；同时滑向极端后果而未论证传导机制。",fix:"追问：崩溃的具体机制是什么？中间有几步？每一步的证据是什么？"},{id:"t6",text:"我们公司的人都很有创造力，所以每个项目组都很有创造力。",answer:"合成谬误",why:"个体具有的属性，整体未必具有。创造力可能依赖个体，也可能被流程扼杀。",fix:"要证明「项目组有创造力」，需要看项目组的产出，而不是成员的个体测评。"}],W0=[{id:"k1",title:"大学是否应该把逻辑学列为必修课",prompt:"请给出你的立场，并写出至少两条支持前提、一条最强反对意见及你的回应。",angles:["「有用」如何界定：职业能力还是公民能力","必修意味着挤占其他课程，机会成本是什么","逻辑能力能否被课程有效提升，证据是什么"]},{id:"k2",title:"短视频是否让人变笨",prompt:"这个说法本身需要先澄清什么？给出你的定义，再论证。",angles:["「变笨」的操作化定义：注意力时长？深度阅读能力？","相关与因果：爱看短视频的人本来如何","是否存在群体差异"]},{id:"k3",title:"AI 生成内容是否应该强制标注",prompt:"从论证角度而非情绪角度支持或反对，并预设最强反驳。",angles:["标注能否被规避，政策有效性","知情权与创作自由的冲突点","标注是否会造成新的歧视"]},{id:"k4",title:"「专家治国」是否比民主决策更高效",prompt:"先定义「高效」，再比较两种机制的代价。",angles:["效率的多种含义","专家如何被问责","知识问题 vs 价值问题"]},{id:"k5",title:"是否应该禁止在公共场所吸烟（含电子烟）",prompt:"识别其中的自由与 harm principle 冲突，给出你的推理链。",angles:["二手烟证据强度","自由的边界如何划定","禁令的执行成本"]},{id:"k6",title:"「读书无用论」错在哪",prompt:"把这个流行说法整理成标准论证，再逐条检查。",angles:["个例与统计的区别","教育的非经济回报","幸存者偏差"]},{id:"k7",title:"网络匿名是否利大于弊",prompt:"给出正反双方最强版本，再判断哪一方证据更硬。",angles:["匿名与表达自由","匿名与责任缺失","可替代方案：后台实名前台匿名"]},{id:"k8",title:"历史事件能否用「必然性」解释",prompt:"「必然」在历史解释中是什么意思？给出一个具体例子分析。",angles:["事后归因的风险","反事实推理的作用","多重原因与主因"]}],nm="logiclab.db.v1",Ts=()=>({v:1,startedAt:new Date().toISOString(),lessons:{},answers:{},mistakes:{},days:{},notes:{},favorites:[],arguments:[],dailyDone:{},challenges:{},lastVisit:new Date().toISOString()}),Vn=(e=new Date)=>{const t=r=>String(r).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`};let Y=J3();const Po=new Set;function J3(){try{const e=localStorage.getItem(nm);if(!e)return Ts();const t=JSON.parse(e);return!t||t.v!==1?Ts():{...Ts(),...t}}catch{return Ts()}}function at(e){Y=e;try{localStorage.setItem(nm,JSON.stringify(Y))}catch{}Po.forEach(t=>t())}function e5(e){return Po.add(e),()=>{Po.delete(e)}}function gs(){return B.useSyncExternalStore(e5,()=>Y,()=>Y)}const Ye={get:()=>Y,reset:()=>at(Ts()),visitLesson(e){const t=Y.lessons[e]??{};at({...Y,lessons:{...Y.lessons,[e]:{...t,visitedAt:new Date().toISOString()}},lastVisit:new Date().toISOString()})},setLessonDone(e,t){const r=Y.lessons[e]??{},n=Vn(),s=Y.days[n]??{sec:0,lessons:0,quiz:0};at({...Y,lessons:{...Y.lessons,[e]:{...r,done:t,doneAt:t?new Date().toISOString():void 0}},days:{...Y.days,[n]:{...s,lessons:Math.max(0,s.lessons+(t&&!r.done?1:!t&&r.done?-1:0))}}})},recordAnswer(e,t,r,n){const s=Vn(),l=Y.days[s]??{sec:0,lessons:0,quiz:0},i=Y.mistakes[t],o={...Y.mistakes};r?i&&(o[t]={...i,mastered:!0}):o[t]={lessonId:e,qid:t,wrongCount:((i==null?void 0:i.wrongCount)??0)+1,lastWrongAt:Date.now(),mastered:!1,favorite:(i==null?void 0:i.favorite)??!1},at({...Y,answers:{...Y.answers,[t]:{lessonId:e,qid:t,correct:r,at:Date.now(),answer:n}},mistakes:o,days:{...Y.days,[s]:{...l,quiz:l.quiz+1}}})},toggleFavorite(e,t){const r=Y.mistakes[e]??{lessonId:t,qid:e,wrongCount:0,lastWrongAt:0,mastered:!1,favorite:!1};at({...Y,mistakes:{...Y.mistakes,[e]:{...r,favorite:!r.favorite}}})},toggleFavoriteLesson(e){const t=Y.favorites.includes(e);at({...Y,favorites:t?Y.favorites.filter(r=>r!==e):[...Y.favorites,e]})},markMastered(e,t){const r=Y.mistakes[e]??{lessonId:t,qid:e,wrongCount:0,lastWrongAt:0,mastered:!1,favorite:!1};at({...Y,mistakes:{...Y.mistakes,[e]:{...r,mastered:!0}}})},removeMistake(e){const t={...Y.mistakes};delete t[e],at({...Y,mistakes:t})},saveNote(e,t){at({...Y,notes:{...Y.notes,[e]:t}})},addArgument(e){const t={...e,id:`arg-${Date.now()}`,at:Date.now()};at({...Y,arguments:[t,...Y.arguments]})},removeArgument(e){at({...Y,arguments:Y.arguments.filter(t=>t.id!==e)})},markDaily(e){const t=Vn(),r=Y.dailyDone[t]??[];r.includes(e)||at({...Y,dailyDone:{...Y.dailyDone,[t]:[...r,e]}})},saveChallenge(e,t){at({...Y,challenges:{...Y.challenges,[e]:t}})},addTime(e){if(e<=0)return;const t=Vn(),r=Y.days[t]??{sec:0,lessons:0,quiz:0};at({...Y,days:{...Y.days,[t]:{...r,sec:r.sec+e}}})}};function t5(){B.useEffect(()=>{let e=Date.now();const t=()=>{const s=Date.now(),l=Math.round((s-e)/1e3);e=s,document.visibilityState==="visible"&&l>0&&l<120&&Ye.addTime(l)},r=setInterval(t,2e4),n=()=>{e=Date.now()};return document.addEventListener("visibilitychange",n),()=>{clearInterval(r),document.removeEventListener("visibilitychange",n),t()}},[])}function sm(e){let t=0;const r=new Date;for(let n=0;n<400;n++){const s=Vn(r),l=e.days[s];if(l&&(l.sec>=60||l.lessons>0||l.quiz>0))t++;else if(n>0)break;r.setDate(r.getDate()-1)}return t}function lm(e){return Object.values(e.days).reduce((t,r)=>t+(r.sec||0),0)}function r5(e){if(e<60)return`${e} 秒`;const t=Math.round(e/60);return t<60?`${t} 分钟`:`${Math.floor(t/60)} 小时 ${t%60} 分`}let R=class im extends Error{constructor(t,r){var n="KaTeX parse error: "+t,s,l,i=r&&r.loc;if(i&&i.start<=i.end){var o=i.lexer.input;s=i.start,l=i.end,s===o.length?n+=" at end of input: ":n+=" at position "+(s+1)+": ";var u=o.slice(s,l).replace(/[^]/g,"$&̲"),p;s>15?p="…"+o.slice(s-15,s):p=o.slice(0,s);var h;l+15<o.length?h=o.slice(l,l+15)+"…":h=o.slice(l),n+=p+u+h}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,im.prototype),this.position=s,s!=null&&l!=null&&(this.length=l-s),this.rawMessage=t}};var n5=/([A-Z])/g,s5=e=>e.replace(n5,"-$1").toLowerCase(),l5={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i5=/[&><"']/g,Ke=e=>String(e).replace(i5,t=>l5[t]),f0=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?f0(e.body[0]):e:e.type==="font"?f0(e.body):e,a5=new Set(["mathord","textord","atom"]),Sr=e=>a5.has(f0(e).type),o5=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},jo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function u5(e){if(typeof e!="string")return e.enum[0];switch(e){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function c5(e){if(e.default!==void 0)return e.default;var t=Array.isArray(e.type)?e.type[0]:e.type;return u5(t)}function d5(e,t,r,n){var s=r[t];e[t]=s!==void 0?n.processor?n.processor(s):s:c5(n)}class _u{constructor(t){t===void 0&&(t={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r of Object.keys(jo)){var n=jo[r];n&&d5(this,r,t,n)}}reportNonstrict(t,r,n){var s=this.strict;if(typeof s=="function"&&(s=s(t,r,n)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new R("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),n);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,n){var s=this.strict;if(typeof s=="function")try{s=s(t,r,n)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if("url"in t&&t.url&&!t.protocol){var r=o5(t.url);if(r==null)return!1;t.protocol=r}var n=typeof this.trust=="function"?this.trust(t):this.trust;return!!n}}class Pr{constructor(t,r,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=n}sup(){return Xt[p5[this.id]]}sub(){return Xt[h5[this.id]]}fracNum(){return Xt[m5[this.id]]}fracDen(){return Xt[f5[this.id]]}cramp(){return Xt[v5[this.id]]}text(){return Xt[g5[this.id]]}isTight(){return this.size>=2}}var Qu=0,V0=1,es=2,fr=3,ml=4,Mt=5,ds=6,rt=7,Xt=[new Pr(Qu,0,!1),new Pr(V0,0,!0),new Pr(es,1,!1),new Pr(fr,1,!0),new Pr(ml,2,!1),new Pr(Mt,2,!0),new Pr(ds,3,!1),new Pr(rt,3,!0)],p5=[ml,Mt,ml,Mt,ds,rt,ds,rt],h5=[Mt,Mt,Mt,Mt,rt,rt,rt,rt],m5=[es,fr,ml,Mt,ds,rt,ds,rt],f5=[fr,fr,Mt,Mt,rt,rt,rt,rt],v5=[V0,V0,fr,fr,Mt,Mt,rt,rt],g5=[Qu,V0,es,fr,es,fr,es,fr],K={DISPLAY:Xt[Qu],TEXT:Xt[es],SCRIPT:Xt[ml],SCRIPTSCRIPT:Xt[ds]},Co=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function x5(e){for(var t=0;t<Co.length;t++)for(var r=Co[t],n=0;n<r.blocks.length;n++){var s=r.blocks[n];if(e>=s[0]&&e<=s[1])return r.name}return null}var v0=[];Co.forEach(e=>e.blocks.forEach(t=>v0.push(...t)));function am(e){for(var t=0;t<v0.length;t+=2)if(e>=v0[t]&&e<=v0[t+1])return!0;return!1}var Be=e=>e+" "+e,zn=80,y5=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},$5=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},w5=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},S5=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},k5=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},b5=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},A5=function(t,r,n){var s=n-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},P5=function(t,r,n){r=1e3*r;var s="";switch(t){case"sqrtMain":s=y5(r,zn);break;case"sqrtSize1":s=$5(r,zn);break;case"sqrtSize2":s=w5(r,zn);break;case"sqrtSize3":s=S5(r,zn);break;case"sqrtSize4":s=k5(r,zn);break;case"sqrtTall":s=A5(r,zn,n)}return s},j5=function(t,r){switch(t){case"⎜":return Be("M291 0 H417 V"+r+" H291z");case"∣":return Be("M145 0 H188 V"+r+" H145z");case"∥":return Be("M145 0 H188 V"+r+" H145z")+Be("M367 0 H410 V"+r+" H367z");case"⎟":return Be("M457 0 H583 V"+r+" H457z");case"⎢":return Be("M319 0 H403 V"+r+" H319z");case"⎥":return Be("M263 0 H347 V"+r+" H263z");case"⎪":return Be("M384 0 H504 V"+r+" H384z");case"⏐":return Be("M312 0 H355 V"+r+" H312z");case"‖":return Be("M257 0 H300 V"+r+" H257z")+Be("M478 0 H521 V"+r+" H478z");default:return""}},N1={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Be("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Be("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Be("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Be("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Be("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Be("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Be("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Be("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},C5=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function q5(e){return"toText"in e}class xs{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){return this.children.map(t=>{if(q5(t))return t.toText();throw new Error("Expected MathDomNode with toText, got "+t.constructor.name)}).join("")}}var qo={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},E5={ex:!0,em:!0,mu:!0},om=function(t){return typeof t!="string"&&(t=t.unit),t in qo||t in E5||t==="ex"},$e=function(t,r){var n;if(t.unit in qo)n=qo[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")n=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,t.unit==="ex")n=s.fontMetrics().xHeight;else if(t.unit==="em")n=s.fontMetrics().quad;else throw new R("Invalid unit: '"+t.unit+"'");s!==r&&(n*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*n,r.maxSize)},O=function(t){return+t.toFixed(4)+"em"},Kr=function(t){return t.filter(r=>r).join(" ")},Uu=function(t){var r="";for(var n of Object.keys(t)){var s=t[n];s!==void 0&&(r+=s5(n)+":"+s+";")}return r},um=function(t,r,n){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},cm=function(t){var r=document.createElement(t);r.className=Kr(this.classes),Object.assign(r.style,this.style);for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r},B5=/[\s"'>/=\x00-\x1f]/,dm=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Ke(Kr(this.classes))+'"');var n=Uu(this.style);n&&(r+=' style="'+Ke(n)+'"');for(var s of Object.keys(this.attributes)){if(B5.test(s))throw new R("Invalid attribute name '"+s+"'");r+=" "+s+'="'+Ke(this.attributes[s])+'"'}r+=">";for(var l=0;l<this.children.length;l++)r+=this.children[l].toMarkup();return r+="</"+t+">",r};class ys{constructor(t,r,n,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,um.call(this,t,n,s),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return cm.call(this,"span")}toMarkup(){return dm.call(this,"span")}}class yi{constructor(t,r,n,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,um.call(this,r,s),this.children=n||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return cm.call(this,"a")}toMarkup(){return dm.call(this,"a")}}class z5{constructor(t,r,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");return t.src=this.src,t.alt=this.alt,t.className="mord",Object.assign(t.style,this.style),t}toMarkup(){var t='<img src="'+Ke(this.src)+'"'+(' alt="'+Ke(this.alt)+'"'),r=Uu(this.style);return r&&(t+=' style="'+Ke(r)+'"'),t+="'/>",t}}var M5={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class St{constructor(t,r,n,s,l,i,o,u){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=n||0,this.italic=s||0,this.skew=l||0,this.width=i||0,this.classes=o||[],this.style=u||{},this.maxFontSize=0;var p=x5(this.text.charCodeAt(0));p&&this.classes.push(p+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=M5[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=O(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Kr(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Ke(Kr(this.classes)),r+='"');var n="";this.italic>0&&(n+="margin-right:"+O(this.italic)+";"),n+=Uu(this.style),n&&(t=!0,r+=' style="'+Ke(n)+'"');var s=Ke(this.text);return t?(r+=">",r+=s,r+="</span>",r):s}}class $r{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ke(this.attributes[r])+'"';t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</svg>",t}}class Zr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",N1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Ke(this.alternate)+'"/>':'<path d="'+Ke(N1[this.pathName])+'"/>'}}class Eo{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);return r}toMarkup(){var t="<line";for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ke(this.attributes[r])+'"';return t+="/>",t}}function N5(e){if(e instanceof St)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function T5(e){if(e instanceof ys)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var D5=e=>e instanceof ys||e instanceof yi||e instanceof xs,Zt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ul={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},T1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function I5(e,t){Zt[e]=t}function Wu(e,t,r){if(!Zt[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0),s=Zt[t][n];if(!s&&e[0]in T1&&(n=T1[e[0]].charCodeAt(0),s=Zt[t][n]),!s&&r==="text"&&am(n)&&(s=Zt[t][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var aa={};function R5(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!aa[t]){var r=aa[t]={cssEmPerMu:Ul.quad[t]/18};for(var n in Ul)Ul.hasOwnProperty(n)&&(r[n]=Ul[n][t])}return aa[t]}var ve={math:{},text:{}};function c(e,t,r,n,s,l){ve[e][s]={font:t,group:r,replace:n},l&&n&&(ve[e][n]=ve[e][s])}var d="math",M="text",v="main",S="ams",ge="accent-token",H="bin",it="close",$s="inner",W="mathord",Ee="op-token",At="open",wl="punct",k="rel",kr="spacing",P="textord";c(d,v,k,"≡","\\equiv",!0);c(d,v,k,"≺","\\prec",!0);c(d,v,k,"≻","\\succ",!0);c(d,v,k,"∼","\\sim",!0);c(d,v,k,"⊥","\\perp");c(d,v,k,"⪯","\\preceq",!0);c(d,v,k,"⪰","\\succeq",!0);c(d,v,k,"≃","\\simeq",!0);c(d,v,k,"∣","\\mid",!0);c(d,v,k,"≪","\\ll",!0);c(d,v,k,"≫","\\gg",!0);c(d,v,k,"≍","\\asymp",!0);c(d,v,k,"∥","\\parallel");c(d,v,k,"⋈","\\bowtie",!0);c(d,v,k,"⌣","\\smile",!0);c(d,v,k,"⊑","\\sqsubseteq",!0);c(d,v,k,"⊒","\\sqsupseteq",!0);c(d,v,k,"≐","\\doteq",!0);c(d,v,k,"⌢","\\frown",!0);c(d,v,k,"∋","\\ni",!0);c(d,v,k,"∝","\\propto",!0);c(d,v,k,"⊢","\\vdash",!0);c(d,v,k,"⊣","\\dashv",!0);c(d,v,k,"∋","\\owns");c(d,v,wl,".","\\ldotp");c(d,v,wl,"⋅","\\cdotp");c(d,v,wl,"⋅","·");c(M,v,P,"⋅","·");c(d,v,P,"#","\\#");c(M,v,P,"#","\\#");c(d,v,P,"&","\\&");c(M,v,P,"&","\\&");c(d,v,P,"ℵ","\\aleph",!0);c(d,v,P,"∀","\\forall",!0);c(d,v,P,"ℏ","\\hbar",!0);c(d,v,P,"∃","\\exists",!0);c(d,v,P,"∇","\\nabla",!0);c(d,v,P,"♭","\\flat",!0);c(d,v,P,"ℓ","\\ell",!0);c(d,v,P,"♮","\\natural",!0);c(d,v,P,"♣","\\clubsuit",!0);c(d,v,P,"℘","\\wp",!0);c(d,v,P,"♯","\\sharp",!0);c(d,v,P,"♢","\\diamondsuit",!0);c(d,v,P,"ℜ","\\Re",!0);c(d,v,P,"♡","\\heartsuit",!0);c(d,v,P,"ℑ","\\Im",!0);c(d,v,P,"♠","\\spadesuit",!0);c(d,v,P,"§","\\S",!0);c(M,v,P,"§","\\S");c(d,v,P,"¶","\\P",!0);c(M,v,P,"¶","\\P");c(d,v,P,"†","\\dag");c(M,v,P,"†","\\dag");c(M,v,P,"†","\\textdagger");c(d,v,P,"‡","\\ddag");c(M,v,P,"‡","\\ddag");c(M,v,P,"‡","\\textdaggerdbl");c(d,v,it,"⎱","\\rmoustache",!0);c(d,v,At,"⎰","\\lmoustache",!0);c(d,v,it,"⟯","\\rgroup",!0);c(d,v,At,"⟮","\\lgroup",!0);c(d,v,H,"∓","\\mp",!0);c(d,v,H,"⊖","\\ominus",!0);c(d,v,H,"⊎","\\uplus",!0);c(d,v,H,"⊓","\\sqcap",!0);c(d,v,H,"∗","\\ast");c(d,v,H,"⊔","\\sqcup",!0);c(d,v,H,"◯","\\bigcirc",!0);c(d,v,H,"∙","\\bullet",!0);c(d,v,H,"‡","\\ddagger");c(d,v,H,"≀","\\wr",!0);c(d,v,H,"⨿","\\amalg");c(d,v,H,"&","\\And");c(d,v,k,"⟵","\\longleftarrow",!0);c(d,v,k,"⇐","\\Leftarrow",!0);c(d,v,k,"⟸","\\Longleftarrow",!0);c(d,v,k,"⟶","\\longrightarrow",!0);c(d,v,k,"⇒","\\Rightarrow",!0);c(d,v,k,"⟹","\\Longrightarrow",!0);c(d,v,k,"↔","\\leftrightarrow",!0);c(d,v,k,"⟷","\\longleftrightarrow",!0);c(d,v,k,"⇔","\\Leftrightarrow",!0);c(d,v,k,"⟺","\\Longleftrightarrow",!0);c(d,v,k,"↦","\\mapsto",!0);c(d,v,k,"⟼","\\longmapsto",!0);c(d,v,k,"↗","\\nearrow",!0);c(d,v,k,"↩","\\hookleftarrow",!0);c(d,v,k,"↪","\\hookrightarrow",!0);c(d,v,k,"↘","\\searrow",!0);c(d,v,k,"↼","\\leftharpoonup",!0);c(d,v,k,"⇀","\\rightharpoonup",!0);c(d,v,k,"↙","\\swarrow",!0);c(d,v,k,"↽","\\leftharpoondown",!0);c(d,v,k,"⇁","\\rightharpoondown",!0);c(d,v,k,"↖","\\nwarrow",!0);c(d,v,k,"⇌","\\rightleftharpoons",!0);c(d,S,k,"≮","\\nless",!0);c(d,S,k,"","\\@nleqslant");c(d,S,k,"","\\@nleqq");c(d,S,k,"⪇","\\lneq",!0);c(d,S,k,"≨","\\lneqq",!0);c(d,S,k,"","\\@lvertneqq");c(d,S,k,"⋦","\\lnsim",!0);c(d,S,k,"⪉","\\lnapprox",!0);c(d,S,k,"⊀","\\nprec",!0);c(d,S,k,"⋠","\\npreceq",!0);c(d,S,k,"⋨","\\precnsim",!0);c(d,S,k,"⪹","\\precnapprox",!0);c(d,S,k,"≁","\\nsim",!0);c(d,S,k,"","\\@nshortmid");c(d,S,k,"∤","\\nmid",!0);c(d,S,k,"⊬","\\nvdash",!0);c(d,S,k,"⊭","\\nvDash",!0);c(d,S,k,"⋪","\\ntriangleleft");c(d,S,k,"⋬","\\ntrianglelefteq",!0);c(d,S,k,"⊊","\\subsetneq",!0);c(d,S,k,"","\\@varsubsetneq");c(d,S,k,"⫋","\\subsetneqq",!0);c(d,S,k,"","\\@varsubsetneqq");c(d,S,k,"≯","\\ngtr",!0);c(d,S,k,"","\\@ngeqslant");c(d,S,k,"","\\@ngeqq");c(d,S,k,"⪈","\\gneq",!0);c(d,S,k,"≩","\\gneqq",!0);c(d,S,k,"","\\@gvertneqq");c(d,S,k,"⋧","\\gnsim",!0);c(d,S,k,"⪊","\\gnapprox",!0);c(d,S,k,"⊁","\\nsucc",!0);c(d,S,k,"⋡","\\nsucceq",!0);c(d,S,k,"⋩","\\succnsim",!0);c(d,S,k,"⪺","\\succnapprox",!0);c(d,S,k,"≆","\\ncong",!0);c(d,S,k,"","\\@nshortparallel");c(d,S,k,"∦","\\nparallel",!0);c(d,S,k,"⊯","\\nVDash",!0);c(d,S,k,"⋫","\\ntriangleright");c(d,S,k,"⋭","\\ntrianglerighteq",!0);c(d,S,k,"","\\@nsupseteqq");c(d,S,k,"⊋","\\supsetneq",!0);c(d,S,k,"","\\@varsupsetneq");c(d,S,k,"⫌","\\supsetneqq",!0);c(d,S,k,"","\\@varsupsetneqq");c(d,S,k,"⊮","\\nVdash",!0);c(d,S,k,"⪵","\\precneqq",!0);c(d,S,k,"⪶","\\succneqq",!0);c(d,S,k,"","\\@nsubseteqq");c(d,S,H,"⊴","\\unlhd");c(d,S,H,"⊵","\\unrhd");c(d,S,k,"↚","\\nleftarrow",!0);c(d,S,k,"↛","\\nrightarrow",!0);c(d,S,k,"⇍","\\nLeftarrow",!0);c(d,S,k,"⇏","\\nRightarrow",!0);c(d,S,k,"↮","\\nleftrightarrow",!0);c(d,S,k,"⇎","\\nLeftrightarrow",!0);c(d,S,k,"△","\\vartriangle");c(d,S,P,"ℏ","\\hslash");c(d,S,P,"▽","\\triangledown");c(d,S,P,"◊","\\lozenge");c(d,S,P,"Ⓢ","\\circledS");c(d,S,P,"®","\\circledR");c(M,S,P,"®","\\circledR");c(d,S,P,"∡","\\measuredangle",!0);c(d,S,P,"∄","\\nexists");c(d,S,P,"℧","\\mho");c(d,S,P,"Ⅎ","\\Finv",!0);c(d,S,P,"⅁","\\Game",!0);c(d,S,P,"‵","\\backprime");c(d,S,P,"▲","\\blacktriangle");c(d,S,P,"▼","\\blacktriangledown");c(d,S,P,"■","\\blacksquare");c(d,S,P,"⧫","\\blacklozenge");c(d,S,P,"★","\\bigstar");c(d,S,P,"∢","\\sphericalangle",!0);c(d,S,P,"∁","\\complement",!0);c(d,S,P,"ð","\\eth",!0);c(M,v,P,"ð","ð");c(d,S,P,"╱","\\diagup");c(d,S,P,"╲","\\diagdown");c(d,S,P,"□","\\square");c(d,S,P,"□","\\Box");c(d,S,P,"◊","\\Diamond");c(d,S,P,"¥","\\yen",!0);c(M,S,P,"¥","\\yen",!0);c(d,S,P,"✓","\\checkmark",!0);c(M,S,P,"✓","\\checkmark");c(d,S,P,"ℶ","\\beth",!0);c(d,S,P,"ℸ","\\daleth",!0);c(d,S,P,"ℷ","\\gimel",!0);c(d,S,P,"ϝ","\\digamma",!0);c(d,S,P,"ϰ","\\varkappa");c(d,S,At,"┌","\\@ulcorner",!0);c(d,S,it,"┐","\\@urcorner",!0);c(d,S,At,"└","\\@llcorner",!0);c(d,S,it,"┘","\\@lrcorner",!0);c(d,S,k,"≦","\\leqq",!0);c(d,S,k,"⩽","\\leqslant",!0);c(d,S,k,"⪕","\\eqslantless",!0);c(d,S,k,"≲","\\lesssim",!0);c(d,S,k,"⪅","\\lessapprox",!0);c(d,S,k,"≊","\\approxeq",!0);c(d,S,H,"⋖","\\lessdot");c(d,S,k,"⋘","\\lll",!0);c(d,S,k,"≶","\\lessgtr",!0);c(d,S,k,"⋚","\\lesseqgtr",!0);c(d,S,k,"⪋","\\lesseqqgtr",!0);c(d,S,k,"≑","\\doteqdot");c(d,S,k,"≓","\\risingdotseq",!0);c(d,S,k,"≒","\\fallingdotseq",!0);c(d,S,k,"∽","\\backsim",!0);c(d,S,k,"⋍","\\backsimeq",!0);c(d,S,k,"⫅","\\subseteqq",!0);c(d,S,k,"⋐","\\Subset",!0);c(d,S,k,"⊏","\\sqsubset",!0);c(d,S,k,"≼","\\preccurlyeq",!0);c(d,S,k,"⋞","\\curlyeqprec",!0);c(d,S,k,"≾","\\precsim",!0);c(d,S,k,"⪷","\\precapprox",!0);c(d,S,k,"⊲","\\vartriangleleft");c(d,S,k,"⊴","\\trianglelefteq");c(d,S,k,"⊨","\\vDash",!0);c(d,S,k,"⊪","\\Vvdash",!0);c(d,S,k,"⌣","\\smallsmile");c(d,S,k,"⌢","\\smallfrown");c(d,S,k,"≏","\\bumpeq",!0);c(d,S,k,"≎","\\Bumpeq",!0);c(d,S,k,"≧","\\geqq",!0);c(d,S,k,"⩾","\\geqslant",!0);c(d,S,k,"⪖","\\eqslantgtr",!0);c(d,S,k,"≳","\\gtrsim",!0);c(d,S,k,"⪆","\\gtrapprox",!0);c(d,S,H,"⋗","\\gtrdot");c(d,S,k,"⋙","\\ggg",!0);c(d,S,k,"≷","\\gtrless",!0);c(d,S,k,"⋛","\\gtreqless",!0);c(d,S,k,"⪌","\\gtreqqless",!0);c(d,S,k,"≖","\\eqcirc",!0);c(d,S,k,"≗","\\circeq",!0);c(d,S,k,"≜","\\triangleq",!0);c(d,S,k,"∼","\\thicksim");c(d,S,k,"≈","\\thickapprox");c(d,S,k,"⫆","\\supseteqq",!0);c(d,S,k,"⋑","\\Supset",!0);c(d,S,k,"⊐","\\sqsupset",!0);c(d,S,k,"≽","\\succcurlyeq",!0);c(d,S,k,"⋟","\\curlyeqsucc",!0);c(d,S,k,"≿","\\succsim",!0);c(d,S,k,"⪸","\\succapprox",!0);c(d,S,k,"⊳","\\vartriangleright");c(d,S,k,"⊵","\\trianglerighteq");c(d,S,k,"⊩","\\Vdash",!0);c(d,S,k,"∣","\\shortmid");c(d,S,k,"∥","\\shortparallel");c(d,S,k,"≬","\\between",!0);c(d,S,k,"⋔","\\pitchfork",!0);c(d,S,k,"∝","\\varpropto");c(d,S,k,"◀","\\blacktriangleleft");c(d,S,k,"∴","\\therefore",!0);c(d,S,k,"∍","\\backepsilon");c(d,S,k,"▶","\\blacktriangleright");c(d,S,k,"∵","\\because",!0);c(d,S,k,"⋘","\\llless");c(d,S,k,"⋙","\\gggtr");c(d,S,H,"⊲","\\lhd");c(d,S,H,"⊳","\\rhd");c(d,S,k,"≂","\\eqsim",!0);c(d,v,k,"⋈","\\Join");c(d,S,k,"≑","\\Doteq",!0);c(d,S,H,"∔","\\dotplus",!0);c(d,S,H,"∖","\\smallsetminus");c(d,S,H,"⋒","\\Cap",!0);c(d,S,H,"⋓","\\Cup",!0);c(d,S,H,"⩞","\\doublebarwedge",!0);c(d,S,H,"⊟","\\boxminus",!0);c(d,S,H,"⊞","\\boxplus",!0);c(d,S,H,"⋇","\\divideontimes",!0);c(d,S,H,"⋉","\\ltimes",!0);c(d,S,H,"⋊","\\rtimes",!0);c(d,S,H,"⋋","\\leftthreetimes",!0);c(d,S,H,"⋌","\\rightthreetimes",!0);c(d,S,H,"⋏","\\curlywedge",!0);c(d,S,H,"⋎","\\curlyvee",!0);c(d,S,H,"⊝","\\circleddash",!0);c(d,S,H,"⊛","\\circledast",!0);c(d,S,H,"⋅","\\centerdot");c(d,S,H,"⊺","\\intercal",!0);c(d,S,H,"⋒","\\doublecap");c(d,S,H,"⋓","\\doublecup");c(d,S,H,"⊠","\\boxtimes",!0);c(d,S,k,"⇢","\\dashrightarrow",!0);c(d,S,k,"⇠","\\dashleftarrow",!0);c(d,S,k,"⇇","\\leftleftarrows",!0);c(d,S,k,"⇆","\\leftrightarrows",!0);c(d,S,k,"⇚","\\Lleftarrow",!0);c(d,S,k,"↞","\\twoheadleftarrow",!0);c(d,S,k,"↢","\\leftarrowtail",!0);c(d,S,k,"↫","\\looparrowleft",!0);c(d,S,k,"⇋","\\leftrightharpoons",!0);c(d,S,k,"↶","\\curvearrowleft",!0);c(d,S,k,"↺","\\circlearrowleft",!0);c(d,S,k,"↰","\\Lsh",!0);c(d,S,k,"⇈","\\upuparrows",!0);c(d,S,k,"↿","\\upharpoonleft",!0);c(d,S,k,"⇃","\\downharpoonleft",!0);c(d,v,k,"⊶","\\origof",!0);c(d,v,k,"⊷","\\imageof",!0);c(d,S,k,"⊸","\\multimap",!0);c(d,S,k,"↭","\\leftrightsquigarrow",!0);c(d,S,k,"⇉","\\rightrightarrows",!0);c(d,S,k,"⇄","\\rightleftarrows",!0);c(d,S,k,"↠","\\twoheadrightarrow",!0);c(d,S,k,"↣","\\rightarrowtail",!0);c(d,S,k,"↬","\\looparrowright",!0);c(d,S,k,"↷","\\curvearrowright",!0);c(d,S,k,"↻","\\circlearrowright",!0);c(d,S,k,"↱","\\Rsh",!0);c(d,S,k,"⇊","\\downdownarrows",!0);c(d,S,k,"↾","\\upharpoonright",!0);c(d,S,k,"⇂","\\downharpoonright",!0);c(d,S,k,"⇝","\\rightsquigarrow",!0);c(d,S,k,"⇝","\\leadsto");c(d,S,k,"⇛","\\Rrightarrow",!0);c(d,S,k,"↾","\\restriction");c(d,v,P,"‘","`");c(d,v,P,"$","\\$");c(M,v,P,"$","\\$");c(M,v,P,"$","\\textdollar");c(d,v,P,"%","\\%");c(M,v,P,"%","\\%");c(d,v,P,"_","\\_");c(M,v,P,"_","\\_");c(M,v,P,"_","\\textunderscore");c(d,v,P,"∠","\\angle",!0);c(d,v,P,"∞","\\infty",!0);c(d,v,P,"′","\\prime");c(d,v,P,"△","\\triangle");c(d,v,P,"Γ","\\Gamma",!0);c(d,v,P,"Δ","\\Delta",!0);c(d,v,P,"Θ","\\Theta",!0);c(d,v,P,"Λ","\\Lambda",!0);c(d,v,P,"Ξ","\\Xi",!0);c(d,v,P,"Π","\\Pi",!0);c(d,v,P,"Σ","\\Sigma",!0);c(d,v,P,"Υ","\\Upsilon",!0);c(d,v,P,"Φ","\\Phi",!0);c(d,v,P,"Ψ","\\Psi",!0);c(d,v,P,"Ω","\\Omega",!0);c(d,v,P,"A","Α");c(d,v,P,"B","Β");c(d,v,P,"E","Ε");c(d,v,P,"Z","Ζ");c(d,v,P,"H","Η");c(d,v,P,"I","Ι");c(d,v,P,"K","Κ");c(d,v,P,"M","Μ");c(d,v,P,"N","Ν");c(d,v,P,"O","Ο");c(d,v,P,"P","Ρ");c(d,v,P,"T","Τ");c(d,v,P,"X","Χ");c(d,v,P,"¬","\\neg",!0);c(d,v,P,"¬","\\lnot");c(d,v,P,"⊤","\\top");c(d,v,P,"⊥","\\bot");c(d,v,P,"∅","\\emptyset");c(d,S,P,"∅","\\varnothing");c(d,v,W,"α","\\alpha",!0);c(d,v,W,"β","\\beta",!0);c(d,v,W,"γ","\\gamma",!0);c(d,v,W,"δ","\\delta",!0);c(d,v,W,"ϵ","\\epsilon",!0);c(d,v,W,"ζ","\\zeta",!0);c(d,v,W,"η","\\eta",!0);c(d,v,W,"θ","\\theta",!0);c(d,v,W,"ι","\\iota",!0);c(d,v,W,"κ","\\kappa",!0);c(d,v,W,"λ","\\lambda",!0);c(d,v,W,"μ","\\mu",!0);c(d,v,W,"ν","\\nu",!0);c(d,v,W,"ξ","\\xi",!0);c(d,v,W,"ο","\\omicron",!0);c(d,v,W,"π","\\pi",!0);c(d,v,W,"ρ","\\rho",!0);c(d,v,W,"σ","\\sigma",!0);c(d,v,W,"τ","\\tau",!0);c(d,v,W,"υ","\\upsilon",!0);c(d,v,W,"ϕ","\\phi",!0);c(d,v,W,"χ","\\chi",!0);c(d,v,W,"ψ","\\psi",!0);c(d,v,W,"ω","\\omega",!0);c(d,v,W,"ε","\\varepsilon",!0);c(d,v,W,"ϑ","\\vartheta",!0);c(d,v,W,"ϖ","\\varpi",!0);c(d,v,W,"ϱ","\\varrho",!0);c(d,v,W,"ς","\\varsigma",!0);c(d,v,W,"φ","\\varphi",!0);c(d,v,H,"∗","*",!0);c(d,v,H,"+","+");c(d,v,H,"−","-",!0);c(d,v,H,"⋅","\\cdot",!0);c(d,v,H,"∘","\\circ",!0);c(d,v,H,"÷","\\div",!0);c(d,v,H,"±","\\pm",!0);c(d,v,H,"×","\\times",!0);c(d,v,H,"∩","\\cap",!0);c(d,v,H,"∪","\\cup",!0);c(d,v,H,"∖","\\setminus",!0);c(d,v,H,"∧","\\land");c(d,v,H,"∨","\\lor");c(d,v,H,"∧","\\wedge",!0);c(d,v,H,"∨","\\vee",!0);c(d,v,P,"√","\\surd");c(d,v,At,"⟨","\\langle",!0);c(d,v,At,"∣","\\lvert");c(d,v,At,"∥","\\lVert");c(d,v,it,"?","?");c(d,v,it,"!","!");c(d,v,it,"⟩","\\rangle",!0);c(d,v,it,"∣","\\rvert");c(d,v,it,"∥","\\rVert");c(d,v,k,"=","=");c(d,v,k,":",":");c(d,v,k,"≈","\\approx",!0);c(d,v,k,"≅","\\cong",!0);c(d,v,k,"≥","\\ge");c(d,v,k,"≥","\\geq",!0);c(d,v,k,"←","\\gets");c(d,v,k,">","\\gt",!0);c(d,v,k,"∈","\\in",!0);c(d,v,k,"","\\@not");c(d,v,k,"⊂","\\subset",!0);c(d,v,k,"⊃","\\supset",!0);c(d,v,k,"⊆","\\subseteq",!0);c(d,v,k,"⊇","\\supseteq",!0);c(d,S,k,"⊈","\\nsubseteq",!0);c(d,S,k,"⊉","\\nsupseteq",!0);c(d,v,k,"⊨","\\models");c(d,v,k,"←","\\leftarrow",!0);c(d,v,k,"≤","\\le");c(d,v,k,"≤","\\leq",!0);c(d,v,k,"<","\\lt",!0);c(d,v,k,"→","\\rightarrow",!0);c(d,v,k,"→","\\to");c(d,S,k,"≱","\\ngeq",!0);c(d,S,k,"≰","\\nleq",!0);c(d,v,kr," ","\\ ");c(d,v,kr," ","\\space");c(d,v,kr," ","\\nobreakspace");c(M,v,kr," ","\\ ");c(M,v,kr," "," ");c(M,v,kr," ","\\space");c(M,v,kr," ","\\nobreakspace");c(d,v,kr,"","\\nobreak");c(d,v,kr,"","\\allowbreak");c(d,v,wl,",",",");c(d,v,wl,";",";");c(d,S,H,"⊼","\\barwedge",!0);c(d,S,H,"⊻","\\veebar",!0);c(d,v,H,"⊙","\\odot",!0);c(d,v,H,"⊕","\\oplus",!0);c(d,v,H,"⊗","\\otimes",!0);c(d,v,P,"∂","\\partial",!0);c(d,v,H,"⊘","\\oslash",!0);c(d,S,H,"⊚","\\circledcirc",!0);c(d,S,H,"⊡","\\boxdot",!0);c(d,v,H,"△","\\bigtriangleup");c(d,v,H,"▽","\\bigtriangledown");c(d,v,H,"†","\\dagger");c(d,v,H,"⋄","\\diamond");c(d,v,H,"⋆","\\star");c(d,v,H,"◃","\\triangleleft");c(d,v,H,"▹","\\triangleright");c(d,v,At,"{","\\{");c(M,v,P,"{","\\{");c(M,v,P,"{","\\textbraceleft");c(d,v,it,"}","\\}");c(M,v,P,"}","\\}");c(M,v,P,"}","\\textbraceright");c(d,v,At,"{","\\lbrace");c(d,v,it,"}","\\rbrace");c(d,v,At,"[","\\lbrack",!0);c(M,v,P,"[","\\lbrack",!0);c(d,v,it,"]","\\rbrack",!0);c(M,v,P,"]","\\rbrack",!0);c(d,v,At,"(","\\lparen",!0);c(d,v,it,")","\\rparen",!0);c(M,v,P,"<","\\textless",!0);c(M,v,P,">","\\textgreater",!0);c(d,v,At,"⌊","\\lfloor",!0);c(d,v,it,"⌋","\\rfloor",!0);c(d,v,At,"⌈","\\lceil",!0);c(d,v,it,"⌉","\\rceil",!0);c(d,v,P,"\\","\\backslash");c(d,v,P,"∣","|");c(d,v,P,"∣","\\vert");c(M,v,P,"|","\\textbar",!0);c(d,v,P,"∥","\\|");c(d,v,P,"∥","\\Vert");c(M,v,P,"∥","\\textbardbl");c(M,v,P,"~","\\textasciitilde");c(M,v,P,"\\","\\textbackslash");c(M,v,P,"^","\\textasciicircum");c(d,v,k,"↑","\\uparrow",!0);c(d,v,k,"⇑","\\Uparrow",!0);c(d,v,k,"↓","\\downarrow",!0);c(d,v,k,"⇓","\\Downarrow",!0);c(d,v,k,"↕","\\updownarrow",!0);c(d,v,k,"⇕","\\Updownarrow",!0);c(d,v,Ee,"∐","\\coprod");c(d,v,Ee,"⋁","\\bigvee");c(d,v,Ee,"⋀","\\bigwedge");c(d,v,Ee,"⨄","\\biguplus");c(d,v,Ee,"⋂","\\bigcap");c(d,v,Ee,"⋃","\\bigcup");c(d,v,Ee,"∫","\\int");c(d,v,Ee,"∫","\\intop");c(d,v,Ee,"∬","\\iint");c(d,v,Ee,"∭","\\iiint");c(d,v,Ee,"∏","\\prod");c(d,v,Ee,"∑","\\sum");c(d,v,Ee,"⨂","\\bigotimes");c(d,v,Ee,"⨁","\\bigoplus");c(d,v,Ee,"⨀","\\bigodot");c(d,v,Ee,"∮","\\oint");c(d,v,Ee,"∯","\\oiint");c(d,v,Ee,"∰","\\oiiint");c(d,v,Ee,"⨆","\\bigsqcup");c(d,v,Ee,"∫","\\smallint");c(M,v,$s,"…","\\textellipsis");c(d,v,$s,"…","\\mathellipsis");c(M,v,$s,"…","\\ldots",!0);c(d,v,$s,"…","\\ldots",!0);c(d,v,$s,"⋯","\\@cdots",!0);c(d,v,$s,"⋱","\\ddots",!0);c(d,v,P,"⋮","\\varvdots");c(M,v,P,"⋮","\\varvdots");c(d,v,ge,"ˊ","\\acute");c(d,v,ge,"ˋ","\\grave");c(d,v,ge,"¨","\\ddot");c(d,v,ge,"~","\\tilde");c(d,v,ge,"ˉ","\\bar");c(d,v,ge,"˘","\\breve");c(d,v,ge,"ˇ","\\check");c(d,v,ge,"^","\\hat");c(d,v,ge,"⃗","\\vec");c(d,v,ge,"˙","\\dot");c(d,v,ge,"˚","\\mathring");c(d,v,W,"","\\@imath");c(d,v,W,"","\\@jmath");c(d,v,P,"ı","ı");c(d,v,P,"ȷ","ȷ");c(M,v,P,"ı","\\i",!0);c(M,v,P,"ȷ","\\j",!0);c(M,v,P,"ß","\\ss",!0);c(M,v,P,"æ","\\ae",!0);c(M,v,P,"œ","\\oe",!0);c(M,v,P,"ø","\\o",!0);c(M,v,P,"Æ","\\AE",!0);c(M,v,P,"Œ","\\OE",!0);c(M,v,P,"Ø","\\O",!0);c(M,v,ge,"ˊ","\\'");c(M,v,ge,"ˋ","\\`");c(M,v,ge,"ˆ","\\^");c(M,v,ge,"˜","\\~");c(M,v,ge,"ˉ","\\=");c(M,v,ge,"˘","\\u");c(M,v,ge,"˙","\\.");c(M,v,ge,"¸","\\c");c(M,v,ge,"˚","\\r");c(M,v,ge,"ˇ","\\v");c(M,v,ge,"¨",'\\"');c(M,v,ge,"˝","\\H");c(M,v,ge,"◯","\\textcircled");var pm={"--":!0,"---":!0,"``":!0,"''":!0};c(M,v,P,"–","--",!0);c(M,v,P,"–","\\textendash");c(M,v,P,"—","---",!0);c(M,v,P,"—","\\textemdash");c(M,v,P,"‘","`",!0);c(M,v,P,"‘","\\textquoteleft");c(M,v,P,"’","'",!0);c(M,v,P,"’","\\textquoteright");c(M,v,P,"“","``",!0);c(M,v,P,"“","\\textquotedblleft");c(M,v,P,"”","''",!0);c(M,v,P,"”","\\textquotedblright");c(d,v,P,"°","\\degree",!0);c(M,v,P,"°","\\degree");c(M,v,P,"°","\\textdegree",!0);c(d,v,P,"£","\\pounds");c(d,v,P,"£","\\mathsterling",!0);c(M,v,P,"£","\\pounds");c(M,v,P,"£","\\textsterling",!0);c(d,S,P,"✠","\\maltese");c(M,S,P,"✠","\\maltese");var D1='0123456789/@."';for(var oa=0;oa<D1.length;oa++){var I1=D1.charAt(oa);c(d,v,P,I1,I1)}var R1='0123456789!@*()-=+";:?/.,';for(var ua=0;ua<R1.length;ua++){var O1=R1.charAt(ua);c(M,v,P,O1,O1)}var G0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ca=0;ca<G0.length;ca++){var Wl=G0.charAt(ca);c(d,v,W,Wl,Wl),c(M,v,P,Wl,Wl)}c(d,S,P,"C","ℂ");c(M,S,P,"C","ℂ");c(d,S,P,"H","ℍ");c(M,S,P,"H","ℍ");c(d,S,P,"N","ℕ");c(M,S,P,"N","ℕ");c(d,S,P,"P","ℙ");c(M,S,P,"P","ℙ");c(d,S,P,"Q","ℚ");c(M,S,P,"Q","ℚ");c(d,S,P,"R","ℝ");c(M,S,P,"R","ℝ");c(d,S,P,"Z","ℤ");c(M,S,P,"Z","ℤ");c(d,v,W,"h","ℎ");c(M,v,W,"h","ℎ");var V;for(var Je=0;Je<G0.length;Je++){var ke=G0.charAt(Je);V=String.fromCharCode(55349,56320+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56372+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56424+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56580+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56684+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56736+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56788+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56840+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56944+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),Je<26&&(V=String.fromCharCode(55349,56632+Je),c(d,v,W,ke,V),c(M,v,P,ke,V),V=String.fromCharCode(55349,56476+Je),c(d,v,W,ke,V),c(M,v,P,ke,V))}V="𝕜";c(d,v,W,"k",V);c(M,v,P,"k",V);for(var an=0;an<10;an++){var jr=an.toString();V=String.fromCharCode(55349,57294+an),c(d,v,W,jr,V),c(M,v,P,jr,V),V=String.fromCharCode(55349,57314+an),c(d,v,W,jr,V),c(M,v,P,jr,V),V=String.fromCharCode(55349,57324+an),c(d,v,W,jr,V),c(M,v,P,jr,V),V=String.fromCharCode(55349,57334+an),c(d,v,W,jr,V),c(M,v,P,jr,V)}var Bo="ÐÞþ";for(var da=0;da<Bo.length;da++){var Vl=Bo.charAt(da);c(d,v,W,Vl,Vl),c(M,v,P,Vl,Vl)}var zo={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},L1={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},F1={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},O5={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},dn={mathClass:"",textClass:"",font:""},H1={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},_1={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Q1={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},Mo={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},No={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},U1={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},To={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},W1=[zo,zo,L1,L1,F1,F1,O5,dn,dn,dn,H1,H1,_1,_1,Q1,Q1,Mo,Mo,No,No,U1,U1,dn,dn,To,To],L5=[zo,dn,Mo,No,To],F5=e=>{var t=e.charCodeAt(0),r=e.charCodeAt(1),n=(t-55296)*1024+(r-56320)+65536;if(119808<=n&&n<120484){var s=Math.floor((n-119808)/26);return W1[s]}else if(120782<=n&&n<=120831){var l=Math.floor((n-120782)/10);return L5[l]}else{if(n===120485||n===120486)return W1[0];if(120486<n&&n<120782)return dn;throw new R("Unsupported character: "+e)}},$i=function(t,r,n){if(ve[n][t]){var s=ve[n][t].replace;s&&(t=s)}return{value:t,metrics:Wu(t,r,n)}},tt=function(t,r,n,s,l){var i=$i(t,r,n),o=i.metrics;t=i.value;var u;if(o){var p=o.italic;(n==="text"||s&&s.font==="mathit")&&(p=0),u=new St(t,o.height,o.depth,p,o.skew,o.width,l)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+n+"'")),u=new St(t,0,0,0,0,0,l);if(s){u.maxFontSize=s.sizeMultiplier,s.style.isTight()&&u.classes.push("mtight");var h=s.getColor();h&&(u.style.color=h)}return u},Vu=function(t,r,n,s){return s===void 0&&(s=[]),n.font==="boldsymbol"&&$i(t,"Main-Bold",r).metrics?tt(t,"Main-Bold",r,n,s.concat(["mathbf"])):t==="\\"||ve[r][t].font==="main"?tt(t,"Main-Regular",r,n,s):tt(t,"AMS-Regular",r,n,s.concat(["amsrm"]))},H5=function(t,r,n){return n!=="textord"&&$i(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},wi=function(t,r,n){var s=t.mode,l=t.text,i=["mord"],{font:o,fontFamily:u,fontWeight:p,fontShape:h}=r,f=s==="math"||s==="text"&&!!o,m=f?o:u,x="",A="";if(l.charCodeAt(0)===55349){var w=F5(l);x=w.font,A=w[s+"Class"]}if(x)return tt(l,x,s,r,i.concat(A));if(m){var j,$;if(m==="boldsymbol"){var y=H5(l,s,n);j=y.fontName,$=[y.fontClass]}else f?(j=Do[o].fontName,$=[o]):(j=Gl(u,p,h),$=[u,p,h]);if($i(l,j,s).metrics)return tt(l,j,s,r,i.concat($));if(pm.hasOwnProperty(l)&&j.slice(0,10)==="Typewriter"){for(var b=[],q=0;q<l.length;q++)b.push(tt(l[q],j,s,r,i.concat($)));return br(b)}}if(n==="mathord")return tt(l,"Math-Italic",s,r,i.concat(["mathnormal"]));if(n==="textord"){var C=ve[s][l]&&ve[s][l].font;if(C==="ams"){var E=Gl("amsrm",p,h);return tt(l,E,s,r,i.concat("amsrm",p,h))}else if(C==="main"||!C){var z=Gl("textrm",p,h);return tt(l,z,s,r,i.concat(p,h))}else{var N=Gl(C,p,h);return tt(l,N,s,r,i.concat(N,p,h))}}else throw new Error("unexpected type: "+n+" in makeOrd")},_5=(e,t)=>{if(Kr(e.classes)!==Kr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var n of Object.keys(e.style))if(e.style[n]!==t.style[n])return!1;for(var s of Object.keys(t.style))if(e.style[s]!==t.style[s])return!1;return!0},hm=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof St&&n instanceof St&&_5(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e},Gu=function(t){for(var r=0,n=0,s=0,l=0;l<t.children.length;l++){var i=t.children[l];i.height>r&&(r=i.height),i.depth>n&&(n=i.depth),i.maxFontSize>s&&(s=i.maxFontSize)}t.height=r,t.depth=n,t.maxFontSize=s},T=function(t,r,n,s){var l=new ys(t,r,n,s);return Gu(l),l},Jr=(e,t,r,n)=>new ys(e,t,r,n),ps=function(t,r,n){var s=T([t],[],r);return s.height=Math.max(n||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=O(s.height),s.maxFontSize=1,s},Q5=function(t,r,n,s){var l=new yi(t,r,n,s);return Gu(l),l},br=function(t){var r=new xs(t);return Gu(r),r},hs=function(t,r){return t instanceof xs?T([],[t],r):t},U5=function(t){if(t.positionType==="individualShift"){for(var r=t.children,n=[r[0]],s=-r[0].shift-r[0].elem.depth,l=s,i=1;i<r.length;i++){var o=-r[i].shift-l-r[i].elem.depth,u=o-(r[i-1].elem.height+r[i-1].elem.depth);l=l+o,n.push({type:"kern",size:u}),n.push(r[i])}return{children:n,depth:s}}var p;if(t.positionType==="top"){for(var h=t.positionData,f=0;f<t.children.length;f++){var m=t.children[f];h-=m.type==="kern"?m.size:m.elem.height+m.elem.depth}p=h}else if(t.positionType==="bottom")p=-t.positionData;else{var x=t.children[0];if(x.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")p=-x.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")p=-x.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:p}},ne=function(t,r){for(var{children:n,depth:s}=U5(t),l=0,i=0;i<n.length;i++){var o=n[i];if(o.type==="elem"){var u=o.elem;l=Math.max(l,u.maxFontSize,u.height)}}l+=2;var p=T(["pstrut"],[]);p.style.height=O(l);for(var h=[],f=s,m=s,x=s,A=0;A<n.length;A++){var w=n[A];if(w.type==="kern")x+=w.size;else{var j=w.elem,$=w.wrapperClasses||[],y=w.wrapperStyle||{},b=T($,[p,j],void 0,y);b.style.top=O(-l-x-j.depth),w.marginLeft&&(b.style.marginLeft=w.marginLeft),w.marginRight&&(b.style.marginRight=w.marginRight),h.push(b),x+=j.height+j.depth}f=Math.min(f,x),m=Math.max(m,x)}var q=T(["vlist"],h);q.style.height=O(m);var C;if(f<0){var E=T([],[]),z=T(["vlist"],[E]);z.style.height=O(-f);var N=T(["vlist-s"],[new St("​")]);C=[T(["vlist-r"],[q,N]),T(["vlist-r"],[z])]}else C=[T(["vlist-r"],[q])];var Q=T(["vlist-t"],C);return C.length===2&&Q.classes.push("vlist-t2"),Q.height=m,Q.depth=-f,Q},mm=(e,t)=>{var r=T(["mspace"],[],t),n=$e(e,t);return r.style.marginRight=O(n),r},Gl=(e,t,r)=>{var n,s;switch(e){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=e}return t==="textbf"&&r==="textit"?s="BoldItalic":t==="textbf"?s="Bold":r==="textit"?s="Italic":s="Regular",n+"-"+s},Do={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},fm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},vm=function(t,r){var[n,s,l]=fm[t],i=new Zr(n),o=new $r([i],{width:O(s),height:O(l),style:"width:"+O(s),viewBox:"0 0 "+1e3*s+" "+1e3*l,preserveAspectRatio:"xMinYMin"}),u=Jr(["overlay"],[o],r);return u.height=l,u.style.height=O(l),u.style.width=O(s),u},xe={number:3,unit:"mu"},on={number:4,unit:"mu"},ir={number:5,unit:"mu"},W5={mord:{mop:xe,mbin:on,mrel:ir,minner:xe},mop:{mord:xe,mop:xe,mrel:ir,minner:xe},mbin:{mord:on,mop:on,mopen:on,minner:on},mrel:{mord:ir,mop:ir,mopen:ir,minner:ir},mopen:{},mclose:{mop:xe,mbin:on,mrel:ir,minner:xe},mpunct:{mord:xe,mop:xe,mrel:ir,mopen:xe,mclose:xe,mpunct:xe,minner:xe},minner:{mord:xe,mop:xe,mbin:on,mrel:ir,mopen:xe,mpunct:xe,minner:xe}},V5={mord:{mop:xe},mop:{mord:xe,mop:xe},mbin:{},mrel:{},mopen:{},mclose:{mop:xe},mpunct:{},minner:{mop:xe}},gm={},X0={},Y0={};function L(e){for(var{type:t,names:r,props:n,handler:s,htmlBuilder:l,mathmlBuilder:i}=e,o={type:t,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:s},u=0;u<r.length;++u)gm[r[u]]=o;t&&(l&&(X0[t]=l),i&&(Y0[t]=i))}function Cn(e){var{type:t,htmlBuilder:r,mathmlBuilder:n}=e;L({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:n})}var K0=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ce=function(t){return t.type==="ordgroup"?t.body:[t]},G5=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),X5=new Set(["rightmost","mrel","mclose","mpunct"]),Y5={display:K.DISPLAY,text:K.TEXT,script:K.SCRIPT,scriptscript:K.SCRIPTSCRIPT},K5={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Te=function(t,r,n,s){s===void 0&&(s=[null,null]);for(var l=[],i=0;i<t.length;i++){var o=se(t[i],r);if(o instanceof xs){var u=o.children;l.push(...u)}else l.push(o)}if(hm(l),!n)return l;var p=r;if(t.length===1){var h=t[0];h.type==="sizing"?p=r.havingSize(h.size):h.type==="styling"&&(p=r.havingStyle(Y5[h.style]))}var f=T([s[0]||"leftmost"],[],r),m=T([s[1]||"rightmost"],[],r),x=n==="root";return Io(l,(A,w)=>{var j=w.classes[0],$=A.classes[0];j==="mbin"&&X5.has($)?w.classes[0]="mord":$==="mbin"&&G5.has(j)&&(A.classes[0]="mord")},{node:f},m,x),Io(l,(A,w)=>{var j,$,y=Oo(w),b=Oo(A),q=y&&b?A.hasClass("mtight")?(j=V5[y])==null?void 0:j[b]:($=W5[y])==null?void 0:$[b]:null;if(q)return mm(q,p)},{node:f},m,x),l},Io=function(t,r,n,s,l){s&&t.push(s);for(var i=0;i<t.length;i++){var o=t[i],u=xm(o);if(u){Io(u.children,r,n,null,l);continue}var p=!o.hasClass("mspace");if(p){var h=r(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(t.unshift(h),i++))}p?n.node=o:l&&o.hasClass("newline")&&(n.node=T(["leftmost"])),n.insertAfter=(f=>m=>{t.splice(f+1,0,m),i++})(i)}s&&t.pop()},xm=function(t){return t instanceof xs||t instanceof yi||t instanceof ys&&t.hasClass("enclosing")?t:null},Ro=function(t,r){var n=xm(t);if(n){var s=n.children;if(s.length){if(r==="right")return Ro(s[s.length-1],"right");if(r==="left")return Ro(s[0],"left")}}return t},Oo=function(t,r){if(!t)return null;r&&(t=Ro(t,r));var n=t.classes[0];return K5[n]||null},fl=function(t,r){var n=["nulldelimiter"].concat(t.baseSizingClasses());return T(r.concat(n))},se=function(t,r,n){if(!t)return T();if(X0[t.type]){var s=X0[t.type](t,r);if(n&&r.size!==n.size){s=T(r.sizingClasses(n),[s],r);var l=r.sizeMultiplier/n.sizeMultiplier;s.height*=l,s.depth*=l}return s}else throw new R("Got group of unknown type: '"+t.type+"'")};function Xl(e,t){var r=T(["base"],e,t),n=T(["strut"]);return n.style.height=O(r.height+r.depth),r.depth&&(n.style.verticalAlign=O(-r.depth)),r.children.unshift(n),r}function Lo(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var n=Te(e,t,"root"),s;n.length===2&&n[1].hasClass("tag")&&(s=n.pop());for(var l=[],i=[],o=0;o<n.length;o++)if(i.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var u=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,i.push(n[o]),n[o].hasClass("nobreak")&&(u=!0);u||(l.push(Xl(i,t)),i=[])}else n[o].hasClass("newline")&&(i.pop(),i.length>0&&(l.push(Xl(i,t)),i=[]),l.push(n[o]));i.length>0&&l.push(Xl(i,t));var p;r?(p=Xl(Te(r,t,!0),t),p.classes=["tag"],l.push(p)):s&&l.push(s);var h=T(["katex-html"],l);if(h.setAttribute("aria-hidden","true"),p){var f=p.children[0];f.style.height=O(h.height+h.depth),h.depth&&(f.style.verticalAlign=O(-h.depth))}return h}function ym(e){return new xs(e)}class I{constructor(t,r,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=n||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Kr(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof qe&&this.children[n+1]instanceof qe){for(var s=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof qe;)s+=this.children[++n].toText();t.appendChild(new qe(s).toNode())}else t.appendChild(this.children[n].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Ke(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Ke(Kr(this.classes))+'"'),t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class qe{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Ke(this.toText())}toText(){return this.text}}class $m{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",O(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+O(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Z5=new Set(["\\imath","\\jmath"]),J5=new Set(["mrow","mtable"]),It=function(t,r,n){return ve[r][t]&&ve[r][t].replace&&t.charCodeAt(0)!==55349&&!(pm.hasOwnProperty(t)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(t=ve[r][t].replace),new qe(t)},Xu=function(t){return t.length===1?t[0]:new I("mrow",t)},e6={mathit:"italic",boldsymbol:e=>e.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Yu=(e,t)=>{if(e.mode==="text"){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold"}var r=t.font;if(!r||r==="mathnormal")return null;var n=e.mode,s=e6[r];if(s)return typeof s=="function"?s(e):s;var l=e.text;if(Z5.has(l))return null;if(ve[n][l]){var i=ve[n][l].replace;i&&(l=i)}var o=Do[r].fontName;return Wu(l,o,n)?Do[r].variant:null};function pa(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof qe&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof qe&&r.text===","}else return!1}var Pt=function(t,r,n){if(t.length===1){var s=ce(t[0],r);return n&&s instanceof I&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var l=[],i,o=0;o<t.length;o++){var u=ce(t[o],r);if(u instanceof I&&i instanceof I){if(u.type==="mtext"&&i.type==="mtext"&&u.getAttribute("mathvariant")===i.getAttribute("mathvariant")){i.children.push(...u.children);continue}else if(u.type==="mn"&&i.type==="mn"){i.children.push(...u.children);continue}else if(pa(u)&&i.type==="mn"){i.children.push(...u.children);continue}else if(u.type==="mn"&&pa(i))u.children=[...i.children,...u.children],l.pop();else if((u.type==="msup"||u.type==="msub")&&u.children.length>=1&&(i.type==="mn"||pa(i))){var p=u.children[0];p instanceof I&&p.type==="mn"&&(p.children=[...i.children,...p.children],l.pop())}else if(i.type==="mi"&&i.children.length===1){var h=i.children[0];if(h instanceof qe&&h.text==="̸"&&(u.type==="mo"||u.type==="mi"||u.type==="mn")){var f=u.children[0];f instanceof qe&&f.text.length>0&&(f.text=f.text.slice(0,1)+"̸"+f.text.slice(1),l.pop())}}}l.push(u),i=u}return l},en=function(t,r,n){return Xu(Pt(t,r,n))},ce=function(t,r){if(!t)return new I("mrow");if(Y0[t.type])return Y0[t.type](t,r);throw new R("Got group of unknown type: '"+t.type+"'")};function V1(e,t,r,n,s){var l=Pt(e,r),i;l.length===1&&l[0]instanceof I&&J5.has(l[0].type)?i=l[0]:i=new I("mrow",l);var o=new I("annotation",[new qe(t)]);o.setAttribute("encoding","application/x-tex");var u=new I("semantics",[i,o]),p=new I("math",[u]);p.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&p.setAttribute("display","block");var h=s?"katex":"katex-mathml";return T([h],[p])}var t6=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],G1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],X1=function(t,r){return r.size<2?t:t6[t-1][r.size-1]};class ur{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||ur.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=G1[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,t),new ur(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:X1(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:G1[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=X1(ur.BASESIZE,t);return this.size===r&&this.textSize===ur.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ur.BASESIZE?["sizing","reset-size"+this.size,"size"+ur.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=R5(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ur.BASESIZE=6;var wm=function(t){return new ur({style:t.displayMode?K.DISPLAY:K.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Sm=function(t,r){if(r.displayMode){var n=["katex-display"];r.leqno&&n.push("leqno"),r.fleqn&&n.push("fleqn"),t=T(n,[t])}return t},r6=function(t,r,n){var s=wm(n),l;if(n.output==="mathml")return V1(t,r,s,n.displayMode,!0);if(n.output==="html"){var i=Lo(t,s);l=T(["katex"],[i])}else{var o=V1(t,r,s,n.displayMode,!1),u=Lo(t,s);l=T(["katex"],[o,u])}return Sm(l,n)},n6=function(t,r,n){var s=wm(n),l=Lo(t,s),i=T(["katex"],[l]);return Sm(i,n)},s6={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Si=function(t){var r=new I("mo",[new qe(s6[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},l6={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},i6=new Set(["widehat","widecheck","widetilde","utilde"]),ki=function(t,r){function n(){var o=4e5,u=t.label.slice(1);if(i6.has(u)&&"base"in t){var p=t.base.type==="ordgroup"?t.base.body.length:1,h,f,m;if(p>5)u==="widehat"||u==="widecheck"?(h=420,o=2364,m=.42,f=u+"4"):(h=312,o=2340,m=.34,f="tilde4");else{var x=[1,1,2,2,3,3][p];u==="widehat"||u==="widecheck"?(o=[0,1062,2364,2364,2364][x],h=[0,239,300,360,420][x],m=[0,.24,.3,.3,.36,.42][x],f=u+x):(o=[0,600,1033,2339,2340][x],h=[0,260,286,306,312][x],m=[0,.26,.286,.3,.306,.34][x],f="tilde"+x)}var A=new Zr(f),w=new $r([A],{width:"100%",height:O(m),viewBox:"0 0 "+o+" "+h,preserveAspectRatio:"none"});return{span:Jr([],[w],r),minWidth:0,height:m}}else{var j=[],$=l6[u];if(!$)throw new Error('No SVG data for "'+u+'".');var[y,b,q]=$,C=q/1e3,E=y.length,z,N;if(E===1){if($.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+u+'".');z=["hide-tail"],N=[$[3]]}else if(E===2)z=["halfarrow-left","halfarrow-right"],N=["xMinYMin","xMaxYMin"];else if(E===3)z=["brace-left","brace-center","brace-right"],N=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+E+" children.");for(var Q=0;Q<E;Q++){var U=new Zr(y[Q]),le=new $r([U],{width:"400em",height:O(C),viewBox:"0 0 "+o+" "+q,preserveAspectRatio:N[Q]+" slice"}),ie=Jr([z[Q]],[le],r);if(E===1)return{span:ie,minWidth:b,height:C};ie.style.height=O(C),j.push(ie)}return{span:T(["stretchy"],j,r),minWidth:b,height:C}}}var{span:s,minWidth:l,height:i}=n();return s.height=i,s.style.height=O(i),l>0&&(s.style.minWidth=O(l)),s},a6=function(t,r,n,s,l){var i,o=t.height+t.depth+n+s;if(/fbox|color|angl/.test(r)){if(i=T(["stretchy",r],[],l),r==="fbox"){var u=l.color&&l.getColor();u&&(i.style.borderColor=u)}}else{var p=[];/^[bx]cancel$/.test(r)&&p.push(new Eo({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&p.push(new Eo({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new $r(p,{width:"100%",height:O(o)});i=Jr([],[h],l)}return i.height=o,i.style.height=O(o),i},o6={bin:1,close:1,inner:1,open:1,punct:1,rel:1},u6={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function c6(e){return e in o6}function Z(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function bi(e){var t=Ai(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function Ai(e){return e&&(e.type==="atom"||u6.hasOwnProperty(e.type))?e:null}var km=e=>{if(e instanceof St)return e;if(D5(e)&&e.children.length===1)return km(e.children[0])},Ku=(e,t)=>{var r,n,s;e&&e.type==="supsub"?(n=Z(e.base,"accent"),r=n.base,e.base=r,s=T5(se(e,t)),e.base=n):(n=Z(e,"accent"),r=n.base);var l=se(r,t.havingCrampedStyle()),i=n.isShifty&&Sr(r),o=0;if(i){var u,p;o=(u=(p=km(l))==null?void 0:p.skew)!=null?u:0}var h=n.label==="\\c",f=h?l.height+l.depth:Math.min(l.height,t.fontMetrics().xHeight),m;if(n.isStretchy)m=ki(n,t),m=ne({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"elem",elem:m,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+O(2*o)+")",marginLeft:O(2*o)}:void 0}]});else{var x,A;n.label==="\\vec"?(x=vm("vec",t),A=fm.vec[1]):(x=wi({mode:n.mode,text:n.label},t,"textord"),x=N5(x),x.italic=0,A=x.width,h&&(f+=x.depth)),m=T(["accent-body"],[x]);var w=n.label==="\\textcircled";w&&(m.classes.push("accent-full"),f=l.height);var j=o;w||(j-=A/2),m.style.left=O(j),n.label==="\\textcircled"&&(m.style.top=".2em"),m=ne({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:-f},{type:"elem",elem:m}]})}var $=T(["mord","accent"],[m],t);return s?(s.children[0]=$,s.height=Math.max($.height,s.height),s.classes[0]="mord",s):$},bm=(e,t)=>{var r=e.isStretchy?Si(e.label):new I("mo",[It(e.label,e.mode)]),n=new I("mover",[ce(e.base,t),r]);return n.setAttribute("accent","true"),n},d6=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));L({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=K0(t[0]),n=!d6.test(e.funcName),s=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:s,base:r}},htmlBuilder:Ku,mathmlBuilder:bm});L({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Ku,mathmlBuilder:bm});L({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:s}},htmlBuilder:(e,t)=>{var r=se(e.base,t),n=ki(e,t),s=e.label==="\\utilde"?.12:0,l=ne({positionType:"top",positionData:r.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return T(["mord","accentunder"],[l],t)},mathmlBuilder:(e,t)=>{var r=Si(e.label),n=new I("munder",[ce(e.base,t),r]);return n.setAttribute("accentunder","true"),n}});var Yl=e=>{var t=new I("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};L({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n,funcName:s}=e;return{type:"xArrow",mode:n.mode,label:s,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,n=t.havingStyle(r.sup()),s=hs(se(e.body,n,t),t),l=e.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(l+"-arrow-pad");var i;e.below&&(n=t.havingStyle(r.sub()),i=hs(se(e.below,n,t),t),i.classes.push(l+"-arrow-pad"));var o=ki(e,t),u=-t.fontMetrics().axisHeight+.5*o.height,p=-t.fontMetrics().axisHeight-.5*o.height-.111;(s.depth>.25||e.label==="\\xleftequilibrium")&&(p-=s.depth);var h;if(i){var f=-t.fontMetrics().axisHeight+i.height+.5*o.height+.111;h=ne({positionType:"individualShift",children:[{type:"elem",elem:s,shift:p},{type:"elem",elem:o,shift:u,wrapperClasses:["svg-align"]},{type:"elem",elem:i,shift:f}]})}else h=ne({positionType:"individualShift",children:[{type:"elem",elem:s,shift:p},{type:"elem",elem:o,shift:u,wrapperClasses:["svg-align"]}]});return T(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var r=Si(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var s=Yl(ce(e.body,t));if(e.below){var l=Yl(ce(e.below,t));n=new I("munderover",[r,l,s])}else n=new I("mover",[r,s])}else if(e.below){var i=Yl(ce(e.below,t));n=new I("munder",[r,i])}else n=Yl(),n=new I("mover",[r,n]);return n}});function Am(e,t){var r=Te(e.body,t,!0);return T([e.mclass],r,t)}function Pm(e,t){var r,n=Pt(e.body,t);return e.mclass==="minner"?r=new I("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(r=n[0],r.type="mi"):r=new I("mi",n):(e.isCharacterBox?(r=n[0],r.type="mo"):r=new I("mo",n),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}L({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:n}=e,s=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.slice(5),body:Ce(s),isCharacterBox:Sr(s)}},htmlBuilder:Am,mathmlBuilder:Pm});var Pi=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};L({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:Pi(t[0]),body:Ce(t[1]),isCharacterBox:Sr(t[1])}}});L({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:n}=e,s=t[1],l=t[0],i;n!=="\\stackrel"?i=Pi(s):i="mrel";var o={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Ce(s)},u={type:"supsub",mode:l.mode,base:o,sup:n==="\\underset"?null:l,sub:n==="\\underset"?l:null};return{type:"mclass",mode:r.mode,mclass:i,body:[u],isCharacterBox:Sr(u)}},htmlBuilder:Am,mathmlBuilder:Pm});L({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:Pi(t[0]),body:Ce(t[0])}},htmlBuilder(e,t){var r=Te(e.body,t,!0),n=T([e.mclass],r,t);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,t){var r=Pt(e.body,t),n=new I("mstyle",r);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var p6={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Y1=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),K1=e=>e.type==="textord"&&e.text==="@",h6=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function m6(e,t,r){var n=p6[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(n,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[t[0]],[]),l={type:"atom",text:n,mode:"math",family:"rel"},i=r.callFunction("\\Big",[l],[]),o=r.callFunction("\\\\cdright",[t[1]],[]),u={type:"ordgroup",mode:"math",body:[s,i,o]};return r.callFunction("\\\\cdparent",[u],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var p={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[p],[])}default:return{type:"textord",text:" ",mode:"math"}}}function f6(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new R("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],s=[n],l=0;l<t.length;l++){for(var i=t[l],o=Y1(),u=0;u<i.length;u++)if(!K1(i[u]))o.body.push(i[u]);else{n.push(o),u+=1;var p=bi(i[u]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(p))if("<>AV".includes(p))for(var f=0;f<2;f++){for(var m=!0,x=u+1;x<i.length;x++){if(h6(i[x],p)){m=!1,u=x;break}if(K1(i[x]))throw new R("Missing a "+p+" character to complete a CD arrow.",i[x]);h[f].body.push(i[x])}if(m)throw new R("Missing a "+p+" character to complete a CD arrow.",i[u])}else throw new R('Expected one of "<>AV=|." after @',i[u]);var A=m6(p,h,e),w={type:"styling",body:[A],mode:"math",style:"display",resetFont:!0};n.push(w),o=Y1()}l%2===0?n.push(o):n.shift(),n=[],s.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var j=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:j,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}L({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"cdlabel",mode:r.mode,side:n.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),n=hs(se(e.label,r,t),t);return n.classes.push("cd-label-"+e.side),n.style.bottom=O(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,t){var r=new I("mrow",[ce(e.label,t)]);return r=new I("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new I("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});L({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=hs(se(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new I("mrow",[ce(e.fragment,t)])}});L({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,n=Z(t[0],"ordgroup"),s=n.body,l="",i=0;i<s.length;i++){var o=Z(s[i],"textord");l+=o.text}var u=parseInt(l),p;if(isNaN(u))throw new R("\\@char has non-numeric argument "+l);if(u<0||u>=1114111)throw new R("\\@char with invalid code point "+l);return u<=65535?p=String.fromCharCode(u):(u-=65536,p=String.fromCharCode((u>>10)+55296,(u&1023)+56320)),{type:"textord",mode:r.mode,text:p}}});var jm=(e,t)=>{var r=Te(e.body,t.withColor(e.color),!1);return br(r)},Cm=(e,t)=>{var r=Pt(e.body,t.withColor(e.color)),n=new I("mstyle",r);return n.setAttribute("mathcolor",e.color),n};L({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,n=Z(t[0],"color-token").color,s=t[1];return{type:"color",mode:r.mode,color:n,body:Ce(s)}},htmlBuilder:jm,mathmlBuilder:Cm});L({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:n}=e,s=Z(t[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var l=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:s,body:l}},htmlBuilder:jm,mathmlBuilder:Cm});L({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:n}=e,s=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,l=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:l,size:s&&Z(s,"size").value}},htmlBuilder(e,t){var r=T(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=O($e(e.size,t)))),r},mathmlBuilder(e,t){var r=new I("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",O($e(e.size,t)))),r}});var Fo={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},qm=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new R("Expected a control sequence",e);return t},v6=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},Em=(e,t,r,n)=>{var s=e.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,s,n)};L({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var n=t.fetch();if(Fo[n.text])return(r==="\\global"||r==="\\\\globallong")&&(n.text=Fo[n.text]),Z(t.parseFunction(),"internal");throw new R("Invalid token after macro prefix",n)}});L({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=t.gullet.popToken(),s=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new R("Expected a control sequence",n);for(var l=0,i,o=[[]];t.gullet.future().text!=="{";)if(n=t.gullet.popToken(),n.text==="#"){if(t.gullet.future().text==="{"){i=t.gullet.future(),o[l].push("{");break}if(n=t.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new R('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==l+1)throw new R('Argument number "'+n.text+'" out of order');l++,o.push([])}else{if(n.text==="EOF")throw new R("Expected a macro definition");o[l].push(n.text)}var{tokens:u}=t.gullet.consumeArg();return i&&u.unshift(i),(r==="\\edef"||r==="\\xdef")&&(u=t.gullet.expandTokens(u),u.reverse()),t.gullet.macros.set(s,{tokens:u,numArgs:l,delimiters:o},r===Fo[r]),{type:"internal",mode:t.mode}}});L({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=qm(t.gullet.popToken());t.gullet.consumeSpaces();var s=v6(t);return Em(t,n,s,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});L({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=qm(t.gullet.popToken()),s=t.gullet.popToken(),l=t.gullet.popToken();return Em(t,n,l,r==="\\\\globalfuture"),t.gullet.pushToken(l),t.gullet.pushToken(s),{type:"internal",mode:t.mode}}});var Ds=function(t,r,n){var s=ve.math[t]&&ve.math[t].replace,l=Wu(s||t,r,n);if(!l)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return l},Zu=function(t,r,n,s){var l=n.havingBaseStyle(r),i=T(s.concat(l.sizingClasses(n)),[t],n),o=l.sizeMultiplier/n.sizeMultiplier;return i.height*=o,i.depth*=o,i.maxFontSize=l.sizeMultiplier,i},Bm=function(t,r,n){var s=r.havingBaseStyle(n),l=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=O(l),t.height-=l,t.depth+=l},g6=function(t,r,n,s,l,i){var o=tt(t,"Main-Regular",l,s),u=Zu(o,r,s,i);return Bm(u,s,r),u},x6=function(t,r,n,s){return tt(t,"Size"+r+"-Regular",n,s)},zm=function(t,r,n,s,l,i){var o=x6(t,r,l,s),u=Zu(T(["delimsizing","size"+r],[o],s),K.TEXT,s,i);return n&&Bm(u,s,K.TEXT),u},ha=function(t,r,n){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var l=T(["delimsizinginner",s],[T([],[tt(t,r,n)])]);return{type:"elem",elem:l}},ma=function(t,r,n){var s=Zt["Size4-Regular"][t.charCodeAt(0)]?Zt["Size4-Regular"][t.charCodeAt(0)][4]:Zt["Size1-Regular"][t.charCodeAt(0)][4],l=new Zr("inner",j5(t,Math.round(1e3*r))),i=new $r([l],{width:O(s),height:O(r),style:"width:"+O(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),o=Jr([],[i],n);return o.height=r,o.style.height=O(r),o.style.width=O(s),{type:"elem",elem:o}},Ho=.008,Kl={type:"kern",size:-1*Ho},y6=new Set(["|","\\lvert","\\rvert","\\vert"]),$6=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Mm=function(t,r,n,s,l,i){var o,u,p,h,f="",m=0;o=p=h=t,u=null;var x="Size1-Regular";t==="\\uparrow"?p=h="⏐":t==="\\Uparrow"?p=h="‖":t==="\\downarrow"?o=p="⏐":t==="\\Downarrow"?o=p="‖":t==="\\updownarrow"?(o="\\uparrow",p="⏐",h="\\downarrow"):t==="\\Updownarrow"?(o="\\Uparrow",p="‖",h="\\Downarrow"):y6.has(t)?(p="∣",f="vert",m=333):$6.has(t)?(p="∥",f="doublevert",m=556):t==="["||t==="\\lbrack"?(o="⎡",p="⎢",h="⎣",x="Size4-Regular",f="lbrack",m=667):t==="]"||t==="\\rbrack"?(o="⎤",p="⎥",h="⎦",x="Size4-Regular",f="rbrack",m=667):t==="\\lfloor"||t==="⌊"?(p=o="⎢",h="⎣",x="Size4-Regular",f="lfloor",m=667):t==="\\lceil"||t==="⌈"?(o="⎡",p=h="⎢",x="Size4-Regular",f="lceil",m=667):t==="\\rfloor"||t==="⌋"?(p=o="⎥",h="⎦",x="Size4-Regular",f="rfloor",m=667):t==="\\rceil"||t==="⌉"?(o="⎤",p=h="⎥",x="Size4-Regular",f="rceil",m=667):t==="("||t==="\\lparen"?(o="⎛",p="⎜",h="⎝",x="Size4-Regular",f="lparen",m=875):t===")"||t==="\\rparen"?(o="⎞",p="⎟",h="⎠",x="Size4-Regular",f="rparen",m=875):t==="\\{"||t==="\\lbrace"?(o="⎧",u="⎨",h="⎩",p="⎪",x="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(o="⎫",u="⎬",h="⎭",p="⎪",x="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(o="⎧",h="⎩",p="⎪",x="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(o="⎫",h="⎭",p="⎪",x="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(o="⎧",h="⎭",p="⎪",x="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(o="⎫",h="⎩",p="⎪",x="Size4-Regular");var A=Ds(o,x,l),w=A.height+A.depth,j=Ds(p,x,l),$=j.height+j.depth,y=Ds(h,x,l),b=y.height+y.depth,q=0,C=1;if(u!==null){var E=Ds(u,x,l);q=E.height+E.depth,C=2}var z=w+b+q,N=Math.max(0,Math.ceil((r-z)/(C*$))),Q=z+N*C*$,U=s.fontMetrics().axisHeight;n&&(U*=s.sizeMultiplier);var le=Q/2-U,ie=[];if(f.length>0){var He=Q-w-b,De=Math.round(Q*1e3),mt=C5(f,Math.round(He*1e3)),jt=new Zr(f,mt),Wt=O(m/1e3),F=O(De/1e3),X=new $r([jt],{width:Wt,height:F,viewBox:"0 0 "+m+" "+De}),G=Jr([],[X],s);G.height=De/1e3,G.style.width=Wt,G.style.height=F,ie.push({type:"elem",elem:G})}else{if(ie.push(ha(h,x,l)),ie.push(Kl),u===null){var ae=Q-w-b+2*Ho;ie.push(ma(p,ae,s))}else{var me=(Q-w-b-q)/2+2*Ho;ie.push(ma(p,me,s)),ie.push(Kl),ie.push(ha(u,x,l)),ie.push(Kl),ie.push(ma(p,me,s))}ie.push(Kl),ie.push(ha(o,x,l))}var _e=s.havingBaseStyle(K.TEXT),Ct=ne({positionType:"bottom",positionData:le,children:ie});return Zu(T(["delimsizing","mult"],[Ct],_e),K.TEXT,s,i)},fa=80,va=.08,ga=function(t,r,n,s,l){var i=P5(t,s,n),o=new Zr(t,i),u=new $r([o],{width:"400em",height:O(r),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Jr(["hide-tail"],[u],l)},w6=function(t,r){var n=r.havingBaseSizing(),s=Rm("\\surd",t*n.sizeMultiplier,Im,n),l=n.sizeMultiplier,i=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),o,u,p,h,f;return s.type==="small"?(h=1e3+1e3*i+fa,t<1?l=1:t<1.4&&(l=.7),u=(1+i+va)/l,p=(1+i)/l,o=ga("sqrtMain",u,h,i,r),o.style.minWidth="0.853em",f=.833/l):s.type==="large"?(h=(1e3+fa)*Vs[s.size],p=(Vs[s.size]+i)/l,u=(Vs[s.size]+i+va)/l,o=ga("sqrtSize"+s.size,u,h,i,r),o.style.minWidth="1.02em",f=1/l):(u=t+i+va,p=t+i,h=Math.floor(1e3*t+i)+fa,o=ga("sqrtTall",u,h,i,r),o.style.minWidth="0.742em",f=1.056),o.height=p,o.style.height=O(u),{span:o,advanceWidth:f,ruleWidth:(r.fontMetrics().sqrtRuleThickness+i)*l}},Nm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),S6=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Tm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Vs=[0,1.2,1.8,2.4,3],Dm=function(t,r,n,s,l){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Nm.has(t)||Tm.has(t))return zm(t,r,!1,n,s,l);if(S6.has(t))return Mm(t,Vs[r],!1,n,s,l);throw new R("Illegal delimiter: '"+t+"'")},k6=[{type:"small",style:K.SCRIPTSCRIPT},{type:"small",style:K.SCRIPT},{type:"small",style:K.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],b6=[{type:"small",style:K.SCRIPTSCRIPT},{type:"small",style:K.SCRIPT},{type:"small",style:K.TEXT},{type:"stack"}],Im=[{type:"small",style:K.SCRIPTSCRIPT},{type:"small",style:K.SCRIPT},{type:"small",style:K.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],A6=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";var r=t.type;throw new Error("Add support for delim type '"+r+"' here.")},Rm=function(t,r,n,s){for(var l=Math.min(2,3-s.style.size),i=l;i<n.length;i++){var o=n[i];if(o.type==="stack")break;var u=Ds(t,A6(o),"math"),p=u.height+u.depth;if(o.type==="small"){var h=s.havingBaseStyle(o.style);p*=h.sizeMultiplier}if(p>r)return o}return n[n.length-1]},_o=function(t,r,n,s,l,i){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var o;Tm.has(t)?o=k6:Nm.has(t)?o=Im:o=b6;var u=Rm(t,r,o,s);return u.type==="small"?g6(t,u.style,n,s,l,i):u.type==="large"?zm(t,u.size,n,s,l,i):Mm(t,r,n,s,l,i)},xa=function(t,r,n,s,l,i){var o=s.fontMetrics().axisHeight*s.sizeMultiplier,u=901,p=5/s.fontMetrics().ptPerEm,h=Math.max(r-o,n+o),f=Math.max(h/500*u,2*h-p);return _o(t,f,!0,s,l,i)},Z1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},P6=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function J1(e){return"isMiddle"in e}function ji(e,t){var r=Ai(e);if(r&&P6.has(r.text))return r;throw r?new R("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new R("Invalid delimiter type '"+e.type+"'",e)}L({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=ji(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Z1[e.funcName].size,mclass:Z1[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?T([e.mclass]):Dm(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(It(e.delim,e.mode));var r=new I("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var n=O(Vs[e.size]);return r.setAttribute("minsize",n),r.setAttribute("maxsize",n),r}});function ed(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}L({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new R("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:ji(t[0],e).text,color:r}}});L({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=ji(t[0],e),n=e.parser;++n.leftrightDepth;var s=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var l=Z(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:s,left:r.text,right:l.delim,rightColor:l.color}},htmlBuilder:(e,t)=>{ed(e);for(var r=Te(e.body,t,!0,["mopen","mclose"]),n=0,s=0,l=!1,i=0;i<r.length;i++){var o=r[i];J1(o)?l=!0:(n=Math.max(r[i].height,n),s=Math.max(r[i].depth,s))}n*=t.sizeMultiplier,s*=t.sizeMultiplier;var u;if(e.left==="."?u=fl(t,["mopen"]):u=xa(e.left,n,s,t,e.mode,["mopen"]),r.unshift(u),l)for(var p=1;p<r.length;p++){var h=r[p];if(J1(h)){var f=h.isMiddle;r[p]=xa(f.delim,n,s,f.options,e.mode,[])}}var m;if(e.right===".")m=fl(t,["mclose"]);else{var x=e.rightColor?t.withColor(e.rightColor):t;m=xa(e.right,n,s,x,e.mode,["mclose"])}return r.push(m),T(["minner"],r,t)},mathmlBuilder:(e,t)=>{ed(e);var r=Pt(e.body,t);if(e.left!=="."){var n=new I("mo",[It(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if(e.right!=="."){var s=new I("mo",[It(e.right,e.mode)]);s.setAttribute("fence","true"),e.rightColor&&s.setAttribute("mathcolor",e.rightColor),r.push(s)}return Xu(r)}});L({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=ji(t[0],e);if(!e.parser.leftrightDepth)throw new R("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;return e.delim==="."?r=fl(t,[]):(r=Dm(e.delim,1,t,e.mode,[]),r.isMiddle={delim:e.delim,options:t}),r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?It("|","text"):It(e.delim,e.mode),n=new I("mo",[r]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Ci=(e,t)=>{var r=hs(se(e.body,t),t),n=e.label.slice(1),s=t.sizeMultiplier,l,i,o=Sr(e.body);if(n==="sout")l=T(["stretchy","sout"]),l.height=t.fontMetrics().defaultRuleThickness/s,i=-.5*t.fontMetrics().xHeight;else if(n==="phase"){var u=$e({number:.6,unit:"pt"},t),p=$e({number:.35,unit:"ex"},t),h=t.havingBaseSizing();s=s/h.sizeMultiplier;var f=r.height+r.depth+u+p;r.style.paddingLeft=O(f/2+u);var m=Math.floor(1e3*f*s),x=b5(m),A=new $r([new Zr("phase",x)],{width:"400em",height:O(m/1e3),viewBox:"0 0 400000 "+m,preserveAspectRatio:"xMinYMin slice"});l=Jr(["hide-tail"],[A],t),l.style.height=O(f),i=r.depth+u+p}else{/cancel/.test(n)?o||r.classes.push("cancel-pad"):n==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var w,j,$=0;/box/.test(n)?($=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),w=t.fontMetrics().fboxsep+(n==="colorbox"?0:$),j=w):n==="angl"?($=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),w=4*$,j=Math.max(0,.25-r.depth)):(w=o?.2:0,j=w),l=a6(r,n,w,j,t),/fbox|boxed|fcolorbox/.test(n)?(l.style.borderStyle="solid",l.style.borderWidth=O($)):n==="angl"&&$!==.049&&(l.style.borderTopWidth=O($),l.style.borderRightWidth=O($)),i=r.depth+j,e.backgroundColor&&(l.style.backgroundColor=e.backgroundColor,e.borderColor&&(l.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=ne({positionType:"individualShift",children:[{type:"elem",elem:l,shift:i},{type:"elem",elem:r,shift:0}]});else{var b=/cancel|phase/.test(n)?["svg-align"]:[];y=ne({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:l,shift:i,wrapperClasses:b}]})}return/cancel/.test(n)&&(y.height=r.height,y.depth=r.depth),/cancel/.test(n)&&!o?T(["mord","cancel-lap"],[y],t):T(["mord"],[y],t)},qi=(e,t)=>{var r,n=new I(e.label.includes("colorbox")?"mpadded":"menclose",[ce(e.body,t)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*r+"pt"),n.setAttribute("height","+"+2*r+"pt"),n.setAttribute("lspace",r+"pt"),n.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var s=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);n.setAttribute("style","border: "+O(s)+" solid "+e.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};L({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(e,t,r){var{parser:n,funcName:s}=e,l=Z(t[0],"color-token").color,i=t[1];return{type:"enclose",mode:n.mode,label:s,backgroundColor:l,body:i}},htmlBuilder:Ci,mathmlBuilder:qi});L({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(e,t,r){var{parser:n,funcName:s}=e,l=Z(t[0],"color-token").color,i=Z(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:n.mode,label:s,backgroundColor:i,borderColor:l,body:o}},htmlBuilder:Ci,mathmlBuilder:qi});L({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});L({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e,s=t[0];return{type:"enclose",mode:r.mode,label:n,body:s}},htmlBuilder:Ci,mathmlBuilder:qi});L({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var s=t[0];return{type:"enclose",mode:r.mode,label:n,body:s}},htmlBuilder:Ci,mathmlBuilder:qi});L({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Om={};function rr(e){for(var{type:t,names:r,props:n,handler:s,htmlBuilder:l,mathmlBuilder:i}=e,o={type:t,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},u=0;u<r.length;++u)Om[r[u]]=o;l&&(X0[t]=l),i&&(Y0[t]=i)}var Lm={};function g(e,t){Lm[e]=t}class ot{constructor(t,r,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=n}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new ot(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class $t{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new $t(r,ot.range(this,t))}}function td(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var Ei=e=>{var t=e.parser.settings;if(!t.displayMode)throw new R("{"+e.envName+"} can be used only in display mode.")},j6=new Set(["gather","gather*"]);function Ju(e){if(!e.includes("ed"))return!e.includes("*")}function ln(e,t,r){var{hskipBeforeAndAfter:n,addJot:s,cols:l,arraystretch:i,colSeparationType:o,autoTag:u,singleRow:p,emptySingleRow:h,maxNumCols:f,leqno:m}=t;if(e.gullet.beginGroup(),p||e.gullet.macros.set("\\cr","\\\\\\relax"),!i){var x=e.gullet.expandMacroAsText("\\arraystretch");if(x==null)i=1;else if(i=parseFloat(x),!i||i<0)throw new R("Invalid \\arraystretch: "+x)}e.gullet.beginGroup();var A=[],w=[A],j=[],$=[],y=u!=null?[]:void 0;function b(){u&&e.gullet.macros.set("\\@eqnsw","1",!0)}function q(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new $t("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!u&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(b(),$.push(td(e));;){var C=e.parseExpression(!1,p?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var E={type:"ordgroup",mode:e.mode,body:C};r&&(E={type:"styling",mode:e.mode,style:r,resetFont:!0,body:[E]}),A.push(E);var z=e.fetch().text;if(z==="&"){if(f&&A.length===f){if(p||o)throw new R("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(z==="\\end"){q(),A.length===1&&E.type==="styling"&&E.body.length===1&&E.body[0].type==="ordgroup"&&E.body[0].body.length===0&&(w.length>1||!h)&&w.pop(),$.length<w.length+1&&$.push([]);break}else if(z==="\\\\"){e.consume();var N=void 0;e.gullet.future().text!==" "&&(N=e.parseSizeGroup(!0)),j.push(N?N.value:null),q(),$.push(td(e)),A=[],w.push(A),b()}else throw new R("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:s,arraystretch:i,body:w,cols:l,rowGaps:j,hskipBeforeAndAfter:n,hLinesBeforeRow:$,colSeparationType:o,tags:y,leqno:m}}function ec(e){return e.slice(0,1)==="d"?"display":"text"}var nr=function(t,r){var n,s,l=t.body.length,i=t.hLinesBeforeRow,o=0,u=new Array(l),p=[],h=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),f=1/r.fontMetrics().ptPerEm,m=5*f;if(t.colSeparationType&&t.colSeparationType==="small"){var x=r.havingStyle(K.SCRIPT).sizeMultiplier;m=.2778*(x/r.sizeMultiplier)}var A=t.colSeparationType==="CD"?$e({number:3,unit:"ex"},r):12*f,w=3*f,j=t.arraystretch*A,$=.7*j,y=.3*j,b=0;function q(Pl){for(var jl=0;jl<Pl.length;++jl)jl>0&&(b+=.25),p.push({pos:b,isDashed:Pl[jl]})}for(q(i[0]),n=0;n<t.body.length;++n){var C=t.body[n],E=$,z=y;o<C.length&&(o=C.length);var N={cells:new Array(C.length),height:0,depth:0,pos:0};for(s=0;s<C.length;++s){var Q=se(C[s],r);z<Q.depth&&(z=Q.depth),E<Q.height&&(E=Q.height),N.cells[s]=Q}var U=t.rowGaps[n],le=0;U&&(le=$e(U,r),le>0&&(le+=y,z<le&&(z=le),le=0)),t.addJot&&n<t.body.length-1&&(z+=w),N.height=E,N.depth=z,b+=E,N.pos=b,b+=z+le,u[n]=N,q(i[n+1])}var ie=b/2+r.fontMetrics().axisHeight,He=t.cols||[],De=[],mt,jt,Wt=[];if(t.tags&&t.tags.some(Pl=>Pl))for(n=0;n<l;++n){var F=u[n],X=F.pos-ie,G=t.tags[n],ae=void 0;G===!0?ae=T(["eqn-num"],[],r):G===!1?ae=T([],[],r):ae=T([],Te(G,r,!0),r),ae.depth=F.depth,ae.height=F.height,Wt.push({type:"elem",elem:ae,shift:X})}for(s=0,jt=0;s<o||jt<He.length;++s,++jt){for(var me,_e=He[jt],Ct=!0;((qn=_e)==null?void 0:qn.type)==="separator";){var qn;if(Ct||(mt=T(["arraycolsep"],[]),mt.style.width=O(r.fontMetrics().doubleRuleSep),De.push(mt)),_e.separator==="|"||_e.separator===":"){var lr=_e.separator==="|"?"solid":"dashed",Rt=T(["vertical-separator"],[],r);Rt.style.height=O(b),Rt.style.borderRightWidth=O(h),Rt.style.borderRightStyle=lr,Rt.style.margin="0 "+O(-h/2);var ic=b-ie;ic&&(Rt.style.verticalAlign=O(-ic)),De.push(Rt)}else throw new R("Invalid separator type: "+_e.separator);jt++,_e=He[jt],Ct=!1}if(!(s>=o)){var En=void 0;if(s>0||t.hskipBeforeAndAfter){var ac,oc;En=(ac=(oc=_e)==null?void 0:oc.pregap)!=null?ac:m,En!==0&&(mt=T(["arraycolsep"],[]),mt.style.width=O(En),De.push(mt))}var uc=[];for(n=0;n<l;++n){var kl=u[n],bl=kl.cells[s];if(bl){var a4=kl.pos-ie;bl.depth=kl.depth,bl.height=kl.height,uc.push({type:"elem",elem:bl,shift:a4})}}var o4=ne({positionType:"individualShift",children:uc}),u4=T(["col-align-"+(((me=_e)==null?void 0:me.align)||"c")],[o4]);if(De.push(u4),s<o-1||t.hskipBeforeAndAfter){var cc,dc;En=(cc=(dc=_e)==null?void 0:dc.postgap)!=null?cc:m,En!==0&&(mt=T(["arraycolsep"],[]),mt.style.width=O(En),De.push(mt))}}}var Al=T(["mtable"],De);if(p.length>0){for(var c4=ps("hline",r,h),d4=ps("hdashline",r,h),Mi=[{type:"elem",elem:Al,shift:0}];p.length>0;){var pc=p.pop(),hc=pc.pos-ie;pc.isDashed?Mi.push({type:"elem",elem:d4,shift:hc}):Mi.push({type:"elem",elem:c4,shift:hc})}Al=ne({positionType:"individualShift",children:Mi})}if(Wt.length===0)return T(["mord"],[Al],r);var p4=ne({positionType:"individualShift",children:Wt}),h4=T(["tag"],[p4],r);return br([Al,h4])},C6={c:"center ",l:"left ",r:"right "},sr=function(t,r){for(var n=[],s=new I("mtd",[],["mtr-glue"]),l=new I("mtd",[],["mml-eqn-num"]),i=0;i<t.body.length;i++){for(var o=t.body[i],u=[],p=0;p<o.length;p++)u.push(new I("mtd",[ce(o[p],r)]));t.tags&&t.tags[i]&&(u.unshift(s),u.push(s),t.leqno?u.unshift(l):u.push(l)),n.push(new I("mtr",u))}var h=new I("mtable",n),f=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",O(f));var m="",x="";if(t.cols&&t.cols.length>0){var A=t.cols,w="",j=!1,$=0,y=A.length;A[0].type==="separator"&&(m+="top ",$=1),A[A.length-1].type==="separator"&&(m+="bottom ",y-=1);for(var b=$;b<y;b++){var q=A[b];q.type==="align"?(x+=C6[q.align],j&&(w+="none "),j=!0):q.type==="separator"&&j&&(w+=q.separator==="|"?"solid ":"dashed ",j=!1)}h.setAttribute("columnalign",x.trim()),/[sd]/.test(w)&&h.setAttribute("columnlines",w.trim())}if(t.colSeparationType==="align"){for(var C=t.cols||[],E="",z=1;z<C.length;z++)E+=z%2?"0em ":"1em ";h.setAttribute("columnspacing",E.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var N="",Q=t.hLinesBeforeRow;m+=Q[0].length>0?"left ":"",m+=Q[Q.length-1].length>0?"right ":"";for(var U=1;U<Q.length-1;U++)N+=Q[U].length===0?"none ":Q[U][0]?"dashed ":"solid ";return/[sd]/.test(N)&&h.setAttribute("rowlines",N.trim()),m!==""&&(h=new I("menclose",[h]),h.setAttribute("notation",m.trim())),t.arraystretch&&t.arraystretch<1&&(h=new I("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Fm=function(t,r){t.envName.includes("ed")||Ei(t);var n=[],s=t.envName.includes("at")?"alignat":"align",l=t.envName==="split",i=ln(t.parser,{cols:n,addJot:!0,autoTag:l?void 0:Ju(t.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:l?2:void 0,leqno:t.parser.settings.leqno},"display"),o=0,u=0,p={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var h="",f=0;f<r[0].body.length;f++){var m=Z(r[0].body[f],"textord");h+=m.text}o=Number(h),u=o*2}var x=!u;i.body.forEach(function($){for(var y=1;y<$.length;y+=2){var b=Z($[y],"styling"),q=Z(b.body[0],"ordgroup");q.body.unshift(p)}if(x)u<$.length&&(u=$.length);else{var C=$.length/2;if(o<C)throw new R("Too many math in a row: "+("expected "+o+", but got "+C),$[0])}});for(var A=0;A<u;++A){var w="r",j=0;A%2===1?w="l":A>0&&x&&(j=1),n[A]={type:"align",align:w,pregap:j,postgap:0}}return i.colSeparationType=x?"align":"alignat",i};rr({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=Ai(t[0]),n=r?[t[0]]:Z(t[0],"ordgroup").body,s=n.map(function(i){var o=bi(i),u=o.text;if("lcr".includes(u))return{type:"align",align:u};if(u==="|")return{type:"separator",separator:"|"};if(u===":")return{type:"separator",separator:":"};throw new R("Unknown column alignment: "+u,i)}),l={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return ln(e.parser,l,ec(e.envName))},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var s=e.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new R("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),n.cols=[{type:"align",align:r}]}}var l=ln(e.parser,n,ec(e.envName)),i=Math.max(0,...l.body.map(o=>o.length));return l.cols=new Array(i).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[l],left:t[0],right:t[1],rightColor:void 0}:l},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=ln(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=Ai(t[0]),n=r?[t[0]]:Z(t[0],"ordgroup").body,s=n.map(function(o){var u=bi(o),p=u.text;if("lc".includes(p))return{type:"align",align:p};throw new R("Unknown column alignment: "+p,o)});if(s.length>1)throw new R("{subarray} can contain only one column");var l={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5},i=ln(e.parser,l,"script");if(i.body.length>0&&i.body[0].length>1)throw new R("{subarray} can contain only one column");return i},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=ln(e.parser,t,ec(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Fm,htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){j6.has(e.envName)&&Ei(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Ju(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return ln(e.parser,t,"display")},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Fm,htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){Ei(e);var t={autoTag:Ju(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return ln(e.parser,t,"display")},htmlBuilder:nr,mathmlBuilder:sr});rr({type:"array",names:["CD"],props:{numArgs:0},handler(e){return Ei(e),f6(e.parser)},htmlBuilder:nr,mathmlBuilder:sr});g("\\nonumber","\\gdef\\@eqnsw{0}");g("\\notag","\\nonumber");L({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new R(e.funcName+" valid only within array environment")}});var rd=Om;L({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:n}=e,s=t[0];if(s.type!=="ordgroup")throw new R("Invalid environment name",s);for(var l="",i=0;i<s.body.length;++i)l+=Z(s.body[i],"textord").text;if(n==="\\begin"){if(!rd.hasOwnProperty(l))throw new R("No such environment: "+l,s);var o=rd[l],{args:u,optArgs:p}=r.parseArguments("\\begin{"+l+"}",o),h={mode:r.mode,envName:l,parser:r},f=o.handler(h,u,p);r.expect("\\end",!1);var m=r.nextToken,x=Z(r.parseFunction(),"environment");if(x.name!==l)throw new R("Mismatch: \\begin{"+l+"} matched by \\end{"+x.name+"}",m);return f}return{type:"environment",mode:r.mode,name:l,nameGroup:s}}});var Hm=(e,t)=>{var r=e.font,n=t.withFont(r);return se(e.body,n)},_m=(e,t)=>{var r=e.font,n=t.withFont(r);return ce(e.body,n)},nd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};L({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=K0(t[0]),l=n;return l in nd&&(l=nd[l]),{type:"font",mode:r.mode,font:l.slice(1),body:s}},htmlBuilder:Hm,mathmlBuilder:_m});L({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"mclass",mode:r.mode,mclass:Pi(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}],isCharacterBox:Sr(n)}}});L({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,breakOnTokenText:s}=e,{mode:l}=r,i=r.parseExpression(!0,s);return{type:"font",mode:l,font:"math"+n.slice(1),body:{type:"ordgroup",mode:r.mode,body:i}}},htmlBuilder:Hm,mathmlBuilder:_m});var q6=(e,t)=>{var r=t.style,n=r.fracNum(),s=r.fracDen(),l;l=t.havingStyle(n);var i=se(e.numer,l,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,u=3.5/t.fontMetrics().ptPerEm;i.height=i.height<o?o:i.height,i.depth=i.depth<u?u:i.depth}l=t.havingStyle(s);var p=se(e.denom,l,t),h,f,m;e.hasBarLine?(e.barSize?(f=$e(e.barSize,t),h=ps("frac-line",t,f)):h=ps("frac-line",t),f=h.height,m=h.height):(h=null,f=0,m=t.fontMetrics().defaultRuleThickness);var x,A,w;r.size===K.DISPLAY.size?(x=t.fontMetrics().num1,f>0?A=3*m:A=7*m,w=t.fontMetrics().denom1):(f>0?(x=t.fontMetrics().num2,A=m):(x=t.fontMetrics().num3,A=3*m),w=t.fontMetrics().denom2);var j;if(h){var y=t.fontMetrics().axisHeight;x-i.depth-(y+.5*f)<A&&(x+=A-(x-i.depth-(y+.5*f))),y-.5*f-(p.height-w)<A&&(w+=A-(y-.5*f-(p.height-w)));var b=-(y-.5*f);j=ne({positionType:"individualShift",children:[{type:"elem",elem:p,shift:w},{type:"elem",elem:h,shift:b},{type:"elem",elem:i,shift:-x}]})}else{var $=x-i.depth-(p.height-w);$<A&&(x+=.5*(A-$),w+=.5*(A-$)),j=ne({positionType:"individualShift",children:[{type:"elem",elem:p,shift:w},{type:"elem",elem:i,shift:-x}]})}l=t.havingStyle(r),j.height*=l.sizeMultiplier/t.sizeMultiplier,j.depth*=l.sizeMultiplier/t.sizeMultiplier;var q;r.size===K.DISPLAY.size?q=t.fontMetrics().delim1:r.size===K.SCRIPTSCRIPT.size?q=t.havingStyle(K.SCRIPT).fontMetrics().delim2:q=t.fontMetrics().delim2;var C,E;return e.leftDelim==null?C=fl(t,["mopen"]):C=_o(e.leftDelim,q,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?E=T([]):e.rightDelim==null?E=fl(t,["mclose"]):E=_o(e.rightDelim,q,!0,t.havingStyle(r),e.mode,["mclose"]),T(["mord"].concat(l.sizingClasses(t)),[C,T(["mfrac"],[j]),E],t)},E6=(e,t)=>{var r=new I("mfrac",[ce(e.numer,t),ce(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var n=$e(e.barSize,t);r.setAttribute("linethickness",O(n))}if(e.leftDelim!=null||e.rightDelim!=null){var s=[];if(e.leftDelim!=null){var l=new I("mo",[new qe(e.leftDelim.replace("\\",""))]);l.setAttribute("fence","true"),s.push(l)}if(s.push(r),e.rightDelim!=null){var i=new I("mo",[new qe(e.rightDelim.replace("\\",""))]);i.setAttribute("fence","true"),s.push(i)}return Xu(s)}return r},Qm=(e,t)=>{if(!t)return e;var r={type:"styling",mode:e.mode,style:t,body:[e]};return r};L({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=t[0],l=t[1],i,o=null,u=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":i=!0;break;case"\\\\atopfrac":i=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":i=!1,o="(",u=")";break;case"\\\\bracefrac":i=!1,o="\\{",u="\\}";break;case"\\\\brackfrac":i=!1,o="[",u="]";break;default:throw new Error("Unrecognized genfrac command")}var p=n==="\\cfrac",h=null;return p||n.startsWith("\\d")?h="display":n.startsWith("\\t")&&(h="text"),Qm({type:"genfrac",mode:r.mode,numer:s,denom:l,continued:p,hasBarLine:i,leftDelim:o,rightDelim:u,barSize:null},h)},htmlBuilder:q6,mathmlBuilder:E6});L({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:n}=e,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:s,token:n}}});var sd=["display","text","script","scriptscript"],ld=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};L({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,n=t[4],s=t[5],l=K0(t[0]),i=l.type==="atom"&&l.family==="open"?ld(l.text):null,o=K0(t[1]),u=o.type==="atom"&&o.family==="close"?ld(o.text):null,p=Z(t[2],"size"),h,f=null;p.isBlank?h=!0:(f=p.value,h=f.number>0);var m=null,x=t[3];if(x.type==="ordgroup"){if(x.body.length>0){var A=Z(x.body[0],"textord");m=sd[Number(A.text)]}}else x=Z(x,"textord"),m=sd[Number(x.text)];return Qm({type:"genfrac",mode:r.mode,numer:n,denom:s,continued:!1,hasBarLine:h,barSize:f,leftDelim:i,rightDelim:u},m)}});L({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:n,token:s}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Z(t[0],"size").value,token:s}}});L({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=t[0],l=Z(t[1],"infix").size;if(!l)throw new Error("\\\\abovefrac expected size, but got "+String(l));var i=t[2],o=l.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:i,continued:!1,hasBarLine:o,barSize:l,leftDelim:null,rightDelim:null}}});var Um=(e,t)=>{var r=t.style,n,s;e.type==="supsub"?(n=e.sup?se(e.sup,t.havingStyle(r.sup()),t):se(e.sub,t.havingStyle(r.sub()),t),s=Z(e.base,"horizBrace")):s=Z(e,"horizBrace");var l=se(s.base,t.havingBaseStyle(K.DISPLAY)),i=ki(s,t),o;if(s.isOver?o=ne({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.1},{type:"elem",elem:i,wrapperClasses:["svg-align"]}]}):o=ne({positionType:"bottom",positionData:l.depth+.1+i.height,children:[{type:"elem",elem:i,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:l}]}),n){var u=T(["minner",s.isOver?"mover":"munder"],[o],t);s.isOver?o=ne({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=ne({positionType:"bottom",positionData:u.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:u}]})}return T(["minner",s.isOver?"mover":"munder"],[o],t)},B6=(e,t)=>{var r=Si(e.label);return new I(e.isOver?"mover":"munder",[ce(e.base,t),r])};L({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"horizBrace",mode:r.mode,label:n,isOver:n.includes("\\over"),base:t[0]}},htmlBuilder:Um,mathmlBuilder:B6});L({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[1],s=Z(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:Ce(n)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=Te(e.body,t,!1);return Q5(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=en(e.body,t);return r instanceof I||(r=new I("mrow",[r])),r.setAttribute("href",e.href),r}});L({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=Z(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:n}))return r.formatUnsupportedCmd("\\url");for(var s=[],l=0;l<n.length;l++){var i=n[l];i==="~"&&(i="\\textasciitilde"),s.push({type:"textord",mode:"text",text:i})}var o={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:n,body:Ce(o)}}});L({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Ce(t[0])}},htmlBuilder(e,t){var r=Te(e.body,t.withFont(""),!1);return br(r)},mathmlBuilder(e,t){return new I("mrow",Pt(e.body,t.withFont("")))}});L({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,token:s}=e,l=Z(t[0],"raw").string,i=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,u={};switch(n){case"\\htmlClass":u.class=l,o={command:"\\htmlClass",class:l};break;case"\\htmlId":u.id=l,o={command:"\\htmlId",id:l};break;case"\\htmlStyle":u.style=l,o={command:"\\htmlStyle",style:l};break;case"\\htmlData":{for(var p=l.split(","),h=0;h<p.length;h++){var f=p[h],m=f.indexOf("=");if(m<0)throw new R("\\htmlData key/value '"+f+"' missing equals sign");var x=f.slice(0,m),A=f.slice(m+1);u["data-"+x.trim()]=A}o={command:"\\htmlData",attributes:u};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(o)?{type:"html",mode:r.mode,attributes:u,body:Ce(i)}:r.formatUnsupportedCmd(n)},htmlBuilder:(e,t)=>{var r=Te(e.body,t,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var s=T(n,r,t);for(var l in e.attributes)l!=="class"&&e.attributes.hasOwnProperty(l)&&s.setAttribute(l,e.attributes[l]);return s},mathmlBuilder:(e,t)=>en(e.body,t)});L({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Ce(t[0]),mathml:Ce(t[1])}},htmlBuilder:(e,t)=>{var r=Te(e.html,t,!1);return br(r)},mathmlBuilder:(e,t)=>en(e.mathml,t)});var ya=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new R("Invalid size: '"+t+"' in \\includegraphics");var n={number:+(r[1]+r[2]),unit:r[3]};if(!om(n))throw new R("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};L({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:n}=e,s={number:0,unit:"em"},l={number:.9,unit:"em"},i={number:0,unit:"em"},o="";if(r[0])for(var u=Z(r[0],"raw").string,p=u.split(","),h=0;h<p.length;h++){var f=p[h].split("=");if(f.length===2){var m=f[1].trim();switch(f[0].trim()){case"alt":o=m;break;case"width":s=ya(m);break;case"height":l=ya(m);break;case"totalheight":i=ya(m);break;default:throw new R("Invalid key: '"+f[0]+"' in \\includegraphics.")}}}var x=Z(t[0],"url").url;return o===""&&(o=x,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:x})?{type:"includegraphics",mode:n.mode,alt:o,width:s,height:l,totalheight:i,src:x}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=$e(e.height,t),n=0;e.totalheight.number>0&&(n=$e(e.totalheight,t)-r);var s=0;e.width.number>0&&(s=$e(e.width,t));var l={height:O(r+n)};s>0&&(l.width=O(s)),n>0&&(l.verticalAlign=O(-n));var i=new z5(e.src,e.alt,l);return i.height=r,i.depth=n,i},mathmlBuilder:(e,t)=>{var r=new I("mglyph",[]);r.setAttribute("alt",e.alt);var n=$e(e.height,t),s=0;if(e.totalheight.number>0&&(s=$e(e.totalheight,t)-n,r.setAttribute("valign",O(-s))),r.setAttribute("height",O(n+s)),e.width.number>0){var l=$e(e.width,t);r.setAttribute("width",O(l))}return r.setAttribute("src",e.src),r}});L({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,s=Z(t[0],"size");if(r.settings.strict){var l=n[1]==="m",i=s.value.unit==="mu";l?(i||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):i&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(e,t){return mm(e.dimension,t)},mathmlBuilder(e,t){var r=$e(e.dimension,t);return new $m(r)}});L({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:s}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=T([],[se(e.body,t)]),r=T(["inner"],[r],t)):r=T(["inner"],[se(e.body,t)]);var n=T(["fix"],[]),s=T([e.alignment],[r,n],t),l=T(["strut"]);return l.style.height=O(s.height+s.depth),s.depth&&(l.style.verticalAlign=O(-s.depth)),s.children.unshift(l),s=T(["thinbox"],[s],t),T(["mord","vbox"],[s],t)},mathmlBuilder:(e,t)=>{var r=new I("mpadded",[ce(e.body,t)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}});L({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:n}=e,s=n.mode;n.switchMode("math");var l=r==="\\("?"\\)":"$",i=n.parseExpression(!1,l);return n.expect(l),n.switchMode(s),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:i}}});L({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new R("Mismatched "+e.funcName)}});var id=(e,t)=>{switch(t.style.size){case K.DISPLAY.size:return e.display;case K.TEXT.size:return e.text;case K.SCRIPT.size:return e.script;case K.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};L({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Ce(t[0]),text:Ce(t[1]),script:Ce(t[2]),scriptscript:Ce(t[3])}},htmlBuilder:(e,t)=>{var r=id(e,t),n=Te(r,t,!1);return br(n)},mathmlBuilder:(e,t)=>{var r=id(e,t);return en(r,t)}});var Wm=(e,t,r,n,s,l,i)=>{e=T([],[e]);var o=r&&Sr(r),u,p;if(t){var h=se(t,n.havingStyle(s.sup()),n);p={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(r){var f=se(r,n.havingStyle(s.sub()),n);u={elem:f,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-f.height)}}var m;if(p&&u){var x=n.fontMetrics().bigOpSpacing5+u.elem.height+u.elem.depth+u.kern+e.depth+i;m=ne({positionType:"bottom",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-l)},{type:"kern",size:u.kern},{type:"elem",elem:e},{type:"kern",size:p.kern},{type:"elem",elem:p.elem,marginLeft:O(l)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(u){var A=e.height-i;m=ne({positionType:"top",positionData:A,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-l)},{type:"kern",size:u.kern},{type:"elem",elem:e}]})}else if(p){var w=e.depth+i;m=ne({positionType:"bottom",positionData:w,children:[{type:"elem",elem:e},{type:"kern",size:p.kern},{type:"elem",elem:p.elem,marginLeft:O(l)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return e;var j=[m];if(u&&l!==0&&!o){var $=T(["mspace"],[],n);$.style.marginRight=O(l),j.unshift($)}return T(["mop","op-limits"],j,n)},Vm=new Set(["\\smallint"]),ws=(e,t)=>{var r,n,s=!1,l;e.type==="supsub"?(r=e.sup,n=e.sub,l=Z(e.base,"op"),s=!0):l=Z(e,"op");var i=t.style,o=!1;i.size===K.DISPLAY.size&&l.symbol&&!Vm.has(l.name)&&(o=!0);var u,p;if(l.symbol){var h=o?"Size2-Regular":"Size1-Regular",f="";if((l.name==="\\oiint"||l.name==="\\oiiint")&&(f=l.name.slice(1),l.name=f==="oiint"?"\\iint":"\\iiint"),u=tt(l.name,h,"math",t,["mop","op-symbol",o?"large-op":"small-op"]),p=u.italic,f.length>0){var m=vm(f+"Size"+(o?"2":"1"),t);u=ne({positionType:"individualShift",children:[{type:"elem",elem:u,shift:0},{type:"elem",elem:m,shift:o?.08:0}]}),l.name="\\"+f,u.classes.unshift("mop"),u.italic=p}}else if(l.body){var x=Te(l.body,t,!0);x.length===1&&x[0]instanceof St?(u=x[0],u.classes[0]="mop"):u=T(["mop"],x,t)}else{for(var A=[],w=1;w<l.name.length;w++)A.push(Vu(l.name[w],l.mode,t));u=T(["mop"],A,t)}var j=0,$=0;if((u instanceof St||l.name==="\\oiint"||l.name==="\\oiiint")&&!l.suppressBaseShift){var y;j=(u.height-u.depth)/2-t.fontMetrics().axisHeight,$=(y=u.italic)!=null?y:0}return s?Wm(u,r,n,t,i,$,j):(j&&(u.style.position="relative",u.style.top=O(j)),u)},Sl=(e,t)=>{var r;if(e.symbol)r=new I("mo",[It(e.name,e.mode)]),Vm.has(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new I("mo",Pt(e.body,t));else{r=new I("mi",[new qe(e.name.slice(1))]);var n=new I("mo",[It("⁡","text")]);e.parentIsSupSub?r=new I("mrow",[r,n]):r=ym([r,n])}return r},z6={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};L({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=n;return s.length===1&&(s=z6[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:ws,mathmlBuilder:Sl});L({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ce(n)}},htmlBuilder:ws,mathmlBuilder:Sl});var M6={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};L({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ws,mathmlBuilder:Sl});L({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ws,mathmlBuilder:Sl});L({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,n=r;return n.length===1&&(n=M6[n]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:ws,mathmlBuilder:Sl});var Gm=(e,t)=>{var r,n,s=!1,l;e.type==="supsub"?(r=e.sup,n=e.sub,l=Z(e.base,"operatorname"),s=!0):l=Z(e,"operatorname");var i;if(l.body.length>0){for(var o=l.body.map(f=>{var m="text"in f?f.text:void 0;return typeof m=="string"?{type:"textord",mode:f.mode,text:m}:f}),u=Te(o,t.withFont("mathrm"),!0),p=0;p<u.length;p++){var h=u[p];h instanceof St&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}i=T(["mop"],u,t)}else i=T(["mop"],[],t);return s?Wm(i,r,n,t,t.style,0,0):i},N6=(e,t)=>{for(var r=Pt(e.body,t.withFont("mathrm")),n=!0,s=0;s<r.length;s++){var l=r[s];if(!(l instanceof $m))if(l instanceof I)switch(l.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var i=l.children[0];l.children.length===1&&i instanceof qe?i.text=i.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=r.map(h=>h.toText()).join("");r=[new qe(o)]}var u=new I("mi",r);u.setAttribute("mathvariant","normal");var p=new I("mo",[It("⁡","text")]);return e.parentIsSupSub?new I("mrow",[u,p]):ym([u,p])};L({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,s=t[0];return{type:"operatorname",mode:r.mode,body:Ce(s),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Gm,mathmlBuilder:N6});g("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Cn({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?br(Te(e.body,t,!1)):T(["mord"],Te(e.body,t,!0),t)},mathmlBuilder(e,t){return en(e.body,t,!0)}});L({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder(e,t){var r=se(e.body,t.havingCrampedStyle()),n=ps("overline-line",t),s=t.fontMetrics().defaultRuleThickness,l=ne({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:n},{type:"kern",size:s}]});return T(["mord","overline"],[l],t)},mathmlBuilder(e,t){var r=new I("mo",[new qe("‾")]);r.setAttribute("stretchy","true");var n=new I("mover",[ce(e.body,t),r]);return n.setAttribute("accent","true"),n}});L({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"phantom",mode:r.mode,body:Ce(n)}},htmlBuilder:(e,t)=>{var r=Te(e.body,t.withPhantom(),!1);return br(r)},mathmlBuilder:(e,t)=>{var r=Pt(e.body,t);return new I("mphantom",r)}});g("\\hphantom","\\smash{\\phantom{#1}}");L({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=T(["inner"],[se(e.body,t.withPhantom())]),n=T(["fix"],[]);return T(["mord","rlap"],[r,n],t)},mathmlBuilder:(e,t)=>{var r=Pt(Ce(e.body),t),n=new I("mphantom",r),s=new I("mpadded",[n]);return s.setAttribute("width","0px"),s}});L({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,n=Z(t[0],"size").value,s=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:s}},htmlBuilder(e,t){var r=se(e.body,t),n=$e(e.dy,t);return ne({positionType:"shift",positionData:-n,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new I("mpadded",[ce(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}});L({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});L({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:n}=e,s=r[0],l=Z(t[0],"size"),i=Z(t[1],"size");return{type:"rule",mode:n.mode,shift:s&&Z(s,"size").value,width:l.value,height:i.value}},htmlBuilder(e,t){var r=T(["mord","rule"],[],t),n=$e(e.width,t),s=$e(e.height,t),l=e.shift?$e(e.shift,t):0;return r.style.borderRightWidth=O(n),r.style.borderTopWidth=O(s),r.style.bottom=O(l),r.width=n,r.height=s+l,r.depth=-l,r.maxFontSize=s*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=$e(e.width,t),n=$e(e.height,t),s=e.shift?$e(e.shift,t):0,l=t.color&&t.getColor()||"black",i=new I("mspace");i.setAttribute("mathbackground",l),i.setAttribute("width",O(r)),i.setAttribute("height",O(n));var o=new I("mpadded",[i]);return s>=0?o.setAttribute("height",O(s)):(o.setAttribute("height",O(s)),o.setAttribute("depth",O(-s))),o.setAttribute("voffset",O(s)),o}});function Xm(e,t,r){for(var n=Te(e,t,!1),s=t.sizeMultiplier/r.sizeMultiplier,l=0;l<n.length;l++){var i=n[l].classes.indexOf("sizing");i<0?Array.prototype.push.apply(n[l].classes,t.sizingClasses(r)):n[l].classes[i+1]==="reset-size"+t.size&&(n[l].classes[i+1]="reset-size"+r.size),n[l].height*=s,n[l].depth*=s}return br(n)}var ad=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],T6=(e,t)=>{var r=t.havingSize(e.size);return Xm(e.body,r,t)};L({type:"sizing",names:ad,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:n,parser:s}=e,l=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:ad.indexOf(n)+1,body:l}},htmlBuilder:T6,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),n=Pt(e.body,r),s=new I("mstyle",n);return s.setAttribute("mathsize",O(r.sizeMultiplier)),s}});L({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:n}=e,s=!1,l=!1,i=r[0]&&Z(r[0],"ordgroup");if(i)for(var o,u=0;u<i.body.length;++u){var p=i.body[u];if(o=bi(p).text,o==="t")s=!0;else if(o==="b")l=!0;else{s=!1,l=!1;break}}else s=!0,l=!0;var h=t[0];return{type:"smash",mode:n.mode,body:h,smashHeight:s,smashDepth:l}},htmlBuilder:(e,t)=>{var r=T([],[se(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0),e.smashDepth&&(r.depth=0),e.smashHeight&&e.smashDepth)return T(["mord","smash"],[r],t);if(r.children)for(var n=0;n<r.children.length;n++)e.smashHeight&&(r.children[n].height=0),e.smashDepth&&(r.children[n].depth=0);var s=ne({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return T(["mord"],[s],t)},mathmlBuilder:(e,t)=>{var r=new I("mpadded",[ce(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});L({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n}=e,s=r[0],l=t[0];return{type:"sqrt",mode:n.mode,body:l,index:s}},htmlBuilder(e,t){var r=se(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=hs(r,t);var n=t.fontMetrics(),s=n.defaultRuleThickness,l=s;t.style.id<K.TEXT.id&&(l=t.fontMetrics().xHeight);var i=s+l/4,o=r.height+r.depth+i+s,{span:u,ruleWidth:p,advanceWidth:h}=w6(o,t),f=u.height-p;f>r.height+r.depth+i&&(i=(i+f-r.height-r.depth)/2);var m=u.height-r.height-i-p;r.style.paddingLeft=O(h);var x=ne({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+m)},{type:"elem",elem:u},{type:"kern",size:p}]});if(e.index){var A=t.havingStyle(K.SCRIPTSCRIPT),w=se(e.index,A,t),j=.6*(x.height-x.depth),$=ne({positionType:"shift",positionData:-j,children:[{type:"elem",elem:w}]}),y=T(["root"],[$]);return T(["mord","sqrt"],[y,x],t)}else return T(["mord","sqrt"],[x],t)},mathmlBuilder(e,t){var{body:r,index:n}=e;return n?new I("mroot",[ce(r,t),ce(n,t)]):new I("msqrt",[ce(r,t)])}});var Qo={display:K.DISPLAY,text:K.TEXT,script:K.SCRIPT,scriptscript:K.SCRIPTSCRIPT};function D6(e){return e in Qo}L({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:n,parser:s}=e,l=s.parseExpression(!0,r),i=n.slice(1,n.length-5);if(!D6(i))throw new Error("Unknown style: "+i);return{type:"styling",mode:s.mode,style:i,body:l}},htmlBuilder(e,t){var r=Qo[e.style],n=t.havingStyle(r);return e.resetFont&&(n=n.withFont("")),Xm(e.body,n,t)},mathmlBuilder(e,t){var r=Qo[e.style],n=t.havingStyle(r);e.resetFont&&(n=n.withFont(""));var s=Pt(e.body,n),l=new I("mstyle",s),i={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=i[e.style];return l.setAttribute("scriptlevel",o[0]),l.setAttribute("displaystyle",o[1]),l}});var I6=function(t,r){var n=t.base;if(n)if(n.type==="op"){var s=n.limits&&(r.style.size===K.DISPLAY.size||n.alwaysHandleSupSub);return s?ws:null}else if(n.type==="operatorname"){var l=n.alwaysHandleSupSub&&(r.style.size===K.DISPLAY.size||n.limits);return l?Gm:null}else{if(n.type==="accent")return Sr(n.base)?Ku:null;if(n.type==="horizBrace"){var i=!t.sub;return i===n.isOver?Um:null}else return null}else return null};Cn({type:"supsub",htmlBuilder(e,t){var r=I6(e,t);if(r)return r(e,t);var{base:n,sup:s,sub:l}=e,i=se(n,t),o,u,p=t.fontMetrics(),h=0,f=0,m=n&&Sr(n);if(s){var x=t.havingStyle(t.style.sup());o=se(s,x,t),m||(h=i.height-x.fontMetrics().supDrop*x.sizeMultiplier/t.sizeMultiplier)}if(l){var A=t.havingStyle(t.style.sub());u=se(l,A,t),m||(f=i.depth+A.fontMetrics().subDrop*A.sizeMultiplier/t.sizeMultiplier)}var w;t.style===K.DISPLAY?w=p.sup1:t.style.cramped?w=p.sup3:w=p.sup2;var j=t.sizeMultiplier,$=O(.5/p.ptPerEm/j),y=null;if(u){var b=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");if(i instanceof St||b){var q;y=O(-((q=i.italic)!=null?q:0))}}var C;if(o&&u){h=Math.max(h,w,o.depth+.25*p.xHeight),f=Math.max(f,p.sub2);var E=p.defaultRuleThickness,z=4*E;if(h-o.depth-(u.height-f)<z){f=z-(h-o.depth)+u.height;var N=.8*p.xHeight-(h-o.depth);N>0&&(h+=N,f-=N)}var Q=[{type:"elem",elem:u,shift:f,marginRight:$,marginLeft:y},{type:"elem",elem:o,shift:-h,marginRight:$}];C=ne({positionType:"individualShift",children:Q})}else if(u){f=Math.max(f,p.sub1,u.height-.8*p.xHeight);var U=[{type:"elem",elem:u,marginLeft:y,marginRight:$}];C=ne({positionType:"shift",positionData:f,children:U})}else if(o)h=Math.max(h,w,o.depth+.25*p.xHeight),C=ne({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:$}]});else throw new Error("supsub must have either sup or sub.");var le=Oo(i,"right")||"mord";return T([le],[i,T(["msupsub"],[C])],t)},mathmlBuilder(e,t){var r=!1,n,s;e.base&&e.base.type==="horizBrace"&&(s=!!e.sup,s===e.base.isOver&&(r=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var l=[ce(e.base,t)];e.sub&&l.push(ce(e.sub,t)),e.sup&&l.push(ce(e.sup,t));var i;if(r)i=n?"mover":"munder";else if(e.sub)if(e.sup){var p=e.base;p&&p.type==="op"&&p.limits&&t.style===K.DISPLAY||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(t.style===K.DISPLAY||p.limits)?i="munderover":i="msubsup"}else{var u=e.base;u&&u.type==="op"&&u.limits&&(t.style===K.DISPLAY||u.alwaysHandleSupSub)||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(u.limits||t.style===K.DISPLAY)?i="munder":i="msub"}else{var o=e.base;o&&o.type==="op"&&o.limits&&(t.style===K.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||t.style===K.DISPLAY)?i="mover":i="msup"}return new I(i,l)}});Cn({type:"atom",htmlBuilder(e,t){return Vu(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new I("mo",[It(e.text,e.mode)]);if(e.family==="bin"){var n=Yu(e,t);n==="bold-italic"&&r.setAttribute("mathvariant",n)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Ym={mi:"italic",mn:"normal",mtext:"normal"};Cn({type:"mathord",htmlBuilder(e,t){return wi(e,t,"mathord")},mathmlBuilder(e,t){var r=new I("mi",[It(e.text,e.mode,t)]),n=Yu(e,t)||"italic";return n!==Ym[r.type]&&r.setAttribute("mathvariant",n),r}});Cn({type:"textord",htmlBuilder(e,t){return wi(e,t,"textord")},mathmlBuilder(e,t){var r=It(e.text,e.mode,t),n=Yu(e,t)||"normal",s;return e.mode==="text"?s=new I("mtext",[r]):/[0-9]/.test(e.text)?s=new I("mn",[r]):e.text==="\\prime"?s=new I("mo",[r]):s=new I("mi",[r]),n!==Ym[s.type]&&s.setAttribute("mathvariant",n),s}});var $a={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},wa={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Cn({type:"spacing",htmlBuilder(e,t){if(wa.hasOwnProperty(e.text)){var r=wa[e.text].className||"";if(e.mode==="text"){var n=wi(e,t,"textord");return n.classes.push(r),n}else return T(["mspace",r],[Vu(e.text,e.mode,t)],t)}else{if($a.hasOwnProperty(e.text))return T(["mspace",$a[e.text]],[],t);throw new R('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(wa.hasOwnProperty(e.text))r=new I("mtext",[new qe(" ")]);else{if($a.hasOwnProperty(e.text))return new I("mspace");throw new R('Unknown type of space "'+e.text+'"')}return r}});var od=()=>{var e=new I("mtd",[]);return e.setAttribute("width","50%"),e};Cn({type:"tag",mathmlBuilder(e,t){var r=new I("mtable",[new I("mtr",[od(),new I("mtd",[en(e.body,t)]),od(),new I("mtd",[en(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var ud={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},cd={"\\textbf":"textbf","\\textmd":"textmd"},R6={"\\textit":"textit","\\textup":"textup"},dd=(e,t)=>{var r=e.font;if(r){if(ud[r])return t.withTextFontFamily(ud[r]);if(cd[r])return t.withTextFontWeight(cd[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(R6[r])};L({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,s=t[0];return{type:"text",mode:r.mode,body:Ce(s),font:n}},htmlBuilder(e,t){var r=dd(e,t),n=Te(e.body,r,!0);return T(["mord","text"],n,r)},mathmlBuilder(e,t){var r=dd(e,t);return en(e.body,r)}});L({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=se(e.body,t),n=ps("underline-line",t),s=t.fontMetrics().defaultRuleThickness,l=ne({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:n},{type:"kern",size:3*s},{type:"elem",elem:r}]});return T(["mord","underline"],[l],t)},mathmlBuilder(e,t){var r=new I("mo",[new qe("‾")]);r.setAttribute("stretchy","true");var n=new I("munder",[ce(e.body,t),r]);return n.setAttribute("accentunder","true"),n}});L({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=se(e.body,t),n=t.fontMetrics().axisHeight,s=.5*(r.height-n-(r.depth+n));return ne({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new I("mpadded",[ce(e.body,t)],["vcenter"]);return new I("mrow",[r])}});L({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new R("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=pd(e),n=[],s=t.havingStyle(t.style.text()),l=0;l<r.length;l++){var i=r[l];i==="~"&&(i="\\textasciitilde"),n.push(tt(i,"Typewriter-Regular",e.mode,s,["mord","texttt"]))}return T(["mord","text"].concat(s.sizingClasses(t)),hm(n),s)},mathmlBuilder(e,t){var r=new qe(pd(e)),n=new I("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var pd=e=>e.body.replace(/ /g,e.star?"␣":" "),Lr=gm,Km=`[ \r
	]`,O6="\\\\[a-zA-Z@]+",L6="\\\\[^\uD800-\uDFFF]",F6="("+O6+")"+Km+"*",H6=`\\\\(
|[ \r	]+
?)[ \r	]*`,Uo="[̀-ͯ]",_6=new RegExp(Uo+"+$"),Q6="("+Km+"+)|"+(H6+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Uo+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Uo+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+F6)+("|"+L6+")");class hd{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(Q6,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new $t("EOF",new ot(this,r,r));var n=this.tokenRegex.exec(t);if(n===null||n.index!==r)throw new R("Unexpected character: '"+t[r]+"'",new $t(t[r],new ot(this,r,r+1)));var s=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[s]===14){var l=t.indexOf(`
`,this.tokenRegex.lastIndex);return l===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=l+1,this.lex()}return new $t(s,new ot(this,r,this.tokenRegex.lastIndex))}}class U6{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new R("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,n){if(n===void 0&&(n=!1),n){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var l=this.undefStack[this.undefStack.length-1];l&&!l.hasOwnProperty(t)&&(l[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var W6=Lm;g("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});g("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});g("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});g("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});g("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});g("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");g("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var md={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};g("\\char",function(e){var t=e.popToken(),r,n=0;if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")n=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new R("\\char` missing argument");n=t.text.charCodeAt(0)}else r=10;if(r){if(n=md[t.text],n==null||n>=r)throw new R("Invalid base-"+r+" digit "+t.text);for(var s;(s=md[e.future().text])!=null&&s<r;)n*=r,n+=s,e.popToken()}return"\\@char{"+n+"}"});var tc=(e,t,r,n)=>{var s=e.consumeArg().tokens;if(s.length!==1)throw new R("\\newcommand's first argument must be a macro name");var l=s[0].text,i=e.isDefined(l);if(i&&!t)throw new R("\\newcommand{"+l+"} attempting to redefine "+(l+"; use \\renewcommand"));if(!i&&!r)throw new R("\\renewcommand{"+l+"} when command "+l+" does not yet exist; use \\newcommand");var o=0;if(s=e.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var u="",p=e.expandNextToken();p.text!=="]"&&p.text!=="EOF";)u+=p.text,p=e.expandNextToken();if(!u.match(/^\s*[0-9]+\s*$/))throw new R("Invalid number of arguments: "+u);o=parseInt(u),s=e.consumeArg().tokens}return i&&n||e.macros.set(l,{tokens:s,numArgs:o}),""};g("\\newcommand",e=>tc(e,!1,!0,!1));g("\\renewcommand",e=>tc(e,!0,!1,!1));g("\\providecommand",e=>tc(e,!0,!0,!0));g("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});g("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});g("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),Lr[r],ve.math[r],ve.text[r]),""});g("\\bgroup","{");g("\\egroup","}");g("~","\\nobreakspace");g("\\lq","`");g("\\rq","'");g("\\aa","\\r a");g("\\AA","\\r A");g("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");g("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");g("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");g("ℬ","\\mathscr{B}");g("ℰ","\\mathscr{E}");g("ℱ","\\mathscr{F}");g("ℋ","\\mathscr{H}");g("ℐ","\\mathscr{I}");g("ℒ","\\mathscr{L}");g("ℳ","\\mathscr{M}");g("ℛ","\\mathscr{R}");g("ℭ","\\mathfrak{C}");g("ℌ","\\mathfrak{H}");g("ℨ","\\mathfrak{Z}");g("\\Bbbk","\\Bbb{k}");g("\\llap","\\mathllap{\\textrm{#1}}");g("\\rlap","\\mathrlap{\\textrm{#1}}");g("\\clap","\\mathclap{\\textrm{#1}}");g("\\mathstrut","\\vphantom{(}");g("\\underbar","\\underline{\\text{#1}}");g("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');g("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");g("\\ne","\\neq");g("≠","\\neq");g("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");g("∉","\\notin");g("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");g("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");g("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");g("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");g("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");g("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");g("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");g("⟂","\\perp");g("‼","\\mathclose{!\\mkern-0.8mu!}");g("∌","\\notni");g("⌜","\\ulcorner");g("⌝","\\urcorner");g("⌞","\\llcorner");g("⌟","\\lrcorner");g("©","\\copyright");g("®","\\textregistered");g("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');g("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');g("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');g("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');g("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");g("⋮","\\vdots");g("\\varGamma","\\mathit{\\Gamma}");g("\\varDelta","\\mathit{\\Delta}");g("\\varTheta","\\mathit{\\Theta}");g("\\varLambda","\\mathit{\\Lambda}");g("\\varXi","\\mathit{\\Xi}");g("\\varPi","\\mathit{\\Pi}");g("\\varSigma","\\mathit{\\Sigma}");g("\\varUpsilon","\\mathit{\\Upsilon}");g("\\varPhi","\\mathit{\\Phi}");g("\\varPsi","\\mathit{\\Psi}");g("\\varOmega","\\mathit{\\Omega}");g("\\substack","\\begin{subarray}{c}#1\\end{subarray}");g("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");g("\\boxed","\\fbox{$\\displaystyle{#1}$}");g("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");g("\\implies","\\DOTSB\\;\\Longrightarrow\\;");g("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");g("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");g("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var fd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},V6=new Set(["bin","rel"]);g("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in fd?t=fd[r]:(r.slice(0,4)==="\\not"||r in ve.math&&V6.has(ve.math[r].group))&&(t="\\dotsb"),t});var rc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};g("\\dotso",function(e){var t=e.future().text;return t in rc?"\\ldots\\,":"\\ldots"});g("\\dotsc",function(e){var t=e.future().text;return t in rc&&t!==","?"\\ldots\\,":"\\ldots"});g("\\cdots",function(e){var t=e.future().text;return t in rc?"\\@cdots\\,":"\\@cdots"});g("\\dotsb","\\cdots");g("\\dotsm","\\cdots");g("\\dotsi","\\!\\cdots");g("\\dotsx","\\ldots\\,");g("\\DOTSI","\\relax");g("\\DOTSB","\\relax");g("\\DOTSX","\\relax");g("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");g("\\,","\\tmspace+{3mu}{.1667em}");g("\\thinspace","\\,");g("\\>","\\mskip{4mu}");g("\\:","\\tmspace+{4mu}{.2222em}");g("\\medspace","\\:");g("\\;","\\tmspace+{5mu}{.2777em}");g("\\thickspace","\\;");g("\\!","\\tmspace-{3mu}{.1667em}");g("\\negthinspace","\\!");g("\\negmedspace","\\tmspace-{4mu}{.2222em}");g("\\negthickspace","\\tmspace-{5mu}{.277em}");g("\\enspace","\\kern.5em ");g("\\enskip","\\hskip.5em\\relax");g("\\quad","\\hskip1em\\relax");g("\\qquad","\\hskip2em\\relax");g("\\tag","\\@ifstar\\tag@literal\\tag@paren");g("\\tag@paren","\\tag@literal{({#1})}");g("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new R("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});g("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");g("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");g("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");g("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");g("\\newline","\\\\\\relax");g("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Zm=O(Zt["Main-Regular"][84][1]-.7*Zt["Main-Regular"][65][1]);g("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Zm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");g("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Zm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");g("\\hspace","\\@ifstar\\@hspacer\\@hspace");g("\\@hspace","\\hskip #1\\relax");g("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");g("\\ordinarycolon",":");g("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");g("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');g("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');g("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');g("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');g("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');g("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');g("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');g("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');g("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');g("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');g("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');g("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');g("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');g("∷","\\dblcolon");g("∹","\\eqcolon");g("≔","\\coloneqq");g("≕","\\eqqcolon");g("⩴","\\Coloneqq");g("\\ratio","\\vcentcolon");g("\\coloncolon","\\dblcolon");g("\\colonequals","\\coloneqq");g("\\coloncolonequals","\\Coloneqq");g("\\equalscolon","\\eqqcolon");g("\\equalscoloncolon","\\Eqqcolon");g("\\colonminus","\\coloneq");g("\\coloncolonminus","\\Coloneq");g("\\minuscolon","\\eqcolon");g("\\minuscoloncolon","\\Eqcolon");g("\\coloncolonapprox","\\Colonapprox");g("\\coloncolonsim","\\Colonsim");g("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");g("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");g("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");g("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");g("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");g("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");g("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");g("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");g("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");g("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");g("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");g("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");g("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");g("\\nleqq","\\html@mathml{\\@nleqq}{≰}");g("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");g("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");g("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");g("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");g("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");g("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");g("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");g("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");g("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");g("\\imath","\\html@mathml{\\@imath}{ı}");g("\\jmath","\\html@mathml{\\@jmath}{ȷ}");g("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");g("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");g("⟦","\\llbracket");g("⟧","\\rrbracket");g("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");g("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");g("⦃","\\lBrace");g("⦄","\\rBrace");g("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");g("⦵","\\minuso");g("\\darr","\\downarrow");g("\\dArr","\\Downarrow");g("\\Darr","\\Downarrow");g("\\lang","\\langle");g("\\rang","\\rangle");g("\\uarr","\\uparrow");g("\\uArr","\\Uparrow");g("\\Uarr","\\Uparrow");g("\\N","\\mathbb{N}");g("\\R","\\mathbb{R}");g("\\Z","\\mathbb{Z}");g("\\alef","\\aleph");g("\\alefsym","\\aleph");g("\\Alpha","\\mathrm{A}");g("\\Beta","\\mathrm{B}");g("\\bull","\\bullet");g("\\Chi","\\mathrm{X}");g("\\clubs","\\clubsuit");g("\\cnums","\\mathbb{C}");g("\\Complex","\\mathbb{C}");g("\\Dagger","\\ddagger");g("\\diamonds","\\diamondsuit");g("\\empty","\\emptyset");g("\\Epsilon","\\mathrm{E}");g("\\Eta","\\mathrm{H}");g("\\exist","\\exists");g("\\harr","\\leftrightarrow");g("\\hArr","\\Leftrightarrow");g("\\Harr","\\Leftrightarrow");g("\\hearts","\\heartsuit");g("\\image","\\Im");g("\\infin","\\infty");g("\\Iota","\\mathrm{I}");g("\\isin","\\in");g("\\Kappa","\\mathrm{K}");g("\\larr","\\leftarrow");g("\\lArr","\\Leftarrow");g("\\Larr","\\Leftarrow");g("\\lrarr","\\leftrightarrow");g("\\lrArr","\\Leftrightarrow");g("\\Lrarr","\\Leftrightarrow");g("\\Mu","\\mathrm{M}");g("\\natnums","\\mathbb{N}");g("\\Nu","\\mathrm{N}");g("\\Omicron","\\mathrm{O}");g("\\plusmn","\\pm");g("\\rarr","\\rightarrow");g("\\rArr","\\Rightarrow");g("\\Rarr","\\Rightarrow");g("\\real","\\Re");g("\\reals","\\mathbb{R}");g("\\Reals","\\mathbb{R}");g("\\Rho","\\mathrm{P}");g("\\sdot","\\cdot");g("\\sect","\\S");g("\\spades","\\spadesuit");g("\\sub","\\subset");g("\\sube","\\subseteq");g("\\supe","\\supseteq");g("\\Tau","\\mathrm{T}");g("\\thetasym","\\vartheta");g("\\weierp","\\wp");g("\\Zeta","\\mathrm{Z}");g("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");g("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");g("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");g("\\bra","\\mathinner{\\langle{#1}|}");g("\\ket","\\mathinner{|{#1}\\rangle}");g("\\braket","\\mathinner{\\langle{#1}\\rangle}");g("\\Bra","\\left\\langle#1\\right|");g("\\Ket","\\left|#1\\right\\rangle");var Jm=e=>t=>{var r=t.consumeArg().tokens,n=t.consumeArg().tokens,s=t.consumeArg().tokens,l=t.consumeArg().tokens,i=t.macros.get("|"),o=t.macros.get("\\|");t.macros.beginGroup();var u=f=>m=>{e&&(m.macros.set("|",i),s.length&&m.macros.set("\\|",o));var x=f;if(!f&&s.length){var A=m.future();A.text==="|"&&(m.popToken(),x=!0)}return{tokens:x?s:n,numArgs:0}};t.macros.set("|",u(!1)),s.length&&t.macros.set("\\|",u(!0));var p=t.consumeArg().tokens,h=t.expandTokens([...l,...p,...r]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};g("\\bra@ket",Jm(!1));g("\\bra@set",Jm(!0));g("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");g("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");g("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");g("\\angln","{\\angl n}");g("\\blue","\\textcolor{##6495ed}{#1}");g("\\orange","\\textcolor{##ffa500}{#1}");g("\\pink","\\textcolor{##ff00af}{#1}");g("\\red","\\textcolor{##df0030}{#1}");g("\\green","\\textcolor{##28ae7b}{#1}");g("\\gray","\\textcolor{gray}{#1}");g("\\purple","\\textcolor{##9d38bd}{#1}");g("\\blueA","\\textcolor{##ccfaff}{#1}");g("\\blueB","\\textcolor{##80f6ff}{#1}");g("\\blueC","\\textcolor{##63d9ea}{#1}");g("\\blueD","\\textcolor{##11accd}{#1}");g("\\blueE","\\textcolor{##0c7f99}{#1}");g("\\tealA","\\textcolor{##94fff5}{#1}");g("\\tealB","\\textcolor{##26edd5}{#1}");g("\\tealC","\\textcolor{##01d1c1}{#1}");g("\\tealD","\\textcolor{##01a995}{#1}");g("\\tealE","\\textcolor{##208170}{#1}");g("\\greenA","\\textcolor{##b6ffb0}{#1}");g("\\greenB","\\textcolor{##8af281}{#1}");g("\\greenC","\\textcolor{##74cf70}{#1}");g("\\greenD","\\textcolor{##1fab54}{#1}");g("\\greenE","\\textcolor{##0d923f}{#1}");g("\\goldA","\\textcolor{##ffd0a9}{#1}");g("\\goldB","\\textcolor{##ffbb71}{#1}");g("\\goldC","\\textcolor{##ff9c39}{#1}");g("\\goldD","\\textcolor{##e07d10}{#1}");g("\\goldE","\\textcolor{##a75a05}{#1}");g("\\redA","\\textcolor{##fca9a9}{#1}");g("\\redB","\\textcolor{##ff8482}{#1}");g("\\redC","\\textcolor{##f9685d}{#1}");g("\\redD","\\textcolor{##e84d39}{#1}");g("\\redE","\\textcolor{##bc2612}{#1}");g("\\maroonA","\\textcolor{##ffbde0}{#1}");g("\\maroonB","\\textcolor{##ff92c6}{#1}");g("\\maroonC","\\textcolor{##ed5fa6}{#1}");g("\\maroonD","\\textcolor{##ca337c}{#1}");g("\\maroonE","\\textcolor{##9e034e}{#1}");g("\\purpleA","\\textcolor{##ddd7ff}{#1}");g("\\purpleB","\\textcolor{##c6b9fc}{#1}");g("\\purpleC","\\textcolor{##aa87ff}{#1}");g("\\purpleD","\\textcolor{##7854ab}{#1}");g("\\purpleE","\\textcolor{##543b78}{#1}");g("\\mintA","\\textcolor{##f5f9e8}{#1}");g("\\mintB","\\textcolor{##edf2df}{#1}");g("\\mintC","\\textcolor{##e0e5cc}{#1}");g("\\grayA","\\textcolor{##f6f7f7}{#1}");g("\\grayB","\\textcolor{##f0f1f2}{#1}");g("\\grayC","\\textcolor{##e3e5e6}{#1}");g("\\grayD","\\textcolor{##d6d8da}{#1}");g("\\grayE","\\textcolor{##babec2}{#1}");g("\\grayF","\\textcolor{##888d93}{#1}");g("\\grayG","\\textcolor{##626569}{#1}");g("\\grayH","\\textcolor{##3b3e40}{#1}");g("\\grayI","\\textcolor{##21242c}{#1}");g("\\kaBlue","\\textcolor{##314453}{#1}");g("\\kaGreen","\\textcolor{##71B307}{#1}");var e4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class G6{constructor(t,r,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new U6(W6,r.macros),this.mode=n,this.stack=[]}feed(t){this.lexer=new hd(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,n,s;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:n}=this.consumeArg(["]"])}else({tokens:s,start:r,end:n}=this.consumeArg());return this.pushToken(new $t("EOF",n.loc)),this.pushTokens(s),new $t("",ot.range(r,n))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],n=t&&t.length>0;n||this.consumeSpaces();var s=this.future(),l,i=0,o=0;do{if(l=this.popToken(),r.push(l),l.text==="{")++i;else if(l.text==="}"){if(--i,i===-1)throw new R("Extra }",l)}else if(l.text==="EOF")throw new R("Unexpected end of input in a macro argument, expected '"+(t&&n?t[o]:"}")+"'",l);if(t&&n)if((i===0||i===1&&t[o]==="{")&&l.text===t[o]){if(++o,o===t.length){r.splice(-o,o);break}}else o=0}while(i!==0||n);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:l}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new R("The length of delimiters doesn't match the number of args!");for(var n=r[0],s=0;s<n.length;s++){var l=this.popToken();if(n[s]!==l.text)throw new R("Use of the macro doesn't match its definition",l)}}for(var i=[],o=0;o<t;o++)i.push(this.consumeArg(r&&r[o+1]).tokens);return i}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new R("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),n=r.text,s=r.noexpand?null:this._getExpansion(n);if(s==null||t&&s.unexpandable){if(t&&s==null&&n[0]==="\\"&&!this.isDefined(n))throw new R("Undefined control sequence: "+n);return this.pushToken(r),!1}this.countExpansion(1);var l=s.tokens,i=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){l=l.slice();for(var o=l.length-1;o>=0;--o){var u=l[o];if(u.text==="#"){if(o===0)throw new R("Incomplete placeholder at end of macro body",u);if(u=l[--o],u.text==="#")l.splice(o+1,1);else if(/^[1-9]$/.test(u.text))l.splice(o,2,...i[+u.text-1]);else throw new R("Not a valid argument number",u)}}}return this.pushTokens(l),l.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}}expandMacro(t){return this.macros.has(t)?this.expandTokens([new $t(t)]):void 0}expandTokens(t){var r=[],n=this.stack.length;for(this.pushTokens(t);this.stack.length>n;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(n=>n.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var n=this.lexer.catcodes[t];if(n!=null&&n!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var l=0;if(s.includes("#"))for(var i=s.replace(/##/g,"");i.includes("#"+(l+1));)++l;for(var o=new hd(s,this.settings),u=[],p=o.lex();p.text!=="EOF";)u.push(p),p=o.lex();u.reverse();var h={tokens:u,numArgs:l};return h}return s}isDefined(t){return this.macros.has(t)||Lr.hasOwnProperty(t)||ve.math.hasOwnProperty(t)||ve.text.hasOwnProperty(t)||e4.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Lr.hasOwnProperty(t)&&!Lr[t].primitive}}var vd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Zl=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Sa={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},gd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Bi{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new G6(t,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new R("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new $t("}")),this.gullet.pushTokens(t);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,n}parseExpression(t,r){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(Bi.endOfExpression.has(s.text)||r&&s.text===r||t&&Lr[s.text]&&Lr[s.text].infix)break;var l=this.parseAtom(r);if(l){if(l.type==="internal")continue}else break;n.push(l)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(t){for(var r=-1,n,s=0;s<t.length;s++){var l=t[s];if(l.type==="infix"){if(r!==-1)throw new R("only one infix operator per group",l.token);r=s,n=l.replaceWith}}if(r!==-1&&n){var i,o,u=t.slice(0,r),p=t.slice(r+1);u.length===1&&u[0].type==="ordgroup"?i=u[0]:i={type:"ordgroup",mode:this.mode,body:u},p.length===1&&p[0].type==="ordgroup"?o=p[0]:o={type:"ordgroup",mode:this.mode,body:p};var h;return n==="\\\\abovefrac"?h=this.callFunction(n,[i,t[r],o],[]):h=this.callFunction(n,[i,o],[]),[h]}else return t}handleSupSubscript(t){var r=this.fetch(),n=r.text;this.consume(),this.consumeSpaces();var s;do{var l;s=this.parseGroup(t)}while(((l=s)==null?void 0:l.type)==="internal");if(!s)throw new R("Expected group after '"+n+"'",r);return s}formatUnsupportedCmd(t){for(var r=[],n=0;n<t.length;n++)r.push({type:"textord",mode:"text",text:t[n]});var s={type:"text",mode:this.mode,body:r},l={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return l}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var n,s;;){this.consumeSpaces();var l=this.fetch();if(l.text==="\\limits"||l.text==="\\nolimits"){if(r&&r.type==="op"){var i=l.text==="\\limits";r.limits=i,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=l.text==="\\limits");else throw new R("Limit controls must follow a math operator",l);this.consume()}else if(l.text==="^"){if(n)throw new R("Double superscript",l);n=this.handleSupSubscript("superscript")}else if(l.text==="_"){if(s)throw new R("Double subscript",l);s=this.handleSupSubscript("subscript")}else if(l.text==="'"){if(n)throw new R("Double superscript",l);var o={type:"textord",mode:this.mode,text:"\\prime"},u=[o];for(this.consume();this.fetch().text==="'";)u.push(o),this.consume();this.fetch().text==="^"&&u.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:u}}else if(Zl[l.text]){var p=vd.test(l.text),h=[];for(h.push(new $t(Zl[l.text])),this.consume();;){var f=this.fetch().text;if(!Zl[f]||vd.test(f)!==p)break;h.unshift(new $t(Zl[f])),this.consume()}var m=this.subparse(h);p?s={type:"ordgroup",mode:"math",body:m}:n={type:"ordgroup",mode:"math",body:m}}else break}return n||s?{type:"supsub",mode:this.mode,base:r,sup:n,sub:s}:r}parseFunction(t,r){var n=this.fetch(),s=n.text,l=Lr[s];if(!l)return null;if(this.consume(),r&&r!=="atom"&&!l.allowedInArgument)throw new R("Got function '"+s+"' with no arguments"+(r?" as "+r:""),n);if(this.mode==="text"&&!l.allowedInText)throw new R("Can't use function '"+s+"' in text mode",n);if(this.mode==="math"&&l.allowedInMath===!1)throw new R("Can't use function '"+s+"' in math mode",n);var{args:i,optArgs:o}=this.parseArguments(s,l);return this.callFunction(s,i,o,n,t)}callFunction(t,r,n,s,l){var i={funcName:t,parser:this,token:s,breakOnTokenText:l},o=Lr[t];if(o&&o.handler)return o.handler(i,r,n);throw new R("No function handler for "+t)}parseArguments(t,r){var n=r.numArgs+r.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var s=[],l=[],i=0;i<n;i++){var o=r.argTypes&&r.argTypes[i],u=i<r.numOptionalArgs;("primitive"in r&&r.primitive&&o==null||r.type==="sqrt"&&i===1&&l[0]==null)&&(o="primitive");var p=this.parseGroupOfType("argument to '"+t+"'",o,u);if(u)l.push(p);else if(p!=null)s.push(p);else throw new R("Null argument, please report this as a bug")}return{args:s,optArgs:l}}parseGroupOfType(t,r,n){switch(r){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,r);case"hbox":{var s=this.parseArgumentGroup(n,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text",resetFont:!0}:null}case"raw":{var l=this.parseStringGroup("raw",n);return l!=null?{type:"raw",mode:"text",string:l.text}:null}case"primitive":{if(n)throw new R("A primitive argument cannot be optional");var i=this.parseGroup(t);if(i==null)throw new R("Expected group as "+t,this.fetch());return i}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new R("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var n=this.gullet.scanArgument(r);if(n==null)return null;for(var s="",l;(l=this.fetch()).text!=="EOF";)s+=l.text,this.consume();return this.consume(),n.text=s,n}parseRegexGroup(t,r){for(var n=this.fetch(),s=n,l="",i;(i=this.fetch()).text!=="EOF"&&t.test(l+i.text);)s=i,l+=s.text,this.consume();if(l==="")throw new R("Invalid "+r+": '"+n.text+"'",n);return n.range(s,l)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!n)throw new R("Invalid color: '"+r.text+"'",r);var s=n[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(t){var r,n=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",n=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new R("Invalid size: '"+r.text+"'",r);var l={number:+(s[1]+s[2]),unit:s[3]};if(!om(l))throw new R("Invalid unit: '"+l.unit+"'",r);return{type:"size",mode:this.mode,value:l,isBlank:n}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var n=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(t,r){var n=this.gullet.scanArgument(t);if(n==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var l=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var i={type:"ordgroup",mode:this.mode,loc:n.loc,body:l};return r&&this.switchMode(s),i}parseGroup(t,r){var n=this.fetch(),s=n.text,l;if(s==="{"||s==="\\begingroup"){this.consume();var i=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,i),u=this.fetch();this.expect(i),this.gullet.endGroup(),l={type:"ordgroup",mode:this.mode,loc:ot.range(n,u),body:o,semisimple:s==="\\begingroup"||void 0}}else if(l=this.parseFunction(r,t)||this.parseSymbol(),l==null&&s[0]==="\\"&&!e4.hasOwnProperty(s)){if(this.settings.throwOnError)throw new R("Undefined control sequence: "+s,n);l=this.formatUnsupportedCmd(s),this.consume()}return l}formLigatures(t){for(var r=t.length-1,n=0;n<r;++n){var s=t[n];if(s.type==="textord"){var l=s.text,i=t[n+1];if(!(!i||i.type!=="textord")){if(l==="-"&&i.text==="-"){var o=t[n+2];n+1<r&&o&&o.type==="textord"&&o.text==="-"?(t.splice(n,3,{type:"textord",mode:"text",loc:ot.range(s,o),text:"---"}),r-=2):(t.splice(n,2,{type:"textord",mode:"text",loc:ot.range(s,i),text:"--"}),r-=1)}(l==="'"||l==="`")&&i.text===l&&(t.splice(n,2,{type:"textord",mode:"text",loc:ot.range(s,i),text:l+l}),r-=1)}}}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var n=r.slice(5),s=n.charAt(0)==="*";if(s&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new R(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:s}}gd.hasOwnProperty(r[0])&&!ve[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=gd[r[0]]+r.slice(1));var l=_6.exec(r);l&&(r=r.substring(0,l.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var i;if(ve[this.mode][r]){this.settings.strict&&this.mode==="math"&&Bo.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var o=ve[this.mode][r].group,u=ot.range(t),p;c6(o)?p={type:"atom",mode:this.mode,family:o,loc:u,text:r}:p={type:o,mode:this.mode,loc:u,text:r},i=p}else if(r.charCodeAt(0)>=128)this.settings.strict&&(am(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),i={type:"textord",mode:"text",loc:ot.range(t),text:r};else return null;if(this.consume(),l)for(var h=0;h<l[0].length;h++){var f=l[0][h];if(!Sa[f])throw new R("Unknown accent ' "+f+"'",t);var m=Sa[f][this.mode]||Sa[f].text;if(!m)throw new R("Accent "+f+" unsupported in "+this.mode+" mode",t);i={type:"accent",mode:this.mode,loc:ot.range(t),label:m,isStretchy:!1,isShifty:!0,base:i}}return i}}Bi.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var nc=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Bi(t,r);delete n.gullet.macros.current["\\df@tag"];var s=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new R("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:n.subparse([new $t("\\df@tag")])}]}return s},t4=function(t,r,n){r.textContent="";var s=sc(t,n).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),t4=function(){throw new R("KaTeX doesn't work in quirks mode.")});var X6=function(t,r){var n=sc(t,r).toMarkup();return n},Y6=function(t,r){var n=new _u(r);return nc(t,n)},r4=function(t,r,n){if(n.throwOnError||!(t instanceof R))throw t;var s=T(["katex-error"],[new St(r)]);return s.setAttribute("title",t.toString()),s.setAttribute("style","color:"+n.errorColor),s},sc=function(t,r){var n=new _u(r);try{var s=nc(t,n);return r6(s,t,n)}catch(l){return r4(l,t,n)}},K6=function(t,r){var n=new _u(r);try{var s=nc(t,n);return n6(s,t,n)}catch(l){return r4(l,t,n)}},Z6="0.16.47",J6={Span:ys,Anchor:yi,SymbolNode:St,SvgNode:$r,PathNode:Zr,LineNode:Eo},e7={version:Z6,render:t4,renderToString:X6,ParseError:R,SETTINGS_SCHEMA:jo,__parse:Y6,__renderToDomTree:sc,__renderToHTMLTree:K6,__setFontMetrics:I5,__defineSymbol:c,__defineFunction:L,__defineMacro:g,__domTree:J6};function xn({tex:e,display:t=!1}){const r=B.useMemo(()=>{try{return e7.renderToString(e,{displayMode:t,throwOnError:!1,strict:!1,output:"html"})}catch{return e}},[e,t]);return a.jsx("span",{className:t?"math-display":"math-inline",dangerouslySetInnerHTML:{__html:r}})}const xd=/（[A-Za-z][A-Za-z0-9 ,.'’\-]{0,24}）/g;function t7(e,t){const r=[];let n=0,s,l=0;for(xd.lastIndex=0;s=xd.exec(e);)s.index>n&&r.push(e.slice(n,s.index)),r.push(a.jsx("span",{className:"nw",children:s[0]},`${t}-nw${l++}`)),n=s.index+s[0].length;return n<e.length&&r.push(e.slice(n)),r}function qr(e,t="i"){const r=[];let n=e,s=0;const l=i=>{i&&r.push(...t7(i,`${t}-t${s++}`))};for(;n.length;){const i=n.match(/\$([^$]+)\$|\*\*([^*]+)\*\*|`([^`]+)`/);if(!i||i.index===void 0){l(n);break}l(n.slice(0,i.index)),i[1]!==void 0?r.push(a.jsx(xn,{tex:i[1]},`${t}-m${s++}`)):i[2]!==void 0?r.push(a.jsx("strong",{children:i[2]},`${t}-b${s++}`)):i[3]!==void 0&&r.push(a.jsx("code",{children:i[3]},`${t}-c${s++}`)),n=n.slice(i.index+i[0].length)}return r}function r7(e){const t=e.replace(/\r/g,"").split(`
`),r=[];let n=0;for(;n<t.length;){const s=t[n];if(!s.trim()){n++;continue}if(s.trim().startsWith("```")){const i=[];for(n++;n<t.length&&!t[n].trim().startsWith("```");)i.push(t[n]),n++;n++,r.push({t:"formula",tex:i.join(`
`)});continue}if(s.trim().startsWith("$$")){const i=[];let o=s.trim().slice(2);if(o.endsWith("$$")&&o.length>2){r.push({t:"formula",tex:o.slice(0,-2)}),n++;continue}for(o&&i.push(o),n++;n<t.length&&!t[n].includes("$$");)i.push(t[n]),n++;if(n<t.length){const u=t[n].split("$$")[0];u&&i.push(u),n++}r.push({t:"formula",tex:i.join(`
`)});continue}if(/^\|.*\|$/.test(s.trim())){const i=[];for(;n<t.length&&/^\|.*\|$/.test(t[n].trim());){const o=t[n].trim().slice(1,-1).split("|").map(u=>u.trim());o.every(u=>/^:?-{2,}:?$/.test(u))||i.push(o),n++}i.length&&r.push({t:"table",head:i[0],rows:i.slice(1)});continue}if(/^#{2,4}\s/.test(s)){const i=s.match(/^#+/)[0].length<=3?3:4;r.push({t:"h",level:i,text:s.replace(/^#+\s*/,"")}),n++;continue}if(/^\s*([-*])\s+/.test(s)||/^\s*\d+[.、]\s+/.test(s)){const i=/^\s*\d+[.、]\s+/.test(s),o=[];for(;n<t.length&&(/^\s*([-*])\s+/.test(t[n])||/^\s*\d+[.、]\s+/.test(t[n]));){let u=t[n].replace(/^\s*([-*]|\d+[.、])\s+/,"");for(n++;n<t.length&&t[n].startsWith("   ")&&!/^\s*([-*]|\d+[.、])\s+/.test(t[n]);)u+=" "+t[n].trim(),n++;o.push(u)}r.push({t:i?"ol":"ul",items:o});continue}if(s.trim().startsWith(">")){const i=[];for(;n<t.length&&t[n].trim().startsWith(">");)i.push(t[n].trim().replace(/^>\s?/,"")),n++;r.push({t:"quote",text:i.join(" ")});continue}if(/^-{3,}$/.test(s.trim())){r.push({t:"hr"}),n++;continue}const l=[];for(;n<t.length&&t[n].trim()&&!/^(#{2,4}\s|```|\$\$|\||>|-\s|\*\s|\d+[.、]\s)/.test(t[n].trim());)l.push(t[n].trim()),n++;l.length?r.push({t:"p",text:l.join(" ")}):n++}return r}function tn({text:e}){return a.jsx(a.Fragment,{children:qr(e)})}function lc({text:e}){const t=B.useMemo(()=>r7(e),[e]);return a.jsx("div",{className:"prose",children:t.map((r,n)=>{switch(r.t){case"h":return r.level===3?a.jsx("h3",{children:qr(r.text,`h${n}`)},n):a.jsx("h4",{children:qr(r.text,`h${n}`)},n);case"p":return a.jsx("p",{children:qr(r.text,`p${n}`)},n);case"ul":case"ol":{const s=r.t;return a.jsx(s,{children:r.items.map((l,i)=>a.jsx("li",{children:qr(l,`l${n}-${i}`)},i))},n)}case"quote":return a.jsx("blockquote",{children:qr(r.text,`q${n}`)},n);case"formula":return a.jsx("div",{className:"formula-block",children:a.jsx(xn,{tex:r.tex.trim(),display:!0})},n);case"table":return a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data",children:[a.jsx("thead",{children:a.jsx("tr",{children:r.head.map((s,l)=>a.jsx("th",{children:qr(s,`th${n}-${l}`)},l))})}),a.jsx("tbody",{children:r.rows.map((s,l)=>a.jsx("tr",{children:s.map((i,o)=>a.jsx("td",{children:qr(i,`td${n}-${l}-${o}`)},o))},l))})]})},n);case"hr":return a.jsx("hr",{},n)}})})}const n7=()=>Math.floor(Date.now()/864e5);function s7(e){return e<60?String(e):e<3600?String(Math.round(e/60)):(e/3600).toFixed(1).replace(".0","")}function l7(e){return e<60?"秒":e<3600?"分":"小时"}function yd(){const e=gs(),t=tr(),r=yt.filter(E=>{var z;return(z=e.lessons[E.id])==null?void 0:z.done}),n=Ws?Math.round(r.length/Ws*100):0,s=mr.find(E=>E.lessons.some(z=>{var N;return!((N=e.lessons[z.id])!=null&&N.done)}))??mr[mr.length-1],l=yt.find(E=>{var z;return!((z=e.lessons[E.id])!=null&&z.done)})??yt[0],i=sm(e),o=lm(e),u=new Set(r.flatMap(E=>E.concepts)).size,p=Object.values(e.mistakes).filter(E=>!E.mastered).length,h=n7(),f=z1[h%z1.length],m=Kt.length?Kt[h%Kt.length]:null,x=U0[h%U0.length],A=W0[h%W0.length],w=e.dailyDone[Vn()]??[],j=e.challenges[f.id]??"",[$,y]=B.useState(j),[b,q]=B.useState(!!j),C=B.useMemo(()=>[{id:"point",label:"核心知识点",value:`第 ${l.no} 课 · ${l.title}`,min:l.minutes,to:`/lesson/${l.id}`},{id:"case",label:"逻辑案例",value:m?`${m.domain} · ${m.title}`:"案例库",min:6,to:m?`/cases/${m.id}`:"/cases"},{id:"drill",label:"推理题",value:x.stem.replace(/\$/g,""),min:5,to:"/daily"},{id:"think",label:"思维训练",value:A.title,min:12,to:"/daily"}],[l,m,x,A]);return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("span",{className:"eyebrow",children:"Study Record"}),a.jsx("h1",{style:{marginBottom:6},children:"思维训练中心"}),a.jsxs("p",{className:"lede",style:{fontSize:13.5,marginBottom:0},children:[new Date().toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",weekday:"long"})," · ","学习进度档案"]})]}),a.jsxs("div",{className:"stat-grid",style:{marginTop:22},children:[a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[n,a.jsx("small",{children:"%"})]}),a.jsx("em",{children:"总完成率"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[i,a.jsx("small",{children:"天"})]}),a.jsx("em",{children:"连续学习"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[s7(o),a.jsx("small",{children:l7(o)})]}),a.jsx("em",{children:"累计学习"})]})]}),a.jsxs("div",{className:"stat-grid",style:{borderTop:"none"},children:[a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[u,a.jsx("small",{children:"个"})]}),a.jsx("em",{children:"已掌握知识点"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[p,a.jsx("small",{children:"个"})]}),a.jsx("em",{children:"待复习"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[r.length,a.jsxs("small",{children:["/",Ws]})]}),a.jsx("em",{children:"已完成课程"})]})]}),a.jsxs("div",{style:{marginTop:20},children:[a.jsxs("div",{className:"row between",style:{marginBottom:8},children:[a.jsxs("span",{style:{fontSize:12,letterSpacing:".1em",color:"var(--graphite-2)"},children:["当前阶段 · 第",s.id,"阶段 ",s.title]}),a.jsx("span",{className:"mono",style:{color:"var(--graphite-2)"},children:s.chapters})]}),a.jsx("div",{className:"bar",children:a.jsx("i",{style:{width:`${n}%`}})}),a.jsx("div",{className:"row between",style:{marginTop:8},children:a.jsx("span",{style:{fontSize:11.5,color:"var(--graphite-2)"},children:s.summary})})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"今日任务"}),a.jsx("i",{})]}),a.jsxs("p",{style:{fontSize:12.5,color:"var(--graphite-2)",marginTop:-6},children:["四项合计约 ",C.reduce((E,z)=>E+z.min,0)," 分钟 · 已完成 ",w.filter(E=>E!=="challenge").length," / 4"]}),a.jsx("div",{style:{borderTop:"1px solid var(--rule)"},children:C.map((E,z)=>{const N=w.includes(E.id);return a.jsxs("button",{className:"lesson-row",onClick:()=>{Ye.markDaily(E.id),t(E.to)},children:[a.jsx("div",{className:`tick ${N?"done":z===0?"doing":""}`,children:N?"✓":""}),a.jsxs("div",{className:"lesson-main",children:[a.jsx("div",{className:"lesson-title",style:{fontSize:14.5},children:E.label}),a.jsx("div",{className:"lesson-sub",style:{whiteSpace:"normal"},children:E.value})]}),a.jsxs("div",{className:"mono",style:{color:"var(--graphite-2)",fontSize:10.5,paddingTop:4},children:[E.min,"′"]})]},E.id)})}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"每日逻辑挑战"}),a.jsx("i",{})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"mono",style:{color:"var(--accent)",fontSize:10.5,letterSpacing:".16em",marginBottom:10},children:["QUESTION OF THE DAY · ",f.tag]}),a.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:18,lineHeight:1.6,marginBottom:14},children:f.question}),b?a.jsxs("div",{className:"fade-in",children:[j||$?a.jsxs("div",{className:"note",style:{marginBottom:14},children:[a.jsx("span",{className:"note-h",children:"你的作答"}),j||$]}):null,a.jsx("span",{className:"note-h",style:{display:"block",fontSize:10.5,letterSpacing:".2em",color:"var(--accent)",marginBottom:6},children:"分析"}),a.jsx("div",{style:{fontSize:14.5},children:a.jsx(lc,{text:f.analysis})}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:12},onClick:()=>q(!1),children:"收起"})]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{style:{fontSize:12.5,color:"var(--graphite-2)",marginBottom:8},children:f.hint}),a.jsx("textarea",{className:"input",rows:3,placeholder:"先自己写下判断，再看分析……",value:$,onChange:E=>y(E.target.value)}),a.jsxs("div",{className:"row",style:{marginTop:10},children:[a.jsx("button",{className:"btn sm",onClick:()=>{Ye.saveChallenge(f.id,$),q(!0),Ye.markDaily("challenge")},children:"提交并查看分析"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>q(!0),children:"直接看分析"})]})]})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"继续深入"}),a.jsx("i",{})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[{t:"逻辑实验室",s:"真值表 · 三段论 · 证明",to:"/lab"},{t:"论证案例库",s:`${Kt.length} 个现实论述拆解`,to:"/cases"},{t:"知识图谱",s:"概念之间的依赖关系",to:"/graph"},{t:"谬误图鉴",s:"18 种谬误的识别与反驳",to:"/fallacies"}].map(E=>a.jsxs("button",{className:"panel flat",style:{textAlign:"left",padding:15},onClick:()=>t(E.to),children:[a.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:15,marginBottom:4},children:E.t}),a.jsx("div",{style:{fontSize:11,color:"var(--graphite-2)",letterSpacing:".02em"},children:E.s})]},E.to))}),a.jsxs("div",{className:"note",style:{marginTop:28,fontSize:12.5},children:[a.jsx("span",{className:"note-h",children:"关于本课程"}),Bt.note]})]})}function i7(){var i;const e=gs(),t=tr(),r=((i=mr.find(o=>o.lessons.some(u=>{var p;return!((p=e.lessons[u.id])!=null&&p.done)})))==null?void 0:i.id)??1,[n,s]=B.useState(r),l=o=>o.filter(u=>{var p;return(p=e.lessons[u])==null?void 0:p.done}).length;return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("span",{className:"eyebrow",children:"Curriculum"}),a.jsx("h1",{children:"课程体系"}),a.jsxs("p",{className:"lede",children:["六个阶段，",Ws," 课，按《",Bt.title,"》",Bt.edition,"的三篇十四章逐节展开。 每课含导入、定义、理论、例题、反例、应用与五道习题。"]})]}),a.jsxs("div",{className:"note",style:{margin:"18px 0 26px"},children:[a.jsx("span",{className:"note-h",children:"关于顺序"}),"教材本身把三段论（第 5–7 章）放在命题逻辑（第 8–9 章）之前。本课程按「先学会看论证，再学符号工具」的思路，把命题逻辑放在阶段三， 三段论与谓词逻辑合为阶段四。若你想严格按原书顺序，可以先学阶段四的前十课，再回到阶段三。"]}),mr.map(o=>{const u=l(o.lessons.map(f=>f.id)),p=o.lessons.length?Math.round(u/o.lessons.length*100):0,h=n===o.id;return a.jsxs("section",{style:{marginBottom:6},children:[a.jsxs("button",{onClick:()=>s(h?-1:o.id),style:{width:"100%",textAlign:"left",padding:"18px 0 14px",borderTop:"1px solid var(--ink)"},children:[a.jsxs("div",{className:"row between",style:{alignItems:"baseline"},children:[a.jsxs("span",{className:"eyebrow",style:{marginBottom:0},children:["Stage ",String(o.id).padStart(2,"0")]}),a.jsxs("span",{className:"mono",style:{color:"var(--graphite-2)",fontSize:10.5},children:[o.chapters," · ",u,"/",o.lessons.length]})]}),a.jsxs("div",{className:"row between",style:{alignItems:"center",marginTop:6},children:[a.jsx("h2",{style:{margin:0,fontSize:22},children:o.title}),a.jsx("span",{style:{color:"var(--graphite-2)",fontSize:12},children:h?"收起":"展开"})]}),a.jsx("div",{style:{fontSize:11,letterSpacing:".14em",color:"var(--graphite-2)",textTransform:"uppercase",marginTop:2},children:o.en}),a.jsx("div",{className:"bar",style:{marginTop:12},children:a.jsx("i",{style:{width:`${p}%`}})})]}),h&&a.jsxs("div",{className:"fade-in",children:[a.jsx("p",{style:{fontSize:13,color:"var(--graphite)",lineHeight:1.75,margin:"0 0 8px"},children:o.summary}),o.lessons.map(f=>{const m=e.lessons[f.id],x=m==null?void 0:m.done;return a.jsxs("button",{className:"lesson-row",onClick:()=>t(`/lesson/${f.id}`),children:[a.jsx("div",{className:"lesson-no",children:f.code}),a.jsxs("div",{className:"lesson-main",children:[a.jsx("div",{className:"lesson-title",children:f.title}),a.jsxs("div",{className:"lesson-sub",children:[f.chapter," · ",f.quiz.length," 题 · ",f.minutes," 分钟"]})]}),a.jsx("div",{className:`tick ${x?"done":m?"doing":""}`,children:x?"✓":""})]},f.id)}),a.jsx("div",{style:{height:10}})]})]},o.id)}),a.jsx("div",{className:"divider-dotted"}),a.jsxs("p",{style:{fontSize:12,color:"var(--graphite-2)",lineHeight:1.9},children:[Bt.title,"（",Bt.edition,"），",Bt.authors,"，",Bt.publisher,"。 课程讲解为独立撰写，公式与规则依据通行逻辑学教材体系，未引用原书页码与原文。"]})]})}const $d=e=>e.toLowerCase().replace(/[\s，。、；：！？,.!?;:'"“”‘’（）()【】\[\]]/g,"").replace(/[０-９ａ-ｚＡ-Ｚ]/g,t=>String.fromCharCode(t.charCodeAt(0)-65248));function a7(e,t){if(t===void 0||t===""||Array.isArray(t)&&t.length===0)return{correct:!1,detail:"未作答"};if(e.type==="short"){const n=$d(String(t)),s=e.keywords??[];if(!s.length)return{correct:n.length>=12,detail:"已记录你的作答，简答题以自评与要点对照为主。"};const l=[],i=[];return s.forEach(u=>{u.some(h=>n.includes($d(h)))?l.push(u[0]):i.push(u[0])}),{correct:l.length/s.length>=.7,detail:`要点覆盖 ${l.length} / ${s.length}`,hit:l,miss:i}}if(e.type==="judge"){const n=!!t==!!e.answer;return{correct:n,detail:n?"判断正确":"判断有误"}}if(e.type==="multi"){const n=Array.isArray(e.answer)?[...e.answer].sort().join(""):String(e.answer),s=Array.isArray(t)?[...t].sort().join(""):String(t);return{correct:n===s,detail:n===s?"选项完全正确":"选项组合有误"}}const r=String(t).trim().toUpperCase()===String(e.answer).trim().toUpperCase();return{correct:r,detail:r?"选择正确":"选择有误"}}const o7={single:"单选",multi:"多选",judge:"判断",short:"简答"},u7=["A","B","C","D","E","F"];function n4({q:e,index:t,lessonId:r,defaultReveal:n=!1,onAnswered:s}){var $;const[l,i]=B.useState(void 0),[o,u]=B.useState(!1),[p,h]=B.useState(null),f=e.options??[],m=Array.isArray(e.answer)?e.answer:e.type==="single"?[String(e.answer)]:[],x=()=>{const y=l,b=a7(e,y);h(b),u(!0),Ye.recordAnswer(r,e.id,b.correct,Array.isArray(y)?y.join(","):String(y??"")),s==null||s(b.correct)},A=()=>{i(void 0),u(!1),h(null)},w=o||n,j=()=>{if(e.type==="judge")return e.answer?"正确":"错误";if(e.type==="short")return String(e.answer??"（见解析）");const y=m.map(b=>f[b.charCodeAt(0)-65]).filter(Boolean);return y.length?`${m.join("、")}　${y.join("；")}`:m.join("、")};return a.jsxs("div",{className:"q-item",children:[a.jsxs("div",{className:"q-head",children:[a.jsx("div",{className:"q-num",children:String(t+1).padStart(2,"0")}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{className:"q-stem",children:a.jsx(tn,{text:e.stem})}),a.jsxs("div",{className:"mono",style:{color:"var(--graphite-2)",fontSize:10.5,marginTop:6,letterSpacing:".1em"},children:[o7[e.type],e.skill?` · ${e.skill}`:""]})]})]}),(e.type==="single"||e.type==="multi")&&a.jsx("div",{children:f.map((y,b)=>{const q=u7[b],C=e.type==="single"?l===q:Array.isArray(l)&&l.includes(q),E=m.includes(q),z=w?E?"opt right":C?"opt wrong":"opt":C?"opt picked":"opt";return a.jsxs("button",{className:z,onClick:()=>{if(!w)if(e.type==="single")i(q);else{const N=Array.isArray(l)?l:[];i(C?N.filter(Q=>Q!==q):[...N,q])}},children:[a.jsx("span",{className:"k",children:q}),a.jsx("span",{children:a.jsx(tn,{text:y})})]},q)})}),e.type==="judge"&&a.jsx("div",{style:{display:"flex",gap:8},children:[!0,!1].map(y=>{const b=l===y,q=!!e.answer===y,C=w?q?"opt right":b?"opt wrong":"opt":b?"opt picked":"opt";return a.jsx("button",{className:C,style:{flex:1,justifyContent:"center"},onClick:()=>!w&&i(y),children:a.jsx("span",{style:{textAlign:"center",width:"100%"},children:y?"正确":"错误"})},String(y))})}),e.type==="short"&&a.jsx("textarea",{className:"input",placeholder:"用自己的话写下答案，尽量包含关键要点……",value:typeof l=="string"?l:"",onChange:y=>i(y.target.value),disabled:w,rows:4}),!w&&a.jsx("button",{className:"btn sm",style:{marginTop:10},onClick:x,disabled:l===void 0||Array.isArray(l)&&l.length===0||l==="",children:"提交作答"}),w&&a.jsxs("div",{className:"answer-box",children:[p?a.jsxs("span",{className:`verdict ${p.correct?"ok":"bad"}`,children:[p.correct?"✓ 正确":"✗ 未通过"," · ",p.detail]}):a.jsx("span",{className:"verdict",children:"参考答案"}),a.jsxs("div",{style:{marginBottom:8},children:[a.jsx("b",{children:"答案："}),j()]}),($=p==null?void 0:p.miss)!=null&&$.length?a.jsxs("div",{style:{marginBottom:8,color:"var(--bad)"},children:[a.jsx("b",{children:"未覆盖的要点："}),p.miss.join("、")]}):null,a.jsxs("div",{style:{borderTop:"1px dashed var(--rule)",paddingTop:9,marginTop:9},children:[a.jsx("b",{children:"解析："}),a.jsx(lc,{text:e.explanation})]}),o&&a.jsx("button",{className:"btn ghost sm",style:{marginTop:12},onClick:A,children:"再做一次"})]})]})}function c7(){const{id:e}=Zh(),t=tr(),r=gs(),n=e?hl(e):void 0,[s,l]=B.useState(""),[i,o]=B.useState(!1);if(B.useEffect(()=>{n&&(Ye.visitLesson(n.id),l(r.notes[n.id]??""),o(!1))},[n==null?void 0:n.id]),!n)return a.jsxs("div",{className:"empty",children:[a.jsx("b",{children:"找不到这一课"}),"课程编号可能有误。",a.jsx("div",{style:{marginTop:16},children:a.jsx("button",{className:"btn ghost sm",onClick:()=>t("/courses"),children:"返回课程目录"})})]});const u=X3(n.id),p=K3(n.id),h=Y3(n.id),f=r.lessons[n.id],m=r.favorites.includes(n.id);return a.jsxs("article",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:16},children:[a.jsx("button",{onClick:()=>t("/courses"),style:{fontSize:11,letterSpacing:".16em",color:"var(--graphite-2)",marginBottom:14,textTransform:"uppercase"},children:"← 课程目录"}),a.jsxs("span",{className:"eyebrow",children:["Stage ",String(n.stage).padStart(2,"0")," · ",u==null?void 0:u.title]}),a.jsx("h1",{children:n.title}),a.jsxs("div",{className:"meta-row",children:[a.jsxs("span",{children:["教材 ",n.code," 节"]}),a.jsx("span",{children:n.chapter}),a.jsxs("span",{children:[n.minutes," 分钟"]}),a.jsxs("span",{children:[n.quiz.length," 道习题"]})]})]}),a.jsxs("div",{className:"panel",style:{marginTop:20,background:"var(--paper-3)",borderColor:"var(--rule)"},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)",letterSpacing:".18em"},children:"学完这一课，你能"}),a.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18,fontSize:14,lineHeight:1.85},children:n.objectives.map((x,A)=>a.jsx("li",{children:a.jsx(tn,{text:x})},A))})]}),a.jsxs("div",{style:{margin:"24px 0 26px",paddingLeft:16,borderLeft:"2px solid var(--accent)"},children:[a.jsx("span",{className:"note-h",children:"本节导入"}),a.jsx("p",{style:{fontFamily:"var(--font-serif)",fontSize:16.5,lineHeight:1.85,margin:0,color:"var(--ink)"},children:n.lead})]}),a.jsx(lc,{text:n.body}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"本课概念"}),a.jsx("i",{})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.concepts.map(x=>a.jsx("span",{className:"chip",children:x},x))}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"章节测试"}),a.jsx("i",{})]}),a.jsxs("p",{style:{fontSize:12.5,color:"var(--graphite-2)",marginTop:-6},children:["共 ",n.quiz.length," 题，答错会自动收进错题本。"]}),a.jsx("div",{style:{borderTop:"1px solid var(--rule)"},children:n.quiz.map((x,A)=>a.jsx(n4,{q:x,index:A,lessonId:n.id},x.id))}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"我的笔记"}),a.jsx("i",{})]}),a.jsx("textarea",{className:"input",rows:4,placeholder:"写下你的疑问、反例或一句话总结。只有你自己看得到。",value:s,onChange:x=>{l(x.target.value),o(!1)}}),a.jsxs("div",{className:"row",style:{marginTop:8},children:[a.jsx("button",{className:"btn ghost sm",onClick:()=>{Ye.saveNote(n.id,s),o(!0)},children:i?"已保存":"保存笔记"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>Ye.toggleFavoriteLesson(n.id),children:m?"★ 已收藏":"☆ 收藏本课"})]}),a.jsx("div",{style:{marginTop:26},children:a.jsx("button",{className:`btn block ${f!=null&&f.done?"ghost":""}`,onClick:()=>Ye.setLessonDone(n.id,!(f!=null&&f.done)),children:f!=null&&f.done?"✓ 已完成 · 点击撤销":"标记本课学完"})}),a.jsxs("div",{className:"row between",style:{marginTop:24,paddingTop:16,borderTop:"1px solid var(--rule)"},children:[a.jsxs("button",{className:"btn ghost sm",disabled:!p,onClick:()=>p&&t(`/lesson/${p.id}`),style:{maxWidth:"48%",overflow:"hidden"},children:["← ",p?p.title:"已是第一课"]}),a.jsxs("button",{className:"btn ghost sm",disabled:!h,onClick:()=>h&&t(`/lesson/${h.id}`),style:{maxWidth:"48%",overflow:"hidden"},children:[h?h.title:"已是最后一课"," →"]})]})]})}const d7=/^[A-Za-z][A-Za-z0-9_]*$/;function p7(e){const t=e.replace(/[（]/g,"(").replace(/[）]/g,")").replace(/<->|<=>|↔|⇔|≡/g,"↔").replace(/->|=>|→|⇒|⊃|⊃/g,"→").replace(/[¬~!]/g,"¬").replace(/[∧&·•^]/g,"∧").replace(/[∨|+]/g,"∨"),r=[];let n=0;for(;n<t.length;){const s=t[n];if(/\s/.test(s)){n++;continue}if("()¬∧∨→↔".includes(s)){r.push(s),n++;continue}if(/[A-Za-z]/.test(s)){let l=n;for(;l<t.length&&/[A-Za-z0-9_]/.test(t[l]);)l++;r.push(t.slice(n,l)),n=l;continue}throw new Tr(`无法识别的字符：「${s}」`)}return r}class Tr extends Error{}function pr(e){const t=p7(e);if(!t.length)throw new Tr("表达式为空");let r=0;const n=()=>t[r],s=m=>{const x=t[r];if(m&&x!==m)throw new Tr(`期望「${m}」，实际读到「${x??"结尾"}」`);return r++,x};function l(){let m=i();for(;n()==="↔";)s(),m={t:"iff",a:m,b:i()};return m}function i(){const m=o();return n()==="→"?(s(),{t:"imp",a:m,b:i()}):m}function o(){let m=u();for(;n()==="∨";)s(),m={t:"or",a:m,b:u()};return m}function u(){let m=p();for(;n()==="∧";)s(),m={t:"and",a:m,b:p()};return m}function p(){return n()==="¬"?(s(),{t:"not",a:p()}):h()}function h(){const m=n();if(m===void 0)throw new Tr("表达式意外结束");if(m==="("){s("(");const x=l();return s(")"),x}if(d7.test(m)&&!"∧∨¬→↔".includes(m))return s(),{t:"var",n:m};throw new Tr(`此处不应出现「${m}」`)}const f=l();if(r<t.length)throw new Tr(`多余的符号：「${t[r]}」`);return f}function ts(e,t=new Set){return e.t==="var"?t.add(e.n):e.t==="not"?ts(e.a,t):(ts(e.a,t),ts(e.b,t)),t}function Ge(e,t){switch(e.t){case"var":return!!t[e.n];case"not":return!Ge(e.a,t);case"and":return Ge(e.a,t)&&Ge(e.b,t);case"or":return Ge(e.a,t)||Ge(e.b,t);case"imp":return!Ge(e.a,t)||Ge(e.b,t);case"iff":return Ge(e.a,t)===Ge(e.b,t)}}function rs(e,t=!0){switch(e.t){case"var":return e.n;case"not":return`\\lnot ${r(e.a,4)}`;case"and":return`${r(e.a,3)} \\land ${r(e.b,3)}`;case"or":return`${r(e.a,2)} \\lor ${r(e.b,2)}`;case"imp":return`${r(e.a,2)} \\to ${r(e.b,1)}`;case"iff":return`${r(e.a,0)} \\leftrightarrow ${r(e.b,0)}`}function r(n,s){const l=s4(n),i=rs(n,!1);return l<s?`(${i})`:i}}function s4(e){switch(e.t){case"var":return 9;case"not":return 4;case"and":return 3;case"or":return 2;case"imp":return 1;case"iff":return 0}}function Wo(e){switch(e.t){case"var":return e.n;case"not":return`¬${e.a.t==="var"?e.a.n:`(${Wo(e.a)})`}`;case"and":return`${t(e.a,3)} ∧ ${t(e.b,3)}`;case"or":return`${t(e.a,2)} ∨ ${t(e.b,2)}`;case"imp":return`${t(e.a,2)} → ${t(e.b,1)}`;case"iff":return`${t(e.a,0)} ↔ ${t(e.b,0)}`}function t(r,n){const s=Wo(r);return s4(r)<n?`(${s})`:s}}function J(e,t){return e.t!==t.t?!1:e.t==="var"&&t.t==="var"?e.n===t.n:e.t==="not"&&t.t==="not"?J(e.a,t.a):(e.t==="and"||e.t==="or"||e.t==="imp"||e.t==="iff")&&(t.t==="and"||t.t==="or"||t.t==="imp"||t.t==="iff")?J(e.a,t.a)&&J(e.b,t.b):!1}function h7(e){const t=Array.from(ts(e)).sort(),r=[],n=1<<t.length;for(let s=0;s<n;s++){const l={};t.forEach((i,o)=>{l[i]=!!(s>>t.length-1-o&1)}),r.push({env:l,value:Ge(e,l)})}return{vars:t,rows:r}}function m7(e){const{rows:t}=h7(e),r=t.every(s=>s.value),n=t.every(s=>!s.value);return r?"tautology":n?"contradiction":"contingent"}function f7(e,t){const r=Array.from(new Set([...ts(e),...ts(t)])).sort(),n=1<<r.length;for(let s=0;s<n;s++){const l={};if(r.forEach((i,o)=>{l[i]=!!(s>>r.length-1-o&1)}),Ge(e,l)!==Ge(t,l))return!1}return!0}function g0(e,t=[]){if(e.t==="var")return r(e);if(e.t==="not")return g0(e.a,t),r(e);return g0(e.a,t),g0(e.b,t),r(e);function r(n){return t.some(s=>J(n,s))||t.push(n),t}}const Jl=e=>e.t==="imp",wd=e=>e.t==="or",v7=["¬","∧","∨","→","↔","(",")","P","Q","R","S"];function g7({onInsert:e}){return a.jsxs("div",{className:"symbar",children:[v7.map(t=>a.jsx("button",{onClick:()=>e(t),children:t},t)),a.jsx("button",{onClick:()=>e(" "),style:{minWidth:30},children:"␣"})]})}function x7(e,t){return r=>{const n=e.current;if(!n){t(r);return}const s=n.selectionStart??n.value.length,l=n.selectionEnd??s,i=n.value.slice(0,s)+r+n.value.slice(l);t(i),requestAnimationFrame(()=>{n.focus();const o=s+r.length;n.setSelectionRange(o,o)})}}const y7=["P → Q","¬(P ∧ Q) ↔ (¬P ∨ ¬Q)","(P → Q) ∧ (Q → R) → (P → R)","P ∨ (Q ∧ ¬P)"];function $7(){const[e,t]=B.useState("single"),[r,n]=B.useState("(P → Q) ∧ P → Q"),[s,l]=B.useState(""),[i,o]=B.useState(`P → Q
P`),[u,p]=B.useState("Q"),h=B.useRef(null),f=x7(h,n),m=B.useMemo(()=>{try{return r.trim()?{ok:!0,ast:pr(r)}:{ok:!1,err:"输入一个命题表达式"}}catch(w){return{ok:!1,err:w instanceof Tr?w.message:"解析失败"}}},[r]),x=B.useMemo(()=>{if(!s.trim())return null;try{return{ok:!0,ast:pr(s)}}catch{return{ok:!1}}},[s]),A=B.useMemo(()=>{const w=i.split(`
`).map(j=>j.trim()).filter(Boolean);try{const j=w.map(pr),$=pr(u);if(!j.length)return{ok:!1,err:"至少写一条前提"};const y=Array.from(new Set([...j.flatMap(E=>[...ns(E)]),...ns($)])).sort(),b=1<<y.length,q=[];for(let E=0;E<b;E++){const z={};y.forEach((N,Q)=>{z[N]=!!(E>>y.length-1-Q&1)}),q.push({env:z,vals:j.map(N=>Ge(N,z)),c:Ge($,z)})}const C=q.filter(E=>E.vals.every(Boolean)&&!E.c);return{ok:!0,vs:y,rows:q,bad:C,pNodes:j,cNode:$,plausible:w.length>0}}catch(j){return{ok:!1,err:j instanceof Tr?j.message:"解析失败"}}},[i,u]);return a.jsxs("div",{children:[a.jsxs("div",{className:"row",style:{gap:8,marginBottom:14},children:[a.jsx("button",{className:`chip ${e==="single"?"on":""}`,onClick:()=>t("single"),children:"单式分析"}),a.jsx("button",{className:`chip ${e==="argue"?"on":""}`,onClick:()=>t("argue"),children:"论证有效性检验"})]}),e==="single"?a.jsxs(a.Fragment,{children:[a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)"},children:"命题表达式"}),a.jsx("input",{ref:h,className:"input",value:r,onChange:w=>n(w.target.value),spellCheck:!1,style:{fontFamily:"var(--font-mono)",marginTop:6},placeholder:"例如 (P ∧ Q) → R"}),a.jsx(g7,{onInsert:f}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:10},children:"支持 ¬ ~ ! ∧ & · ∨ | → -> ↔ <-> ；优先级 ¬ > ∧ > ∨ > → > ↔。"}),a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginTop:4},children:y7.map(w=>a.jsx("button",{className:"chip",onClick:()=>n(w),style:{fontFamily:"var(--font-mono)"},children:w},w))}),m.ok?a.jsx(w7,{ast:m.ast,cmpAst:x!=null&&x.ok?x.ast:null}):a.jsxs("div",{className:"verdict-band bad",style:{marginTop:16},children:[a.jsx("span",{className:"t",children:"表达式有误"}),m.err]}),a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)",display:"block",marginTop:22},children:"与另一式比较是否逻辑等值（可选）"}),a.jsx("input",{className:"input",value:s,onChange:w=>l(w.target.value),spellCheck:!1,style:{fontFamily:"var(--font-mono)",marginTop:6},placeholder:"例如 ¬P ∨ ¬Q"}),x&&!x.ok&&a.jsx("p",{style:{fontSize:12,color:"var(--bad)",marginTop:6},children:"第二式无法解析"})]}):a.jsxs(a.Fragment,{children:[a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)"},children:"前提（每行一条）"}),a.jsx("textarea",{className:"input",rows:3,value:i,onChange:w=>o(w.target.value),spellCheck:!1,style:{fontFamily:"var(--font-mono)",marginTop:6}}),a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)",display:"block",marginTop:12},children:"结论"}),a.jsx("input",{className:"input",value:u,onChange:w=>p(w.target.value),spellCheck:!1,style:{fontFamily:"var(--font-mono)",marginTop:6}}),a.jsxs("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginTop:10},children:[a.jsx("button",{className:"chip",onClick:()=>{o(`P → Q
P`),p("Q")},children:"MP"}),a.jsx("button",{className:"chip",onClick:()=>{o(`P → Q
¬Q`),p("¬P")},children:"MT"}),a.jsx("button",{className:"chip",onClick:()=>{o(`P → Q
Q`),p("P")},children:"肯定后件（应判无效）"}),a.jsx("button",{className:"chip",onClick:()=>{o(`P ∨ Q
¬P`),p("Q")},children:"DS"})]}),A.ok?a.jsx(k7,{data:A}):a.jsxs("div",{className:"verdict-band bad",style:{marginTop:16},children:[a.jsx("span",{className:"t",children:"无法检验"}),A.err]})]})]})}function ns(e,t=new Set){return e.t==="var"?t.add(e.n):e.t==="not"?ns(e.a,t):(ns(e.a,t),ns(e.b,t)),t}const Sd=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫"];function w7({ast:e,cmpAst:t}){const[r,n]=B.useState(null),s=Array.from(ns(e)).sort(),l=g0(e).filter(f=>f.t!=="var"),i=1<<s.length,o=[];for(let f=0;f<i;f++){const m={};s.forEach((x,A)=>{m[x]=!!(f>>s.length-1-A&1)}),o.push({env:m,vals:l.map(x=>Ge(x,m)),main:Ge(e,m)})}const u=m7(e),p=u==="tautology"?"重言式（永真）":u==="contradiction"?"矛盾式（永假）":"偶真式（可真可假）",h=t?f7(e,t):null;return a.jsxs("div",{style:{marginTop:18},children:[a.jsx("div",{className:"formula-block",style:{marginBottom:14},children:a.jsx(xn,{tex:rs(e),display:!0})}),a.jsx("div",{className:"step-legend",children:l.map((f,m)=>a.jsxs("button",{className:`step-chip ${r===m?"on":""}`,onClick:()=>n(r===m?null:m),children:[a.jsx("b",{children:Sd[m]??m+1}),a.jsx(xn,{tex:rs(f)})]},m))}),a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data tt-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[s.map(f=>a.jsx("th",{children:f},f)),l.map((f,m)=>a.jsx("th",{className:r===m?"hi":"",style:{cursor:"pointer",fontSize:13},onClick:()=>n(r===m?null:m),children:Sd[m]??m+1},m))]})}),a.jsx("tbody",{children:o.map((f,m)=>a.jsxs("tr",{children:[s.map(x=>a.jsx("td",{children:f.env[x]?"T":"F"},x)),f.vals.map((x,A)=>a.jsx("td",{className:`${A===l.length-1?"t":""} ${r===A?"hi":""}`,style:{color:x?"var(--ink)":"var(--graphite-2)"},children:x?"T":"F"},A))]},m))})]})}),a.jsxs("div",{className:"kv",style:{marginTop:14},children:[a.jsx("span",{children:"命题变项"}),a.jsxs("b",{children:[s.join("、"),"（共 ",i," 行）"]})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"主联结词"}),a.jsx("b",{children:S7(e)})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"真值分布"}),a.jsxs("b",{children:[o.filter(f=>f.main).length," 真 / ",o.filter(f=>!f.main).length," 假"]})]}),a.jsxs("div",{className:`verdict-band ${u==="contradiction"?"bad":"ok"}`,style:{marginTop:14},children:[a.jsx("span",{className:"t",children:p}),u==="tautology"&&"所有指派下都为真，说明这个形式在任何情况下都成立——它是逻辑真理，可以用作推理的等价替换。",u==="contradiction"&&"所有指派下都为假，说明这个形式自相矛盾。若一个论证的前提推出矛盾式，通常意味着前提之间不相容。",u==="contingent"&&`真值取决于具体指派：${o.filter(f=>f.main).length} 种情况下为真，${o.filter(f=>!f.main).length} 种情况下为假。它不是逻辑真理，也不是矛盾。`]}),h!==null&&a.jsxs("div",{className:`verdict-band ${h?"ok":"bad"}`,style:{marginTop:10},children:[a.jsx("span",{className:"t",children:h?"两式逻辑等值":"两式不等值"}),h?"在所有指派下真值完全相同，可以互相替换。":"存在至少一种指派使两式真值不同，不能互相替换。"]}),a.jsx("p",{style:{fontSize:12,color:"var(--graphite-2)",marginTop:12,lineHeight:1.8},children:"上方的编号是计算次序：先算括号内、再算 ¬，然后 ∧，再 ∨，最后 → 与 ↔。点编号可以高亮对应那一列，核对时从 ① 往右走，每一列只依赖它左边已经算出的列。"})]})}function S7(e){switch(e.t){case"not":return"¬ 否定";case"and":return"∧ 合取";case"or":return"∨ 析取";case"imp":return"→ 条件";case"iff":return"↔ 双条件";default:return"无（原子命题）"}}function k7({data:e}){const t=e.bad.length===0,r=e.bad.length?e.bad.slice(0,3):e.rows.slice(0,4);return a.jsxs("div",{style:{marginTop:18},children:[a.jsxs("div",{className:`verdict-band ${t?"ok":"bad"}`,children:[a.jsx("span",{className:"t",children:t?"论证有效":"论证无效"}),t?`在全部 ${e.rows.length} 种真值指派中，不存在「前提全真而结论假」的情况。因此前提为真时结论必然为真。`:`存在 ${e.bad.length} 种指派使前提全真而结论为假。下表列出前三种——这就是反驳这个论证的反例行。`]}),a.jsx("div",{className:"scroll-hint",children:"← 左右滑动查看全部列 →"}),a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data tt-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[e.vs.map(n=>a.jsx("th",{children:n},n)),e.rows[0].vals.map((n,s)=>a.jsxs("th",{className:"sub",children:["前提",s+1]},s)),a.jsx("th",{className:"sub",children:"结论"})]})}),a.jsx("tbody",{children:r.map((n,s)=>a.jsxs("tr",{className:!n.c&&n.vals.every(Boolean)?"tt-row-hi":"",children:[e.vs.map(l=>a.jsx("td",{children:n.env[l]?"T":"F"},l)),n.vals.map((l,i)=>a.jsx("td",{children:l?"T":"F"},i)),a.jsx("td",{className:"t",children:n.c?"T":"F"})]},s))})]})}),a.jsx("p",{style:{fontSize:12,color:"var(--graphite-2)",marginTop:10},children:t?"灰底行表示被检查的指派。":"高亮行即反例：前提全为 T，结论为 F。"})]})}function ka(e){let t=e.replace(/[，。,.;；\s]/g,"").replace(/[（）()「」“”"]/g,"");if(!t)return null;const r=t.match(/^(?:没有|无|没有一个)(.+?)(?:是|为|属于)(.+)$/);if(r){const f=Mn(r[1]),m=Mn(r[2]);if(f&&m)return{type:"E",subject:f,predicate:m,raw:e.trim()}}const n=t.match(/^(所有|一切|凡|每一个|任何一个|任何|有的|有些|部分|至少有一个|存在|某个)(.+)$/);let s=!0,l=t;n&&(l=n[2],s=!/^(有的|有些|部分|至少有一个|存在|某个)$/.test(n[1])),l=l.replace(/^(都|均|全都)/,"").replace(/(都|均)$/,"");const i=/不/.test(l);let o="",u="";const p=f=>{const m=l.match(f);return m?(o=Mn(m[1]),u=Mn(m[2]),!0):!1};if(i){if(!p(/^(.+?)不(?:是|为|属于)(.+)$/)&&!p(/^(.+?)不(.+)$/))return null}else if(!p(/^(.+?)(?:是|为|属于)(.+)$/)){const f=l.match(/^(.+?)(?:都|均)(.+)$/);f&&(o=Mn(f[1]),u=Mn(f[2]))}return!o||!u?null:{type:s?i?"E":"A":i?"O":"I",subject:o,predicate:u,raw:e.trim()}}function Mn(e){return e.replace(/^(的|这个|那个|一种|一类|都|均)/,"").replace(/[都均]$/,"").replace(/(者|的东西|事物|的人)$/,"").replace(/了$/,"").trim()}function We(e){return{subject:e==="A"||e==="E",predicate:e==="E"||e==="O"}}const Z0={"AAA-1":"Barbara（巴巴拉）","EAE-1":"Celarent（塞拉伦特）","AII-1":"Darii（达里）","EIO-1":"Ferio（费里奥）","EAE-2":"Cesare（切萨雷）","AEE-2":"Camestres（卡梅斯特斯）","EIO-2":"Festino（费斯提诺）","AOO-2":"Baroco（巴罗科）","IAI-3":"Disamis（迪萨米斯）","AII-3":"Datisi（达提西）","OAO-3":"Bocardo（博卡多）","EIO-3":"Ferison（费里松）","AEE-4":"Camenes（卡梅内斯）","IAI-4":"Dimaris（迪马里斯）","EIO-4":"Fresison（费里松）"},b7=new Set(["AAI-3","EAO-3","AAI-4","EAO-4","AAI-1","EAO-1","EAO-2"]);function A7(e,t,r){const n=ka(e),s=ka(t),l=ka(r);if(!n||!s||!l){const i={type:"A",subject:"?",predicate:"?",raw:""};return{ok:!1,error:"无法识别命题结构。请使用「所有 S 是 P」「所有 S 不是 P」「有的 S 是 P」「有的 S 不是 P」四种句式，或改用手动模式指定词项。",major:n??i,minor:s??i,conclusion:l??i,middle:"",majorTerm:"",minorTerm:"",mood:"",figure:1,valid:!1,reasons:[],conditions:[],diagram:[]}}return l4(n,s,l)}function l4(e,t,r){const n=r.subject,s=r.predicate,l=[e.subject,e.predicate,t.subject,t.predicate];let o=[...new Set(l)].filter(He=>l.filter(De=>De===He).length>=2&&He!==n&&He!==s)[0];o||(o=[...new Set(l)].filter(De=>De!==n&&De!==s)[0]??"");const u=e.subject===o||e.predicate===o,p=t.subject===o||t.predicate===o;if(!o||!u||!p)return{ok:!1,error:"没有找到唯一的中项：有效三段论必须恰好包含三个词项，且中项在两个前提中各出现一次、在结论中不出现。",major:e,minor:t,conclusion:r,middle:o||"（未识别）",majorTerm:s,minorTerm:n,mood:"",figure:1,valid:!1,reasons:[],conditions:[],diagram:[]};const h=s,f=n,m=[],x=[],A=e.subject===s||e.predicate===s,w=e.subject===n||e.predicate===n;(!A||w)&&x.push("标准形式提示：大前提含大项（结论谓项），小前提含小项（结论主项），请检查是否把两条前提写反了。");const j=P7(e,t,o,h,f),$=e.type+t.type+r.type,y=`${$}-${j}`,b=y in Z0,q=Z0[y];We(e.type).subject&&e.subject===o||We(e.type).predicate&&e.predicate===o||We(t.type).subject&&t.subject===o||We(t.type).predicate&&t.predicate===o||m.push("中项「"+o+"」在两个前提中都不周延——中项一次也没有覆盖全部外延，无法把大项与小项必然联结起来（中项不周延谬误）。");const E=We(e.type).subject&&e.subject===s||We(e.type).predicate&&e.predicate===s||We(t.type).subject&&t.subject===s||We(t.type).predicate&&t.predicate===s;(We(r.type).subject&&r.subject===s||We(r.type).predicate&&r.predicate===s)&&!E&&m.push("大项「"+s+"」在前提中不周延，却在结论中周延——结论超出了前提所断定的范围（大项不当周延）。");const N=We(e.type).subject&&e.subject===n||We(e.type).predicate&&e.predicate===n||We(t.type).subject&&t.subject===n||We(t.type).predicate&&t.predicate===n;(We(r.type).subject&&r.subject===n||We(r.type).predicate&&r.predicate===n)&&!N&&m.push("小项「"+n+"」在前提中不周延，却在结论中周延（小项不当周延）。");const U=(e.type==="E"||e.type==="O")&&(t.type==="E"||t.type==="O");U&&m.push("两个前提都是否定命题——否定只表示词项分离，两前提都只说「不相干」，无法推出任何确定联系（否定前提谬误）。");const le=(e.type==="E"||e.type==="O")!=(t.type==="E"||t.type==="O"),ie=r.type==="E"||r.type==="O";return le&&!ie&&m.push("前提之一为否定，结论却是肯定——结论的质与前提不符（否定前提得肯定结论谬误）。"),!le&&ie&&!U&&m.push("两个前提都是肯定，结论却是否定——无法从肯定的联结推出分离（肯定前提得否定结论谬误）。"),b&&(m.length=0),!b&&!m.length&&m.push("形式不在 15 个有效形式之内，虽未必明显违反某一条规则，但用文恩图可以构造出前提真而结论假的情形。"),!b&&b7.has(y)&&x.push("该形式（"+y+"）在传统解释下（假定主项存在）有效，但在现代布尔解释下无效：两个全称前提不保证主项类非空。本课程采用现代解释，判为无效。"),{ok:!0,major:e,minor:t,conclusion:r,middle:o,majorTerm:h,minorTerm:f,mood:$,figure:j,valid:b,formName:q,reasons:m,conditions:x,diagram:[{label:"大前提",formula:`${e.type}：${ba(e)}`},{label:"小前提",formula:`${t.type}：${ba(t)}`},{label:"结论",formula:`${r.type}：${ba(r)}`}]}}function P7(e,t,r,n,s){const l=e.subject===r&&e.predicate===n,i=t.subject===s&&t.predicate===r;if(l&&i)return 1;if(e.subject===n&&e.predicate===r&&t.subject===s&&t.predicate===r)return 2;if(l&&t.subject===r&&t.predicate===s)return 3;if(e.subject===n&&e.predicate===r&&t.subject===r&&t.predicate===s)return 4;const o=p=>p.subject===r?"S":"P",u=o(e)+o(t);return u==="SP"?1:u==="PP"?2:u==="SS"?3:4}function ba(e){switch(e.type){case"A":return`所有 ${e.subject} 都是 ${e.predicate}`;case"E":return`所有 ${e.subject} 都不是 ${e.predicate}`;case"I":return`有的 ${e.subject} 是 ${e.predicate}`;case"O":return`有的 ${e.subject} 不是 ${e.predicate}`}}const j7=Object.keys(Z0),e0=[{label:"Barbara（有效）",major:"所有 人 都是 会死的",minor:"所有 希腊人 都是 人",concl:"所有 希腊人 都是 会死的"},{label:"中项不周延（无效）",major:"所有 猫 都是 哺乳动物",minor:"所有 狗 都是 哺乳动物",concl:"所有 狗 都是 猫"},{label:"Celarent（有效）",major:"没有 鱼 是 哺乳动物",minor:"所有 鲸 都是 哺乳动物",concl:"没有 鲸 是 鱼"},{label:"大项不当周延（无效）",major:"所有 苹果 都是 水果",minor:"没有 石头 是 苹果",concl:"没有 石头 是 水果"}],C7=[{t:"A",label:"A 所有 S 是 P"},{t:"E",label:"E 所有 S 不是 P"},{t:"I",label:"I 有的 S 是 P"},{t:"O",label:"O 有的 S 不是 P"}];function q7(){const[e,t]=B.useState(!1),[r,n]=B.useState(e0[0].major),[s,l]=B.useState(e0[0].minor),[i,o]=B.useState(e0[0].concl),[u,p]=B.useState({type:"A",s:"人",p:"会死的"}),[h,f]=B.useState({type:"A",s:"希腊人",p:"人"}),[m,x]=B.useState({type:"A",s:"希腊人",p:"会死的"}),A=B.useMemo(()=>{if(e){const w=j=>({type:j.type,subject:j.s||"?",predicate:j.p||"?",raw:""});return l4(w(u),w(h),w(m))}return A7(r,s,i)},[e,r,s,i,u,h,m]);return a.jsxs("div",{children:[a.jsxs("div",{className:"row",style:{gap:8,marginBottom:14},children:[a.jsx("button",{className:`chip ${e?"":"on"}`,onClick:()=>t(!1),children:"自然语言输入"}),a.jsx("button",{className:`chip ${e?"on":""}`,onClick:()=>t(!0),children:"手动指定结构"})]}),e?a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:12,color:"var(--graphite-2)",marginTop:0},children:"直接指定三个命题的类型与词项。中项会自动识别为两个前提共有、结论中没有的那个词项。"}),a.jsx(Pa,{label:"大前提",v:u,set:p}),a.jsx(Pa,{label:"小前提",v:h,set:f}),a.jsx(Pa,{label:"结论",v:m,set:x})]}):a.jsxs("div",{className:"stack",children:[a.jsx(Aa,{label:"大前提（含大项 P：结论的谓项）",value:r,onChange:n,ph:"所有 人 都是 会死的"}),a.jsx(Aa,{label:"小前提（含小项 S：结论的主项）",value:s,onChange:l,ph:"所有 希腊人 都是 人"}),a.jsx(Aa,{label:"结论",value:i,onChange:o,ph:"所有 希腊人 都是 会死的"})]}),a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginTop:12},children:e0.map(w=>a.jsx("button",{className:"chip",onClick:()=>{n(w.major),l(w.minor),o(w.concl),t(!1)},children:w.label},w.label))}),A.ok?a.jsxs("div",{style:{marginTop:20},children:[a.jsxs("div",{className:`verdict-band ${A.valid?"ok":"bad"}`,children:[a.jsx("span",{className:"t",children:A.valid?"有效形式":"无效形式"}),A.valid?`这是第 ${A.figure} 格的 ${A.mood} 式${A.formName?`，传统名称 ${A.formName}`:""}，属于十五个有效形式之一。前提为真时，结论必然为真。`:"这个形式不在十五个有效形式之内。下面列出它违反了哪条规则。"]}),a.jsxs("div",{style:{marginTop:16},children:[a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"式（mood）"}),a.jsx("b",{children:A.mood})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"格（figure）"}),a.jsxs("b",{children:["第 ",A.figure," 格"]})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"中项 M"}),a.jsx("b",{children:A.middle})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"大项 P"}),a.jsx("b",{children:A.majorTerm})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"小项 S"}),a.jsx("b",{children:A.minorTerm})]})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"结构还原"}),a.jsx("i",{})]}),a.jsxs("div",{className:"formula-block",style:{textAlign:"left",fontFamily:"var(--font-mono)",fontSize:13.5,lineHeight:2},children:[a.jsxs("div",{children:["大前提　",A.diagram[0].formula]}),a.jsxs("div",{children:["小前提　",A.diagram[1].formula]}),a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",marginTop:6,paddingTop:6},children:["结　论　",A.diagram[2].formula]})]}),A.reasons.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"为什么无效"}),a.jsx("i",{})]}),a.jsx("ul",{style:{paddingLeft:18,fontSize:14,lineHeight:1.9,color:"var(--graphite)"},children:A.reasons.map((w,j)=>a.jsx("li",{children:w},j))})]}),A.conditions.length>0&&a.jsxs("div",{className:"note",style:{marginTop:16},children:[a.jsx("span",{className:"note-h",children:"解释说明"}),A.conditions.map((w,j)=>a.jsx("div",{style:{marginBottom:6},children:w},j))]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"十五个有效形式"}),a.jsx("i",{})]}),a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"格"}),a.jsx("th",{children:"有效式（式）"}),a.jsx("th",{children:"传统名称"})]})}),a.jsx("tbody",{children:[1,2,3,4].map(w=>{const j=j7.filter($=>$.endsWith(`-${w}`));return a.jsxs("tr",{children:[a.jsxs("td",{children:["第 ",w," 格"]}),a.jsx("td",{children:j.map($=>$.split("-")[0]).join(" / ")}),a.jsx("td",{style:{whiteSpace:"normal",fontSize:12,color:"var(--graphite)"},children:j.map($=>(Z0[$]??"").replace(/（.*/,"")).join("、")})]},w)})})]})}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:8,lineHeight:1.8},children:"本判定采用现代（布尔）解释：全称前提不假定主项类存在，故 AAI-3、EAO-3、AAI-4、EAO-4 等「弱化式」判为无效。"})]}):a.jsxs("div",{className:"verdict-band bad",style:{marginTop:18},children:[a.jsx("span",{className:"t",children:"无法分析"}),A.error]})]})}function Aa({label:e,value:t,onChange:r,ph:n}){return a.jsxs("div",{children:[a.jsx("label",{style:{fontSize:11.5,letterSpacing:".12em",color:"var(--graphite-2)"},children:e}),a.jsx("input",{className:"input",value:t,onChange:s=>r(s.target.value),placeholder:n,style:{marginTop:5}})]})}function Pa({label:e,v:t,set:r}){return a.jsxs("div",{style:{marginTop:12},children:[a.jsx("label",{style:{fontSize:11.5,letterSpacing:".12em",color:"var(--graphite-2)"},children:e}),a.jsxs("div",{className:"row",style:{gap:6,marginTop:5},children:[a.jsx("select",{value:t.type,onChange:n=>r({...t,type:n.target.value}),className:"input",style:{width:150,paddingLeft:8,fontSize:13},children:C7.map(n=>a.jsx("option",{value:n.t,children:n.label},n.t))}),a.jsx("input",{className:"input",value:t.s,onChange:n=>r({...t,s:n.target.value}),placeholder:"主项",style:{flex:1}}),a.jsx("input",{className:"input",value:t.p,onChange:n=>r({...t,p:n.target.value}),placeholder:"谓项",style:{flex:1}})]})]})}const kd={premise:"前提",mid:"中间结论",final:"最终结论",hidden:"隐含前提",none:"背景信息"},Es={premise:"var(--ink)",mid:"var(--copper)",final:"var(--accent)",hidden:"var(--graphite-2)",none:"var(--rule)"};function E7(e){return e.replace(/\n+/g,"。").split(new RegExp("(?<=[。！？；])")).map(t=>t.trim()).filter(t=>t.length>1)}function B7(){const[e,t]=B.useState(Wn[0].text),[r,n]=B.useState({}),[s,l]=B.useState([]),[i,o]=B.useState(!1),u=B.useMemo(()=>E7(e),[e]),p=()=>{const m={};u.forEach((x,A)=>{/所以|因此|可见|由此可见|总之|故/.test(x)?m[A]="final":/因为|由于|既然|理由是/.test(x)?m[A]="premise":m[A]="none"}),n(m),o(!0)},h=B.useMemo(()=>{const m={premise:[],mid:[],final:[],hidden:[],none:[]};return Object.entries(r).forEach(([x,A])=>m[A].push(Number(x))),m},[r]),f=h.final.length===1&&h.premise.length+h.mid.length>=1;return a.jsxs("div",{children:[a.jsx("p",{className:"lede",style:{fontSize:13},children:"把一段话拆成句子，逐句标注它在论证中的角色，最后检查结构是否完整。这个工具不做自动语义理解——判断由你下，它只负责把结构摆清楚。"}),a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)"},children:"原始语段"}),a.jsx("textarea",{className:"input",rows:5,value:e,onChange:m=>{t(m.target.value),o(!1),n({})},style:{marginTop:6,lineHeight:1.8}}),a.jsxs("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginTop:8},children:[Wn.map((m,x)=>a.jsxs("button",{className:"chip",onClick:()=>{t(m.text),o(!1),n({}),l([])},children:["示例 ",x+1]},m.id)),a.jsx("button",{className:"btn sm",onClick:p,children:"开始拆解"})]}),i&&a.jsxs("div",{className:"fade-in",style:{marginTop:20},children:[a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"逐句标注"}),a.jsx("i",{})]}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:-8},children:"点击角色标签切换；一段好的论证通常只有一个最终结论。"}),u.map((m,x)=>{const A=r[x]??"none";return a.jsxs("div",{style:{borderTop:"1px solid var(--rule-soft)",padding:"12px 0"},children:[a.jsxs("div",{className:"row",style:{gap:8,alignItems:"flex-start"},children:[a.jsx("span",{className:"mono",style:{color:"var(--graphite-2)",minWidth:18,paddingTop:3},children:x+1}),a.jsx("div",{style:{flex:1,fontSize:14.5,lineHeight:1.75},children:m})]}),a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:26},children:Object.keys(kd).map(w=>a.jsx("button",{className:`chip ${A===w?"on":""}`,style:A===w?{borderColor:Es[w],color:Es[w]}:void 0,onClick:()=>n({...r,[x]:w}),children:kd[w]},w))})]},x)}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"隐含前提"}),a.jsx("i",{})]}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:-8},children:"论证里没说出口、但缺了它结论就接不上的那句话。这是最有价值的一步。"}),s.map((m,x)=>a.jsx("input",{className:"input",style:{marginBottom:6},value:m.text,placeholder:"例如：试点部门的经验可以推广到全公司",onChange:A=>l(s.map(w=>w.id===m.id?{...w,text:A.target.value}:w))},m.id)),a.jsx("button",{className:"btn ghost sm",onClick:()=>l([...s,{id:Date.now(),text:""}]),children:"+ 添加一条"}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"结构图"}),a.jsx("i",{})]}),a.jsxs("div",{style:{border:"1px solid var(--rule)",padding:16,background:"var(--paper-2)"},children:[a.jsx(ja,{title:"最终结论",ids:h.final,sents:u,color:Es.final}),a.jsx(bd,{label:"↑ 由下列各条支持"}),(h.mid.length>0||s.length>0)&&a.jsxs(a.Fragment,{children:[a.jsx(ja,{title:"中间结论 / 隐含前提",ids:h.mid,sents:u,color:Es.mid,extra:s.filter(m=>m.text.trim()).map(m=>m.text)}),a.jsx(bd,{label:"↑ 由下列各条支持"})]}),a.jsx(ja,{title:"前提",ids:h.premise,sents:u,color:Es.premise})]}),!f&&a.jsxs("div",{className:"verdict-band bad",style:{marginTop:14},children:[a.jsx("span",{className:"t",children:"结构还不完整"}),h.final.length===0&&"还没有标出最终结论——找一找哪句话是整段话真正想让你接受的。",h.final.length>1&&"标出了多个最终结论。一个论证通常只有一个；其余可能是中间结论。",h.premise.length+h.mid.length===0&&"还没有任何前提支持这个结论。"]}),a.jsxs("div",{className:"note",style:{marginTop:16},children:[a.jsx("span",{className:"note-h",children:"示范答案"}),Wn.find(m=>m.text===e)?(()=>{const m=Wn.find(x=>x.text===e);return a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:6},children:[a.jsx("b",{children:"结论："}),m.conclusion]}),a.jsxs("div",{style:{marginBottom:6},children:[a.jsx("b",{children:"前提："}),m.premises.join("；")]}),a.jsxs("div",{style:{marginBottom:6},children:[a.jsx("b",{children:"隐含前提："}),m.hidden.join("；")]}),a.jsxs("div",{children:[a.jsx("b",{children:"点评："}),m.note]})]})})():"这段文字是你自己输入的，没有预置答案。对照结构图检查：每条前提是否真的支持结论？哪一条最弱？"]})]}),!i&&a.jsxs("div",{className:"empty",style:{padding:"34px 10px"},children:[a.jsx("b",{children:"先点「开始拆解」"}),"系统会把语段切成句子，并自动标出含有「所以」「因为」的句子作为初判。"]})]})}function ja({title:e,ids:t,sents:r,color:n,extra:s=[]}){const l=[...t.map(i=>r[i]),...s];return l.length?a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:10,letterSpacing:".18em",color:"var(--graphite-2)",marginBottom:7},children:e}),l.map((i,o)=>a.jsx("div",{style:{border:`1px solid ${n}`,borderLeftWidth:3,padding:"9px 11px",fontSize:13.5,lineHeight:1.7,marginBottom:6,background:"var(--paper)"},children:i},o))]}):null}function bd({label:e}){return a.jsx("div",{style:{textAlign:"center",fontSize:10,letterSpacing:".14em",color:"var(--graphite-2)",padding:"8px 0"},children:e})}const Dr=[{id:"f01",name:"人身攻击",en:"ad hominem",family:"相干谬误",definition:"绕开对方提出的理由，转而对提出理由的人下手，用他的身份、品行、动机或处境来否定他的主张。",pattern:"甲主张 $p$；甲有缺点 $q$；$\\therefore$ $p$ 不成立。",example:"「他说这个方案的成本算错了？他自己去年报销超标被通报过，一个连自己账都管不好的人来谈成本控制，这话能信吗？」",flaw:"一个人的品行、身份与他的论证是否成立没有必然联系。理由的对错取决于理由本身，攻击提出者只改变了听众的好恶，没有动到结论。",spot:["他是在回应理由，还是在回应提出理由的那个人？","把这段人身评价整段删掉，剩下的内容还支持结论吗？","被攻击的那个特点，与结论真假有直接关系吗（比如证人的视力与他的目击证词）？"],rebut:["「你说的这些关于我的事，哪一件能说明我给的数字算错了？把数拿出来对一遍。」","「评价我可以，但结论得靠理由站住。你先说说这个成本哪里算错了。」"],lessonId:"s6-02"},{id:"f02",name:"稻草人",en:"straw man",family:"相干谬误",definition:"把对方的观点改写成更极端、更容易驳倒的版本，然后攻击这个版本，并宣称已经驳倒了对方的原意。",pattern:"甲主张 $p$；乙把 $p$ 改写为更强的 $p^{\\prime}$；乙驳倒 $p^{\\prime}$；$\\therefore$ $p$ 被驳倒。",example:"「你说要控制班级作业总量，意思就是以后干脆一点作业都不留？孩子回家连练习都不做，成绩滑坡了这个责任你来负？」",flaw:"被驳倒的命题与对方真正主张的命题不是同一个。驳倒一个没人主张过的强版本，对原命题构不成任何压力。",spot:["对方原话是怎么说的？我能一字不差复述吗？","我攻击的这个版本，是他说的，还是我替他加强了？","原命题里的限定词（部分、在某些条件下、逐步）被我删掉了吗？"],rebut:["「我原话是『控制总量』，不是『取消』。你要驳，请驳我这个版本。」","「先把我的主张写成一句话，你确认没歪，我们再开始辩。」"],lessonId:"s6-03"},{id:"f03",name:"滑坡",en:"slippery slope",family:"相干谬误",definition:"断言从第一步必然滑向一连串更糟的后果，却不给每一环的机制与概率，用终点的不幸来否定起点。",pattern:"允许 $A$ $\\to$ 必然 $B$ $\\to$ 必然 $C$ $\\to$ 灾难；$\\therefore$ 不能允许 $A$。",example:"「今天同意学生带手机进校园，明天就有人在课堂上刷视频，后天考试就敢作弊，最后整个学校的教学秩序都完了。」",flaw:"每一环都被说成必然，实际只是可能；多个「可能」连乘，终点概率极低。更要紧的是，链条中间明明可以设闸门。",spot:["每一环是「必然」还是「可能」？各自概率大概多少？","链条中间有没有可以设置复核点的地方？","终点那个灾难，有没有真实发生过哪怕一次的先例？"],rebut:["「我们不必一步走到你说的终点。先试行一学期，设一个复核点，不行就收回。」","「把每一环的概率写出来乘一下，再看看值不值得现在就否决。」"],lessonId:"s6-04"},{id:"f04",name:"虚假两难",en:"false dilemma",family:"相干谬误",definition:"把本来存在多个选项的局面压缩成两个，并把这两个都说得难以接受，逼人在其中挑一个，其他出路被悄悄藏起来。",pattern:"要么 $A$，要么 $B$；$A$ 不可接受；$\\therefore$ 只能 $B$。（$C$、$D$ 等选项被隐去）",example:"「这个项目要么按我的方案全速推进，要么就地砍掉。你们要是不同意全速，那就是想让公司这一年白干，责任谁担？」",flaw:"现实选项常常落在两个极端之间：缩小范围、分期投入、换路径、先做试点。把中间地带藏起来，选择就被伪造了。",spot:["除了这两个，还有没有第三条路？","这两个极端是不是被人为推到了尽头？","「要么」后面那半句，本来就有人主张吗？"],rebut:["「还有第三种：先做一个季度的缩小版，跑出数据再决定加不加码。」","「你设了两个选项，我接受这个设定之前，先让我把其他可能列完。」"],lessonId:"s6-05"},{id:"f05",name:"诉诸权威",en:"appeal to authority",family:"相干谬误",definition:"拿某个权威的认可来代替论证，而该权威的专业范围与所讨论的问题并不对口，或者该问题在学界本无定论。",pattern:"专家 $X$ 说 $p$；$X$ 是权威；$\\therefore$ $p$ 为真。",example:"「这位拿过奥运金牌的运动员在广告里说这款蛋白粉效果好，人家是专业练出来的，那它肯定靠谱，你就别犹豫了。」",flaw:"权威意见只是证据之一，要用它得满足三条：专业对口、该领域有共识、没有利益冲突。缺一条，权威就只是个有名气的人。",spot:["这位专家的专业，与眼前这个问题属于同一领域吗？","他是在拿研究说话，还是在拿身份说话？","他与这个结论之间有没有利益关系（代言、持股、任职）？"],rebut:["「他是运动员，不是营养学研究者，这两件事的专业门槛不一样。」","「学界对这个问题的共识是什么？有综述或临床指南吗？我们看那个。」"],lessonId:"s6-06"},{id:"f06",name:"诉诸大众",en:"appeal to popularity",family:"相干谬误",definition:"以「很多人都这么想」作为命题为真的依据，把相信的人数当成正确性的证据，是诉诸大众的典型形态。",pattern:"多数人相信 $p$；$\\therefore$ $p$ 为真。",example:"「这个群里两百多号人都说这门理财课值，难道两百个人一起看走眼？跟着大多数人走，总不会错到哪去，别自己瞎琢磨。」",flaw:"相信的人多，说明这个说法传得开，跟它符不符合事实是两件事。多数人一致犯错的场面，历史上并不稀罕。",spot:["「很多人」到底是多少人？在哪一个人群里多？","这些人是自己判断过，还是互相转告？","如果明天大家集体改口，这个命题的真假会跟着变吗？"],rebut:["「人多只能说明传播广。我们看看这门课到底教了什么，有没有可核对的收益记录。」","「就算一万个人相信，也顶不上一次实际检验。」"],lessonId:"s6-07"},{id:"f07",name:"诉诸情感",en:"appeal to emotion",family:"相干谬误",definition:"用恐惧、怜悯、愤怒或归属感替代理由，让听众在情绪推动下接受一个尚未被论证的结论。",pattern:"激起情绪 $E$；$E$ 使人倾向 $p$；$\\therefore$ $p$。",example:"「想想你年迈的父母，想想他们生病时你拿不出钱的样子。这份保险你今天不签，将来后悔的只会是你自己，签个字而已。」",flaw:"情绪能改变人行动的意愿，改变不了命题的真假。被恐惧推着做出的决定，往往跳过了最该问的成本与条款。",spot:["这段话让我产生了什么情绪？情绪之外，它给了几个事实？","把煽情的句子删掉，剩下的理由还够撑住结论吗？","如果我此刻心情平静，我还会做同样的决定吗？"],rebut:["「先不谈感受，看条款：保额多少、免赔多少、理赔要哪些材料。」","「我理解这个担心，但担心不能替代数字。把成本列出来，我们再谈。」"],lessonId:"s6-07"},{id:"f08",name:"诉诸无知",en:"appeal to ignorance",family:"不当归纳谬误",definition:"因为一个命题没有被证明为假，就断言它为真；或者因为没被证明为真，就断言它为假，把无知当成了证据。",pattern:"$p$ 未被证伪；$\\therefore$ $p$ 为真。（或：$p$ 未被证实；$\\therefore$ $p$ 为假）",example:"「古籍里没有这种工艺失传的记载，那就说明它一直传下来了。你要是说它中间断过，你拿证据出来，拿不出就别乱讲。」",flaw:"缺少证据只说明我们暂时不知道，不能给任何一个方向加分。举证责任落在提出主张的一方，不在质疑的一方。",spot:["现在缺的是「证实」还是「证伪」？","这个问题的证据本来就容易获得吗？","谁主张、谁举证，这一步有没有被倒过来？"],rebut:["「没有记载不等于一直存在，中间可能只是没人写。这个空白两边都不支持。」","「主张它延续下来的是你，请先给正面证据，我们再往下谈。」"],lessonId:"s6-09"},{id:"f09",name:"以偏概全",en:"hasty generalization",family:"不当归纳谬误",definition:"从一个过小或明显不具代表性的样本，推出关于整体的结论，样本自带的那点偏差被完全忽略。",pattern:"所考察的 $n$ 个 $S$ 都是 $P$；$\\therefore$ 所有（或绝大多数）$S$ 都是 $P$。（$n$ 过小或有偏）",example:"「我在办公室随口问了五个人，四个说支持调休，可见全公司大部分人都是这个想法，方案就这么定下来吧，不用再问了。」",flaw:"样本量小，误差范围就大；样本来源单一，偏差就固定存在。五个同科室的同事，连公司的一个横截面都算不上。",spot:["样本多大？从哪个范围抽的？","被抽到的人，和其他人有什么系统差别？","换个时间、换个地点再抽一次，结论会一样吗？"],rebut:["「五个同科室的同事代表不了全公司。要么做一次全员问卷，要么把结论改成『我身边几个人』。」","「样本这么小，误差可能比我们想改的那点差别还大。」"],lessonId:"s6-09"},{id:"f10",name:"错误类比",en:"false analogy",family:"不当归纳谬误",definition:"靠两个事物在某些方面相似，推出它们在另一个方面也相似，而那个方面恰好取决于两者的差异。",pattern:"$A$ 与 $B$ 在 $x$、$y$ 上相似；$A$ 有 $z$；$\\therefore$ $B$ 也有 $z$。（$z$ 取决于差异点）",example:"「公司就是一支球队，教练说了算才能赢球。所以管理上也不必听员工意见，定好目标大家往下执行就行了，别搞那些虚的。」",flaw:"类比要成立，相似点必须与结论相关，且没有更关键的差异点。球队靠统一执行出成绩，公司靠一线信息做判断，这条差异正好落在结论上。",spot:["相似的那几点，与结论说的是同一件事吗？","有没有一个差异点，比相似点更决定结果？","能不能构造一个反向类比，得出完全相反的结论？"],rebut:["「球队的胜负靠执行，公司的产出靠信息。这个差异正好落在你要推的那一点上。」","「照同样的类法，我也可以说公司像科研团队，那就该多听意见。类比往哪边推，取决于挑哪一面。」"],lessonId:"s6-10"},{id:"f11",name:"混淆相关与因果",en:"cum hoc ergo propter hoc",family:"不当归纳谬误",definition:"看到两个变量一起变化，就断定其中一个是另一个的原因，既没排除共同原因，也没考虑反向因果。",pattern:"$X$ 与 $Y$ 共变；$\\therefore$ $X$ 导致 $Y$。（未排除 $Z$ 同时导致 $X$ 与 $Y$）",example:"「统计发现，家里藏书多的孩子成绩更好。可见多买书就能把成绩提上去，家长赶紧把书架填满就是了，一本都别省。」",flaw:"藏书量与成绩同时受家庭收入、父母学历、陪伴时间影响。共变只是线索，定因果得做对照、排第三变量。",spot:["有没有一个第三变量，同时影响这两件事？","时间顺序对吗？是原因在前，还是结果在前？","控制住那个第三变量之后，相关性还在吗？"],rebut:["「藏书多和成绩好可能来自同一个家庭条件。先看控制收入与父母学历之后，相关性还剩多少。」","「相关只说明它们一起动，谁带动谁还没定。」"],lessonId:"s6-11"},{id:"f12",name:"事后归因",en:"post hoc ergo propter hoc",family:"不当归纳谬误",definition:"仅仅因为 B 发生在 A 之后，就断定 A 是 B 的原因，中间既没有机制，也没有对照。",pattern:"$A$ 先发生，$B$ 后发生；$\\therefore$ $A$ 导致 $B$。",example:"「换了新校长之后，我们班这学期平均分就掉了下来。这还不能说明新校长管理有问题吗？换人之前可没这样。」",flaw:"先后顺序是因果的必要条件之一，离充分条件还差得远。一次考试变难、一套教材更换，都能造出同样的结果。",spot:["除了这件「之前的事」，同期还发生了什么？","有没有可比的对照，比如别的班、别的学校？","中间有没有说得通的机制，而不只是时间挨着？"],rebut:["「同一次考试，别的班也降了。先看看是卷子难了，还是管理出了问题。」","「时间上挨着不算证据。找个对照，我们再来谈原因。」"],lessonId:"s6-11"},{id:"f13",name:"选择性证据",en:"cherry picking",family:"不当归纳谬误",definition:"只挑支持自己结论的证据，把相反的证据忽略掉或者一句话带过，让证据集看起来一边倒。",pattern:"在证据集 $E$ 中只取 $E^{+}$（支持结论者），隐去 $E^{-}$；$\\therefore$ 结论成立。",example:"「我认识的三位做这行的朋友，去年都赚了钱。所以说这行现在很好做，外面那些亏钱的说法，都是没入行的人瞎传。」",flaw:"证据的说服力取决于它是否完整。只报成功案例，等于把失败者从分母里删掉，剩下的比例必然是虚高的。",spot:["反面证据去哪了？是被驳倒了，还是压根没被提起？","分母是什么？成功者背后，总共有多少人试过？","换一个人来收集证据，他会挑哪些材料？"],rebut:["「你举的三位赚了钱，那这一年入行的总共多少人、亏的有多少？把分母给我。」","「我们约定一个取证规则：支持和不支持的材料都列出来，再一起看。」"],lessonId:"s6-12"},{id:"f14",name:"循环论证",en:"circular reasoning",family:"预设谬误",definition:"把结论换个说法放进前提里，前提与结论互相支撑，绕了一圈，实际没提供任何独立理由。",pattern:"$p$ 因为 $q$；$q$ 因为 $p$；$\\therefore$ $p$。",example:"「这本书当然是经典，不然怎么会流传这么久？它能流传这么久，正说明它经得起时间考验，可见它就是真正的经典之作。」",flaw:"论证的价值在于拿已知支撑未知。前提若要靠结论反过来支持，整段话就在原地打转，读者被绕了一圈，信息量为零。",spot:["把结论遮住，前提还站得住吗？","这个前提，是不是结论的另一种说法？","有一个独立于结论的证据被提到过吗？"],rebut:["「『流传久』和『经典』在这里是同一件事。要么给一个独立标准，要么这句话等于没说。」","「先把结论盖住，只看你给的理由。这个理由你还会接受吗？」"],lessonId:"s6-08"},{id:"f15",name:"复杂问句",en:"loaded question",family:"预设谬误",definition:"在一个问句里预先塞进一个未经承认的假定，无论回答是或否，都等于接受了这个假定，问题本身已经替你做了判断。",pattern:"「你是否 $P$（其中 $P$ 预设 $Q$）？」答是或答否 $\\Rightarrow$ $Q$ 已被接受。",example:"「你停止照抄同事的方案之后，团队氛围是不是好了很多？大家都想听听你现在的感受，别客气，说两句就行，大家都在等。」",flaw:"问句的预设得先被承认，才能进入回答环节。直接答是或否，等于默认了那个还没被证实的假定。",spot:["这个问句里藏了几个「已经成立」的前提？","我答「是」，承认了什么？答「否」，又承认了什么？","那个预设本身，有独立证据吗？"],rebut:["「先停一下：我从来没有照抄过别人的方案，这个前提我不接受。」","「你这个问法预设了一件事。把预设拿出来单独谈，再谈你的问题。」"],lessonId:"s6-08"},{id:"f16",name:"歧义",en:"equivocation",family:"含混谬误",definition:"同一个词或短语在论证的前后两处取了不同含义，靠词面相同把两个本来不相干的判断接在了一起。",pattern:"前提中 $W$ 取义 $W_{1}$；结论中 $W$ 取义 $W_{2}$；$W_{1} \\neq W_{2}$。",example:"「自由是最宝贵的东西。自由职业者不受公司考勤约束，可见他们手里握着的正是最宝贵的东西，真让人羡慕，我也想辞职。」",flaw:"词相同不等于义相同。「自由」在前一句指不受强制的状态，后一句指不受雇佣关系约束，含义一换，推理的链条就断了。",spot:["关键词在这段话里出现了几次？每次含义一样吗？","把那个词换成更精确的说法，论证还连得上吗？","这个歧义是巧合，还是被说话人有意利用了？"],rebut:["「你说的两个『自由』不是一回事。换成『不受强制』和『不受雇』，这句推论就接不上了。」","「先给这个词下个定义，我们就用这个定义谈到底。」"],lessonId:"s6-13"},{id:"f17",name:"合成",en:"composition",family:"含混谬误",definition:"从整体的各个部分都具有某性质，推出整体也具有该性质，而那个性质只在部分层面成立。",pattern:"每个部分 $x_{i}$ 都有 $P$；$\\therefore$ 由这些部分组成的整体 $X$ 有 $P$。",example:"「我们队每个位置上的球员单看都是联盟前二十，那把这五个人凑到一起，当然是全联盟最强的球队，冠军基本稳了。」",flaw:"部分的性质未必能传递到整体。球员各个强，可能位置重叠、球权冲突；零件各个轻，装起来未必轻。",spot:["这个性质在部分层面成立，在整体层面还成立吗？","部分之间会不会互相抵消、彼此冲突？","拆开看和合起来看，结论一样吗？"],rebut:["「五个人各自强，凑一起要磨合。位置重叠、球权分配都是变量，强不强得看合练数据。」","「部分加起来不等于整体，这句话在球队、零件、预算上都成立。」"],lessonId:"s6-13"},{id:"f18",name:"分割",en:"division",family:"含混谬误",definition:"从整体具有某性质，推出它的每个部分也具有该性质，而那个性质其实只属于整体层面，落不到每一部分。",pattern:"整体 $X$ 有 $P$；$x$ 是 $X$ 的部分；$\\therefore$ $x$ 有 $P$。",example:"「这家公司去年整体利润很高，可见它每个部门都在赚钱。我进去随便挑个岗位，前途都差不了，不用打听具体是哪条业务线。」",flaw:"整体的性质是各部分综合出来的结果，未必平均分布在每一部分。公司整体盈利，可能靠一条业务线撑着，其余都在亏。",spot:["这个性质属于整体，还是每个部分都有？","整体里有没有特别拖后腿或特别撑场的部分？","把部分单独拎出来看，还能看到同样的性质吗？"],rebut:["「整体赚钱不等于每个部门赚钱。把分部报表拿出来，我挑的那个部门在哪个区间？」","「整体和部分得分开看，这个方向很容易搞反。」"],lessonId:"s6-13"}],z7=["相干谬误","不当归纳谬误","预设谬误","含混谬误"];function M7(e,t){const r=e.filter(i=>i.id!==t.id&&i.family!==t.family),s=[...e.filter(i=>i.id!==t.id&&i.family===t.family).slice(0,1),...r.slice(0,3)];return[t,...s].sort((i,o)=>i.id.localeCompare(o.id))}function N7(){const[e,t]=B.useState(0),[r,n]=B.useState(0),[s,l]=B.useState(null),[i,o]=B.useState(null),[u,p]=B.useState({right:0,total:0}),h=Dr[e%Dr.length],f=B.useMemo(()=>M7(Dr,h),[h]),m=w=>{t(w),n(0),l(null),o(null)},x=w=>{l(w),p(j=>({...j,total:j.total+1,right:j.right+(w===h.family?1:0)})),n(1)},A=w=>{o(w),n(2)};return a.jsxs("div",{children:[a.jsxs("div",{className:"row between",style:{marginBottom:12},children:[a.jsxs("span",{className:"eyebrow",style:{marginBottom:0},children:["Fallacy Detection · ",e+1,"/",Dr.length]}),a.jsxs("span",{className:"mono",style:{color:"var(--graphite-2)"},children:["答对 ",u.right,"/",u.total]})]}),a.jsxs("div",{className:"panel",style:{background:"var(--paper-3)"},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)"},children:"论述"}),a.jsx("p",{style:{fontFamily:"var(--font-serif)",fontSize:17,lineHeight:1.85,margin:0},children:h.example})]}),r===0&&a.jsxs("div",{className:"fade-in",style:{marginTop:18},children:[a.jsx("div",{className:"q-stem",style:{marginBottom:10},children:"第一步：这段论述的毛病属于哪一大类？"}),z7.map(w=>a.jsxs("button",{className:"opt",onClick:()=>x(w),children:[a.jsx("span",{className:"k",children:"·"}),a.jsx("span",{children:w})]},w))]}),r>=1&&a.jsxs("div",{className:"fade-in",style:{marginTop:18},children:[a.jsxs("div",{className:`verdict-band ${s===h.family?"ok":"bad"}`,children:[a.jsx("span",{className:"t",children:s===h.family?"分类正确":`分类有误：正确答案是「${h.family}」`}),h.family==="相干谬误"&&"前提与结论之间没有真正的支持关系，理由「不搭」。",h.family==="不当归纳谬误"&&"推理方式是归纳，但样本、类比或因果判断不成立。",h.family==="预设谬误"&&"结论或假定被偷偷塞进了前提里。",h.family==="含混谬误"&&"词义或整体/部分关系在中途被偷换。"]}),r===1&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"q-stem",style:{margin:"18px 0 10px"},children:"第二步：具体是哪一种谬误？"}),f.map(w=>a.jsxs("button",{className:"opt",onClick:()=>A(w.id),children:[a.jsx("span",{className:"k",children:"·"}),a.jsx("span",{children:w.name})]},w.id))]})]}),r>=2&&a.jsxs("div",{className:"fade-in",style:{marginTop:18},children:[a.jsxs("div",{className:`verdict-band ${i===h.id?"ok":"bad"}`,children:[a.jsx("span",{className:"t",children:i===h.id?"识别正确":`正确答案：${h.name}（${h.en}）`}),a.jsx(tn,{text:h.definition})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"结构还原"}),a.jsx("i",{})]}),a.jsx("div",{className:"formula-block",style:{textAlign:"left",fontSize:13.5,fontFamily:"var(--font-mono)",lineHeight:1.9,overflowX:"auto"},children:a.jsx(tn,{text:h.pattern})}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"错在哪"}),a.jsx("i",{})]}),a.jsx("p",{style:{fontSize:14,lineHeight:1.85,color:"var(--graphite)"},children:h.flaw}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"如何识别"}),a.jsx("i",{})]}),a.jsx("ol",{style:{fontSize:14,lineHeight:1.9,paddingLeft:20,color:"var(--graphite)"},children:h.spot.map((w,j)=>a.jsx("li",{children:w},j))}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"如何反驳"}),a.jsx("i",{})]}),a.jsx("ul",{style:{fontSize:14,lineHeight:1.9,paddingLeft:18,color:"var(--ink)"},children:h.rebut.map((w,j)=>a.jsx("li",{children:w},j))}),a.jsxs("div",{className:"row",style:{marginTop:18,gap:8},children:[a.jsx("button",{className:"btn sm",onClick:()=>m(e+1),children:"下一题"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>m(Math.floor(Math.random()*Dr.length)),children:"随机一题"})]})]})]})}const Ad=[{id:"i1",title:"三只白天鹅",source:"某个自然观察笔记",observations:["在本地公园连续三年观察到的天鹅都是白色的","查阅的旧图册里，欧洲天鹅也都是白色的","所有见过天鹅的朋友都说天鹅是白的"],claim:"所有天鹅都是白色的。",questions:[{q:"这个归纳的强度如何？",options:["很强：样本很多","弱：样本在物种与地域上高度同质","无法评价","完全无效，归纳都是错的"],answer:1,why:"观察再多，如果都来自同一地区、同一物种，就无法覆盖「所有天鹅」。黑天鹅的存在正说明样本范围决定了结论边界。"},{q:"要让结论更可靠，最该补充的是什么？",options:["再多观察一百只本地天鹅","到不同大陆、不同物种中取样","找更多朋友确认","把结论改成「天鹅很好看」"],answer:1,why:"归纳的强度取决于样本对总体的代表性，而不是单纯的数量。扩大取样范围比重复同质样本更有价值。"},{q:"如果真发现了黑天鹅，原结论应该怎么处理？",options:["结论被彻底推翻，说明归纳毫无价值","修正为「大多数天鹅是白色的」，并限定范围","忽略这个反例","说明那只不是天鹅"],answer:1,why:"单个反例推翻的是全称命题，不是归纳方法本身。合理的做法是降低强度、限定范围，这正是科学修正的方式。"}]},{id:"i2",title:"用户调研",source:"某 App 的站内问卷",observations:["回收问卷 3200 份，其中 91% 给出四星以上评价","问卷入口放在「帮助与反馈」页面","填写者可参与抽奖"],claim:"本 App 的用户满意度为 91%。",questions:[{q:"这个结论最大的问题是：",options:["样本量太小","抽样方式有偏：只有主动访问反馈页的人才可能填答","91% 这个数字算错了","没有问题"],answer:1,why:"3200 份不算少，但样本不是从全体用户中随机抽取的。满意的人更愿意填、想要抽奖的人更愿意填，都会系统性抬高结果。"},{q:"抽奖激励最可能带来什么影响？",options:["提高代表性","吸引与满意度无关的人填答，稀释结果","让答案更真实","没有影响"],answer:1,why:"为奖品而来的人可能随手打分，也可能为了中奖而给出好评。激励改变了「谁愿意回答」这个最关键的因素。"},{q:"要得到更可信的结论，可行做法是：",options:["把问卷入口放到更显眼的位置","随机抽样并追踪未回复者","提高奖品金额","只统计五星评价"],answer:1,why:"概率抽样 + 对未回复者的追踪，是处理无应答偏差的标准做法。仅改变入口位置仍无法解决自选择问题。"}]},{id:"i3",title:"两家门店",source:"某连锁零售的内部汇报",observations:["A 店更换了新陈列方案后，月销售增长 18%","同期 B 店未更换方案，销售增长 16%","两店所在商圈同期都有地铁新站开通"],claim:"新陈列方案带来了 18% 的销售增长。",questions:[{q:"这里缺少的关键信息是：",options:["A 店店长姓名","没有对照的净效应：A 店相对 B 店只多增长了 2%","陈列的颜色","顾客年龄"],answer:1,why:"A 店的增长包含商圈利好等共同因素。用 B 店作对照，方案本身的净效应约为 2 个百分点，而不是 18%。"},{q:"这个推理最接近哪种方法？",options:["求同法","求异法（有对照组的差异比较）","剩余法","简单枚举"],answer:1,why:"两店在其他方面尽量相似，唯一显著差异是陈列方案，这就是求异法的思路。但前提是「其他条件相同」真的成立。"},{q:"如果 A 店本来就在上升期，结论会怎样？",options:["不受影响","增长可能来自原有趋势，方案的作用被高估","结论反而更强","无法判断"],answer:1,why:"原有趋势是一个混杂变量。要排除它，需要更长时间的前后对比，或使用同店同比而非环比。"}]}];function T7(){const[e,t]=B.useState(0),[r,n]=B.useState({}),s=Ad[e];return a.jsxs("div",{children:[a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginBottom:14},children:Ad.map((l,i)=>a.jsxs("button",{className:`chip ${i===e?"on":""}`,onClick:()=>{t(i),n({})},children:["案例 ",i+1]},l.id))}),a.jsx("span",{className:"eyebrow",children:s.source}),a.jsx("h3",{style:{fontFamily:"var(--font-serif)",fontSize:18,marginBottom:12},children:s.title}),a.jsxs("div",{className:"panel",style:{marginBottom:14},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)"},children:"观察到的证据"}),a.jsx("ul",{style:{margin:0,paddingLeft:18,fontSize:14,lineHeight:1.9},children:s.observations.map((l,i)=>a.jsx("li",{children:l},i))})]}),a.jsxs("div",{className:"verdict-band",style:{borderLeftColor:"var(--accent)"},children:[a.jsx("span",{className:"t",children:"由此得出的结论"}),s.claim]}),a.jsx("div",{style:{marginTop:20},children:s.questions.map((l,i)=>{const o=r[i],u=o!==void 0;return a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",padding:"16px 0"},children:[a.jsxs("div",{className:"row",style:{gap:8,marginBottom:10},children:[a.jsx("span",{className:"q-num",children:String(i+1).padStart(2,"0")}),a.jsx("div",{style:{fontSize:14.5,fontWeight:500,lineHeight:1.7},children:l.q})]}),l.options.map((p,h)=>{const f=u?h===l.answer?"opt right":h===o?"opt wrong":"opt":"opt";return a.jsxs("button",{className:f,onClick:()=>!u&&n({...r,[i]:h}),children:[a.jsx("span",{className:"k",children:"ABCD"[h]}),a.jsx("span",{children:p})]},h)}),u&&a.jsxs("div",{className:"answer-box",style:{marginTop:8},children:[a.jsx("span",{className:`verdict ${o===l.answer?"ok":"bad"}`,children:o===l.answer?"✓ 正确":"✗ 再想想"}),l.why]})]},i)})}),Object.keys(r).length===s.questions.length&&a.jsxs("div",{className:"note",style:{marginTop:8},children:[a.jsx("span",{className:"note-h",children:"小结"}),"归纳结论不是「对或错」，而是「有多强」。评价一个归纳，问三件事：样本对总体有代表性吗？有没有其他同样合理的解释？结论的强度是否超出了证据允许的范围？"]})]})}const Ca=[{id:"c1",title:"冰淇淋与溺水",a:"冰淇淋销量",b:"溺水人数",c:"气温",text:"某地统计显示：冰淇淋销量越高的月份，溺水人数也越多。有人据此建议限制冰淇淋销售以减少溺水。",answer:"common",explain:"两者都由「气温」驱动：天热吃冰淇淋多，天热游泳的人也多。限制冰淇淋不会减少溺水。这是共同原因（混杂因素）的典型例子。",hint:"找一找，有没有第三个变量同时影响两者？"},{id:"c2",title:"程序员与代码量",a:"程序员人数",b:"代码提交量",text:"某公司发现，团队人数增加的月份，代码提交量也增加，于是认为「多招人必然提高产出」。",answer:"direct",explain:"这里确实存在直接因果：更多人写代码，提交量自然上升。但要注意，「代码量」不等于「有效产出」——这个指标本身是否衡量价值，是另一个问题。",hint:"这个关系有明确的机制吗？"},{id:"c3",title:"房价与租金",a:"房价",b:"租金",text:"某城市房价上涨的同时租金也在上涨，有分析称「房价上涨推高了租金」。",answer:"common",explain:"更常见的解释是人口流入与收入增长同时推高了房价与租金。若要支持原说法，需要证明房价上涨独立于需求因素。",hint:"除了 A 推 B，还有没有可能是 B 推 A，或者两者都由 C 推动？"},{id:"c4",title:"医院与死亡率",a:"病情严重程度",b:"死亡概率",text:"统计发现，某医院收治病人越多，死亡人数越多，有人据此认为「这家医院水平差」。",answer:"common",explain:"重症患者更可能被送到大医院，病情严重程度同时影响「是否被收治」与「是否死亡」。这正是混杂变量造成的假象，也叫入院率偏倚。",hint:"谁被送进这家医院？这个筛选过程本身会不会影响结果？"},{id:"c5",title:"咖啡与长寿",a:"喝咖啡",b:"寿命",c:"收入与医疗条件",text:"一项观察性研究发现，经常喝咖啡的人平均寿命更长。",answer:"common",explain:"收入较高、医疗条件较好的人群更可能经常消费咖啡，而这些因素本身影响寿命。观察性研究能确立相关，要确立因果还需随机对照试验或更强的自然实验。",hint:"喝咖啡的人群和整体人群，在其他方面一样吗？"},{id:"c6",title:"摄像头与犯罪率",a:"摄像头数量",b:"报案犯罪率",text:"某区安装大量监控后，记录的犯罪率下降，官方称监控有效遏制了犯罪。",answer:"none",explain:"这里至少三种可能同时存在：监控确实有威慑作用；部分犯罪转移到别的区域；以及「记录」本身变化——有些案件改由线下调解，不再进入统计。仅凭时间先后不能定论。",hint:"注意结论用的是「记录的犯罪率」，记录方式变了会怎样？"}],qa={direct:"直接因果：A → B",reverse:"反向因果：B → A",common:"共同原因：C → A 且 C → B",none:"不足以断定因果"};function D7(){const[e,t]=B.useState(0),[r,n]=B.useState(null),s=Ca[e];return a.jsxs("div",{children:[a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginBottom:14},children:Ca.map((l,i)=>a.jsx("button",{className:`chip ${i===e?"on":""}`,onClick:()=>{t(i),n(null)},children:i+1},l.id))}),a.jsxs("span",{className:"eyebrow",children:["Causal Analysis · 案例 ",e+1]}),a.jsx("h3",{style:{fontFamily:"var(--font-serif)",fontSize:18,marginBottom:10},children:s.title}),a.jsx("p",{style:{fontSize:14.5,lineHeight:1.85,color:"var(--graphite)"},children:s.text}),a.jsxs("div",{className:"row",style:{gap:10,margin:"16px 0",alignItems:"center",justifyContent:"center"},children:[a.jsx("span",{className:"chip",children:s.a}),a.jsx("span",{style:{color:"var(--graphite-2)"},children:"?"}),a.jsx("span",{className:"chip",children:s.b})]}),a.jsx("div",{className:"q-stem",style:{marginBottom:10},children:"你认为这两个变量之间是什么关系？"}),Object.keys(qa).map(l=>{const i=r!==null,o=i?l===s.answer?"opt right":l===r?"opt wrong":"opt":"opt";return a.jsxs("button",{className:o,onClick:()=>!i&&n(l),children:[a.jsx("span",{className:"k",children:"·"}),a.jsx("span",{children:qa[l]})]},l)}),r&&a.jsxs("div",{className:"fade-in",style:{marginTop:14},children:[a.jsxs("div",{className:`verdict-band ${r===s.answer?"ok":"bad"}`,children:[a.jsx("span",{className:"t",children:r===s.answer?"判断正确":`正确答案：${qa[s.answer]}`}),s.explain]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"因果图"}),a.jsx("i",{})]}),a.jsx(I7,{kind:s.answer,a:s.a,b:s.b,c:s.c??"第三变量"}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:6},children:"实线箭头表示「影响」，虚线表示「仅观察到相关」。图中画的是这个案例的正确解释结构。"}),a.jsxs("div",{className:"note",style:{marginTop:14},children:[a.jsx("span",{className:"note-h",children:"思考提示"}),s.hint]}),a.jsx("button",{className:"btn sm",style:{marginTop:16},onClick:()=>{t((e+1)%Ca.length),n(null)},children:"下一个案例"})]})]})}function I7({kind:e,a:t,b:r,c:n}){const i={x:58,y:92},o={x:282,y:92},u={x:170,y:32},p=(h,f,m,x=96)=>a.jsxs("g",{children:[a.jsx("rect",{x:h-x/2,y:f-15,width:x,height:30,rx:1,fill:"var(--paper-2)",stroke:"var(--ink)",strokeWidth:.9}),a.jsx("text",{x:h,y:f+4,textAnchor:"middle",fontSize:"11",fill:"var(--ink)",fontFamily:"var(--font-ui)",children:m.length>7?m.slice(0,7)+"…":m})]});return a.jsxs("svg",{viewBox:"0 0 340 150",style:{width:"100%",maxWidth:380,display:"block",margin:"0 auto"},children:[a.jsx("defs",{children:a.jsx("marker",{id:"ah",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",orient:"auto",children:a.jsx("path",{d:"M0,0 L7,3.5 L0,7 z",fill:"var(--ink)"})})}),e==="direct"&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:i.x+50,y1:i.y,x2:o.x-52,y2:o.y,stroke:"var(--ink)",strokeWidth:"1.1",markerEnd:"url(#ah)"}),p(i.x,i.y,t),p(o.x,o.y,r)]}),e==="reverse"&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:o.x-52,y1:o.y,x2:i.x+50,y2:i.y,stroke:"var(--ink)",strokeWidth:"1.1",markerEnd:"url(#ah)"}),p(i.x,i.y,t),p(o.x,o.y,r)]}),e==="common"&&a.jsxs(a.Fragment,{children:[p(u.x,u.y,n,118),a.jsx("path",{d:`M${u.x-40} ${u.y+15} L${i.x+10} ${i.y-16}`,stroke:"var(--ink)",strokeWidth:"1.1",markerEnd:"url(#ah)",fill:"none"}),a.jsx("path",{d:`M${u.x+40} ${u.y+15} L${o.x-10} ${o.y-16}`,stroke:"var(--ink)",strokeWidth:"1.1",markerEnd:"url(#ah)",fill:"none"}),p(i.x,i.y,t),p(o.x,o.y,r)]}),e==="none"&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:i.x+50,y1:i.y,x2:o.x-52,y2:o.y,stroke:"var(--graphite-2)",strokeWidth:"1.1",strokeDasharray:"5 4"}),p(i.x,i.y,t),p(o.x,o.y,r),a.jsx("text",{x:340/2,y:i.y-26,textAnchor:"middle",fontSize:"10",fill:"var(--graphite-2)",letterSpacing:"1",children:"相关 ≠ 因果"})]})]})}const zr={MP:{name:"肯定前件式",form:"p → q ，p  ∴ q",group:"推论"},MT:{name:"否定后件式",form:"p → q ，¬q  ∴ ¬p",group:"推论"},DS:{name:"选言三段论",form:"p ∨ q ，¬p  ∴ q",group:"推论"},HS:{name:"假言三段论",form:"p → q ，q → r  ∴ p → r",group:"推论"},Simp:{name:"简化律",form:"p ∧ q  ∴ p（或 q）",group:"推论"},Conj:{name:"合取律",form:"p ，q  ∴ p ∧ q",group:"推论"},Add:{name:"附加律",form:"p  ∴ p ∨ q",group:"推论"},CD:{name:"构造性二难",form:"(p → q) ∧ (r → s) ，p ∨ r  ∴ q ∨ s",group:"推论"},DD:{name:"破坏性二难",form:"p ∨ q ，p → r ，q → s  ∴ r ∨ s",group:"推论"},DeM:{name:"德摩根律",form:"¬(p ∧ q) :: ¬p ∨ ¬q ；¬(p ∨ q) :: ¬p ∧ ¬q",group:"替换"},Comm:{name:"交换律",form:"p ∧ q :: q ∧ p ；p ∨ q :: q ∨ p",group:"替换"},Assoc:{name:"结合律",form:"(p ∧ q) ∧ r :: p ∧ (q ∧ r)",group:"替换"},Dist:{name:"分配律",form:"p ∧ (q ∨ r) :: (p ∧ q) ∨ (p ∧ r)",group:"替换"},DN:{name:"双重否定",form:"p :: ¬¬p",group:"替换"},Contra:{name:"假言易位",form:"p → q :: ¬q → ¬p",group:"替换"},Impl:{name:"蕴涵定义",form:"p → q :: ¬p ∨ q",group:"替换"},Equiv:{name:"等值定义",form:"p ↔ q :: (p → q) ∧ (q → p)",group:"替换"},Export:{name:"输出律",form:"(p ∧ q) → r :: p → (q → r)",group:"替换"},Taut:{name:"重言律",form:"p :: p ∨ p ；p :: p ∧ p",group:"替换"},CP:{name:"条件证明",form:"假定 p，推出 q，则得 p → q",group:"证明"},IP:{name:"间接证明",form:"假定 ¬p，推出矛盾，则得 p",group:"证明"}},Ea=e=>({t:"var",n:e}),be=e=>({t:"not",a:e}),te=(e,t)=>({t:"and",a:e,b:t}),ue=(e,t)=>({t:"or",a:e,b:t}),Ve=(e,t)=>({t:"imp",a:e,b:t}),t0=(e,t)=>({t:"iff",a:e,b:t});function R7(e){const t=Ea("p"),r=Ea("q"),n=Ea("r");switch(e){case"DeM":return[[be(te(t,r)),ue(be(t),be(r))],[be(ue(t,r)),te(be(t),be(r))]];case"Comm":return[[te(t,r),te(r,t)],[ue(t,r),ue(r,t)]];case"Assoc":return[[te(te(t,r),n),te(t,te(r,n))],[te(t,te(r,n)),te(te(t,r),n)],[ue(ue(t,r),n),ue(t,ue(r,n))],[ue(t,ue(r,n)),ue(ue(t,r),n)]];case"Dist":return[[te(t,ue(r,n)),ue(te(t,r),te(t,n))],[ue(te(t,r),te(t,n)),te(t,ue(r,n))],[ue(t,te(r,n)),te(ue(t,r),ue(t,n))],[te(ue(t,r),ue(t,n)),ue(t,te(r,n))]];case"DN":return[[t,be(be(t))],[be(be(t)),t]];case"Contra":return[[Ve(t,r),Ve(be(r),be(t))],[Ve(be(r),be(t)),Ve(t,r)]];case"Impl":return[[Ve(t,r),ue(be(t),r)],[ue(be(t),r),Ve(t,r)]];case"Equiv":return[[t0(t,r),te(Ve(t,r),Ve(r,t))],[te(Ve(t,r),Ve(r,t)),t0(t,r)],[t0(t,r),ue(te(t,r),te(be(t),be(r)))],[ue(te(t,r),te(be(t),be(r))),t0(t,r)]];case"Export":return[[Ve(te(t,r),n),Ve(t,Ve(r,n))],[Ve(t,Ve(r,n)),Ve(te(t,r),n)]];case"Taut":return[[t,ue(t,t)],[ue(t,t),t],[t,te(t,t)],[te(t,t),t]];default:return[]}}function x0(e,t,r){if(e.t==="var"){const n=r.get(e.n);return n?J(n,t):(r.set(e.n,t),!0)}return e.t==="not"&&t.t==="not"?x0(e.a,t.a,r):(e.t==="and"||e.t==="or"||e.t==="imp"||e.t==="iff")&&e.t===t.t&&(t.t==="and"||t.t==="or"||t.t==="imp"||t.t==="iff")?x0(e.a,t.a,r)&&x0(e.b,t.b,r):!1}function y0(e,t){if(e.t==="var")return t.get(e.n)??e;if(e.t==="not")return be(y0(e.a,t));const r=y0(e.a,t),n=y0(e.b,t);return{t:e.t,a:r,b:n}}function O7(e,t,r){const n=new Map;return x0(t,e,n)?y0(r,n):null}function Pd(e,t,r){const n=[],s=i=>{const o=O7(i,t,r),u=[];if(o&&u.push(o),i.t==="not")for(const p of s(i.a))u.push(be(p));else if(i.t==="and"||i.t==="or"||i.t==="imp"||i.t==="iff"){for(const p of s(i.a))u.push({t:i.t,a:p,b:i.b});for(const p of s(i.b))u.push({t:i.t,a:i.a,b:p})}return u},l=s(e);return n.push(...l),n}function L7(e,t,r){if(e==="CP"){if(t.length!==2)return{ok:!1,msg:"条件证明需引用两行：假定行与推出行。"};const[s,l]=t;return r.t==="imp"&&J(r.a,s)&&J(r.b,l)?{ok:!0,msg:"条件证明成立：由假定推出后件，可得条件命题。"}:{ok:!1,msg:"条件证明要求结论为「假定 → 最后一行」，且前件与假定行完全一致。"}}if(e==="IP"){if(t.length!==2)return{ok:!1,msg:"间接证明需引用两行：假定行与矛盾行。"};const[s,l]=t;return((o,u)=>o.t==="not"&&J(o.a,u)||u.t==="not"&&J(u.a,o))(s,r)?F7(l)?{ok:!0,msg:"间接证明成立：由假定推出矛盾，故假定为假。"}:{ok:!1,msg:"所引用的行不是矛盾式（形如 X ∧ ¬X）。"}:{ok:!1,msg:"间接证明的结论必须是假定式的否定（假定 ¬p 得 p，或假定 p 得 ¬p）。"}}if(zr[e].group==="替换"){const s=R7(e);for(const l of t)for(const[i,o]of s){for(const u of Pd(l,i,o))if(J(u,r))return{ok:!0,msg:"替换正确：仅在引用的那一行内部做了等值替换。"};for(const u of Pd(l,o,i))if(J(u,r))return{ok:!0,msg:"替换正确（反向使用等值式）。"}}return{ok:!1,msg:`无法用${zr[e].name}从所引用的行得到该式。替换规则只能整段替换匹配的子公式，命题变项要一致。`}}const n=t;switch(e){case"MP":for(const s of n)for(const l of n)if(s!==l&&s.t==="imp"&&J(s.a,l)&&J(s.b,r))return{ok:!0,msg:"肯定前件式成立。"};return{ok:!1,msg:"需要一行形如「p → q」，另一行正好是 p，结论为 q。"};case"MT":for(const s of n)for(const l of n)if(s!==l&&s.t==="imp"&&l.t==="not"&&J(s.b,l.a)&&r.t==="not"&&J(r.a,s.a))return{ok:!0,msg:"否定后件式成立。"};return{ok:!1,msg:"需要「p → q」与「¬q」，结论为「¬p」。"};case"DS":for(const s of n)for(const l of n)if(s!==l&&s.t==="or"&&l.t==="not"){if(J(l.a,s.a)&&J(r,s.b))return{ok:!0,msg:"选言三段论成立。"};if(J(l.a,s.b)&&J(r,s.a))return{ok:!0,msg:"选言三段论成立。"}}return{ok:!1,msg:"需要「p ∨ q」与其中一个支的否定，结论为另一个支。"};case"HS":for(const s of n)for(const l of n)if(s!==l&&s.t==="imp"&&l.t==="imp"&&J(s.b,l.a)&&r.t==="imp"&&J(r.a,s.a)&&J(r.b,l.b))return{ok:!0,msg:"假言三段论成立。"};return{ok:!1,msg:"需要「p → q」与「q → r」，结论为「p → r」。"};case"Simp":for(const s of n)if(s.t==="and"&&(J(s.a,r)||J(s.b,r)))return{ok:!0,msg:"简化律成立。"};return{ok:!1,msg:"只能从合取式取出其中一个合取支。"};case"Conj":for(const s of n)for(const l of n)if(s!==l&&J(r,te(s,l)))return{ok:!0,msg:"合取律成立。"};return{ok:!1,msg:"需要两条已得公式，结论为二者的合取。"};case"Add":for(const s of n)if(r.t==="or"&&(J(s,r.a)||J(s,r.b)))return{ok:!0,msg:"附加律成立。"};return{ok:!1,msg:"附加律要求结论是「已得公式 ∨ 任意公式」。"};case"CD":{const s=[];let l=null;for(const i of n)i.t==="and"?(Jl(i.a)&&s.push(i.a),Jl(i.b)&&s.push(i.b)):Jl(i)?s.push(i):wd(i)&&(l=i);if(s.length>=2&&l&&r.t==="or"){for(const i of s)for(const o of s)if(i!==o&&J(l.a,i.a)&&J(l.b,o.a)&&J(r.a,i.b)&&J(r.b,o.b))return{ok:!0,msg:"构造性二难成立。"}}return{ok:!1,msg:"构造性二难需要两个条件命题与一个由两前件构成的析取，结论为由两后件构成的析取。"}}case"DD":{let s=null;const l=[];for(const i of n)wd(i)&&(s=i),Jl(i)&&l.push(i);if(s&&l.length>=2&&r.t==="or"){for(const i of l)for(const o of l)if(i!==o&&J(i.a,s.a)&&J(o.a,s.b)&&J(r.a,i.b)&&J(r.b,o.b))return{ok:!0,msg:"破坏性二难成立。"}}return{ok:!1,msg:"破坏性二难需要一个析取与两个分别指向其两支的条件命题。"}}}return{ok:!1,msg:"该规则暂不支持自动检验。"}}function F7(e){return e.t!=="and"?!1:!!(e.a.t==="not"&&J(e.a.a,e.b)||e.b.t==="not"&&J(e.b.a,e.a))}const r0=[{id:"p1",title:"假言链条",premises:["P → Q","Q → R","P"],goal:"R",hint:"先用两次假言三段论把条件接起来，再用肯定前件式。",solution:["4. P → R　　HS（1,2）","5. R　　　　MP（4,3）"]},{id:"p2",title:"否定后件",premises:["P → Q","¬Q"],goal:"¬P",hint:"只有一条路，直接套否定后件式。",solution:["3. ¬P　　MT（1,2）"]},{id:"p3",title:"两条路都通向同一处",premises:["P ∨ Q","P → R","Q → R"],goal:"R",hint:"先合取两个条件，再用构造性二难得到 R ∨ R，最后用重言律化简。",solution:["4. (P → R) ∧ (Q → R)　　Conj（2,3）","5. R ∨ R　　　　　　　　CD（4,1）","6. R　　　　　　　　　　Taut（5）"]},{id:"p4",title:"先合取再分离",premises:["(P ∧ Q) → R","P","Q"],goal:"R",hint:"把两个孤立的前提合成一个合取式，条件的前件就齐了。",solution:["4. P ∧ Q　　Conj（2,3）","5. R　　　　MP（1,4）"]},{id:"p5",title:"条件证明",premises:["P → Q","Q → R"],goal:"P → R",hint:"假定 P，用两次 MP 得到 R，再用 CP 解除假定。",solution:["3. P　　　　　ACP（假定）","4. Q　　　　　MP（1,3）","5. R　　　　　MP（2,4）","6. P → R　　　CP（3–5）"]}],jd=["MP","MT","DS","HS","Simp","Conj","Add","CD","DD","DeM","Comm","Assoc","Dist","DN","Contra","Impl","Equiv","Export","Taut","CP","IP"];function H7(){const[e,t]=B.useState(0),[r,n]=B.useState(()=>Cd(r0[0])),[s,l]=B.useState(""),[i,o]=B.useState("MP"),[u,p]=B.useState(""),[h,f]=B.useState(null),[m,x]=B.useState(!1),A=B.useRef(null),w=r0[e],j=B.useMemo(()=>{try{return pr(w.goal)}catch{return null}},[w.goal]),$=r.length>0&&j&&J(r[r.length-1].ast,j),y=C=>{t(C),n(Cd(r0[C])),l(""),p(""),f(null),x(!1)},b=C=>{const E=A.current;if(!E){l(s+C);return}const z=E.selectionStart??s.length,N=E.selectionEnd??z,Q=s.slice(0,z)+C+s.slice(N);l(Q),requestAnimationFrame(()=>{E.focus(),E.setSelectionRange(z+C.length,z+C.length)})},q=()=>{if(!s.trim()){f({ok:!1,text:"先写下这一行的公式。"});return}let C;try{C=pr(s)}catch(U){f({ok:!1,text:`公式无法解析：${U.message}`});return}const E=u.split(/[,，\s]+/).filter(Boolean).map(Number).filter(U=>!Number.isNaN(U)),z=E.map(U=>r.find(le=>le.n===U)).filter(Boolean);if(E.length!==z.length){f({ok:!1,text:"引用了不存在的行号。"});return}if(i!=="CP"&&i!=="IP"&&z.length===0){f({ok:!1,text:"这一步需要引用至少一行已得公式。"});return}const N=L7(i,z.map(U=>U.ast),C);if(!N.ok){f({ok:!1,text:N.msg});return}const Q={n:r.length+1,text:Wo(C),ast:C,rule:i,refs:E,ok:!0};n([...r,Q]),l(""),p(""),f({ok:!0,text:`${zr[i].name} 使用正确。`})};return a.jsxs("div",{children:[a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:6,marginBottom:14},children:r0.map((C,E)=>a.jsxs("button",{className:`chip ${E===e?"on":""}`,onClick:()=>y(E),children:[E+1,". ",C.title]},C.id))}),a.jsxs("div",{className:"panel",style:{background:"var(--paper-3)"},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)"},children:"要证明的论证"}),a.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:13.5,lineHeight:2},children:[w.premises.map((C,E)=>a.jsxs("div",{children:[E+1,". ",a.jsx(xn,{tex:rs(pr(C))})]},E)),a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",marginTop:6,paddingTop:6,color:"var(--accent)"},children:["目标 ∴ ",a.jsx(xn,{tex:rs(pr(w.goal))})]})]})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"证明过程"}),a.jsx("i",{})]}),a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:34},children:"行"}),a.jsx("th",{children:"公式"}),a.jsx("th",{style:{width:92},children:"规则"}),a.jsx("th",{style:{width:62},children:"引用"})]})}),a.jsx("tbody",{children:r.map(C=>a.jsxs("tr",{className:j&&J(C.ast,j)?"tt-row-hi":"",children:[a.jsx("td",{style:{color:"var(--graphite-2)"},children:C.n}),a.jsx("td",{style:{whiteSpace:"normal"},children:a.jsx(xn,{tex:rs(C.ast)})}),a.jsx("td",{style:{fontSize:11.5,color:"var(--graphite)"},children:C.rule}),a.jsx("td",{style:{fontSize:11.5,color:"var(--graphite-2)"},children:C.refs.join(",")||"—"})]},C.n))})]})}),$?a.jsxs("div",{className:"verdict-band ok",style:{marginTop:14},children:[a.jsx("span",{className:"t",children:"证明完成"}),"你已经从前提推出了目标公式。每一步都经过规则检验，不存在跳步。"]}):a.jsxs("div",{style:{marginTop:16},children:[a.jsxs("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)"},children:["新的一行（第 ",r.length+1," 行）"]}),a.jsx("input",{ref:A,className:"input",value:s,onChange:C=>l(C.target.value),placeholder:"例如 P → R",spellCheck:!1,style:{fontFamily:"var(--font-mono)",marginTop:6}}),a.jsx("div",{className:"symbar",children:["¬","∧","∨","→","↔","(",")","P","Q","R"].map(C=>a.jsx("button",{onClick:()=>b(C),children:C},C))}),a.jsxs("div",{className:"row",style:{gap:8,marginTop:12,flexWrap:"wrap"},children:[a.jsx("select",{className:"input",value:i,onChange:C=>o(C.target.value),style:{flex:2,minWidth:150,fontSize:13},children:jd.map(C=>a.jsxs("option",{value:C,children:[C," · ",zr[C].name]},C))}),a.jsx("input",{className:"input",value:u,onChange:C=>p(C.target.value),placeholder:"引用行号，如 1,2",style:{flex:1,minWidth:100,fontSize:13}})]}),a.jsxs("p",{style:{fontSize:11.5,color:"var(--graphite-2)",margin:"8px 0 0",lineHeight:1.7},children:[zr[i].name,"：",zr[i].form]}),a.jsxs("div",{className:"row",style:{marginTop:12,gap:8},children:[a.jsx("button",{className:"btn sm",onClick:q,children:"检验并添加"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>{r.length>w.premises.length&&n(r.slice(0,-1)),f(null)},children:"撤销上一步"})]}),h&&a.jsxs("div",{className:`verdict-band ${h.ok?"ok":"bad"}`,style:{marginTop:12},children:[a.jsx("span",{className:"t",children:h.ok?"通过":"这一步不成立"}),h.text]})]}),a.jsxs("div",{className:"note",style:{marginTop:20},children:[a.jsx("span",{className:"note-h",children:"提示"}),w.hint]}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:10},onClick:()=>x(!m),children:m?"收起参考解法":"看参考解法"}),m&&a.jsx("div",{className:"formula-block",style:{marginTop:10,textAlign:"left",fontSize:13,lineHeight:2},children:w.solution.map((C,E)=>a.jsx("div",{children:C},E))}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"规则速查"}),a.jsx("i",{})]}),a.jsx("div",{className:"table-wrap",children:a.jsxs("table",{className:"data",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:60},children:"规则"}),a.jsx("th",{children:"形式"})]})}),a.jsx("tbody",{children:jd.map(C=>a.jsxs("tr",{children:[a.jsx("td",{style:{fontFamily:"var(--font-mono)",fontSize:11.5},children:C}),a.jsxs("td",{style:{whiteSpace:"normal",fontSize:12,color:"var(--graphite)"},children:[zr[C].name,"：",zr[C].form]})]},C))})]})})]})}function Cd(e){return e.premises.map((t,r)=>({n:r+1,text:t,ast:pr(t),rule:"前提",refs:[],ok:!0}))}const qd=[{id:"tt",label:"真值表",el:a.jsx($7,{})},{id:"syl",label:"三段论",el:a.jsx(q7,{})},{id:"arg",label:"论证拆解",el:a.jsx(B7,{})},{id:"fal",label:"谬误识别",el:a.jsx(N7,{})},{id:"ind",label:"归纳训练",el:a.jsx(T7,{})},{id:"cau",label:"因果分析",el:a.jsx(D7,{})},{id:"prf",label:"逻辑证明",el:a.jsx(H7,{})}];function _7(){const[e,t]=B.useState("tt"),r=qd.find(n=>n.id===e);return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18,paddingBottom:14},children:[a.jsx("span",{className:"eyebrow",children:"The Laboratory"}),a.jsx("h1",{style:{fontSize:25},children:"逻辑实验室"}),a.jsx("p",{className:"lede",style:{fontSize:13.5},children:"七个可以真正动手的工具。算出来的结果比背下来的规则更牢。"})]}),a.jsx("div",{className:"tabs",children:qd.map(n=>a.jsx("button",{className:e===n.id?"on":"",onClick:()=>t(n.id),children:n.label},n.id))}),a.jsx("div",{style:{paddingTop:18},children:r.el})]})}function Q7(){const e=gs(),t=tr(),[r,n]=B.useState("todo"),[s,l]=B.useState(0),[i,o]=B.useState(null),u=B.useMemo(()=>Object.values(e.mistakes).filter(m=>r==="todo"?!m.mastered:r==="done"?m.mastered:m.favorite).map(m=>({m,ref:Z3[m.qid]})).filter(m=>!!m.ref).filter(m=>s===0||m.ref.lesson.stage===s).sort((m,x)=>x.m.lastWrongAt-m.m.lastWrongAt),[e.mistakes,r,s]),p=Object.values(e.mistakes).length,h=Object.values(e.mistakes).filter(m=>m.mastered).length,f=Object.values(e.mistakes).filter(m=>m.favorite).length;return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("span",{className:"eyebrow",children:"Error Notebook"}),a.jsx("h1",{children:"错题本"}),a.jsxs("p",{className:"lede",style:{fontSize:13.5},children:["答错自动收录，重做答对自动移出。共 ",p," 道，已掌握 ",h," 道。"]})]}),a.jsxs("div",{className:"tabs",style:{marginTop:6},children:[a.jsxs("button",{className:r==="todo"?"on":"",onClick:()=>{n("todo"),o(null)},children:["待复习 ",p-h]}),a.jsxs("button",{className:r==="done"?"on":"",onClick:()=>{n("done"),o(null)},children:["已掌握 ",h]}),a.jsxs("button",{className:r==="fav"?"on":"",onClick:()=>{n("fav"),o(null)},children:["收藏 ",f]})]}),a.jsxs("div",{className:"chip-scroll",style:{marginTop:12},children:[a.jsx("button",{className:`chip ${s===0?"on":""}`,onClick:()=>l(0),children:"全部阶段"}),mr.map(m=>a.jsx("button",{className:`chip ${s===m.id?"on":""}`,onClick:()=>l(m.id),children:m.title},m.id))]}),u.length===0?a.jsxs("div",{className:"empty",children:[a.jsx("b",{children:r==="todo"?"没有待复习的错题":r==="done"?"还没有已掌握的错题":"还没有收藏的题目"}),r==="todo"?"做课程里的章节测试，答错的题会自动出现在这里。":"在题目解析处可以收藏值得反复看的题。",a.jsx("div",{style:{marginTop:16},children:a.jsx("button",{className:"btn ghost sm",onClick:()=>t("/courses"),children:"去课程"})})]}):a.jsx("div",{style:{marginTop:8},children:u.map(({m,ref:x})=>{const A=i===m.qid;return a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",paddingTop:16},children:[a.jsxs("div",{className:"row between",style:{alignItems:"baseline",marginBottom:8},children:[a.jsxs("button",{onClick:()=>t(`/lesson/${x.lesson.id}`),style:{fontSize:11,letterSpacing:".1em",color:"var(--graphite-2)"},children:[x.lesson.chapter," · 第 ",x.lesson.no," 课 ",x.lesson.title]}),a.jsxs("span",{className:"mono",style:{fontSize:10.5,color:m.wrongCount>1?"var(--bad)":"var(--graphite-2)"},children:["错 ",m.wrongCount," 次"]})]}),a.jsx("div",{style:{fontSize:14.5,lineHeight:1.8,marginBottom:10},children:a.jsx(tn,{text:x.quiz.stem})}),A?a.jsx(n4,{q:x.quiz,index:0,lessonId:x.lesson.id,onAnswered:w=>{w&&Ye.markMastered(m.qid,x.lesson.id)}}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"answer-box",children:[a.jsxs("div",{children:[a.jsx("b",{children:"正确答案："}),x.quiz.type==="judge"?x.quiz.answer?"正确":"错误":x.quiz.type==="short"?String(x.quiz.answer??"（见解析）"):(Array.isArray(x.quiz.answer)?x.quiz.answer:[String(x.quiz.answer??"")]).map(w=>(x.quiz.options??[])[w.charCodeAt(0)-65]??w).join("；")]}),a.jsxs("div",{style:{marginTop:6},children:[a.jsx("b",{children:"解析："}),a.jsx(tn,{text:x.quiz.explanation})]})]}),a.jsxs("div",{className:"row",style:{gap:8,marginTop:10,flexWrap:"wrap"},children:[a.jsx("button",{className:"btn sm",onClick:()=>o(m.qid),children:"重做"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>Ye.toggleFavorite(m.qid,x.lesson.id),children:m.favorite?"★ 取消收藏":"☆ 收藏"}),!m.mastered&&a.jsx("button",{className:"btn ghost sm",onClick:()=>Ye.markMastered(m.qid,x.lesson.id),children:"标记已掌握"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>Ye.removeMistake(m.qid),children:"移出"})]})]})]},m.qid)})}),a.jsxs("div",{className:"note",style:{marginTop:26},children:[a.jsx("span",{className:"note-h",children:"复习建议"}),"错题按「错误次数」排序，反复错的那几道才是真正的薄弱点。同一类错误连错三次，回到对应课程重读那一节，比刷十道新题有效。"]})]})}function U7(){const e=gs(),t=tr(),[r,n]=B.useState(!1),s=Object.values(e.days).filter(h=>h.sec>=60||h.lessons>0||h.quiz>0).length,l=Object.values(e.answers),i=l.length?Math.round(l.filter(h=>h.correct).length/l.length*100):0,o=yt.filter(h=>{var f;return(f=e.lessons[h.id])==null?void 0:f.done}),u=e.favorites.map(h=>yt.find(f=>f.id===h)).filter(Boolean),p=()=>{const h=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),f=document.createElement("a");f.href=URL.createObjectURL(h),f.download=`logiclab-backup-${new Date().toISOString().slice(0,10)}.json`,f.click(),URL.revokeObjectURL(f.href)};return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("span",{className:"eyebrow",children:"Archive"}),a.jsx("h1",{children:"我的"}),a.jsx("p",{className:"lede",style:{fontSize:13.5},children:"所有数据只存在这台设备的浏览器里，不上传、不需要账号。"})]}),a.jsxs("div",{className:"stat-grid",style:{marginTop:20},children:[a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[s,a.jsx("small",{children:"天"})]}),a.jsx("em",{children:"学习天数"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[sm(e),a.jsx("small",{children:"天"})]}),a.jsx("em",{children:"当前连续"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("b",{children:r5(lm(e)).replace(" ","")}),a.jsx("em",{children:"累计时长"})]})]}),a.jsxs("div",{className:"stat-grid",style:{borderTop:"none"},children:[a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[o.length,a.jsxs("small",{children:["/",Ws]})]}),a.jsx("em",{children:"完成课程"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("b",{children:l.length}),a.jsx("em",{children:"累计答题"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("b",{children:[i,a.jsx("small",{children:"%"})]}),a.jsx("em",{children:"正确率"})]})]}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"各阶段进度"}),a.jsx("i",{})]}),mr.map(h=>{const f=h.lessons.filter(x=>{var A;return(A=e.lessons[x.id])==null?void 0:A.done}).length,m=h.lessons.length?Math.round(f/h.lessons.length*100):0;return a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("div",{className:"row between",style:{marginBottom:5},children:[a.jsx("span",{style:{fontSize:13},children:h.title}),a.jsxs("span",{className:"mono",style:{fontSize:10.5,color:"var(--graphite-2)"},children:[f,"/",h.lessons.length]})]}),a.jsx("div",{className:"bar",children:a.jsx("i",{style:{width:`${m}%`,background:m===100?"var(--ok)":void 0}})})]},h.id)}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"收藏的课程"}),a.jsx("i",{})]}),u.length===0?a.jsx("p",{style:{fontSize:13,color:"var(--graphite-2)"},children:"还没有收藏。课程页底部可以收藏值得反复读的那几节。"}):u.map(h=>h&&a.jsxs("button",{className:"lesson-row",onClick:()=>t(`/lesson/${h.id}`),children:[a.jsx("div",{className:"lesson-no",children:h.code}),a.jsxs("div",{className:"lesson-main",children:[a.jsx("div",{className:"lesson-title",style:{fontSize:15},children:h.title}),a.jsx("div",{className:"lesson-sub",children:h.chapter})]})]},h.id)),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"个人论证档案"}),a.jsx("i",{})]}),e.arguments.length===0?a.jsxs("p",{style:{fontSize:13,color:"var(--graphite-2)"},children:["还没有存档。去「每日思维训练 · 独立论证」写下第一个。",a.jsx("br",{}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:10},onClick:()=>t("/daily"),children:"去写一段"})]}):e.arguments.map(h=>a.jsxs("div",{className:"panel flat",style:{marginBottom:10},children:[a.jsxs("div",{className:"row between",children:[a.jsx("span",{style:{fontFamily:"var(--font-serif)",fontSize:14},children:h.topic}),a.jsx("span",{className:"mono",style:{fontSize:10,color:"var(--graphite-2)"},children:new Date(h.at).toLocaleDateString("zh-CN")})]}),a.jsxs("div",{style:{marginTop:10,fontSize:13,lineHeight:1.85,color:"var(--graphite)"},children:[a.jsxs("div",{children:[a.jsx("b",{style:{color:"var(--ink)"},children:"观点："}),h.claim]}),a.jsxs("div",{children:[a.jsx("b",{style:{color:"var(--ink)"},children:"前提："}),h.premises]}),a.jsxs("div",{children:[a.jsx("b",{style:{color:"var(--ink)"},children:"推理："}),h.reasoning]}),h.objection&&a.jsxs("div",{children:[a.jsx("b",{style:{color:"var(--ink)"},children:"反对："}),h.objection]}),h.reply&&a.jsxs("div",{children:[a.jsx("b",{style:{color:"var(--ink)"},children:"回应："}),h.reply]})]}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:10},onClick:()=>Ye.removeArgument(h.id),children:"删除"})]},h.id)),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"数据"}),a.jsx("i",{})]}),a.jsxs("div",{className:"row",style:{gap:8,flexWrap:"wrap"},children:[a.jsx("button",{className:"btn ghost sm",onClick:p,children:"导出学习记录"}),r?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn sm",style:{background:"var(--bad)",borderColor:"var(--bad)"},onClick:()=>{Ye.reset(),n(!1)},children:"确认清空"}),a.jsx("button",{className:"btn ghost sm",onClick:()=>n(!1),children:"取消"})]}):a.jsx("button",{className:"btn ghost sm",onClick:()=>n(!0),children:"清空全部数据"})]}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:8,lineHeight:1.8},children:"清空会删除进度、笔记、错题与论证档案，无法恢复。建议先导出一份备份。"}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"关于本课程"}),a.jsx("i",{})]}),a.jsxs("div",{className:"note",style:{fontSize:12.5},children:[a.jsx("span",{className:"note-h",children:"教材与编写说明"}),Bt.title,"（",Bt.edition,"），",Bt.authors,"，",Bt.publisher,"。",a.jsx("br",{}),Bt.note,a.jsx("br",{}),"课程中的例题、反例与案例均为独立撰写，涉及现实情境时使用虚构主体，不对任何真实个人或机构作评价。"]}),a.jsx("p",{style:{fontSize:11,color:"var(--graphite-2)",marginTop:16},children:"LOGIC LAB · 逻辑学研究所 · 本地优先，无账号，无追踪"})]})}const zi=()=>Math.floor(Date.now()/864e5),W7=[{id:"quick",label:"快速推理"},{id:"decompose",label:"论证拆解"},{id:"detect",label:"谬误侦探"},{id:"write",label:"独立论证"}];function V7(){const[e,t]=B.useState("quick");return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18,paddingBottom:12},children:[a.jsx("span",{className:"eyebrow",children:"Daily Drill"}),a.jsx("h1",{children:"每日思维训练"}),a.jsx("p",{className:"lede",style:{fontSize:13.5},children:"四组固定动作，每天二十分钟。判断力靠重复，不靠灵感。"})]}),a.jsx("div",{className:"tabs",children:W7.map(r=>a.jsx("button",{className:e===r.id?"on":"",onClick:()=>t(r.id),children:r.label},r.id))}),a.jsxs("div",{style:{paddingTop:18},children:[e==="quick"&&a.jsx(G7,{}),e==="decompose"&&a.jsx(X7,{}),e==="detect"&&a.jsx(Y7,{}),e==="write"&&a.jsx(K7,{})]})]})}function G7(){const e=zi(),t=[0,1,2,3,4].map(s=>U0[(e+s)%U0.length]),[r,n]=B.useState({});return a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:12.5,color:"var(--graphite-2)",marginTop:0},children:"今日五题 · 全部答完会显示得分。"}),t.map((s,l)=>{const i=r[s.id],o=!!i;return a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",padding:"16px 0"},children:[a.jsxs("div",{className:"row",style:{gap:8,marginBottom:10},children:[a.jsx("span",{className:"q-num",children:String(l+1).padStart(2,"0")}),a.jsx("div",{style:{fontSize:14.5,lineHeight:1.75,flex:1},children:s.stem})]}),s.options.map((u,p)=>{const h="ABCD"[p],f=o?h===s.answer?"opt right":i===h?"opt wrong":"opt":"opt";return a.jsxs("button",{className:f,onClick:()=>!o&&n({...r,[s.id]:h}),children:[a.jsx("span",{className:"k",children:h}),a.jsx("span",{children:u})]},h)}),o&&a.jsxs("div",{className:"answer-box",children:[a.jsx("span",{className:`verdict ${i===s.answer?"ok":"bad"}`,children:i===s.answer?"✓ 正确":`✗ 正确答案 ${s.answer}`}),s.explanation]})]},s.id)}),a.jsxs("div",{className:"note",style:{marginTop:14},children:[a.jsx("span",{className:"note-h",children:"今日得分"}),Object.keys(r).length===5?`${t.filter(s=>r[s.id]===s.answer).length} / 5`:`已答 ${Object.keys(r).length} / 5`]})]})}function X7(){const e=Wn[zi()%Wn.length],[t,r]=B.useState(!1);return a.jsxs("div",{children:[a.jsxs("div",{className:"panel",style:{background:"var(--paper-3)"},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)"},children:"今日语段"}),a.jsx("p",{style:{fontSize:15.5,lineHeight:2,margin:0,fontFamily:"var(--font-serif)"},children:e.text})]}),a.jsx("p",{style:{fontSize:13,color:"var(--graphite)",marginTop:14},children:"先自己在纸上标出：哪一句是结论？哪些是前提？有没有一句没说出口、但缺了它结论就接不上的话？"}),t?a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"结论"}),a.jsx("b",{style:{textAlign:"right",maxWidth:"70%"},children:e.conclusion})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"前提"}),a.jsx("b",{style:{textAlign:"right",maxWidth:"70%",fontWeight:400},children:e.premises.join("；")})]}),a.jsxs("div",{className:"kv",children:[a.jsx("span",{children:"隐含前提"}),a.jsx("b",{style:{textAlign:"right",maxWidth:"70%",fontWeight:400},children:e.hidden.join("；")})]}),a.jsxs("div",{className:"note",style:{marginTop:14},children:[a.jsx("span",{className:"note-h",children:"点评"}),e.note]}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:12},onClick:()=>r(!1),children:"收起"})]}):a.jsx("button",{className:"btn sm",onClick:()=>r(!0),children:"对照参考拆解"})]})}function Y7(){const e=M1[zi()%M1.length],[t,r]=B.useState(""),[n,s]=B.useState(!1);return a.jsxs("div",{children:[a.jsxs("div",{className:"panel",style:{background:"var(--paper-3)"},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite)"},children:"今日论述"}),a.jsx("p",{style:{fontSize:15.5,lineHeight:2,margin:0,fontFamily:"var(--font-serif)"},children:e.text})]}),a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)",display:"block",marginTop:16},children:"你的诊断：问题在哪？你会怎么反驳？"}),a.jsx("textarea",{className:"input",rows:4,value:t,onChange:l=>r(l.target.value),placeholder:"先写完，再对照……",style:{marginTop:6}}),n?a.jsxs("div",{className:"fade-in",style:{marginTop:12},children:[a.jsxs("div",{className:"verdict-band bad",children:[a.jsx("span",{className:"t",children:e.answer}),e.why]}),a.jsxs("div",{className:"note",style:{marginTop:12},children:[a.jsx("span",{className:"note-h",children:"可以这样反驳"}),e.fix]}),a.jsx("button",{className:"btn ghost sm",style:{marginTop:12},onClick:()=>{s(!1),r("")},children:"再写一次"})]}):a.jsx("button",{className:"btn sm",style:{marginTop:10},onClick:()=>s(!0),disabled:t.trim().length<2,children:"对照参考答案"})]})}function K7(){const e=gs(),t=W0[zi()%W0.length],[r,n]=B.useState({claim:"",premises:"",reasoning:"",objection:"",reply:""}),[s,l]=B.useState(!1),i=r.claim.trim()&&r.premises.trim()&&r.reasoning.trim();return a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:"Argument Archive"}),a.jsx("h3",{style:{fontSize:18,marginBottom:8},children:t.title}),a.jsx("p",{style:{fontSize:13.5,color:"var(--graphite)",lineHeight:1.85},children:t.prompt}),a.jsx("div",{className:"row",style:{flexWrap:"wrap",gap:5,marginBottom:16},children:t.angles.map(o=>a.jsx("span",{className:"chip",style:{fontSize:10.5,whiteSpace:"normal",textAlign:"left"},children:o},o))}),[["claim","我的观点","一句话说清你站在哪一边"],["premises","支持前提","至少两条，每条都要能被检验"],["reasoning","推理过程","从前提怎么走到结论，中间有没有跳步"],["objection","最强反对意见","写出反方最好的版本，不要写稻草人"],["reply","对反对意见的回应","承认什么、反驳什么"]].map(([o,u,p])=>a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("label",{style:{fontSize:11.5,letterSpacing:".14em",color:"var(--graphite-2)"},children:u}),a.jsx("textarea",{className:"input",rows:o==="claim"?2:3,value:r[o],onChange:h=>{n({...r,[o]:h.target.value}),l(!1)},placeholder:p,style:{marginTop:5}})]},o)),a.jsx("button",{className:"btn block",disabled:!i,onClick:()=>{Ye.addArgument({topic:t.title,...r}),n({claim:"",premises:"",reasoning:"",objection:"",reply:""}),l(!0)},children:"存入个人论证档案"}),s&&a.jsx("p",{style:{fontSize:12,color:"var(--ok)",marginTop:8},children:"已保存，可在「我的」里查看。"}),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"历史档案"}),a.jsx("i",{})]}),e.arguments.length===0?a.jsx("p",{style:{fontSize:13,color:"var(--graphite-2)"},children:"还没有存档。写下的论证会按时间倒序留在这里。"}):e.arguments.slice(0,6).map(o=>a.jsxs("div",{className:"panel flat",style:{marginBottom:10},children:[a.jsxs("div",{className:"row between",children:[a.jsx("span",{style:{fontFamily:"var(--font-serif)",fontSize:14},children:o.topic}),a.jsx("span",{className:"mono",style:{fontSize:10,color:"var(--graphite-2)"},children:new Date(o.at).toLocaleDateString("zh-CN")})]}),a.jsx("div",{style:{fontSize:13,color:"var(--graphite)",marginTop:6,lineHeight:1.8},children:o.claim})]},o.id))]})}function Z7(){const e=tr(),[t,r]=B.useState("全部"),n=B.useMemo(()=>Array.from(new Set(Kt.map(l=>l.domain))),[]),s=t==="全部"?Kt:Kt.filter(l=>l.domain===t);return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{onClick:()=>e("/"),style:{fontSize:11,letterSpacing:".16em",color:"var(--graphite-2)",marginBottom:14},children:"← 首页"}),a.jsx("span",{className:"eyebrow",children:"Case Studies"}),a.jsx("h1",{children:"现实论证案例库"}),a.jsxs("p",{className:"lede",style:{fontSize:13.5},children:[Kt.length," 个来自新闻、广告、谈判、科研与日常争论的论述。每一个都按同一套流程拆：背景 → 论述 → 前提 → 结论 → 结构 → 检验 → 错误 → 改写。"]})]}),a.jsxs("div",{className:"chip-scroll",style:{margin:"16px calc(-1 * var(--pad)) 6px"},children:[a.jsx("button",{className:`chip ${t==="全部"?"on":""}`,onClick:()=>r("全部"),children:"全部"}),n.map(l=>a.jsx("button",{className:`chip ${t===l?"on":""}`,onClick:()=>r(l),children:l},l))]}),s.map((l,i)=>a.jsxs("button",{onClick:()=>e(`/cases/${l.id}`),style:{display:"block",width:"100%",textAlign:"left",borderTop:"1px solid var(--rule)",padding:"16px 0"},children:[a.jsx("div",{className:"row between",style:{alignItems:"baseline"},children:a.jsxs("span",{className:"mono",style:{fontSize:10.5,color:"var(--accent)",letterSpacing:".1em"},children:[String(i+1).padStart(2,"0")," · ",l.domain]})}),a.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:17,margin:"6px 0 5px"},children:l.title}),a.jsx("div",{style:{fontSize:12.5,color:"var(--graphite)",lineHeight:1.7},children:l.summary})]},l.id)),a.jsxs("div",{className:"note",style:{marginTop:24},children:[a.jsx("span",{className:"note-h",children:"使用说明"}),"不要把这些案例当成「找错游戏」。其中有几个论证是站得住的，值得学的恰恰是它为什么站得住。判断之前，先自己写一遍前提与结论。"]})]})}function J7(){var s;const{id:e}=Zh(),t=tr(),r=Kt.find(l=>l.id===e);if(!r)return a.jsxs("div",{className:"empty",children:[a.jsx("b",{children:"找不到这个案例"}),a.jsx("div",{style:{marginTop:16},children:a.jsx("button",{className:"btn ghost sm",onClick:()=>t("/cases"),children:"返回案例库"})})]});const n=r.lessonRef?hl(r.lessonRef):void 0;return a.jsxs("article",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:16},children:[a.jsx("button",{onClick:()=>t("/cases"),style:{fontSize:11,letterSpacing:".16em",color:"var(--graphite-2)",marginBottom:14},children:"← 案例库"}),a.jsx("span",{className:"eyebrow",children:r.domain}),a.jsx("h1",{style:{fontSize:25},children:r.title}),a.jsx("p",{className:"lede",style:{fontSize:14},children:r.summary})]}),a.jsx(Cr,{n:"01",title:"案例背景",children:r.background}),a.jsx(Cr,{n:"02",title:"原始论述",children:a.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:16,lineHeight:2,padding:"4px 0"},children:r.passage})}),a.jsxs(Cr,{n:"03",title:"前提识别",children:[a.jsx("ol",{style:{margin:0,paddingLeft:18,fontSize:14.5,lineHeight:1.9},children:r.premises.map((l,i)=>a.jsx("li",{children:l},i))}),((s=r.hidden)==null?void 0:s.length)>0&&a.jsxs("div",{style:{marginTop:12},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite-2)",fontSize:10},children:"隐含前提"}),a.jsx("ul",{style:{margin:"4px 0 0",paddingLeft:18,fontSize:14,lineHeight:1.9,color:"var(--graphite)"},children:r.hidden.map((l,i)=>a.jsx("li",{children:l},i))})]})]}),a.jsx(Cr,{n:"04",title:"结论识别",children:a.jsx("div",{style:{borderLeft:"2px solid var(--accent)",paddingLeft:14,fontSize:15.5,lineHeight:1.9},children:r.conclusion})}),a.jsx(Cr,{n:"05",title:"推理结构",children:a.jsx("div",{className:"formula-block",style:{textAlign:"left",fontSize:14,lineHeight:1.9},children:r.structure})}),a.jsx(Cr,{n:"06",title:"逻辑检验",children:r.check}),a.jsx(Cr,{n:"07",title:"错误分析",children:r.error}),a.jsx(Cr,{n:"08",title:"正确表达",children:a.jsx("div",{style:{background:"var(--paper-3)",padding:14,fontSize:14.5,lineHeight:1.9},children:r.rewrite})}),n&&a.jsxs("div",{className:"note",style:{marginTop:8},children:[a.jsx("span",{className:"note-h",children:"相关课程"}),a.jsxs("button",{style:{textDecoration:"underline",textUnderlineOffset:3},onClick:()=>t(`/lesson/${n.id}`),children:["第 ",n.no," 课 · ",n.title]})]}),a.jsx("div",{className:"divider-dotted"}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",lineHeight:1.9},children:"本案例为教学目的撰写，人物、机构与数据均为虚构或匿名化处理，不对任何现实主体作评价。"})]})}function Cr({n:e,title:t,children:r}){return a.jsxs("section",{style:{marginTop:26},children:[a.jsxs("div",{className:"row",style:{gap:10,alignItems:"baseline",marginBottom:8},children:[a.jsx("span",{className:"mono",style:{color:"var(--accent)",fontSize:10.5},children:e}),a.jsx("h3",{style:{margin:0,fontSize:16},children:t}),a.jsx("i",{style:{flex:1,height:1,background:"var(--rule)"}})]}),a.jsx("div",{style:{fontSize:14.5,lineHeight:1.9,color:"var(--ink-2)"},children:r})]})}const i4=[{title:"Ⅰ 起点：思维的单位",note:"一切论证都由「有真假的东西」构成。",nodes:[{id:"concept",label:"概念",stage:2,lessonId:"s2-04",desc:"概念的内涵决定对象是否属于它，外延是它所指的那一类对象。",pre:[],post:["term","proposition"],drills:["s2-05","s2-09"]},{id:"term",label:"词项",stage:2,lessonId:"s2-03",desc:"论证里被反复使用的词。词义漂移是隐蔽的推理断裂。",pre:["concept"],post:["proposition"],drills:["s2-08"]},{id:"definition",label:"定义",stage:2,lessonId:"s2-06",desc:"把词钉死在一个含义上的工具：属加种差、外延定义、操作定义。",pre:["concept"],post:["proposition"],drills:["s2-07","s2-08"]}]},{title:"Ⅱ 材料：命题",note:"只有能判真假的陈述，才能当前提或结论。",nodes:[{id:"proposition",label:"命题",stage:3,lessonId:"s3-02",desc:"一个有真假的陈述。命令、疑问、感叹不构成命题。",pre:["concept"],post:["compound","categorical","quantifier"],drills:["s1-02"]},{id:"compound",label:"复合命题",stage:3,lessonId:"s3-03",desc:"由 ¬ ∧ ∨ → ↔ 把简单命题组合起来，整体真值由支命题真值决定。",pre:["proposition"],post:["truth-table"],drills:["s3-04","s3-08"]},{id:"categorical",label:"直言命题",stage:4,lessonId:"s4-01",desc:"A / E / I / O 四种形式，用「所有」「有的」量化主项与谓项的关系。",pre:["proposition"],post:["distribution","syllogism"],drills:["s4-02","s4-03"]},{id:"quantifier",label:"量词",stage:4,lessonId:"s4-12",desc:"∀x 与 ∃x：把「所有」「有的」写成可运算的符号，处理命题内部结构。",pre:["proposition"],post:["quant-proof"],drills:["s4-13","s4-14"]}]},{title:"Ⅲ 结构：推理与论证",note:"从一个判断走到另一个判断，靠的是形式而不是语气。",nodes:[{id:"argument",label:"论证",stage:1,lessonId:"s1-02",desc:"前提 + 结论的语言单位。识别论证的第一步是找结论指示词。",pre:["proposition"],post:["deduction","induction","validity"],drills:["s1-03","s1-04","s1-07"]},{id:"deduction",label:"演绎",stage:1,lessonId:"s1-05",desc:"前提声称给结论决定性支持：前提真则结论必然真。",pre:["argument"],post:["validity","prop-logic","syllogism"],drills:["s1-06"]},{id:"induction",label:"归纳",stage:5,lessonId:"s5-01",desc:"结论超出前提，只能获得或然支持，强弱有程度。",pre:["argument"],post:["strength","analogy","causal","probability"],drills:["s5-05"]},{id:"validity",label:"有效性",stage:1,lessonId:"s1-06",desc:"不可能前提真而结论假。与「结论是否真实」是两件事。",pre:["deduction"],post:["prop-logic","syllogism","soundness"],drills:["s3-06"]},{id:"soundness",label:"可靠性",stage:1,lessonId:"s1-06",desc:"有效 + 全部前提为真。可靠论证的结论一定为真。",pre:["validity"],post:[],drills:[]},{id:"strength",label:"归纳强度",stage:5,lessonId:"s5-01",desc:"前提为真时结论为真的概率高低。可通过反例、样本、机制来评价。",pre:["induction"],post:["probability"],drills:["s5-12"]}]},{title:"Ⅳ 工具：形式系统",note:"把论证写成符号，就能机械地算出它是否有效。",nodes:[{id:"prop-logic",label:"命题逻辑",stage:3,lessonId:"s3-01",desc:"以整个命题为最小单位的逻辑系统，靠真值函项运算。",pre:["validity","compound"],post:["truth-table","natural-deduction"],drills:["s3-05"]},{id:"truth-table",label:"真值表",stage:3,lessonId:"s3-07",desc:"$2^n$ 行穷举所有真值指派，找出是否存在前提真结论假的那一行。",pre:["prop-logic"],post:["equivalence","tautology"],drills:["s3-06","s3-13"]},{id:"equivalence",label:"逻辑等价",stage:3,lessonId:"s3-09",desc:"两式在所有指派下真值相同。德摩根、易位、蕴涵、分配等十条替换规则。",pre:["truth-table"],post:["natural-deduction"],drills:["s3-10"]},{id:"tautology",label:"重言式",stage:3,lessonId:"s3-10",desc:"永真的公式。矛盾律与排中律都是重言式，同一律是推理的前提。",pre:["truth-table"],post:[],drills:[]},{id:"natural-deduction",label:"形式证明",stage:3,lessonId:"s3-11",desc:"用九条推论规则与十条替换规则，从前提一步步推出结论。",pre:["prop-logic","equivalence"],post:["cp-ip"],drills:["s3-12"]},{id:"cp-ip",label:"条件证明与归谬",stage:3,lessonId:"s3-14",desc:"先假定，再推出，最后解除假定。处理条件结论与否定结论的常用武器。",pre:["natural-deduction"],post:[],drills:["s3-13"]},{id:"syllogism",label:"三段论",stage:4,lessonId:"s4-06",desc:"大前提、小前提、结论，三个词项，四个格，十五个有效形式。",pre:["categorical","validity"],post:["distribution","venn"],drills:["s4-07","s4-08","s4-09"]},{id:"distribution",label:"周延性",stage:4,lessonId:"s4-02",desc:"一个词项是否被断定了全部外延。三段论规则的核心判据。",pre:["categorical"],post:["syllogism"],drills:["s4-07"]},{id:"venn",label:"文恩图",stage:4,lessonId:"s4-05",desc:"用圆、阴影与 × 表示类的包含与存在，直观检查三段论。",pre:["syllogism"],post:[],drills:["s4-08"]},{id:"quant-proof",label:"量化证明",stage:4,lessonId:"s4-13",desc:"UI / UG / EI / EG 四条量词规则，以及它们的使用限制。",pre:["quantifier"],post:[],drills:["s4-14"]}]},{title:"Ⅴ 扩展：不确定世界里的推理",note:"大多数真实判断没有必然性，只有强度。",nodes:[{id:"analogy",label:"类比",stage:5,lessonId:"s5-02",desc:"相似点越相关、反相似点越少，结论越可靠。",pre:["induction"],post:[],drills:["s5-03"]},{id:"causal",label:"因果",stage:5,lessonId:"s5-04",desc:"求同、求异、并用法、共变、剩余——密尔五法及其失效条件。",pre:["induction"],post:["hypothesis"],drills:["s5-06","s5-07"]},{id:"probability",label:"概率",stage:5,lessonId:"s5-10",desc:"古典、频率、主观三种解释；加法与乘法规则；基础比率。",pre:["strength"],post:["hypothesis"],drills:["s5-11","s5-12"]},{id:"hypothesis",label:"假说与确证",stage:5,lessonId:"s5-08",desc:"假说-演绎法：从假说推出可检验预言，再与观察对照。",pre:["causal","probability"],post:[],drills:["s5-09"]}]},{title:"Ⅵ 反面：谬误",note:"每一条谬误，都是前面某个工具被悄悄绕过的地方。",nodes:[{id:"fallacy",label:"谬误",stage:6,lessonId:"s6-01",desc:"看似有效实则无效的论证。分相干、不当归纳、预设、含混四类。",pre:["argument"],post:["relevance","inductive-fallacy","presumption","ambiguity"],drills:["s6-02"]},{id:"relevance",label:"相干谬误",stage:6,lessonId:"s6-02",desc:"理由与结论无关：人身攻击、稻草人、滑坡、虚假两难、诉诸权威与大众。",pre:["fallacy"],post:[],drills:["s6-03","s6-04","s6-05","s6-06","s6-07"]},{id:"inductive-fallacy",label:"不当归纳",stage:6,lessonId:"s6-09",desc:"样本不足、类比不当、无视反例、混淆相关与因果。",pre:["fallacy"],post:[],drills:["s6-10","s6-11","s6-12"]},{id:"presumption",label:"预设谬误",stage:6,lessonId:"s6-08",desc:"把要证明的东西塞进前提：循环论证、复杂问句、虚假原因。",pre:["fallacy"],post:[],drills:["s6-08"]},{id:"ambiguity",label:"含混谬误",stage:6,lessonId:"s6-13",desc:"词义在中途变形：歧义、合成、分割。",pre:["fallacy"],post:[],drills:["s6-13"]}]}],ev=i4.flatMap(e=>e.nodes),$0=e=>ev.find(t=>t.id===e);function tv(e){const t=$0(e);if(!t)return[];const r=[];return t.pre.forEach(n=>{const s=$0(n);s&&r.push({node:s,relation:"前置"})}),t.post.forEach(n=>{const s=$0(n);s&&r.push({node:s,relation:"后续"})}),r}function rv(){const e=tr(),[t,r]=B.useState("argument"),n=$0(t),s=tv(t),l=hl(n.lessonId),i=Kt.filter(o=>o.lessonRef===n.lessonId||n.drills.includes(o.lessonRef??""));return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{onClick:()=>e("/"),style:{fontSize:11,letterSpacing:".16em",color:"var(--graphite-2)",marginBottom:14},children:"← 首页"}),a.jsx("span",{className:"eyebrow",children:"Concept Map"}),a.jsx("h1",{children:"知识图谱"}),a.jsx("p",{className:"lede",style:{fontSize:13.5},children:"六层依赖关系。点击任一概念，看它的定义、前置与后续，以及该练哪几课。"})]}),i4.map(o=>a.jsxs("section",{style:{marginTop:22},children:[a.jsxs("div",{className:"row between",style:{alignItems:"baseline"},children:[a.jsx("span",{style:{fontFamily:"var(--font-serif)",fontSize:14,letterSpacing:".06em"},children:o.title}),a.jsx("span",{className:"mono",style:{fontSize:10,color:"var(--graphite-2)"},children:o.nodes.length})]}),a.jsx("p",{style:{fontSize:11.5,color:"var(--graphite-2)",margin:"3px 0 10px"},children:o.note}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:o.nodes.map(u=>{const p=s.some(f=>f.node.id===u.id),h=t===u.id?"kg-node on":(p||u.stage===6,"kg-node");return a.jsx("button",{className:h,style:p?{borderColor:"var(--graphite)",borderStyle:"dashed"}:void 0,onClick:()=>r(u.id),children:u.label},u.id)})})]},o.title)),a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"概念详情"}),a.jsx("i",{})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"row between",style:{alignItems:"baseline"},children:[a.jsx("h3",{style:{margin:0,fontSize:19},children:n.label}),a.jsxs("span",{className:"chip",children:["Stage ",n.stage]})]}),a.jsx("p",{style:{fontSize:14,lineHeight:1.9,color:"var(--graphite)",marginTop:10},children:n.desc}),a.jsx("div",{className:"divider-dotted"}),a.jsxs("div",{style:{fontSize:13},children:[a.jsxs("div",{style:{marginBottom:8},children:[a.jsx("span",{style:{color:"var(--graphite-2)"},children:"前置："}),s.filter(o=>o.relation==="前置").length===0?"（起点概念）":s.filter(o=>o.relation==="前置").map(o=>a.jsx("button",{onClick:()=>r(o.node.id),style:{textDecoration:"underline",textUnderlineOffset:3,marginRight:8},children:o.node.label},o.node.id))]}),a.jsxs("div",{children:[a.jsx("span",{style:{color:"var(--graphite-2)"},children:"后续："}),s.filter(o=>o.relation==="后续").length===0?"（本分支的终点）":s.filter(o=>o.relation==="后续").map(o=>a.jsx("button",{onClick:()=>r(o.node.id),style:{textDecoration:"underline",textUnderlineOffset:3,marginRight:8},children:o.node.label},o.node.id))]})]}),a.jsx("div",{className:"divider-dotted"}),a.jsxs("div",{style:{fontSize:13},children:[a.jsx("span",{style:{color:"var(--graphite-2)"},children:"主课："}),l?a.jsxs("button",{onClick:()=>e(`/lesson/${l.id}`),style:{textDecoration:"underline",textUnderlineOffset:3},children:["第 ",l.no," 课 · ",l.title]}):"—"]}),n.drills.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"divider-dotted"}),a.jsxs("div",{style:{fontSize:13},children:[a.jsx("span",{style:{color:"var(--graphite-2)"},children:"相关练习："}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:n.drills.map(o=>{const u=hl(o);return u?a.jsxs("button",{className:"chip",onClick:()=>e(`/lesson/${o}`),children:[u.code," ",u.title]},o):null})})]})]})]}),i.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"典型案例"}),a.jsx("i",{})]}),i.map(o=>a.jsxs("button",{onClick:()=>e(`/cases/${o.id}`),style:{display:"block",width:"100%",textAlign:"left",borderTop:"1px solid var(--rule-soft)",padding:"10px 0"},children:[a.jsx("div",{style:{fontSize:14},children:o.title}),a.jsx("div",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:2},children:o.domain})]},o.id))]}),i.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"section-label",children:[a.jsx("span",{children:"典型案例"}),a.jsx("i",{})]}),i.map(o=>a.jsxs("button",{onClick:()=>e(`/cases/${o.id}`),style:{display:"block",width:"100%",textAlign:"left",borderTop:"1px solid var(--rule-soft)",padding:"10px 0"},children:[a.jsx("div",{style:{fontSize:14},children:o.title}),a.jsx("div",{style:{fontSize:11.5,color:"var(--graphite-2)",marginTop:2},children:o.domain})]},o.id))]}),a.jsxs("div",{className:"note",style:{marginTop:20},children:[a.jsx("span",{className:"note-h",children:"怎么用"}),"按「前置 → 本课 → 后续」的顺序学，比按目录顺序硬啃更稳。虚线框是当前概念的直接邻居，可以顺着它往前或往后跳。"]})]})}const nv=["相干谬误","不当归纳谬误","预设谬误","含混谬误"],sv={相干谬误:"理由与结论之间没有真正的支持关系，听起来相关，实际不搭。",不当归纳谬误:"推理方式本身是归纳，但样本、类比或因果判断撑不住结论。",预设谬误:"把需要证明的东西偷偷放进了前提里，或者问题本身已经埋了答案。",含混谬误:"词义在中途被换掉，或者把整体与部分的属性互相搬运。"};function lv(){const e=tr(),[t,r]=B.useState("全部"),[n,s]=B.useState(null),l=B.useMemo(()=>t==="全部"?Dr:Dr.filter(i=>i.family===t),[t]);return a.jsxs("div",{className:"fade-in",children:[a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{onClick:()=>e("/"),style:{fontSize:11,letterSpacing:".16em",color:"var(--graphite-2)",marginBottom:14},children:"← 首页"}),a.jsx("span",{className:"eyebrow",children:"Taxonomy of Fallacies"}),a.jsx("h1",{children:"谬误图鉴"}),a.jsxs("p",{className:"lede",style:{fontSize:13.5},children:[Dr.length," 条常见谬误，按教材的四类划分整理。每一条给出结构、案例、错因、识别提问与反驳话术。"]})]}),a.jsxs("div",{className:"chip-scroll",style:{margin:"16px calc(-1 * var(--pad)) 4px"},children:[a.jsx("button",{className:`chip ${t==="全部"?"on":""}`,onClick:()=>r("全部"),children:"全部"}),nv.map(i=>a.jsx("button",{className:`chip ${t===i?"on":""}`,onClick:()=>r(i),children:i.replace("谬误","")},i))]}),t!=="全部"&&a.jsx("p",{style:{fontSize:12,color:"var(--graphite-2)",marginBottom:10,lineHeight:1.8},children:sv[t]}),l.map((i,o)=>{const u=n===i.id,p=hl(i.lessonId);return a.jsxs("div",{style:{borderTop:"1px solid var(--rule)",padding:"14px 0"},children:[a.jsxs("button",{style:{width:"100%",textAlign:"left"},onClick:()=>s(u?null:i.id),children:[a.jsxs("div",{className:"row between",style:{alignItems:"baseline"},children:[a.jsxs("div",{children:[a.jsx("span",{style:{fontFamily:"var(--font-serif)",fontSize:16.5},children:i.name}),a.jsx("span",{className:"mono",style:{fontSize:10.5,color:"var(--graphite-2)",marginLeft:8},children:i.en})]}),a.jsx("span",{className:"mono",style:{fontSize:10,color:"var(--graphite-2)"},children:String(o+1).padStart(2,"0")})]}),a.jsx("p",{style:{fontSize:13,color:"var(--graphite)",margin:"6px 0 0",lineHeight:1.75},children:i.definition})]}),u&&a.jsxs("div",{className:"fade-in",style:{marginTop:14},children:[a.jsx("div",{className:"formula-block",style:{textAlign:"left",fontSize:13.5,lineHeight:1.9},children:a.jsx(tn,{text:i.pattern})}),a.jsxs("div",{style:{marginTop:14},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite-2)"},children:"案例"}),a.jsx("p",{style:{fontSize:14,lineHeight:1.9,margin:"4px 0 0"},children:i.example})]}),a.jsxs("div",{style:{marginTop:12},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite-2)"},children:"错在哪"}),a.jsx("p",{style:{fontSize:14,lineHeight:1.9,margin:"4px 0 0",color:"var(--graphite)"},children:i.flaw})]}),a.jsxs("div",{style:{marginTop:12},children:[a.jsx("span",{className:"note-h",style:{color:"var(--graphite-2)"},children:"怎么识别"}),a.jsx("ol",{style:{margin:"4px 0 0",paddingLeft:18,fontSize:14,lineHeight:1.9},children:i.spot.map((h,f)=>a.jsx("li",{children:h},f))})]}),a.jsxs("div",{style:{marginTop:12},children:[a.jsx("span",{className:"note-h",style:{color:"var(--accent)"},children:"怎么反驳"}),a.jsx("ul",{style:{margin:"4px 0 0",paddingLeft:18,fontSize:14,lineHeight:1.9},children:i.rebut.map((h,f)=>a.jsx("li",{children:h},f))})]}),a.jsxs("div",{className:"row",style:{gap:8,marginTop:14,flexWrap:"wrap"},children:[p&&a.jsxs("button",{className:"chip",onClick:()=>e(`/lesson/${p.id}`),children:["第 ",p.no," 课 · ",p.title]}),a.jsx("button",{className:"chip",onClick:()=>e("/lab"),children:"去实验室识别"})]})]})]},i.id)}),a.jsxs("div",{className:"note",style:{marginTop:24},children:[a.jsx("span",{className:"note-h",children:"提醒"}),"谬误标签是诊断工具，不是武器。先判断论证是否真的犯了某个错误，再决定要不要贴标签；用标签代替论证，本身就是一种谬误。"]})]})}const iv=[{to:"/",label:"首页",icon:"home"},{to:"/courses",label:"课程",icon:"book"},{to:"/lab",label:"实验室",icon:"flask"},{to:"/mistakes",label:"错题本",icon:"flag"},{to:"/me",label:"我的",icon:"user"}];function av({name:e}){const t={home:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M3 9.5 10 3l7 6.5"}),a.jsx("path",{d:"M5 8.6V16h10V8.6"})]}),book:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3.5h5a1.5 1.5 0 0 1 1 2.6v9.4H5.5A1.5 1.5 0 0 1 4 14V3.5Z"}),a.jsx("path",{d:"M16 3.5h-5a1.5 1.5 0 0 0-1 2.6v9.4h4.5A1.5 1.5 0 0 0 16 14V3.5Z"})]}),flask:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M8 3h4M8.5 3v4.2L4.6 14a1.4 1.4 0 0 0 1.2 2.1h8.4A1.4 1.4 0 0 0 15.4 14l-3.9-6.8V3"}),a.jsx("path",{d:"M6.4 11h7.2"})]}),flag:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M5 17V3.5"}),a.jsx("path",{d:"M5 4h8l-1.2 2.6L13 9.2H5"})]}),user:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"10",cy:"7",r:"3"}),a.jsx("path",{d:"M4 17c0-3 2.7-4.6 6-4.6S16 14 16 17"})]})};return a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":!0,children:t[e]})}function ov(){const{pathname:e}=xi();return B.useEffect(()=>{window.scrollTo({top:0})},[e]),null}function uv(){const{pathname:e}=xi(),t=tr();t5();const r=s=>s==="/"?e==="/":e===s||e.startsWith(s+"/")||s==="/courses"&&e.startsWith("/lesson"),n=e.startsWith("/lesson")?"课程":e.startsWith("/cases")?"案例库":e.startsWith("/graph")?"知识图谱":e.startsWith("/fallacies")?"谬误图鉴":e.startsWith("/daily")?"思维训练":"";return a.jsxs(a.Fragment,{children:[a.jsx(ov,{}),a.jsx("header",{className:"masthead",children:a.jsxs("div",{className:"shell masthead-inner",children:[a.jsxs("div",{className:"wordmark",onClick:()=>t("/"),style:{cursor:"pointer"},children:[a.jsx("b",{children:"Logic Lab"}),a.jsx("span",{children:n||"逻辑学研究所"})]}),a.jsx("div",{className:"masthead-meta",children:"《逻辑学导论》第 15 版"})]})}),a.jsx("main",{className:"page",children:a.jsx("div",{className:"shell",children:a.jsxs(N3,{children:[a.jsx(ft,{path:"/",element:a.jsx(yd,{})}),a.jsx(ft,{path:"/courses",element:a.jsx(i7,{})}),a.jsx(ft,{path:"/lesson/:id",element:a.jsx(c7,{})}),a.jsx(ft,{path:"/lab",element:a.jsx(_7,{})}),a.jsx(ft,{path:"/mistakes",element:a.jsx(Q7,{})}),a.jsx(ft,{path:"/me",element:a.jsx(U7,{})}),a.jsx(ft,{path:"/daily",element:a.jsx(V7,{})}),a.jsx(ft,{path:"/cases",element:a.jsx(Z7,{})}),a.jsx(ft,{path:"/cases/:id",element:a.jsx(J7,{})}),a.jsx(ft,{path:"/graph",element:a.jsx(rv,{})}),a.jsx(ft,{path:"/fallacies",element:a.jsx(lv,{})}),a.jsx(ft,{path:"*",element:a.jsx(yd,{})})]})})}),a.jsx("nav",{className:"tabbar",children:a.jsx("div",{className:"tabbar-inner",children:iv.map(s=>a.jsxs("button",{className:`tab ${r(s.to)?"active":""}`,onClick:()=>t(s.to),children:[a.jsx(av,{name:s.icon}),s.label]},s.to))})})]})}_h(document.getElementById("root")).render(a.jsx(Ld.StrictMode,{children:a.jsx(I3,{children:a.jsx(uv,{})})}));
