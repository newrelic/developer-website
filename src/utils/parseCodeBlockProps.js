import warning from 'warning';
import { isCodeBlock } from './codeBlock';

const DEFAULT_FILENAMES = {
  js: 'index.js',
  jsx: 'index.js',
  scss: 'styles.scss',
  css: 'styles.css',
};

const parseCodeBlockProps = (element) => {
  if (!isCodeBlock(element)) {
    warning(
      false,
      'parseCodeBlockProps: The element passed in is not a code block'
    );

    return;
  }

  const {
    children: { props },
  } = element.props;

  const language = props.className?.replace('language-', '');
  const code = props.children.trim();

  if (process.env.NODE_ENV === 'development') {
    warning(
      Boolean(props.fileName),
      `\`fileName\` option missing for code block. Falling back to default filename.

${code}
`
    );

    warning(
      Boolean(language),
      `Language missing for code block. Please specify a language.

${code}
`
    );
  }

  return {
    code,
    language,
    fileName: props.fileName || DEFAULT_FILENAMES[language] || '',
  };
};

export default parseCodeBlockProps;
