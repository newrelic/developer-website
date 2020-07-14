import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ReferenceExample.module.scss';
import ReferencePreview from './ReferencePreview';
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

  const scope = useMemo(
    () => ({
      ...window.__NR1_SDK__.default,
      navigation: {
        getOpenLauncherLocation: () => {},
      },
    }),
    []
  );

  const Preview = useCallback(
    ({ className }) => (
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
