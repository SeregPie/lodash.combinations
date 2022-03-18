import Array_prototype_forEachCombination from './forEachCombination';

export default ((self, k) => {
	let result = [];
	Array_prototype_forEachCombination(self, k, (value) => {
		result.push(value);
	});
	return result;
});
