import webpack from "webpack";
import {buildConfigWebpack} from "./config/buildConfigWebpack";
import path from "path";

const mode = 'development';
const isDev = mode === 'development';
const PORT = 3000;

const config: webpack.Configuration = buildConfigWebpack({
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
    port: PORT
});

export default config;
