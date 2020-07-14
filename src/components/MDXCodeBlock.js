import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

const MDXCodeBlock = ({
  children,
  className,
  copy,
  lineNumbers,
  live,
  lineHighlight,
  ...props
}) => (
  <CodeBlock
    {...props}
    copyable={copy !== 'false'}
    highlightedLines={lineHighlight}
    language={className?.replace('language-', '')}
    lineNumbers={lineNumbers === 'true'}
    live={live === 'true'}
    preview={false}
  >
    {children}
  </CodeBlock>
);

MDXCodeBlock.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.oneOf(['true', 'false']),
  lineHighlight: PropTypes.string,
  lineNumbers: PropTypes.oneOf(['true', 'false']),
  live: PropTypes.oneOf(['true', 'false']),
};

export default MDXCodeBlock;
