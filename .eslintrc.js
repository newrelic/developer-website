module.exports = {
  // https://github.com/newrelic/eslint-plugin-newrelic
  extends: [
    'plugin:@newrelic/eslint-plugin-newrelic/react',
    'plugin:@newrelic/eslint-plugin-newrelic/prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  plugins: ['react', 'jsx-a11y', 'markdown', 'graphql'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/no-unsafe-argument': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/camelcase': 2,
      },
    },
  ],
  parserOptions: {
    files: ['*.js', '*.jsx'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
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
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
