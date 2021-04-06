module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/require-default-props': [1, { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
    indent: ['error', 2],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
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
