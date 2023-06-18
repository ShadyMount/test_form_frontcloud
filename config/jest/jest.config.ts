/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    testTimeout: 20000,
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.png': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^axios$': require.resolve('axios'),
    },
};
