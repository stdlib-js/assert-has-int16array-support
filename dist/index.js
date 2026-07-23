"use strict";var a=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=a(function(A,n){
var p=typeof Int16Array=="function"?Int16Array:null;n.exports=p
});var o=a(function(q,s){
var y=require('@stdlib/assert-is-int16array/dist'),I=require('@stdlib/constants-int16-max/dist'),c=require('@stdlib/constants-int16-min/dist'),i=u();function f(){var t,r;if(typeof i!="function")return!1;try{r=new i([1,3.14,-3.14,I+1]),t=y(r)&&r[0]===1&&r[1]===3&&r[2]===-3&&r[3]===c}catch(e){t=!1}return t}s.exports=f
});var v=o();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
