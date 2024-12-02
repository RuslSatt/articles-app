import { IBuildOptions } from '../types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(options: IBuildOptions) {
    const { isDev } = options;

    const styleLoader = buildStyleLoader(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    const babelLoader = buildBabelLoader(options);
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    return [fileLoader, svgLoader, babelLoader, babelLoader, tsxBabelLoader, styleLoader];
}
