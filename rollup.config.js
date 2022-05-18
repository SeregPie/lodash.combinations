import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

import {main} from './package.json';

let globals = {
	'lodash': '_',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		babel({babelHelpers: 'bundled'}),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		globals,
	},
};
