/* eslint-disable import/unambiguous, import/no-commonjs, no-magic-numbers */
/* eslint-disable no-inline-comments */


const options = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:flowtype/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			generators: true,
			jsx: true,
			modules: false
		},
		ecmaVersion: 8,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'import',
		'flowtype',
		'babel'
	]
};

const ERROR = 'error';
const TRANSITION_WARNING = 'warn'; // warnings that should be reviewed soon
const KEEP_WARNING = 'warn'; // warnings that should stay warnings
const IGNORE = 'ignore';

// These should not be removed at all.
const possibleErrorsRules = {
	'for-direction': ERROR,
	'getter-return': ERROR,
	'no-await-in-loop': ERROR,
	'no-console': TRANSITION_WARNING,
	'no-extra-parens': [
		TRANSITION_WARNING,
		'all',
		{
			ignoreJSX: 'multi-line',
			nestedBinaryExpressions: false
		}
	],
	'no-prototype-builtins': ERROR,
	'no-template-curly-in-string': ERROR,
	'valid-jsdoc': [
		ERROR,
		{
			prefer: {
				return: 'returns'
			},
			requireReturn: false
		}
	]
};

// These should probably not be removed at all.
const bestPracticesRules = {
	'accessor-pairs': ERROR,
	'array-callback-return': ERROR,
	'block-scoped-var': ERROR,
	'class-methods-use-this': TRANSITION_WARNING,
	complexity: ERROR,
	'consistent-return': ERROR,
	curly: ERROR,
	'default-case': ERROR,
	'dot-location': [
		ERROR,
		'property'
	],
	'dot-notation': ERROR,
	eqeqeq: [
		ERROR,
		'allow-null'
	],
	'guard-for-in': TRANSITION_WARNING,
	'no-alert': ERROR,
	'no-caller': ERROR,
	'no-div-regex': ERROR,
	'no-else-return': ERROR,
	'no-empty-function': ERROR,
	'no-eq-null': ERROR,
	'no-eval': ERROR,
	'no-extend-native': ERROR,
	'no-extra-bind': ERROR,
	'no-extra-label': ERROR,
	'no-floating-decimal': ERROR,
	'no-implicit-coercion': ERROR,
	'no-implicit-globals': ERROR,
	'no-implied-eval': ERROR,
	'no-iterator': ERROR,
	'no-labels': ERROR,
	'no-lone-blocks': ERROR,
	'no-loop-func': ERROR,
	'no-magic-numbers': [
		TRANSITION_WARNING,
		{
			detectObjects: true,
			enforceConst: true,
			ignore: [
				0,
				1,
				2,
				3,
				10
			],
			ignoreArrayIndexes: true
		}
	],
	'no-multi-spaces': ERROR,
	'no-multi-str': ERROR,
	'no-new': ERROR,
	'no-new-func': ERROR,
	'no-new-wrappers': ERROR,
	'no-octal-escape': ERROR,
	'no-param-reassign': ERROR,
	'no-proto': ERROR,
	'no-return-assign': ERROR,
	'no-return-await': ERROR,
	'no-script-url': ERROR,
	'no-self-compare': ERROR,
	'no-sequences': ERROR,
	'no-throw-literal': ERROR,
	'no-unmodified-loop-condition': ERROR,
	'no-unused-expressions': TRANSITION_WARNING,
	'no-useless-call': ERROR,
	'no-useless-concat': ERROR,
	'no-useless-return': ERROR,
	'no-void': ERROR,
	'no-warning-comments': KEEP_WARNING,
	'no-with': ERROR,
	'prefer-promise-reject-errors': ERROR,
	radix: ERROR,
	'require-await': ERROR,
	'vars-on-top': ERROR,
	'wrap-iife': [
		ERROR,
		'any'
	],
	yoda: ERROR
};

const strictModeRules = {
	strict: [
		TRANSITION_WARNING,
		'global'
	]
};

const variablesRules = {
	'init-declarations': TRANSITION_WARNING,
	'no-catch-shadow': TRANSITION_WARNING,
	'no-label-var': ERROR,
	'no-shadow': ERROR,
	'no-shadow-restricted-names': ERROR,
	'no-undef-init': ERROR,
	'no-undefined': ERROR,
	'no-unused-vars': TRANSITION_WARNING,
	'no-use-before-define': ERROR
};

const nodeAndCommonJSRules = {
	'callback-return': [
		ERROR,
		[
			'callback',
			'cb',
			'next',
			'done'
		]
	],
	'global-require': ERROR,
	'handle-callback-err': ERROR,
	'no-mixed-requires': ERROR,
	'no-new-require': ERROR,
	'no-path-concat': ERROR,
	'no-process-env': TRANSITION_WARNING,
	'no-process-exit': ERROR,
	'no-sync': ERROR
};

