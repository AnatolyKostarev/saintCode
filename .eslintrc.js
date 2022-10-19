module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'arrow-body-style': ['warn', 'always'],
    'import/prefer-default-export': 'off',
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'react/jsx-no-useless-fragment': 'off',
    semi: ['warn', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/img-redundant-alt': 'off',

  },
}
