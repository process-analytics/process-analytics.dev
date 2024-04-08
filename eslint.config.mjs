/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import noticePlugin from "eslint-plugin-notice";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
// import eslintPluginImport from 'eslint-plugin-import';
import * as eslintPluginMdx from 'eslint-plugin-mdx'
import eslintParser from '@typescript-eslint/parser';



const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];

const allExtensions = [...typeScriptExtensions, '.js', '.jsx'];


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    eslintPluginPrettierRecommended, // Enables eslint-plugin-prettier, eslint-config-prettier and prettier/prettier. This will display prettier errors as ESLint errors.

    {
        plugins: {
            notice: noticePlugin,
            import: importPlugin
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
                sourceType: 'module', // Allows for the use of imports
            },
        },
        ignores: [
            '.cache/',
            'node_modules/',
            'public/',
            'build/',
            '.github/',
            '.idea/',
            '/config/',
        ],
    },

    // File-pattern specific overrides
    // javascript & typescript
    {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        rules: {
            'notice/notice': [
                'error',
                {
                    templateFile: 'config/license-header.js',
                    onNonMatchingHeader: 'replace',
                },
            ],
            'no-console': ['error', { allow: ['warn', 'error'] }],
        },
    },

    // typescript
    /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
    ...tseslint.configs.recommended.map(conf => ({
        ...conf,
        files: ['**/*.ts', '**/*.tsx'],
    })),
    {
        files: ['**/*.ts', '**/*.tsx'],
        // ...eslintPluginImport.configs.recommended, // To uncomment when it will support flat config
        // ...eslintPluginImport.configs.typescript, // To uncomment when it will support flat config

        // To remove when eslintPluginImport will support flat config
        plugins: { import: importPlugin },
        /////////////////////////////////////////////////////////////////

        settings: {
            // To remove when eslintPluginImport will support flat config
            'import/extensions': allExtensions,
            'import/external-module-folders': ['node_modules', 'node_modules/@types'],
            'import/parsers': {
                '@typescript-eslint/parser': typeScriptExtensions,
            },
            /////////////////////////////////////////////////////////////////



            'import/resolver': {
                // To remove when eslintPluginImport will support flat config
                node: {
                    extensions: allExtensions,
                },
                /////////////////////////////////////////////////////////////////


                typescript: {
                    alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                    project: './tsconfig.json',
                },
            },
        },
        languageOptions: {
            parserOptions: {
                // To remove when eslintPluginImport will support flat config
                sourceType: 'module',
                ecmaVersion: 2018,
                /////////////////////////////////////////////////////////////////


                parser: eslintParser,

                // This setting is required if you want to use rules which require type information
                // https://typescript-eslint.io/packages/parser/#project
                project: ['./tsconfig.json'],
            },
        },
        rules: {
            // To remove when eslintPluginImport will support flat config
            // analysis/correctness
            //'import/no-unresolved': 'error',
           // 'import/namespace': 'error',
           // 'import/default': 'error',
          //  'import/export': 'error',

            // red flags (thus, warnings)
           // 'import/no-named-as-default': 'off',
           // 'import/no-named-as-default-member': 'off',
           // 'import/no-duplicates': 'warn',

          //  'import/named': 'off',
            /////////////////////////////////////////////////////////////////


            // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'no-public',
                },
            ],
            '@typescript-eslint/consistent-type-exports': [
                'error',
                {
                    fixMixedExportsWithInlineTypeSpecifier: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': ['error'],
            '@typescript-eslint/dot-notation': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
        },
    },

    // markdown
    {
        ...eslintPluginMdx.flat,
        // optional, if you want to lint code blocks at the same
        processor: eslintPluginMdx.createRemarkProcessor({
            lintCodeBlocks: true,
        }),
    },
    {
        ...eslintPluginMdx.flatCodeBlocks,
        rules: {
            ...eslintPluginMdx.rules,
            // if you want to override some rules for code blocks
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
]
;
