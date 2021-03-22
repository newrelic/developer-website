import React, { useMemo, useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import HighlightedCode from './HighlightedCode';
import { LivePreview, LiveProvider } from 'react-live';
import Editor from 'react-simple-code-editor';
import { SDK_VARS } from '../../utils/sdk';
import root from 'react-shadow';
import { useStaticQuery, graphql } from 'gatsby';
import { Button } from '@newrelic/gatsby-theme-newrelic';

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

const CodePreview = ({ code, onChange, onAdd }) => {
  const { newRelicSdk } = useStaticQuery(graphql`
    query {
      newRelicSdk {
        assets {
          css
        }
      }
    }
  `);
  const [stylesLoaded, setStylesLoaded] = useState(false);

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
        `}
      >
        <link
          rel="stylesheet"
          href={newRelicSdk.assets.css}
          onLoad={() => setStylesLoaded(true)}
        />
        <style type="text/css">{SDK_VARS}</style>

        {stylesLoaded && <LivePreview />}
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
              padding: 1rem;
              background-color: var(--color-nord-0);
              border-radius: 0.25rem;
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
              theme="vs-dark"
            />
          </div>
          <div
            css={css`
              color: var(--color-nord-6);
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: var(--color-nord-1);
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
              padding: 0 1rem;
              font-size: 0.75rem;
              .light-mode & {
                color: var(--color-nord-0);
                background: var(--color-nord-4);
              }
            `}
          >
            <div
              css={css`
                font-family: var(--code-font);
                white-space: nowrap;
                overflow: hidden;
                padding-right: 0.5rem;
              `}
            />
            <Button
              type="button"
              variant={Button.VARIANT.LINK}
              onClick={() => onAdd(code)}
              size={Button.SIZE.SMALL}
              css={css`
                white-space: nowrap;
              `}
            >
              Add to playground
            </Button>
          </div>
        </LiveProvider>
      </NerdletStateContext.Provider>
    </PlatformStateContext.Provider>
  );
};

CodePreview.propTypes = {
  code: PropTypes.string,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
};

export default CodePreview;
