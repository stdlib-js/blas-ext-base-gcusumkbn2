// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var t=e;var n=e;var s=function(r,e,n,s,a,i){var d,o,f,m,l,u,p,v,j;if(r<=0)return a;for(o=s<0?(1-r)*s:0,f=i<0?(1-r)*i:0,d=0,m=0,j=0;j<r;j++)p=e+(u=n[o]),v=t(e)>=t(u)?e-p+u:u-p+e,e=p,p=m+v,l=t(m)>=t(v)?m-p+v:v-p+m,m=p,d+=l,a[f]=e+m+d,o+=s,f+=i;return a},a=function(r,e,t,s,a,i,d,o){var f,m,l,u,p,v,j,b,c;if(r<=0)return i;for(m=a,l=o,f=0,u=0,c=0;c<r;c++)j=e+(v=t[m]),b=n(e)>=n(v)?e-j+v:v-j+e,e=j,j=u+b,p=n(u)>=n(b)?u-j+b:b-j+u,u=j,f+=p,i[l]=e+u+f,m+=s,l+=d;return i};r(s,"ndarray",a);var i=s;export{i as default,a as ndarray};
//# sourceMappingURL=index.mjs.map
