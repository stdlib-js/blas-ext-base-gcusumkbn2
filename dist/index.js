"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=g(function(E,k){
var u=require('@stdlib/math-base-special-abs/dist');function w(e,r,s,c,o,i,f,q){var x,y,b,v,d,n,a,t,l;if(e<=0)return i;for(y=o,b=q,x=0,v=0,l=0;l<e;l++)n=s[y],a=r+n,u(r)>=u(n)?t=r-a+n:t=n-a+r,r=a,a=v+t,u(v)>=u(t)?d=v-a+t:d=t-a+v,v=a,x+=d,i[b]=r+v+x,y+=c,b+=f;return i}k.exports=w
});var h=g(function(F,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),z=p();function A(e,r,s,c,o,i){var f=O(e,c),q=O(e,i);return z(e,r,s,c,f,o,i,q)}R.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=h(),C=p();B(j,"ndarray",C);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
