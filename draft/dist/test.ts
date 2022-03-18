import _ from 'lodash';

import '.';

let combinations = _('abcde').combinations(3).map(v => _.join(v, '')).value();
// => ['abc', 'abd', 'abe', 'acd', 'ace', 'ade', 'bcd', 'bce', 'bde', 'cde']
