/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
    rootDir: '../../',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>src/$1'
    }
};

export default config;
