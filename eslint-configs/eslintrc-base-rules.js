module.exports = {
  extends: ['eslint:recommended', 'plugin:jsonc/recommended-with-jsonc'],
  globals: {
    JSX: 'readonly',
    NodeJS: 'readonly',
    __BUNDLE_START_TIME__: 'readonly',
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
  plugins: ['no-todo-without-ticket'],
  rules: {
    'jsonc/sort-keys': 'error',
    'no-todo-without-ticket/require-issue-ref': [
      1,
      {
        saviorTerms: ['BOOST', 'A2', 'AUDACYD2C'],
      },
    ],
  },
};
