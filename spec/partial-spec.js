'use strict';

var root = (typeof window === 'object' ? window : global).partialApplication;
var partial = root.partial;
var partial1 = root.partial1;

describe('partial', function() {

	it('should return a function with an arity of zero', function() {

		//arrange 
		var fn, result;
		fn = function() {
			return arguments;
		}

		//act
		result = partial(fn, 'a');

		//assert
		expect(result.length).toBe(0);

	});

	it('should send the partially applied arguments to the function', function() {

		//arrange 
		var fn, result;
		fn = function() {
			return arguments;
		}

		//act
		result = partial(fn, 'a')();

		//assert
		expect(result.length).toBe(1);

	});

	it('should also send any arguments supplied at invocation time to the partially applied function', function() {

		//arrange 
		var fn, result;
		fn = function() {
			return arguments;
		}

		//act
		result = partial(fn, 'a')('b');

		//assert
		expect(result.length).toBe(2);

	});

});

describe('partial1', function() {

	it('should return a function with an arity of one', function() {

		//arrange 
		var fn, result1, result2;
		fn = function() {
			return arguments;
		}

		//act
		result1 = partial1(fn, 'a');
		result2 = partial1(fn, 'a', 'b');

		//assert
		expect(result1.length).toBe(1);
		expect(result2.length).toBe(1);

	});

	it('should send the partially applied arguments to the function', function() {

		//arrange 
		var fn, result;
		fn = function() {
			return arguments;
		}

		//act
		result = partial1(fn, 'a')();

		//assert
		expect(result.length).toBe(1);

	});

	it('should also send any arguments supplied at invocation time to the partially applied function', function() {

		//arrange 
		var fn, result;
		fn = function() {
			return arguments;
		}

		//act
		result = partial1(fn, 'a')('b');

		//assert
		expect(result.length).toBe(2);

	});

});