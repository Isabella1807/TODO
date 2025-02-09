import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx,tsx,ts}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
				project: 'tsconfig.json',
				tsconfigRootDir: './',
			},
		},
		settings: { react: { version: 'detect' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@typescript-eslint': typescript,
		},
		rules: {
			...js.configs.recommended.rules,
			...typescript.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'arrow-spacing': ['error', { before: true, after: true }],
			'brace-style': ['error', '1tbs'],
			'comma-dangle': ['error', 'always-multiline'],
			//'line-comment-position': ['error', { position: 'above' }],
			'array-bracket-newline': ['error', 'consistent'],
			'quotes': ['error', 'single'],
			'func-call-spacing': ['error', 'never'],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
		},
	},
];