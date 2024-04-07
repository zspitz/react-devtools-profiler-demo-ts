module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'prefer-arrow'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': ['warn'],
        '@typescript-eslint/no-confusing-void-expression': ['off'],
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/restrict-template-expressions': ['error', {
            allowAny: false,
            allowArray: false,
            allowBoolean: true,
            allowNever: false,
            allowNullish: true,
            allowNumber: true,
            allowRegExp: false
        }],
        '@typescript-eslint/no-non-null-assertion': ['off']
    },
}
