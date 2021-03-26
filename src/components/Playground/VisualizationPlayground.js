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
import VizPropInput from './VizPropInput';

const initialInputProps = JSON.parse(nr1JSON).configuration.reduce(
  (acc, { name }) => acc.set(name, ''),
  new Map()
);

const initialVisualizationName = JSON.parse(nr1JSON).displayName;

const initialFiles = {
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

const Editor = React.lazy(() => import('@monaco-editor/react'));

const buildCodeString = ({ code, visualizationName, inputProps }) => {
  const inputPropsString = Array.from(inputProps.entries()).reduce(
    (acc, [name, value]) => {
      return `${acc} ${name}={'${value}'}`;
    },
    ''
  );
  return `${code}
    
  render(<${visualizationName}Visualization ${inputPropsString}/>)
  `;
};

const VisualizationPlayground = () => {
  const [fileName, setFileName] = useState('index.js');
  const [files, setFiles] = useState(initialFiles);
  const [inputProps, setInputProps] = useState(initialInputProps);
  const [visualizationName, setVisualizationName] = useState(
    initialVisualizationName
  );
  const [nr1JsonError, setNr1JsonError] = useState(null);
  const [code, setCode] = useState(
    buildCodeString({
      code: files['index.js'].value,
      visualizationName,
      inputProps,
    })
  );

  if (typeof window === 'undefined') global.window = {};
  const sdk = window.__NR1_SDK__?.default ?? {};
  if (!sdk) return null;

  const {
    PlatformStateContext,
    NerdletStateContext,
  } = window.__NR1_SDK__.default;

  const scope = {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    ...sdk,
  };

  const file = files[fileName];

  const handleOnChange = (code) => {
    const currentFile = files[fileName];
    currentFile.value = code;
    setFiles({
      currentFile,
      ...files,
    });
    setCode(
      buildCodeString({
        code: files['index.js'].value,
        visualizationName,
        inputProps,
      })
    );
  };

  const handleVizInputChange = ({ inputProp, code }) => {
    const newInputProps = inputProps;
    inputProps.set(inputProp, code);
    setInputProps(newInputProps);
    setCode(
      buildCodeString({
        code: files['index.js'].value,
        visualizationName,
        inputProps: newInputProps,
      })
    );
  };

  const handleNR1JsonUpdate = () => {
    const json = files['nr1.json'].value;
    try {
      const newInputProps = JSON.parse(json).configuration.reduce(
        (acc, { name }) => {
          if (inputProps.has(name)) {
            const value = inputProps.get(name);
            acc.set(name, value);
            return acc;
          } else {
            acc.set(name, '');
            return acc;
          }
        },
        new Map()
      );
      const displayName = JSON.parse(nr1JSON).displayName;
      setInputProps(newInputProps);
      setVisualizationName(displayName);
      setNr1JsonError(null);
    } catch (e) {
      setNr1JsonError(e);
    }
  };

  return (
    <>
      <LiveProvider scope={scope} code={code} noInline>
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <div
            css={css`
              flex-grow: 1;
              width: 50%;
              background-color: white;
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                height: 60%;
              `}
            >
              <PlatformStateContext.Provider value={platformStateContextMock}>
                <NerdletStateContext.Provider value={nerdletStateContextMock}>
                  <LivePreview />
                  <LiveError />
                  {nr1JsonError && <div>{nr1JsonError.toString()}</div>}
                </NerdletStateContext.Provider>
              </PlatformStateContext.Provider>
            </div>
            <div
              css={css`
                flex-grow: 1;
                padding: 1rem;
                background-color: var(--secondary-background-color);
              `}
            >
              <h3>Configure Props</h3>
              <div
                css={css`
                  display: grid;
                  grid-template-columns: auto 1fr;
                  gap: 0.5rem 0.5rem;
                `}
              >
                {Array.from(inputProps.keys()).map((inputProp) => {
                  return (
                    <VizPropInput
                      key={inputProp}
                      propName={inputProp}
                      onChange={(code) =>
                        handleVizInputChange({ inputProp, code })
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 50%;
            `}
          >
            <div>
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
              <Button
                variant={Button.VARIANT.PRIMARY}
                onClick={handleNR1JsonUpdate}
              >
                update nr1.json
              </Button>
            </div>
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <Editor
                  height="100vh"
                  language={file.language}
                  path={file.name}
                  value={file.value}
                  onChange={(code) => handleOnChange(code)}
                  theme="nightOwl"
                  options={{
                    selectOnLineNumbers: true,
                    automaticLayout: true,
                    fixedOverflowWidgets: true,
                    overflowWidgetsDomNode: null,
                  }}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </LiveProvider>
    </>
  );
};

export default VisualizationPlayground;
