!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(e=>(()=>{"use strict";var r={156:r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>j,useDelete:()=>y,useFetch:()=>d,useFetchImmediate:()=>b,useGet:()=>O,useGetImmediate:()=>C,usePost:()=>m,usePut:()=>R,useUpload:()=>w});var e=function(){return e=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},e.apply(this,arguments)},r=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function u(e){try{i(n.next(e))}catch(e){a(e)}}function c(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,c)}i((n=n.apply(e,r||[])).next())}))},t=function(e,r){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(u=0)),u;)try{if(t=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=r.call(e,u)}catch(e){c=[6,e],n=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function a(){var e={},r=localStorage.getItem("XSRF-TOKEN");return r&&(e["X-XSRF-TOKEN"]=r),e}function u(n){return r(this,void 0,void 0,(function(){var r,o,a;return t(this,(function(t){switch(t.label){case 0:return(r=n.headers.get("X-XSRF-TOKEN"))&&localStorage.setItem("XSRF-TOKEN",r),[4,n.json()];case 1:if(o=t.sent(),a=o.succeeded,delete o.succeeded,n.ok&&a)return[2,o];throw e({statusText:n.statusText,status:n.status},o)}}))}))}function c(n,o){return void 0===o&&(o={}),r(this,void 0,void 0,(function(){var r,c,i,l,s,f,p,d,v,y;return t(this,(function(t){switch(t.label){case 0:return r=o.method,c=void 0===r?"GET":r,i=o.headers,l=void 0===i?{}:i,s=o.params,f=void 0===s?{}:s,p=o.body,d=o.signal,v=function(r){return new URLSearchParams(Object.entries(r).reduce((function(r,t){var n,o=t[0],a=t[1];return e(e({},r),((n={})[o]=a.toString(),n))}),{}))}(f),y="".concat(n,"?").concat(v),[4,fetch(y,e({method:c,signal:d,credentials:"include",headers:e(e({},a()),l)},p&&{body:JSON.stringify(p)}))];case 1:return[4,u(t.sent())];case 2:return[2,t.sent()]}}))}))}var i,l=n(156);!function(e){e[e.FETCH_INIT=0]="FETCH_INIT",e[e.FETCH_SUCCESS=1]="FETCH_SUCCESS",e[e.FETCH_FAILURE=2]="FETCH_FAILURE",e[e.CLEAR_ERROR=3]="CLEAR_ERROR"}(i||(i={}));var s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},s.apply(this,arguments)},f={loading:!1,success:!1,error:null,data:null};function p(e,r){switch(r.type){case i.FETCH_INIT:return s(s({},e),{loading:!0,error:null,success:!1});case i.FETCH_SUCCESS:return s(s({},e),{loading:!1,error:null,data:r.payload,success:!0});case i.FETCH_FAILURE:return s(s({},e),{loading:!1,error:r.payload,success:!1});case i.CLEAR_ERROR:return s(s({},e),{error:null});default:throw new Error}}function d(e,r){void 0===r&&(r={});var t=(0,l.useReducer)(p,f),n=t[0],o=t[1],a=(0,l.useRef)(e),u=(0,l.useRef)(r),d=(0,l.useCallback)((function(e){void 0===e&&(e={});var r=new AbortController,t=s(s({},e),{signal:r.signal});return o({type:i.FETCH_INIT}),c(a.current,t).then((function(e){return function(e,r,t){var n=r.onComplete;t({type:i.FETCH_SUCCESS,payload:e}),null==n||n(e)}(e,u.current,o)})).catch((function(e){return function(e,r,t){if("AbortError"!==(null==e?void 0:e.name)){t({type:i.FETCH_FAILURE,payload:e});var n=r.onError;null==n||n(e)}}(e,u.current,o)})),r}),[]),v=(0,l.useCallback)((function(){o({type:i.CLEAR_ERROR})}),[]);return[d,s(s({},n),{clearError:v})]}var v=function(){return v=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},v.apply(this,arguments)};function y(e,r){void 0===r&&(r={});var t=d(e,r),n=t[0],o=t[1];return[(0,l.useCallback)((function(e){return n(v(v({},e),{method:"DELETE"}))}),[n]),o]}var h=function(){return h=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},h.apply(this,arguments)};function b(e,r,t){void 0===r&&(r={}),void 0===t&&(t={});var n=(0,l.useRef)(r),o=d(e,t),a=o[0],u=o[1];return(0,l.useEffect)((function(){var e=a(n.current);return function(){e.abort()}}),[a]),h({},u)}var E=function(){return E=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},E.apply(this,arguments)};function O(e,r){void 0===r&&(r={});var t=d(e,r),n=t[0],o=t[1];return[(0,l.useCallback)((function(e){return n(E(E({},e),{method:"GET"}))}),[n]),o]}var g=function(){return g=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},g.apply(this,arguments)};function C(e,r,t){return b(e,g(g({},r),{method:"GET"}),t)}var T=function(){return T=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},T.apply(this,arguments)};function m(e,r){void 0===r&&(r={});var t=d(e,r),n=t[0],o=t[1];return[(0,l.useCallback)((function(e){return n(T(T({},e),{method:"POST"}))}),[n]),o]}var S=function(){return S=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},S.apply(this,arguments)};function R(e,r){void 0===r&&(r={});var t=d(e,r),n=t[0],o=t[1];return[(0,l.useCallback)((function(e){return n(S(S({},e),{method:"PUT"}))}),[n]),o]}function w(e,r){void 0===r&&(r={});var t=m(e,r),n=t[0],o=t[1];return[(0,l.useCallback)((function(e,r){var t=new FormData;return t.append("blob",e),(null==r?void 0:r.body)&&t.append("body",JSON.stringify(r.body)),n({method:"POST",headers:null==r?void 0:r.headers,signal:null==r?void 0:r.signal,params:null==r?void 0:r.params,body:t})}),[n]),o]}const j=c})(),o})()));