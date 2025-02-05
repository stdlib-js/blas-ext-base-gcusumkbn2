"use strict";var O=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var w=O(function(Q,h){
var d=require('@stdlib/math-base-special-abs/dist');function F(t,r,o,n,q,e,b,l){var x,y,g,k,u,s,f,a,v,c,i,p,j;for(x=o.data,y=e.data,g=o.accessors[0],k=e.accessors[1],s=q,f=l,u=0,a=0,j=0;j<t;j++)c=g(x,s),i=r+c,d(r)>=d(c)?p=r-i+c:p=c-i+r,r=i,i=a+p,d(a)>=d(p)?v=a-i+p:v=p-i+a,a=i,u+=v,k(y,f,r+a+u),s+=n,f+=b;return e}h.exports=F
});var R=O(function(S,A){
var z=require('@stdlib/array-base-arraylike2object/dist'),P=require('@stdlib/math-base-special-abs/dist'),G=w();function H(t,r,o,n,q,e,b,l){var x,y,g,k,u,s,f,a,v,c,i;if(t<=0)return e;if(k=z(o),u=z(e),k.accessorProtocol||u.accessorProtocol)return G(t,r,k,n,q,u,b,l),e;for(y=q,g=l,x=0,s=0,i=0;i<t;i++)a=o[y],v=r+a,P(r)>=P(a)?c=r-v+a:c=a-v+r,r=v,v=s+c,P(s)>=P(c)?f=s-v+c:f=c-v+s,s=v,x+=f,e[g]=r+s+x,y+=n,g+=b;return e}A.exports=H
});var D=O(function(T,C){
var B=require('@stdlib/strided-base-stride2offset/dist'),I=R();function J(t,r,o,n,q,e){var b=B(t,n),l=B(t,e);return I(t,r,o,n,b,q,e,l)}C.exports=J
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=D(),L=R();K(E,"ndarray",L);module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
