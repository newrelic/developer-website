import React, { useState, Suspense } from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { Button, Collapser } from '@newrelic/gatsby-theme-newrelic';
import { nr1JSON, indexJS } from './defaultVizCode';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  PieChart,
  Pie,
} from 'recharts';
import { css } from '@emotion/core';
import VizPropInput from './VizPropInput';
import { darken } from 'polished';
import useCustomMonaco from './useCustomMonaco';
import VisualizationChrome from './VisualizationChrome';

const typeMap = {
  string: `''`,
  number: '1',
  boolean: 'true',
  json: '{}',
  nrql: `'SELECT count(*) FROM Transaction'`,
};

const codeString = ({ items, name, code }) =>
  `[{${items
    .map(({ name: subName, value, type }) => {
      if (subName === name) {
        return `${subName}: ${code}`;
      }
      return `${subName}: ${value || typeMap[type] || ''}`;
    })
    .join(',')}}]`;

const initialInputProps = JSON.parse(nr1JSON).configuration.map(
  (configItem) => {
    if (configItem.items) {
      return { ...configItem, value: codeString({ items: configItem.items }) };
    } else {
      return {
        ...configItem,
        value: typeMap[configItem.type] || `null`,
      };
    }
  }
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
  const inputPropsString = inputProps.reduce((acc, { name, value }) => {
    return `${acc} ${name}={${value ?? `''`}}`;
  }, '');
  return `${code}
    
  render(<${visualizationName}Visualization ${inputPropsString}/>)
  `;
};

const VisualizationPlayground = () => {
  const [selectedFile, setSelectedFile] = useState('index.js');
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

  useCustomMonaco();

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
    RechartPieChart: PieChart,
    RechartPie: Pie,
    ...sdk,
  };

  const file = files[selectedFile];

  const handleOnChange = (code) => {
    const currentFile = files[selectedFile];
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

  const handleVizInputChange = ({ name, code }) => {
    const newInputProps = inputProps.map((prop) => {
      if (prop.name === name) {
        prop.value = code;
      }
      return prop;
    });

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
      const newInputProps = JSON.parse(json).configuration.map((prop) => {
        const oldProp = inputProps.find(({ name }) => name === prop.name);
        if (oldProp) {
          prop.value = oldProp.value;
        } else if (prop.type === 'collection') {
          prop.value = codeString({ items: prop.items });
        } else {
          prop.value = typeMap[prop.type] || `''`;
        }

        return prop;
      });
      const displayName = JSON.parse(nr1JSON).displayName;
      setInputProps([...newInputProps]);
      setVisualizationName(displayName);
      setCode(
        buildCodeString({
          code: files['index.js'].value,
          visualizationName,
          inputProps: newInputProps,
        })
      );
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
            height: 100vh;
          `}
        >
          <div
            css={css`
              flex-grow: 1;
              position: relative;
              width: 50%;

              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                flex-grow: 1;
                background-color: white;
              `}
            >
              <VisualizationChrome displayName={visualizationName}>
                <PlatformStateContext.Provider value={platformStateContextMock}>
                  <NerdletStateContext.Provider value={nerdletStateContextMock}>
                    <LivePreview />
                    <LiveError />
                    {nr1JsonError && <div>{nr1JsonError.toString()}</div>}
                  </NerdletStateContext.Provider>
                </PlatformStateContext.Provider>
              </VisualizationChrome>
            </div>

            <div
              css={css`
                position: absolute;
                bottom: 0;
                background-color: var(--primary-background-color);
                width: 100%;
              `}
            >
              <Collapser title="Configure Props">
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: auto auto 1fr;
                    gap: 0.5rem 0.5rem;
                  `}
                >
                  {inputProps.map((inputProp, key) => {
                    return (
                      <VizPropInput
                        key={key}
                        inputProp={inputProp}
                        onChange={({ name, code }) =>
                          handleVizInputChange({ name, code })
                        }
                      />
                    );
                  })}
                </div>
              </Collapser>
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
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  background: ${darken(0.05, '#2e3440')};
                `}
              >
                <div
                  css={css`
                    display: flex;
                    background: ${darken(0.05, '#2e3440')};
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;

                    .light-mode & {
                      background: var(--color-nord-4);
                    }
                  `}
                >
                  {['index.js', 'nr1.json'].map((fileName) => (
                    <button
                      key={fileName}
                      type="button"
                      onClick={() => setSelectedFile(fileName)}
                      css={css`
                        padding: 0.5rem 1rem;
                        cursor: pointer;
                        font-size: 0.75rem;
                        border: 0;
                        outline: 0;
                        color: currentColor;
                        background: ${fileName === selectedFile
                          ? 'var(--color-nord-0)'
                          : 'inherit'};

                        .light-mode & {
                          background: ${fileName === selectedFile
                            ? 'var(--color-nord-6)'
                            : 'inherit'};
                        }
                      `}
                    >
                      {fileName}
                    </button>
                  ))}
                </div>

                <div
                  css={css`
                    padding: 0.35rem;
                  `}
                >
                  <div
                    css={css`
                      opacity: ${selectedFile === 'nr1.json' ? 1 : 0};
                    `}
                  >
                    <Button
                      variant={Button.VARIANT.PRIMARY}
                      onClick={handleNR1JsonUpdate}
                      size={Button.SIZE.EXTRA_SMALL}
                    >
                      UPDATE NR1.JSON
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={css`
                position: relative;
                flex-grow: 1;
              `}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Editor
                  height="100%"
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
