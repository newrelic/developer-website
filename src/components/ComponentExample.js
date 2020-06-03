import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import formatCode from '../utils/formatCode';
import github from 'prism-react-renderer/themes/github';
import { LiveEditor, LiveError, LiveProvider, LivePreview } from 'react-live';
import styles from './ComponentExample.module.scss';

const TRAILING_SEMI = /;\s*$/;

const ComponentExample = ({ className, example }) => {
  let formattedCode;

  try {
    formattedCode = formatCode(example.sourceCode).replace(TRAILING_SEMI, '');
  } catch (e) {
    formattedCode = example.sourceCode;
  }

  return (
    <div className={cx(styles.container, className)}>
      <h3 className={styles.title}>{example.label}</h3>
      <LiveProvider
        scope={{
          ...window.__NR1_SDK__.default,
          navigation: {
            // eslint-disable-next-line no-empty-function
            getOpenLauncherLocation() {},
          },
        }}
        code={formattedCode}
        theme={github}
      >
        <LivePreview className={styles.preview} />
        <LiveEditor style={{ fontSize: '0.75rem' }} />
        <LiveError className={styles.error} />
      </LiveProvider>
    </div>
  );
};

ComponentExample.propTypes = {
  className: PropTypes.string,
  example: PropTypes.shape({
    label: PropTypes.string.isRequired,
    sourceCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComponentExample;
