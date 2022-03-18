import {values} from 'lodash';

function* mhkbbgwc(values, k) {
	if (values.length < k) {
		// pass
	} else
	if (k === 0) {
		yield [];
	} else
	if (k === 1) {
		for (let value of values) {
			yield [value];
		}
	} else {
		k--;
		let n = values.length - k;
		for (let i = 0; i < n; i++) {
			let value = values[i];
			let fceszvwa = values.slice(i + 1);
			for (let otherValues of mhkbbgwc(fceszvwa, k)) {
				yield [value, ...otherValues];
			}
		}
	}
}

let xepcdkeq = ((collection, k) => [...mhkbbgwc(values(collection), k)]);

let owkczeqo = ((collection, k, iterable) => {
	let index = -1;
	for (let value of mhkbbgwc(values(collection), k)) {
		if (iterable(value, ++index, collection) === false) {
			break;
		}
	}
});

export {xepcdkeq, owkczeqo};
