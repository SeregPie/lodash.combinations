import Array_prototype_forEachMultipermutation from './forEachMultipermutation';

export default ((self, k) => {
	let result = [];
	Array_prototype_forEachMultipermutation(self, k, (value) => {
		result.push(value);
	});
	return result;
});
