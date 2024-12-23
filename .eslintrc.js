module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
        'plugin:cypress/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'fsd-rules-by-russell',
        'unused-imports'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'href',
                    'name',
                    'alt',
                    'options',
                    'optionLabel',
                    'direction',
                    'justifyContent',
                    'alignItems',
                    'tag',
                    'as',
                    'max',
                    'dataTestId'
                ]
            }
        ],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'click-events-have-key-events': 'off',
        'no-noninteractive-element-interactions': 'off',
        'no-param-reassign': 'off',
        'react/jsx-no-useless-fragment': 'warn',
        'fsd-rules-by-russell/path-checker': ['error', { alias: '@' }],
        'fsd-rules-by-russell/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilePatterns: [
                    '**/*.test.{ts,tsx}',
                    '**/*.story.{ts,tsx}, **/StoreDecorator.tsx'
                ]
            }
        ],
        'fsd-rules-by-russell/layer-imports': [
            'error',
            { alias: '@', ignoreImportPatterns: ['**/StoreProvider', '**/testing', '**/store'] }
        ],
        'unused-imports/no-unused-imports': 'error'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};
