import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import formatCode from '../utils/formatCode';
import github from 'prism-react-renderer/themes/github';
import { LiveEditor, LiveError, LiveProvider, LivePreview } from 'react-live';
import styles from './ComponentExample.module.scss';

const TRAILING_SEMI = /;\s*$/;

const ComponentExample = ({ className, example }) => (
  <div className={cx(styles.container, className)}>
    <h3 className={styles.title}>{example.label}</h3>
    <LiveProvider
      scope={window.__NR1_SDK__.default}
      code={formatCode(example.sourceCode).replace(TRAILING_SEMI, '')}
      theme={github}
    >
      <LivePreview className={styles.preview} />
      <LiveEditor />
      <LiveError className={styles.error} />
    </LiveProvider>
  </div>
);

ComponentExample.propTypes = {
  className: PropTypes.string,
  example: PropTypes.shape({
    label: PropTypes.string.isRequired,
    sourceCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComponentExample;
