import React from 'react';
import CodeBlock from '@newrelic/gatsby-theme-newrelic/src/components/CodeBlock';
import Terminal from '../../../components/Terminal';
import { isShellLanguage } from '../../../utils/codeBlock';

const CustomCodeBlock = ({
  language,
  children,
  animate,
  copyable,
  ...props
}) => {
  return isShellLanguage(language) ? (
    <Terminal animate={animate} copyable={copyable}>
      {children}
    </Terminal>
  ) : (
    <CodeBlock language={language} copyable={copyable} {...props}>
      {children}
    </CodeBlock>
  );
};

CustomCodeBlock.propTypes = CodeBlock.propTypes;

export default CustomCodeBlock;
