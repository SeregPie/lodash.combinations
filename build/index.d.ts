type BaseDependency = {

}

type Dependency = {
	peer?: boolean;

}

type BuildOptions = {
	dependencies: Record<string, Dependency>
};

declare const build: {
	(options: BuildOptions) : Promise<void>;
};

export {
	build,
};

export type {
	BuildOptions,
	BaseDependency,
	Dependency,
	PeerDependency,

};
