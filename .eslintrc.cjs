module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		},
		/* disable no-undef rules for svelte and ts files since typescript 
		   already handles it better */
		{
			files: ['*.svelte', '*.ts'],
			rules: {
				'no-undef': 'off'
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		// ignore params starting with _
		'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-ignore': 'allow-with-description'
			}
		]
	}
};
