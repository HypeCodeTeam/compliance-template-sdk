/* eslint-disable no-irregular-whitespace */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    // 'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['react', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.css', '**/*.scss'],
  rules: {
    'no-html-link-for-pages': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    'no-console': 'error',
    'no-unused-vars': 'off', // Note: you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0, // TODO: We need to change every 'any' in the projet
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-restricted-globals': [0, { name: 'name' }],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // Static analysis: // ensure imports point to files/modules that can be resolved // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [0, { commonjs: true, caseSensitive: true }], // ensure named imports coupled with named exports // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'error', // ensure default import coupled with default export // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/export': 'error', // do not allow a default import name to match a named export // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error', // warn on accessing default export property names that are also named exports // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error', // disallow use of jsdoc-marked-deprecated imports // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
          '**/.eslintrc.js', // eslint config
        ],
        optionalDependencies: false,
      },
    ], // Forbid mutable exports // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error', // Module systems: // disallow require() // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/first': 'error', // disallow non-import statements appearing before import statements // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md // deprecated: use `import/first`
    'import/no-duplicates': 'error', // disallow namespace imports // TODO: enable? // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        ts: 'never',
        tsx: 'never',
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ], // ensure absolute imports are above relative imports and that unassigned imports are ignored // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md // TODO: enforce a stricter convention in module import order?
    'import/newline-after-import': 'error', // Require modules with a single export to use a default export // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off', // Restrict which files can be imported in a given folder // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-absolute-path': 'error', // Forbid require() calls with expressions // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error', // prevent importing the submodules of other modules // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-named-default': 'error', // Reports if a module's default export is unnamed // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    'import/no-self-import': 'error', // Forbid cyclical dependencies between modules // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }], // Ensures that there are no useless path segments // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }], // dynamic imports require a leading comment with a webpackChunkName // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: [],
      },
    ], // Use this rule to prevent importing packages through relative paths. // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/order': 'off',
    camelcase: 'off',
    'lines-between-class-members': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
  },
};
