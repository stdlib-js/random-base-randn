<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# randn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Standard normally distributed pseudorandom numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
randn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var randn = require( 'path/to/vendor/umd/random-base-randn/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.randn;
})();
</script>
```

#### randn()

Returns a standard normally distributed pseudorandom number.

```javascript
var r = randn();
// returns <number>
```

#### randn.factory( \[options] )

Returns a pseudorandom number generator for creating standard normally distributed random numbers.

```javascript
var rand = randn.factory();
```

The function accepts the following `options`:

-   **name**: name of the underlying pseudorandom number generator which samples from the standard normal distribution.

    -   [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]: improved ziggurat method.
    -   [`box-muller`][@stdlib/random/base/box-muller]: Box-Muller transform.

    Default: [`'improved-ziggurat'`][@stdlib/random/base/improved-ziggurat].

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).

-   **seed**: pseudorandom number generator seed. Valid seed values vary according to the underlying PRNG.

-   **state**: pseudorandom number generator state. Valid state values vary according to the underlying PRNG. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, the underlying pseudorandom number generator is [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]. To use a different PRNG, set the `name` option.

```javascript
var rand = randn.factory({
    'name': 'box-muller'
});

var r = rand();
// returns <number>
```

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = randn.factory({
    'prng': minstd.normalized
});

var r = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randn.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randn.factory({
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = randn();
}

// Create a new PRNG initialized to the current state of `randn`:
rand = randn.factory({
    'state': randn.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randn() );
// returns true
```

#### randn.NAME

The generator name.

```javascript
var str = randn.NAME;
// returns 'randn'
```

#### randn.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = randn.PRNG;
// returns <Function>
```

#### randn.seed

The value used to seed `randn()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = randn();
}

// Generate the same pseudorandom values...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### randn.seedLength

Length of generator seed.

```javascript
var len = randn.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### randn.state

Writable property for getting and setting the generator state.

```javascript
var r = randn();
// returns <number>

r = randn();
// returns <number>

// ...

// Get a copy of the current state:
var state = randn.state;

r = randn();
// returns <number>

r = randn();
// returns <number>

// Reset the state:
randn.state = state;

// Replay the last two pseudorandom numbers:
r = randn();
// returns <number>

r = randn();
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### randn.stateLength

Length of generator state.

```javascript
var len = randn.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### randn.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randn.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### randn.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randn.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randn() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randn.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-iter/randn`][@stdlib/random/iter/randn]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/randn`][@stdlib/random/streams/randn]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="package-name">[`@stdlib/random-base/improved-ziggurat`][@stdlib/random/base/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">normally distributed pseudorandom numbers using the improved Ziggurat method.</span>
-   <span class="package-name">[`@stdlib/random-base/randu`][@stdlib/random/base/randu]</span><span class="delimiter">: </span><span class="description">uniformly distributed pseudorandom numbers between 0 and 1.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-randn.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-randn

[test-image]: https://github.com/stdlib-js/random-base-randn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-randn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-randn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-randn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-randn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-randn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-randn/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-randn/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-randn/tree/esm
[branches-url]: https://github.com/stdlib-js/random-base-randn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-randn/main/LICENSE

[@stdlib/random/base/improved-ziggurat]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/umd

[@stdlib/random/base/box-muller]: https://github.com/stdlib-js/random-base-box-muller/tree/umd

<!-- <related-links> -->

[@stdlib/random/iter/randn]: https://github.com/stdlib-js/random-iter-randn/tree/umd

[@stdlib/random/streams/randn]: https://github.com/stdlib-js/random-streams-randn/tree/umd

[@stdlib/random/base/randu]: https://github.com/stdlib-js/random-base-randu/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
