const SHELL_LANGUAGES = ['sh', 'bash', 'shell'];

export const isCodeBlock = (element) =>
  element.props?.mdxType === 'pre' &&
  element.props?.children?.props?.mdxType === 'code';

export const isShellCommand = (element) =>
  isCodeBlock(element) &&
  isShellLanguage(
    element.props?.children?.props?.className?.replace('language-', '')
  );

export const isShellLanguage = (language) => SHELL_LANGUAGES.includes(language);
