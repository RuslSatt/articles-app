export type BuildMode = 'production' | 'development';

type Project = 'storybook' | 'frontend' | 'jest';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: Project;
}

export interface IBuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
    project: Project;
}
