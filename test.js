const _ = require('lodash');
const assert = require('assert/strict');

require('.');

assert.deepEqual(
	_.combinations([1, 2, 3], 2),
	[
		[1, 2],
		[1, 3],
		[2, 3],
	],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 3),
	[[1, 2, 3]],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 1),
	[
		[1],
		[2],
		[3],
	],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 0),
	[[]],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 6),
	[],
);
assert.deepEqual(
	_.combinations([], 0),
	[[]],
);
assert.deepEqual(
	_.combinations([], 6),
	[],
);
