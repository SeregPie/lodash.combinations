type AnyCollection<T> = Iterable<T> | ArrayLike<T> | Record<any, T>;

declare module _ {
	interface LoDashStatic {
		combinations<T>(collection: undefined | null | AnyCollection<T>, k: number): Array<Array<T>>;
	}
	interface String {
		combinations(k: number): Collection<Array<string>>;
	}
	interface Object<T> {
		combinations(k: number): Collection<Array<T>>;
	}
	interface Collection<T> {
		combinations(k: number): Collection<Array<T>>;
	}
	interface StringChain {
		combinations(k: number): CollectionChain<Array<string>>;
	}
	interface StringNullableChain {
		combinations(k: number): CollectionChain<Array<string>>;
	}
	interface ObjectChain<T> {
		combinations(k: number): CollectionChain<Array<T>>;
	}
	interface CollectionChain<T> {
		combinations(k: number): CollectionChain<Array<T>>;
	}
}
