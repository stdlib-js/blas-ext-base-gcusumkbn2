"use strict";var y=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var R=y(function(E,O){
var b=require('@stdlib/math-base-special-abs/dist');function z(n,r,g,o,q,f){var x,u,t,c,s,a,e,v,i;if(n<=0)return q;for(o<0?u=(1-n)*o:u=0,f<0?t=(1-n)*f:t=0,x=0,c=0,i=0;i<n;i++)a=g[u],e=r+a,b(r)>=b(a)?v=r-e+a:v=a-e+r,r=e,e=c+v,b(c)>=b(v)?s=c-e+v:s=v-e+c,c=e,x+=s,q[t]=r+c+x,u+=o,t+=f;return q}O.exports=z
});var j=y(function(F,h){
var p=require('@stdlib/math-base-special-abs/dist');function A(n,r,g,o,q,f,x,u){var t,c,s,a,e,v,i,l,k;if(n<=0)return f;for(c=q,s=u,t=0,a=0,k=0;k<n;k++)v=g[c],i=r+v,p(r)>=p(v)?l=r-i+v:l=v-i+r,r=i,i=a+l,p(a)>=p(l)?e=a-i+l:e=l-i+a,a=i,t+=e,f[s]=r+a+t,c+=o,s+=x;return f}h.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=R(),C=j();B(w,"ndarray",C);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
