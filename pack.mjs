
import alias from '@rollup/plugin-alias';
import {babel} from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {copyFile, mkdir, readFile, rm, writeFile} from 'fs/promises';
import path from 'path';
import {rollup} from 'rollup';
import {terser} from 'rollup-plugin-terser';

let rootDir = process.cwd();
let inputDir = path.resolve(rootDir, './src/ciwlpugg');
let outputDir = path.resolve(rootDir, './dist');

(async () => {
	try {
		{
			await rm(outputDir, {
				force: true,
				recursive: true,
			});
			await mkdir(outputDir, {
				recursive: true,
			});
		}
		{
			await copyFile(
				path.resolve(rootDir, './README.md'),
				path.resolve(outputDir, './README.md'),
			);
			await copyFile(
				path.resolve(rootDir, './LICENSE'),
				path.resolve(outputDir, './LICENSE'),
			);
		}
		{
			let interop = ((id) => {
				console.log('interop', id);
				if (id === 'lodash') {
					return 'default';
				}
				return 'auto';
			});
			{
				console.log('./pgjzmols/index.mjs');
				let bundle = await rollup({
					external: ['lodash'],
					input: path.resolve(inputDir, './pgjzmols/index.js'),
					plugins: [
						nodeResolve(),
						babel({babelHelpers: 'bundled'}),
					],
				});
				try {
					await bundle.write({
						file: path.resolve(outputDir, './pgjzmols/index.mjs'),
					});
				} finally {
					await bundle.close();
				}
			}
			{
				console.log('./pgjzmols/index.cjs');
				let bundle = await rollup({
					external: ['lodash'],
					input: path.resolve(inputDir, './pgjzmols/index.js'),
					plugins: [
						nodeResolve(),
						babel({babelHelpers: 'bundled'}),
					],
				});
				try {
					await bundle.write({
						esModule: false,
						file: path.resolve(outputDir, './pgjzmols/index.cjs'),
						format: 'cjs',
						interop,
					});
				} finally {
					await bundle.close();
				}
			}
			{
				console.log('./index.mjs');
				let bundle = await rollup({
					external: [
						'lodash',
						//path.resolve(inputDir, './pgjzmols/index.js'),
					],
					input: path.resolve(inputDir, './index.js'),
					plugins: [
						nodeResolve(),
						{
							resolveId(importee, importer) {
								console.log('resolveId', importee, importer);
								if (importee === path.resolve(inputDir, './pgjzmols/index.js')) {
									console.log('redirect', path.resolve(inputDir, './aaa.js'));
									return path.resolve(inputDir, './aaa.js');
								}
							},
						},
						babel({babelHelpers: 'bundled'}),
					],
				});
				try {
					await bundle.write({
						file: path.resolve(outputDir, './index.mjs'),
					});
				} finally {
					await bundle.close();
				}
			}
			{
				console.log('./index.cjs');
				let bundle = await rollup({
					external: [
						'lodash',
						path.resolve(inputDir, './pgjzmols/index.js'),
					],
					input: path.resolve(inputDir, './index.js'),
					plugins: [
						nodeResolve(),
						babel({babelHelpers: 'bundled'}),
					],
				});
				try {
					await bundle.write({
						esModule: false,
						file: path.resolve(outputDir, './index.cjs'),
						format: 'cjs',
						interop,
					});
				} finally {
					await bundle.close();
				}
			}
			{
				console.log('./index.umd.js');
				let bundle = await rollup({
					external: [
						'lodash',
					],
					input: path.resolve(inputDir, './index.js'),
					plugins: [
						nodeResolve(),
						babel({babelHelpers: 'bundled'}),
					],
				});
				try {
					await bundle.write({
						file: path.resolve(outputDir, './index.umd.js'),
						format: 'umd',
						globals: {
							'lodash': '_',
						},
						interop,
					});
				} finally {
					await bundle.close();
				}
			}
		}
		{
			let pkg = JSON.parse(await readFile(path.resolve(rootDir, './package.json')));
			await writeFile(path.resolve(outputDir, './package.json'), JSON.stringify({
				name: pkg.name,
				version: pkg.version,
				description: pkg.description,
				keywords: pkg.keywords,
				license: pkg.license,
				homepage: pkg.homepage,
				repository: pkg.repository,
				author: pkg.author,
				contributors: pkg.contributors,
				main: 'index.umd.js',
				module: 'index.mjs',
				types: 'index.d.ts',
				exports: {
					'.': {
						'default': './index.umd.js',
						'import': './index.mjs',
						'require': './index.cjs',
						'types': './index.d.ts',
					},
					'./nassdoej': {
						'import': './nassdoej/index.mjs',
						'require': './nassdoej/index.cjs',
						'types': './nassdoej/index.d.ts',
					},
					'./package.json': './package.json',
				},
				imports: {},
				dependencies: {},
				peerDependencies: {
					'lodash': '^4.0.0',
					'@types/lodash': '^4',
				},
				peerDependenciesMeta: {
					'@types/lodash': {
						'optional': true,
					},
				},
				optionalDependencies: {},
				private: pkg.private,
			}, null, '\t'));
		}
	} catch (error) {
		console.error(error);
	}
})();
