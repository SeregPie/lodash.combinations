# lodash.combinations

`_.combinations(collection, k)`

Calculates all possible combinations without repetition of a certain size.

| argument | description |
| ---: | :--- |
| `collection` | A collection of distinct values to calculate the groups from. |
| `k` | A number as the size of each group. |

Returns the combinations as an array of arrays.

---

`_.forEachCombination(collection, k, iteratee)`

Iterates over the calculated groups. The iteratee function may exit the iteration early by explicitly returning `false`.

TODO

| argument | description |
| ---: | :--- |
| `collection` | TODO |
| `k` | TODO |
| `iteratee` | TODO A function to invoke per each iteration. |

## setup

### npm

```shell
npm i lodash.combinations
```

---

Use as mixins.

```javascript
import 'lodash.combinations';
import _ from 'lodash';
```

*or*

Use as standalone methods.

```javascript
import {combinations, forEachCombination} from 'lodash.combinations/pgjzmols';
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

TODO

```javascript
// TODO
_.forEachCombination(??, 2, () => {
  if (??) {

    return false;
  }
});
```


## see also

- [lodash.permutations](https://github.com/SeregPie/lodash.permutations)
- [lodash.multicombinations](https://github.com/SeregPie/lodash.multicombinations)
- [lodash.multipermutations](https://github.com/SeregPie/lodash.multipermutations)
- [lodash.product](https://github.com/SeregPie/lodash.product)
