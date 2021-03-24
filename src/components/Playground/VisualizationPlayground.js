import React, { useState, Suspense } from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { nr1JSON, indexJS } from './defaultVizCode';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';
import { css } from '@emotion/core';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

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

const files = {
  'nr1.json': {
    name: 'nr1.json',
    language: 'json',
    value: nr1JSON,
  },
  'index.js': {
    name: 'index.js',
    language: 'javascript',
    value: indexJS,
  },
};

const Editor = React.lazy(() => import('@monaco-editor/react'));

const VisualizationPlayground = () => {
  const [fileName, setFileName] = useState('index.js');

  if (typeof window === 'undefined') global.window = {};
  const sdk = window.__NR1_SDK__?.default ?? {};
  if (!sdk) return null;

  const {
    PlatformStateContext,
    NerdletStateContext,
  } = window.__NR1_SDK__.default;

  const file = files[fileName];

  const scope = {
    ...sdk,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    vizProps: {
      fill: 'blue',
      stroke: 'black',
      nrqlQueries: [
        { accountId: 1, query: 'SELECT count(*) FROM Transaction' },
      ],
    },
  };

  console.log(scope);

  return (
    <>
      <LiveProvider code={files['index.js'].value} scope={scope}>
        <Button
          variant={Button.VARIANT.NORMAL}
          onClick={() => setFileName('index.js')}
          disabled={fileName === 'index.js'}
        >
          index.js
        </Button>
        <Button
          variant={Button.VARIANT.NORMAL}
          onClick={() => setFileName('nr1.json')}
          disabled={fileName === 'nr1.json'}
        >
          nr1.json
        </Button>
        <div
          css={css`
            height: 300px;
            overflow: scroll;
          `}
        >
          <PlatformStateContext.Provider value={platformStateContextMock}>
            <NerdletStateContext.Provider value={nerdletStateContextMock}>
              <LivePreview />
            </NerdletStateContext.Provider>
          </PlatformStateContext.Provider>
        </div>

        <LiveError />
        <div>Here</div>

        <Suspense fallback={<div>Loading...</div>}>
          <Editor
            height="100vh"
            language={file.language}
            path={file.name}
            value={file.value}
            theme="vs-dark"
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              fixedOverflowWidgets: true,
              overflowWidgetsDomNode: null,
            }}
          />
        </Suspense>
      </LiveProvider>
    </>
  );
};

export default VisualizationPlayground;
