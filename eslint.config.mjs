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
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import * as eslintPluginMdx from 'eslint-plugin-mdx'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin
        },
        extends: [
            // eslint.configs.recommended,
            eslintPluginPrettierRecommended, // Enables eslint-plugin-prettier, eslint-config-prettier and prettier/prettier. This will display prettier errors as ESLint errors.
        ],
        languageOptions: {
            parser: tseslint.parser,
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

    {
        // disable type-aware linting on JS files
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },

    // File-pattern specific overrides
    // javascript & typescript
    {
        files: ['*.js', '*.ts', '*.tsx'],
        plugins: {
            notice: noticePlugin
        },
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
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic, eslintPluginImport.flatConfigs.recommended, eslintPluginImport.flatConfigs.typescript],
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                    project: './tsconfig.json',
                },
            },
        },
        languageOptions: {
            parserOptions: {
                // This setting is required if you want to use rules which require type information
                // https://typescript-eslint.io/packages/parser/#project
                projectService: true,
            },
        },
        rules: {
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
);
