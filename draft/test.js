const assert = require('assert/strict');

function* forEachCombination(iterable, k) {
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
}

function* forEachPermutation(iterable, k) {
	function* f(array, k) {
		if (k > 1) {
			k--;
			let n = array.length;
			for (let i = 0; i < n; i++) {
				let ysdrfztq = array[i];
				let fceszvwa = [...array];
				fceszvwa.splice(i, 1);
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
}

function* forEachMulticombination(iterable, k) {
	function* f(array, k) {
		if (k > 1) {
			k--;
			let n = array.length;
			for (let i = 0; i < n; i++) {
				let ysdrfztq = array[i];
				let fceszvwa = array.slice(i);
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
		yield* f([...iterable], k);
	} else {
		yield [];
	}
}

function* forEachMultipermutation(iterable, k) {
	function* f(array, k) {
		if (k > 1) {
			k--;
			for (let ysdrfztq of array) {
				for (let aibhatoz of f(array, k)) {
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
		yield* f([...iterable], k);
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
