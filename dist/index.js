"use strict";var R=function(c,r){return function(){try{return r||c((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var z=R(function(S,w){
var j=require('@stdlib/math-base-special-abs/dist');function G(c,r,n,f,g,i,l,p){var q,s,u,x,k,o,b,a,t,e,v,y,P;if(q=n.data,s=i.data,u=n.accessors[0],x=i.accessors[1],o=g,b=p,r===0)for(P=0;P<c&&(e=u(q,o),e===0);P++)r+=e,x(s,b,r),o+=f,b+=l;else P=0;for(k=0,a=0;P<c;P++)e=u(q,o),v=r+e,j(r)>=j(e)?y=r-v+e:y=e-v+r,r=v,v=a+y,j(a)>=j(y)?t=a-v+y:t=y-v+a,a=v,k+=t,x(s,b,r+a+k),o+=f,b+=l;return i}w.exports=G
});var h=R(function(T,B){
var A=require('@stdlib/array-base-arraylike2object/dist'),O=require('@stdlib/math-base-special-abs/dist'),H=z();function I(c,r,n,f,g,i,l,p){var q,s,u,x,k,o,b,a,t,e,v;if(c<=0)return i;if(x=A(n),k=A(i),x.accessorProtocol||k.accessorProtocol)return H(c,r,x,f,g,k,l,p),i;if(s=g,u=p,r===0)for(v=0;v<c&&(a=n[s],a===0);v++)r+=a,i[u]=r,s+=f,u+=l;else v=0;for(q=0,o=0;v<c;v++)a=n[s],t=r+a,O(r)>=O(a)?e=r-t+a:e=a-t+r,r=t,t=o+e,O(o)>=O(e)?b=o-t+e:b=e-t+o,o=t,q+=b,i[u]=r+o+q,s+=f,u+=l;return i}B.exports=I
});var E=R(function(U,D){
var C=require('@stdlib/strided-base-stride2offset/dist'),J=h();function K(c,r,n,f,g,i){var l=C(c,f),p=C(c,i);return J(c,r,n,f,l,g,i,p)}D.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),M=h();L(F,"ndarray",M);module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
