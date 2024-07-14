import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { IBuildOptions } from '../types/config';

export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ];

    if (isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        );
    }

    return plugins;
}
