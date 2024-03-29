/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var ENV = require( '@stdlib/process-env' );
var now = require( '@stdlib/time-now' );
var kstest = require( '@stdlib/stats-kstest' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var Uint32Array = require( '@stdlib/array-uint32' );
var typedarray2json = require( '@stdlib/array-to-json' );
var minstd = require( '@stdlib/random-base-minstd' );
var factory = require( './../lib/factory.js' );


// VARIABLES //

var opts = {
	'skip': ( ENV.TEST_MODE === 'coverage' )
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a value which is not an object, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized/unsupported PRNG name', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'name': value
			});
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'prng': value
			});
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'copy': value
			});
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'name': 'improved-ziggurat',
				'state': value
			});
		};
	}
});

tape( 'the function returns a pseudorandom number generator (no seed)', function test( t ) {
	var randn;
	var v;
	var i;

	randn = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = randn();
		t.equal( typeof v, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var randn1;
	var randn2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = now();

	randn1 = factory({
		'seed': seed
	});
	randn2 = factory({
		'seed': seed
	});

	t.notEqual( randn1, randn2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randn1();
		v2 = randn2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var randn1;
	var randn2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ now()+1, now()+2, now()+3 ];

	randn1 = factory({
		'seed': seed
	});
	randn2 = factory({
		'seed': seed
	});

	t.notEqual( randn1, randn2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randn1();
		v2 = randn2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var randn = factory();
	t.equal( randn.NAME, 'randn', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var randn = factory();
	t.equal( typeof randn.PRNG, 'function', 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( randn.PRNG, minstd.normalized, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var randn = factory({
		'seed': 12345
	});
	t.equal( isArrayLikeObject( randn.seed ), true, 'has property' );
	t.equal( randn.seed[ 0 ], 12345, 'equal to provided seed' );

	randn = factory({
		'seed': 12345,
		'prng': minstd.normalized
	});
	t.equal( randn.seed, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var actual;
	var rand;
	var seed;
	var i;

	seed = [ 1234, 5678 ];
	rand = factory({
		'seed': seed
	});

	actual = rand.seed;
	t.equal( isArrayLikeObject( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var randn = factory();
	t.equal( typeof randn.seedLength, 'number', 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( randn.seedLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var randn = factory();
	t.equal( isArrayLikeObject( randn.state ), true, 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( randn.state, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var randn = factory();
	t.equal( typeof randn.stateLength, 'number', 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( randn.stateLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var randn = factory();
	t.equal( typeof randn.byteLength, 'number', 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( randn.byteLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var randn;
	var o;

	randn = factory({
		'name': 'improved-ziggurat'
	});
	t.equal( typeof randn.toJSON, 'function', 'has method' );

	o = randn.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, randn.NAME + '-improved-ziggurat', 'has property' );
	t.deepEqual( o.state, typedarray2json( randn.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	randn = factory({
		'prng': minstd.normalized
	});
	t.equal( typeof randn.toJSON, 'function', 'has method' );
	t.equal( randn.toJSON(), null, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the PRNG name', function test( t ) {
	var randn;
	var v;
	var i;

	randn = factory({
		'name': 'box-muller'
	});

	for ( i = 0; i < 1e3; i++ ) {
		v = randn();
		t.equal( typeof v, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var randn;
	var r;
	var i;

	randn = factory({
		'prng': minstd.normalized
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = randn();
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG', function test( t ) {
	var randn1;
	var randn2;
	var randu;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	randu = minstd.factory({
		'seed': seed
	});
	randn1 = factory({
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	randn2 = factory({
		'prng': randu.normalized
	});

	t.notEqual( randn1, randn2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		r1 = randn1();
		r2 = randn2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a PRNG for generating pseudorandom numbers from a standard normal distribution', opts, function test( t ) {
	var threshold;
	var count;
	var npass;
	var N;
	var x;

	threshold = 0.10;

	x = new Array( 1e3 );
	N = 300;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var rejected;
		var pValue;
		var randn;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < N; i++ ) {
			randn = factory();
			t.ok( true, 'seed: '+randn.seed );
			for ( j = 0; j < x.length; j++ ) {
				x[ j ] = randn();
			}
			// Test using Kolmogorov-Smirnov goodness-of-fit test:
			pValue = kstest( x, 'normal', 0.0, 1.0 ).pValue;
			t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
			if ( pValue <= 0.05 ) {
				rejected += 1;
			}
		}
		// Account for small sample size and few repeats...
		bool = ( rejected / N < threshold );

		// If we succeed the first time, we are done...
		if ( count === 0 && bool ) {
			return done( bool, rejected );
		}
		// Retry mode...
		if ( bool ) {
			npass += 1;
		}
		// Retry twice...
		if ( count < 2 ) {
			return gof();
		}
		// Both retries must succeed for test to pass:
		bool = ( npass >= 2 );
		return done( bool, rejected );
	}

	function done( bool, rejected ) {
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Normal(0,1)) is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+N+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var randn;
	var state;
	var arr;
	var i;

	randn = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randn();
	}
	// Capture the current state:
	state = randn.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randn() );
	}

	// Create another PRNG using the captured state:
	randn = factory({
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randn(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var shared;
	var state;
	var randn;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	randn = factory({
		'name': 'improved-ziggurat'
	});

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randn();
	}
	// Capture the current state:
	state = randn.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randn() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'name': 'improved-ziggurat',
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'name': 'improved-ziggurat',
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v2 = rand2();
	}

	// Reset the (shared) state:
	rand1.state = state;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var randn;
	var state;
	var arr;
	var i;

	randn = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randn();
	}
	// Capture the current state:
	state = randn.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randn() );
	}
	// Set the state:
	randn.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randn(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
