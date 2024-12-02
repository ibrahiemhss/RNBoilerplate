import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import reactRedux from 'eslint-plugin-react-redux';
import reactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      'src/registerServiceWorker.js',
      'node_modules/*',
      'public/*',
      'build/*',
      'config/*',
      'preBuildScript/*',
      '__tests__/*',
      '**/.prettierrc',
      '**/.metro.config.js',
      'e2e/init.js',
      'app/modules/themes/Images.ts',
      '**/react-native.config.js',
      '__mocks__/@react-native-community/async-storage/index.js',
      'zfiles/*',
      'ios/*',
      'android/*',
      '**/metro.config.js',
    ],
  },
  ...compat.extends(
    //"airbnb",
    //"plugin:react-redux/recommended",
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    plugins: {
      react,
      prettier,
      'react-redux': reactRedux,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
        sourceType: 'module', // Set this to 'commonjs' if you're using CommonJS modules
      },
    },

    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src/'],
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json'],
        },
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/jsx-uses-vars': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'react/prop-types': [
        'warn',
        {
          ignore: ['navigation'],
        },
      ],

      'react/jsx-indent-props': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      'react/jsx-wrap-multilines': [
        'warn',
        {
          declaration: false,
          assignment: false,
        },
      ],

      // "import/no-cycle": "warn",
      'import/no-extraneous-dependencies': 'off',

      /*"import/extensions": ["error", "ignorePackages", {
            js: "never",
            mjs: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        }],
*/
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          printWidth: 100,
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          arrowParens: 'always',
        },
      ],
    },
  },
];
