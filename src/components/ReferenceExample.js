import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReferencePreview from './ReferencePreview';
import { graphql } from 'gatsby';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';

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
  const { label, live, preview, sourceCode } = example;

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
          <h3
            css={css`
              font-weight: bold;
              font-size: 1.25rem;
              margin-bottom: 1rem;
            `}
          >
            {label}
          </h3>
          <CodeBlock
            lineNumbers
            language="jsx"
            live={live}
            preview={preview}
            scope={scope}
            components={{ Preview }}
          >
            {sourceCode}
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
    live: PropTypes.bool.isRequired,
    preview: PropTypes.bool.isRequired,
  }).isRequired,
  useToastManager: PropTypes.bool,
  previewStyle: PropTypes.object,
};

export const query = graphql`
  fragment ReferenceExample_example on NewRelicSdkExample {
    label
    sourceCode
    live
    preview
  }
`;

export default ReferenceExample;
