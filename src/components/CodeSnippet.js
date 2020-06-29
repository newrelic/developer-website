import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import MiddleEllipsis from 'react-middle-ellipsis';
import FeatherIcon from './FeatherIcon';
import styles from './CodeSnippet.module.scss';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';
import Prism from 'prism-react-renderer/prism';
import cx from 'classnames';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-ruby');

const CodeSnippet = ({
  children,
  copy,
  className,
  lineNumbers,
  fileName,
  lineHighlight,
}) => {
  const language = className.replace('language-', '');
  const formattedCode = useFormattedCode(children ?? '');
  const [copied, copyCode] = useClipboard();
  const linesToHighlight =
    lineHighlight && captureLinesToHighlight(lineHighlight);

  return (
    <div>
      <div className={styles.container}>
        <Highlight
          {...defaultProps}
          theme={github}
          code={formattedCode.trim()}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className={styles.codeContainer} style={style}>
              <code>
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className={
                      lineHighlight &&
                      cx({
                        [styles.highlight]: linesToHighlight.includes(i + 1),
                      })
                    }
                  >
                    {lineNumbers !== 'false' && (
                      <span className={styles.lineNumber}>{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
      {(copy !== 'false' || fileName) && (
        <div className={styles.bottomBar}>
          <div className={styles.fileName}>
            {fileName && (
              <MiddleEllipsis>
                <span title={fileName}>{fileName}</span>
              </MiddleEllipsis>
            )}
          </div>
          {copy !== 'false' && (
            <Button
              className={styles.copyButton}
              type="button"
              onClick={() => copyCode(formattedCode.trim())}
              variant={Button.VARIANT.PLAIN}
            >
              <FeatherIcon
                name="copy"
                size="1rem"
                className={styles.copyIcon}
              />
              {copied ? 'Copied!' : 'Copy output'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

const captureLinesToHighlight = (str) => {
  const range = (a, b) => [...Array(b + 1).keys()].slice(a);

  const groups = str.split(',');

  const singles = groups.filter((g) => !g.includes('-')).map(Number);

  const rangeSingles = groups
    .filter((g) => g.includes('-'))
    .map((range) => range.split('-').map(Number))
    .reduce((acc, [a, b]) => [...acc, ...range(a, b)], []);

  return [...new Set([...singles, ...rangeSingles])];
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  copy: PropTypes.string,
  fileName: PropTypes.string,
  lineNumbers: PropTypes.string,
  lineHighlight: PropTypes.string,
};

CodeSnippet.defaultProps = {
  className: 'language-javascript',
  copy: 'true',
  lineNumbers: 'true',
};

export default CodeSnippet;
