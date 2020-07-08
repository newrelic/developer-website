import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import formatCode from '../utils/formatCode';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import { LiveEditor, LiveError, LiveProvider } from 'react-live';
import styles from './ReferenceExample.module.scss';
import ReferencePreview from './ReferencePreview';
import useDarkMode from 'use-dark-mode';
import CodeBlock from './CodeBlock';

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

const USE_CODE_BLOCK = true;

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
  const darkMode = useDarkMode();
  const scope = useMemo(
    () => ({
      ...window.__NR1_SDK__.default,
      navigation: {
        // eslint-disable-next-line no-empty-function
        getOpenLauncherLocation() {},
      },
    }),
    []
  );

  try {
    formattedCode = formatCode(example.sourceCode).replace(TRAILING_SEMI, '');
  } catch (e) {
    formattedCode = example.sourceCode;
  }

  const Preview = useMemo(
    () => ({ className }) => (
      <ReferencePreview
        className={className}
        style={previewStyle}
        useToastManager={useToastManager}
      />
    ),
    [useToastManager, previewStyle]
  );

  return (
    <PlatformStateContext.Provider value={platformStateContextMock}>
      <NerdletStateContext.Provider value={nerdletStateContextMock}>
        <div className={className}>
          <h3 className={styles.title}>{example.label}</h3>
          {USE_CODE_BLOCK ? (
            <CodeBlock
              lineNumbers
              language="jsx"
              live={live}
              preview={live}
              scope={scope}
              components={{ Preview }}
            >
              {example.sourceCode}
            </CodeBlock>
          ) : (
            <LiveProvider
              scope={scope}
              code={formattedCode}
              theme={darkMode.value ? darkTheme : lightTheme}
              disabled={!live}
            >
              {live && (
                <ReferencePreview
                  className={styles.preview}
                  style={previewStyle}
                  useToastManager={useToastManager}
                />
              )}
              <LiveEditor
                style={{
                  fontSize: '0.75rem',
                  maxHeight: '30rem',
                  overflow: 'auto',
                }}
              />
              {live && <LiveError className={styles.error} />}
            </LiveProvider>
          )}
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
