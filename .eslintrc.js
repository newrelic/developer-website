module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // https://eslint.org/docs/rules
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
