// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-box-muller@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";var c="improved-ziggurat",f=!0,h={};function g(p){var l,g,j;if(l={name:c,copy:f},arguments.length){if(!r(p))throw new TypeError(d("0PO4K",p));if(o(p,"name")&&(l.name=p.name),o(p,"prng")){if(l.prng=p.prng,void 0===l.prng)throw new TypeError(d("0PO7q","prng",l.prng))}else if(o(p,"state")){if(l.state=p.state,void 0===l.state)throw new TypeError(d("0PO7q","state",l.state))}else if(o(p,"seed")&&(l.seed=p.seed,void 0===l.seed))throw new TypeError(d("0PO7q","seed",l.seed));if(o(p,"copy")&&(l.copy=p.copy,!n(l.copy)))throw new TypeError(d("0PO30","copy",l.copy))}if(void 0===(j=h[l.name]))throw new Error(d("0PO7r",l.name));return g=void 0===l.prng?void 0===l.state?void 0===l.seed?j.factory():j.factory({seed:l.seed}):j.factory({state:l.state,copy:l.copy}):j.factory({prng:l.prng}),e(L,"NAME","randn"),l.prng?(e(L,"seed",null),e(L,"seedLength",null),s(L,"state",i(null),m),e(L,"stateLength",null),e(L,"byteLength",null),e(L,"toJSON",i(null))):(t(L,"seed",u),t(L,"seedLength",v),s(L,"state",x,w),t(L,"stateLength",y),t(L,"byteLength",b),e(L,"toJSON",E)),e(L,"PRNG",g.PRNG),L;function u(){return g.seed}function v(){return g.seedLength}function y(){return g.stateLength}function b(){return g.byteLength}function x(){return g.state}function w(e){g.state=e}function E(){var e={type:"PRNG"};return e.name=L.NAME+"-"+g.NAME,e.state=a(g.state),e.params=[],e}function L(){return g()}}h["box-muller"]=p,h["improved-ziggurat"]=l;var j=g();e(j,"factory",g);export{j as default,g as factory};
//# sourceMappingURL=index.mjs.map