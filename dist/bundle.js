!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>j,useDelete:()=>y,useFetch:()=>d,useFetchImmediate:()=>b,useGet:()=>O,useGetImmediate:()=>C,usePost:()=>m,usePut:()=>R,useUpload:()=>w});var e=function(){return e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)},t=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function u(e){try{i(n.next(e))}catch(e){a(e)}}function c(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,c)}i((n=n.apply(e,t||[])).next())}))},r=function(e,t){var r,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function a(e){var t={},r=localStorage.getItem("XSRF-TOKEN");return r&&(t["X-XSRF-TOKEN"]=r),e||(t["Content-Type"]="application/json"),t}function u(n){return t(this,void 0,void 0,(function(){var t,o,a;return r(this,(function(r){switch(r.label){case 0:return(t=n.headers.get("X-XSRF-TOKEN"))&&localStorage.setItem("XSRF-TOKEN",t),[4,n.json()];case 1:if(o=r.sent(),a=o.succeeded,delete o.succeeded,n.ok&&a)return[2,o];throw e({statusText:n.statusText,status:n.status},o)}}))}))}function c(n,o){return void 0===o&&(o={}),t(this,void 0,void 0,(function(){var t,c,i,l,s,f,p,d,v,y,h;return r(this,(function(r){switch(r.label){case 0:return t=o.method,c=void 0===t?"GET":t,i=o.headers,l=void 0===i?{}:i,s=o.params,f=void 0===s?{}:s,p=o.body,d=o.signal,v=function(t){return new URLSearchParams(Object.entries(t).filter((function(e){return null!=e[1]})).reduce((function(t,r){var n,o=r[0],a=r[1];return e(e({},t),((n={})[o]=a.toString(),n))}),{}))}(f||{}),y="".concat(n,"?").concat(v),h=p instanceof FormData,[4,fetch(y,e({method:c,signal:d,credentials:"include",headers:e(e({},a(h)),l)},p&&{body:h?p:JSON.stringify(p)}))];case 1:return[4,u(r.sent())];case 2:return[2,r.sent()]}}))}))}var i,l=n(156);!function(e){e[e.FETCH_INIT=0]="FETCH_INIT",e[e.FETCH_SUCCESS=1]="FETCH_SUCCESS",e[e.FETCH_FAILURE=2]="FETCH_FAILURE",e[e.CLEAR_ERROR=3]="CLEAR_ERROR"}(i||(i={}));var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},f={loading:!1,success:!1,error:null,data:null};function p(e,t){switch(t.type){case i.FETCH_INIT:return s(s({},e),{loading:!0,error:null,success:!1});case i.FETCH_SUCCESS:return s(s({},e),{loading:!1,error:null,data:t.payload,success:!0});case i.FETCH_FAILURE:return s(s({},e),{loading:!1,error:t.payload,success:!1});case i.CLEAR_ERROR:return s(s({},e),{error:null});default:throw new Error}}function d(e,t){void 0===t&&(t={});var r=(0,l.useReducer)(p,f),n=r[0],o=r[1],a=(0,l.useRef)(e),u=(0,l.useRef)(t);(0,l.useEffect)((function(){a.current=e,u.current=t}),[e,t]);var d=(0,l.useCallback)((function(e){void 0===e&&(e={});var t=new AbortController,r=s(s({},e),{signal:t.signal});return o({type:i.FETCH_INIT}),c(a.current,r).then((function(e){return function(e,t,r){var n=t.onComplete;r({type:i.FETCH_SUCCESS,payload:e}),null==n||n(e)}(e,u.current,o)})).catch((function(e){return function(e,t,r){var n;"AbortError"!==(null==e?void 0:e.name)&&(r({type:i.FETCH_FAILURE,payload:e}),null===(n=null==t?void 0:t.onError)||void 0===n||n.call(t,e))}(e,u.current,o)})),t}),[]),v=(0,l.useCallback)((function(){o({type:i.CLEAR_ERROR})}),[]);return[d,s(s({},n),{clearError:v})]}var v=function(){return v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)};function y(e,t){void 0===t&&(t={});var r=d(e,t),n=r[0],o=r[1];return[(0,l.useCallback)((function(e){return n(v(v({},e),{method:"DELETE"}))}),[n]),o]}var h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)};function b(e,t,r){void 0===t&&(t={}),void 0===r&&(r={});var n=(0,l.useRef)(t),o=d(e,r),a=o[0],u=o[1];return(0,l.useEffect)((function(){n.current=t}),[t]),(0,l.useEffect)((function(){var e=a(n.current);return function(){e.abort()}}),[a]),h({},u)}var E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)};function O(e,t){void 0===t&&(t={});var r=d(e,t),n=r[0],o=r[1];return[(0,l.useCallback)((function(e){return n(E(E({},e),{method:"GET"}))}),[n]),o]}var g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)};function C(e,t,r){return b(e,g(g({},t),{method:"GET"}),r)}var T=function(){return T=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},T.apply(this,arguments)};function m(e,t){void 0===t&&(t={});var r=d(e,t),n=r[0],o=r[1];return[(0,l.useCallback)((function(e){return n(T(T({},e),{method:"POST"}))}),[n]),o]}var S=function(){return S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)};function R(e,t){void 0===t&&(t={});var r=d(e,t),n=r[0],o=r[1];return[(0,l.useCallback)((function(e){return n(S(S({},e),{method:"PUT"}))}),[n]),o]}function w(e,t){void 0===t&&(t={});var r=d(e,t),n=r[0],o=r[1];return[(0,l.useCallback)((function(e,t){var r=new FormData;return r.append("blob",e),(null==t?void 0:t.body)&&r.append("body",JSON.stringify(t.body)),n({method:"POST",signal:null==t?void 0:t.signal,params:null==t?void 0:t.params,body:r})}),[n]),o]}const j=c})(),o})()));