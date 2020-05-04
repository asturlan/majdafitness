module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'jest': true,
        'es6': true,
        'node': true,
    },
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'plugins': [
        'react',
        'babel',
        'jsx-a11y'
    ],
    'rules': {
        'indent': ["error", 4, { "SwitchCase": 1 }],
        'react/display-name': 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'arrow-parens': 0,
        'comma-dangle': 2,
        'max-len': 0,
        'no-console': 0,
        'no-multiple-empty-lines': ['error', { "max": 1 }],
        "no-trailing-whitespace": 0,
        "react/jsx-filename-extension": 2,
        'semi': ["error", "always"],
        'space-before-function-paren': 0,
        'no-trailing-spaces': 'error',
        'brace-style': 'error',
        'arrow-spacing': 'error',
        'space-infix-ops': 'error',
        'block-spacing': 'error',
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': [2, 'last', { "exceptions": { "CallExpression": false } }],
        'lines-between-class-members': ['error', 'always'],
        'no-var': 'error',
        'object-curly-spacing': [2, 'always'],
        'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
        'keyword-spacing': [2, {'before': true, 'after': true}],
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true}],
        'camelcase': 2,
        "template-curly-spacing" : "off",
        "indent": ['error', 4, {
            "ignoredNodes": ["TemplateLiteral"]
        }]
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'ecmaFeatures': {
            'jsx': true,
            'arrowFunctions': true
        }
    },
    'settings': {
        'react': {
            'version': require('./package.json').dependencies.react,
        },
    },
}