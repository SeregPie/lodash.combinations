let _ = require('lodash');
let assert = require('assert').strict;

require('./index');

assert.deepEqual(
	_.combinations([1, 2, 3], 2),
	[[1, 2], [1, 3], [2, 3]],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 3),
	[[1, 2, 3]],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 1),
	[[1], [2], [3]]
);
assert.deepEqual(
	_.combinations([1, 2, 3], 0),
	[[]],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 9),
	[],
);
assert.deepEqual(
	_.combinations([], 0),
	[[]],
);
assert.deepEqual(
	_.combinations([], 9),
	[],
);

assert.deepEqual(
	_.combinations([true, {a: 1}, null], 2),
	[[true, {a: 1}], [true, null], [{a: 1}, null]],
);

assert.deepEqual(
	_.flatMap([2, 4, 6], (v, i, a) => _.combinations(a, i + 1)),
	[[2], [4], [6], [2, 4], [2, 6], [4, 6], [2, 4, 6]],
);

assert.deepEqual(
	_('abcde').combinations(3).map(v => _.join(v, '')).value(),
	['abc', 'abd', 'abe', 'acd', 'ace', 'ade', 'bcd', 'bce', 'bde', 'cde'],
);
