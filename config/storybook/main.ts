import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildStyleLoader } from '../webpack/loaders/buildStyleLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';

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
        config.resolve.modules.push(srcPath);
        config.resolve.extensions.push('.ts', '.tsx');

        // eslint-disable-next-line no-param-reassign
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': srcPath
        };

        config.module.rules.push(buildSvgLoader());
        config.module.rules.push(buildStyleLoader(true));
        return config;
    }
};
export default config;
