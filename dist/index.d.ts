import {combinations, forEachCombination} from './nassdoej';

declare module 'lodash' {
	interface LoDashStatic {
		combinations: typeof combinations;
		forEachCombination: typeof forEachCombination;
	}
}
