import warning from 'warning';
import { isCodeBlock } from './codeBlock';

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

  return {
    code,
    language,
    fileName: props.fileName,
  };
};

export default parseCodeBlockProps;