// Agreement of all project leads needed before changing these.
const stylisticIssuesRules = {
	'array-bracket-newline': [
		ERROR,
		'consistent'
	],
	'array-bracket-spacing': ERROR,
	'block-spacing': ERROR,
	'brace-style': [
		ERROR,
		'stroustrup',
		{
			allowSingleLine: true
		}
	],
	camelcase: [
		TRANSITION_WARNING,
		{
			properties: 'always'
		}
	],
	'comma-dangle': ERROR,
	'comma-spacing': ERROR,
	'comma-style': ERROR,
	'computed-property-spacing': ERROR,
	'consistent-this': [
		ERROR,
		'self'
	],
	'eol-last': ERROR,
	'func-call-spacing': ERROR,
	'func-name-matching': TRANSITION_WARNING,
	'func-names': TRANSITION_WARNING,
	'func-style': [
		ERROR,
		'declaration'
	],
	'function-paren-newline': [
		TRANSITION_WARNING,
		'consistent'
	],
	'id-length': [
		ERROR,
		{
			exceptions: [
				'x',
				'i',
				'_',
				'$',
				'a',
				'b',
				'q'
			]
		}
	],
	indent: [
		ERROR,
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 1
		}
	],
	'jsx-quotes': [
		ERROR,
		'prefer-double'
	],
	'key-spacing': ERROR,
	'keyword-spacing': ERROR,
	'linebreak-style': ERROR,
	'lines-around-comment': [
		ERROR,
		{
			allowBlockStart: true,
			beforeBlockComment: true
		}
	],
	'lines-between-class-members': TRANSITION_WARNING,
	'max-depth': [
		ERROR,
		6
	],
	'max-len': [
		ERROR,
		80,
		4
	],
	'max-lines': TRANSITION_WARNING,
	'max-nested-callbacks': [
		ERROR,
		5
	],
	'max-params': [
		TRANSITION_WARNING,
		6
	],
	'max-statements': [
		TRANSITION_WARNING,
		50
	],
	'multiline-comment-style': TRANSITION_WARNING,
	'new-parens': ERROR,
	'no-array-constructor': ERROR,
	'no-bitwise': ERROR,
	'no-continue': ERROR,
	'no-inline-comments': ERROR,
	'no-lonely-if': ERROR,
	'no-mixed-spaces-and-tabs': [
		ERROR,
		'smart-tabs'
	],
	'no-multiple-empty-lines': ERROR,
	'no-nested-ternary': ERROR,
	'no-new-object': ERROR,
	'no-trailing-spaces': ERROR,
	'no-unneeded-ternary': ERROR,
	'no-whitespace-before-property': ERROR,
	'object-curly-newline': [
		ERROR,
		{consistent: true}
	],
	'one-var': [
		ERROR,
		'never'
	],
	'operator-assignment': ERROR,
	'operator-linebreak': [
		ERROR,
		'after'
	],
	'padded-blocks': [
		ERROR,
		'never'
	],
	'quote-props': [
		ERROR,
		'as-needed'
	],
	quotes: [
		ERROR,
		'single',
		'avoid-escape'
	],
	'require-jsdoc': TRANSITION_WARNING,
	'semi-spacing': [
		ERROR,
		{
			after: true,
			before: false
		}
	],
	'sort-keys': ERROR,
	'sort-vars': ERROR,
	'space-before-blocks': ERROR,
	'space-before-function-paren': [
		ERROR,
		{
			named: 'never'
		}
	],
	'space-in-parens': ERROR,
	'space-infix-ops': ERROR,
	'space-unary-ops': ERROR,
	'spaced-comment': ERROR,
	'unicode-bom': ERROR,
	'wrap-regex': ERROR
};

const ecmaScript6Rules = {
	'arrow-body-style': ERROR,
	'arrow-spacing': ERROR,
	'generator-star-spacing': [
		ERROR,
		{
			after: true,
			before: false
		}
	],
	'no-confusing-arrow': [
		ERROR,
		{
			allowParens: true
		}
	],
	'no-duplicate-imports': ERROR,
	'no-useless-computed-key': ERROR,
	'no-useless-constructor': ERROR,
	'no-useless-rename': ERROR,
	'no-var': ERROR,
	'object-shorthand': ERROR,
	'prefer-arrow-callback': ERROR,
	'prefer-const': ERROR,
	'prefer-destructuring': [
		TRANSITION_WARNING,
		{
			array: false,
			object: true
		}
	],
	'prefer-numeric-literals': ERROR,
	'prefer-template': ERROR,
	'rest-spread-spacing': ERROR,
	'sort-imports': ERROR,
	'template-curly-spacing': ERROR,
	'yield-star-spacing': ERROR
};

