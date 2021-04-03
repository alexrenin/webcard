module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/require-default-props': [1, { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
    indent: ['error', 2],
    // 'react/jsx-indent': ['error', 2],
    // 'react/jsx-indent-props': ['error', 2],
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css', '.scss'],
    },
  },
};
