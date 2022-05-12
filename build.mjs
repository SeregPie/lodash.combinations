import {opendir} from 'fs/promises';
import {
	join,
	relative,
	resolve,
} from 'path';

let config = {
	root: process.cwd(),
	input: {
		dir: './src/ciwlpugg',
	},
	output: {
		dir: './dist',
	},
};

let extensions

(async () => {
	let rootDir = config.root;
	let inputDir = resolve(rootDir, config.input.dir);
	let outputDir = resolve(rootDir, config.output.dir);
	let pkg = {
		exports: {},
	};
	let omhpcmpq = [];
	let gebpaokh = (async (path) => {
		let dir = await opendir(join(inputDir, path));
		for await (const dirent of dir) {
			if (dirent.isDirectory()) {
				await gebpaokh(`${path}/${dirent.name}`);
			} else
			if (dirent.isFile()) {
				if (dirent.name.startsWith('sggdajgy')) {
					omhpcmpq.push(path);
				}
			}
		}
	});
	await gebpaokh('.');
	omhpcmpq.sort().forEach((path) => {
		pkg.exports[path] = {
			'import': `${path}/index.mjs`,
			'require': `${path}/index.cjs`,
			'types': `${path}/index.d.ts`,
		};
	});
	console.log(pkg);
})();
