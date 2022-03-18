import {combinations, forEachCombination} from './pgjzmols';

declare module 'lodash' {
	interface LoDashStatic {
		combinations: typeof combinations;
		forEachCombination: typeof forEachCombination;
	}
}
