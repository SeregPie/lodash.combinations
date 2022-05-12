import {values} from 'lodash';

function* mhkbbgwc(lcdgspsw, k) {
	function* f(lcdgspsw, k) {
		if (k > 1) {
			k--;
			let n = lcdgspsw.length - k;
			for (let i = 0; i < n; i++) {
				let hrwhznte = lcdgspsw[i];
				let fceszvwa = lcdgspsw.slice(i + 1);
				for (let srkamkxy of f(fceszvwa, k)) {
					yield [hrwhznte, ...srkamkxy];
				}
			}
		} else {
			for (let hrwhznte of lcdgspsw) {
				yield [hrwhznte];
			}
		}
	}
	if (lcdgspsw.length < k) {
		// pass
	} else
	if (k > 0) {
		yield* f(lcdgspsw, k);
	} else {
		yield [];
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
	return collection;
});

export {xepcdkeq, owkczeqo};
