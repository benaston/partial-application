;(function(namespace) {

	'use strict';

	/**
	 * Partially apply a function.
	 * @param  {Function} fn      The function to partially apply.
	 * @return {Function}         The partially applied function.
	 */
	function partial(fn) {
		var args;

		if (typeof fn !== 'function') {
			throw 'First argument must be a function.';
		}

		if (arguments.length <= 1) {
			return fn;
		}

		args = Array.prototype.slice.call(arguments, 1);

		return function() {
			return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
		}
	}

	/**
	 * Partially apply a function, but ensure the returned function has an arity of one.
	 * @param  {Function} fn      The function to partially apply.
	 * @return {Function}         The partially applied function.
	 */
	function partialWithArityOfOne(fn) {
		var args = arguments;

		return function(a) {
			return partial.apply(this, args).apply(this, arguments);
		};
	}

	namespace.partial = partial;
	namespace.partial1 = partialWithArityOfOne;

}(namespace));