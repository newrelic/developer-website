import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import CodeEditor from './CodeEditor';
import CodeHighlight from './CodeHighlight';
import FeatherIcon from './FeatherIcon';
import MiddleEllipsis from 'react-middle-ellipsis';
import { LiveError, LiveProvider } from 'react-live';
import styles from './CodeBlock.module.scss';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';

const CodeBlock = ({
  children,
  copy,
  live,
  fileName,
  language,
  lineNumbers,
}) => {
  const formattedCode = useFormattedCode(children.trim());
  const [copied, copyCode] = useClipboard();

  return (
    <LiveProvider code={formattedCode}>
      <div className={styles.container}>
        {live ? (
          <CodeEditor
            value={formattedCode}
            language={language}
            lineNumbers={lineNumbers}
          />
        ) : (
          <CodeHighlight language={language} lineNumbers={lineNumbers}>
            {formattedCode}
          </CodeHighlight>
        )}

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
              onClick={() => copyCode(formattedCode)}
              size={Button.SIZE.SMALL}
            >
              <FeatherIcon name="copy" className={styles.copyButtonIcon} />
              {copied ? 'Copied' : 'Copy output'}
            </Button>
          </div>
        )}
      </div>
      {live && <LiveError className={styles.liveError} />}
    </LiveProvider>
  );
};

CodeBlock.propTypes = {
  fileName: PropTypes.string,
  copy: PropTypes.bool,
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  live: PropTypes.bool,
};

CodeBlock.defaultProps = {
  copy: true,
  lineNumbers: false,
  live: false,
};

export default CodeBlock;
