import {nodeResolve} from '@rollup/plugin-node-resolve';

let globals = {
	'lodash': '_',
};

export default [
	{
		external: Object.keys(globals),
		input: './src/core/index.js',
		plugins: [
			nodeResolve(),
		],
		output: {
			file: './dist/index.js',
			format: 'umd',
			globals,
		},
	},
	{
		external: Object.keys(globals),
		input: './src/core/index.js',
		plugins: [
			nodeResolve(),
		],
		output: {
			file: './dist/index.msj',
		},
	},
];
