import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Highlight from 'prism-react-renderer';
import FeatherIcon from './FeatherIcon';
import MiddleEllipsis from 'react-middle-ellipsis';
import Prism from 'prismjs';
import styles from './CodeBlock.module.scss';
import useClipboard from '../hooks/useClipboard';

const CodeHighlight = ({ children, language }) => {
  return (
    <Highlight Prism={Prism} code={children.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={styles.codeContainer} data-language={language}>
          <code>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

const CodeBlock = ({ children, copy, fileName, language }) => {
  const [copied, copyCode] = useClipboard();

  return (
    <div className={styles.container}>
      <CodeHighlight language={language}>{children}</CodeHighlight>
      {(copy || fileName) && (
        <div className={styles.statusBar}>
          <div className={styles.fileName}>
            {fileName && (
              <MiddleEllipsis>
                <span title={fileName}>{fileName}</span>
              </MiddleEllipsis>
            )}
          </div>
          <Button
            type="button"
            className={styles.copyButton}
            variant={Button.VARIANT.PLAIN}
            onClick={() => copyCode(children.trim())}
            size={Button.SIZE.SMALL}
          >
            <FeatherIcon name="copy" className={styles.copyButtonIcon} />
            {copied ? 'Copied' : 'Copy output'}
          </Button>
        </div>
      )}
    </div>
  );
};

CodeHighlight.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.propTypes = {
  fileName: PropTypes.string,
  copy: PropTypes.bool,
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  copy: true,
};

export default CodeBlock;
