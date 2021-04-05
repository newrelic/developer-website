import React, { useState, Suspense, useRef } from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { css } from '@emotion/core';
import PlaygroundToggle from '../PlaygroundToggle';
import PlaygroundChrome from './Chrome';
import { Icon, useClipboard } from '@newrelic/gatsby-theme-newrelic';
import useCustomMonaco from './useCustomMonaco';
import ComponentList from '../PlaygroundSideview/ComponentList';
import formatCode from '../../utils/formatCode';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <div></div>
  }
}
`;

const Editor = React.lazy(() => import('@monaco-editor/react'));

const ComponentPlayground = () => {
  const [code, setCode] = useState(defaultCode);
  const [showSidebar, setShowSidebar] = useState(false);
  const [copied, copy] = useClipboard();
  const editorRef = useRef(null);

  useCustomMonaco();

  if (typeof window === 'undefined') global.window = {};
  const sdk = window.__NR1_SDK__?.default ?? {};
  if (!sdk) return null;

  const handleOnMount = (editor) => {
    editorRef.current = editor;
  };

  const onEditorChange = (value) => {
    setCode(value);
  };

  const handleAdd = (insertCode) => {
    const editor = editorRef.current;
    editor.executeEdits('', [
      {
        range: {
          startLineNumber: editor.getPosition().lineNumber,
          startColumn: editor.getPosition().column,
          endLineNumber: editor.getPosition().lineNumber,
          endColumn: editor.getPosition().column,
        },
        text: insertCode,
      },
    ]);
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
            <PlaygroundChrome>
              <LivePreview />
            </PlaygroundChrome>
            <div
              css={css`
                display: flex;
                flex-direction: row;
              `}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Editor
                  height="340px"
                  language="javascript"
                  value={code}
                  theme="nightOwl"
                  options={{
                    selectOnLineNumbers: true,
                    automaticLayout: true,
                    fixedOverflowWidgets: true,
                    overflowWidgetsDomNode: null,
                  }}
                  onChange={onEditorChange}
                  onMount={handleOnMount}
                  width={showSidebar ? window.innerWidth - 480 : '100%'}
                />
              </Suspense>
              <div
                css={css`
                  height: 340px;
                  display: flex;
                  flex-direction: row;
                `}
              >
                <PlaygroundToggle>
                  <PlaygroundToggle.Item
                    onClick={() => setShowSidebar(!showSidebar)}
                    alt="Browse and Configure Components"
                  >
                    <Icon size="1.25rem" name="fe-edit" />
                  </PlaygroundToggle.Item>
                  <PlaygroundToggle.Item
                    alt="Copy Code"
                    onClick={() => copy(code)}
                  >
                    {copied ? (
                      <Icon size="1.25rem" name="fe-thumbsup" />
                    ) : (
                      <Icon size="1.25rem" name="fe-copy" />
                    )}
                  </PlaygroundToggle.Item>
                  <PlaygroundToggle.Item
                    onClick={() => setCode(formatCode(code))}
                    alt="Format Code"
                  >
                    <Icon size="1.25rem" name="fe-code" />
                  </PlaygroundToggle.Item>
                  <PlaygroundToggle.Item
                    alt="Read SDK Documentation"
                    to="https://developer.newrelic.com/explore-docs/intro-to-sdk"
                  >
                    <Icon size="1.25rem" name="fe-book-open" />
                  </PlaygroundToggle.Item>
                </PlaygroundToggle>
                {showSidebar && <ComponentList onAdd={handleAdd} />}
              </div>
            </div>
          </div>
        </div>
      </LiveProvider>
    </>
  );
};

export default ComponentPlayground;
