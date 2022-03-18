const assert = require('assert/strict');

function* forEachCombination(iterable, k) {
	function* f(values, k) {
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
				for (let otherValues of f(fceszvwa, k)) {
					yield [value, ...otherValues];
				}
			}
		}
	}
	yield* f([...iterable], k);
}

function* forEachPermutation(iterable, k) {
	function* f(values, k) {
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
			let n = values.length;
			for (let i = 0; i < n; i++) {
				let value = values[i];
				let fceszvwa = [...values];
				fceszvwa.splice(i, 1);
				for (let otherValues of f(fceszvwa, k)) {
					yield [value, ...otherValues];
				}
			}
		}
	}
	yield* f([...iterable], k);
}

function* forEachMulticombination(iterable, k) {
	function* f(values, k) {
		if (k === 0) {
			yield [];
		} else
		if (k === 1) {
			for (let value of values) {
				yield [value];
			}
		} else {
			k--;
			let n = values.length;
			for (let i = 0; i < n; i++) {
				let value = values[i];
				let fceszvwa = values.slice(i);
				for (let otherValues of f(fceszvwa, k)) {
					yield [value, ...otherValues];
				}
			}
		}
	}
	yield* f([...iterable], k);
}

function* forEachMultipermutation(iterable, k) {
	function* f(values, k) {
		if (k === 0) {
			yield [];
		} else
		if (k === 1) {
			for (let value of values) {
				yield [value];
			}
		} else {
			k--;
			for (let value of values) {
				for (let otherValues of f(values, k)) {
					yield [value, ...otherValues];
				}
			}
		}
	}
	yield* f([...iterable], k);
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
