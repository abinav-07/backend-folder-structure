module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    'spaced-comment': 'off',
    'prefer-arrow-callback': 'off',
    'comma-dangle': 'off',
    'max-classes-per-file': 'off',
    'operator-linebreak': ['error', 'after'],
    'class-methods-use-this': 'off',
    'arrow-body-style': 'off',
  },
};
