import React from 'react';
import PropTypes from 'prop-types';
import formatCode from '../utils/formatCode';
import github from 'prism-react-renderer/themes/github';
import { LiveEditor, LiveError, LiveProvider, LivePreview } from 'react-live';

const TRAILING_SEMI = /;\s*$/;

const ComponentExample = ({ className, example }) => (
  <div className={className}>
    <h3>{example.label}</h3>
    <LiveProvider
      scope={window.__NR1_SDK__.default}
      code={formatCode(example.sourceCode).replace(TRAILING_SEMI, '')}
      theme={github}
    >
      <LivePreview />
      <LiveEditor />
      <LiveError />
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
