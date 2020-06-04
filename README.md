# lodash.combinations

`_.combinations(collection, n)`

Calculates all possible combinations of a certain size.

| argument | description |
| ---: | :--- |
| `collection` | A collection of distinct values to calculate the combinations from. |
| `n` | The number of values to combine. |

Returns a new array.

## setup

### npm

```shell
npm i lodash.combinations
```

### ES module

```javascript
import 'lodash.combinations';
import _ from 'lodash';
```

### Node

```javascript
require('lodash.combinations');
let _ = require('lodash');
```

### browser

```html
<script src="https://unpkg.com/lodash"></script>
<script src="https://unpkg.com/lodash.combinations"></script>
```

## usage

```javascript
let combinations = _.combinations([true, {a: 1}, null], 2);
// => [[true, {a: 1}], [true, null], [{a: 1}, null]]
```

---

Calculate all possible combinations of all possible sizes.

```javascript
let combinations = _.flatMap([2, 4, 6], (v, i, a) => _.combinations(a, i + 1));
// => [[2], [4], [6], [2, 4], [2, 6], [4, 6], [2, 4, 6]]
```

---

Also accepts array-like values.

```javascript
let combinations = _('abcde').combinations(3).map(v => _.join(v, '')).value();
// => ['abc', 'abd', 'abe', 'acd', 'ace', 'ade', 'bcd', 'bce', 'bde', 'cde']
```

## see also

- [lodash.permutations](https://github.com/SeregPie/lodash.permutations)
- [lodash.multicombinations](https://github.com/SeregPie/lodash.multicombinations)
- [lodash.multipermutations](https://github.com/SeregPie/lodash.multipermutations)
- [lodash.product](https://github.com/SeregPie/lodash.product)
