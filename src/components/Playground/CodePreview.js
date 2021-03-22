import React, { useMemo } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import HighlightedCode from './HighlightedCode';
import { LivePreview, LiveProvider } from 'react-live';
import Editor from 'react-simple-code-editor';
import { CSS_BUNDLE, SDK_VARS } from '../../utils/sdk';
import root from 'react-shadow';

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

const CodePreview = ({ code, onChange }) => {
  const {
    PlatformStateContext,
    NerdletStateContext,
  } = window.__NR1_SDK__.default;

  const scope = useMemo(
    () => ({
      ...window.__NR1_SDK__.default,
      navigation: {
        getOpenLauncherLocation: () => {},
      },
    }),
    []
  );

  const Preview = () => {
    return (
      <root.div
        css={css`
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          margin-top: 1rem;
        `}
      >
        <link rel="stylesheet" href={CSS_BUNDLE} />
        <style type="text/css">{SDK_VARS}</style>

        <LivePreview />
      </root.div>
    );
  };

  return (
    <PlatformStateContext.Provider value={platformStateContextMock}>
      <NerdletStateContext.Provider value={nerdletStateContextMock}>
        <LiveProvider code={code} scope={scope}>
          <Preview />
          <div
            css={css`
              padding: 0.5rem;
              background-color: #011627;
            `}
          >
            <Editor
              value={code}
              highlight={(code) => <HighlightedCode>{code}</HighlightedCode>}
              onValueChange={onChange}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: '100px',
                overflow: 'scroll',
              }}
            />
          </div>
        </LiveProvider>
      </NerdletStateContext.Provider>
    </PlatformStateContext.Provider>
  );
};

CodePreview.propTypes = {
  code: PropTypes.string,
  onChange: PropTypes.func,
};

export default CodePreview;
