module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'ignore',

  importOrder: [
    'reflect-metadata',
    '^.*\\.vue$',
    '^@core\\/(.*)$',
    '^@server\\/(.*)$',
    '^@ui\\/(.*)$',
    '^src\\/(.*)$',
    '^(\\.{1,}\\/)(.*)$',
    '^.*$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ['*.md'],
      options: {
        tabWidth: 1,
      },
    },
  ],

  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
