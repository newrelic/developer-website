import React, { useMemo, useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import HighlightedCode from './HighlightedCode';
import { LivePreview, LiveProvider } from 'react-live';
import Editor from 'react-simple-code-editor';
import { SDK_VARS } from '../../utils/sdk';
import root from 'react-shadow';
import { useStaticQuery, graphql } from 'gatsby';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import formatCode from '../../utils/formatCode';

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
