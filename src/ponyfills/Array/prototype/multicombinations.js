import Array_prototype_forEachMulticombination from './forEachMulticombination';

export default ((self, k) => {
	let result = [];
	Array_prototype_forEachMulticombination(self, k, (value) => {
		result.push(value);
	});
	return result;
});
