import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {IBuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })
    ]
}
