module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'arrow-parens': 0,
    'import/extensions': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': 0,
    'object-curly-newline': 0,
    semi: 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
