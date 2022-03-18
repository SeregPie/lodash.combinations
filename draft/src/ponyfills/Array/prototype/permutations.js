import Array_prototype_forEachPermutation from './forEachPermutation';

export default ((self, k) => {
	let result = [];
	Array_prototype_forEachPermutation(self, k, (value) => {
		result.push(value);
	});
	return result;
});
