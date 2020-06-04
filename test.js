let _ = require('lodash');
let assert = require('assert').strict;

require('./index');

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
	[
		[1, 2, 3],
	],
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
	[
		[],
	],
);
assert.deepEqual(
	_.combinations([1, 2, 3], 9),
	[],
);
assert.deepEqual(
	_.combinations([], 0),
	[
		[],
	],
);
assert.deepEqual(
	_.combinations([], 9),
	[],
);
