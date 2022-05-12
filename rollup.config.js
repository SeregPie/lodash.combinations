
import {babel} from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {rm} from 'fs/promises';
import path from 'path';
import {terser} from 'rollup-plugin-terser';

(async () => {
	await rm(path.resolve(__dirname, './dist'), {
		recursive: true,
		force: true,
	});
})();

let globals = {
	'lodash': '_',
};

export default {
	external: Object.keys(globals),
	input: {
		'index': './src/ciwlpugg/index.js',
		'pgjzmols/index': './src/ciwlpugg/pgjzmols/index.js',
	},
	plugins: [
		nodeResolve(),
		babel({babelHelpers: 'bundled'}),
		//terser(),
	],
	interop: ((id) => {
		if (id === 'lodash') {
			return 'default';
		}
		return 'auto';
	}),
	output: [
		{
			dir: './dist',
			entryFileNames: '[name].mjs',
			chunkFileNames: 'bundle.mjs',
		},
		{
			dir: './dist',
			format: 'cjs',
			entryFileNames: '[name].cjs',
			chunkFileNames: 'bundle.cjs',
			interop: ((id) => {
				if (id === 'lodash') {
					return 'default';
				}
				return 'auto';
			}),
			externalLiveBindings: false,
		},
	],
};
