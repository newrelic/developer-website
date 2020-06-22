import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import FeatherIcon from './FeatherIcon';
import styles from './CodeSnippet.module.scss';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';
import cx from 'classnames';

const CodeSnippet = ({
  children,
  copy,
  className,
  lineNumbers,
  lineHighlight,
}) => {
  const language = className.replace('language-', '');
  const formattedCode = useFormattedCode(children ?? '');
  const [copied, copyCode] = useClipboard();
  const linesToHighlight =
    lineHighlight && captureLinesToHighlight(lineHighlight.split(','));

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
      {copy !== 'false' && (
        <div className={styles.copyBar}>
          <button type="button" onClick={() => copyCode(formattedCode.trim())}>
            <FeatherIcon name="copy" size="1rem" className={styles.copyIcon} />
            {copied ? 'Copied!' : 'Copy output'}
          </button>
        </div>
      )}
    </div>
  );
};

const captureLinesToHighlight = (lineArr) => {
  const lineNumbers = lineArr
    .filter((line) => !line.includes('-'))
    .map((number) => Number(number));

  const lineNumberSet = new Set(lineNumbers);

  const ranges = lineArr.filter((line) => line.includes('-'));

  ranges.forEach((range) => {
    const rangeStart = Number(range[0]);
    const rangeEnd = Number(range[2]);
    const rangeArr = Array.from(
      Array(rangeEnd - rangeStart + 1),
      (_, i) => i + rangeStart
    );
    rangeArr.forEach((number) => lineNumberSet.add(number));
  });
  return Array.from(lineNumberSet);
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.string,
  className: PropTypes.string,
  lineNumbers: PropTypes.string,
  lineHighlight: PropTypes.string,
};

CodeSnippet.defaultProps = {
  copy: 'true',
  lineNumbers: 'true',
  className: 'language-javascript',
};

export default CodeSnippet;
