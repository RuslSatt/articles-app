/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
    rootDir: '../../',
    modulePaths: ['<rootDir>src'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    setupFilesAfterEnv: ['<rootDir>config/jest/jestSetup.ts'],
    moduleNameMapper: {
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@/(.*)': '<rootDir>src/$1'
    },
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>config/jest/fileTransformer.js',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    globals: {
        __IS_DEV__: true
    }
};
