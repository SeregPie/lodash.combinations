type Collection<T> = Iterable<T> | ArrayLike<T> | Record<string | number, T>;

interface Iteratee<T> {
	(value: T, index: number): any;
}

declare const combinations: {
	<T>(collection: Collection<T>, k: number): Array<Array<T>>;
};

declare const forEachCombination: {
	<T>(collection: Collection<T>, k: number, iteratee: Iteratee<Array<T>>): void;
};

export { combinations, forEachCombination };
