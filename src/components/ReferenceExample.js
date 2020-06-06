import React from 'react';
import PropTypes from 'prop-types';
import formatCode from '../utils/formatCode';
import github from 'prism-react-renderer/themes/github';
import { LiveEditor, LiveError, LiveProvider } from 'react-live';
import styles from './ReferenceExample.module.scss';
import ComponentPreview from './ComponentPreview';

const platformStateContextMock = {
  timeRange: {
    begin_time: null,
    duration: 1800000,
    end_time: null,
  },
};

const nerdletStateContextMock = {
  entityGuid: 'MTIzNDU2fEZPT3xCQVJ8OTg3NjU0MzIx',
};

const TRAILING_SEMI = /;\s*$/;

const ReferenceExample = ({
  className,
  example,
  useToastManager,
  previewStyle,
}) => {
  const {
    PlatformStateContext,
    NerdletStateContext,
  } = window.__NR1_SDK__.default;
  const { live } = example.options;
  let formattedCode;

  try {
    formattedCode = formatCode(example.sourceCode).replace(TRAILING_SEMI, '');
  } catch (e) {
    formattedCode = example.sourceCode;
  }

  return (
    <PlatformStateContext.Provider value={platformStateContextMock}>
      <NerdletStateContext.Provider value={nerdletStateContextMock}>
        <div className={className}>
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
            disabled={!live}
          >
            {live && (
              <ComponentPreview
                className={styles.preview}
                style={previewStyle}
                useToastManager={useToastManager}
              />
            )}
            <LiveEditor style={{ fontSize: '0.75rem' }} />
            {live && <LiveError className={styles.error} />}
          </LiveProvider>
        </div>
      </NerdletStateContext.Provider>
    </PlatformStateContext.Provider>
  );
};

ReferenceExample.propTypes = {
  className: PropTypes.string,
  example: PropTypes.shape({
    label: PropTypes.string.isRequired,
    sourceCode: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
  }).isRequired,
  useToastManager: PropTypes.bool,
  previewStyle: PropTypes.object,
};

export default ReferenceExample;
