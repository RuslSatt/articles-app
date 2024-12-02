import { IBuildOptions } from 'config/types/config';
import babelRemovePropsPlugin from '../../babel/removePropsPlugin';

export interface IBuildBabelOptions extends IBuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: IBuildBabelOptions) {
    return {
        test: isTsx ? /\.tsx?$/ : /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX: isTsx
                        }
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx &&
                        !isDev && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid']
                            }
                        ]
                ].filter(Boolean)
            }
        }
    };
}
