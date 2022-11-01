// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).randn={})}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,e,t.get),s&&u&&u.call(r,e,t.set),r};var c=t;function y(r,e,t){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r,e,t){c(r,e,{configurable:!1,enumerable:!1,get:t})}function h(r,e,t,n){c(r,e,{configurable:!1,enumerable:!1,get:t,set:n})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function w(r,e){return null!=r&&b.call(r,e)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var d=m()?function(r){var e,t,n;if(null==r)return g.call(r);t=r[v],e=w(r,v);try{r[v]=void 0}catch(e){return g.call(r)}return n=g.call(r),e?r[v]=t:delete r[v],n}:function(r){return g.call(r)};var E=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};function A(r){return"object"==typeof r&&null!==r&&!E(r)}var _=/./;function T(r){return"boolean"==typeof r}var j=Boolean.prototype.toString;var x=m();function L(r){return"object"==typeof r&&(r instanceof Boolean||(x?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function O(r){return T(r)||L(r)}function B(){return new Function("return this;")()}y(O,"isPrimitive",T),y(O,"isObject",L);var R="object"==typeof self?self:null,S="object"==typeof window?window:null,V="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof V?V:null;var P=function(r){if(arguments.length){if(!T(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return B()}if(R)return R;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),k=P.document&&P.document.childNodes,M=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;function U(r){return null!==r&&"object"==typeof r}function F(r){var e,t,n,o;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return U(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(N,"REGEXP",C),y(U,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!E(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(U));var Y="function"==typeof _||"object"==typeof M||"function"==typeof k?function(r){return F(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?F(r).toLowerCase():e};function G(r){return"function"===Y(r)}var W,q=Object.getPrototypeOf;W=G(Object.getPrototypeOf)?q:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===d(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=W;function z(r){return null==r?null:(r=Object(r),J(r))}var K=Object.prototype;function X(r){var e;return!!A(r)&&(!(e=z(r))||!w(r,"constructor")&&w(e,"constructor")&&G(e.constructor)&&"[object Function]"===d(e.constructor)&&w(e,"isPrototypeOf")&&G(e.isPrototypeOf)&&(e===K||function(r){var e;for(e in r)if(!w(r,e))return!1;return!0}(r)))}function D(r){return function(){return r}}function H(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Q(){}function Z(){}var $="foo"===Z.name;var rr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;function tr(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),t=e,r=(rr&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}var nr="function"==typeof Float64Array?Float64Array:void 0;var or=tr()?nr:function(){throw new Error("not implemented")},ir="function"==typeof Int8Array;var ar="function"==typeof Int8Array?Int8Array:null;var ur="function"==typeof Int8Array?Int8Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,128]),t=e,r=(ir&&t instanceof Int8Array||"[object Int8Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")},lr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var yr="function"==typeof Uint8Array?Uint8Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")},hr="function"==typeof Uint8ClampedArray;var pr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var mr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var gr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([-1,0,1,3.14,4.99,255,256]),t=e,r=(hr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===d(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")},br="function"==typeof Int16Array;var wr="function"==typeof Int16Array?Int16Array:null;var vr="function"==typeof Int16Array?Int16Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,32768]),t=e,r=(br&&t instanceof Int16Array||"[object Int16Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var _r="function"==typeof Uint16Array?Uint16Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Er&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Int32Array;var xr="function"==typeof Int32Array?Int32Array:null;var Lr="function"==typeof Int32Array?Int32Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,2147483648]),t=e,r=(jr&&t instanceof Int32Array||"[object Int32Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Br="function"==typeof Uint32Array;var Rr="function"==typeof Uint32Array?Uint32Array:null;var Sr="function"==typeof Uint32Array?Uint32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Br&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Ir="function"==typeof Float32Array;var Pr=Number.POSITIVE_INFINITY,kr="function"==typeof Float32Array?Float32Array:null;var Mr="function"==typeof Float32Array?Float32Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr([1,3.14,-3.14,5e40]),t=e,r=(Ir&&t instanceof Float32Array||"[object Float32Array]"===d(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Pr}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")},Cr=[or,Nr,Or,Vr,dr,Tr,fr,sr,gr],Ur=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Fr=tr()?z(or):Yr;function Yr(){}function Gr(r){return"number"==typeof r}Fr="TypedArray"===function(r){if(!1===G(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return $?r.name:C.exec(r.toString())[1]}(Fr)?Fr:Yr;var Wr=Number,qr=Wr.prototype.toString;var Jr=m();function zr(r){return"object"==typeof r&&(r instanceof Wr||(Jr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===d(r)))}function Kr(r){return Gr(r)||zr(r)}y(Kr,"isPrimitive",Gr),y(Kr,"isObject",zr);var Xr=Wr.NEGATIVE_INFINITY,Dr=Math.floor;function Hr(r){return Dr(r)===r}function Qr(r){return r<Pr&&r>Xr&&Hr(r)}function Zr(r){return Gr(r)&&Qr(r)}function $r(r){return zr(r)&&Qr(r.valueOf())}function re(r){return Zr(r)||$r(r)}function ee(r){return Zr(r)&&r>=0}function te(r){return $r(r)&&r.valueOf()>=0}function ne(r){return ee(r)||te(r)}y(re,"isPrimitive",Zr),y(re,"isObject",$r),y(ne,"isPrimitive",ee),y(ne,"isObject",te);function oe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Hr(r.length)&&r.length>=0&&r.length<=4294967295}function ie(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Hr(r.length)&&r.length>=0&&r.length<=9007199254740991}var ae="function"==typeof ArrayBuffer;function ue(r){return ae&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===d(r)}function fe(r,e){if(!(this instanceof fe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Gr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!Gr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}y(fe,"BYTES_PER_ELEMENT",8),y(fe.prototype,"BYTES_PER_ELEMENT",8),y(fe.prototype,"byteLength",16),y(fe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(fe.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var le="function"==typeof Math.fround?Math.fround:null,ce=new Nr(1);var ye="function"==typeof le?le:function(r){return ce[0]=r,ce[0]};function se(r,e){if(!(this instanceof se))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Gr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!Gr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ye(r)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ye(e)}),this}function he(r){return r instanceof fe||r instanceof se||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function pe(r){return Hr(r/2)}function me(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(se,"BYTES_PER_ELEMENT",4),y(se.prototype,"BYTES_PER_ELEMENT",4),y(se.prototype,"byteLength",8),y(se.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(se.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ge=me()?Symbol.iterator:null;function be(r){return r.re}function we(r){return r.im}function ve(r,e){return new Nr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function de(r,e){return new or(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ee(r,e){return r[e]}function Ae(r,e){return r.get(e)}function _e(r,e,t){r[e]=t}function Te(r,e,t){r.set(t,e)}function je(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Ae:Ee,setter:e?Te:_e}}function xe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(oe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!he(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(be(n),we(n))}return e}function Le(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,oe(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!he(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(be(i),we(i))}return n}function Oe(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!he(n=e[o]))return null;r[i]=be(n),r[i+1]=we(n),i+=2}return r}var Be=2*Nr.BYTES_PER_ELEMENT,Re=me();function Se(r){return r instanceof ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ve(r){return r===ke||"Complex128Array"===r.name}function Ie(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Be}function Pe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Be}function ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof ke))return 0===e?new ke:1===e?new ke(arguments[0]):2===e?new ke(arguments[0],arguments[1]):new ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Nr(0);else if(1===e)if(ee(arguments[0]))t=new Nr(2*arguments[0]);else if(ie(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&he(t[0])){if(null===(t=Oe(new Nr(2*n),t))){if(!pe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Nr(arguments[0])}}else{if(Ie(t))t=ve(t,0);else if(Pe(t))t=de(t,0);else if(!pe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Nr(t)}else if(ue(arguments[0])){if(!Hr((t=arguments[0]).byteLength/Be))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Be+". Byte length: `"+t.byteLength+"`.");t=new Nr(t)}else{if(!A(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Re)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!G(t[ge]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!G((t=t[ge]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=xe(t))instanceof Error)throw t;t=new Nr(t)}else{if(!ue(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ee(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Hr(r/Be))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Be+". Value: `"+r+"`.");if(2===e){if(!Hr((n=t.byteLength-r)/Be))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Be+". View byte length: `"+n+"`.");t=new Nr(t,r)}else{if(!ee(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Be>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Be+"`.");t=new Nr(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function Me(r){return r.re}function Ne(r){return r.im}function Ce(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(oe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!he(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Me(n),Ne(n))}return e}function Ue(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,oe(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!he(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Me(i),Ne(i))}return n}function Fe(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!he(n=e[o]))return null;r[i]=Me(n),r[i+1]=Ne(n),i+=2}return r}y(ke,"BYTES_PER_ELEMENT",Be),y(ke,"name","Complex64Array"),y(ke,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!G(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Se(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(he(l=n.call(e,r.get(c),c)))i[y]=be(l),i[y+1]=we(l);else{if(!(oe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(ie(r)){if(n){for(u=r.length,a=je(r),c=0;c<u;c++)if(!he(a.getter(r,c))){f=!0;break}if(f){if(!pe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(he(l=n.call(e,a.getter(r,c),c)))i[y]=be(l),i[y+1]=we(l);else{if(!(oe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(A(r)&&Re&&G(r[ge])){if(!G((i=r[ge]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Le(i,n,e):xe(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(ke,"of",(function(){var r,e;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),s(ke.prototype,"buffer",(function(){return this._buffer.buffer})),s(ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),s(ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(ke.prototype,"BYTES_PER_ELEMENT",ke.BYTES_PER_ELEMENT),y(ke.prototype,"copyWithin",(function(r,e){if(!Se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(ke.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new se(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),y(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ge&&y(t,ge,(function(){return e.entries()})),t})),y(ke.prototype,"get",(function(r){var e;if(!Se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ee(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new se((e=this._buffer)[r*=2],e[r+1])})),s(ke.prototype,"length",(function(){return this._length})),y(ke.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ee(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(he(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=be(r),void(n[t+1]=we(r))}if(Se(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Be,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Nr(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ie(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!he(r[f])){i=!0;break}if(i){if(!pe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Be,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Nr(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=be(u),n[t+1]=we(u),t+=2}}));var Ye=2*or.BYTES_PER_ELEMENT,Ge=me();function We(r){return r instanceof Ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Ke||"Complex64Array"===r.name}function Je(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ye/2}function ze(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ye}function Ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ke))return 0===e?new Ke:1===e?new Ke(arguments[0]):2===e?new Ke(arguments[0],arguments[1]):new Ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new or(0);else if(1===e)if(ee(arguments[0]))t=new or(2*arguments[0]);else if(ie(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&he(t[0])){if(null===(t=Fe(new or(2*n),t))){if(!pe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new or(arguments[0])}}else{if(Je(t))t=ve(t,0);else if(ze(t))t=de(t,0);else if(!pe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new or(t)}else if(ue(arguments[0])){if(!Hr((t=arguments[0]).byteLength/Ye))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ye+". Byte length: `"+t.byteLength+"`.");t=new or(t)}else{if(!A(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ge)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!G(t[ge]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!G((t=t[ge]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ce(t))instanceof Error)throw t;t=new or(t)}else{if(!ue(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ee(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Hr(r/Ye))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ye+". Value: `"+r+"`.");if(2===e){if(!Hr((n=t.byteLength-r)/Ye))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ye+". View byte length: `"+n+"`.");t=new or(t,r)}else{if(!ee(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Ye>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Ye+"`.");t=new or(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(Ke,"BYTES_PER_ELEMENT",Ye),y(Ke,"name","Complex128Array"),y(Ke,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!G(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(We(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(he(l=n.call(e,r.get(c),c)))i[y]=Me(l),i[y+1]=Ne(l);else{if(!(oe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(ie(r)){if(n){for(u=r.length,a=je(r),c=0;c<u;c++)if(!he(a.getter(r,c))){f=!0;break}if(f){if(!pe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(he(l=n.call(e,a.getter(r,c),c)))i[y]=Me(l),i[y+1]=Ne(l);else{if(!(oe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(A(r)&&Ge&&G(r[ge])){if(!G((i=r[ge]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ue(i,n,e):Ce(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(Ke,"of",(function(){var r,e;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),s(Ke.prototype,"buffer",(function(){return this._buffer.buffer})),s(Ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),s(Ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(Ke.prototype,"BYTES_PER_ELEMENT",Ke.BYTES_PER_ELEMENT),y(Ke.prototype,"copyWithin",(function(r,e){if(!We(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(Ke.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!We(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new fe(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),y(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ge&&y(t,ge,(function(){return e.entries()})),t})),y(Ke.prototype,"get",(function(r){var e;if(!We(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ee(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new fe((e=this._buffer)[r*=2],e[r+1])})),s(Ke.prototype,"length",(function(){return this._length})),y(Ke.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!We(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ee(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(he(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Me(r),void(n[t+1]=Ne(r))}if(We(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ye,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new or(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ie(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!he(r[f])){i=!0;break}if(i){if(!pe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ye,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new or(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Me(u),n[t+1]=Ne(u),t+=2}}));var Xe=[Ke,ke],De=["Complex64Array","Complex128Array"];function He(r,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}var Qe=[[or,"Float64Array"],[Nr,"Float32Array"],[Or,"Int32Array"],[Vr,"Uint32Array"],[dr,"Int16Array"],[Tr,"Uint16Array"],[fr,"Int8Array"],[sr,"Uint8Array"],[gr,"Uint8ClampedArray"],[ke,"Complex64Array"],[Ke,"Complex128Array"]];function Ze(r){var e,t;for(t=0;t<Qe.length;t++)if(He(r,Qe[t][0]))return Qe[t][1];for(;r;){for(e=F(r),t=0;t<Qe.length;t++)if(e===Qe[t][1])return Qe[t][1];r=z(r)}}function $e(r){var e,t,n;if(function(r){var e,t;if("object"!=typeof r||null===r)return!1;if(r instanceof Fr)return!0;for(t=0;t<Cr.length;t++)if(r instanceof Cr[t])return!0;for(;r;){for(e=F(r),t=0;t<Ur.length;t++)if(Ur[t]===e)return!0;r=z(r)}return!1}(r))e=r;else{if(!function(r){var e,t;if("object"!=typeof r||null===r)return!1;for(t=0;t<Xe.length;t++)if(r instanceof Xe[t])return!0;for(;r;){for(e=F(r),t=0;t<De.length;t++)if(De[t]===e)return!0;r=z(r)}return!1}(r))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");e=8===r.BYTES_PER_ELEMENT?ve(r,0):de(r,0)}for(t={type:Ze(r),data:[]},n=0;n<e.length;n++)t.data.push(e[n]);return t}var rt="improved-ziggurat",et=!0,tt={};function nt(r){var e,t,n;if(e={name:rt,copy:et},arguments.length){if(!X(r))throw new TypeError(H("0PO4K",r));if(w(r,"name")&&(e.name=r.name),w(r,"prng")){if(e.prng=r.prng,void 0===e.prng)throw new TypeError(H("0PO7q","prng",e.prng))}else if(w(r,"state")){if(e.state=r.state,void 0===e.state)throw new TypeError(H("0PO7q","state",e.state))}else if(w(r,"seed")&&(e.seed=r.seed,void 0===e.seed))throw new TypeError(H("0PO7q","seed",e.seed));if(w(r,"copy")&&(e.copy=r.copy,!T(e.copy)))throw new TypeError(H("0PO30","copy",e.copy))}if(void 0===(n=tt[e.name]))throw new Error(H("0PO7r",e.name));return t=void 0===e.prng?void 0===e.state?void 0===e.seed?n.factory():n.factory({seed:e.seed}):n.factory({state:e.state,copy:e.copy}):n.factory({prng:e.prng}),y(p,"NAME","randn"),e.prng?(y(p,"seed",null),y(p,"seedLength",null),h(p,"state",D(null),Q),y(p,"stateLength",null),y(p,"byteLength",null),y(p,"toJSON",D(null))):(s(p,"seed",o),s(p,"seedLength",i),h(p,"state",f,l),s(p,"stateLength",a),s(p,"byteLength",u),y(p,"toJSON",c)),y(p,"PRNG",t.PRNG),p;function o(){return t.seed}function i(){return t.seedLength}function a(){return t.stateLength}function u(){return t.byteLength}function f(){return t.state}function l(r){t.state=r}function c(){var r={type:"PRNG"};return r.name=p.NAME+"-"+t.NAME,r.state=$e(t.state),r.params=[],r}function p(){return t()}}tt["box-muller"]=require("@stdlib/random-base-box-muller"),tt["improved-ziggurat"]=require("@stdlib/random-base-improved-ziggurat");var ot=nt();y(ot,"factory",nt),r.default=ot,r.factory=nt,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
