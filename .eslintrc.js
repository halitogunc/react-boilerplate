// http://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Show an error when devDependencies are imported.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.config.js'] },
    ],

    // Eliminate unused variables, functions, and function parameters.
    // https://eslint.org/docs/rules/no-unused-vars#rule-details
    'no-unused-vars': ['error', { args: 'all' }],

    // Allow .js files to use JSX syntax.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Ensure <a> tags are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Run Prettier as an ESLint rule.
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    // Disallow calls to methods of the console object.
    // Use console.warn, console.error, console.debug instead.
    // https://eslint.org/docs/rules/no-console#rule-details
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'debug'],
      },
    ],

    // Enforces a maximum line length.
    // https://eslint.org/docs/rules/max-len#rule-details
    'max-len': ['error', { code: 100 }],
  },
};
