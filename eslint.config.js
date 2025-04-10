import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact, { rules } from 'eslint-plugin-react';
import markdown from '@eslint/markdown';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: ['markdown/recommended'],
	},
	eslintConfigPrettier,
	{
		'plugin:react/jsx-runtime': 'extends',
	},
]);
