import {values} from 'lodash';

function* f(values, k) {
	if (k > 1) {
		k--;
		let n = values.length - k;
		for (let i = 0; i < n; i++) {
			let value = values[i];
			let fceszvwa = array.slice(i + 1);
			for (let aibhatoz of f(fceszvwa, k)) {
				yield [value, ...aibhatoz];
			}
		}
	} else {
		for (let value of values) {
			yield [value];
		}
	}
}

let forEach = ((collection, k, iterable) => {
	function* f(array, k) {
		if (k > 1) {
			k--;
			let n = array.length - k;
			for (let i = 0; i < n; i++) {
				let ysdrfztq = array[i];
				let fceszvwa = array.slice(i + 1);
				for (let aibhatoz of f(fceszvwa, k)) {
					yield [ysdrfztq, ...aibhatoz];
				}
			}
		} else {
			for (let ysdrfztq of array) {
				yield [ysdrfztq];
			}
		}
	}
	if (k > 0) {
		let array = [...iterable];
		if (array.length >= k) {
			yield* f(array, k);
		}
	} else {
		yield [];
	}
});

let collect = ((collection, k) => {
	let result = [];
	forEach(collection, k, (v) => {
		result.push(v);
	});
	return result;
});
