import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';
import CodeEditor from './CodeEditor';
import CodeHighlight from './CodeHighlight';
import FeatherIcon from './FeatherIcon';
import MiddleEllipsis from 'react-middle-ellipsis';
import { LiveError, LivePreview, LiveProvider } from 'react-live';
import styles from './CodeBlock.module.scss';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';

const defaultComponents = {
  Preview: LivePreview,
};

const CodeBlock = ({
  children,
  components: componentOverrides = {},
  copy,
  live,
  highlightedLines,
  fileName,
  language,
  lineNumbers,
  preview,
  scope,
  formatOptions,
}) => {
  const components = { ...defaultComponents, ...componentOverrides };
  const formattedCode = useFormattedCode(children.trim(), formatOptions);
  const [copied, copyCode] = useClipboard();
  const [code, setCode] = useState(formattedCode);

  useEffect(() => {
    setCode(formattedCode);
  }, [formattedCode]);

  return (
    <LiveProvider code={code} scope={scope}>
      {preview && <components.Preview className={styles.preview} />}
      <div className={cx(styles.container, { [styles.withPreview]: preview })}>
        <div className={styles.scrollContainer}>
          {live ? (
            <CodeEditor
              value={code}
              language={language}
              lineNumbers={lineNumbers}
              onChange={setCode}
            />
          ) : (
            <CodeHighlight
              highlightedLines={highlightedLines}
              language={language}
              lineNumbers={lineNumbers}
            >
              {code}
            </CodeHighlight>
          )}
        </div>

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
              onClick={() => copyCode(code)}
              size={Button.SIZE.SMALL}
            >
              <FeatherIcon name="copy" className={styles.copyButtonIcon} />
              {copied ? 'Copied' : 'Copy output'}
            </Button>
          </div>
        )}
      </div>
      {(live || preview) && <LiveError className={styles.liveError} />}
    </LiveProvider>
  );
};

CodeBlock.propTypes = {
  fileName: PropTypes.string,
  components: PropTypes.shape({
    Preview: PropTypes.elementType,
  }),
  copy: PropTypes.bool,
  children: PropTypes.string.isRequired,
  formatOptions: PropTypes.object,
  highlightedLines: PropTypes.string,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  live: PropTypes.bool,
  preview: PropTypes.bool,
  scope: PropTypes.object,
};

CodeBlock.defaultProps = {
  copy: true,
  lineNumbers: false,
  live: false,
  preview: false,
};

export default CodeBlock;
