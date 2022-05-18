# lodash.combinations

`_.combinations(collection, k)`

Calculates all possible combinations without repetition of a certain size.

| argument | description |
| ---: | :--- |
| `collection` | A collection of distinct values to calculate the groups from. |
| `k` | A number as the size of each group. |

Returns the calculated groups as an array of arrays.

## setup

```shell
npm i lodash.combinations
```

---

```javascript
import 'lodash.combinations';
import _ from 'lodash';
```


### CDN

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

## see also

- [lodash.permutations](https://github.com/SeregPie/lodash.permutations)
- [lodash.multicombinations](https://github.com/SeregPie/lodash.multicombinations)
- [lodash.multipermutations](https://github.com/SeregPie/lodash.multipermutations)
- [lodash.product](https://github.com/SeregPie/lodash.product)