const babelRules = {
	'babel/new-cap': [
		ERROR,
		{
			capIsNew: false
		}
	],
	'babel/no-invalid-this': ERROR,
	'babel/object-curly-spacing': ERROR,
	'babel/semi': ERROR
};

const flowTypeRules = {
	'flowtype/semi': ERROR
};

const reactRules = {
	'react/boolean-prop-naming': ERROR,
	'react/button-has-type': ERROR,
	'react/default-props-match-prop-types': ERROR,
	'react/forbid-component-props': TRANSITION_WARNING,
	'react/forbid-foreign-prop-types': ERROR,
	'react/jsx-boolean-value': ERROR,
	'react/jsx-closing-bracket-location': [
		ERROR,
		'tag-aligned'
	],
	'react/jsx-closing-tag-location': ERROR,
	'react/jsx-curly-brace-presence': ERROR,
	'react/jsx-curly-spacing': [
		ERROR,
		{
			children: true
		}
	],
	'react/jsx-equals-spacing': TRANSITION_WARNING,
	'react/jsx-first-prop-new-line': ERROR,
	'react/jsx-handler-names': TRANSITION_WARNING,
	'react/jsx-indent-props': [
		ERROR,
		'tab'
	],
	'react/jsx-max-props-per-line': TRANSITION_WARNING,
	'react/jsx-no-bind': [
		TRANSITION_WARNING,
		{
			ignoreRefs: true
		}
	],
	'react/jsx-no-literals': TRANSITION_WARNING,
	'react/jsx-one-expression-per-line': TRANSITION_WARNING,
	'react/jsx-pascal-case': ERROR,
	'react/jsx-sort-props': [
		ERROR,
		{
			callbacksLast: true,
			ignoreCase: false,
			shorthandFirst: true
		}
	],
	'react/jsx-tag-spacing': [
		ERROR,
		{
			beforeSelfClosing: 'never'
		}
	],
	'react/jsx-wrap-multilines': TRANSITION_WARNING,
	'react/no-access-state-in-setstate': ERROR,
	'react/no-array-index-key': TRANSITION_WARNING,
	'react/no-danger': TRANSITION_WARNING,
	'react/no-did-mount-set-state': TRANSITION_WARNING,
	'react/no-did-update-set-state': ERROR,
	'react/no-direct-mutation-state': ERROR,
	'react/no-multi-comp': [
		TRANSITION_WARNING,
		{
			ignoreStateless: true
		}
	],
	'react/no-redundant-should-component-update': ERROR,
	'react/no-set-state': TRANSITION_WARNING,
	'react/no-typos': TRANSITION_WARNING,
	'react/no-unused-prop-types': TRANSITION_WARNING,
	'react/no-unused-state': TRANSITION_WARNING,
	'react/no-will-update-set-state': ERROR,
	'react/prefer-es6-class': [
		TRANSITION_WARNING,
		'always'
	],
	'react/prefer-stateless-function': TRANSITION_WARNING,
	'react/require-default-props': [
		TRANSITION_WARNING,
		{
			forbidDefaultForRequired: true
		}
	],
	'react/self-closing-comp': ERROR,
	'react/sort-comp': ERROR,
	'react/sort-prop-types': [
		ERROR,
		{
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
			sortShapeProp: true
		}
	],
	'react/style-prop-object': ERROR,
	'react/void-dom-elements-no-children': ERROR
};

const es6ImportRules = {
	'import/first': ERROR,
	'import/newline-after-import': [
		TRANSITION_WARNING,
		{
			count: 2
		}
	],
	'import/no-absolute-path': ERROR,
	'import/no-amd': ERROR,
	'import/no-commonjs': TRANSITION_WARNING,
	'import/no-duplicates': ERROR,
	'import/no-dynamic-require': TRANSITION_WARNING,
	'import/no-extraneous-dependencies': ERROR,
	'import/no-internal-modules': [
		ERROR,
		{
			allow: [
				'**/src/**',
				'**/lib/**',
				'**/data/**',
				'**/config/**',
				'react-dom/server'
			]
		}
	],
	'import/no-mutable-exports': ERROR,
	'import/no-named-as-default': ERROR,
	'import/no-named-as-default-member': ERROR,
	'import/no-named-default': ERROR,
	'import/no-nodejs-modules': TRANSITION_WARNING,
	'import/no-unassigned-import': TRANSITION_WARNING
};

options.rules = Object.assign(
	{},
	possibleErrorsRules,
	bestPracticesRules,
	strictModeRules,
	variablesRules,
	nodeAndCommonJSRules,
	stylisticIssuesRules,
	ecmaScript6Rules,
	babelRules,
	flowTypeRules,
	reactRules,
	es6ImportRules
);


module.exports = options;