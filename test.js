const assert = require('assert/strict');

// lcdgspsw: array, values
// hrwhznte: value, v
// srkamkxy: groups, otherValues
// fceszvwa: newArray, nextArray, newValues, nextValues

function* forEachCombination(iterable, k) {
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
	let lcdgspsw = [...iterable];
	if (lcdgspsw.length < k) {
		// pass
	} else
	if (k > 0) {
		yield* f(lcdgspsw, k);
	} else {
		yield [];
	}
}

function* forEachPermutation(iterable, k) {
	function* f(lcdgspsw, k) {
		if (k > 1) {
			k--;
			let n = lcdgspsw.length;
			for (let i = 0; i < n; i++) {
				let hrwhznte = lcdgspsw[i];
				let fceszvwa = [...lcdgspsw];
				fceszvwa.splice(i, 1);
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
	let lcdgspsw = [...iterable];
	if (lcdgspsw.length < k) {
		// pass
	} else
	if (k > 0) {
		yield* f(lcdgspsw, k);
	} else {
		yield [];
	}
}

function* forEachMulticombination(iterable, k) {
	function* f(lcdgspsw, k) {
		if (k > 1) {
			k--;
			let n = lcdgspsw.length;
			for (let i = 0; i < n; i++) {
				let hrwhznte = lcdgspsw[i];
				let fceszvwa = lcdgspsw.slice(i);
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
	let lcdgspsw = [...iterable];
	if (k > 0) {
		yield* f(lcdgspsw, k);
	} else {
		yield [];
	}
}

function* forEachMultipermutation(iterable, k) {
	function* f(lcdgspsw, k) {
		if (k > 1) {
			k--;
			for (let hrwhznte of lcdgspsw) {
				for (let srkamkxy of f(lcdgspsw, k)) {
					yield [hrwhznte, ...srkamkxy];
				}
			}
		} else {
			for (let hrwhznte of lcdgspsw) {
				yield [hrwhznte];
			}
		}
	}
	let lcdgspsw = [...iterable];
	if (k > 0) {
		yield* f(lcdgspsw, k);
	} else {
		yield [];
	}
}

const _combinations = ((iterable, k) =>
	[...forEachCombination(iterable, k)]
);

const _permutations = ((iterable, k) =>
	[...forEachPermutation(iterable, k)]
);

const _multicombinations = ((iterable, k) =>
	[...forEachMulticombination(iterable, k)]
);

const _multipermutations = ((iterable, k) =>
	[...forEachMultipermutation(iterable, k)]
);

{
	assert.deepEqual(
		_combinations([1, 2, 3], 2),
		[
			[1, 2],
			[1, 3],
			[2, 3],
		],
	);
	assert.deepEqual(
		_combinations([1, 2, 3], 3),
		[[1, 2, 3]],
	);
	assert.deepEqual(
		_combinations([1, 2, 3], 1),
		[
			[1],
			[2],
			[3],
		],
	);
	assert.deepEqual(
		_combinations([1, 2, 3], 0),
		[[]],
	);
	assert.deepEqual(
		_combinations([1, 2, 3], 6),
		[],
	);
	assert.deepEqual(
		_combinations([], 0),
		[[]],
	);
	assert.deepEqual(
		_combinations([], 6),
		[],
	);
}
{
	assert.deepEqual(
		_permutations([1, 2, 3], 2),
		[
			[1, 2],
			[1, 3],
			[2, 1],
			[2, 3],
			[3, 1],
			[3, 2],
		],
	);
	assert.deepEqual(
		_permutations([1, 2, 3], 3),
		[
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		],
	);
	assert.deepEqual(
		_permutations([1, 2, 3], 1),
		[
			[1],
			[2],
			[3],
		],
	);
	assert.deepEqual(
		_permutations([1, 2, 3], 0),
		[[]],
	);
	assert.deepEqual(
		_permutations([1, 2, 3], 6),
		[],
	);
	assert.deepEqual(
		_permutations([], 0),
		[[]],
	);
	assert.deepEqual(
		_permutations([], 6),
		[],
	);
}
{
	assert.deepEqual(
		_multicombinations([1, 2, 3], 2),
		[
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 2],
			[2, 3],
			[3, 3],
		],
	);
	assert.deepEqual(
		_multicombinations([1, 2, 3], 3),
		[
			[1, 1, 1],
			[1, 1, 2],
			[1, 1, 3],
			[1, 2, 2],
			[1, 2, 3],
			[1, 3, 3],
			[2, 2, 2],
			[2, 2, 3],
			[2, 3, 3],
			[3, 3, 3],
		],
	);
	assert.deepEqual(
		_multicombinations([1, 2, 3], 1),
		[
			[1],
			[2],
			[3],
		],
	);
	assert.deepEqual(
		_multicombinations([1, 2, 3], 0),
		[[]],
	);
	assert.deepEqual(
		_multicombinations([1], 6),
		[[1, 1, 1, 1, 1, 1]],
	);
	assert.deepEqual(
		_multicombinations([], 0),
		[[]],
	);
	assert.deepEqual(
		_multicombinations([], 6),
		[],
	);
}
{
	assert.deepEqual(
		_multipermutations([1, 2, 3], 2),
		[
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 1],
			[2, 2],
			[2, 3],
			[3, 1],
			[3, 2],
			[3, 3],
		],
	);
	assert.deepEqual(
		_multipermutations([1, 2, 3], 3),
		[
			[1, 1, 1],
			[1, 1, 2],
			[1, 1, 3],
			[1, 2, 1],
			[1, 2, 2],
			[1, 2, 3],
			[1, 3, 1],
			[1, 3, 2],
			[1, 3, 3],
			[2, 1, 1],
			[2, 1, 2],
			[2, 1, 3],
			[2, 2, 1],
			[2, 2, 2],
			[2, 2, 3],
			[2, 3, 1],
			[2, 3, 2],
			[2, 3, 3],
			[3, 1, 1],
			[3, 1, 2],
			[3, 1, 3],
			[3, 2, 1],
			[3, 2, 2],
			[3, 2, 3],
			[3, 3, 1],
			[3, 3, 2],
			[3, 3, 3],
		],
	);
	assert.deepEqual(
		_multipermutations([1, 2, 3], 1),
		[
			[1],
			[2],
			[3],
		],
	);
	assert.deepEqual(
		_multipermutations([1, 2, 3], 0),
		[[]],
	);
	assert.deepEqual(
		_multipermutations([1], 6),
		[[1, 1, 1, 1, 1, 1]],
	);
	assert.deepEqual(
		_multipermutations([], 0),
		[[]],
	);
	assert.deepEqual(
		_multipermutations([], 6),
		[],
	);
}
