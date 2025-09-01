"use strict";var R=function(c,r){return function(){return r||c((r={exports:{}}).exports,r),r.exports}};var z=R(function(S,w){
var j=require('@stdlib/math-base-special-abs/dist');function G(c,r,b,n,g,i,l,p){var q,f,s,x,k,o,u,a,t,e,v,y,P;if(q=b.data,f=i.data,s=b.accessors[0],x=i.accessors[1],o=g,u=p,r===0)for(P=0;P<c&&(e=s(q,o),e===0);P++)r+=e,x(f,u,r),o+=n,u+=l;else P=0;for(k=0,a=0;P<c;P++)e=s(q,o),v=r+e,j(r)>=j(e)?y=r-v+e:y=e-v+r,r=v,v=a+y,j(a)>=j(y)?t=a-v+y:t=y-v+a,a=v,k+=t,x(f,u,r+a+k),o+=n,u+=l;return i}w.exports=G
});var h=R(function(T,B){
var A=require('@stdlib/array-base-arraylike2object/dist'),O=require('@stdlib/math-base-special-abs/dist'),H=z();function I(c,r,b,n,g,i,l,p){var q,f,s,x,k,o,u,a,t,e,v;if(c<=0)return i;if(x=A(b),k=A(i),x.accessorProtocol||k.accessorProtocol)return H(c,r,x,n,g,k,l,p),i;if(f=g,s=p,r===0)for(v=0;v<c&&(a=b[f],a===0);v++)r+=a,i[s]=r,f+=n,s+=l;else v=0;for(q=0,o=0;v<c;v++)a=b[f],t=r+a,O(r)>=O(a)?e=r-t+a:e=a-t+r,r=t,t=o+e,O(o)>=O(e)?u=o-t+e:u=e-t+o,o=t,q+=u,i[s]=r+o+q,f+=n,s+=l;return i}B.exports=I
});var E=R(function(U,D){
var C=require('@stdlib/strided-base-stride2offset/dist'),J=h();function K(c,r,b,n,g,i){var l=C(c,n),p=C(c,i);return J(c,r,b,n,l,g,i,p)}D.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),M=h();L(F,"ndarray",M);module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
