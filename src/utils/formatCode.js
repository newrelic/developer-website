import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

const formatCode = (code, formatOptions = {}) =>
  prettier.format(code, {
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    ...formatOptions,
    plugins: [parserBabel],
    parser: 'babel',
  });

export default formatCode;
