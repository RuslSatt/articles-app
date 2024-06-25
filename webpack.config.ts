import webpack from "webpack";
import {buildConfigWebpack} from "./config/buildConfigWebpack";
import path from "path";
import {IBuildEnv} from "./config/types/config";

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    return buildConfigWebpack({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        isDev,
        port
    });
};
