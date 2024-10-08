import { IBuildOptions } from '../types/config';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: IBuildOptions) {
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    };

    const styleLoader = buildStyleLoader(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    return [fileLoader, svgLoader, babelLoader, tsLoader, styleLoader];
}
