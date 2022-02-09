module.exports = {
  // https://github.com/newrelic/eslint-plugin-newrelic
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@newrelic/eslint-plugin-newrelic/react',
    'plugin:@newrelic/eslint-plugin-newrelic/prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  plugins: ['react', 'jsx-a11y', 'markdown', '@typescript-eslint', 'graphql'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: ['**/__tests__/**/*', '**/__generated__/**/*'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'jsx-a11y/no-onchange': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/prop-types': 'off',

    // typescript rules will also be invoked for js files
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/no-explicit-any': 1,
  },
};
