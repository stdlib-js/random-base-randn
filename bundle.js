!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).randn=n()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,s=function(t,n,r){var e,l,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),s="get"in r,p="set"in r,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t},p=e,y=s,v=(l=r()?p:y,l);var d=function(t,n,r){v(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},g=d,h=l;var b=function(t,n,r){h(t,n,{configurable:!1,enumerable:!1,get:r})},m=b,w=l;var A=function(t,n,r,e){w(t,n,{configurable:!1,enumerable:!1,get:r,set:e})},E=A;var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var N=function(){return O&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,T=j;var _=function(t){return T.call(t)},L=Object.prototype.hasOwnProperty;var I=function(t,n){return null!=t&&L.call(t,n)},M="function"==typeof Symbol?Symbol.toStringTag:"",P=I,U=M,S=j;var R=_,x=function(t){var n,r,e;if(null==t)return S.call(t);r=t[U],n=P(t,U);try{t[U]=void 0}catch(n){return S.call(t)}return e=S.call(t),n?t[U]=r:delete t[U],e},F=N()?x:R,G=F;var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===G(t)},V=B;var q=function(t){return"object"==typeof t&&null!==t&&!V(t)},C=/./;var Y=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var z=F,H=function(t){try{return k.call(t),!0}catch(t){return!1}},J=N();var X=function(t){return"object"==typeof t&&(t instanceof Boolean||(J?H(t):"[object Boolean]"===z(t)))},W=Y,D=X;var K=g,Q=function(t){return W(t)||D(t)},Z=X;K(Q,"isPrimitive",Y),K(Q,"isObject",Z);var $=Q;var tt="object"==typeof self?self:null,nt="object"==typeof window?window:null,rt=$.isPrimitive,et=function(){return new Function("return this;")()},ot=tt,it=nt,at="object"==typeof t?t:null;var ut=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return et()}if(ot)return ot;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ft=ut(),ct=ft.document&&ft.document.childNodes,lt=Int8Array,st=C,pt=ct,yt=lt;var vt=function(){return"function"==typeof st||"object"==typeof yt||"function"==typeof pt};var dt=function(){return/^\s*function\s*([^(]*)/i},gt=dt;g(gt,"REGEXP",dt());var ht=gt,bt=B;var mt=function(t){return null!==t&&"object"==typeof t};g(mt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!bt(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(mt));var wt=mt;var At=F,Et=ht.REGEXP,Ot=function(t){return wt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Nt=function(t){var n,r,e;if(("Object"===(r=At(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=Et.exec(e.toString()))return n[1]}return Ot(t)?"Buffer":r},jt=Nt,Tt=jt;var _t=function(t){var n;return null===t?"null":"object"===(n=typeof t)?Tt(t).toLowerCase():n},Lt=jt;var It=_t,Mt=function(t){return Lt(t).toLowerCase()},Pt=vt()?Mt:It;var Ut=function(t){return"function"===Pt(t)},St=Object.getPrototypeOf;var Rt=function(t){return t.__proto__},xt=F,Ft=Rt;var Gt=function(t){var n=Ft(t);return n||null===n?n:"[object Function]"===xt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Bt=St,Vt=Gt,qt=Ut(Object.getPrototypeOf)?Bt:Vt;var Ct=function(t){return null==t?null:(t=Object(t),qt(t))},Yt=q,kt=Ut,zt=Ct,Ht=I,Jt=F,Xt=Object.prototype;var Wt=function(t){var n;return!!Yt(t)&&(!(n=zt(t))||!Ht(t,"constructor")&&Ht(n,"constructor")&&kt(n.constructor)&&"[object Function]"===Jt(n.constructor)&&Ht(n,"isPrototypeOf")&&kt(n.isPrototypeOf)&&(n===Xt||function(t){var n;for(n in t)if(!Ht(t,n))return!1;return!0}(t)))},Dt=Wt;var Kt=function(t){return function(){return t}};var Qt=function(){};var Zt=function(){};var $t=Ut,tn=ht.REGEXP,nn=function(){return"foo"===Zt.name}();var rn=function(t){if(!1===$t(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return nn?t.name:tn.exec(t.toString())[1]},en=rn,on=F,an="function"==typeof Float64Array;var un="function"==typeof Float64Array?Float64Array:null,fn=function(t){return an&&t instanceof Float64Array||"[object Float64Array]"===on(t)},cn=un;var ln=function(){var t,n;if("function"!=typeof cn)return!1;try{n=new cn([1,3.14,-3.14,NaN]),t=fn(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},sn=ln;var pn="function"==typeof Float64Array?Float64Array:void 0,yn=function(){throw new Error("not implemented")},vn=sn()?pn:yn,dn=F,gn="function"==typeof Int8Array;var hn="function"==typeof Int8Array?Int8Array:null,bn=function(t){return gn&&t instanceof Int8Array||"[object Int8Array]"===dn(t)},mn=hn;var wn=function(){var t,n;if("function"!=typeof mn)return!1;try{n=new mn([1,3.14,-3.14,128]),t=bn(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t};var An="function"==typeof Int8Array?Int8Array:void 0,En=function(){throw new Error("not implemented")},On=wn()?An:En,Nn=F,jn="function"==typeof Uint8Array;var Tn="function"==typeof Uint8Array?Uint8Array:null,_n=function(t){return jn&&t instanceof Uint8Array||"[object Uint8Array]"===Nn(t)},Ln=Tn;var In=function(){var t,n;if("function"!=typeof Ln)return!1;try{n=new Ln(n=[1,3.14,-3.14,256,257]),t=_n(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};var Mn="function"==typeof Uint8Array?Uint8Array:void 0,Pn=function(){throw new Error("not implemented")},Un=In()?Mn:Pn,Sn=F,Rn="function"==typeof Uint8ClampedArray;var xn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Fn=function(t){return Rn&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Sn(t)},Gn=xn;var Bn=function(){var t,n;if("function"!=typeof Gn)return!1;try{n=new Gn([-1,0,1,3.14,4.99,255,256]),t=Fn(n)&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t};var Vn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,qn=function(){throw new Error("not implemented")},Cn=Bn()?Vn:qn,Yn=F,kn="function"==typeof Int16Array;var zn="function"==typeof Int16Array?Int16Array:null,Hn=function(t){return kn&&t instanceof Int16Array||"[object Int16Array]"===Yn(t)},Jn=zn;var Xn=function(){var t,n;if("function"!=typeof Jn)return!1;try{n=new Jn([1,3.14,-3.14,32768]),t=Hn(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){t=!1}return t};var Wn="function"==typeof Int16Array?Int16Array:void 0,Dn=function(){throw new Error("not implemented")},Kn=Xn()?Wn:Dn,Qn=F,Zn="function"==typeof Uint16Array;var $n="function"==typeof Uint16Array?Uint16Array:null,tr=function(t){return Zn&&t instanceof Uint16Array||"[object Uint16Array]"===Qn(t)},nr=$n;var rr=function(){var t,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,65536,65537]),t=tr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};var er="function"==typeof Uint16Array?Uint16Array:void 0,or=function(){throw new Error("not implemented")},ir=rr()?er:or,ar=F,ur="function"==typeof Int32Array;var fr="function"==typeof Int32Array?Int32Array:null,cr=function(t){return ur&&t instanceof Int32Array||"[object Int32Array]"===ar(t)},lr=fr;var sr=function(){var t,n;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,2147483648]),t=cr(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-2147483648===n[3]}catch(n){t=!1}return t};var pr="function"==typeof Int32Array?Int32Array:void 0,yr=function(){throw new Error("not implemented")},vr=sr()?pr:yr,dr=F,gr="function"==typeof Uint32Array;var hr=function(t){return gr&&t instanceof Uint32Array||"[object Uint32Array]"===dr(t)},br=4294967295,mr="function"==typeof Uint32Array?Uint32Array:null,wr=hr,Ar=mr;var Er=function(){var t,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=wr(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};var Or="function"==typeof Uint32Array?Uint32Array:void 0,Nr=function(){throw new Error("not implemented")},jr=Er()?Or:Nr,Tr=F,_r="function"==typeof Float32Array;var Lr=function(t){return _r&&t instanceof Float32Array||"[object Float32Array]"===Tr(t)},Ir=Number.POSITIVE_INFINITY,Mr="function"==typeof Float32Array?Float32Array:null,Pr=Lr,Ur=Ir,Sr=Mr;var Rr=function(){var t,n;if("function"!=typeof Sr)return!1;try{n=new Sr([1,3.14,-3.14,5e40]),t=Pr(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Ur}catch(n){t=!1}return t};var xr="function"==typeof Float32Array?Float32Array:void 0,Fr=function(){throw new Error("not implemented")},Gr=Rr()?xr:Fr,Br=jt,Vr=en,qr=Ct,Cr=vn,Yr=[vn,Gr,vr,jr,Kn,ir,On,Un,Cn],kr=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],zr=sn()?qr(Cr):Hr;function Hr(){}zr="TypedArray"===Vr(zr)?zr:Hr;var Jr=function(t,n){if("function"!=typeof n)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+n+"`.");return t instanceof n},Xr=jt,Wr=Ct,Dr=[[vn,"Float64Array"],[Gr,"Float32Array"],[vr,"Int32Array"],[jr,"Uint32Array"],[Kn,"Int16Array"],[ir,"Uint16Array"],[On,"Int8Array"],[Un,"Uint8Array"],[Cn,"Uint8ClampedArray"]];var Kr=function(t){var n,r;if("object"!=typeof t||null===t)return!1;if(t instanceof zr)return!0;for(r=0;r<Yr.length;r++)if(t instanceof Yr[r])return!0;for(;t;){for(n=Br(t),r=0;r<kr.length;r++)if(kr[r]===n)return!0;t=qr(t)}return!1},Qr=function(t){var n,r;for(r=0;r<Dr.length;r++)if(Jr(t,Dr[r][0]))return Dr[r][1];for(;t;){for(n=Xr(t),r=0;r<Dr.length;r++)if(n===Dr[r][1])return Dr[r][1];t=Wr(t)}};var Zr=function(t){var n,r;if(!Kr(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((n={}).type=Qr(t),n.data=[],r=0;r<t.length;r++)n.data.push(t[r]);return n},$r={name:"improved-ziggurat",copy:!0},te=Math.floor,ne=te;var re=function(t){return ne(t)===t},ee=re;var oe=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ee(t.length)&&t.length>=0&&t.length<=9007199254740991};var ie=function(t){return"number"==typeof t},ae=Number,ue=ae.prototype.toString;var fe=F,ce=ae,le=function(t){try{return ue.call(t),!0}catch(t){return!1}},se=N();var pe=function(t){return"object"==typeof t&&(t instanceof ce||(se?le(t):"[object Number]"===fe(t)))},ye=ie,ve=pe;var de=g,ge=function(t){return ye(t)||ve(t)},he=pe;de(ge,"isPrimitive",ie),de(ge,"isObject",he);var be=ge,me=ae.NEGATIVE_INFINITY,we=Ir,Ae=me,Ee=re;var Oe=function(t){return t<we&&t>Ae&&Ee(t)},Ne=be.isPrimitive,je=Oe;var Te=function(t){return Ne(t)&&je(t)},_e=be.isObject,Le=Oe;var Ie=function(t){return _e(t)&&Le(t.valueOf())},Me=Te,Pe=Ie;var Ue=g,Se=function(t){return Me(t)||Pe(t)},Re=Ie;Ue(Se,"isPrimitive",Te),Ue(Se,"isObject",Re);var xe=Se.isPrimitive;var Fe=function(t){return xe(t)&&t>0},Ge=Se.isObject;var Be=function(t){return Ge(t)&&t.valueOf()>0},Ve=Fe,qe=Be;var Ce=g,Ye=function(t){return Ve(t)||qe(t)},ke=Be;Ce(Ye,"isPrimitive",Fe),Ce(Ye,"isObject",ke);var ze=Ye,He=Ir;var Je=function(t){return t!=t},Xe=function(t){return 0===t&&1/t===He},We=Je,De=me,Ke=Ir;var Qe=function(t,n){var r,e,o,i;if(2===(r=arguments.length))return We(t)||We(n)?NaN:t===Ke||n===Ke?Ke:t===n&&0===t?Xe(t)?t:n:t>n?t:n;for(e=De,i=0;i<r;i++){if(We(o=arguments[i])||o===Ke)return o;(o>e||o===e&&0===o&&Xe(o))&&(e=o)}return e},Ze=Qe;var $e=function(t,n){var r,e;return((r=(65535&(t>>>=0))>>>0)*(e=(65535&(n>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+r*(n>>>16>>>0)<<16>>>0)>>>0};var to=function(t,n,r,e,o){var i,a,u,f;if(t<=0)return e;if(1===r&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)e[f]=n[f];if(t<8)return e;for(f=u;f<t;f+=8)e[f]=n[f],e[f+1]=n[f+1],e[f+2]=n[f+2],e[f+3]=n[f+3],e[f+4]=n[f+4],e[f+5]=n[f+5],e[f+6]=n[f+6],e[f+7]=n[f+7];return e}for(i=r<0?(1-t)*r:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=n[i],i+=r,a+=o;return e};var no=function(t,n,r,e,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=e,f=a,1===r&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=n[u],u+=r,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=n[u],o[f+1]=n[u+1],o[f+2]=n[u+2],o[f+3]=n[u+3],o[f+4]=n[u+4],o[f+5]=n[u+5],o[f+6]=n[u+6],o[f+7]=n[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=n[u],u+=r,f+=i;return o},ro=to;g(ro,"ndarray",no);var eo=te;var oo=function(){return eo(1+4294967294*Math.random())>>>0},io=g,ao=m,uo=E,fo=I,co=Dt,lo=oe,so=hr,po=$.isPrimitive,yo=ze.isPrimitive,vo=br,go=jr,ho=Ze,bo=$e,mo=ro,wo=Zr,Ao=oo,Eo=624,Oo=4294967295,No=19650218,jo=2147483648,To=2147483647,_o=2636928640,Lo=4022730752,Io=[0,2567483615],Mo=1/9007199254740992,Po=67108864,Uo=.9999999999999999,So=630;function Ro(t,n){var r;return r=n?"option":"argument",t.length<631?new RangeError("invalid "+r+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+r+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+r+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==Eo?new RangeError("invalid "+r+". `state` array has an incompatible state length. Expected: "+Eo+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+r+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-So?new RangeError("invalid "+r+". `state` array length is incompatible with seed section length. Expected: "+(t.length-So)+". Actual: "+t[629]+"."):null}function xo(t,n,r){var e;for(t[0]=r>>>0,e=1;e<n;e++)r=((r=t[e-1]>>>0)^r>>>30)>>>0,t[e]=bo(r,1812433253)+e>>>0;return t}function Fo(t,n,r,e){var o,i,a,u;for(i=1,a=0,u=ho(n,e);u>0;u--)o=t[i-1]>>>0,o=bo(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+r[a]+a>>>0,a+=1,(i+=1)>=n&&(t[0]=t[n-1],i=1),a>=e&&(a=0);for(u=n-1;u>0;u--)o=t[i-1]>>>0,o=bo(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=n&&(t[0]=t[n-1],i=1);return t[0]=2147483648,t}function Go(t){var n,r;for(227,r=0;r<227;r++)n=t[r]&jo|t[r+1]&To,t[r]=t[r+397]^n>>>1^Io[1&n];for(623;r<623;r++)n=t[r]&jo|t[r+1]&To,t[r]=t[r-227]^n>>>1^Io[1&n];return n=t[623]&jo|t[0]&To,t[623]=t[396]^n>>>1^Io[1&n],t}var Bo=function(t){var n,r,e,o,i,a;if(e={},arguments.length){if(!co(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(fo(t,"copy")&&(e.copy=t.copy,!po(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(fo(t,"state")){if(r=t.state,e.state=!0,!so(r))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r+"`.");if(a=Ro(r,!0))throw a;!1===e.copy?n=r:(n=new go(r.length),mo(r.length,r,1,n,1)),r=new go(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,Eo),o=new go(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,r[629])}if(void 0===o)if(fo(t,"seed"))if(o=t.seed,e.seed=!0,yo(o)){if(o>Oo)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===lo(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!yo(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>Oo)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(n=new go(So+i))[0]=1,n[1]=3,n[2]=Eo,n[627]=1,n[628]=Eo,n[629]=i,mo.ndarray(i,o,1,0,n,1,630),r=new go(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,Eo),o=new go(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,i),r=Fo(r=xo(r,Eo,No),Eo,o,i)}else o=Ao()>>>0}else o=Ao()>>>0;return void 0===r&&((n=new go(631))[0]=1,n[1]=3,n[2]=Eo,n[627]=1,n[628]=Eo,n[629]=1,n[630]=o,r=new go(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,Eo),o=new go(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,1),r=xo(r,Eo,o)),io(v,"NAME","mt19937"),ao(v,"seed",u),ao(v,"seedLength",f),uo(v,"state",s,p),ao(v,"stateLength",c),ao(v,"byteLength",l),io(v,"toJSON",y),io(v,"MIN",1),io(v,"MAX",vo),io(v,"normalized",d),io(d,"NAME",v.NAME),ao(d,"seed",u),ao(d,"seedLength",f),uo(d,"state",s,p),ao(d,"stateLength",c),ao(d,"byteLength",l),io(d,"toJSON",y),io(d,"MIN",0),io(d,"MAX",Uo),v;function u(){var t=n[629];return mo(t,o,1,new go(t),1)}function f(){return n[629]}function c(){return n.length}function l(){return n.byteLength}function s(){var t=n.length;return mo(t,n,1,new go(t),1)}function p(t){var i;if(!so(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=Ro(t,!1))throw i;!1===e.copy?e.state&&t.length===n.length?mo(t.length,t,1,n,1):(n=t,e.state=!0):(t.length!==n.length&&(n=new go(t.length)),mo(t.length,t,1,n,1)),r=new go(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,Eo),o=new go(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,n[629])}function y(){var t={type:"PRNG"};return t.name=v.NAME,t.state=wo(n),t.params=[],t}function v(){var t,e;return(e=n[628])>=Eo&&(r=Go(r),e=0),t=r[e],n[628]=e+1,t^=t>>>11,t^=t<<7&_o,t^=t<<15&Lo,(t^=t>>>18)>>>0}function d(){var t=v()>>>5,n=v()>>>6;return(t*Po+n)*Mo}},Vo=Bo({seed:oo()});g(Vo,"factory",Bo);var qo,Co=Vo,Yo=Math.sqrt,ko={uint16:ir,uint8:Un};(qo=new ko.uint16(1))[0]=4660;var zo=52===new ko.uint8(qo.buffer)[0],Ho=jr,Jo=!0===zo?1:0,Xo=new vn(1),Wo=new Ho(Xo.buffer);var Do=function(t){return Xo[0]=t,Wo[Jo]},Ko=jr,Qo=!0===zo?1:0,Zo=new vn(1),$o=new Ko(Zo.buffer);var ti=function(t,n){return Zo[0]=t,$o[Qo]=n>>>0,Zo[0]};var ni=Do,ri=ti,ei=Je,oi=me,ii=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},ai=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},ui=.6931471803691238,fi=1.9082149292705877e-10,ci=1048575;var li=function(t){var n,r,e,o,i,a,u,f,c,l,s;return 0===t?oi:ei(t)||t<0?NaN:(o=0,(r=ni(t))<1048576&&(o-=54,r=ni(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-1023|0,o+=(u=(r&=ci)+614244&1048576|0)>>20|0,a=(t=ri(t,r|1072693248^u))-1,(ci&2+r)<3?0===a?0===o?0:o*ui+o*fi:(i=a*a*(.5-.3333333333333333*a),0===o?a-i:o*ui-(i-o*fi-a)):(u=r-398458|0,f=440401-r|0,e=(l=(s=(c=a/(2+a))*c)*s)*ii(l),i=s*ai(l)+e,(u|=f)>0?(n=.5*a*a,0===o?a-(n-c*(n+i)):o*ui-(n-(c*(n+i)+o*fi)-a)):0===o?a-c*(a-i):o*ui-(c*(a-i)-o*fi-a))))},si=li;var pi=function(t){return 0===t?.0416666666666666:.0416666666666666+t*(2480158728947673e-20*t-.001388888888887411)},yi=function(t){return 0===t?-2.7557314351390663e-7:t*(2.087572321298175e-9+-11359647557788195e-27*t)-2.7557314351390663e-7};var vi=function(t,n){var r,e,o,i;return o=(i=t*t)*i,e=i*pi(i),e+=o*o*yi(i),(o=1-(r=.5*i))+(1-o-r+(i*e-t*n))},di=-.16666666666666632;var gi=function(t,n){var r,e,o;return r=.00833333333332249+(o=t*t)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*t,0===n?t+e*(di+o*r):t-(o*(.5*n-e*r)-n-e*di)},hi=jr,bi=!0===zo?0:1,mi=new vn(1),wi=new hi(mi.buffer);var Ai,Ei,Oi=function(t){return mi[0]=t,wi[bi]};!0===zo?(Ai=1,Ei=0):(Ai=0,Ei=1);var Ni=jr,ji={HIGH:Ai,LOW:Ei},Ti=new vn(1),_i=new Ni(Ti.buffer),Li=ji.HIGH,Ii=ji.LOW;var Mi=function(t,n){return _i[Li]=t,_i[Ii]=n,Ti[0]},Pi=Mi,Ui=Ir,Si=me;var Ri,xi,Fi=function(t){return t===Ui||t===Si};!0===zo?(Ri=1,xi=0):(Ri=0,xi=1);var Gi=jr,Bi={HIGH:Ri,LOW:xi},Vi=new vn(1),qi=new Gi(Vi.buffer),Ci=Bi.HIGH,Yi=Bi.LOW;var ki=function(t,n){return Vi[0]=n,t[0]=qi[Ci],t[1]=qi[Yi],t};var zi=function(t,n){return 1===arguments.length?ki([0,0],t):ki(t,n)},Hi=zi,Ji=Do,Xi=Pi,Wi=[0,0];var Di=function(t){return Math.abs(t)},Ki=Fi,Qi=Je,Zi=Di;var $i=function(t,n){return Qi(n)||Ki(n)?(t[0]=n,t[1]=0,t):0!==n&&Zi(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)};var ta=function(t,n){return 1===arguments.length?$i([0,0],t):$i(t,n)},na=Do;var ra=function(t){var n=na(t);return(n=(2146435072&n)>>>20)-1023|0},ea=Ir,oa=me,ia=Je,aa=Fi,ua=function(t,n){var r,e;return Hi(Wi,t),r=Wi[0],r&=2147483647,e=Ji(n),Xi(r|=e&=2147483648,Wi[1])},fa=ta,ca=ra,la=zi,sa=Pi,pa=[0,0],ya=[0,0];var va=function(t,n){var r,e;return 0===t||ia(t)||aa(t)?t:(fa(pa,t),n+=pa[1],(n+=ca(t=pa[0]))<-1074?ua(0,t):n>1023?t<0?oa:ea:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,la(ya,t),r=ya[0],r&=2148532223,e*sa(r|=n+1023<<20,ya[1])))},da=va,ga=te,ha=da,ba=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ma=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wa=16777216,Aa=5.960464477539063e-8,Ea=Ta(20),Oa=Ta(20),Na=Ta(20),ja=Ta(20);function Ta(t){var n,r;for(n=[],r=0;r<t;r++)n.push(0);return n}function _a(t,n,r,e,o,i,a,u,f){var c,l,s,p,y,v,d,g,h;for(p=i,h=e[r],g=r,y=0;g>0;y++)l=Aa*h|0,ja[y]=h-wa*l|0,h=e[g-1]+l,g-=1;if(h=ha(h,o),h-=8*ga(.125*h),h-=d=0|h,s=0,o>0?(d+=y=ja[r-1]>>24-o,ja[r-1]-=y<<24-o,s=ja[r-1]>>23-o):0===o?s=ja[r-1]>>23:h>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<r;y++)g=ja[y],0===c?0!==g&&(c=1,ja[y]=16777216-g):ja[y]=16777215-g;if(o>0)switch(o){case 1:ja[r-1]&=8388607;break;case 2:ja[r-1]&=4194303}2===s&&(h=1-h,0!==c&&(h-=ha(1,o)))}if(0===h){for(g=0,y=r-1;y>=i;y--)g|=ja[y];if(0===g){for(v=1;0===ja[i-v];v++);for(y=r+1;y<=r+v;y++){for(f[u+y]=ba[a+y],l=0,g=0;g<=u;g++)l+=t[g]*f[u+(y-g)];e[y]=l}return _a(t,n,r+=v,e,o,i,a,u,f)}}if(0===h)for(r-=1,o-=24;0===ja[r];)r-=1,o-=24;else(h=ha(h,-o))>=wa?(l=Aa*h|0,ja[r]=h-wa*l|0,o+=24,ja[r+=1]=l):ja[r]=0|h;for(l=ha(1,o),y=r;y>=0;y--)e[y]=l*ja[y],l*=Aa;for(y=r;y>=0;y--){for(l=0,v=0;v<=p&&v<=r-y;v++)l+=ma[v]*e[y+v];Na[r-y]=l}for(l=0,y=r;y>=0;y--)l+=Na[y];for(n[0]=0===s?l:-l,l=Na[0]-l,y=1;y<=r;y++)l+=Na[y];return n[1]=0===s?l:-l,7&d}var La=function(t,n,r,e){var o,i,a,u,f,c,l;for(4,(i=(r-3)/24|0)<0&&(i=0),u=r-24*(i+1),c=i-(a=e-1),l=a+4,f=0;f<=l;f++)Ea[f]=c<0?0:ba[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=t[c]*Ea[a+(f-c)];Oa[f]=o}return 4,_a(t,n,4,Oa,u,4,i,a,Ea)},Ia=Math.round,Ma=Do;var Pa=Do,Ua=Oi,Sa=Pi,Ra=La,xa=function(t,n,r){var e,o,i,a,u;return i=t-1.5707963267341256*(e=Ia(.6366197723675814*t)),a=6077100506506192e-26*e,u=n>>20|0,r[0]=i-a,u-(Ma(r[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),r[0]=i-a,u-(Ma(r[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),r[0]=i-a)),r[1]=i-r[0]-a,e},Fa=1.5707963267341256,Ga=6077100506506192e-26,Ba=2*Ga,Va=3*Ga,qa=4*Ga,Ca=[0,0,0],Ya=[0,0];var ka=function(t,n){var r,e,o,i,a,u,f;if((o=2147483647&Pa(t)|0)<=1072243195)return n[0]=t,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?xa(t,o,n):o<=1073928572?t>0?(f=t-Fa,n[0]=f-Ga,n[1]=f-n[0]-Ga,1):(f=t+Fa,n[0]=f+Ga,n[1]=f-n[0]+Ga,-1):t>0?(f=t-2*Fa,n[0]=f-Ba,n[1]=f-n[0]-Ba,2):(f=t+2*Fa,n[0]=f+Ba,n[1]=f-n[0]+Ba,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?xa(t,o,n):t>0?(f=t-3*Fa,n[0]=f-Va,n[1]=f-n[0]-Va,3):(f=t+3*Fa,n[0]=f+Va,n[1]=f-n[0]+Va,-3):1075388923===o?xa(t,o,n):t>0?(f=t-4*Fa,n[0]=f-qa,n[1]=f-n[0]-qa,4):(f=t+4*Fa,n[0]=f+qa,n[1]=f-n[0]+qa,-4);if(o<1094263291)return xa(t,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(r=Ua(t),f=Sa(o-((e=(o>>20)-1046)<<20|0),r),a=0;a<2;a++)Ca[a]=0|f,f=16777216*(f-Ca[a]);for(Ca[2]=f,i=3;0===Ca[i-1];)i-=1;return u=Ra(Ca,Ya,e,i),t<0?(n[0]=-Ya[0],n[1]=-Ya[1],-u):(n[0]=Ya[0],n[1]=Ya[1],u)},za=Do,Ha=vi,Ja=gi,Xa=ka,Wa=[0,0];var Da=Do,Ka=vi,Qa=gi,Za=ka,$a=[0,0];var tu=function(t){var n;if(n=Da(t),(n&=2147483647)<=1072243195)return n<1044381696?1:Ka(t,0);if(n>=2146435072)return NaN;switch(3&Za(t,$a)){case 0:return Ka($a[0],$a[1]);case 1:return-Qa($a[0],$a[1]);case 2:return-Ka($a[0],$a[1]);default:return Qa($a[0],$a[1])}},nu=Yo,ru=si,eu=function(t){var n;if(n=za(t),(n&=2147483647)<=1072243195)return n<1045430272?t:Ja(t,0);if(n>=2146435072)return NaN;switch(3&Xa(t,Wa)){case 0:return Ja(Wa[0],Wa[1]);case 1:return Ha(Wa[0],Wa[1]);case 2:return-Ja(Wa[0],Wa[1]);default:return-Ha(Wa[0],Wa[1])}},ou=tu;var iu=function(t){var n,r;return n=!0,function(){var e,o,i,a;if(n){do{e=t(),o=t()}while(0===e);return i=nu(-2*ru(e)),r=i*ou(a=6.283185307179586*o),n=!1,i*eu(a)}return n=!0,r}},au=Yo,uu=si,fu=tu(3.141592653589793);var cu=function(t){return au(-2*uu(t))*fu},lu=Yo,su=si,pu=tu;var yu=function(t){return lu(-2*su(t))*pu(6.283185307179586*t)},vu=g,du=m,gu=E,hu=Dt,bu=Ut,mu=$.isPrimitive,wu=I,Au=hr,Eu=Co.factory,Ou=Kt,Nu=Qt,ju=Zr,Tu=iu,_u=cu,Lu=yu;var Iu=function(t){var n,r,e,o;if(o={copy:!0},arguments.length){if(!hu(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(wu(t,"copy")&&(o.copy=t.copy,!mu(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(wu(t,"prng")){if(!bu(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else if(wu(t,"state")){if(o.state=t.state,!Au(t.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t.state+"`.")}else if(wu(t,"seed")&&(o.seed=t.seed,void 0===t.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t.seed+"`.")}return void 0===o.state?void 0===n?n=(e=Eu(o)).normalized:o.seed=null:n=(e=Eu(o)).normalized,r=Tu(n),vu(r,"NAME","box-muller"),null===o.seed?(vu(r,"seed",null),vu(r,"seedLength",null)):(du(r,"seed",i),du(r,"seedLength",a)),t&&t.prng?(gu(r,"state",Ou(null),Nu),vu(r,"stateLength",null),vu(r,"byteLength",null),vu(r,"toJSON",Ou(null))):(gu(r,"state",c,l),du(r,"stateLength",u),du(r,"byteLength",f),vu(r,"toJSON",s)),vu(r,"PRNG",n),wu(n,"MIN")?(vu(r,"MIN",_u(n.MIN)),vu(r,"MAX",Lu(n.MIN))):(vu(r,"MIN",null),vu(r,"MAX",null)),r;function i(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(t){e.state=t}function s(){var t={type:"PRNG"};return t.name=r.NAME,t.state=ju(e.state),t.params=[],t}},Mu=Iu();g(Mu,"factory",Iu);var Pu=Mu,Uu=Math.ceil,Su=te,Ru=Uu;var xu=da,Fu=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)};var Gu=Je,Bu=function(t){return t<0?Ru(t):Su(t)},Vu=me,qu=Ir,Cu=function(t,n,r){var e,o,i;return i=(e=t-n)-(o=e*e)*Fu(o),xu(1-(n-e*i/(2-i)-t),r)},Yu=1.4426950408889634,ku=1/(1<<28);var zu=function(t){var n;return Gu(t)||t===qu?t:t===Vu?0:t>709.782712893384?qu:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<ku?1+t:(n=Bu(t<0?Yu*t-.5:Yu*t+.5),Cu(t-.6931471803691238*n,1.9082149292705877e-10*n,n))},Hu=Yo,Ju=zu,Xu=si,Wu=.00991256303526217;var Du=function(t,n){var r,e,o;for(e=Ju(-.5*n*n),(r=[]).push(Wu/e),r.push(n),o=2;o<t;o++)r[o]=Hu(-2*Xu(Wu/r[o-1]+e)),e=Ju(-.5*r[o]*r[o]);return r.push(0),r};var Ku=function(t){var n,r;for(n=[],r=0;r<t.length-1;r++)n.push(t[r+1]/t[r]);return n},Qu=si;var Zu=Di,$u=zu,tf=Ku,nf=function(t,n,r){var e,o;do{e=Qu(t())/n,o=Qu(t())}while(-2*o<e*e);return r?e-n:n-e},rf=3.442619855899,ef=Du(128,rf),of=tf(ef);var af=function(t,n){return function(){var r,e,o,i,a,u,f;for(;;){if(a=2*t()-1,u=127&n(),Zu(a)<of[u])return a*ef[u];if(0===u)return nf(t,rf,a<0);if(i=a*ef[u],o=i*i,f=u+1,r=$u(-.5*(ef[u]*ef[u]-o)),(e=$u(-.5*(ef[f]*ef[f]-o)))+t()*(r-e)<1)return i}}},uf=g,ff=m,cf=E,lf=Ut,sf=Dt,pf=$.isPrimitive,yf=I,vf=hr,df=Co.factory,gf=Kt,hf=Qt,bf=te,mf=br,wf=Zr,Af=af;var Ef=function(t){var n,r,e,o;if(o={copy:!0},arguments.length){if(!sf(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(yf(t,"copy")&&(o.copy=t.copy,!pf(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(yf(t,"prng")){if(!lf(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else if(yf(t,"state")){if(o.state=t.state,!vf(t.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t.state+"`.")}else if(yf(t,"seed")&&(o.seed=t.seed,void 0===t.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t.seed+"`.")}return void 0===o.state?void 0===n?n=(r=df(o)).normalized:(r=df({seed:bf(1+mf*n()),copy:o.copy}),o.seed=null):n=(r=df(o)).normalized,e=Af(n,r),uf(e,"NAME","improved-ziggurat"),null===o.seed?(uf(e,"seed",null),uf(e,"seedLength",null)):(ff(e,"seed",i),ff(e,"seedLength",a)),t&&t.prng?(cf(e,"state",gf(null),hf),uf(e,"stateLength",null),uf(e,"byteLength",null),uf(e,"toJSON",gf(null))):(cf(e,"state",c,l),ff(e,"stateLength",u),ff(e,"byteLength",f),uf(e,"toJSON",s)),uf(e,"PRNG",n),e;function i(){return r.seed}function a(){return r.seedLength}function u(){return r.stateLength}function f(){return r.byteLength}function c(){return r.state}function l(t){r.state=t}function s(){var t={type:"PRNG"};return t.name=e.NAME,t.state=wf(r.state),t.params=[],t}},Of=Ef();g(Of,"factory",Ef);var Nf=Of,jf={};jf["box-muller"]=Pu,jf["improved-ziggurat"]=Nf;var Tf=g,_f=m,Lf=E,If=Dt,Mf=$.isPrimitive,Pf=I,Uf=Kt,Sf=Qt,Rf=Zr,xf=$r,Ff=jf;var Gf=function(t){var n,r,e;if(n={name:xf.name,copy:xf.copy},arguments.length){if(!If(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(Pf(t,"name")&&(n.name=t.name),Pf(t,"prng")){if(n.prng=t.prng,void 0===n.prng)throw new TypeError("invalid option. `prng` option cannot be undefined. Option: `"+n.prng+"`.")}else if(Pf(t,"state")){if(n.state=t.state,void 0===n.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+n.state+"`.")}else if(Pf(t,"seed")&&(n.seed=t.seed,void 0===n.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+n.seed+"`.");if(Pf(t,"copy")&&(n.copy=t.copy,!Mf(n.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.")}if(void 0===(e=Ff[n.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+n.name+"`.");return r=void 0===n.prng?void 0===n.state?void 0===n.seed?e.factory():e.factory({seed:n.seed}):e.factory({state:n.state,copy:n.copy}):e.factory({prng:n.prng}),Tf(s,"NAME","randn"),n.prng?(Tf(s,"seed",null),Tf(s,"seedLength",null),Lf(s,"state",Uf(null),Sf),Tf(s,"stateLength",null),Tf(s,"byteLength",null),Tf(s,"toJSON",Uf(null))):(_f(s,"seed",o),_f(s,"seedLength",i),Lf(s,"state",f,c),_f(s,"stateLength",a),_f(s,"byteLength",u),Tf(s,"toJSON",l)),Tf(s,"PRNG",r.PRNG),s;function o(){return r.seed}function i(){return r.seedLength}function a(){return r.stateLength}function u(){return r.byteLength}function f(){return r.state}function c(t){r.state=t}function l(){var t={type:"PRNG"};return t.name=s.NAME+"-"+r.NAME,t.state=Rf(r.state),t.params=[],t}function s(){return r()}},Bf=Gf();return g(Bf,"factory",Gf),Bf}));
//# sourceMappingURL=bundle.js.map
