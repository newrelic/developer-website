module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // https://eslint.org/docs/rules
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
