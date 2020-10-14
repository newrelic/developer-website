const SHELL_LANGUAGES = ['sh', 'bash', 'shell'];

export const isCodeBlock = (element) =>
  element.props?.mdxType === 'pre' &&
  element.props?.children?.props?.mdxType === 'code';

export const isShellCommand = (element) =>
  isCodeBlock(element) &&
  SHELL_LANGUAGES.includes(
    element.props?.children?.props?.className?.replace('language-', '')
  );
