import React, { useState, useRef, Suspense, useEffect } from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { css } from '@emotion/core';
import root from 'react-shadow';
import { CSS_BUNDLE, SDK_VARS } from '../utils/sdk';
import NR1Logo from '../components/NR1Logo';
import PlaygroundSidebar from '../components/PlaygroundSidebar';
import PlaygroundSidebarToggle from '../components/PlaygroundSidebarToggle';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <div></div>
  }
}
`;

const Editor = React.lazy(() => import('@monaco-editor/react'));

const SdkPlayground = () => {
  const [code, setCode] = useState(defaultCode);
  const [showSidebar, setShowSidebar] = useState(false);
  const [editorKey, setEditorKey] = useState(null);
  const monaco = useRef(null);
  const sdk = window.__NR1_SDK__?.default ?? {};

  const [isFront, setIsFront] = useState(false);

  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, [isFront]);

  if (!isFront) return null;

  if (typeof window === 'undefined') global.window = {};

  if (!sdk) return null;

  const handleEditorDidMount = (editor, monaco) => {
    editor && editor.focus();
    Editor && monacoConfig(monaco, sdk);
    window.addEventListener('resize', updateWindowDimensions);
  };

  const updateWindowDimensions = () => {
    setEditorKey(`${window.innerWidth}`);
  };

  const onEditorChange = (value) => {
    setCode(value);
  };

  const onPlaygroundSubmit = (component, propTypes) => {
    const { editor } = monaco.current;
    const edit = [`<${component}`];
    Object.keys(propTypes).forEach((prop) => {
      edit.push(`${prop}={${propTypes[prop]}}`);
    });

    edit.push(`></${component}>`);

    editor.executeEdits('', [
      {
        range: {
          startLineNumber: editor.getPosition().lineNumber,
          startColumn: editor.getPosition().column,
          endLineNumber: editor.getPosition().lineNumber,
          endColumn: editor.getPosition().column,
        },
        text: edit.join(' '),
      },
    ]);
  };

  const toggleSidebar = () => {
    const num = Math.random() * 10;
    setShowSidebar(!showSidebar);
    setEditorKey(`${window.innerWidth} ${num}`);
  };

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
                <div
                  css={css`
                    margin-left: 1rem;
                  `}
                >
                  <LivePreview />
                </div>
              </div>
            </root.div>
            {/* <LiveError /> */}

            <Suspense fallback={<div>Loading...</div>}>
              <Editor
                height="350px"
                language="javascript"
                value={code}
                theme="vs-dark"
                options={{ selectOnLineNumbers: true, automaticLayout: true }}
                editorDidMount={handleEditorDidMount}
                onChange={onEditorChange}
                ref={monaco}
                key={editorKey}
              />
            </Suspense>
          </div>
          <PlaygroundSidebarToggle code={code} onClickHandler={toggleSidebar} />
          {showSidebar && (
            <PlaygroundSidebar onPlaygroundSubmit={onPlaygroundSubmit} />
          )}
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
      insertText: `${component}></${component}>`,
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
