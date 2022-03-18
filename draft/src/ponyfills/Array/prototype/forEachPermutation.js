export default function(self, k, iteratee) {
	if (self.length >= k) {
		let index = -1;
		let loop = ((result, array, k) => {
			if (--k < 0) {
				iteratee(result, ++index, self);
			} else {
				array.forEach((value, index, array) => {
					array = [...array];
					array.splice(index, 1);
					loop([...result, value], array, k);
				});
			}
		});
		let array = [...self];
		loop([], array, k);
	}
}
