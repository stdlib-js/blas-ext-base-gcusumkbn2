// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;function c(e){return Math.abs(e)}function _(e,t,r,n,o,a){var i,u,l,f,_,p,d,b,s;if(e<=0)return o;for(u=n<0?(1-e)*n:0,l=a<0?(1-e)*a:0,i=0,f=0,s=0;s<e;s++)d=t+(p=r[u]),b=c(t)>=c(p)?t-d+p:p-d+t,t=d,d=f+b,_=c(f)>=c(b)?f-d+b:b-d+f,f=d,i+=_,o[l]=t+f+i,u+=n,l+=a;return o}function p(e,t,r,n,o,a,i,u){var l,f,_,p,d,b,s,y,v;if(e<=0)return a;for(f=o,_=u,l=0,p=0,v=0;v<e;v++)s=t+(b=r[f]),y=c(t)>=c(b)?t-s+b:b-s+t,t=s,s=p+y,d=c(p)>=c(y)?p-s+y:y-s+p,p=s,l+=d,a[_]=t+p+l,f+=n,_+=i;return a}t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||f.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},t(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p}),e.default=_,e.ndarray=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).gcusumkbn2={});
//# sourceMappingURL=index.js.map
