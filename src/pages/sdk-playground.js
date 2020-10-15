import React, { useState, useRef, useEffect, Suspense } from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { css } from '@emotion/core';
import root from 'react-shadow';
import { CSS_BUNDLE, SDK_VARS } from '../utils/sdk';
import NR1Logo from '../components/NR1Logo';
// import PlaygroundSidebar from '../components/PlaygroundSidebar';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <Button
    onClick={() => alert('Hello World!')}
    type={Button.TYPE.PRIMARY}
    iconType={Button.ICON_TYPE.DOCUMENTS__DOCUMENTS__NOTES__A_ADD}
  >
    Click Me
  </Button>;
  }
}
`;

const Editor = React.lazy(() => import('react-monaco-editor'));

const SdkPlayground = () => {
  const [code, setCode] = useState(defaultCode);
  const monaco = useRef(null);
  const sdk = window.__NR1_SDK__?.default ?? {};
  const [isFront, setIsFront] = useState(false);

  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, []);

  if (!isFront) return null;

  if (typeof window === 'undefined') global.window = {};

  if (!sdk) return null;

  const handleEditorDidMount = (editor, monaco) => {
    editor.focus();
    Editor && monacoConfig(monaco, sdk);
  };

  const onEditorChange = (value) => {
    setCode(value);
  };

  // const onPlaygroundSubmit = (component, propTypes) => {
  //   const { editor } = monaco.current;

  //   const edit = [`<${component}`];
  //   Object.keys(propTypes).forEach((prop) => {
  //     edit.push(`${prop}={${propTypes[prop]}}`);
  //   });

  //   edit.push(`></${component}>`);

  //   editor.executeEdits('', [
  //     {
  //       range: {
  //         startLineNumber: editor.getPosition().lineNumber,
  //         startColumn: editor.getPosition().column,
  //         endLineNumber: editor.getPosition().lineNumber,
  //         endColumn: editor.getPosition().column,
  //       },
  //       text: edit.join(' '),
  //     },
  //   ]);
  // };

  return (
    <>
      <LiveProvider code={code} scope={sdk}>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            height: 100vh;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            `}
          >
            <root.div
              css={css`
                flex: 1;
                background: white;
              `}
            >
              <link rel="stylesheet" href={CSS_BUNDLE} />
              <style type="text/css">{SDK_VARS}</style>
              <div className="body">
                <header className="nr1-header">
                  <a
                    className="nr1-logo-link"
                    href="https://one.newrelic.com?nerdpacks=local"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NR1Logo />
                  </a>
                </header>
                <div className="nr1-app-header">
                  <h3 className="nr1-header-title">My Awesome Nerdpack</h3>
                  <hr className="nr1-divider" />
                </div>
                <LivePreview />
              </div>
            </root.div>
            <LiveError />
            <Suspense fallback={<div>Loading...</div>}>
              <Editor
                height="350px"
                language="javascript"
                value={code}
                theme="vs-dark"
                options={{ selectOnLineNumbers: true }}
                editorDidMount={handleEditorDidMount}
                onChange={onEditorChange}
                ref={monaco}
              />
            </Suspense>
          </div>
          {/* <div
            css={css`
              width: 400px;
              overflow: scroll;
            `}
          >
            <ul>
              <PlaygroundSidebar
                onClick={onPlaygroundClick}
                onPlaygroundSubmit={onPlaygroundSubmit}
              />
            </ul>
          </div> */}
        </div>
      </LiveProvider>
    </>
  );
};

const monacoConfig = (monaco, sdk) => {
  monaco.languages.registerCompletionItemProvider('javascript', {
    triggerCharacters: ['<', ' ', '/'],
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      return {
        suggestions: createComponentCompletion(range, monaco, sdk),
      };
    },
  });
  monaco.languages.registerHoverProvider('javascript', {
    provideHover: (model, position, token) => {
      const source = new monaco.CancellationTokenSource(token);
      source.cancel();
      if (!model.getWordAtPosition(position)) return null;
      const word = model.getWordAtPosition(position).word;
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      if (Object.keys(sdk).includes(word)) {
        return createHoverProvider(range, sdk, word);
      }
      return null;
    },
  });
};

const createComponentCompletion = (range, monaco, sdk) => {
  return Object.keys(sdk).map((component) => {
    return {
      label: component,
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: sdk[component]?.__docs__?.text || '',
      insertText: `<${component}></${component}>`,
      range: range,
    };
  });
};

const createHoverProvider = (range, sdk, component) => {
  return {
    range: range,
    contents: [
      {
        value:
          `### ${component} Example Implementation \n \`\`\`javascript\n${sdk[component]?.__docs__?.tags.examples[0].sourceCode}\n\`\`\`` ||
          '',
      },
      {
        value: `[Learn more here](https://developer.newrelic.com/components/${component.toLowerCase()})`,
      },
    ],
  };
};

export default SdkPlayground;
