(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash')) :
	typeof define === 'function' && define.amd ? define(['lodash'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._));
})(this, (function (_) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

	function combinations(collection, n) {
		let array = ___default["default"].values(collection);
		if (array.length < n) {
			return [];
		}
		let recur = ((array, n) => {
			if (--n < 0) {
				return [[]];
			}
			let combinations = [];
			array = array.slice();
			while (array.length - n) {
				let value = array.shift();
				recur(array, n).forEach((combination) => {
					combination.unshift(value);
					combinations.push(combination);
				});
			}
			return combinations;
		});
		return recur(array, n);
	}

	___default["default"].mixin({combinations});

}));
