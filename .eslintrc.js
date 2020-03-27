module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'], 'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'smart'], 'no-param-reassign': ['error', { props: false }],
    'react/prefer-stateless-function': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
