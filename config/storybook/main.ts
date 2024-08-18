import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { buildStyleLoader } from '../webpack/loaders/buildStyleLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';
import { buildFileLoader } from 'config/webpack/loaders/buildFileLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    webpackFinal: async (config) => {
        const srcPath = path.resolve(__dirname, '..', '..', 'src');
        config.resolve?.modules?.push(srcPath);
        config.resolve?.extensions?.push('.ts', '.tsx');

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify(''),
                __PROJECT__: JSON.stringify('storybook')
            })
        );

        // eslint-disable-next-line no-param-reassign
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': srcPath
            };
        }

        if (config.module) {
            // eslint-disable-next-line no-param-reassign
            const rules = config.module.rules as RuleSetRule[];

            config.module.rules = rules?.map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            });

            config.module.rules?.push(buildSvgLoader());
            config.module.rules?.push(buildStyleLoader(true));
            config.module.rules?.push(buildFileLoader());
        }

        return config;
    }
};
export default config;
