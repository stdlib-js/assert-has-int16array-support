// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasInt16ArraySupport=n()}(this,(function(){"use strict";var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(t){return o.call(t)},f=Object.prototype.hasOwnProperty;var u=function(t,n){return null!=t&&f.call(t,n)},i="function"==typeof Symbol?Symbol.toStringTag:"",l=u,c=i,a=r;var y=e,p=function(t){var n,r,o;if(null==t)return a.call(t);r=t[c],n=l(t,c);try{t[c]=void 0}catch(n){return a.call(t)}return o=a.call(t),n?t[c]=r:delete t[c],o},b=n()?p:y,s="function"==typeof Int16Array;var d="function"==typeof Int16Array?Int16Array:null,m=function(t){return s&&t instanceof Int16Array||"[object Int16Array]"===b(t)},v=d;return function(){var t,n;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,32768]),t=m(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){t=!1}return t}}));
//# sourceMappingURL=bundle.js.map
