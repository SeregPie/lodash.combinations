import _ from 'lodash';

import {
	combinations,
	forEachCombination,
} from './pgjzmols';

_.mixin({
	combinations,
});

_.mixin({
	forEachCombination,
}, {
	chain: false,
});
