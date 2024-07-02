import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildConfigWebpack(options: IBuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options)
    };
}
